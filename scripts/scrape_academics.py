#!/usr/bin/env python3
"""Scrape all RGUKT academics sub-pages into structured JSON."""

from __future__ import annotations

import io
import json
import re
import subprocess
import sys
import urllib.parse
from bs4 import BeautifulSoup, Tag

BASE = "https://www.rgukt.in"

PAGES = [
    {"name": "Overview", "slug": "overview", "path": "/academics/"},
    {"name": "Undergraduate Programmes", "slug": "undergraduate", "path": "/academics/programmes/undergraduate-programmes/"},
    {"name": "Postgraduate Programmes", "slug": "postgraduate", "path": "/academics/programmes/postgraduate-programmes/"},
    {"name": "Research Programmes", "slug": "research", "path": "/academics/programmes/research-programmes/"},
    {"name": "Summer Programmes", "slug": "summer", "path": "/academics/programmes/summer-programmes/"},
    {"name": "Academic Regulations", "slug": "regulations", "path": "/academics/regulations/"},
    {"name": "Academic Calendar", "slug": "calendar", "path": "/academics/calendar/"},
    {"name": "Academic Curriculum", "slug": "curriculum", "path": "/academics/curriculam/"},
    {"name": "Examination Procedures", "slug": "examination-procedures", "path": "/academics/examination/procedures/"},
    {"name": "Examination Schedules", "slug": "examination-schedules", "path": "/academics/examination/schedules/"},
    {"name": "Central Library", "slug": "central-library", "path": "/academics/facilities/central-library/"},
    {"name": "Learning Management System", "slug": "lms", "path": "/academics/facilities/lms/"},
    {"name": "Timetables", "slug": "timetables", "path": "/academics/services/timetables/"},
    {"name": "Scholarships and Financial Assistance", "slug": "scholarships", "path": "/academics/services/scholarships-and-financial-assistance/"},
    {"name": "Orientation Programme", "slug": "orientation", "path": "/academics/services/orientation-programme/"},
    {"name": "Council Minutes", "slug": "council-minutes", "path": "/academics/academic-council-minutes/"},
]

SKIP_HEADINGS = {
    "also visit", "latest update", "quick links", "happenings",
    "related links", "navigation", "menu", "share", "follow us", "download",
}

DOC_EXTENSIONS = (".pdf", ".doc", ".docx", ".xls", ".xlsx", ".ppt", ".pptx", ".zip", ".rar")
SIDEBAR_SELECTORS = [".sidemenu", ".menu-rounded.sidemenu", ".w-lg-300px", "#documentviewbody + div"]


def fetch(url: str) -> str:
    result = subprocess.run(
        ["curl", "-sL", url, "-A", "Mozilla/5.0 (compatible; RGUKT-Web-Scraper/1.0)"],
        capture_output=True,
        text=True,
        timeout=90,
        check=True,
    )
    return result.stdout


def fetch_bytes(url: str) -> bytes:
    result = subprocess.run(
        ["curl", "-sL", url, "-A", "Mozilla/5.0 (compatible; RGUKT-Web-Scraper/1.0)"],
        capture_output=True,
        timeout=90,
        check=True,
    )
    return result.stdout


def normalize_url(href: str, page_url: str) -> str | None:
    if not href or href.startswith("#") or href.startswith("javascript:"):
        return None
    if href.startswith("mailto:") or href.startswith("tel:"):
        return href
    return urllib.parse.urljoin(page_url, href)


def clean_text(text: str) -> str:
    return re.sub(r"\s+", " ", text or "").strip()


def is_soft_404(soup: BeautifulSoup) -> bool:
    content = soup.select_one("#kt_app_content")
    if not content:
        return True
    text = clean_text(content.get_text())
    return "can't find that page" in text.lower() or len(text) < 80


def is_doc_link(href: str) -> bool:
    if not href:
        return False
    lower = href.lower().split("?")[0]
    return (
        lower.endswith(DOC_EXTENSIONS)
        or "/files/pdfs/" in lower
        or "/uploads/" in lower
        or "/documents/" in lower
    )


def extract_link_title(a: Tag) -> str:
    title = clean_text(a.get_text())
    if not title:
        title = a.get("title") or a.get("aria-label") or ""
    href = a.get("href", "")
    if not title and href:
        title = urllib.parse.unquote(href.split("/")[-1].split("?")[0])
    return clean_text(title)


def extract_embedded_pdfs(html: str, page_url: str) -> list[dict]:
    docs: list[dict] = []
    seen: set[str] = set()

    patterns = [
        r"pdfUrl\s*=\s*['\"]([^'\"]+)['\"]",
        r"getDocument\(['\"]([^'\"]+\.pdf)['\"]\)",
        r"link\.href\s*=\s*['\"]([^'\"]+\.pdf)['\"]",
    ]
    for pattern in patterns:
        for match in re.findall(pattern, html, re.I):
            url = normalize_url(match, page_url)
            if url and url not in seen:
                seen.add(url)
                docs.append({"title": urllib.parse.unquote(url.split("/")[-1]), "url": url})

    return docs


def extract_pdf_text(url: str, max_pages: int = 20) -> list[str]:
    try:
        from pypdf import PdfReader

        data = fetch_bytes(url)
        reader = PdfReader(io.BytesIO(data))
        paragraphs: list[str] = []
        for i, page in enumerate(reader.pages):
            if i >= max_pages:
                break
            text = clean_text(page.extract_text() or "")
            if text and len(text) > 20:
                paragraphs.append(text)
        return paragraphs
    except Exception:
        return []


def parse_table(table: Tag) -> dict:
    rows: list[list[str]] = []
    headers: list[str] = []
    thead = table.find("thead")
    if thead:
        headers = [clean_text(th.get_text()) for th in thead.find_all(["th", "td"])]
    for tr in table.find_all("tr"):
        cells = [clean_text(td.get_text()) for td in tr.find_all(["td", "th"])]
        if cells and cells != headers:
            rows.append(cells)
    if not headers and rows:
        headers = rows.pop(0)
    return {"headers": headers, "rows": rows}


def parse_list(el: Tag) -> list[str]:
    return [clean_text(li.get_text()) for li in el.find_all("li", recursive=False) if clean_text(li.get_text())]


def get_main_column(soup: BeautifulSoup) -> Tag | None:
    root = soup.select_one("#kt_app_content")
    if not root:
        return None
    # Prefer main text column even if empty (PDF viewer pages use #documentviewbody)
    main = root.select_one(".pe-lg-5")
    if main:
        return main
    card = root.select_one(".card-body")
    if card:
        return card.select_one(".pe-lg-5") or card
    return root


def remove_sidebar(main: Tag) -> None:
    for sel in SIDEBAR_SELECTORS:
        for el in main.select(sel):
            if "also visit" in clean_text(el.get_text()).lower()[:30] or "latest update" in clean_text(el.get_text()).lower()[:30]:
                el.decompose()


def parse_listing_blocks(main: Tag, page_url: str) -> list[dict]:
    """Parse timetables-style blocks: h4 heading + linked items with optional dates."""
    sections: list[dict] = []
    current: dict | None = None

    for child in main.children:
        if not isinstance(child, Tag):
            continue

        if child.name == "h4":
            heading = clean_text(child.get_text())
            if heading.lower() in SKIP_HEADINGS:
                continue
            current = {"heading": heading, "items": []}
            sections.append(current)
            continue

        if child.get("class") and "pt-3" in child.get("class", []):
            link = child.find("a", href=True)
            if link:
                item = {
                    "title": clean_text(link.get_text()),
                    "url": normalize_url(link["href"], page_url),
                }
                date_el = child.find("span", class_=re.compile(r"text-gray-700|fs-6"))
                if date_el:
                    date = clean_text(date_el.get_text())
                    if date:
                        item["date"] = date
                if current:
                    current["items"].append(item)
                else:
                    sections.append({"heading": "Items", "items": [item]})

    return sections


def parse_structured_content(main: Tag, page_url: str) -> tuple[list[str], list[dict], list[dict]]:
    intro: list[str] = []
    sections: list[dict] = []
    documents: list[dict] = []
    current: dict | None = None
    intro_done = False

    def flush() -> None:
        nonlocal current
        if current and any(current.get(k) for k in ("content", "items", "tables", "documents")):
            sections.append(current)
        current = None

    def start_section(heading: str) -> None:
        nonlocal current, intro_done
        intro_done = True
        if current and current.get("heading") == heading:
            return
        flush()
        current = {"heading": heading, "content": [], "items": [], "tables": [], "documents": []}

    for el in main.find_all(["h1", "h2", "h3", "h4", "h5", "h6", "p", "ul", "ol", "table"]):
        if el.find_parent(["table", "ul", "ol"]):
            continue
        # Skip sidebar blocks
        parent_classes = " ".join(
            " ".join(p.get("class", [])) for p in el.parents if isinstance(p, Tag) and p.get("class")
        )
        if "w-lg-300px" in parent_classes:
            continue

        name = el.name.lower()

        if name in ("h1", "h2", "h3", "h4", "h5", "h6"):
            heading = clean_text(el.get_text())
            if not heading or heading.lower() in SKIP_HEADINGS:
                continue
            start_section(heading)
            continue

        if name == "p":
            text = clean_text(el.get_text())
            if not text or len(text) < 2:
                continue
            for a in el.find_all("a", href=True):
                href = normalize_url(a["href"], page_url)
                if href and is_doc_link(href):
                    doc = {"title": extract_link_title(a), "url": href}
                    if current:
                        current["documents"].append(doc)
                    else:
                        documents.append(doc)
            if current:
                current["content"].append(text)
            elif not intro_done:
                intro.append(text)
            else:
                start_section("Additional Information")
                current["content"].append(text)
            continue

        if name in ("ul", "ol"):
            items = parse_list(el)
            if not items:
                continue
            if current:
                current["items"].extend(items)
            elif not intro_done:
                intro.extend(items)
            else:
                start_section("List")
                current["items"].extend(items)
            continue

        if name == "table":
            table_data = parse_table(el)
            if current:
                current["tables"].append(table_data)
            else:
                start_section("Information")
                current["tables"].append(table_data)
            continue

    # Button containers / download grids
    for el in main.select(".button-container"):
        for a in el.find_all("a", href=True):
            href = normalize_url(a["href"], page_url)
            if href and is_doc_link(href):
                documents.append({"title": extract_link_title(a), "url": href})

    flush()

    cleaned: list[dict] = []
    for sec in sections:
        item: dict = {"heading": sec["heading"]}
        if sec.get("content"):
            item["content"] = sec["content"]
        if sec.get("items"):
            item["items"] = sec["items"]
        if sec.get("tables"):
            item["tables"] = sec["tables"]
        if sec.get("documents"):
            item["documents"] = sec["documents"]
            documents.extend(sec["documents"])
        cleaned.append(item)

    return intro, cleaned, documents


def dedupe_docs(docs: list[dict]) -> list[dict]:
    seen: set[str] = set()
    out: list[dict] = []
    for doc in docs:
        url = doc.get("url", "")
        if url and url not in seen:
            seen.add(url)
            out.append(doc)
    return out


def extract_stats(main: Tag) -> dict:
    stats: dict = {}
    for el in main.select(".fs-2x, .fs-3x, .fw-bold"):
        parent = el.parent
        if not parent:
            continue
        label_el = parent.find(["span", "p", "div"], class_=re.compile(r"text-muted|fs-7|fs-6"))
        if label_el:
            val = clean_text(el.get_text())
            label = clean_text(label_el.get_text())
            if val and label and len(label) < 80 and val != label:
                stats[label] = val
    return stats


def scrape_page(page_def: dict) -> dict:
    url = BASE + page_def["path"]
    result: dict = {
        "slug": page_def["slug"],
        "rguktUrl": url,
        "title": page_def["name"],
        "intro": [],
        "sections": [],
        "documents": [],
    }

    try:
        html = fetch(url)
    except Exception as exc:
        result["pageStatus"] = "fetch_error"
        result["error"] = str(exc)
        return result

    soup = BeautifulSoup(html, "lxml")

    title_tag = soup.find("title")
    if title_tag:
        raw = clean_text(title_tag.get_text())
        result["title"] = clean_text(raw.split("|")[0]) if "|" in raw else raw

    if is_soft_404(soup):
        result["pageStatus"] = "not_found_on_source"
        result["note"] = "Page returns soft 404 on rgukt.in (linked in nav but content unavailable)."
        return result

    embedded_pdfs = extract_embedded_pdfs(html, url)
    main = get_main_column(soup)

    if not main:
        result["pageStatus"] = "no_content"
        result["documents"] = dedupe_docs(embedded_pdfs)
        return result

    remove_sidebar(main)

    # Listing-style pages (timetables etc.) — only when link items exist
    listing_sections = parse_listing_blocks(main, url)
    has_listing_items = any(sec.get("items") for sec in listing_sections)
    if has_listing_items:
        result["sections"] = listing_sections
        # Follow sub-links for nested PDF pages
        for sec in listing_sections:
            for item in sec.get("items", []):
                sub_url = item.get("url")
                if not sub_url or not sub_url.startswith(BASE):
                    continue
                if sub_url.rstrip("/") == url.rstrip("/"):
                    continue
                try:
                    sub_html = fetch(sub_url)
                    sub_pdfs = extract_embedded_pdfs(sub_html, sub_url)
                    for pdf in sub_pdfs:
                        pdf["title"] = item.get("title", pdf["title"])
                        if item.get("date"):
                            pdf["date"] = item["date"]
                    embedded_pdfs.extend(sub_pdfs)
                except Exception:
                    pass
    else:
        intro, sections, inline_docs = parse_structured_content(main, url)
        result["intro"] = intro
        result["sections"] = sections
        embedded_pdfs.extend(inline_docs)

    result["documents"] = dedupe_docs(embedded_pdfs)

    # Collect anchor links to PDFs anywhere in content area
    root = soup.select_one("#kt_app_content") or soup
    for a in root.find_all("a", href=True):
        href = normalize_url(a["href"], url)
        if href and is_doc_link(href):
            result["documents"] = dedupe_docs(result["documents"] + [{"title": extract_link_title(a), "url": href}])

    stats = extract_stats(main)
    if stats:
        result["stats"] = stats

    # Extract text from primary embedded PDF if page body is mostly empty
    body_text_len = len(clean_text(main.get_text()))
    has_doc_viewer = bool(main.get("id") == "documentviewbody" or soup.select_one("#documentviewbody"))
    if (body_text_len < 120 or has_doc_viewer) and result["documents"]:
        primary = result["documents"][0]
        # Prefer human-readable title from page name over hash filenames
        if primary["title"].endswith(".pdf") and len(primary["title"]) > 20:
            primary = {**primary, "title": page_def["name"]}
            result["documents"][0] = primary
        pdf_paras = extract_pdf_text(primary["url"])
        if pdf_paras:
            # Split long single-page PDF text into sentence chunks
            chunks: list[str] = []
            for block in pdf_paras:
                parts = re.split(r"(?<=[.!?])\s+(?=[A-Z])", block)
                chunks.extend(p.strip() for p in parts if len(p.strip()) > 30)
            if not chunks:
                chunks = pdf_paras
            result["pdfExtract"] = {
                "sourceDocument": primary["title"],
                "sourceUrl": primary["url"],
                "paragraphs": chunks[:40],
            }
            if not result["sections"]:
                result["sections"] = [{
                    "heading": page_def["name"],
                    "content": chunks[:40],
                    "source": "pdf_extract",
                }]

    result["pageStatus"] = "ok"
    return result


def main() -> None:
    results = []
    for page in PAGES:
        print(f"Scraping: {page['name']}...", file=sys.stderr)
        results.append(scrape_page(page))

    output_path = "/Users/venkateshponnuru/Desktop/RGUKT_WEB/frontend/src/data/academicsScraped.json"
    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(results, f, indent=2, ensure_ascii=False)

    print(json.dumps(results, indent=2, ensure_ascii=False))
    print(f"\nSaved to {output_path}", file=sys.stderr)

    ok = sum(1 for r in results if r.get("pageStatus") == "ok")
    missing = sum(1 for r in results if r.get("pageStatus") == "not_found_on_source")
    print(f"Summary: {ok} ok, {missing} not found on source, {len(results)} total", file=sys.stderr)


if __name__ == "__main__":
    main()
