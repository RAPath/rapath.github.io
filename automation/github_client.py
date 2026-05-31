# =============================================================================
# github_client.py — GitHub API helper (Issues + private repo commits)
# =============================================================================
import base64
import requests
from config import GITHUB_TOKEN, AUDIT_PAT, MAIN_REPO, AUDIT_REPO

GH_API = "https://api.github.com"


def _headers(token: str) -> dict:
    return {
        "Authorization": f"Bearer {token}",
        "Accept": "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28"
    }


# ---------------------------------------------------------------------------
# ISSUES (Project 1 & 2) — uses GITHUB_TOKEN
# ---------------------------------------------------------------------------

def issue_exists(title: str) -> bool:
    """Check if an open or closed issue with this exact title already exists."""
    url = f"{GH_API}/search/issues"
    params = {"q": f'repo:{MAIN_REPO} is:issue "{title}"'}
    r = requests.get(url, headers=_headers(GITHUB_TOKEN), params=params, timeout=30)
    if r.status_code == 200:
        return r.json().get("total_count", 0) > 0
    return False


def create_issue(title: str, body: str, labels: list[str]) -> dict | None:
    """Create a GitHub issue. Returns the created issue or None if it already exists."""
    if issue_exists(title):
        print(f"  [SKIP] Issue already exists: {title[:60]}")
        return None

    url = f"{GH_API}/repos/{MAIN_REPO}/issues"
    payload = {"title": title, "body": body, "labels": labels}
    r = requests.post(url, headers=_headers(GITHUB_TOKEN), json=payload, timeout=30)
    if r.status_code == 201:
        issue = r.json()
        print(f"  [CREATED] #{issue['number']}: {title[:60]}")
        return issue
    else:
        print(f"  [ERROR] Failed to create issue: {r.status_code} {r.text[:200]}")
        return None


def ensure_labels(label_definitions: list[dict]):
    """Create labels if they don't already exist."""
    url = f"{GH_API}/repos/{MAIN_REPO}/labels"
    existing = {l["name"] for l in requests.get(url, headers=_headers(GITHUB_TOKEN), timeout=30).json()}
    for label in label_definitions:
        if label["name"] not in existing:
            requests.post(url, headers=_headers(GITHUB_TOKEN), json=label, timeout=30)
            print(f"  Created label: {label['name']}")
        else:
            print(f"  Label exists: {label['name']}")


# ---------------------------------------------------------------------------
# AUDIT REPORTS (Project 1) — commits to private repo using AUDIT_PAT
# ---------------------------------------------------------------------------

def commit_report_to_private_repo(filename: str, content: str, message: str):
    """Commit a file to the private RAPath/audit-reports repo."""
    url = f"{GH_API}/repos/{AUDIT_REPO}/contents/{filename}"

    # Check if file already exists (need SHA to update)
    sha = None
    r = requests.get(url, headers=_headers(AUDIT_PAT), timeout=30)
    if r.status_code == 200:
        sha = r.json().get("sha")

    payload = {
        "message": message,
        "content": base64.b64encode(content.encode()).decode()
    }
    if sha:
        payload["sha"] = sha

    r = requests.put(url, headers=_headers(AUDIT_PAT), json=payload, timeout=30)
    if r.status_code in (200, 201):
        print(f"  Report committed to {AUDIT_REPO}/{filename}")
    else:
        print(f"  [ERROR] Commit failed: {r.status_code} {r.text[:200]}")
