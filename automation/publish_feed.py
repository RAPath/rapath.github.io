# =============================================================================
# publish_feed.py — Publish approved regulatory updates to the hub blog
# =============================================================================
# Reads approved JSON from audit-reports/updates/*/pending/ and writes
# individual Docusaurus blog post .md files into sites/hub/whats-new/.
# All 24 jurisdictions are combined into one centralised What's New feed.
#
# Only items with a valid source_url are published (except key-dates which only
# need a real date). Items with null source_url are skipped and logged.
#
# Usage:
#   python publish_feed.py                    # publish all pending files
#   python publish_feed.py --dry-run          # preview without writing anything
#   python publish_feed.py --date 2026-06-15  # only process a specific date
# =============================================================================
import argparse
import json
import os
import re
from collections import defaultdict
from datetime import datetime
from pathlib import Path

# ---------------------------------------------------------------------------
# Paths
# ---------------------------------------------------------------------------

AUDIT_REPO_PATH  = Path(os.environ.get("AUDIT_REPO_PATH", "../audit-reports"))
SITES_PATH       = Path(__file__).parent.parent / "sites"
HUB_BLOG_PATH    = SITES_PATH / "hub" / "whats-new"
TAG_COUNTS_PATH  = SITES_PATH / "hub" / "src" / "theme" / "BlogSidebar" / "tagCounts.json"

# ---------------------------------------------------------------------------
# Jurisdiction config
# ---------------------------------------------------------------------------

# Maps jurisdiction name → site folder slug
JURISDICTION_SITE = {
    "Australia (TGA)":          "au",
    "Bangladesh (DGDA)":        "bd",
    "Brazil (ANVISA)":          "br",
    "Canada (Health Canada)":   "hc",
    "China (NMPA)":             "cn",
    "European Union (MDR)":     "eu",
    "Hong Kong (MDCO)":         "hk",
    "India (CDSCO)":            "in",
    "Indonesia (BPOM)":         "id",
    "Japan (PMDA)":             "jp",
    "Malaysia (MDA)":           "my",
    "Mexico (COFEPRIS)":        "mx",
    "New Zealand (Medsafe)":    "nz",
    "Philippines (FDA)":        "ph",
    "Russia (Roszdravnadzor)":  "ru",
    "Saudi Arabia (SFDA)":      "sa",
    "Singapore (HSA)":          "sg",
    "South Korea (MFDS)":       "kr",
    "Sri Lanka (NMRA)":         "lk",
    "Switzerland (Swissmedic)": "swiss",
    "Thailand (FDA Thailand)":  "th",
    "United Kingdom (MHRA)":    "uk",
    "United States (FDA)":      "us",
    "Vietnam (MOH)":            "vt",
}

# Hub blog tags per jurisdiction
JURISDICTION_TAGS = {
    "Australia (TGA)":          ["australia", "tga"],
    "Bangladesh (DGDA)":        ["bangladesh", "dgda"],
    "Brazil (ANVISA)":          ["brazil", "anvisa"],
    "Canada (Health Canada)":   ["canada", "health-canada"],
    "China (NMPA)":             ["china", "nmpa"],
    "European Union (MDR)":     ["european-union", "mdr"],
    "Hong Kong (MDCO)":         ["hong-kong", "mdco"],
    "India (CDSCO)":            ["india", "cdsco"],
    "Indonesia (BPOM)":         ["indonesia", "bpom"],
    "Japan (PMDA)":             ["japan", "pmda"],
    "Malaysia (MDA)":           ["malaysia", "mda"],
    "Mexico (COFEPRIS)":        ["mexico", "cofepris"],
    "New Zealand (Medsafe)":    ["new-zealand", "medsafe"],
    "Philippines (FDA)":        ["philippines", "fda-philippines"],
    "Russia (Roszdravnadzor)":  ["russia", "roszdravnadzor"],
    "Saudi Arabia (SFDA)":      ["saudi-arabia", "sfda"],
    "Singapore (HSA)":          ["singapore", "hsa"],
    "South Korea (MFDS)":       ["south-korea", "mfds"],
    "Sri Lanka (NMRA)":         ["sri-lanka", "nmra"],
    "Switzerland (Swissmedic)": ["switzerland", "swissmedic"],
    "Thailand (FDA Thailand)":  ["thailand", "fda-thailand"],
    "United Kingdom (MHRA)":    ["united-kingdom", "mhra"],
    "United States (FDA)":      ["united-states", "fda"],
    "Vietnam (MOH)":            ["vietnam", "moh"],
}

CATEGORY_META = {
    "regulatory-changes": ("Regulatory Change",  "regulatory-changes"),
    "consultations":       ("Consultation",       "consultations"),
    "reform-tracker":      ("Reform Update",      "reform-tracker"),
    "key-dates":           ("Key Date",           "key-dates"),
}


# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------

def regenerate_tag_counts() -> None:
    """Recount tags across all hub posts and write tagCounts.json for the sidebar."""
    counts: dict[str, int] = defaultdict(int)
    tag_re = re.compile(r'^tags:\s*\[(.+)\]', re.MULTILINE)
    for p in HUB_BLOG_PATH.glob("*.md"):
        m = tag_re.search(p.read_text(encoding="utf-8"))
        if m:
            for tag in [t.strip() for t in m.group(1).split(",")]:
                counts[tag] += 1
    TAG_COUNTS_PATH.write_text(json.dumps(dict(sorted(counts.items())), indent=2), encoding="utf-8")
    print(f"  ✅ tagCounts.json updated ({len(counts)} tags)")


def slugify(text: str) -> str:
    text = text.lower().strip()
    text = re.sub(r"[^\w\s-]", "", text)
    text = re.sub(r"[\s_]+", "-", text)
    return re.sub(r"-+", "-", text)[:80].strip("-")


def item_is_publishable(item: dict, category: str) -> bool:
    """Return True if an item has enough quality to publish."""
    if category == "key-dates":
        return bool(item.get("date") and item.get("milestone"))
    url = item.get("source_url")
    return bool(url and isinstance(url, str) and url.startswith("http"))




# ---------------------------------------------------------------------------
# Hub blog post builder
# ---------------------------------------------------------------------------

def build_hub_post(item: dict, jurisdiction: str, category: str, date: str) -> str:
    cat_label, cat_tag = CATEGORY_META.get(category, (category, category))
    tags = JURISDICTION_TAGS.get(jurisdiction, [slugify(jurisdiction)]) + [cat_tag]
    title = (item.get("title") or item.get("milestone") or "Update").replace('"', "'")
    summary = item.get("summary", "").strip()
    source_url = item.get("source_url")
    item_date = item.get("date") or item.get("deadline")
    status = item.get("status")
    milestone = item.get("milestone")

    flag = {
        "Australia (TGA)": "🇦🇺", "Bangladesh (DGDA)": "🇧🇩", "Brazil (ANVISA)": "🇧🇷",
        "Canada (Health Canada)": "🇨🇦", "China (NMPA)": "🇨🇳", "European Union (MDR)": "🇪🇺",
        "Hong Kong (MDCO)": "🇭🇰", "India (CDSCO)": "🇮🇳", "Indonesia (BPOM)": "🇮🇩",
        "Japan (PMDA)": "🇯🇵", "Malaysia (MDA)": "🇲🇾", "Mexico (COFEPRIS)": "🇲🇽",
        "New Zealand (Medsafe)": "🇳🇿", "Philippines (FDA)": "🇵🇭",
        "Russia (Roszdravnadzor)": "🇷🇺", "Saudi Arabia (SFDA)": "🇸🇦",
        "Singapore (HSA)": "🇸🇬", "South Korea (MFDS)": "🇰🇷", "Sri Lanka (NMRA)": "🇱🇰",
        "Switzerland (Swissmedic)": "🇨🇭", "Thailand (FDA Thailand)": "🇹🇭",
        "United Kingdom (MHRA)": "🇬🇧", "United States (FDA)": "🇺🇸", "Vietnam (MOH)": "🇻🇳",
    }.get(jurisdiction, "🌐")

    cat_icon = {
        "regulatory-changes": "📋", "consultations": "💬",
        "reform-tracker": "🔄", "key-dates": "📅",
    }.get(category, "📌")

    description = summary or milestone or title
    front = (
        f'---\ntitle: "{title}"\ndate: {date}\nauthors: []\n'
        f'tags: [{", ".join(tags)}]\n'
        f'description: "{description[:160].replace(chr(34), chr(39))}"\n'
        f'hide_table_of_contents: false\n---'
    )

    lines = []

    # Meta badges row
    lines.append(
        f'<div className="update-meta">'
        f'<span className="update-jurisdiction">{flag} {jurisdiction}</span>'
        f'<span className="update-category">{cat_icon} {cat_label}</span>'
        f'</div>\n'
    )

    # Main content
    if milestone:
        lines.append(f':::info Key Date\n**{item_date or "Date TBC"}** — {milestone}\n:::\n')
    else:
        lines.append(f"{summary}\n")

    # Date / status row
    meta_bits = []
    if item_date and not milestone:
        meta_bits.append(f"📅 **Effective / published:** {item_date}")
    if status:
        meta_bits.append(f"🔖 **Status:** {status}")
    if meta_bits:
        lines.append("\n".join(meta_bits) + "\n")

    # Source link
    if source_url:
        lines.append(f'<a href="{source_url}" className="update-source-link" target="_blank" rel="noopener">View official source ↗</a>')
    else:
        lines.append(':::caution\nSource URL not confirmed — always verify against the official regulatory body website before relying on this entry.\n:::')

    return front + "\n\n" + "\n".join(lines) + "\n"


def publish_hub_post(item: dict, jurisdiction: str, category: str,
                     date: str, dry_run: bool) -> bool:
    """Write one hub blog post. Returns True if written, False if skipped."""
    title_text = item.get("title") or item.get("milestone") or "update"
    filename = f"{date}-{slugify(jurisdiction)}-{slugify(title_text)}.md"
    out_path = HUB_BLOG_PATH / filename

    if out_path.exists():
        return False  # already exists, idempotent

    if dry_run:
        print(f"      [DRY RUN] hub: {filename}")
        return True

    HUB_BLOG_PATH.mkdir(parents=True, exist_ok=True)
    out_path.write_text(build_hub_post(item, jurisdiction, category, date), encoding="utf-8")
    return True


# ---------------------------------------------------------------------------
# Per-file processing
# ---------------------------------------------------------------------------

def process_json_file(json_path: Path, dry_run: bool) -> tuple[int, int]:
    """
    Process one jurisdiction JSON file.
    Returns (hub_posts_written, skipped).
    """
    with open(json_path) as f:
        data = json.load(f)

    jurisdiction = data.get("jurisdiction", "Unknown")
    date         = data.get("date", datetime.utcnow().strftime("%Y-%m-%d"))
    category     = data.get("category", "regulatory-changes")
    items        = data.get("items", [])

    hub_written = 0
    skipped     = 0

    for item in items:
        if item_is_publishable(item, category):
            written = publish_hub_post(item, jurisdiction, category, date, dry_run)
            if written:
                hub_written += 1
        else:
            title = (item.get("title") or item.get("milestone") or "?")[:55]
            print(f"      ⚠️  SKIP (no URL): {title}")
            skipped += 1

    return hub_written, skipped


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def get_pending_files(date_filter):
    pattern = f"{'*' if not date_filter else date_filter}-*.json"
    return sorted(AUDIT_REPO_PATH.glob(f"updates/*/pending/{pattern}"))


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--dry-run", action="store_true")
    parser.add_argument("--date")
    args = parser.parse_args()

    print(f"RAPath Feed Publisher — {datetime.utcnow().strftime('%Y-%m-%d %H:%M UTC')}")
    if args.dry_run:
        print("  [DRY RUN — no files will be written]")
    print(f"  Audit repo:  {AUDIT_REPO_PATH.resolve()}")
    print(f"  Sites path:  {SITES_PATH.resolve()}\n")

    files = get_pending_files(args.date)
    if not files:
        print("No pending JSON files found.")
        return

    total_hub = total_skipped = 0
    for json_path in files:
        print(f"  {json_path.relative_to(AUDIT_REPO_PATH)}")
        h, s = process_json_file(json_path, dry_run=args.dry_run)
        total_hub += h
        total_skipped += s

    if total_hub and not args.dry_run:
        regenerate_tag_counts()

    print(f"\n{'=' * 50}")
    print(f"Hub blog posts written:  {total_hub}")
    print(f"Items skipped (no URL): {total_skipped}")
    if total_skipped:
        print("  -> Skipped items need a valid source URL before publishing.")


if __name__ == "__main__":
    main()
