#!/usr/bin/env python3
"""Scrape RGUKT students pages into structured JSON."""

from __future__ import annotations

import json
import re
import subprocess
import urllib.parse

BASE = "https://www.rgukt.in"

PAGES = [
    ("overview", "/students/"),
    ("scholarships", "/students/scholarships/"),
    ("medals", "/students/medal-information/"),
    ("career-growth", "/students/career-growth/"),
    ("quantum-lab", "/students/quantum-computing-lab/"),
    ("anti-ragging", "/students/anti-ragging/"),
    ("icc", "/students/internal-complaint-committee/"),
    ("women-empowerment", "/students/women-empowerment/"),
    ("cultural", "/students/cultural-activities/"),
    ("sports", "/students/sports/"),
    ("community", "/students/community-activities/"),
    ("alumni-engagement", "/students/alumni-engagement/"),
]

SKIP = {
    "also visit", "latest update", "quick links", "happenings", "related links",
    "navigation", "menu", "share", "follow us", "download", "site visits", "posted",
}


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


def parse_helpline(text: str) -> dict | None:
    phones = re.findall(r"1800[-\s]?\d{3}[-\s]?\d{4}|\d{10}", text)
    phones = list(dict.fromkeys(clean(p).replace(" ", "") for p in phones))
    emails = list(dict.fromkeys(re.findall(r"[\w\.-]+@rgukt[\w\.-]*", text)))
    if not phones and not emails:
        return None
    return {
        "phones": phones[:5],
        "emails": emails[:5],
    }


def local_route(slug: str) -> str:
    if slug == "overview":
        return "/students"
    return f"/students/{slug}"


def main() -> None:
    from bs4 import BeautifulSoup

    results = []
    for slug, path in PAGES:
        html = fetch(path)
        if is404(html):
            results.append({
                "slug": slug,
                "rguktUrl": BASE + path,
                "localRoute": local_route(slug),
                "pageStatus": "not_found_on_source",
                "title": "",
                "sections": [],
                "documents": [],
                "images": [],
                "helpline": None,
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
                    if not h or h.lower() in SKIP or h == title:
                        continue
                    current = {"heading": h, "content": [], "items": []}
                    sections.append(current)
                elif el.name == "p":
                    t = clean(el.get_text())
                    if not t or t.lower() in SKIP or len(t) < 20:
                        continue
                    if current is None:
                        current = {"heading": title or "Overview", "content": [], "items": []}
                        sections.append(current)
                    current["content"].append(t)
                elif el.name in ("ul", "ol"):
                    items = [clean(li.get_text()) for li in el.find_all("li", recursive=False)]
                    items = [i for i in items if i and i.lower() not in SKIP and len(i) > 3]
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
                if src and "logo" not in src.lower() and "swiper" not in src.lower():
                    imgs.append(urllib.parse.urljoin(BASE + path, src))

        text = content.get_text("\n", strip=True) if content else ""
        helpline = parse_helpline(text)

        # Many student pages embed content as PDFs referenced in inline scripts
        for script in soup.select("script"):
            src_text = script.string or ""
            for pdf in re.findall(r"https?://[^\s\"']+\.pdf", src_text, re.I):
                docs.append({
                    "title": title or slug.replace("-", " ").title(),
                    "url": pdf,
                })
        docs = list({d["url"]: d for d in docs}.values())

        page_status = "ok" if sections or docs else "not_found_on_source"

        results.append({
            "slug": slug,
            "rguktUrl": BASE + path,
            "localRoute": local_route(slug),
            "pageStatus": page_status,
            "title": title,
            "sections": sections,
            "documents": docs,
            "images": imgs[:8],
            "helpline": helpline,
        })

    out = {"scrapedAt": "2026-08-19", "sourceSite": BASE, "pages": results}
    path_out = "frontend/src/data/studentsScraped.json"
    with open(path_out, "w", encoding="utf-8") as f:
        json.dump(out, f, indent=2, ensure_ascii=False)
    ok = sum(1 for p in results if p["pageStatus"] == "ok")
    print(f"Wrote {len(results)} pages ({ok} ok) to {path_out}")


if __name__ == "__main__":
    main()
