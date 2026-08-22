import scraped from './researchScraped.json';
import {
  ADVISORY_COMMITTEE,
  CROSS_CAMPUS_GROUPS,
  RESEARCH_ETHICS,
  RESEARCH_GUIDELINES,
  RESEARCH_HEAD,
  RESEARCH_HIGHLIGHTS,
  RESEARCH_MOUS,
  RESEARCH_NAV,
  RESEARCH_OVERVIEW_STATS,
  THRUST_AREAS,
} from './researchContent';

export type ResearchDocument = {
  title: string;
  url: string;
};

export type ResearchSection = {
  heading: string;
  content?: string[];
  items?: string[];
};

export type ResearchHighlight = {
  value: string;
  label: string;
};

export type ResearchFeatureCard = {
  kicker: string;
  title: string;
  desc: string;
};

export type ResearchTagGroup = {
  tag: string;
  desc: string;
};

export type ResearchOfficer = {
  name: string;
  photo?: string;
  role?: string;
  bio: string[];
  officeAddress?: string;
  emails: string[];
};

export type ResearchPageData = {
  slug: string;
  displayTitle: string;
  rguktUrl: string;
  heroImage: string;
  intro: string;
  sections: ResearchSection[];
  documents: ResearchDocument[];
  highlights: ResearchHighlight[];
  featureCards: ResearchFeatureCard[];
  tagGroups: ResearchTagGroup[];
  officer?: ResearchOfficer;
  pageStatus: 'ok' | 'not_found_on_source' | 'fallback';
  sourceNote?: string;
};

export const RESEARCH_PAGE_KEYS: Record<string, string> = {
  overview: 'overview',
  head: 'head',
  ethics: 'ethics',
  'thrust-areas': 'thrust-areas',
  guidelines: 'guidelines',
  mous: 'mous',
  'advisory-committee': 'advisory-committee',
};

const DISPLAY_TITLES: Record<string, string> = {
  overview: 'Research Overview',
  head: 'Research Head',
  ethics: 'Ethics for Research',
  'thrust-areas': 'Thrust Areas',
  guidelines: 'Research Guidelines',
  mous: 'Collaboration MoUs',
  'advisory-committee': 'Research Advisory Committee',
};

const HERO_IMAGES: Record<string, string> = {
  overview: '/gallery/gallery-12.jpg',
  head: '/gallery/gallery-11.jpg',
  ethics: '/gallery/gallery-7.jpg',
  'thrust-areas': '/gallery/gallery-2.jpg',
  guidelines: '/gallery/gallery-9.jpg',
  mous: '/gallery/gallery-6.jpg',
  'advisory-committee': '/gallery/gallery-8.jpg',
};

const DOC_TITLES: Record<string, string> = {
  guidelines: 'Research Guidelines (PDF)',
  'advisory-committee': 'Research Advisory Committee (PDF)',
};

function hasSectionContent(sections: ResearchSection[]) {
  return sections.some(s => (s.content?.length ?? 0) > 0 || (s.items?.length ?? 0) > 0);
}

function firstParagraph(sections: ResearchSection[]): string {
  for (const s of sections) {
    if (s.content?.[0]) return s.content[0];
  }
  return '';
}

function extractOfficer(raw: (typeof scraped.pages)[number]): ResearchOfficer | undefined {
  if (raw.slug !== 'head') return undefined;
  const sections = raw.sections as ResearchSection[];
  const bioSection = sections.find(s => s.content?.length);
  const addressSection = sections.find(s => s.heading.toLowerCase().includes('office address'));
  const name = bioSection?.heading?.replace(/\s+M\.Tech.*$/i, '').trim() ?? 'Research Head';

  return {
    name,
    photo: raw.images?.[0],
    role: 'Head of Research',
    bio: bioSection?.content ?? [],
    officeAddress: addressSection?.content?.[0],
    emails: raw.emails ?? [RESEARCH_HEAD.contact.email],
  };
}

function buildFallback(slug: string): Partial<ResearchPageData> {
  switch (slug) {
    case 'overview':
      return {
        intro: 'RGUKT-AP promotes funded research, industry collaboration and innovation across quantum computing, AI/ML, renewable energy, materials science and structural engineering — with active MoUs and cross-campus research groups.',
        highlights: RESEARCH_OVERVIEW_STATS,
        featureCards: RESEARCH_HIGHLIGHTS,
      };
    case 'head':
      return {
        intro: RESEARCH_HEAD.intro,
        sections: [
          { heading: 'Responsibilities', items: RESEARCH_HEAD.duties },
          {
            heading: 'Contact',
            items: [
              `Email: ${RESEARCH_HEAD.contact.email}`,
              `Phone: ${RESEARCH_HEAD.contact.phone}`,
            ],
          },
        ],
        officer: {
          name: 'Dean of Research & Development',
          role: 'Research Head',
          bio: [RESEARCH_HEAD.intro],
          emails: [RESEARCH_HEAD.contact.email],
        },
      };
    case 'ethics':
      return {
        intro: RESEARCH_ETHICS.intro,
        sections: [{ heading: 'Requirements', items: RESEARCH_ETHICS.requirements }],
      };
    case 'thrust-areas':
      return {
        intro: 'Priority research domains at RGUKT-AP aligned with national missions, industry needs and faculty expertise across all campuses.',
        sections: [{ heading: 'University Thrust Areas', items: THRUST_AREAS }],
        tagGroups: CROSS_CAMPUS_GROUPS,
      };
    case 'guidelines':
      return {
        intro: RESEARCH_GUIDELINES.intro,
        sections: [{ heading: 'Guidelines Cover', items: RESEARCH_GUIDELINES.items }],
      };
    case 'mous':
      return {
        intro: RESEARCH_MOUS.intro,
        sections: [{ heading: 'Key Partnerships', items: RESEARCH_MOUS.partnerships }],
      };
    case 'advisory-committee':
      return {
        intro: ADVISORY_COMMITTEE.intro,
        sections: [{ heading: 'Functions', items: ADVISORY_COMMITTEE.functions }],
      };
    default:
      return {};
  }
}

export function getResearchPage(pageKey: string): ResearchPageData {
  const slug = RESEARCH_PAGE_KEYS[pageKey] ?? pageKey;
  const raw = scraped.pages.find(p => p.slug === slug);
  const fallback = buildFallback(slug);

  const rawSections = (raw?.sections ?? []) as ResearchSection[];
  const scrapedHasContent = hasSectionContent(rawSections);
  const sections = scrapedHasContent ? rawSections : (fallback.sections ?? []);
  const intro = slug === 'overview'
    ? (fallback.intro ?? '')
    : scrapedHasContent
      ? (firstParagraph(rawSections) || fallback.intro || '')
      : (fallback.intro ?? '');

  const documents = ((raw?.documents ?? []) as { title: string; url: string }[]).map(d => ({
    title: DOC_TITLES[slug] ?? d.title,
    url: d.url,
  }));

  const officer = raw ? extractOfficer(raw) : fallback.officer;

  if (!raw || raw.pageStatus === 'not_found_on_source') {
    return {
      slug,
      displayTitle: DISPLAY_TITLES[slug] ?? pageKey,
      rguktUrl: raw?.rguktUrl ?? '',
      heroImage: HERO_IMAGES[slug] ?? '/gallery/gallery-12.jpg',
      intro,
      sections,
      documents,
      highlights: fallback.highlights ?? [],
      featureCards: fallback.featureCards ?? [],
      tagGroups: fallback.tagGroups ?? [],
      officer,
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
    heroImage: officer?.photo ?? HERO_IMAGES[slug] ?? '/gallery/gallery-12.jpg',
    intro,
    sections: slug === 'head' && officer ? (fallback.sections ?? []) : sections,
    documents,
    highlights: fallback.highlights ?? [],
    featureCards: fallback.featureCards ?? [],
    tagGroups: slug === 'thrust-areas' ? (fallback.tagGroups ?? []) : [],
    officer,
    pageStatus,
    sourceNote: pageStatus === 'fallback'
      ? 'Additional details supplemented from university records.'
      : undefined,
  };
}

export { RESEARCH_NAV };
