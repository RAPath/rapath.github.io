# =============================================================================
# feed_runner.py — Regulatory Updates Tracker (GitHub Actions)
# =============================================================================
# Scrapes ALL 24 government sites daily.
# Extracts new regulatory items via Claude Haiku.
# Saves categorized updates to /updates/ folder in private repo.
#
# Categories:
#   - regulatory-changes/
#   - consultations/
#   - reform-tracker/
#   - key-dates/
# =============================================================================
import json
from datetime import datetime
from config import JURISDICTIONS
from scraper import fetch_html, html_to_text, MAX_CHARS_PER_PAGE
from auditor import extract_feed_items
from github_client import commit_report_to_private_repo


def build_update_file(jurisdiction: str, category: str, items: list) -> str:
    """Build markdown file for a category of updates."""
    today = datetime.utcnow().strftime("%Y-%m-%d")
    category_title = category.replace("-", " ").title()

    md = f"""# {category_title} — {jurisdiction}
**Date:** {today}

---

"""

    if not items:
        md += "_No items found._\n"
        return md

    for i, item in enumerate(items, 1):
        md += f"## {i}. {item.get('title', 'Update')}\n\n"
        md += f"**Summary:** {item.get('summary', 'No summary available.')}\n\n"

        if "deadline" in item and item["deadline"]:
            md += f"**Deadline:** {item['deadline']}\n\n"

        if "date" in item and item["date"]:
            md += f"**Date:** {item['date']}\n\n"

        if "status" in item and item["status"]:
            md += f"**Status:** {item['status']}\n\n"

        source = item.get("source_url", "")
        if source:
            md += f"**Source:** {source}\n\n"

        md += "---\n\n"

    return md


def process_jurisdiction(name: str, urls: dict) -> dict:
    """
    Scrape gov site and extract regulatory updates.
    Returns dict of {category: [items]}.
    """
    gov_url = urls["gov_url"]
    print(f"\n  [{name}] Fetching: {gov_url}")

    html = fetch_html(gov_url)
    if not html:
        print(f"  [{name}] Could not fetch gov site — skipping")
        return {
            "regulatory-changes": [],
            "consultations": [],
            "reform-tracker": [],
            "key-dates": []
        }

    gov_text = html_to_text(html)[:MAX_CHARS_PER_PAGE * 3]
    print(f"  [{name}] Extracting regulatory items via Claude...")

    updates = extract_feed_items(name, gov_text)

    # Map extracted keys to category folder names
    mapped = {
        "regulatory-changes": updates.get("regulatory_changes", []),
        "consultations": updates.get("consultations", []),
        "reform-tracker": updates.get("reform_tracker", []),
        "key-dates": updates.get("key_dates", [])
    }

    total = sum(len(items) for items in mapped.values())
    print(f"  [{name}] Found {total} item(s)")

    return mapped


def commit_updates_to_repo(jurisdiction: str, updates: dict):
    """Commit categorized updates to private repo."""
    today = datetime.utcnow().strftime("%Y-%m-%d")
    slug = jurisdiction.lower().replace(" ", "-").replace("(", "").replace(")", "")

    for category, items in updates.items():
        if not items:
            continue

        # Build markdown file
        md_content = build_update_file(jurisdiction, category, items)

        # Build JSON file
        json_data = {
            "jurisdiction": jurisdiction,
            "date": today,
            "category": category,
            "items": items
        }
        json_content = json.dumps(json_data, indent=2)

        # Commit markdown
        md_filename = f"updates/{category}/pending/{today}-{slug}.md"
        commit_report_to_private_repo(
            filename=md_filename,
            content=md_content,
            message=f"Updates: {jurisdiction} {category} — {today}"
        )

        # Commit JSON
        json_filename = f"updates/{category}/pending/{today}-{slug}.json"
        commit_report_to_private_repo(
            filename=json_filename,
            content=json_content,
            message=f"Updates: {jurisdiction} {category} (JSON) — {today}"
        )


def main():
    today = datetime.utcnow().strftime("%Y-%m-%d")
    print(f"RAPath Regulatory Updates — {today}")
    print(f"Processing {len(JURISDICTIONS)} jurisdictions...\n")

    total_items = 0
    for name, urls in JURISDICTIONS.items():
        updates = process_jurisdiction(name, urls)
        count = sum(len(items) for items in updates.values())
        total_items += count

        # Commit to private repo
        if count > 0:
            commit_updates_to_repo(name, updates)

    print(f"\nDone. {total_items} update(s) found and committed across all jurisdictions.")


if __name__ == "__main__":
    main()
