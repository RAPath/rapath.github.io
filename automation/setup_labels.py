# =============================================================================
# setup_labels.py — One-time script to create all GitHub labels
# Run this ONCE from your PC before the workflows go live.
# Usage: GITHUB_TOKEN=your_token python setup_labels.py
# =============================================================================
from github_client import ensure_labels

LABELS = [
    # --- Status ---
    {"name": "needs-review",      "color": "e11d48", "description": "AI-generated — verify before treating as confirmed"},
    {"name": "verified",          "color": "16a34a", "description": "Reviewed and confirmed accurate"},
    {"name": "regulatory-feed",   "color": "7c3aed", "description": "Posted by the automated regulatory feed"},

    # --- Update types ---
    {"name": "open-consultation", "color": "0ea5e9", "description": "Open for public comment or consultation"},
    {"name": "upcoming-change",   "color": "f97316", "description": "Regulatory change coming into effect"},
    {"name": "recent-change",     "color": "84cc16", "description": "Recently enacted regulatory change"},
    {"name": "key-date",          "color": "eab308", "description": "Important deadline or implementation date"},
    {"name": "reform",            "color": "a855f7", "description": "Broader regulatory reform or restructure"},

    # --- Jurisdictions ---
    {"name": "Australia (TGA)",           "color": "00843D", "description": ""},
    {"name": "Bangladesh (DGDA)",         "color": "006A4E", "description": ""},
    {"name": "Brazil (ANVISA)",           "color": "009C3B", "description": ""},
    {"name": "China (NMPA)",              "color": "DE2910", "description": ""},
    {"name": "European Union (MDR)",      "color": "003399", "description": ""},
    {"name": "Canada (Health Canada)",    "color": "FF0000", "description": ""},
    {"name": "Hong Kong (MDCO)",          "color": "DE2910", "description": ""},
    {"name": "Indonesia (BPOM)",          "color": "CE1126", "description": ""},
    {"name": "India (CDSCO)",             "color": "FF9933", "description": ""},
    {"name": "Japan (PMDA)",              "color": "BC002D", "description": ""},
    {"name": "South Korea (MFDS)",        "color": "003478", "description": ""},
    {"name": "Sri Lanka (NMRA)",          "color": "8D153A", "description": ""},
    {"name": "Mexico (COFEPRIS)",         "color": "006847", "description": ""},
    {"name": "Malaysia (MDA)",            "color": "CC0001", "description": ""},
    {"name": "New Zealand (Medsafe)",     "color": "00247D", "description": ""},
    {"name": "Philippines (FDA)",         "color": "0038A8", "description": ""},
    {"name": "Russia (Roszdravnadzor)",   "color": "D52B1E", "description": ""},
    {"name": "Saudi Arabia (SFDA)",       "color": "006C35", "description": ""},
    {"name": "Singapore (HSA)",           "color": "EF3340", "description": ""},
    {"name": "Switzerland (Swissmedic)", "color": "FF0000", "description": ""},
    {"name": "Thailand (FDA Thailand)",   "color": "A51931", "description": ""},
    {"name": "United Kingdom (MHRA)",     "color": "012169", "description": ""},
    {"name": "United States (FDA)",       "color": "B22234", "description": ""},
    {"name": "Vietnam (MOH)",             "color": "DA251D", "description": ""},
]

if __name__ == "__main__":
    print(f"Creating {len(LABELS)} labels...")
    ensure_labels(LABELS)
    print("Done.")
