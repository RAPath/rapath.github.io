# =============================================================================
# auditor.py — Claude Haiku audit logic
# =============================================================================
import json
import requests
from config import CLAUDE_API_KEY, CLAUDE_MODEL, AUDIT_BATCH_SIZE

SYSTEM_PROMPT = """You are an expert medical device regulatory content editor.
You review pages from rapath.github.io — a website tracking medical device regulations across 24 jurisdictions.
All content was originally written by Claude AI and may have gaps, outdated info, or unclear phrasing.
Your job is to give the website owner copy-paste ready fixes — not vague suggestions.
Every finding must include: what the problem is, which page it's on, and exactly what to change.
Always respond in valid JSON using exactly the structure requested."""


def _build_audit_prompt(jurisdiction: str, combined_text: str) -> str:
    return f"""Review the following website content for: {jurisdiction}

WEBSITE CONTENT:
{combined_text}

Return a JSON object with exactly these three keys. Each item must be an object — not a plain string.

{{
  "content_updates": [
    {{
      "page": "URL or page name",
      "issue": "What is missing or outdated",
      "suggested_addition": "The exact text or paragraph to add, ready to copy-paste"
    }}
  ],
  "accuracy_errors": [
    {{
      "page": "URL or page name",
      "original_text": "The exact sentence currently on the page that is wrong",
      "corrected_text": "The corrected version, ready to copy-paste"
    }}
  ],
  "improvements": [
    {{
      "page": "URL or page name",
      "original_text": "Current sentence or section that could be improved",
      "improved_text": "Rewritten version, ready to copy-paste"
    }}
  ]
}}

Rules:
- Quote actual text from the content when flagging errors
- Only flag real issues visible in the content provided
- If a category has no issues return []
- Return ONLY valid JSON, no text outside the JSON"""


def _call_claude(system: str, user: str) -> str:
    headers = {
        "x-api-key": CLAUDE_API_KEY,
        "anthropic-version": "2023-06-01",
        "content-type": "application/json"
    }
    payload = {
        "model": CLAUDE_MODEL,
        "max_tokens": 4096,
        "system": system,
        "messages": [{"role": "user", "content": user}]
    }
    r = requests.post(
        "https://api.anthropic.com/v1/messages",
        headers=headers, json=payload, timeout=120
    )
    r.raise_for_status()
    return r.json()["content"][0]["text"]


def _parse_json(raw: str) -> dict:
    try:
        clean = raw.strip()
        if clean.startswith("```"):
            clean = clean.split("```")[1]
            if clean.startswith("json"):
                clean = clean[4:]
        return json.loads(clean.strip())
    except Exception:
        return {"content_updates": [], "accuracy_errors": [], "improvements": []}


def _merge(batches: list[dict]) -> dict:
    merged = {"content_updates": [], "accuracy_errors": [], "improvements": []}
    for b in batches:
        for key in merged:
            merged[key].extend(b.get(key, []))
    return merged


def audit_jurisdiction(jurisdiction: str, pages: dict[str, str]) -> dict:
    """Audit all pages in batches and merge findings."""
    valid_pages = [(url, text) for url, text in pages.items()
                   if text != "[PAGE UNAVAILABLE]"]

    if not valid_pages:
        return {"content_updates": [], "accuracy_errors": [],
                "improvements": [], "error": "No pages available"}

    batches_data = [valid_pages[i:i + AUDIT_BATCH_SIZE]
                    for i in range(0, len(valid_pages), AUDIT_BATCH_SIZE)]

    print(f"  {len(valid_pages)} pages → {len(batches_data)} batch(es)")

    results = []
    for idx, batch in enumerate(batches_data, 1):
        print(f"  Batch {idx}/{len(batches_data)}...")
        combined = "\n\n".join(f"--- PAGE: {url} ---\n{text}" for url, text in batch)
        raw = _call_claude(SYSTEM_PROMPT, _build_audit_prompt(jurisdiction, combined))
        results.append(_parse_json(raw))

    merged = _merge(results)
    merged["error"] = None
    return merged


def suggest_new_content(jurisdiction: str, audit_findings: dict) -> list[dict]:
    """
    Ask Claude to suggest new pages/sections that should be added to RAPath
    based on audit findings (gaps, missing info, etc).
    """
    content_gaps = audit_findings.get("content_updates", [])
    if not content_gaps:
        return []

    gaps_text = "\n".join([
        f"- {item.get('page', 'Unknown')}: {item.get('issue', 'Gap identified')}"
        for item in content_gaps if isinstance(item, dict)
    ])

    prompt = f"""You are a medical device regulatory content strategist for {jurisdiction}.

Based on these identified content gaps in the RAPath website:
{gaps_text}

Suggest new pages or major sections that should be added to cover these gaps comprehensively.

Return a JSON array. Each suggestion must have these exact fields:
[
  {{
    "page_title": "Short title for the new page or section",
    "topic": "Main topic it covers",
    "why_needed": "Why this gap exists and why filling it matters",
    "draft_outline": "Bullet-point outline of what the page should cover",
    "regulatory_reference": "Link to authoritative source document or regulation",
    "suggested_location": "Where in site structure it should live (e.g., /docs/timelines, /docs/requirements)"
  }}
]

Only suggest content that is directly supported by regulatory sources.
If no new content is needed, return [].
Return ONLY valid JSON."""

    raw = _call_claude(
        "You are a medical device regulatory content strategist. Suggest new content pages based on identified gaps.",
        prompt
    )
    try:
        clean = raw.strip()
        if clean.startswith("```"):
            clean = clean.split("```")[1]
            if clean.startswith("json"):
                clean = clean[4:]
        result = json.loads(clean.strip())
        return result if isinstance(result, list) else []
    except Exception:
        return []


def _filter_homepage_urls(items: list, homepage_url: str) -> list:
    """
    Post-processing safety net: replace source_url with null if it equals
    the homepage, is not a valid http URL, or is a plain text label.
    Items with null source_url are flagged for manual review before publishing.
    """
    homepage = homepage_url.rstrip("/")
    for item in items:
        if not isinstance(item, dict):
            continue
        url = item.get("source_url", "")
        if not isinstance(url, str):
            item["source_url"] = None
            continue
        url_clean = url.rstrip("/")
        if (
            not url_clean
            or not url_clean.startswith("http")
            or url_clean == homepage
        ):
            item["source_url"] = None
    return items


def extract_feed_items(jurisdiction: str, gov_text: str,
                       page_links: list | None = None,
                       homepage_url: str | None = None) -> dict:
    """
    Ask Claude to extract regulatory update items from a government page.
    Returns structured dict with categories: regulatory_changes, consultations,
    reform_tracker, key_dates.

    Args:
        jurisdiction:  Jurisdiction name (e.g. "Australia (TGA)")
        gov_text:      Plain text of the government page
        page_links:    Real URLs extracted from page HTML — Claude must pick
                       source_url values from this list only
        homepage_url:  The gov homepage URL — used to null out fallback URLs
    """
    empty = {
        "regulatory_changes": [],
        "consultations": [],
        "reform_tracker": [],
        "key_dates": []
    }

    # Build the links hint block for the prompt
    if page_links:
        sample = page_links[:60]
        links_block = (
            "\n\nAVAILABLE PAGE LINKS (extracted from the live page):\n"
            + "\n".join(f"- {u}" for u in sample)
            + "\n\nIMPORTANT: For source_url you MUST use one of the URLs above "
            "that best matches each item. Do NOT use the homepage URL. "
            "If no specific link matches an item, set source_url to null."
        )
    else:
        links_block = (
            "\n\nIMPORTANT: source_url must be the direct URL to the specific "
            "item — NOT the site homepage. If you cannot identify a specific "
            "URL for an item, set source_url to null."
        )

    prompt = f"""You are reviewing the official government regulatory website for {jurisdiction} (medical devices).

WEBSITE CONTENT:
{gov_text}{links_block}

Extract all items relevant to medical device regulation and categorize them.

Return a JSON object with these exact keys:
{{
  "regulatory_changes": [
    {{
      "title": "Specific descriptive title — must name the regulation, device type, or requirement",
      "summary": "2-3 sentence summary naming the specific device type, regulation, or requirement — no generic language",
      "source_url": "Direct URL from the links list above, or null if not found",
      "date": "YYYY-MM-DD if explicitly stated in content, or null — do NOT estimate"
    }}
  ],
  "consultations": [
    {{
      "title": "Consultation title",
      "summary": "2-3 sentence summary",
      "deadline": "YYYY-MM-DD deadline if explicitly stated, or null — do NOT invent a date",
      "source_url": "Direct URL from the links list above, or null"
    }}
  ],
  "reform_tracker": [
    {{
      "title": "Reform announcement title",
      "summary": "2-3 sentence summary",
      "status": "announced | in-development | pending-implementation",
      "source_url": "Direct URL from the links list above, or null"
    }}
  ],
  "key_dates": [
    {{
      "date": "YYYY-MM-DD — only include if a real specific date is stated in the content",
      "milestone": "What happens on this date",
      "jurisdiction_relevant": true
    }}
  ]
}}

Rules:
- Only include items clearly related to medical devices or in vitro diagnostics
- Titles must be specific — never generic like "Medical Device Alert" without naming the device
- Dates must come from the page content — do NOT estimate or invent any date
- Return empty arrays [] for categories with no items
- Return ONLY valid JSON"""

    raw = _call_claude(
        "You are a medical device regulatory intelligence analyst. Extract and categorize regulatory updates from websites. Return only valid JSON.",
        prompt
    )

    try:
        clean = raw.strip()
        if clean.startswith("```"):
            clean = clean.split("```")[1]
            if clean.startswith("json"):
                clean = clean[4:]
        result = json.loads(clean.strip())
        if not isinstance(result, dict):
            return empty
    except Exception:
        return empty

    # Post-process: null out homepage/invalid source URLs
    if homepage_url:
        for key in ("regulatory_changes", "consultations", "reform_tracker"):
            result[key] = _filter_homepage_urls(
                result.get(key, []), homepage_url
            )

    return result
