#!/usr/bin/env python3
"""Scrape RGUKT Nuzvid (rguktn.ac.in) pages into structured JSON."""

from __future__ import annotations

import json
import re
import subprocess
import time
import urllib.parse

BASE = "https://rguktn.ac.in"

# Mirrors frontend/src/data/nuzvidNav.ts — NUZVID_CONTENT_ROUTES
PAGES = [
    ("about/campus-life", "about/CampusLife/"),
    ("about/education-system", "about/EducationSystem/"),
    ("about/achievements", "about/achievements/"),
    ("about/governing-council", "about/GoverningCouncil/"),
    ("gallery", "gallery/"),
    ("rti", "rti/"),
    ("ombudsperson", "ombudsperson.php"),
    ("academics/programmes", "academics/programmes/"),
    ("academics/curricula", "academics/curricula/"),
    ("academics/regulations", "academics/academic-regulations/"),
    ("academics/calendar", "academics/academic_calendar/"),
    ("administration", "administration/"),
    ("administration/chancellor", "administration/chancellor/"),
    ("administration/vice-chancellor", "administration/vice-chancellor/"),
    ("administration/director", "administration/director/"),
    ("administration/ao", "administration/ao/"),
    ("administration/finance-officer", "administration/fo/"),
    ("administration/dean-academics", "administration/dean-academics/"),
    ("administration/dean-student-welfare", "administration/dean-studentwelfare/"),
    ("administration/coe", "administration/coe/"),
    ("administration/department-heads", "academics/departments/department-heads.php"),
    ("students", "about/EducationSystem/"),
    ("students/anti-ragging", "student_affairs/antiragging/"),
    ("students/student-welfare", "student_affairs/student_welfare/"),
    ("students/ncc", "student_affairs/ncc/"),
    ("students/nss", "student_affairs/nss/"),
    ("students/convocation", "convocation/"),
    ("tenders", "tenders/"),
    ("careers", "careers/"),
    ("contact/directory", "contactus/communication-directory/"),
    ("admissions", "about/aboutrgukt/"),
    ("departments", "academics/departments/"),
    ("departments/che", "departments/che"),
    ("departments/ce", "departments/ce"),
    ("departments/cse", "departments/cse"),
    ("departments/ece", "departments/ece"),
    ("departments/eee", "departments/eee"),
    ("departments/me", "departments/me"),
    ("departments/mme", "departments/mme"),
    ("departments/bio", "academics/departments/bio/"),
    ("departments/chemistry", "academics/departments/chemistry/"),
    ("departments/physics", "academics/departments/physics/"),
    ("departments/mathematics", "academics/departments/mathematics/"),
    ("departments/it", "academics/departments/information-technology/"),
    ("departments/english", "academics/departments/english/"),
    ("departments/management", "academics/departments/management/"),
    ("departments/telugu", "academics/departments/telugu/"),
    ("departments/performing-arts", "academics/departments/performing-arts"),
    ("departments/pe-yoga", "academics/departments/physical-education-and-yoga/"),
]

SKIP = {
    "navigation", "home", "about", "download", "posted", "login", "name of the work",
    "closing date", "status", "downloads", "s.no", "menu",
}


def clean(t: str) -> str:
    return re.sub(r"\s+", " ", (t or "")).strip()


def fetch(source_path: str) -> tuple[str, str]:
    candidates = [
        f"{BASE}/{source_path.lstrip('/')}",
        f"{BASE}/{source_path.lstrip('/').rstrip('/')}",
        f"{BASE}/{source_path.lstrip('/').rstrip('/')}/",
    ]
    seen = []
    for url in candidates:
        if url in seen:
            continue
        seen.append(url)
        r = subprocess.run(
            ["curl", "-sL", url, "-A", "Mozilla/5.0"],
            capture_output=True,
            text=True,
            timeout=90,
            check=False,
        )
        html = r.stdout or ""
        if len(html) > 800:
            return html, url
    return "", candidates[0]


def get_content(soup):
    for sel in [".col-md-9", ".col-md-8", ".panel-body"]:
        for el in soup.select(sel):
            text = el.get_text(strip=True)
            if len(text) > 80:
                return el
    return soup.select_one(".panel-body") or soup.select_one("main")


def abs_url(base_url: str, href: str) -> str:
    return urllib.parse.urljoin(base_url, href)


def parse_page(local_path: str, source_path: str) -> dict:
    # pyrefly: ignore [missing-import]
    from bs4 import BeautifulSoup

    html, used_url = fetch(source_path)
    if not html:
        return {
            "path": local_path,
            "sourcePath": source_path,
            "sourceUrl": f"{BASE}/{source_path}",
            "localRoute": f"/nuzvid/{local_path}",
            "pageStatus": "not_found_on_source",
            "title": "",
            "sections": [],
            "documents": [],
            "images": [],
            "tables": [],
            "emails": [],
        }

    soup = BeautifulSoup(html, "html.parser")
    low = soup.get_text()[:600].lower()
    if "404" in low and "not found" in low:
        return {
            "path": local_path,
            "sourcePath": source_path,
            "sourceUrl": used_url,
            "localRoute": f"/nuzvid/{local_path}",
            "pageStatus": "not_found_on_source",
            "title": "",
            "sections": [],
            "documents": [],
            "images": [],
            "tables": [],
            "emails": [],
        }

    content = get_content(soup)
    title_el = content.select_one("h1, h2, h3") if content else None
    title = clean(title_el.get_text()) if title_el else local_path.split("/")[-1].replace("-", " ").title()

    sections = []
    current = None
    docs = []
    imgs = []
    tables = []

    if content:
        for el in content.find_all(["h1", "h2", "h3", "h4", "h5", "p", "ul", "ol", "table", "img", "a"]):
            if el.name == "img":
                src = el.get("src", "")
                if src and "logo" not in src.lower() and "spinner" not in src.lower():
                    imgs.append(abs_url(used_url, src))
            elif el.name in ("h1", "h2", "h3", "h4", "h5"):
                h = clean(el.get_text())
                if not h or h.lower() in SKIP or h == title:
                    continue
                current = {"heading": h, "content": [], "items": []}
                sections.append(current)
            elif el.name == "p":
                t = clean(el.get_text())
                if len(t) < 15 or t.lower() in SKIP:
                    continue
                if current is None:
                    current = {"heading": "Overview", "content": [], "items": []}
                    sections.append(current)
                current["content"].append(t)
            elif el.name in ("ul", "ol"):
                items = [clean(li.get_text()) for li in el.find_all("li", recursive=False)]
                items = [i for i in items if len(i) > 2 and i.lower() not in SKIP]
                if items:
                    if current is None:
                        current = {"heading": "Overview", "content": [], "items": []}
                        sections.append(current)
                    current["items"].extend(items)
            elif el.name == "table":
                rows = []
                for tr in el.find_all("tr"):
                    cells = [clean(td.get_text()) for td in tr.find_all(["th", "td"])]
                    if any(cells):
                        rows.append(cells)
                if rows:
                    tables.append({
                        "caption": current["heading"] if current else "Details",
                        "rows": rows[:40],
                    })
            elif el.name == "a":
                href = el.get("href", "")
                if ".pdf" in href.lower() or "/downloads/" in href.lower():
                    docs.append({
                        "title": clean(el.get_text()) or "Document",
                        "url": abs_url(used_url, href),
                    })

    for script in soup.select("script"):
        src_text = script.string or ""
        for pdf in re.findall(r"https?://[^\s\"']+\.pdf", src_text, re.I):
            docs.append({"title": title, "url": pdf})

    docs = list({d["url"]: d for d in docs}.values())
    imgs = list(dict.fromkeys(imgs))[:16]
    emails = list(dict.fromkeys(re.findall(r"[\w\.-]+@rgukt[\w\.-]*", html)))

    page_status = "ok" if sections or docs or tables or imgs else "not_found_on_source"

    return {
        "path": local_path,
        "sourcePath": source_path,
        "sourceUrl": used_url,
        "localRoute": f"/nuzvid/{local_path}",
        "pageStatus": page_status,
        "title": title,
        "sections": sections,
        "documents": docs[:25],
        "images": imgs,
        "tables": tables[:8],
        "emails": emails[:8],
    }


def main() -> None:
    results = []
    ok = 0
    for i, (local_path, source_path) in enumerate(PAGES):
        print(f"[{i + 1}/{len(PAGES)}] {local_path}...", flush=True)
        results.append(parse_page(local_path, source_path))
        if results[-1]["pageStatus"] == "ok":
            ok += 1
        time.sleep(0.15)

    out = {
        "scrapedAt": "2026-08-19",
        "sourceSite": BASE,
        "pages": results,
    }
    path_out = "frontend/src/data/nuzvidScraped.json"
    with open(path_out, "w", encoding="utf-8") as f:
        json.dump(out, f, indent=2, ensure_ascii=False)
    print(f"Wrote {len(results)} pages ({ok} ok) to {path_out}")


if __name__ == "__main__":
    main()
