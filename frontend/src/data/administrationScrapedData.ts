import scraped from './administrationScraped.json';
import {
  ACADEMIC_COUNCIL,
  ADMIN_NAV,
  ADMIN_OVERVIEW_INTRO,
  ADMIN_OVERVIEW_STATS,
  CAO,
  CAMPUS_DIRECTORS_DATA,
  CHANCELLOR,
  DEAN_ACADEMICS,
  DEAN_EITP,
  DEAN_EVALUATION,
  DEAN_RD,
  DEAN_STUDENT_WELFARE,
  FINANCE_OFFICER,
  GOVERNING_COUNCIL,
  REGISTRAR,
  SPORTS_BOARD,
  VICE_CHANCELLOR,
} from './administrationContent';

export type AdminDocument = {
  title: string;
  url: string;
  date?: string;
  size?: string;
  category?: string;
};

export type AdminSectionImage = {
  src: string;
  alt: string;
  caption?: string;
  tag?: string;
};

export type AdminSection = {
  heading: string;
  content?: string[];
  items?: string[];
  image?: AdminSectionImage;
  mediaPlacement?: 'right' | 'left' | 'bottom';
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
  designation?: string;
  phone?: string;
  officeAddress?: string;
};

export type AdminOfficerProfile = {
  name: string;
  photo?: string;
  emails: string[];
  officeAddress?: string;
  role?: string;
  phone?: string;
};

export type AdminOfficer = AdminOfficerProfile;

export type AdminPhoto = {
  src: string;
  caption: string;
  tag?: string;
};

export type AdminPageData = {
  slug: string;
  displayTitle: string;
  rguktUrl?: string;
  heroImage: string;
  intro: string;
  sections: AdminSection[];
  documents: AdminDocument[];
  highlights: AdminHighlight[];
  officer?: AdminOfficerProfile;
  directors?: AdminDirector[];
  gallery?: AdminPhoto[];
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
  'dean-student-welfare': 'dean-student-welfare',
  'dean-student-affairs': 'dean-student-welfare',
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
  directors: 'Directors',
  cao: 'Chief Administrative Officer',
  'dean-evaluation': 'Dean of Evaluation',
  'dean-academics': 'Dean of Academics',
  'dean-eitp': 'Dean of EITP',
  'dean-rd': 'Dean of R&D',
  'dean-student-welfare': 'Dean of Student Welfare',
  'dean-student-affairs': 'Dean of Student Welfare',
  'finance-officer': 'Finance Officer',
  'sports-board': 'Sports Board',
};

const HERO_IMAGES: Record<string, string> = {
  overview: '/hero/hero-convocation.jpg',
  'governing-council': '/gallery/gallery-7.jpg',
  chancellor: '/gallery/gallery-6.jpg',
  'academic-council': '/gallery/gallery-7.jpg',
  'vice-chancellor': '/gallery/gallery-12.jpg',
  registrar: '/gallery/gallery-1.jpg',
  directors: '/campuses/nuzvid.jpg',
  cao: '/gallery/gallery-6.jpg',
  'dean-evaluation': '/gallery/gallery-10.jpg',
  'dean-academics': '/gallery/gallery-2.jpg',
  'dean-eitp': '/gallery/gallery-3.jpg',
  'dean-rd': '/gallery/gallery-4.jpg',
  'dean-student-welfare': '/gallery/gallery-8.jpg',
  'dean-student-affairs': '/gallery/gallery-8.jpg',
  'finance-officer': '/gallery/gallery-9.jpg',
  'sports-board': '/gallery/gallery-5.jpg',
};

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

type ScrapedDocument = { title: string; url: string; date?: string; size?: string };

type ScrapedPage = Omit<(typeof scraped.pages)[number], 'documents'> & {
  documents?: ScrapedDocument[];
};

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

function mapCampusDirectors(): AdminDirector[] {
  return CAMPUS_DIRECTORS_DATA.directors.map(d => ({
    name: d.name,
    campus: d.campus.replace(' Campus', '').replace(' (Idupulapaya)', ''),
    email: d.email,
    photo: d.photo,
    campusHref: d.campusHref,
    designation: d.designation,
    phone: d.phone,
    officeAddress: d.office,
  }));
}

function buildFallback(slug: string): Partial<AdminPageData> {
  switch (slug) {
    case 'overview':
      return {
        intro: ADMIN_OVERVIEW_INTRO,
        highlights: ADMIN_OVERVIEW_STATS,
        pageStatus: 'ok',
      };
    case 'governing-council': {
      return {
        intro: GOVERNING_COUNCIL.intro,
        sections: [
          {
            heading: 'Core Responsibilities & Scope',
            items: GONING_COUNCIL_RESPONSIBILITIES_ITEMS,
            image: {
              src: '/gallery/gallery-6.jpg',
              alt: 'Governing Council executive leadership assembly',
              caption: 'Governing Council leadership guiding university policy and capital expansions',
              tag: 'Policy & Governance',
            },
          },
          { heading: 'Executive Leadership', items: GOVERNING_COUNCIL.executiveLeadership },
          { heading: 'Ex-Officio Government Members', items: GOVERNING_COUNCIL.exOfficioMembers },
          {
            heading: 'Institutional Administrators',
            items: GOVERNING_COUNCIL.institutionalAdministrators,
            image: {
              src: '/campuses/rk-valley.jpg',
              alt: 'RGUKT RK Valley constituent campus',
              caption: 'Regional IIIT campus infrastructure developed under Governing Council stewardship',
              tag: 'Campus Infrastructure',
            },
          },
          { heading: 'Nominated Experts & Corporate Icons', items: GOVERNING_COUNCIL.nominatedExperts },
        ],
        highlights: GOVERNING_COUNCIL.stats,
        documents: GOVERNING_COUNCIL.documents,
        pageStatus: 'ok',
      };
    }
    case 'chancellor':
      return {
        intro: CHANCELLOR.intro,
        sections: [
          { heading: 'Profile and Background', items: CHANCELLOR.profile },
        ],
        documents: CHANCELLOR.documents,
        officer: {
          name: CHANCELLOR.name,
          role: CHANCELLOR.role,
          emails: [CHANCELLOR.contact.email],
          officeAddress: 'I3 Block, RGUKT Nuzvid / APSCHE Office, Mangalagiri, Andhra Pradesh',
          photo: CHANCELLOR.contact.photo ?? '/people/chancellor.jpg',
        },
        pageStatus: 'ok',
      };
    case 'vice-chancellor':
      return {
        intro: VICE_CHANCELLOR.intro,
        sections: [
          {
            heading: 'Academic Qualifications & International Research',
            items: VICE_CHANCELLOR.qualifications,
          },
          {
            heading: 'Professional Experience & IIT Kanpur Tenure',
            items: VICE_CHANCELLOR.experience,
            image: {
              src: '/gallery/gallery-1.jpg',
              alt: 'Vice-Chancellor guiding academic deliberations',
              caption: 'Prof. M. L. N. Rao guiding academic deliberations and curriculum synchronization',
              tag: 'Academic Leadership',
            },
          },
          {
            heading: 'Research Breakthroughs & Scholarly Contributions',
            items: VICE_CHANCELLOR.researchAndAchievements,
          },
          {
            heading: 'Vision, Role & Responsibilities at RGUKT-AP',
            items: VICE_CHANCELLOR.roleAndVision,
            image: {
              src: '/gallery/gallery-7.jpg',
              alt: 'Presiding over statutory convocation proceedings',
              caption: 'Presiding over statutory convocation proceedings and degree conferments',
              tag: 'University Administration',
            },
          },
        ],
        highlights: VICE_CHANCELLOR.stats,
        documents: VICE_CHANCELLOR.documents,
        officer: {
          name: VICE_CHANCELLOR.name,
          role: VICE_CHANCELLOR.role,
          emails: VICE_CHANCELLOR.contact.emails,
          officeAddress: VICE_CHANCELLOR.contact.officeAddress,
          photo: VICE_CHANCELLOR.contact.photo,
        },
        pageStatus: 'ok',
      };
    case 'academic-council':
      return {
        intro: ACADEMIC_COUNCIL.intro,
        sections: [
          {
            heading: 'Statutory Powers & Scope of the Academic Council',
            items: ACADEMIC_COUNCIL.powersAndFunctions,
            image: {
              src: '/gallery/gallery-7.jpg',
              alt: 'Academic Council statutory assembly',
              caption: 'Academic Council presiding over statutory regulations and curriculum approvals',
              tag: 'Council Assembly',
            },
          },
          { heading: 'Composition — Executive & University Leadership', items: ACADEMIC_COUNCIL.compositionLeadership },
          {
            heading: 'Eminent Academicians (Nominated by Governing Council)',
            items: ACADEMIC_COUNCIL.eminentAcademicians,
            image: {
              src: '/campuses/academic-complex-nuzvid.jpg',
              alt: 'RGUKT central academic complex and campus infrastructure',
              caption: 'Central academic complex hosting modern computing centers and smart classrooms',
              tag: 'Campus Infrastructure',
            },
          },
          { heading: 'Permanent Invitees (National Leaders & Experts)', items: ACADEMIC_COUNCIL.permanentInvitees },
          { heading: 'Special Invitees (Campus Directors)', items: ACADEMIC_COUNCIL.specialInvitees },
        ],
        highlights: ACADEMIC_COUNCIL.stats,
        documents: ACADEMIC_COUNCIL.documents,
        pageStatus: 'ok',
      };
    case 'registrar':
      return {
        intro: REGISTRAR.intro,
        sections: [
          {
            heading: 'Academic Qualifications & Honors',
            items: REGISTRAR.qualifications,
          },
          {
            heading: 'Professional Experience & Institutional Leadership',
            items: REGISTRAR.experience,
            image: {
              src: '/gallery/gallery-12.jpg',
              alt: 'Prof. Amarendra Kumar Sandra presiding over academic assembly',
              caption: 'Prof. Amarendra Kumar Sandra coordinating institutional governance and convocation proceedings',
              tag: 'Administrative Leadership',
            },
          },
          {
            heading: 'Statutory Administrative Responsibilities',
            items: REGISTRAR.responsibilities,
          },
          {
            heading: 'Research Expertise & Infrastructure Consultancy',
            items: REGISTRAR.researchAndConsultancy,
          },
          {
            heading: 'Recent Institutional Engagements',
            items: REGISTRAR.recentEngagements,
            image: {
              src: '/gallery/gallery-1.jpg',
              alt: 'RGUKT university administrative coordination meeting',
              caption: 'Reviewing centralized admissions, faculty recruitments, and academic calendars',
              tag: 'Campus Coordination',
            },
          },
        ],
        highlights: REGISTRAR.stats,
        documents: REGISTRAR.documents,
        officer: {
          name: REGISTRAR.name,
          role: REGISTRAR.role,
          emails: REGISTRAR.contact.emails,
          officeAddress: REGISTRAR.contact.officeAddress,
          photo: REGISTRAR.contact.photo,
        },
        pageStatus: 'ok',
      };
    case 'directors':
      return {
        intro: CAMPUS_DIRECTORS_DATA.intro,
        highlights: CAMPUS_DIRECTORS_DATA.stats,
        directors: mapCampusDirectors(),
        sections: [
          {
            heading: 'Role & Statutory Responsibilities of a Campus Director',
            content: [
              'Under the statutory framework of RGUKT Act 18 of 2008 and the general superintendence of the Governing Council and the Vice-Chancellor, a Campus Director acts as the chief academic and executive leader of the constituent IIIT campus. Campus Directors coordinate day-to-day administration, academic delivery of the 6-Year Integrated B.Tech program, student residential life, faculty mentoring, laboratory development, and central university alignment.',
            ],
            items: CAMPUS_DIRECTORS_DATA.directorRoleResponsibilities,
            image: {
              src: '/gallery/gallery-7.jpg',
              alt: 'Campus Directors leading institutional academic governance',
              caption: 'Campus Directors steering synchronized academic ordinances, OBE pedagogy, and campus administration',
              tag: 'Campus Leadership',
            },
          },
        ],
        documents: [],
        pageStatus: 'ok',
      };
    case 'cao':
      return {
        intro: CAO.intro,
        officer: {
          name: CAO.name,
          role: CAO.designation,
          emails: [CAO.contact.email, CAO.contact.alternateEmail],
          officeAddress: CAO.contact.officeAddress,
          photo: CAO.contact.photo,
        },
        highlights: [
          { value: '15+ Years', label: 'Academic & Admin Experience' },
          { value: '4 Campuses', label: 'Central Logistics & Estates' },
          { value: 'IIT Bombay / Tirupati', label: 'Alumnus & Researcher' },
          { value: '₹1.13 Cr+', label: 'MHRD Funded Projects' },
        ],
        sections: [
          {
            heading: 'Statutory Role & Administrative Responsibilities',
            content: [
              'Under the executive superintendence of the Vice-Chancellor and the Registrar, the Chief Administrative Officer is the key executive authority managing central university establishment, non-academic personnel administration, campus physical assets, estate maintenance, procurement, and day-to-day operational support across all four constituent campuses.',
            ],
            items: CAO.responsibilities,
            image: {
              src: '/people/cao-b-prasad.jpg',
              alt: 'Dr. B. Prasad, Chief Administrative Officer, RGUKT-AP',
              caption: 'Dr. B. Prasad, Chief Administrative Officer (CAO), RGUKT-AP',
              tag: 'Chief Administrative Officer',
            },
          },
          {
            heading: 'Academic Qualifications & Professional Background',
            content: [
              'Dr. B. Prasad combines rigorous academic expertise from India’s premier institutes (IIT Bombay & IIT Tirupati) with over 15+ years of extensive teaching, research mentorship, and university administrative leadership.',
            ],
            items: CAO.qualifications,
          },
          {
            heading: 'Research, Sponsored Projects & Patents',
            content: [
              'In addition to his administrative portfolio, Dr. B. Prasad leads cutting-edge research in autonomous systems, AI for distributed fog computing, smart sensors, and robotics.',
            ],
            items: CAO.researchAndProjects,
          },
          {
            heading: 'Contact & Central Office',
            content: [
              `Designation: ${CAO.designation}`,
              `Primary Email: ${CAO.contact.email} | Official Alternate: ${CAO.contact.alternateEmail}`,
              `Contact Phone: ${CAO.contact.phone}`,
              `Office Address: ${CAO.contact.officeAddress}`,
            ],
          },
        ],
        documents: [],
        pageStatus: 'ok',
      };
    case 'dean-evaluation':
      return {
        intro: DEAN_EVALUATION.intro,
        officer: {
          name: DEAN_EVALUATION.name,
          role: DEAN_EVALUATION.designation,
          emails: [DEAN_EVALUATION.contact.email, DEAN_EVALUATION.contact.alternateEmail],
          officeAddress: DEAN_EVALUATION.contact.officeAddress,
          photo: DEAN_EVALUATION.contact.photo,
        },
        highlights: DEAN_EVALUATION.stats,
        sections: [
          {
            heading: 'Statutory Mandate & Examination Responsibilities',
            content: [
              'The Office of the Dean of Evaluation coordinates and executes the complete examination lifecycle across all four constituent IIIT campuses, guaranteeing absolute confidentiality, timely result processing, and strict adherence to university grading ordinances.',
            ],
            items: DEAN_EVALUATION.responsibilities,
            image: {
              src: '/people/dean-evaluation-riyaz-hussain.jpg',
              alt: 'Dr. SK. Riyaz Hussian, Dean of Evaluation, RGUKT-AP',
              caption: 'Dr. SK. Riyaz Hussian, Dean of Evaluation, RGUKT-AP',
              tag: 'Dean of Evaluation',
            },
          },
          {
            heading: 'Academic Qualifications & Professional Experience',
            content: [
              'Dr. SK. Riyaz Hussian is an Assistant Professor in the Department of Electronics and Communication Engineering (ECE) at RGUKT Nuzvid campus with over 13+ years of dedicated teaching, research, and examination administration experience.',
            ],
            items: DEAN_EVALUATION.qualifications,
          },
          {
            heading: 'Teaching Portfolio & Research Specialization',
            content: [
              'Beyond examination management, Dr. Riyaz Hussian is an active researcher in advanced communication systems, cooperative wireless networks, and deep learning algorithms.',
            ],
            items: DEAN_EVALUATION.teachingAndResearch,
          },
          {
            heading: 'Contact & Examination Cell',
            content: [
              `Designation: ${DEAN_EVALUATION.designation}`,
              `Primary Email: ${DEAN_EVALUATION.contact.email} | Official Alternate: ${DEAN_EVALUATION.contact.alternateEmail}`,
              `Contact Phone: ${DEAN_EVALUATION.contact.phone}`,
              `Office Address: ${DEAN_EVALUATION.contact.officeAddress}`,
            ],
          },
        ],
        documents: [],
        pageStatus: 'ok',
      };
    case 'dean-academics':
      return {
        intro: DEAN_ACADEMICS.intro,
        officer: {
          name: DEAN_ACADEMICS.name,
          role: `${DEAN_ACADEMICS.designation} | ${DEAN_ACADEMICS.subtitle}`,
          photo: DEAN_ACADEMICS.contact.photo,
          emails: [DEAN_ACADEMICS.contact.email, DEAN_ACADEMICS.contact.alternateEmail],
          officeAddress: DEAN_ACADEMICS.contact.officeAddress,
        },
        highlights: DEAN_ACADEMICS.stats,
        sections: [
          {
            heading: 'Statutory Mandate & Academic Governance',
            content: [
              'The Dean of Academics serves as the central administrative and statutory authority directing curriculum architecture, academic regulations, teaching-learning quality, and pedagogical innovation across all constituent IIIT campuses of RGUKT-AP.',
              'Under the direction of the Vice-Chancellor and Academic Council, the Dean of Academics harmonizes curriculum pacing, syllabus structures, credit distributions, and multi-disciplinary academic pathways.',
            ],
            items: DEAN_ACADEMICS.responsibilities,
          },
          {
            heading: 'Academic Qualifications & Professional Background',
            content: [
              'Mrs. D. Sravani Duvvuri is an accomplished Assistant Professor in the Department of Civil Engineering at RGUKT Nuzvid with over 14+ years of dedicated teaching, research mentorship, and university administration.',
            ],
            items: DEAN_ACADEMICS.qualifications,
          },
          {
            heading: 'Administrative Leadership & Institutional Assignments',
            content: [
              'Mrs. Sravani has held multiple key administrative assignments across the university, spearheading academic coordination, estate engineering, library modernization, and student career development.',
            ],
            items: DEAN_ACADEMICS.administrativeLeadership,
          },
          {
            heading: 'Teaching Portfolio & Research Specialization',
            content: [
              'Her research portfolio encompasses hydraulic modeling, GIS-based flood risk assessment, and cutting-edge machine learning applications for agricultural analytics.',
            ],
            items: DEAN_ACADEMICS.teachingAndResearch,
          },
          {
            heading: 'Official Communication & Secretariat',
            content: [
              `Designation: ${DEAN_ACADEMICS.designation}`,
              `Primary Email: ${DEAN_ACADEMICS.contact.email} | Official Alternate: ${DEAN_ACADEMICS.contact.alternateEmail}`,
              `Contact Phone: ${DEAN_ACADEMICS.contact.phone}`,
              `Office Address: ${DEAN_ACADEMICS.contact.officeAddress}`,
            ],
          },
        ],
        documents: [],
        pageStatus: 'ok',
      };
    case 'dean-eitp':
      return {
        intro: DEAN_EITP.intro,
        officer: {
          name: DEAN_EITP.name,
          role: `${DEAN_EITP.designation} | ${DEAN_EITP.subtitle}`,
          photo: DEAN_EITP.contact.photo,
          emails: [DEAN_EITP.contact.email, DEAN_EITP.contact.alternateEmail],
          officeAddress: DEAN_EITP.contact.officeAddress,
        },
        highlights: DEAN_EITP.stats,
        sections: [
          {
            heading: 'Statutory Mandate & EITP Directorate',
            content: [
              'The Directorate of Entrepreneurship, Incubation, Training and Placements (EITP) functions as the university’s primary strategic vehicle for connecting undergraduate talent with top-tier industrial employers, entrepreneurship ecosystems, and career acceleration avenues across all constituent campuses of RGUKT-AP.',
              'The Dean of EITP oversees multi-campus placement coordination, corporate relationships, technology incubation, industry-grade finishing schools, and specialized career mentorship programs.',
            ],
            items: DEAN_EITP.responsibilities,
          },
          {
            heading: 'Academic Qualifications & Professional Background',
            content: [
              'Mr. P. Shyam is an accomplished Assistant Professor in the Department of Electronics & Communication Engineering at RGUKT Nuzvid, with over 14+ years of distinguished teaching, research mentorship, and university administrative service.',
            ],
            items: DEAN_EITP.qualifications,
          },
          {
            heading: 'Global & Regional Design Awards',
            content: [
              'Mr. Shyam has earned international acclaim for cutting-edge engineering prototypes and embedded FPGA designs in competitive global engineering showcases.',
            ],
            items: DEAN_EITP.awards,
          },
          {
            heading: 'Institutional Leadership & Administrative Portfolio',
            content: [
              'Throughout his tenure at RGUKT, Mr. Shyam has spearheaded central campus administration, financial oversight, and departmental governance across multiple high-impact leadership roles.',
            ],
            items: DEAN_EITP.administrativeLeadership,
          },
          {
            heading: 'Teaching Portfolio & Research Specialization',
            content: [
              'His instructional portfolio and scientific investigations center on reconfigurable hardware architectures, low-power VLSI design, and IoT-driven sensing networks for agriculture and healthcare.',
            ],
            items: DEAN_EITP.teachingAndResearch,
          },
          {
            heading: 'Official Communication & Directorate Office',
            content: [
              `Designation: ${DEAN_EITP.designation}`,
              `Primary Placement & EITP Email: ${DEAN_EITP.contact.email} | Academic Alternate: ${DEAN_EITP.contact.alternateEmail}`,
              `Contact Phone: ${DEAN_EITP.contact.phone} | Campus EPABX: ${DEAN_EITP.contact.alternatePhone}`,
              `Office Location: ${DEAN_EITP.contact.officeAddress}`,
            ],
          },
        ],
        documents: [],
        pageStatus: 'ok',
      };
    case 'dean-rd':
      return {
        intro: DEAN_RD.intro,
        officer: {
          name: DEAN_RD.name,
          role: `${DEAN_RD.designation} | ${DEAN_RD.subtitle}`,
          photo: DEAN_RD.contact.photo,
          emails: [DEAN_RD.contact.email, DEAN_RD.contact.alternateEmail],
          officeAddress: DEAN_RD.contact.officeAddress,
        },
        highlights: DEAN_RD.stats,
        sections: [
          {
            heading: 'Statutory Mandate & Research Governance',
            content: [
              'The Directorate of Research & Development (R&D) serves as the university’s premier statutory body responsible for fostering cutting-edge scientific investigations, sponsored research projects, doctoral oversight, and technology incubation across all constituent campuses of RGUKT-AP.',
              'The Dean of R&D spearheads university-wide research policies, coordinates funded projects with national agencies (DST, SERB, AICTE, MHRD), manages intellectual property rights (IPR) and patents, oversees the Ph.D. program, and drives advanced innovation hubs.',
            ],
            items: DEAN_RD.responsibilities,
          },
          {
            heading: 'Academic Qualifications & Industrial Experience',
            content: [
              'Dr. Bogala Konda Reddy is a distinguished researcher and educator holding a Ph.D. in Heat Transfer from IIT Madras, with substantial industrial R&D experience at General Electric (GE) and over 13+ years of academic service.',
            ],
            items: DEAN_RD.qualifications,
          },
          {
            heading: 'Sponsored Research Projects & Publications',
            content: [
              'Dr. Reddy has led major sponsored research initiatives funded by the Ministry of Human Resource Development (MHRD) and authored high-impact papers in premier international thermal engineering journals.',
            ],
            items: DEAN_RD.teachingAndResearch,
          },
          {
            heading: 'Institutional Leadership & Administrative Portfolio',
            content: [
              'Dr. Reddy has held several pivotal administrative leadership positions across the university, directing academic affairs, campus placements, and departmental governance.',
            ],
            items: DEAN_RD.administrativeLeadership,
          },
          {
            heading: 'Official Communication & Directorate Office',
            content: [
              `Designation: ${DEAN_RD.designation}`,
              `Primary Research & Dean Email: ${DEAN_RD.contact.email} | Academic Alternate: ${DEAN_RD.contact.alternateEmail}`,
              `Contact Phone: ${DEAN_RD.contact.phone} | Campus Alternate: ${DEAN_RD.contact.alternatePhone}`,
              `Office Location: ${DEAN_RD.contact.officeAddress}`,
            ],
          },
        ],
        documents: [],
        pageStatus: 'ok',
      };
    case 'finance-officer':
      return {
        intro: FINANCE_OFFICER.intro,
        officer: {
          name: `${FINANCE_OFFICER.name}, ${FINANCE_OFFICER.degrees}`,
          role: FINANCE_OFFICER.designation,
          photo: FINANCE_OFFICER.contact.photo,
          emails: [FINANCE_OFFICER.contact.email, FINANCE_OFFICER.contact.alternateEmail],
          phone: FINANCE_OFFICER.contact.phone,
          officeAddress: FINANCE_OFFICER.contact.officeAddress,
        },
        highlights: FINANCE_OFFICER.stats,
        sections: [
          {
            heading: 'Profile & Academic Background',
            content: [
              `${FINANCE_OFFICER.name}, ${FINANCE_OFFICER.degrees}, is the Finance Officer of Rajiv Gandhi University of Knowledge Technologies – Andhra Pradesh and an Assistant Professor in the Department of Computer Science and Engineering at RGUKT Nuzvid.`,
              'With more than 19 years of teaching, research, and higher education administrative leadership across premier technical universities, she leads the apex financial administration of RGUKT-AP.',
            ],
            items: FINANCE_OFFICER.background,
          },
          {
            heading: 'Core Financial Governance & Key Responsibilities',
            content: [
              'The Finance Officer is entrusted with the fiscal stewardship, state budgetary coordination, and audit transparency of the university across all constituent campuses:',
            ],
            items: FINANCE_OFFICER.responsibilities,
          },
          {
            heading: 'Administrative Leadership & University Service',
            content: [
              'Dr. D. V. Nagarjana Devi has served RGUKT in multiple high-responsibility academic and administrative capacities:',
            ],
            items: FINANCE_OFFICER.administrativeRoles,
          },
          {
            heading: 'Official Secretariat & Contact Details',
            content: [
              `Designation: ${FINANCE_OFFICER.designation}`,
              `Primary Email: ${FINANCE_OFFICER.contact.email} | Alternate: ${FINANCE_OFFICER.contact.alternateEmail}`,
              `Central Phone: ${FINANCE_OFFICER.contact.phone} | Campus Office: ${FINANCE_OFFICER.contact.campusPhone}`,
              `Office Location: ${FINANCE_OFFICER.contact.officeAddress}`,
            ],
          },
        ],
        documents: [],
        pageStatus: 'ok',
      };
    case 'sports-board':
      return {
        intro: SPORTS_BOARD.intro,
        officer: {
          name: SPORTS_BOARD.title,
          role: SPORTS_BOARD.designation,
          photo: SPORTS_BOARD.contact.photo,
          emails: [SPORTS_BOARD.contact.email, SPORTS_BOARD.contact.alternateEmail],
          phone: SPORTS_BOARD.contact.phone,
          officeAddress: SPORTS_BOARD.contact.officeAddress,
        },
        highlights: SPORTS_BOARD.stats,
        sections: [
          {
            heading: 'About the Sports Board & Statutory Mandate',
            content: [
              'The Sports Board of Rajiv Gandhi University of Knowledge Technologies – Andhra Pradesh is the apex governing body constituted by the Vice Chancellor in accordance with the guidelines of the Association of Indian Universities (AIU).',
              'The Board plans, directs, and monitors physical education programs, campus sports infrastructure, intra-university leagues, and competitive team selections across all four constituent institutes (Nuzvid, RK Valley, Ongole, and Srikakulam).',
            ],
            items: SPORTS_BOARD.mandate,
          },
          {
            heading: 'Core Responsibilities & Athletic Governance',
            content: [
              'The Sports Board is tasked with the comprehensive athletic development and physical fitness of all residential scholars:',
            ],
            items: SPORTS_BOARD.responsibilities,
          },
          {
            heading: 'Sports & Games Offered Across RGUKT',
            content: [
              'Students actively train and compete across a wide spectrum of recognized indoor and outdoor sporting disciplines:',
              '• Outdoor Sports: ' + SPORTS_BOARD.sportsOffered.outdoor.join('; '),
              '• Indoor Games: ' + SPORTS_BOARD.sportsOffered.indoor.join('; '),
            ],
          },
          {
            heading: 'Sports Ecosystem Across the Four Campuses',
            content: [
              '1. Nuzvid Campus: Expansive main cricket/athletics ground with 400m track, floodlit basketball and volleyball courts, dedicated indoor badminton hall, table tennis facility, fully equipped gymnasium, and open-air yoga pavilion. Home to the annual Department Premier League (DPL) and AIU selection trials. Department: Department of Physical Education & Yoga, RGUKT Nuzvid.',
              '2. RK Valley (Idupulapaya) Campus: Large multi-purpose sports ground (cricket/football), standard 400m athletics track, outdoor volleyball and kabaddi arenas, indoor sports stadium with badminton and TT courts, well-equipped multi-gym for boys and girls, and Yoga Dhyana Kendra. Physical Directors: Sri V. Bala Obaiah, Dr. Shaik Shamshad Begam, RGUKT RK Valley.',
              '3. Ongole Campus: Dedicated campus sports grounds, outdoor volleyball and throwball courts, kabaddi arena, indoor badminton practice setups, table tennis, chess, and student fitness & conditioning setups. Department: Department of Physical Education, RGUKT Ongole.',
              '4. Srikakulam Campus: Extensive 20+ acre dedicated sports zone at the permanent S.M. Puram campus featuring multi-sport grounds, cricket pitch, volleyball courts, kabaddi courts, indoor games hall, and physical fitness facility. Successfully hosted the RGUKT Inter-Campus Sports Meet. Department: Department of Physical Education, RGUKT Srikakulam.',
            ],
          },
          {
            heading: 'Fitness, Gymnasium & Mindful Yoga',
            content: [
              SPORTS_BOARD.fitnessAndYoga.gymDescription,
              SPORTS_BOARD.fitnessAndYoga.yogaDescription,
              SPORTS_BOARD.fitnessAndYoga.scheduleNote,
            ],
          },
          {
            heading: 'Inter-Campus Tournaments & Competitive Laurels',
            content: [
              'RGUKT athletes regularly represent the university at regional, state, and national collegiate competitions:',
            ],
            items: SPORTS_BOARD.interCampusAndAchievements,
          },
          {
            heading: 'Sports Board Governance Structure',
            content: [
              '• Chairman: Vice Chancellor, RGUKT-AP',
              '• Executive Members: Campus Directors (Nuzvid, RK Valley, Ongole, Srikakulam)',
              '• Operational Leads: Physical Directors and Heads of Physical Education from all four constituent campuses',
            ],
          },
          {
            heading: 'Student Participation & How to Get Involved',
            content: [
              'RGUKT encourages all residential students to participate actively in sports and physical wellness:',
            ],
            items: SPORTS_BOARD.howToParticipate,
          },
          {
            heading: 'Official Secretariat & Contact Details',
            content: [
              `Designation: ${SPORTS_BOARD.designation}`,
              `Primary Email: ${SPORTS_BOARD.contact.email} | Alternate: ${SPORTS_BOARD.contact.alternateEmail}`,
              `Central Phone: ${SPORTS_BOARD.contact.phone}`,
              `Office Location: ${SPORTS_BOARD.contact.officeAddress}`,
            ],
          },
        ],
        documents: [],
        pageStatus: 'ok',
      };
    case 'dean-student-welfare':
    case 'dean-student-affairs':
      return {
        intro: DEAN_STUDENT_WELFARE.intro,
        officer: {
          name: DEAN_STUDENT_WELFARE.title,
          role: DEAN_STUDENT_WELFARE.designation,
          photo: DEAN_STUDENT_WELFARE.contact.photo,
          emails: [DEAN_STUDENT_WELFARE.contact.email, DEAN_STUDENT_WELFARE.contact.alternateEmail],
          phone: DEAN_STUDENT_WELFARE.contact.phone,
          officeAddress: DEAN_STUDENT_WELFARE.contact.officeAddress,
        },
        highlights: [],
        sections: [
          {
            heading: 'What is the Dean of Student Welfare (DSW)?',
            content: [
              'The Dean of Student Welfare (DSW) is the principal university authority overseeing the holistic well-being, residential accommodation, dining standards, and pastoral care of students across Rajiv Gandhi University of Knowledge Technologies – Andhra Pradesh.',
              'Because RGUKT is a 100% fully residential university accommodating over 20,000 rural youth throughout their 6-year integrated engineering program, the Dean of Student Welfare ensures a secure, inclusive, and enriching campus life.',
            ],
          },
          {
            heading: 'Key Responsibilities',
            content: [
              'The Dean of Student Welfare leads the following core student-support functions:',
            ],
            items: DEAN_STUDENT_WELFARE.responsibilities,
          },
          {
            heading: 'Associate Deans of Student Welfare',
            content: [
              'To ensure personalized care and dedicated residential governance across boys’ and girls’ hostel complexes, the university appoints Associate Deans of Student Welfare:',
              '• Associate Dean – Student Welfare (Boys): Dr. Rajesh Lankapalli, M.Phil., Ph.D., Assistant Professor, Department of English. Oversees boys’ hostel administration, mess operations, safety protocols, discipline, and boys’ grievance resolution. Email: dsw@rguktn.ac.in | Phone: +91-7670905565 / 0866-2468522.',
              '• Associate Dean – Student Welfare (Girls): Dr. T. Durga Bhavani, Ph.D., Assistant Professor, Department of English & ICC Member. Oversees girls’ hostel security, dining standards, health monitoring, psychological counseling, ICC assistance, and women students’ welfare initiatives. Email: dswgirls@rguktn.ac.in.',
            ],
          },
          {
            heading: 'Student Welfare Leadership Across Campuses',
            content: [
              '1. Nuzvid Campus: Dr. Rajesh Lankapalli (Boys, Email: dsw@rguktn.ac.in, Phone: +91-7670905565) & Dr. T. Durga Bhavani (Girls, Email: dswgirls@rguktn.ac.in). Office: Student Welfare Office, Administrative Block, RGUKT Nuzvid.',
              '2. RK Valley Campus: Mr. G. Venkatesh (DSW, Email: dsw@rguktrkv.ac.in, Phone: 08588-283654). Office: Room No. G007, Academic Block - 1, IIIT-RK Valley.',
              '3. Ongole Campus: Mr. R. Dilip (Student Welfare Lead, Email: swo@rguktong.ac.in, Phone: 08592-223135). Office: Student Welfare Section, RGUKT Ongole.',
              '4. Srikakulam Campus: Dr. G. Prakasa Rao (Boys, Email: dsw@rguktsklm.ac.in) & Dr. M. Yogeswari (Girls, Email: dswgirls@rguktsklm.ac.in). Office: Student Welfare Office, RGUKT Srikakulam.',
            ],
          },
          {
            heading: 'Student Welfare Support Channels',
            content: [
              'Students can access immediate assistance through dedicated welfare channels:',
            ],
            items: DEAN_STUDENT_WELFARE.supportAreas.map(s => `${s.title}: ${s.desc}`),
          },
          {
            heading: 'Official Contact Information',
            content: [
              `Central University Office: ${DEAN_STUDENT_WELFARE.designation}`,
              `Primary Email: ${DEAN_STUDENT_WELFARE.contact.email} | Alternate: ${DEAN_STUDENT_WELFARE.contact.alternateEmail}`,
              `Contact Phone: ${DEAN_STUDENT_WELFARE.contact.phone}`,
              `Office Location: ${DEAN_STUDENT_WELFARE.contact.officeAddress}`,
            ],
          },
        ],
        documents: [],
        pageStatus: 'ok',
      };
    default:
      return {};
  }
}

const GONING_COUNCIL_RESPONSIBILITIES_ITEMS = GOVERNING_COUNCIL.responsibilities;

function buildIntro(sections: AdminSection[], fallbackIntro?: string): string {
  const first = sections[0]?.content?.[0];
  if (first && first.length <= 800) return first;
  return fallbackIntro ?? '';
}

export function getAdministrationPage(pageKey: string): AdminPageData {
  const slug = ADMIN_PAGE_KEYS[pageKey] ?? pageKey;
  const raw = scraped.pages.find(p => p.slug === slug || (slug === 'dean-student-welfare' && p.slug === 'dean-student-affairs')) as ScrapedPage | undefined;
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
      directors: fallback.directors,
      officer: fallback.officer,
      pageStatus: 'ok',
    };
  }

  const sections = normalizeSections(raw);
  const hasLive = raw.pageStatus === 'ok' && (
    sections.length > 0 ||
    (raw.documents?.length ?? 0) > 0 ||
    slug === 'directors' ||
    slug === 'academic-council' ||
    slug === 'vice-chancellor' ||
    slug === 'governing-council' ||
    slug === 'registrar' ||
    slug === 'cao' ||
    slug === 'dean-evaluation' ||
    slug === 'dean-academics' ||
    slug === 'dean-eitp' ||
    slug === 'dean-rd' ||
    slug === 'dean-student-welfare' ||
    slug === 'dean-student-affairs' ||
    slug === 'finance-officer' ||
    slug === 'sports-board'
  );

  if (!hasLive) {
    return {
      slug,
      displayTitle: cleanTitle(raw.title, slug),
      rguktUrl: raw.rguktUrl,
      heroImage: HERO_IMAGES[slug] ?? '/gallery/gallery-7.jpg',
      intro: fallback.intro ?? '',
      sections: fallback.sections ?? [],
      documents: (raw.documents && raw.documents.length > 0)
        ? raw.documents.map(d => ({ title: d.title, url: d.url }))
        : (fallback.documents ?? []),
      highlights: fallback.highlights ?? [],
      directors: fallback.directors,
      officer: fallback.officer,
      pageStatus: fallback.pageStatus ?? 'fallback',
      sourceNote: fallback.pageStatus === 'ok' ? undefined : 'Page unavailable on rgukt.in — content supplemented locally.',
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

  const heroImage = (officer?.photo?.startsWith('http') && !['vice-chancellor', 'registrar', 'cao', 'dean-evaluation', 'dean-academics', 'dean-eitp', 'dean-rd', 'dean-student-welfare', 'dean-student-affairs', 'finance-officer', 'sports-board'].includes(slug))
    ? officer.photo
    : (HERO_IMAGES[slug] ?? '/gallery/gallery-7.jpg');

  const finalDocs = (['directors', 'cao', 'dean-evaluation', 'dean-academics', 'dean-eitp', 'dean-rd', 'dean-student-welfare', 'dean-student-affairs', 'finance-officer', 'sports-board'].includes(slug))
    ? []
    : (fallback.documents && fallback.documents.length > 0)
      ? fallback.documents
      : (raw.documents && raw.documents.length > 0
        ? raw.documents.map(d => ({ title: d.title, url: d.url }))
        : []);

  const finalSectionsToUse = (['governing-council', 'vice-chancellor', 'academic-council', 'chancellor', 'registrar', 'directors', 'cao', 'dean-evaluation', 'dean-academics', 'dean-eitp', 'dean-rd', 'dean-student-welfare', 'dean-student-affairs', 'finance-officer', 'sports-board'].includes(slug) && fallback.sections && fallback.sections.length > 0)
    ? fallback.sections
    : (finalSections.length > 0 ? finalSections : (fallback.sections ?? []));

  return {
    slug,
    displayTitle: cleanTitle(raw.title, slug),
    rguktUrl: raw.rguktUrl,
    heroImage,
    intro: intro || fallback.intro || '',
    sections: finalSectionsToUse,
    documents: finalDocs,
    highlights: fallback.highlights ?? [],
    officer: fallback.officer ?? officer,
    directors: slug === 'directors' ? mapCampusDirectors() : fallback.directors,
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
