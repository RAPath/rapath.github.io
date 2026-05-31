# =============================================================================
# feed_runner.py — Project 2: Regulatory News Feed (GitHub Actions)
# =============================================================================
# Scrapes ALL 24 government sites daily.
# Extracts new regulatory items via Claude Haiku.
# Posts each as a GitHub Issue with needs-review label — no duplicates.
# =============================================================================
from datetime import datetime
from config import JURISDICTIONS
from scraper import fetch_html, html_to_text, MAX_CHARS_PER_PAGE
from auditor import extract_feed_items
from github_client import create_issue

# Maps item type to GitHub label name
TYPE_LABELS = {
    "open-consultation": "open-consultation",
    "upcoming-change":   "upcoming-change",
    "recent-change":     "recent-change",
    "key-date":          "key-date",
    "reform":            "reform"
}


def build_issue_body(item: dict, jurisdiction: str, gov_url: str) -> str:
    today = datetime.utcnow().strftime("%Y-%m-%d")
    source = item.get("source_url") or gov_url
    date_str = item.get("date") or "Not specified"
    item_type = item.get("type", "update").replace("-", " ").title()

    return f"""## {item.get('title', 'Regulatory Update')}

**Jurisdiction:** {jurisdiction}
**Type:** {item_type}
**Date:** {date_str}
**Source:** {source}

### Summary
{item.get('summary', 'No summary available.')}

---
> ⚠️ **Needs Review** — This item was identified by an automated system using Claude Haiku.
> Please verify against the source URL above before removing the `needs-review` label.
>
> _Detected: {today} | RAPath Regulatory Feed_
"""


def process_jurisdiction(name: str, urls: dict) -> int:
    """Scrape gov site and post new items as issues. Returns count of new issues created."""
    gov_url = urls["gov_url"]
    print(f"\n  [{name}] Fetching: {gov_url}")

    html = fetch_html(gov_url)
    if not html:
        print(f"  [{name}] Could not fetch gov site — skipping")
        return 0

    gov_text = html_to_text(html)[:MAX_CHARS_PER_PAGE * 3]  # allow more text for gov sites
    print(f"  [{name}] Extracting regulatory items via Claude...")

    items = extract_feed_items(name, gov_text)
    print(f"  [{name}] Found {len(items)} item(s)")

    created = 0
    for item in items:
        title = f"[{name}] {item.get('title', 'Regulatory Update')}"
        item_type = item.get("type", "recent-change")
        type_label = TYPE_LABELS.get(item_type, "recent-change")

        labels = [
            "regulatory-feed",   # marks all auto-posted items
            "needs-review",      # your quality gate — remove when verified
            type_label,          # open-consultation / upcoming-change / etc.
            name                 # jurisdiction label e.g. "Australia (TGA)"
        ]

        body = build_issue_body(item, name, gov_url)
        issue = create_issue(title=title, body=body, labels=labels)
        if issue:
            created += 1

    return created


def main():
    today = datetime.utcnow().strftime("%Y-%m-%d")
    print(f"RAPath Regulatory Feed — {today}")
    print(f"Processing {len(JURISDICTIONS)} jurisdictions...\n")

    total_created = 0
    for name, urls in JURISDICTIONS.items():
        count = process_jurisdiction(name, urls)
        total_created += count

    print(f"\nDone. {total_created} new issue(s) created across all jurisdictions.")


if __name__ == "__main__":
    main()
