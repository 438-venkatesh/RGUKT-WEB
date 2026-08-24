import {
  ADVISORY_COMMITTEE,
  RESEARCH_ETHICS,
  RESEARCH_GUIDELINES,
  RESEARCH_HEAD,
  RESEARCH_MOUS,
  RESEARCH_NAV,
  RESEARCH_OVERVIEW,
  RESEARCH_OVERVIEW_STATS,
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
  phone?: string;
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
  head: 'Dean of Research & Development',
  ethics: 'Ethics for Research',
  'thrust-areas': 'Thrust Areas of Research',
  guidelines: 'Research Guidelines',
  mous: 'Collaboration MoUs',
  'advisory-committee': 'Research Advisory Committee',
};

const HERO_IMAGES: Record<string, string> = {
  overview: '/students/quantum-workshop-1.jpg',
  head: '/research/che_workshop.jpg',
  ethics: '/research/che_workshop.jpg',
  'thrust-areas': '/research/innovate_fpga.jpg',
  guidelines: '/students/quantum-workshop-1.jpg',
  mous: '/research/mou_iith.jpg',
  'advisory-committee': '/research/che_workshop.jpg',
};

function buildFallback(slug: string): Partial<ResearchPageData> {
  switch (slug) {
    case 'overview':
      return {
        intro: RESEARCH_OVERVIEW.intro,
        highlights: RESEARCH_OVERVIEW_STATS,
        sections: [
          {
            heading: 'Comprehensive Research Vision & Core Strategic Pillars',
            content: [
              'RGUKT’s research ecosystem is built upon four foundational pillars that unite academic learning with real-world technological solutions:',
            ],
            items: RESEARCH_OVERVIEW.visionPillars,
            image: {
              src: '/research/innovate_fpga.jpg',
              alt: 'RGUKT Research Innovation & Engineering Projects',
              caption: 'Student innovators and faculty researchers advancing engineering testbeds and technology solutions.',
              tag: 'R&D Innovation',
            },
          },
          {
            heading: 'Four-Campus Research Infrastructure & Centers',
            content: RESEARCH_OVERVIEW.campusEcosystem.map(
              c => `${c.campus}: Facilities include ${c.facilities}. Research Highlights: ${c.highlights}`
            ),
            image: {
              src: '/students/quantum-workshop-2.jpg',
              alt: 'Advanced Research Laboratory Testbeds',
              caption: 'Specialized computing, energy, and IoT laboratories across the four campuses.',
              tag: 'Campus Labs',
            },
          },
          {
            heading: 'Recent University Research Milestones (2025–2026)',
            content: [
              'RGUKT faculty, doctoral scholars, and students actively drive recognized research contributions:',
            ],
            items: RESEARCH_OVERVIEW.recentAchievements,
          },
        ],
        documents: [],
        pageStatus: 'ok',
      };
    case 'head':
      return {
        intro: RESEARCH_HEAD.intro,
        highlights: RESEARCH_HEAD.stats,
        officer: {
          name: RESEARCH_HEAD.name,
          role: RESEARCH_HEAD.designation,
          photo: RESEARCH_HEAD.photo,
          bio: [
            RESEARCH_HEAD.academicRole,
            ...RESEARCH_HEAD.qualifications,
          ],
          officeAddress: RESEARCH_HEAD.contact.officeAddress,
          emails: [RESEARCH_HEAD.contact.email, RESEARCH_HEAD.contact.alternateEmail],
          phone: `${RESEARCH_HEAD.contact.phone} / ${RESEARCH_HEAD.contact.alternatePhone}`,
        },
        sections: [
          {
            heading: 'Major Administrative & Research Governance Responsibilities',
            content: [
              'As Dean of R&D, Dr. Bogala Konda Reddy leads strategic research governance and academic oversight across all four campuses:',
            ],
            items: RESEARCH_HEAD.responsibilities,
          },
          {
            heading: 'Teaching Portfolio & Research Specialization',
            content: [
              'Dr. Reddy maintains an active research and teaching profile in advanced thermal systems and renewable energy:',
            ],
            items: RESEARCH_HEAD.teachingAndResearch,
          },
          {
            heading: 'Administrative Leadership Track Record',
            content: [
              'Dr. Reddy has served in multiple leadership roles across RGUKT academic governance:',
            ],
            items: RESEARCH_HEAD.administrativeLeadership,
          },
          {
            heading: 'Directorate Office & Contact Details',
            content: [
              `Designation: ${RESEARCH_HEAD.designation}`,
              `Primary Email: ${RESEARCH_HEAD.contact.email}`,
              `Alternate Email: ${RESEARCH_HEAD.contact.alternateEmail}`,
              `Office Phone: ${RESEARCH_HEAD.contact.phone}`,
              `Campus Phone: ${RESEARCH_HEAD.contact.alternatePhone}`,
              `Office Location: ${RESEARCH_HEAD.contact.officeAddress}`,
            ],
          },
        ],
        documents: [],
        pageStatus: 'ok',
      };
    case 'ethics':
      return {
        intro: RESEARCH_ETHICS.intro,
        highlights: RESEARCH_ETHICS.stats,
        sections: [
          {
            heading: 'Core Principles of Academic & Scientific Integrity',
            content: [
              'RGUKT enforces scrupulous adherence to the highest international ethical codes of scientific conduct:',
            ],
            items: RESEARCH_ETHICS.corePrinciples,
          },
          {
            heading: 'Definitions of Research Misconduct & Plagiarism Screening',
            content: [
              'Research misconduct compromises the trustworthiness of academic scholarship and is strictly penalized under university regulations:',
            ],
            items: RESEARCH_ETHICS.misconductDefinitions,
          },
          {
            heading: 'Confidential Grievance & Allegation Handling Procedure',
            content: [
              'The university ensures protected due process, objective assessment, and timebound redressal for all research integrity complaints:',
            ],
            items: RESEARCH_ETHICS.allegationHandlingProcedure,
          },
          {
            heading: 'Institutional Regulations & Statutory Framework',
            content: [
              'All faculty, research scholars, and project personnel are bound by the following institutional policies:',
            ],
            items: RESEARCH_ETHICS.institutionalRegulations,
          },
        ],
        documents: [],
        pageStatus: 'ok',
      };
    case 'thrust-areas':
      return {
        intro: THRUST_AREAS.intro,
        highlights: THRUST_AREAS.stats,
        sections: [
          ...THRUST_AREAS.clusters.map((cluster, idx) => ({
            heading: cluster.category,
            content: [cluster.description],
            items: cluster.areas,
            image:
              idx === 0
                ? {
                    src: '/students/quantum-workshop-2.jpg',
                    alt: 'Emerging Computing & Information Technologies',
                    caption: 'Quantum computing, AI/ML, and intelligent networked systems.',
                    tag: 'Emerging Tech',
                  }
                : idx === 2
                ? {
                    src: '/research/che_workshop.jpg',
                    alt: 'Engineering Systems & Advanced Materials',
                    caption: 'Advanced materials, thermal systems, and chemical processing research.',
                    tag: 'Materials & Systems',
                  }
                : undefined,
          })),
        ],
        documents: [],
        pageStatus: 'ok',
      };
    case 'guidelines':
      return {
        intro: RESEARCH_GUIDELINES.intro,
        highlights: RESEARCH_GUIDELINES.stats,
        sections: [
          {
            heading: 'Guidelines for Faculty Investigators & Project Directors',
            content: [
              'Operational policies governing research grants, project management, institutional overheads, and consultancy:',
            ],
            items: RESEARCH_GUIDELINES.facultyGuidelines,
          },
          {
            heading: 'Doctoral (Ph.D.) Scholar Governance & Milestones',
            content: [
              'Comprehensive procedural roadmap from doctoral admission to final thesis defense:',
            ],
            items: RESEARCH_GUIDELINES.scholarGuidelines,
          },
          {
            heading: 'Intellectual Property Rights (IPR), Patents & Technology Transfer',
            content: [
              'Policies on institutional patent support, drafting, statutory sponsorship, and commercialization:',
            ],
            items: RESEARCH_GUIDELINES.iprGuidelines,
          },
          {
            heading: 'Statutory Policy Documents & Reference Regulations',
            content: [
              'Scholars and faculty can consult the official university regulations and national apex guidelines:',
            ],
            items: RESEARCH_GUIDELINES.documents.map(d => `${d.title} — ${d.url}`),
          },
        ],
        documents: [
          {
            title: 'Guidelines for Promotion of Research and Consultancy Activities at RGUKT (PDF)',
            url: 'https://www.rgukt.in/pdfdoc/ResearchDocument0604.pdf',
          },
        ],
        pageStatus: 'ok',
      };
    case 'mous':
      return {
        intro: RESEARCH_MOUS.intro,
        highlights: RESEARCH_MOUS.stats,
        sections: [
          {
            heading: 'Premier Academic & Higher Education Collaborations',
            content: [
              'Strategic partnerships with premier national and international academic institutions:',
            ],
            items: RESEARCH_MOUS.academicMoUs.map(
              m => `${m.institution} [${m.status}] — Collaboration Focus: ${m.area}. Details: ${m.focus}`
            ),
            image: {
              src: '/research/mou_iith.jpg',
              alt: 'RGUKT and IIT Hyderabad MoU Signing',
              caption: 'Official MoU signing ceremony between RGUKT and IIT Hyderabad for collaborative research and faculty exchange.',
              tag: 'Official MoU Signing',
            },
          },
          {
            heading: 'Industry & Public Sector Undertaking (PSU) Partnerships',
            content: [
              'Collaborations with technology leaders, standardization bodies, and public sector innovators:',
            ],
            items: RESEARCH_MOUS.industryMoUs.map(
              m => `${m.institution} [${m.status}] — Domain: ${m.area}. Scope: ${m.focus}`
            ),
          },
          {
            heading: 'State Technology & Frontier Innovation Ecosystems',
            content: [
              'Collaborative involvement in state and national emerging technology programs:',
            ],
            items: RESEARCH_MOUS.technologyEcosystems.map(
              m => `${m.institution} [${m.status}] — Focus: ${m.area}. Initiatives: ${m.focus}`
            ),
          },
        ],
        documents: [],
        pageStatus: 'ok',
      };
    case 'advisory-committee':
      return {
        intro: ADVISORY_COMMITTEE.intro,
        highlights: ADVISORY_COMMITTEE.stats,
        sections: [
          {
            heading: 'Strategic Advisory Mandate & Core Responsibilities',
            content: [
              'The Research Advisory Committee steers institutional research policy and high-impact strategic directions:',
            ],
            items: ADVISORY_COMMITTEE.mandate,
          },
          {
            heading: 'Constitution of the Research Advisory Committee (RAC)',
            content: [
              'Eminent scientists, national academy fellows, and senior academicians appointed under university proceedings:',
            ],
            items: ADVISORY_COMMITTEE.members.map(
              m => `${m.name} (${m.role}) — ${m.affiliation} | Domain Expertise: ${m.expertise}`
            ),
          },
          {
            heading: 'Member Secretary & Directorate Convener',
            content: ADVISORY_COMMITTEE.conveners.map(
              c => `${c.role}: ${c.officer} (${c.designation}) | Contact: ${c.email}`
            ),
          },
        ],
        documents: [
          {
            title: 'Official Proceedings — Constitution of Research Advisory Committee (PDF)',
            url: 'https://rgukt.in/files/pdfs/377d7e3b0a58b279f5aec7644b8b6fdb.pdf',
          },
        ],
        pageStatus: 'ok',
      };
    default:
      return {};
  }
}

export function getResearchPage(pageKey: string): ResearchPageData {
  const slug = RESEARCH_PAGE_KEYS[pageKey] ?? pageKey;
  const fallback = buildFallback(slug);

  return {
    slug,
    displayTitle: DISPLAY_TITLES[slug] ?? pageKey,
    rguktUrl: `https://www.rgukt.in/research/${slug === 'overview' ? '' : slug + '/'}`,
    heroImage: HERO_IMAGES[slug] ?? '/students/quantum-workshop-1.jpg',
    intro: fallback.intro ?? '',
    sections: fallback.sections ?? [],
    documents: fallback.documents ?? [],
    highlights: fallback.highlights ?? [],
    featureCards: fallback.featureCards ?? [],
    tagGroups: fallback.tagGroups ?? [],
    officer: fallback.officer,
    pageStatus: 'ok',
  };
}

export { RESEARCH_NAV };


