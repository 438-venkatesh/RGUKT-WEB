import scraped from './nuzvidScraped.json';
import { NUZVID_CONTENT_ROUTES } from './nuzvidNav';

export type NuzvidDocument = { title: string; url: string };
export type NuzvidSection = { heading: string; content?: string[]; items?: string[] };
export type NuzvidTable = { caption: string; rows: string[][] };

export type NuzvidOfficer = {
  name: string;
  photo?: string;
  role?: string;
  bio: string[];
  emails: string[];
};

export type NuzvidPageData = {
  path: string;
  displayTitle: string;
  sourceUrl: string;
  heroImage: string;
  intro: string;
  sections: NuzvidSection[];
  documents: NuzvidDocument[];
  images: string[];
  tables: NuzvidTable[];
  officer?: NuzvidOfficer;
  pageStatus: 'ok' | 'not_found_on_source' | 'fallback';
  sourceNote?: string;
};

const TITLE_MAP = Object.fromEntries(
  NUZVID_CONTENT_ROUTES.map(r => [r.path, r.title]),
);

const HERO_IMAGES: Record<string, string> = {
  gallery: '/campuses/nuzvid.jpg',
  'administration/director': '/hero/hero-convocation.jpg',
  departments: '/gallery/gallery-7.jpg',
};

function deptHero(path: string): string {
  if (path.startsWith('departments/')) return '/gallery/gallery-1.jpg';
  if (path.startsWith('administration/')) return '/gallery/gallery-12.jpg';
  if (path.startsWith('about/')) return '/campuses/nuzvid.jpg';
  if (path.startsWith('students/')) return '/gallery/gallery-8.jpg';
  if (path.startsWith('academics/')) return '/gallery/gallery-9.jpg';
  return '/campuses/nuzvid.jpg';
}

function firstParagraph(sections: NuzvidSection[]): string {
  for (const s of sections) {
    if (s.content?.[0]) return s.content[0];
  }
  return '';
}

function extractOfficer(raw: (typeof scraped.pages)[number]): NuzvidOfficer | undefined {
  if (!raw.path.startsWith('administration/') || raw.path === 'administration') return undefined;
  const bioSection = raw.sections.find(s => s.content?.length);
  if (!bioSection && !raw.images?.[0]) return undefined;
  const name = bioSection?.heading?.split(',')[0]?.trim() ?? TITLE_MAP[raw.path] ?? 'Officer';
  return {
    name,
    photo: raw.images?.[0],
    role: TITLE_MAP[raw.path],
    bio: bioSection?.content ?? [],
    emails: raw.emails ?? [],
  };
}

export function getNuzvidPage(pagePath: string): NuzvidPageData {
  const raw = scraped.pages.find(p => p.path === pagePath);
  const displayTitle = TITLE_MAP[pagePath] ?? raw?.title ?? pagePath;

  if (!raw || raw.pageStatus === 'not_found_on_source') {
    return {
      path: pagePath,
      displayTitle,
      sourceUrl: raw?.sourceUrl ?? `https://rguktn.ac.in/`,
      heroImage: HERO_IMAGES[pagePath] ?? deptHero(pagePath),
      intro: '',
      sections: [],
      documents: [],
      images: [],
      tables: [],
      pageStatus: 'fallback',
      sourceNote: 'Content unavailable on rguktn.ac.in — check back later.',
    };
  }

  const sections = raw.sections as NuzvidSection[];
  const officer = extractOfficer(raw);
  const intro = firstParagraph(sections);
  const heroImage = raw.images?.[0] ?? HERO_IMAGES[pagePath] ?? deptHero(pagePath);

  return {
    path: pagePath,
    displayTitle,
    sourceUrl: raw.sourceUrl,
    heroImage,
    intro: pagePath.startsWith('administration/') && officer ? '' : intro,
    sections: officer
      ? sections.filter(s => s.heading !== officer.name && !s.heading.startsWith(officer.name.split(' ')[0]))
      : sections,
    documents: raw.documents as NuzvidDocument[],
    images: raw.images ?? [],
    tables: raw.tables as NuzvidTable[],
    officer,
    pageStatus: 'ok',
  };
}

export function getNuzvidPagePaths(): string[] {
  return scraped.pages.map(p => p.path);
}
