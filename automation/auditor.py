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


def extract_feed_items(jurisdiction: str, gov_text: str) -> list[dict]:
    """
    Ask Claude to extract regulatory update items from a government page.
    Returns a list of structured items for Project 2.
    """
    prompt = f"""You are reviewing the official government regulatory website for {jurisdiction} (medical devices).

WEBSITE CONTENT:
{gov_text}

Extract all items that are relevant to medical device regulation. Look for:
- Open consultations or public comment periods
- Upcoming regulatory changes or deadlines
- Recent regulatory changes or new guidance
- Key dates or implementation timelines
- Reform announcements

Return a JSON array. Each item must have these exact fields:
[
  {{
    "title": "Short descriptive title of the item",
    "type": "one of: open-consultation | upcoming-change | recent-change | key-date | reform",
    "summary": "2-3 sentence plain English summary of what this is and why it matters",
    "source_url": "direct URL to the item if visible, otherwise the gov page URL",
    "date": "date mentioned if available, otherwise null"
  }}
]

Only include items clearly related to medical devices or in vitro diagnostics.
If nothing relevant is found return an empty array [].
Return ONLY valid JSON."""

    raw = _call_claude(
        "You are a medical device regulatory intelligence analyst. Extract structured data from regulatory websites and return only valid JSON.",
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
