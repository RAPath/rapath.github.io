# =============================================================================
# delete_all_issues.py — Deletes ALL open issues from RAPath/rapath.github.io
# Run ONCE to clean up. Uses GraphQL API (required for deletion).
#
# Usage (PowerShell):
#   $env:GITHUB_TOKEN = "your_pat_with_repo_scope"
#   python delete_all_issues.py
# =============================================================================
import requests
import os

GITHUB_TOKEN = os.environ.get("GITHUB_TOKEN", "")
REPO_OWNER   = "RAPath"
REPO_NAME    = "rapath.github.io"
GRAPHQL_URL  = "https://api.github.com/graphql"

HEADERS = {
    "Authorization": f"Bearer {GITHUB_TOKEN}",
    "Content-Type": "application/json"
}


def get_all_issue_ids() -> list[tuple[str, int, str]]:
    """Fetch all issue node IDs (needed for GraphQL deletion)."""
    issues = []
    cursor = None

    while True:
        after = f', after: "{cursor}"' if cursor else ""
        query = f"""
        query {{
          repository(owner: "{REPO_OWNER}", name: "{REPO_NAME}") {{
            issues(first: 100, states: OPEN{after}) {{
              pageInfo {{ hasNextPage endCursor }}
              nodes {{ id number title }}
            }}
          }}
        }}
        """
        r = requests.post(GRAPHQL_URL, json={"query": query}, headers=HEADERS, timeout=30)
        data = r.json()
        page = data["data"]["repository"]["issues"]
        for node in page["nodes"]:
            issues.append((node["id"], node["number"], node["title"]))
        if not page["pageInfo"]["hasNextPage"]:
            break
        cursor = page["pageInfo"]["endCursor"]

    return issues


def delete_issue(node_id: str) -> bool:
    mutation = f"""
    mutation {{
      deleteIssue(input: {{issueId: "{node_id}"}}) {{
        repository {{ name }}
      }}
    }}
    """
    r = requests.post(GRAPHQL_URL, json={"query": mutation}, headers=HEADERS, timeout=30)
    return "errors" not in r.json()


def main():
    if not GITHUB_TOKEN:
        print("ERROR: Set GITHUB_TOKEN environment variable first")
        return

    print("Fetching all issues...")
    issues = get_all_issue_ids()
    print(f"Found {len(issues)} issue(s) to delete\n")

    if not issues:
        print("Nothing to delete.")
        return

    confirm = input(f"Delete all {len(issues)} issues? Type YES to confirm: ")
    if confirm.strip() != "YES":
        print("Cancelled.")
        return

    for node_id, number, title in issues:
        success = delete_issue(node_id)
        status = "DELETED" if success else "FAILED"
        print(f"  [{status}] #{number}: {title[:60]}")

    print(f"\nDone.")


if __name__ == "__main__":
    main()
