/**
 * Research Scraped Data Provider — Single Source of Truth: https://rgukt.in
 *
 * Strictly derived from official RGUKT portal pages and official PDF records.
 * Contains zero external internet research or speculative filler.
 */

import scraped from './researchScraped.json';
import {
  ADVISORY_COMMITTEE,
  COLLABORATION_MOUS,
  GUIDELINES,
  RESEARCH_ETHICS,
  RESEARCH_HEAD,
  RESEARCH_OVERVIEW,
  THRUST_AREAS,
} from './researchContent';

export type ResearchDocument = {
  title: string;
  url: string;
};

export type ResearchImage = {
  src: string;
  alt?: string;
  caption?: string;
  tag?: string;
};

export type ResearchSection = {
  heading: string;
  content?: string[];
  items?: string[];
  image?: ResearchImage;
};

export type ResearchHighlight = {
  value: string;
  label: string;
};

export type ResearchContactItem = {
  name: string;
  role?: string;
  email?: string;
  phone?: string;
  note?: string;
};

export type ResearchOfficer = {
  name: string;
  degrees?: string;
  photo?: string;
  designation?: string;
  intro: string;
  backgroundItems: string[];
  researchItems: string[];
  administrativeItems: string[];
  officeAddress?: string;
  contacts?: ResearchContactItem[];
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
  contacts?: ResearchContactItem[];
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
  head: 'Dean of Research & Development',
  ethics: 'Ethics for Research',
  'thrust-areas': 'Thrust Areas of Research',
  guidelines: 'Research Guidelines',
  mous: 'Collaboration MoUs',
  'advisory-committee': 'Research Advisory Committee',
};

function buildSourceData(slug: string): Partial<ResearchPageData> {
  switch (slug) {
    case 'overview':
      return {
        intro: RESEARCH_OVERVIEW.intro,
        highlights: [],
        sections: [
          {
            heading: RESEARCH_OVERVIEW.ecosystemHeading,
            items: RESEARCH_OVERVIEW.ecosystemPillars,
            image: RESEARCH_OVERVIEW.image,
          },
          {
            heading: RESEARCH_OVERVIEW.supportHeading,
            items: RESEARCH_OVERVIEW.supportItems,
          },
        ],
        documents: [],
        contacts: [
          {
            name: 'Office of the Dean of Research & Development',
            role: 'Research Coordination & Administration, RGUKT-AP',
            email: 'dean.rd@rgukt.in',
          },
        ],
      };

    case 'head':
      return {
        intro: RESEARCH_HEAD.intro,
        highlights: [],
        officer: {
          name: RESEARCH_HEAD.name,
          degrees: RESEARCH_HEAD.degrees,
          photo: RESEARCH_HEAD.photo,
          designation: RESEARCH_HEAD.designation,
          intro: RESEARCH_HEAD.intro,
          backgroundItems: RESEARCH_HEAD.backgroundItems,
          researchItems: RESEARCH_HEAD.researchItems,
          administrativeItems: RESEARCH_HEAD.administrativeItems,
          officeAddress: RESEARCH_HEAD.officeAddress,
          contacts: RESEARCH_HEAD.contacts,
        },
        sections: [
          {
            heading: RESEARCH_HEAD.academicBackgroundHeading,
            items: RESEARCH_HEAD.backgroundItems,
          },
          {
            heading: RESEARCH_HEAD.researchAndPublicationsHeading,
            items: RESEARCH_HEAD.researchItems,
          },
          {
            heading: RESEARCH_HEAD.administrativeRolesHeading,
            items: RESEARCH_HEAD.administrativeItems,
          },
        ],
        documents: [],
        contacts: RESEARCH_HEAD.contacts,
      };

    case 'ethics':
      return {
        intro: RESEARCH_ETHICS.intro,
        highlights: [],
        sections: [
          {
            heading: RESEARCH_ETHICS.policyHeading,
            items: RESEARCH_ETHICS.policyPoints,
          },
          {
            heading: RESEARCH_ETHICS.explanationHeading,
            content: [RESEARCH_ETHICS.explanationContent],
            items: RESEARCH_ETHICS.linkedCodes,
          },
          {
            heading: 'Ph.D. Programme Undertaking & Ethics Courses',
            content: [RESEARCH_ETHICS.phdCommitment],
          },
          {
            heading: RESEARCH_ETHICS.authorshipHeading,
            content: [RESEARCH_ETHICS.authorshipContent],
          },
        ],
        documents: [],
        contacts: [
          {
            name: 'Office of the Dean of Research & Development',
            role: 'Research Ethics & Compliance Oversight, RGUKT',
            email: 'dean.rd@rgukt.in',
          },
        ],
      };

    case 'thrust-areas':
      return {
        intro: THRUST_AREAS.intro,
        highlights: [],
        sections: [
          {
            heading: THRUST_AREAS.areasHeading,
            items: THRUST_AREAS.areas,
            image: THRUST_AREAS.image,
          },
        ],
        documents: [],
        contacts: [
          {
            name: 'Office of the Dean of Research & Development',
            role: 'In-House Research Coordination, RGUKT',
            email: 'dean.rd@rgukt.in',
          },
        ],
      };

    case 'guidelines':
      return {
        intro: GUIDELINES.intro,
        highlights: [],
        sections: [
          {
            heading: GUIDELINES.frameworkHeading,
            items: GUIDELINES.frameworkItems,
          },
        ],
        documents: GUIDELINES.documents,
        contacts: [
          {
            name: 'Office of the Dean of Research & Development',
            role: 'Research Guidelines & Consultancy Administration, RGUKT',
            email: 'dean.rd@rgukt.in',
          },
        ],
      };

    case 'mous':
      return {
        intro: COLLABORATION_MOUS.intro,
        highlights: [],
        sections: [
          {
            heading: COLLABORATION_MOUS.mousHeading,
            items: COLLABORATION_MOUS.mous,
            image: COLLABORATION_MOUS.image,
          },
        ],
        documents: [],
        contacts: [
          {
            name: 'Office of the Registrar & Dean of R&D',
            role: 'Institutional Collaborations & MoUs Desk, RGUKT',
            email: 'registrar@rgukt.in',
          },
        ],
      };

    case 'advisory-committee':
      return {
        intro: ADVISORY_COMMITTEE.intro,
        highlights: [],
        sections: [
          {
            heading: ADVISORY_COMMITTEE.functionsHeading,
            items: ADVISORY_COMMITTEE.functions,
          },
          {
            heading: ADVISORY_COMMITTEE.compositionHeading,
            items: ADVISORY_COMMITTEE.composition,
          },
        ],
        documents: [
          {
            title: 'Official Proceedings — Constitution of Research Advisory Committee (PDF)',
            url: 'https://rgukt.in/files/pdfs/377d7e3b0a58b279f5aec7644b8b6fdb.pdf',
          },
        ],
        contacts: ADVISORY_COMMITTEE.contacts,
      };

    default:
      return {
        intro: 'Official information from RGUKT.',
        sections: [],
      };
  }
}

export function getResearchPage(pageKey: string): ResearchPageData {
  const normKey = RESEARCH_PAGE_KEYS[pageKey] || pageKey;
  const p = scraped.pages.find((x: { slug: string }) => x.slug === normKey);
  const base = buildSourceData(normKey);

  const displayTitle = DISPLAY_TITLES[normKey] || p?.title || normKey.replace(/-/g, ' ');
  const rguktUrl = p?.rguktUrl || `https://www.rgukt.in/research/${normKey}/`;

  return {
    slug: normKey,
    displayTitle,
    rguktUrl,
    heroImage: '',
    intro: base.intro || '',
    sections: base.sections || [],
    documents: (base.documents && base.documents.length > 0) ? base.documents : (p?.documents || []),
    highlights: base.highlights || [],
    contacts: base.contacts,
    officer: base.officer,
    pageStatus: 'ok',
  };
}
