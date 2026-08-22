import scraped from './admissionsScraped.json';
import {
  ADMISSIONS_2025,
  ADMISSIONS_2026,
  ADMISSIONS_FAQ,
  ADMISSIONS_NAV,
  ADMISSIONS_OVERVIEW_STATS,
  APPLICATION_HOW_TO,
  APPLICATION_STEPS,
  DOCTORAL_ADMISSIONS,
  ELIGIBILITY_CRITERIA,
  FEE_ROWS,
  PG_ADMISSIONS,
  PORTAL_URL,
} from './admissionsContent';

export type AdmissionsDocument = {
  title: string;
  url: string;
};

export type AdmissionsSection = {
  heading: string;
  content?: string[];
  items?: string[];
};

export type AdmissionsHighlight = {
  value: string;
  label: string;
};

export type AdmissionsHelpline = {
  email: string;
  phones: string[];
  timings: string;
  emailFields: string[];
};

export type AdmissionsBanner = {
  status: 'open' | 'closed';
  headline: string;
  lastDate?: string;
  applyUrl?: string;
};

export type AdmissionsTimelineItem = {
  date: string;
  event: string;
};

export type AdmissionsFeeRow = {
  campus: string;
  tuition: string;
  hostel: string;
};

export type AdmissionsStep = {
  n: number;
  label: string;
  detail: string;
};

export type AdmissionsFaq = {
  q: string;
  a: string;
};

export type AdmissionsPageData = {
  slug: string;
  displayTitle: string;
  rguktUrl: string;
  heroImage: string;
  intro: string;
  sections: AdmissionsSection[];
  documents: AdmissionsDocument[];
  highlights: AdmissionsHighlight[];
  banner?: AdmissionsBanner;
  helpline?: AdmissionsHelpline;
  timeline?: AdmissionsTimelineItem[];
  feeRows?: AdmissionsFeeRow[];
  steps?: AdmissionsStep[];
  faq?: AdmissionsFaq[];
  portalUrl: string;
  pageStatus: 'ok' | 'not_found_on_source' | 'fallback';
  sourceNote?: string;
};

export const ADMISSIONS_PAGE_KEYS: Record<string, string> = {
  overview: 'overview',
  '2025': '2025',
  '2026': '2026',
  postgraduate: 'postgraduate',
  doctoral: 'doctoral',
  eligibility: 'eligibility',
  process: 'process',
  fees: 'fees',
};

const DISPLAY_TITLES: Record<string, string> = {
  overview: 'UG Admissions',
  '2025': 'Admissions 2025',
  '2026': 'Admissions 2026',
  postgraduate: 'PG Admissions',
  doctoral: 'Doctoral Admissions',
  eligibility: 'Eligibility Criteria',
  process: 'Application Process',
  fees: 'Fee Structure',
};

const HERO_IMAGES: Record<string, string> = {
  overview: '/hero/hero-convocation.jpg',
  '2025': '/campuses/nuzvid.jpg',
  '2026': '/campuses/ongole.jpg',
  postgraduate: '/gallery/gallery-1.jpg',
  doctoral: '/gallery/gallery-12.jpg',
  eligibility: '/gallery/gallery-7.jpg',
  process: '/gallery/gallery-3.jpg',
  fees: '/gallery/gallery-9.jpg',
};


function buildFallback(slug: string): Partial<AdmissionsPageData> {
  switch (slug) {
    case 'overview':
      return {
        intro: 'RGUKT-AP offers free residential education to gifted rural youth through a six-year integrated programme. Admission is through a state entrance examination and web counselling for SSC graduates from Andhra Pradesh.',
        highlights: ADMISSIONS_OVERVIEW_STATS,
        faq: ADMISSIONS_FAQ,
        portalUrl: PORTAL_URL,
      };
    case '2025':
      return {
        intro: ADMISSIONS_2025.intro,
        timeline: ADMISSIONS_2025.dates.map(d => ({ date: d.label, event: d.value })),
        banner: { status: 'closed', headline: 'Registrations Closed', lastDate: '10 June 2025' },
        portalUrl: 'https://admissions25.rgukt.in/',
      };
    case '2026':
      return {
        intro: ADMISSIONS_2026.intro,
        timeline: ADMISSIONS_2026.timeline,
        sections: [
          { heading: 'Eligibility', items: ELIGIBILITY_CRITERIA },
          { heading: 'Documents Required', items: ADMISSIONS_2026.documents },
        ],
        banner: { status: 'open', headline: 'Registrations are Open', lastDate: '30 May 2026', applyUrl: 'https://admissions.rgukt.in/' },
        portalUrl: 'https://admissions.rgukt.in/',
      };
    case 'postgraduate':
      return {
        intro: PG_ADMISSIONS.intro,
        sections: [
          { heading: 'Eligibility', items: PG_ADMISSIONS.eligibility },
          { heading: 'Programmes', items: PG_ADMISSIONS.programmes },
        ],
        portalUrl: PORTAL_URL,
        pageStatus: 'fallback',
      };
    case 'doctoral':
      return {
        intro: DOCTORAL_ADMISSIONS.intro,
        sections: [{ heading: 'Requirements', items: DOCTORAL_ADMISSIONS.requirements }],
        portalUrl: PORTAL_URL,
        pageStatus: 'fallback',
      };
    case 'eligibility':
      return {
        intro: 'Undergraduate admission to RGUKT-AP is open to gifted rural students from Andhra Pradesh who meet the criteria in the official admission notification and prospectus.',
        sections: [
          {
            heading: 'Eligibility Criteria',
            items: [
              ...ELIGIBILITY_CRITERIA,
              'Passed SSC (10th class) or equivalent examination recognized by AP State / CBSE / ICSE',
              'Studied in Andhra Pradesh (other states eligible only for supernumerary seats — 25%)',
              'Rural residency as per Government of Andhra Pradesh norms',
            ],
          },
          {
            heading: 'Application Fee (Reference)',
            items: [
              'OC & BC candidates: ₹400 application fee',
              'SC & ST candidates: ₹250 application fee',
              'Refer to the official prospectus for the current academic year for exact fee details',
            ],
          },
        ],
        portalUrl: PORTAL_URL,
        pageStatus: 'fallback',
      };
    case 'process':
      return {
        intro: 'Follow these steps to apply for undergraduate admission at RGUKT-AP through the official admissions portal.',
        steps: APPLICATION_STEPS,
        sections: [{ heading: 'Detailed Steps', items: APPLICATION_HOW_TO }],
        portalUrl: PORTAL_URL,
        pageStatus: 'fallback',
      };
    case 'fees':
      return {
        intro: 'RGUKT-AP provides highly subsidized education for eligible Andhra Pradesh rural students. Hostel and mess charges apply as per campus norms.',
        feeRows: FEE_ROWS,
        sections: [{
          heading: 'Additional Charges at Admission (Reference)',
          items: [
            'Admission fee: ₹1,000 (₹500 for SC/ST)',
            'Group insurance: ₹1,200',
            'Refundable caution deposit: ₹1,000',
            'Hostel maintenance charge: ₹1,000',
            'Annual programme fee: approx. ₹45,000 (PUC) / ₹50,000 (B.Tech) for AP students — refer to prospectus',
          ],
        }],
        portalUrl: PORTAL_URL,
        pageStatus: 'fallback',
      };
    default:
      return { portalUrl: PORTAL_URL };
  }
}

export function getAdmissionsPage(pageKey: string): AdmissionsPageData {
  const slug = ADMISSIONS_PAGE_KEYS[pageKey] ?? pageKey;
  const raw = scraped.pages.find(p => p.slug === slug);
  const fallback = buildFallback(slug);

  const helpline = raw?.helpline as AdmissionsHelpline | undefined;
  const rawBanner = raw?.banner as AdmissionsBanner | undefined;
  const banner = rawBanner
    ? { ...fallback.banner, ...rawBanner, lastDate: rawBanner.lastDate ?? fallback.banner?.lastDate }
    : fallback.banner;
  const portalUrl = raw?.portalUrl ?? fallback.portalUrl ?? PORTAL_URL;

  if (!raw || raw.pageStatus === 'not_found_on_source') {
    return {
      slug,
      displayTitle: DISPLAY_TITLES[slug] ?? pageKey,
      rguktUrl: raw?.rguktUrl ?? '',
      heroImage: HERO_IMAGES[slug] ?? '/hero/hero-convocation.jpg',
      intro: fallback.intro ?? '',
      sections: fallback.sections ?? [],
      documents: [],
      highlights: fallback.highlights ?? [],
      banner,
      helpline,
      timeline: fallback.timeline,
      feeRows: fallback.feeRows,
      steps: fallback.steps,
      faq: fallback.faq,
      portalUrl,
      pageStatus: 'fallback',
      sourceNote: raw ? 'Content supplemented from university records — page unavailable on rgukt.in.' : undefined,
    };
  }

  return {
    slug,
    displayTitle: DISPLAY_TITLES[slug] ?? slug,
    rguktUrl: raw.rguktUrl,
    heroImage: HERO_IMAGES[slug] ?? '/hero/hero-convocation.jpg',
    intro: fallback.intro ?? '',
    sections: fallback.sections ?? [],
    documents: ((raw.documents ?? []) as { title: string; url: string }[]).map(d => ({ title: d.title, url: d.url })),
    highlights: fallback.highlights ?? [],
    banner,
    helpline,
    timeline: fallback.timeline,
    feeRows: fallback.feeRows,
    steps: fallback.steps,
    faq: fallback.faq,
    portalUrl,
    pageStatus: 'ok',
  };
}

export { ADMISSIONS_NAV };
