#!/usr/bin/env python3
"""Scrape RGUKT administration pages into structured JSON."""

from __future__ import annotations

import json
import re
import subprocess
import urllib.parse

BASE = "https://www.rgukt.in"

PAGES = [
    ("overview", "/administration/"),
    ("governing-council", "/administration/governing-council/"),
    ("chancellor", "/administration/chancellor/"),
    ("academic-council", "/administration/academic-council/"),
    ("vice-chancellor", "/administration/vice-chancellor/"),
    ("registrar", "/administration/registrar/"),
    ("directors", "/administration/directors/"),
    ("cao", "/administration/chief-administrative-officer/"),
    ("dean-evaluation", "/administration/dean-evaluation/"),
    ("dean-academics", "/administration/dean-academics/"),
    ("dean-eitp", "/administration/dean-eitp/"),
    ("dean-rd", "/administration/dean-rd/"),
    ("dean-student-affairs", "/administration/dean-student-affairs/"),
    ("finance-officer", "/administration/finance-officer/"),
    ("sports-board", "/administration/sports-board/"),
]

SKIP = {"also visit", "latest update", "quick links", "happenings", "related links", "navigation", "menu", "share", "follow us", "download", "site visits", "posted"}


def fetch(path: str) -> str:
    r = subprocess.run(
        ["curl", "-sL", f"{BASE}{path}", "-A", "Mozilla/5.0"],
        capture_output=True,
        text=True,
        timeout=60,
        check=True,
    )
    return r.stdout


def clean(t: str) -> str:
    return re.sub(r"\s+", " ", (t or "")).strip()


def is404(html: str) -> bool:
    low = html.lower()
    return "can't find that page" in low or ("oops" in low and "404" in low)


def main() -> None:
    from bs4 import BeautifulSoup

    results = []
    for slug, path in PAGES:
        html = fetch(path)
        if is404(html):
            results.append({
                "slug": slug,
                "rguktUrl": BASE + path,
                "localRoute": "/administration" if slug == "overview" else f"/administration/{slug}",
                "pageStatus": "not_found_on_source",
                "title": "",
                "sections": [],
                "documents": [],
            })
            continue

        soup = BeautifulSoup(html, "html.parser")
        content = soup.select_one("#documentviewbody") or soup.select_one("#kt_app_content")
        title_el = content.select_one("h4") if content else None
        title = clean(title_el.get_text()) if title_el else ""

        sections = []
        current = None
        docs = []
        if content:
            for el in content.find_all(["h3", "h4", "h5", "p", "ul", "ol", "a"]):
                if el.name in ("h3", "h4", "h5"):
                    h = clean(el.get_text())
                    if not h or h.lower() in SKIP:
                        continue
                    current = {"heading": h, "content": [], "items": []}
                    sections.append(current)
                elif el.name == "p":
                    t = clean(el.get_text())
                    if not t or t.lower() in SKIP:
                        continue
                    if current is None:
                        current = {"heading": title or "Overview", "content": [], "items": []}
                        sections.append(current)
                    current["content"].append(t)
                elif el.name in ("ul", "ol"):
                    items = [clean(li.get_text()) for li in el.find_all("li", recursive=False)]
                    items = [i for i in items if i and i.lower() not in SKIP]
                    if items:
                        if current is None:
                            current = {"heading": title or "Overview", "content": [], "items": []}
                            sections.append(current)
                        current["items"].extend(items)
                elif el.name == "a":
                    href = el.get("href", "")
                    if ".pdf" in href.lower() or "/files/pdfs/" in href:
                        docs.append({
                            "title": clean(el.get_text()) or "Document",
                            "url": urllib.parse.urljoin(BASE + path, href),
                        })

        imgs = []
        if content:
            for img in content.select("img"):
                src = img.get("src", "")
                if src and "logo" not in src.lower():
                    imgs.append(urllib.parse.urljoin(BASE + path, src))

        emails = list(dict.fromkeys(re.findall(r"[\w\.-]+@rgukt[\w\.-]*", html)))

        results.append({
            "slug": slug,
            "rguktUrl": BASE + path,
            "localRoute": "/administration" if slug == "overview" else f"/administration/{slug}",
            "pageStatus": "ok",
            "title": title,
            "sections": sections,
            "documents": docs,
            "images": imgs[:5],
            "emails": emails[:5],
        })

    out = {"scrapedAt": "2026-08-19", "sourceSite": BASE, "pages": results}
    path_out = "frontend/src/data/administrationScraped.json"
    with open(path_out, "w", encoding="utf-8") as f:
        json.dump(out, f, indent=2, ensure_ascii=False)
    print(f"Wrote {len(results)} pages to {path_out}")


if __name__ == "__main__":
    main()
