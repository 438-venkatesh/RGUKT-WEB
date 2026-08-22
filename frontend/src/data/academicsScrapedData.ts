import scraped from './academicsScraped.json';
import {
  ACADEMICS_DOCUMENTS,
  ACADEMICS_OVERVIEW_STATS,
  CALENDAR_DATES,
  EXAM_SCHEDULES,
  LIBRARY_SERVICES,
  LIBRARY_STATS,
  LMS_FEATURES,
  LMS_PORTALS,
  ORIENTATION_COMPONENTS,
  SCHOLARSHIPS,
  SUMMER_PROGRAMMES,
  UG_BRANCHES,
} from './academicsContent';

export type AcademicsDocument = {
  title: string;
  url: string;
  date?: string;
  size?: string;
};

export type AcademicsSection = {
  heading: string;
  content?: string[];
  items?: (string | { title: string; url?: string; date?: string })[];
  documents?: AcademicsDocument[];
};

export type AcademicsHighlight = {
  value: string;
  label: string;
};

export type AcademicsPageData = {
  slug: string;
  displayTitle: string;
  rguktUrl: string;
  heroImage: string;
  intro: string;
  sections: AcademicsSection[];
  documents: AcademicsDocument[];
  highlights: AcademicsHighlight[];
  pageStatus: 'ok' | 'not_found_on_source' | 'fallback';
  sourceNote?: string;
};

/** Route path segment → scraped JSON slug */
export const ACADEMICS_PAGE_KEYS: Record<string, string> = {
  overview: 'overview',
  undergraduate: 'undergraduate',
  postgraduate: 'postgraduate',
  'research-programmes': 'research',
  summer: 'summer',
  regulations: 'regulations',
  calendar: 'calendar',
  curriculum: 'curriculum',
  examinations: 'examination-procedures',
  'exam-schedules': 'examination-schedules',
  'central-library': 'central-library',
  lms: 'lms',
  timetables: 'timetables',
  scholarships: 'scholarships',
  orientation: 'orientation',
  'council-minutes': 'council-minutes',
};

const DISPLAY_TITLES: Record<string, string> = {
  overview: 'Academics Overview',
  undergraduate: 'Undergraduate Programmes',
  postgraduate: 'Postgraduate Programmes',
  research: 'Research Programmes',
  summer: 'Summer Programmes',
  regulations: 'Academic Regulations',
  calendar: 'Academic Calendar',
  curriculum: 'Academic Curriculum',
  'examination-procedures': 'Examination Procedures',
  'examination-schedules': 'Examination Schedules',
  'central-library': 'Central Library',
  lms: 'Learning Management System',
  timetables: 'Timetables',
  scholarships: 'Scholarships & Financial Assistance',
  orientation: 'Orientation Programme',
  'council-minutes': 'Council Minutes',
};

const HERO_IMAGES: Record<string, string> = {
  overview: '/gallery/gallery-7.jpg',
  undergraduate: '/campuses/nuzvid.jpg',
  postgraduate: '/gallery/gallery-1.jpg',
  research: '/gallery/gallery-12.jpg',
  summer: '/gallery/gallery-3.jpg',
  regulations: '/gallery/gallery-9.jpg',
  calendar: '/gallery/gallery-6.jpg',
  curriculum: '/gallery/gallery-2.jpg',
  'examination-procedures': '/gallery/gallery-4.jpg',
  'examination-schedules': '/gallery/gallery-5.jpg',
  'central-library': '/gallery/gallery-8.jpg',
  lms: '/gallery/gallery-10.jpg',
  timetables: '/gallery/gallery-11.jpg',
  scholarships: '/hero/hero-convocation.jpg',
  orientation: '/gallery/gallery-7.jpg',
  'council-minutes': '/gallery/gallery-9.jpg',
};

type ScrapedPage = (typeof scraped.pages)[number];

function cleanTitle(raw: string, slug: string): string {
  return DISPLAY_TITLES[slug] ?? raw.replace(/\s*-\s*(Programmes|Academics|Services|Facilities|Examination).*$/i, '').trim();
}

function isShortLine(text: string): boolean {
  const t = text.trim();
  return t.length < 80 && !t.endsWith('.') && !t.includes(': ');
}

function normalizeSections(raw: ScrapedPage): AcademicsSection[] {
  return (raw.sections ?? []).map(section => {
    const s = section as {
      heading: string;
      content?: string[];
      items?: (string | { title: string; url?: string; date?: string })[];
    };
    const content = (s.content ?? []).filter((p: string) => p.trim().length > 0);
    const items = s.items?.map(item => item);
    return {
      heading: s.heading,
      content: content.length ? content : undefined,
      items: items?.length ? items : undefined,
    };
  });
}

function buildFallback(slug: string): Partial<AcademicsPageData> {
  switch (slug) {
    case 'overview':
      return {
        highlights: ACADEMICS_OVERVIEW_STATS,
      };
    case 'undergraduate':
      return {
        highlights: [
          { value: '6 Yrs', label: 'Integrated Programme' },
          { value: '₹36K', label: 'Annual fee (AP students)' },
          { value: '7', label: 'B.Tech branches' },
        ],
      };
    case 'postgraduate':
      return {
        highlights: [
          { value: 'M.Tech', label: 'Primary PG offering' },
          { value: '4', label: 'Specializations' },
        ],
      };
    case 'research':
      return {
        highlights: [
          { value: '5+', label: 'Engineering departments' },
          { value: 'Ph.D.', label: 'Research pathways' },
        ],
      };
    case 'summer':
      return {
        intro: 'Summer programmes at RGUKT-AP include certification drives, internships, remedial coaching and faculty development.',
        sections: SUMMER_PROGRAMMES.map(p => ({
          heading: p.title,
          content: [p.body],
        })),
        pageStatus: 'fallback',
      };
    case 'regulations':
      return {
        intro: 'Official academic regulations governing B.Tech, M.Tech and promotion policies at RGUKT-AP.',
        sections: [{ heading: 'Regulations & Policies', documents: docsFromLocal(ACADEMICS_DOCUMENTS.regulations) }],
        documents: docsFromLocal(ACADEMICS_DOCUMENTS.regulations),
        pageStatus: 'fallback',
      };
    case 'calendar':
      return {
        intro: 'Key academic dates for the current and upcoming semesters across all RGUKT-AP campuses.',
        sections: [
          {
            heading: 'Important Dates',
            items: CALENDAR_DATES.map(d => `${d.period}: ${d.start} — ${d.end}`),
          },
          { heading: 'Download Calendar', documents: docsFromLocal(ACADEMICS_DOCUMENTS.calendar) },
        ],
        documents: docsFromLocal(ACADEMICS_DOCUMENTS.calendar),
        pageStatus: 'fallback',
      };
    case 'curriculum':
      return {
        intro: 'Syllabus booklets and curriculum frameworks for PUC, B.Tech and M.Tech programmes.',
        sections: [{ heading: 'Curriculum Documents', documents: docsFromLocal(ACADEMICS_DOCUMENTS.curriculum) }],
        documents: docsFromLocal(ACADEMICS_DOCUMENTS.curriculum),
        pageStatus: 'fallback',
      };
    case 'examination-schedules':
      return {
        intro: 'Campus-wise end-semester examination schedules published each semester.',
        sections: [{
          heading: 'Examination Schedules',
          documents: EXAM_SCHEDULES.slice(0, 12).map(e => ({
            title: e.title,
            url: e.file,
            size: e.size,
          })),
        }],
        documents: EXAM_SCHEDULES.slice(0, 12).map(e => ({
          title: e.title,
          url: e.file,
          size: e.size,
        })),
        pageStatus: 'fallback',
      };
    case 'central-library':
      return {
        intro: 'The Central Library system supports teaching, learning and research with print and digital collections across all campuses.',
        highlights: LIBRARY_STATS,
        sections: [{ heading: 'Library Services', items: LIBRARY_SERVICES }],
        pageStatus: 'fallback',
      };
    case 'lms':
      return {
        intro: 'Campus learning management systems provide course materials, assignments, forums and grade tracking.',
        sections: [
          { heading: 'LMS Features', items: LMS_FEATURES },
          {
            heading: 'Campus LMS Portals',
            items: LMS_PORTALS.map(p => ({ title: p.label, url: p.href })),
          },
        ],
        pageStatus: 'fallback',
      };
    case 'scholarships':
      return {
        intro: 'Financial assistance schemes for eligible students at RGUKT-AP.',
        sections: SCHOLARSHIPS.map(s => ({
          heading: s.name,
          content: [s.desc],
        })),
        pageStatus: 'fallback',
      };
    case 'orientation':
      return {
        intro: 'The orientation programme welcomes newly admitted students to campus life and academic expectations.',
        sections: [{ heading: 'Orientation Components', items: ORIENTATION_COMPONENTS }],
        pageStatus: 'fallback',
      };
    case 'council-minutes':
      return {
        intro: 'Minutes of Academic Council and Governing Council meetings.',
        sections: [{ heading: 'Council Minutes', documents: docsFromLocal(ACADEMICS_DOCUMENTS.councilMinutes) }],
        documents: docsFromLocal(ACADEMICS_DOCUMENTS.councilMinutes),
        pageStatus: 'fallback',
      };
    case 'examination-procedures':
      return {
        highlights: [
          { value: '40:60', label: 'Internal : External marks' },
          { value: 'IT', label: 'Fully integrated exams' },
          { value: 'NAD', label: 'National Academic Depository' },
        ],
      };
    default:
      return {};
  }
}

function docsFromLocal(docs: { title: string; file: string; size: string }[]): AcademicsDocument[] {
  return docs.map(d => ({ title: d.title, url: d.file, size: d.size }));
}

function buildIntro(sections: AcademicsSection[]): string {
  const first = sections[0]?.content?.[0];
  if (!first || first.length > 320) return '';
  return first;
}

export function getAcademicsPage(pageKey: string): AcademicsPageData {
  const slug = ACADEMICS_PAGE_KEYS[pageKey] ?? pageKey;
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
      documents: fallback.documents ?? [],
      highlights: fallback.highlights ?? [],
      pageStatus: 'fallback',
    };
  }

  const sections = normalizeSections(raw);
  const hasLiveContent = raw.pageStatus === 'ok' && (sections.length > 0 || (raw.documents?.length ?? 0) > 0);

  if (!hasLiveContent) {
    return {
      slug,
      displayTitle: cleanTitle(raw.title, slug),
      rguktUrl: raw.rguktUrl,
      heroImage: HERO_IMAGES[slug] ?? '/gallery/gallery-7.jpg',
      intro: fallback.intro ?? '',
      sections: fallback.sections ?? [],
      documents: (fallback.documents ?? raw.documents?.map(d => ({
        title: d.title,
        url: d.url,
        ...('date' in d && d.date ? { date: d.date } : {}),
      }))) ?? [],
      highlights: fallback.highlights ?? [],
      pageStatus: 'fallback',
      sourceNote: raw.note,
    };
  }

  const documents: AcademicsDocument[] = [
    ...(raw.documents ?? []).map(d => ({
      title: d.title,
      url: d.url,
      ...('date' in d && d.date ? { date: d.date } : {}),
    })),
    ...sections.flatMap(s =>
      (s.items ?? [])
        .filter((item): item is { title: string; url?: string; date?: string } => typeof item === 'object' && 'title' in item)
        .filter(item => item.url?.includes('.pdf') || item.url?.includes('/files/'))
        .map(item => ({ title: item.title, url: item.url!, date: item.date })),
    ),
  ];

  const ugBranchSection = slug === 'undergraduate';
  let enrichedSections = ugBranchSection
    ? sections.map(section => {
        if (section.heading.includes('Six-Year') && section.items?.length) {
          return {
            ...section,
            items: UG_BRANCHES.map(b => `${b.name} (${b.code})`),
          };
        }
        return section;
      })
    : sections;

  let intro = buildIntro(enrichedSections) || fallback.intro || '';
  if (intro && enrichedSections[0]?.content?.[0] === intro) {
    enrichedSections = [
      {
        ...enrichedSections[0],
        content: enrichedSections[0].content!.slice(1),
      },
      ...enrichedSections.slice(1),
    ];
  }

  return {
    slug,
    displayTitle: cleanTitle(raw.title, slug),
    rguktUrl: raw.rguktUrl,
    heroImage: HERO_IMAGES[slug] ?? '/gallery/gallery-7.jpg',
    intro,
    sections: enrichedSections,
    documents: dedupeDocuments(documents),
    highlights: fallback.highlights ?? (slug === 'overview' ? ACADEMICS_OVERVIEW_STATS : []),
    pageStatus: 'ok',
  };
}

function dedupeDocuments(docs: AcademicsDocument[]): AcademicsDocument[] {
  const seen = new Set<string>();
  return docs.filter(d => {
    if (seen.has(d.url)) return false;
    seen.add(d.url);
    return true;
  });
}

export { isShortLine };
