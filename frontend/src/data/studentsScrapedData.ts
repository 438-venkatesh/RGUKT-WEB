/**
 * Students Scraped Data Provider — Single Source of Truth: https://rgukt.in
 *
 * Provides typed, structured data for all Students pages, strictly matching
 * the official RGUKT portal. Contains zero external internet research.
 */

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
  WOMEN_EMPOWERMENT,
} from './studentsContent';

export type StudentsDocument = {
  title: string;
  url: string;
};

export type StudentsImage = {
  src: string;
  alt?: string;
  caption?: string;
  tag?: string;
};

export type StudentsSection = {
  heading: string;
  content?: string[];
  items?: string[];
  image?: StudentsImage;
};

export type StudentsHighlight = {
  value: string;
  label: string;
};

export type StudentContactItem = {
  name: string;
  role?: string;
  email?: string;
  phone?: string;
  phones?: string[];
  note?: string;
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
  contacts?: StudentContactItem[];
  externalUrl?: string;
  sourceNote?: string;
  pageStatus: 'ok' | 'not_found_on_source' | 'fallback';
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
  overview: 'Student Life & Resources',
  scholarships: 'Scholarships & Financial Assistance',
  medals: 'Medal Information & Academic Honours',
  'career-growth': 'Career Growth & Development',
  'quantum-lab': 'Quantum Computing Lab',
  'anti-ragging': 'Anti-Ragging Mechanism',
  icc: 'Internal Complaints Committee (ICC)',
  'women-empowerment': 'Women Empowerment & Gender Equity',
  cultural: 'Cultural Activities & Performing Arts',
  sports: 'Student Sports & Sports Board',
  community: 'Community Activities & National Service Scheme (NSS)',
  'alumni-engagement': 'Alumni Engagement',
};

function buildSourceData(slug: string): Partial<StudentsPageData> {
  switch (slug) {
    case 'overview':
      return {
        intro:
          'Rajiv Gandhi University of Knowledge Technologies supports holistic student development through post-matric welfare scholarships, academic honours, career development, safety frameworks, gender equity initiatives, performing arts, sports, community service, and registered alumni engagement across constituent campuses.',
        highlights: [],
        sections: [
          {
            heading: 'Student Life & Institutional Facilities at RGUKT',
            content: [
              'RGUKT offers a unique 6-year integrated engineering program across its constituent campuses (Nuzvid, RK Valley, Ongole, and Srikakulam).',
              'The university provides dedicated academic and pastoral support structures to nurture talent, maintain campus safety, and foster extracurricular and community engagement.',
            ],
            items: [
              'Scholarships & Fee Reimbursement: Post-Matric welfare scholarships including Jagananna Vidya Deevena (RTF) tuition fee reimbursement and Jagananna Vasathi Deevena (MTF) hostel assistance.',
              'Medals & Academic Honours: Institutional gold medals instituted in memory of Late Dr. Y.S. Rajasekhara Reddy, Founder Chancellor Dr. Raj Reddy, and donor awards.',
              'Career Growth & Computing Labs: Structured guidance for competitive examinations, higher education pathways, and advanced quantum computing laboratory facilities.',
              'Campus Welfare & Safety: Statutory Internal Complaints Committee (ICC), Women Empowerment cells, and strict zero-tolerance anti-ragging helpline mechanisms.',
              'Cultural, Sports & Community Life: Performing Arts Department courses (Vocal, Kuchipudi, Mridangam), university sports board athletic development, and active NSS community volunteering.',
              'Alumni Network: Global network of registered alumni associations providing student mentorship and university support.',
            ],
          },
        ],
        contacts: [
          {
            name: 'Office of the Dean of Student Welfare / Student Affairs',
            role: 'Student Welfare & Campus Pastoral Support, RGUKT-AP',
            email: 'registrar@rgukt.in',
          },
        ],
      };

    case 'scholarships':
      return {
        intro: SCHOLARSHIPS.intro,
        highlights: [],
        sections: [
          {
            heading: SCHOLARSHIPS.schemesHeading,
            items: SCHOLARSHIPS.schemes,
          },
          {
            heading: SCHOLARSHIPS.eligibilityHeading,
            items: SCHOLARSHIPS.eligibilityItems,
          },
          {
            heading: SCHOLARSHIPS.procedureHeading,
            items: SCHOLARSHIPS.procedureItems,
          },
          {
            heading: 'Official Portals for Scholarship Information',
            items: SCHOLARSHIPS.portals.map(p => `${p.name}: ${p.url}`),
          },
        ],
        documents: SCHOLARSHIPS.documents,
        contacts: [
          {
            name: 'Scholarship Section & Student Welfare',
            role: 'Post-Matric Scholarships & Jnanabhumi Institutional Helpdesk',
            email: 'registrar@rgukt.in',
          },
        ],
      };

    case 'medals':
      return {
        intro: MEDALS.intro,
        highlights: [],
        sections: [
          {
            heading: MEDALS.listHeading,
            items: MEDALS.list,
          },
          {
            heading: MEDALS.donorHeading,
            content: [MEDALS.donorFramework],
          },
        ],
        documents: MEDALS.documents,
        contacts: [
          {
            name: 'Academic Council & Convocation Section',
            role: 'Institutional Honours & Academic Awards Desk, RGUKT',
            email: 'registrar@rgukt.in',
          },
        ],
      };

    case 'career-growth':
      return {
        intro: CAREER_GROWTH.intro,
        highlights: [],
        sections: [
          {
            heading: CAREER_GROWTH.areasHeading,
            items: CAREER_GROWTH.areas,
          },
        ],
        contacts: [
          {
            name: 'Training & Placement Cell (TPC)',
            role: 'Career Guidance & Student Development Desk',
            email: 'placement@rgukt.in',
          },
        ],
      };

    case 'quantum-lab':
      return {
        intro: QUANTUM_LAB.intro,
        highlights: [],
        sections: [
          {
            heading: QUANTUM_LAB.initiativesHeading,
            items: QUANTUM_LAB.initiatives,
            image: QUANTUM_LAB.image,
          },
        ],
        contacts: [
          {
            name: 'Department of Computer Science & Engineering',
            role: 'Quantum Computing Laboratory Coordination, Nuzvid Campus',
            email: 'director@rguktn.ac.in',
          },
        ],
      };

    case 'anti-ragging':
      return {
        intro: ANTI_RAGGING.intro,
        highlights: [],
        sections: [
          {
            heading: ANTI_RAGGING.heading,
            content: [
              ANTI_RAGGING.helplineNotice,
              ANTI_RAGGING.undertakingCompliance,
              ANTI_RAGGING.motto,
            ],
          },
          {
            heading: ANTI_RAGGING.portalsHeading,
            items: ANTI_RAGGING.portals.map(p => `${p.name}: ${p.url}`),
          },
        ],
        contacts: [
          {
            name: 'National Anti-Ragging Helpline (UGC)',
            role: '24x7 Toll-Free Support',
            email: 'helpline@antiragging.in',
            phone: '1800-180-5522',
          },
          {
            name: 'UGC Monitoring Agency (Aman Satya Kachroo Trust)',
            role: 'Emergency Monitoring Support',
            phones: ['09871170303', '09818400116'],
            note: 'Contact only in case of emergency.',
          },
        ],
      };

    case 'icc':
      return {
        intro: ICC.intro,
        highlights: [],
        sections: [
          {
            heading: ICC.responsibilitiesHeading,
            items: ICC.responsibilities,
          },
        ],
        contacts: [
          {
            name: 'Internal Complaints Committee (ICC)',
            role: 'Grievance Redressal & Anti-Harassment Desk, RGUKT',
            email: 'registrar@rgukt.in',
          },
        ],
      };

    case 'women-empowerment':
      return {
        intro: WOMEN_EMPOWERMENT.overview,
        highlights: [],
        sections: [
          {
            heading: WOMEN_EMPOWERMENT.mainHeading,
            content: [
              'RGUKT prioritizes the promotion of gender equity across all its campuses. Girl students constitute around 50% of the enrolment. Guest speakers are invited to discuss gender-related issues, emphasizing the contributions of women to society. RGUKT upholds inclusivity, providing equal opportunities to all, regardless of gender, caste, religion, social status, or any other consideration.',
            ],
          },
          {
            heading: WOMEN_EMPOWERMENT.facilitiesHeading,
            items: WOMEN_EMPOWERMENT.facilities,
            image: WOMEN_EMPOWERMENT.image,
          },
        ],
        contacts: [
          {
            name: 'Women Empowerment Cell (WEC)',
            role: 'Gender Equity & Student Support Services, RGUKT',
            email: 'registrar@rgukt.in',
          },
        ],
      };

    case 'cultural':
      return {
        intro: CULTURAL.overview,
        highlights: [],
        sections: [
          {
            heading: CULTURAL.department,
            content: [
              'The music department at RGUKT offers a diverse range of courses and opportunities, catering to various genres and styles of music. Under the guidance of experienced and accomplished faculty members, students have access to state-of-the-art facilities and resources, enabling them to hone their skills in singing, playing musical instruments, music composition, dance, theatre and more.',
            ],
            image: CULTURAL.image,
          },
          {
            heading: CULTURAL.coursesHeading,
            items: CULTURAL.courses,
          },
          {
            heading: CULTURAL.achievementsHeading,
            items: CULTURAL.achievements,
          },
          {
            heading: CULTURAL.teckziteHeading,
            content: [CULTURAL.teckziteContent],
          },
        ],
        documents: CULTURAL.documents,
        contacts: [
          {
            name: 'Performing Arts Department',
            role: 'Cultural Activities & Performing Arts Coordination',
            email: 'director@rguktn.ac.in',
          },
        ],
      };

    case 'sports':
      return {
        intro: SPORTS.intro,
        highlights: [],
        sections: [
          {
            heading: SPORTS.boardHeading,
            content: [SPORTS.boardDescription],
            image: SPORTS.image,
          },
          {
            heading: SPORTS.membersHeading,
            items: SPORTS.members,
          },
        ],
        contacts: [
          {
            name: 'Prof. M. Vijaya Kumar',
            role: 'Chairman, Sports Board & Vice-Chancellor (FAC), RGUKT',
            email: 'vc@rgukt.in',
          },
          {
            name: 'Office of the Registrar',
            role: 'Sports Board Administration, RGUKT',
            email: 'registrar@rgukt.in',
          },
        ],
      };

    case 'community':
      return {
        intro: COMMUNITY.intro,
        highlights: [],
        sections: [
          {
            heading: COMMUNITY.activitiesHeading,
            items: COMMUNITY.activities,
            image: COMMUNITY.image,
          },
          {
            heading: COMMUNITY.daysHeading,
            content: [COMMUNITY.daysIntro],
            items: COMMUNITY.days,
          },
        ],
        contacts: [
          {
            name: 'National Service Scheme (NSS) Cell',
            role: 'Community Outreach & NSS Volunteering Coordination, RGUKT',
            email: 'registrar@rgukt.in',
          },
        ],
      };

    case 'alumni-engagement':
      return {
        intro: ALUMNI_ENGAGEMENT.intro,
        highlights: [],
        sections: [
          {
            heading: ALUMNI_ENGAGEMENT.objectivesHeading,
            items: ALUMNI_ENGAGEMENT.objectives,
            image: ALUMNI_ENGAGEMENT.image,
          },
          {
            heading: ALUMNI_ENGAGEMENT.activitiesHeading,
            items: ALUMNI_ENGAGEMENT.activities,
          },
        ],
        documents: ALUMNI_ENGAGEMENT.documents,
        contacts: [
          {
            name: 'RGUKT Alumni Coordination Desk',
            role: 'Office of the Registrar, RGUKT',
            email: 'registrar@rgukt.in',
          },
        ],
      };

    default:
      return {
        intro: 'Official information from RGUKT.',
        sections: [],
      };
  }
}

export function getStudentsPage(pageKey: string): StudentsPageData {
  const normKey = STUDENTS_PAGE_KEYS[pageKey] || pageKey;
  const p = scraped.pages.find((x: { slug: string }) => x.slug === normKey);
  const base = buildSourceData(normKey);

  const displayTitle = DISPLAY_TITLES[normKey] || p?.title || normKey.replace(/-/g, ' ');
  const rguktUrl = p?.rguktUrl || `https://www.rgukt.in/students/${normKey}/`;

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
    externalUrl: undefined,
    pageStatus: 'ok',
  };
}
