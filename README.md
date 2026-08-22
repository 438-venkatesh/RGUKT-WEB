# RGUKT-WEB

Rajiv Gandhi University of Knowledge Technologies — Andhra Pradesh website (main portal + Nuzvid campus sub-site).

## Stack

- **Frontend:** React, TypeScript, Vite
- **Content:** Scraped from [rgukt.in](https://www.rgukt.in/) and [rguktn.ac.in](https://rguktn.ac.in/) with local fallbacks

## Development

```bash
cd frontend
npm install
npm run dev
```

## Scrapers

```bash
python3 scripts/scrape_academics.py
python3 scripts/scrape_administration.py
python3 scripts/scrape_admissions.py
python3 scripts/scrape_students.py
python3 scripts/scrape_research.py
python3 scripts/scrape_nuzvid.py
```
