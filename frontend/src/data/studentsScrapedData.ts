import scraped from './studentsScraped.json';
import {
  ALUMNI_ENGAGEMENT,
  ANTI_RAGGING,
  CAREER_GROWTH,
  COMMUNITY,
  CULTURAL,
  ICC,
  MEDALS,
  QUANTUM_LAB,
  SCHOLARSHIPS,
  SPORTS,
  STUDENTS_NAV,
  STUDENTS_OVERVIEW_STATS,
  WOMEN_EMPOWERMENT,
} from './studentsContent';

export type StudentsDocument = {
  title: string;
  url: string;
};

export type StudentsSection = {
  heading: string;
  content?: string[];
  items?: string[];
};

export type StudentsHighlight = {
  value: string;
  label: string;
};

export type StudentsHelpline = {
  phones: string[];
  emails: string[];
};

export type StudentsPageData = {
  slug: string;
  displayTitle: string;
  rguktUrl: string;
  heroImage: string;
  intro: string;
  sections: StudentsSection[];
  documents: StudentsDocument[];
  highlights: StudentsHighlight[];
  helpline?: StudentsHelpline;
  externalUrl?: string;
  pageStatus: 'ok' | 'not_found_on_source' | 'fallback';
  sourceNote?: string;
};

export const STUDENTS_PAGE_KEYS: Record<string, string> = {
  overview: 'overview',
  scholarships: 'scholarships',
  medals: 'medals',
  'career-growth': 'career-growth',
  'quantum-lab': 'quantum-lab',
  'anti-ragging': 'anti-ragging',
  icc: 'icc',
  'women-empowerment': 'women-empowerment',
  cultural: 'cultural',
  sports: 'sports',
  community: 'community',
  'alumni-engagement': 'alumni-engagement',
};

const DISPLAY_TITLES: Record<string, string> = {
  overview: 'Student Life',
  scholarships: 'Scholarships',
  medals: 'Medal Information',
  'career-growth': 'Career Growth',
  'quantum-lab': 'Quantum Computing Lab',
  'anti-ragging': 'Anti Ragging',
  icc: 'Internal Complaint Committee',
  'women-empowerment': 'Women Empowerment',
  cultural: 'Cultural Activities',
  sports: 'Sports',
  community: 'Community Activities',
  'alumni-engagement': 'Alumni Engagement',
};

const HERO_IMAGES: Record<string, string> = {
  overview: '/gallery/gallery-5.jpg',
  scholarships: '/gallery/gallery-9.jpg',
  medals: '/hero/hero-convocation.jpg',
  'career-growth': '/gallery/gallery-11.jpg',
  'quantum-lab': '/gallery/gallery-2.jpg',
  'anti-ragging': '/gallery/gallery-8.jpg',
  icc: '/gallery/gallery-6.jpg',
  'women-empowerment': '/gallery/gallery-4.jpg',
  cultural: '/gallery/gallery-10.jpg',
  sports: '/gallery/gallery-13.jpg',
  community: '/gallery/gallery-14.jpg',
  'alumni-engagement': '/gallery/gallery-12.jpg',
};

const DOC_TITLES: Record<string, string> = {
  scholarships: 'Scholarships Information (PDF)',
  medals: 'Medal Information (PDF)',
  cultural: 'Cultural Activities (PDF)',
};

function hasSectionContent(sections: StudentsSection[]) {
  return sections.some(s => (s.content?.length ?? 0) > 0 || (s.items?.length ?? 0) > 0);
}

function firstParagraph(sections: StudentsSection[]): string {
  for (const s of sections) {
    if (s.content?.[0]) return s.content[0];
  }
  return '';
}

function buildFallback(slug: string): Partial<StudentsPageData> {
  switch (slug) {
    case 'overview':
      return {
        intro: 'RGUKT-AP supports holistic student development through scholarships, career guidance, quantum computing labs, sports and cultural activities, welfare committees, and strong alumni engagement across all four residential campuses.',
        highlights: STUDENTS_OVERVIEW_STATS,
      };
    case 'scholarships':
      return {
        intro: SCHOLARSHIPS.intro,
        sections: [{ heading: 'Schemes', items: SCHOLARSHIPS.schemes }],
      };
    case 'medals':
      return {
        intro: MEDALS.intro,
        sections: [{ heading: 'Medal Categories', items: MEDALS.categories }],
      };
    case 'career-growth':
      return {
        intro: CAREER_GROWTH.intro,
        sections: [{ heading: 'Programmes', items: CAREER_GROWTH.programmes }],
        pageStatus: 'fallback',
      };
    case 'quantum-lab':
      return {
        intro: QUANTUM_LAB.intro,
        sections: [{ heading: 'Highlights', items: QUANTUM_LAB.highlights }],
        externalUrl: 'https://quantumtech.rgukt.in/',
        pageStatus: 'fallback',
      };
    case 'anti-ragging':
      return {
        intro: ANTI_RAGGING.intro,
        sections: [{ heading: 'Helpline & Compliance', items: ANTI_RAGGING.helpline }],
        helpline: { phones: ['1800-180-5522'], emails: ['helpline@antiragging.in'] },
      };
    case 'icc':
      return {
        intro: ICC.intro,
        sections: [{ heading: 'Contact & Grievance Redressal', items: ICC.contact }],
        pageStatus: 'fallback',
      };
    case 'women-empowerment':
      return {
        intro: WOMEN_EMPOWERMENT.intro,
        sections: [{ heading: 'Activities', items: WOMEN_EMPOWERMENT.activities }],
      };
    case 'cultural':
      return {
        intro: CULTURAL.intro,
        sections: [{ heading: 'Highlights', items: CULTURAL.highlights }],
      };
    case 'sports':
      return {
        intro: SPORTS.intro,
        sections: [{ heading: 'Facilities', items: SPORTS.facilities }],
        pageStatus: 'fallback',
      };
    case 'community':
      return {
        intro: COMMUNITY.intro,
        sections: [{ heading: 'Initiatives', items: COMMUNITY.initiatives }],
        pageStatus: 'fallback',
      };
    case 'alumni-engagement':
      return {
        intro: ALUMNI_ENGAGEMENT.intro,
        sections: [{ heading: 'Programmes', items: ALUMNI_ENGAGEMENT.activities }],
      };
    default:
      return {};
  }
}

export function getStudentsPage(pageKey: string): StudentsPageData {
  const slug = STUDENTS_PAGE_KEYS[pageKey] ?? pageKey;
  const raw = scraped.pages.find(p => p.slug === slug);
  const fallback = buildFallback(slug);

  const rawSections = (raw?.sections ?? []) as StudentsSection[];
  const scrapedHasContent = hasSectionContent(rawSections);
  const sections = scrapedHasContent ? rawSections : (fallback.sections ?? []);
  const intro = scrapedHasContent
    ? (firstParagraph(rawSections) || fallback.intro || '')
    : (fallback.intro ?? '');

  const documents = ((raw?.documents ?? []) as { title: string; url: string }[]).map(d => ({
    title: DOC_TITLES[slug] ?? d.title,
    url: d.url,
  }));

  const helpline = slug === 'anti-ragging' && (raw?.helpline || fallback.helpline)
    ? { phones: ['1800-180-5522'], emails: ['helpline@antiragging.in'] }
    : ((raw?.helpline as StudentsHelpline | undefined) ?? fallback.helpline);

  if (!raw || raw.pageStatus === 'not_found_on_source') {
    return {
      slug,
      displayTitle: DISPLAY_TITLES[slug] ?? pageKey,
      rguktUrl: raw?.rguktUrl ?? '',
      heroImage: HERO_IMAGES[slug] ?? '/gallery/gallery-5.jpg',
      intro,
      sections,
      documents,
      highlights: fallback.highlights ?? [],
      helpline,
      externalUrl: fallback.externalUrl,
      pageStatus: 'fallback',
      sourceNote: raw
        ? 'Content supplemented from university records — page unavailable on rgukt.in.'
        : undefined,
    };
  }

  const pageStatus = scrapedHasContent || documents.length > 0 ? 'ok' : 'fallback';

  return {
    slug,
    displayTitle: DISPLAY_TITLES[slug] ?? slug,
    rguktUrl: raw.rguktUrl,
    heroImage: HERO_IMAGES[slug] ?? '/gallery/gallery-5.jpg',
    intro,
    sections,
    documents,
    highlights: fallback.highlights ?? [],
    helpline,
    externalUrl: fallback.externalUrl,
    pageStatus,
    sourceNote: pageStatus === 'fallback'
      ? 'Additional details supplemented from university records.'
      : undefined,
  };
}

export { STUDENTS_NAV };
