# =============================================================================
# config.py — RAPath Automation Configuration
# =============================================================================
import os

# Claude API
CLAUDE_API_KEY  = os.environ.get("ANTHROPIC_API_KEY", "")
CLAUDE_MODEL    = "claude-haiku-4-5-20251001"

# GitHub
GITHUB_TOKEN    = os.environ.get("GITHUB_TOKEN", "")        # built-in Actions token (issues)
AUDIT_PAT       = os.environ.get("AUDIT_PAT", "")           # PAT for private audit-reports repo
MAIN_REPO       = "RAPath/rapath.github.io"                  # public repo (issues posted here)
AUDIT_REPO      = "RAPath/audit-reports"                     # private repo (audit reports saved here)

# Scraping
REQUEST_TIMEOUT    = 20
MAX_CHARS_PER_PAGE = 4000   # Claude Haiku has 200k context — can handle more
AUDIT_BATCH_SIZE   = 10     # pages per Claude call for audits

# =============================================================================
# 24-JURISDICTION MAP
# =============================================================================
JURISDICTIONS = {
    "Australia (TGA)": {
        "rapath_url":  "https://rapath.github.io/au/",
        "sitemap_url": "https://rapath.github.io/au/sitemap.xml",
        "gov_url":     "https://consultations.tga.gov.au/"
    },
    "Bangladesh (DGDA)": {
        "rapath_url":  "https://rapath.github.io/bd/",
        "sitemap_url": "https://rapath.github.io/bd/sitemap.xml",
        "gov_url":     "http://www.dgda.gov.bd/"
    },
    "Brazil (ANVISA)": {
        "rapath_url":  "https://rapath.github.io/br/",
        "sitemap_url": "https://rapath.github.io/br/sitemap.xml",
        "gov_url":     "https://www.gov.br/anvisa/pt-br/assuntos/produtos-para-saude"
    },
    "China (NMPA)": {
        "rapath_url":  "https://rapath.github.io/cn/",
        "sitemap_url": "https://rapath.github.io/cn/sitemap.xml",
        "gov_url":     "https://www.nmpa.gov.cn/english/"
    },
    "European Union (MDR)": {
        "rapath_url":  "https://rapath.github.io/eu/",
        "sitemap_url": "https://rapath.github.io/eu/sitemap.xml",
        "gov_url":     "https://health.ec.europa.eu/medical-devices-sector/new-regulations_en"
    },
    "Canada (Health Canada)": {
        "rapath_url":  "https://rapath.github.io/hc/",
        "sitemap_url": "https://rapath.github.io/hc/sitemap.xml",
        "gov_url":     "https://www.canada.ca/en/health-canada/services/drugs-health-products/medical-devices.html"
    },
    "Hong Kong (MDCO)": {
        "rapath_url":  "https://rapath.github.io/hk/",
        "sitemap_url": "https://rapath.github.io/hk/sitemap.xml",
        "gov_url":     "https://www.mdco.gov.hk/english/mdacs/mdacs.html"
    },
    "Indonesia (BPOM)": {
        "rapath_url":  "https://rapath.github.io/id/",
        "sitemap_url": "https://rapath.github.io/id/sitemap.xml",
        "gov_url":     "https://www.pom.go.id/"
    },
    "India (CDSCO)": {
        "rapath_url":  "https://rapath.github.io/in/",
        "sitemap_url": "https://rapath.github.io/in/sitemap.xml",
        "gov_url":     "https://cdsco.gov.in/opencms/opencms/en/Medical-Device-Diagnostics/Medical-Device-Diagnostics/"
    },
    "Japan (PMDA)": {
        "rapath_url":  "https://rapath.github.io/jp/",
        "sitemap_url": "https://rapath.github.io/jp/sitemap.xml",
        "gov_url":     "https://www.pmda.go.jp/english/review-services/regulatory-info/0001.html"
    },
    "South Korea (MFDS)": {
        "rapath_url":  "https://rapath.github.io/kr/",
        "sitemap_url": "https://rapath.github.io/kr/sitemap.xml",
        "gov_url":     "https://www.mfds.go.kr/eng/index.do"
    },
    "Sri Lanka (NMRA)": {
        "rapath_url":  "https://rapath.github.io/lk/",
        "sitemap_url": "https://rapath.github.io/lk/sitemap.xml",
        "gov_url":     "https://www.nmra.gov.lk/index.php?lang=en"
    },
    "Mexico (COFEPRIS)": {
        "rapath_url":  "https://rapath.github.io/mx/",
        "sitemap_url": "https://rapath.github.io/mx/sitemap.xml",
        "gov_url":     "https://www.gob.mx/cofepris"
    },
    "Malaysia (MDA)": {
        "rapath_url":  "https://rapath.github.io/my/",
        "sitemap_url": "https://rapath.github.io/my/sitemap.xml",
        "gov_url":     "https://portal.mda.gov.my/"
    },
    "New Zealand (Medsafe)": {
        "rapath_url":  "https://rapath.github.io/nz/",
        "sitemap_url": "https://rapath.github.io/nz/sitemap.xml",
        "gov_url":     "https://www.medsafe.govt.nz/regulatory/Devices.asp"
    },
    "Philippines (FDA)": {
        "rapath_url":  "https://rapath.github.io/ph/",
        "sitemap_url": "https://rapath.github.io/ph/sitemap.xml",
        "gov_url":     "https://www.fda.gov.ph/"
    },
    "Russia (Roszdravnadzor)": {
        "rapath_url":  "https://rapath.github.io/ru/",
        "sitemap_url": "https://rapath.github.io/ru/sitemap.xml",
        "gov_url":     "https://roszdravnadzor.gov.ru/"
    },
    "Saudi Arabia (SFDA)": {
        "rapath_url":  "https://rapath.github.io/sa/",
        "sitemap_url": "https://rapath.github.io/sa/sitemap.xml",
        "gov_url":     "https://www.sfda.gov.sa/en/medical-devices"
    },
    "Singapore (HSA)": {
        "rapath_url":  "https://rapath.github.io/sg/",
        "sitemap_url": "https://rapath.github.io/sg/sitemap.xml",
        "gov_url":     "https://www.hsa.gov.sg/medical-devices/regulatory-updates"
    },
    "Switzerland (Swissmedic)": {
        "rapath_url":  "https://rapath.github.io/swiss/",
        "sitemap_url": "https://rapath.github.io/swiss/sitemap.xml",
        "gov_url":     "https://www.swissmedic.ch/swissmedic/en/home/medical-devices.html"
    },
    "Thailand (FDA Thailand)": {
        "rapath_url":  "https://rapath.github.io/th/",
        "sitemap_url": "https://rapath.github.io/th/sitemap.xml",
        "gov_url":     "https://fda.moph.go.th/"
    },
    "United Kingdom (MHRA)": {
        "rapath_url":  "https://rapath.github.io/uk/",
        "sitemap_url": "https://rapath.github.io/uk/sitemap.xml",
        "gov_url":     "https://www.gov.uk/government/organisations/medicines-and-healthcare-products-regulatory-agency"
    },
    "United States (FDA)": {
        "rapath_url":  "https://rapath.github.io/us/",
        "sitemap_url": "https://rapath.github.io/us/sitemap.xml",
        "gov_url":     "https://www.fda.gov/medical-devices/news-events-medical-devices"
    },
    "Vietnam (MOH)": {
        "rapath_url":  "https://rapath.github.io/vt/",
        "sitemap_url": "https://rapath.github.io/vt/sitemap.xml",
        "gov_url":     "https://moh.gov.vn/"
    }
}

JURISDICTION_NAMES = list(JURISDICTIONS.keys())
