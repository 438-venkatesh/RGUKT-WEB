import scraped from './administrationScraped.json';
import {
  ACADEMIC_COUNCIL,
  ADMIN_NAV,
  ADMIN_OVERVIEW_STATS,
  CAO,
  CAMPUS_DIRECTORS,
  FINANCE_OFFICER,
  GOVERNING_COUNCIL,
  SPORTS_BOARD,
} from './administrationContent';

export type AdminDocument = {
  title: string;
  url: string;
  date?: string;
  size?: string;
};

export type AdminSection = {
  heading: string;
  content?: string[];
  items?: string[];
};

export type AdminHighlight = {
  value: string;
  label: string;
};

export type AdminDirector = {
  name: string;
  campus: string;
  email: string;
  photo?: string;
  campusHref: string;
};

export type AdminOfficerProfile = {
  name: string;
  photo?: string;
  emails: string[];
  officeAddress?: string;
  role?: string;
};

export type AdminPageData = {
  slug: string;
  displayTitle: string;
  rguktUrl: string;
  heroImage: string;
  intro: string;
  sections: AdminSection[];
  documents: AdminDocument[];
  highlights: AdminHighlight[];
  officer?: AdminOfficerProfile;
  directors?: AdminDirector[];
  pageStatus: 'ok' | 'not_found_on_source' | 'fallback';
  sourceNote?: string;
};

export const ADMIN_PAGE_KEYS: Record<string, string> = {
  overview: 'overview',
  'governing-council': 'governing-council',
  chancellor: 'chancellor',
  'academic-council': 'academic-council',
  'vice-chancellor': 'vice-chancellor',
  registrar: 'registrar',
  directors: 'directors',
  cao: 'cao',
  'dean-evaluation': 'dean-evaluation',
  'dean-academics': 'dean-academics',
  'dean-eitp': 'dean-eitp',
  'dean-rd': 'dean-rd',
  'dean-student-affairs': 'dean-student-affairs',
  'finance-officer': 'finance-officer',
  'sports-board': 'sports-board',
};

const DISPLAY_TITLES: Record<string, string> = {
  overview: 'Administration Overview',
  'governing-council': 'Governing Council',
  chancellor: 'Chancellor',
  'academic-council': 'Academic Council',
  'vice-chancellor': 'Vice Chancellor',
  registrar: 'Registrar',
  directors: 'Campus Directors',
  cao: 'Chief Administrative Officer',
  'dean-evaluation': 'Dean of Evaluation',
  'dean-academics': 'Dean of Academics',
  'dean-eitp': 'Dean of EITP',
  'dean-rd': 'Dean of Research & Development',
  'dean-student-affairs': 'Dean of Student Affairs',
  'finance-officer': 'Finance Officer',
  'sports-board': 'Sports Board',
};

const HERO_IMAGES: Record<string, string> = {
  overview: '/hero/hero-convocation.jpg',
  'governing-council': '/gallery/gallery-7.jpg',
  chancellor: '/people/chancellor.jpg',
  'academic-council': '/gallery/gallery-1.jpg',
  'vice-chancellor': '/gallery/gallery-12.jpg',
  registrar: '/gallery/gallery-1.jpg',
  directors: '/campuses/nuzvid.jpg',
  cao: '/gallery/gallery-6.jpg',
  'dean-evaluation': '/gallery/gallery-10.jpg',
  'dean-academics': '/gallery/gallery-2.jpg',
  'dean-eitp': '/gallery/gallery-3.jpg',
  'dean-rd': '/gallery/gallery-4.jpg',
  'dean-student-affairs': '/gallery/gallery-8.jpg',
  'finance-officer': '/gallery/gallery-9.jpg',
  'sports-board': '/gallery/gallery-5.jpg',
};

/** Directors scraped from rgukt.in (Aug 2026) */
const DIRECTORS_LIVE: AdminDirector[] = [
  {
    name: 'Prof. G. Vijaya Prakash',
    campus: 'RK Valley',
    email: 'director@rguktrkv.ac.in',
    photo: 'https://rguktrkv.ac.in/images/GVijayprakash.jpg',
    campusHref: '/campus/rk-valley',
  },
  {
    name: 'Prof. Maddali Lakshmi Narayana Rao (M.L.N. Rao)',
    campus: 'Nuzvid',
    email: 'director@rguktn.ac.in',
    photo: 'https://rguktn.ac.in/administration/images/director.jpg',
    campusHref: '/nuzvid',
  },
  {
    name: 'Prof. Amarendra Kumar Sandra',
    campus: 'Ongole',
    email: 'director@rguktong.ac.in',
    photo: '/campuses/ongole.jpg',
    campusHref: '/campus/ongole',
  },
  {
    name: 'Prof. Giridhar Madras',
    campus: 'Srikakulam',
    email: 'director.sklm@rgukt.in',
    photo: '/campuses/srikakulam.jpg',
    campusHref: '/campus/srikakulam',
  },
];

const SKIP_HEADINGS = new Set([
  'about chancellor',
  'about vice chancellor',
  'about registrar',
  'about chief administrative officer',
  'about dean of evaluation',
  'about dean of academics',
  'about dean of entrepreneurship, incubation, training and placements',
  'about dean of consultancy, research & development',
  'about finance officer',
  'about sports board',
  'contact details:',
  'contact details',
  'profile links :',
  'profile links',
  'office address:',
  'office address',
]);

const NAME_PATTERN = /^(Prof\.|Dr\.|Mrs\.|Mr\.|Ms\.)/;

type ScrapedPage = (typeof scraped.pages)[number];

function cleanTitle(raw: string, slug: string): string {
  return DISPLAY_TITLES[slug] ?? raw.replace(/\s*-\s*Administration.*$/i, '').trim();
}

function normalizeSections(raw: ScrapedPage): AdminSection[] {
  const out: AdminSection[] = [];
  for (const section of raw.sections ?? []) {
    const s = section as {
      heading: string;
      content?: string[];
      items?: (string | { title: string })[];
    };
    const heading = s.heading.trim();
    if (SKIP_HEADINGS.has(heading.toLowerCase())) continue;
    const content = (s.content ?? []).filter(p => p.trim().length > 0);
    const items = (s.items ?? [])
      .map(item => (typeof item === 'string' ? item : item.title))
      .filter(Boolean);
    if (!content.length && !items.length) continue;
    out.push({
      heading,
      ...(content.length ? { content } : {}),
      ...(items.length ? { items } : {}),
    });
  }
  return out;
}

function extractOfficer(raw: ScrapedPage): AdminOfficerProfile | undefined {
  const nameSection = (raw.sections ?? []).find(s =>
    NAME_PATTERN.test(s.heading?.trim() ?? ''),
  );
  if (!nameSection) return undefined;

  const addressSection = (raw.sections ?? []).find(s =>
    s.heading?.toLowerCase().includes('office address'),
  );
  const officeAddress = addressSection?.content?.[0]?.replace(/I3 Block\s*/i, 'I3 Block, ');

  return {
    name: nameSection.heading.trim(),
    photo: raw.images?.[0],
    emails: raw.emails ?? [],
    officeAddress,
    role: cleanTitle(raw.title, raw.slug),
  };
}

function buildFallback(slug: string): Partial<AdminPageData> {
  switch (slug) {
    case 'overview':
      return { highlights: ADMIN_OVERVIEW_STATS };
    case 'governing-council': {
      const overview = scraped.pages.find(p => p.slug === 'overview');
      const gcSections = overview
        ? normalizeSections(overview).filter(s =>
            s.heading.toLowerCase().includes('governing council'),
          )
        : [];
      return {
        intro: GOVERNING_COUNCIL.intro,
        sections: gcSections.length
          ? gcSections
          : [
              { heading: 'Functions', items: GOVERNING_COUNCIL.functions },
              { heading: 'Composition', items: GOVERNING_COUNCIL.composition },
            ],
        pageStatus: 'fallback',
      };
    }
    case 'academic-council':
      return {
        intro: ACADEMIC_COUNCIL.intro,
        sections: [
          { heading: 'Responsibilities', items: ACADEMIC_COUNCIL.responsibilities },
          { heading: 'Composition', items: ACADEMIC_COUNCIL.composition },
        ],
        pageStatus: 'fallback',
      };
    case 'directors':
      return {
        intro: 'Each RGUKT-AP campus is headed by a Campus Director overseeing academic delivery, administration and student welfare.',
        directors: CAMPUS_DIRECTORS.map(d => ({
          name: d.name,
          campus: d.campus,
          email: d.email,
          campusHref: d.campusHref,
        })),
        pageStatus: 'fallback',
      };
    case 'cao':
      return {
        intro: CAO.intro,
        sections: [{ heading: 'Duties', items: CAO.duties }],
        pageStatus: 'fallback',
      };
    case 'finance-officer':
      return {
        intro: FINANCE_OFFICER.intro,
        sections: [{ heading: 'Duties', items: FINANCE_OFFICER.duties }],
        pageStatus: 'fallback',
      };
    case 'sports-board':
      return {
        intro: SPORTS_BOARD.intro,
        sections: [{ heading: 'Activities', items: SPORTS_BOARD.activities }],
        pageStatus: 'fallback',
      };
    case 'dean-student-affairs':
      return {
        intro: 'The Dean of Student Affairs oversees student welfare, hostels, clubs, sports, cultural activities and grievance redressal across all campuses.',
        sections: [{
          heading: 'Responsibilities',
          items: [
            'Student welfare and hostel administration',
            'Anti-ragging and ICC coordination',
            'Sports and cultural festival oversight',
            'Student grievance redressal mechanisms',
          ],
        }],
        pageStatus: 'fallback',
      };
    default:
      return {};
  }
}

function buildIntro(sections: AdminSection[], fallbackIntro?: string): string {
  const first = sections[0]?.content?.[0];
  if (first && first.length <= 360) return first;
  return fallbackIntro ?? '';
}

export function getAdministrationPage(pageKey: string): AdminPageData {
  const slug = ADMIN_PAGE_KEYS[pageKey] ?? pageKey;
  const raw = scraped.pages.find(p => p.slug === slug);
  const fallback = buildFallback(slug);

  if (!raw) {
    return {
      slug,
      displayTitle: DISPLAY_TITLES[slug] ?? pageKey,
      rguktUrl: '',
      heroImage: HERO_IMAGES[slug] ?? '/gallery/gallery-7.jpg',
      intro: fallback.intro ?? '',
      sections: fallback.sections ?? [],
      documents: [],
      highlights: fallback.highlights ?? [],
      directors: fallback.directors,
      pageStatus: 'fallback',
    };
  }

  const sections = normalizeSections(raw);
  const hasLive = raw.pageStatus === 'ok' && (
    sections.length > 0 ||
    (raw.documents?.length ?? 0) > 0 ||
    slug === 'directors'
  );

  if (!hasLive) {
    return {
      slug,
      displayTitle: cleanTitle(raw.title, slug),
      rguktUrl: raw.rguktUrl,
      heroImage: HERO_IMAGES[slug] ?? '/gallery/gallery-7.jpg',
      intro: fallback.intro ?? '',
      sections: fallback.sections ?? [],
      documents: (raw.documents ?? []).map(d => ({ title: d.title, url: d.url })),
      highlights: fallback.highlights ?? [],
      directors: fallback.directors,
      pageStatus: 'fallback',
      sourceNote: 'Page unavailable on rgukt.in — content supplemented locally.',
    };
  }

  let intro = buildIntro(sections, fallback.intro);
  let finalSections = sections;

  if (intro && finalSections[0]?.content?.[0] === intro) {
    finalSections = [
      {
        ...finalSections[0],
        content: finalSections[0].content!.slice(1),
      },
      ...finalSections.slice(1),
    ].filter(s => (s.content?.length ?? 0) > 0 || (s.items?.length ?? 0) > 0);
  }

  const officer = extractOfficer(raw);
  if (officer) {
    finalSections = finalSections.filter(s => s.heading.trim() !== officer.name);
  }

  const heroImage = officer?.photo?.startsWith('http') ? officer.photo : (HERO_IMAGES[slug] ?? '/gallery/gallery-7.jpg');

  return {
    slug,
    displayTitle: cleanTitle(raw.title, slug),
    rguktUrl: raw.rguktUrl,
    heroImage,
    intro,
    sections: finalSections,
    documents: (raw.documents ?? []).map(d => ({ title: d.title, url: d.url })),
    highlights: fallback.highlights ?? [],
    officer,
    directors: slug === 'directors' ? DIRECTORS_LIVE : fallback.directors,
    pageStatus: 'ok',
  };
}

export function getAdministrationPageByPath(pathname: string): AdminPageData | undefined {
  const entry = Object.entries(ADMIN_PAGE_KEYS).find(([, slug]) =>
    pathname === '/administration' ? slug === 'overview' : pathname === `/administration/${slug}`,
  );
  if (!entry) return undefined;
  return getAdministrationPage(entry[0]);
}

export { ADMIN_NAV };
