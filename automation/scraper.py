# =============================================================================
# scraper.py — Sitemap crawler + page text extractor
# =============================================================================
import requests
from bs4 import BeautifulSoup
from config import REQUEST_TIMEOUT, MAX_CHARS_PER_PAGE

HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
        "AppleWebKit/537.36 (KHTML, like Gecko) "
        "Chrome/124.0 Safari/537.36"
    )
}


def fetch_html(url: str) -> str | None:
    try:
        r = requests.get(url, headers=HEADERS, timeout=REQUEST_TIMEOUT)
        r.raise_for_status()
        return r.text
    except Exception as e:
        print(f"  [WARN] Could not fetch {url}: {e}")
        return None


def html_to_text(html: str) -> str:
    soup = BeautifulSoup(html, "html.parser")
    for tag in soup(["script", "style", "nav", "footer", "header"]):
        tag.decompose()
    text = soup.get_text(separator="\n")
    lines = [ln.strip() for ln in text.splitlines() if ln.strip()]
    return "\n".join(lines)


def parse_sitemap(sitemap_url: str) -> list[str]:
    html = fetch_html(sitemap_url)
    if not html:
        return []
    soup = BeautifulSoup(html, "xml")
    # Sitemap index?
    sitemaps = soup.find_all("sitemap")
    if sitemaps:
        urls = []
        for sm in sitemaps:
            loc = sm.find("loc")
            if loc:
                urls.extend(parse_sitemap(loc.text.strip()))
        return urls
    locs = soup.find_all("loc")
    return [loc.text.strip() for loc in locs]


def scrape_pages(urls: list[str]) -> dict[str, str]:
    """Fetch a list of URLs and return {url: text} dict."""
    pages = {}
    for url in urls:
        html = fetch_html(url)
        if html:
            text = html_to_text(html)
            pages[url] = text[:MAX_CHARS_PER_PAGE]
        else:
            pages[url] = "[PAGE UNAVAILABLE]"
    return pages


def scrape_jurisdiction_pages(sitemap_url: str, rapath_url: str) -> dict[str, str]:
    """Get all pages for a jurisdiction via its sitemap."""
    print(f"  Parsing sitemap: {sitemap_url}")
    urls = parse_sitemap(sitemap_url)
    if not urls:
        print("  Sitemap empty — using root URL only")
        urls = [rapath_url]
    urls = list(dict.fromkeys(urls))  # deduplicate
    print(f"  Found {len(urls)} pages")
    return scrape_pages(urls)
