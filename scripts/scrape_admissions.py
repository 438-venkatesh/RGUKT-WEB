#!/usr/bin/env python3
"""Scrape RGUKT admissions pages into structured JSON."""

from __future__ import annotations

import json
import re
import subprocess
import urllib.parse

BASE = "https://www.rgukt.in"
PORTAL = "https://admissions.rgukt.in/"

PAGES = [
    ("overview", "/admissions/ug-admissions/"),
    ("2025", "/admissions/ug-admissions/2025/"),
    ("2026", "/admissions/ug-admissions/2026/"),
    ("postgraduate", "/admissions/pg-admissions/"),
    ("doctoral", "/admissions/doctorial-admissions/"),
]


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


def parse_banner(text: str) -> dict | None:
    low = text.lower()
    banner: dict = {}
    if "registrations are open" in low:
        banner["status"] = "open"
        banner["headline"] = "Registrations are Open"
    elif "registrations are closed" in low:
        banner["status"] = "closed"
        banner["headline"] = "Registrations are Closed"
    m = re.search(r"Last Date\s*:\s*([^\\n]+?)(?:\\s*5\\.00|\\s*5:00|$)", text, re.I)
    if m:
        banner["lastDate"] = clean(m.group(1))
    if banner:
        banner["applyUrl"] = PORTAL
    return banner or None


def parse_helpline(text: str) -> dict | None:
    emails = [e for e in re.findall(r"[\w\.-]+@rgukt\.in", text) if "swiper" not in e]
    phones = re.findall(r"97\d{3}\s?\d{5}", text)
    phones = list(dict.fromkeys(p.replace(" ", "") for p in phones))
    if not emails and not phones:
        return None
    timings_match = re.search(
        r"Timings:\s*(10:00 AM to 1:00 PM and 2:00 PM to 5:00 PM[^\\n]*)",
        text,
        re.I,
    )
    return {
        "email": emails[0] if emails else "admissions@rgukt.in",
        "phones": phones,
        "timings": clean(timings_match.group(1)) if timings_match else "10:00 AM – 1:00 PM and 2:00 PM – 5:00 PM (working days)",
        "emailFields": [
            "RGUKT Application Number",
            "Full Name",
            "SSC Hall Ticket Number",
            "Mobile Number",
            "Problem Description",
        ],
    }


def main() -> None:
    from bs4 import BeautifulSoup

    results = []
    for slug, path in PAGES:
        html = fetch(path)
        if "can't find that page" in html.lower():
            results.append({
                "slug": slug,
                "rguktUrl": BASE + path,
                "pageStatus": "not_found_on_source",
                "title": "",
                "sections": [],
                "documents": [],
            })
            continue

        soup = BeautifulSoup(html, "html.parser")
        content = soup.select_one("#kt_app_content") or soup.select_one("#documentviewbody")
        text = content.get_text("\n", strip=True) if content else ""
        banner = parse_banner(text)
        helpline = parse_helpline(text)

        docs = []
        if content:
            for a in content.select("a[href]"):
                href = a.get("href", "")
                if ".pdf" in href.lower():
                    docs.append({
                        "title": clean(a.get_text()) or "Document",
                        "url": urllib.parse.urljoin(BASE + path, href),
                    })

        results.append({
            "slug": slug,
            "rguktUrl": BASE + path,
            "localRoute": "/admissions" if slug == "overview" else f"/admissions/{slug}",
            "pageStatus": "ok",
            "title": slug.replace("-", " ").title(),
            "sections": [],
            "documents": docs,
            "banner": banner,
            "helpline": helpline,
            "portalUrl": PORTAL,
        })

    out = {"scrapedAt": "2026-08-19", "sourceSite": BASE, "portalUrl": PORTAL, "pages": results}
    path_out = "frontend/src/data/admissionsScraped.json"
    with open(path_out, "w", encoding="utf-8") as f:
        json.dump(out, f, indent=2, ensure_ascii=False)
    print(f"Wrote {len(results)} pages to {path_out}")


if __name__ == "__main__":
    main()
