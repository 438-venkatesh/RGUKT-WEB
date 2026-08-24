import scraped from './studentsScraped.json';
import {
  ALUMNI_ENGAGEMENT,
  ANTI_RAGGING,
  CAREER_GROWTH,
  COMMUNITY,
  CULTURAL,
  ESSENTIAL_SERVICES,
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
  'career-growth': 'Career Growth & Student Development',
  'quantum-lab': 'Quantum Computing Laboratory & Initiatives',
  'anti-ragging': 'Anti-Ragging Mechanism & Zero-Tolerance Policy',
  icc: 'Internal Complaints Committee (ICC)',
  'women-empowerment': 'Women Empowerment & Gender Equity',
  cultural: 'Cultural Activities & Student Societies',
  sports: 'Student Sports & Physical Fitness',
  community: 'Community Activities & National Service Scheme (NSS)',
  'alumni-engagement': 'Alumni Engagement & Student Mentorship',
};

const HERO_IMAGES: Record<string, string> = {
  overview: '/gallery/gallery-5.jpg',
  scholarships: '/gallery/gallery-9.jpg',
  medals: '/hero/hero-convocation.jpg',
  'career-growth': '/gallery/gallery-11.jpg',
  'quantum-lab': '/students/quantum-workshop-1.jpg',
  'anti-ragging': '/gallery/gallery-1.jpg',
  icc: '/gallery/gallery-1.jpg',
  'women-empowerment': '/students/women-empowerment-1.jpg',
  cultural: '/students/teckzite-stage-5.jpg',
  sports: '/gallery/gallery-5.jpg',
  community: '/gallery/gallery-3.jpg',
  'alumni-engagement': '/gallery/gallery-12.jpg',
};

const DOC_TITLES: Record<string, string> = {
  scholarships: 'Scholarships Information (PDF)',
  medals: 'Medal Information (PDF)',
  cultural: 'Cultural Activities (PDF)',
};

function buildFallback(slug: string): Partial<StudentsPageData> {
  switch (slug) {
    case 'overview':
      return {
        intro:
          'RGUKT-AP supports holistic student development through scholarships, career guidance, quantum computing labs, sports and cultural activities, welfare committees, essential on-campus services, and strong alumni engagement across all four residential campuses.',
        highlights: STUDENTS_OVERVIEW_STATS,
        sections: [
          {
            heading: 'Comprehensive Student Life & Residential Ecosystem',
            content: [
              'RGUKT offers a unique, fully residential 6-year integrated engineering program designed to transform rural meritorious youth into global technology leaders.',
              'Student life combines rigorous academics with vibrant cultural societies, daily sports training, competitive examination guidance, community volunteering, and dedicated pastoral welfare across Nuzvid, RK Valley, Ongole, and Srikakulam.',
            ],
            items: [
              'Scholarships: Over 90% of students receive state post-matric tuition fee reimbursement (Jagananna Vidya Deevena) and hostel assistance.',
              'Career Guidance: Structured mentorship tracks for GATE, UPSC/APPSC, competitive coding, and premier higher education admissions.',
              'Quantum Computing Lab: Hands-on undergraduate quantum computing and AI lab facilities linked with the National Quantum Mission.',
              'Campus Safety & Welfare: Strict zero-tolerance Anti-Ragging framework, statutory Internal Complaints Committee (ICC), and Women Empowerment Cells.',
              'Cultural & Sports Life: Signature annual campus fests (Teckzite, Cygnus, Abhiyanth, Ornate, TechFest) and daily multi-sport recreation.',
              'Alumni Network: Global mentorship by distinguished alumni across top tech companies, civil services, and research universities.',
            ],
            image: {
              src: '/gallery/gallery-5.jpg',
              alt: 'RGUKT Residential Student Life',
              caption: 'Holistic residential learning, athletic training, and campus life across 4 campuses.',
              tag: 'Campus Life',
            },
          },
          {
            heading: 'Essential Campus Services: Police & Security Assistance',
            content: [ESSENTIAL_SERVICES.policeAssistance.intro],
            items: ESSENTIAL_SERVICES.policeAssistance.facilities,
            image: {
              src: '/gallery/gallery-1.jpg',
              alt: 'Campus Security and Police Coordination',
              caption: '24×7 security vigilance and on-campus police station coordination for student protection.',
              tag: 'Safety & Security',
            },
          },
          {
            heading: 'Essential Campus Services: State Bank of India (SBI) Banking',
            content: [ESSENTIAL_SERVICES.bankingServices.intro],
            items: ESSENTIAL_SERVICES.bankingServices.facilities,
            image: {
              src: '/gallery/gallery-1.jpg',
              alt: 'SBI Campus Banking & Administrative Complex',
              caption: 'On-campus SBI branches, 24×7 ATMs, and official SBI Collect online fee portals.',
              tag: 'SBI Banking',
            },
          },
        ],
        pageStatus: 'ok',
      };
    case 'scholarships':
      return {
        intro: SCHOLARSHIPS.intro,
        highlights: SCHOLARSHIPS.stats,
        sections: [
          {
            heading: 'State Government Welfare Schemes (Andhra Pradesh)',
            content: [
              'The Government of Andhra Pradesh provides extensive scholarship support to ensure that economic constraints never hinder technical education:',
            ],
            items: SCHOLARSHIPS.stateSchemes,
            image: {
              src: '/gallery/gallery-9.jpg',
              alt: 'Scholarships & Library Study',
              caption: 'Over 90% of students receive state fee reimbursement (JVD & MTF).',
              tag: 'Financial Support',
            },
          },
          {
            heading: 'Central Government & National Scholarships (NSP)',
            content: [
              'Meritorious scholars at RGUKT can additionally apply for various prestigious national scholarships:',
            ],
            items: SCHOLARSHIPS.centralSchemes,
          },
          {
            heading: 'Eligibility Criteria & Compliance Guidelines',
            content: [
              'To avail and renew scholarships, students must satisfy standard state and institutional prerequisites:',
            ],
            items: SCHOLARSHIPS.eligibilityAndRules,
          },
          {
            heading: 'Campus Scholarship Desks (All Four Campuses)',
            content: SCHOLARSHIPS.campusDesks.map(
              d => `${d.campus}: ${d.location} | Email: ${d.email} | Phone: ${d.phone}`
            ),
          },
          {
            heading: 'Online Application Portals',
            content: [
              'Students can register and track their scholarship applications on official state and national portals:',
              '• AP Jnanabhumi Portal: https://jnanabhumi.ap.gov.in/',
              '• National Scholarship Portal (NSP): https://scholarships.gov.in/',
            ],
          },
        ],
        externalUrl: 'https://jnanabhumi.ap.gov.in/',
        documents: [],
        pageStatus: 'ok',
      };
    case 'medals':
      return {
        intro: MEDALS.intro,
        highlights: MEDALS.stats,
        sections: [
          {
            heading: 'University Convocation Medals & Distinctions',
            content: [
              'RGUKT confers high academic honors during formal university convocations to celebrate stellar student achievements:',
            ],
            items: MEDALS.categories,
            image: {
              src: '/hero/hero-convocation.jpg',
              alt: 'Convocation Gold Medals',
              caption: 'Conferment of Chancellor’s and Vice Chancellor’s Gold Medals.',
              tag: 'Convocation',
            },
          },
          {
            heading: 'Eligibility & Strict Merit Selection Criteria',
            content: [
              'Medals are awarded strictly based on transparent, merit-driven institutional regulations:',
            ],
            items: MEDALS.criteria,
          },
          {
            heading: 'Convocation Ceremony Highlights',
            content: [
              'University convocations celebrate the graduation of B.Tech and M.Tech scholars across all constituent campuses:',
            ],
            items: MEDALS.convocationHighlights,
          },
          {
            heading: 'Four-Campus Academic Honor Rolls',
            content: [
              '1. Nuzvid Campus: Annual topper plaques and department rank lists showcased in the Administrative Complex.',
              '2. RK Valley Campus: Departmental gold medalists honored in Academic Block - 1.',
              '3. Ongole Campus: Top academic performers recognized during annual foundation day celebrations.',
              '4. Srikakulam Campus: Meritorious graduates facilitated at the permanent S.M. Puram auditorium.',
            ],
          },
        ],
        documents: [],
        pageStatus: 'ok',
      };
    case 'career-growth':
      return {
        intro: CAREER_GROWTH.intro,
        highlights: CAREER_GROWTH.stats,
        sections: [
          {
            heading: 'Core Career Development Pillars',
            content: [
              'RGUKT provides a holistic career preparation ecosystem to empower students for high-impact national and global roles:',
            ],
            items: CAREER_GROWTH.pillars,
            image: {
              src: '/gallery/gallery-11.jpg',
              alt: 'Career Guidance & Development',
              caption: 'Structured mentorship tracks for GATE, UPSC, coding, and higher studies.',
              tag: 'Career Growth',
            },
          },
          {
            heading: 'Four-Campus Career Guidance Cells (CGC)',
            content: CAREER_GROWTH.campusCells.map(
              c => `${c.campus}: ${c.office} | Contact Email: ${c.email}`
            ),
          },
          {
            heading: 'Career Growth vs. Training & Placements',
            content: [
              'While the Career Growth ecosystem focuses on long-term skill acquisition, competitive exam guidance (GATE/UPSC), and higher studies, recruitment drives and company hiring are coordinated by the Training & Placements department.',
              'Students seeking information on employer recruitment drives, internship offers, and placement statistics should visit the Training & Placements portal.',
            ],
          },
        ],
        documents: [],
        pageStatus: 'ok',
      };
    case 'quantum-lab':
      return {
        intro: QUANTUM_LAB.intro,
        highlights: QUANTUM_LAB.stats,
        sections: [
          {
            heading: 'Quantum Computing Laboratory & Research Infrastructure',
            content: [
              'In collaboration with the National Quantum Mission (NQM) and the Amaravati Quantum Valley (AQV) initiative, RGUKT is advancing undergraduate quantum technology:',
            ],
            items: QUANTUM_LAB.initiatives,
            image: {
              src: '/students/quantum-workshop-2.jpg',
              alt: 'Quantum Computing Laboratory & Students',
              caption: 'Undergraduate quantum computing research, simulators, and Qiskit hackathons at RGUKT.',
              tag: 'Quantum Lab',
            },
          },
          {
            heading: 'Quantum Computing Activities Across Campuses',
            content: [
              'Quantum initiatives engage students across all constituent institutes:',
            ],
            items: QUANTUM_LAB.campusHighlights,
          },
          {
            heading: 'Amaravati Quantum Valley (AQV) State Ecosystem',
            content: [
              'Andhra Pradesh is developing Amaravati Quantum Valley as a national quantum reference and talent incubation hub.',
              'RGUKT scholars participate in quantum hardware testing workshops, cloud simulator development, and IBM/TCS mentored quantum hackathons.',
            ],
          },
        ],
        documents: [],
        pageStatus: 'ok',
      };
    case 'anti-ragging':
      return {
        intro: ANTI_RAGGING.intro,
        highlights: ANTI_RAGGING.stats,
        helpline: {
          phones: ['1800-180-5522', '09871170303', '09818400116'],
          emails: ['helpline@antiragging.in', 'antiragging@rgukt.ac.in'],
        },
        sections: [
          {
            heading: 'Zero-Tolerance Anti-Ragging Policy',
            content: [
              'RGUKT strictly prohibits ragging in any form across its residential campuses. Ragging is a cognizable criminal offence under law.',
            ],
            items: ANTI_RAGGING.definitions,
          },
          {
            heading: 'Institutional Prevention Framework & Vigilance Squads',
            content: [
              'Robust mechanisms ensure round-the-clock safety and student dignity across residential hostels and academic zones:',
            ],
            items: ANTI_RAGGING.preventionFramework,
          },
          {
            heading: 'Consequences of Ragging (Current Applicable Punishments)',
            content: [
              'Students found guilty of ragging face strict disciplinary and legal consequences in accordance with UGC Regulations and Andhra Pradesh law:',
            ],
            items: ANTI_RAGGING.consequences,
          },
          {
            heading: 'If You Experience or Witness Ragging (Emergency Reporting Steps)',
            content: [
              'Follow these immediate steps to report any instance of ragging safely and confidentially:',
            ],
            items: ANTI_RAGGING.reportingSteps,
          },
          {
            heading: 'Four-Campus Emergency Contacts & Proctorial Desks',
            content: ANTI_RAGGING.campusEmergencyContacts.map(
              c => `${c.campus}: ${c.office} | Phone: ${c.phone} | Email: ${c.email}`
            ),
          },
        ],
        documents: [],
        pageStatus: 'ok',
      };
    case 'icc':
      return {
        intro: ICC.intro,
        highlights: ICC.stats,
        helpline: {
          phones: ['+91-863-2344708', '08588-283654'],
          emails: ['icc@rgukt.ac.in', 'icc@rguktn.ac.in'],
        },
        sections: [
          {
            heading: 'Statutory Mandate under POSH Act, 2013',
            content: [
              'The Internal Complaints Committee (ICC) functions strictly in accordance with statutory guidelines under the POSH Act, 2013 and UGC Regulations, 2015 to protect female students, faculty, and staff:',
            ],
            items: ICC.mandate,
          },
          {
            heading: 'Grievance Redressal Procedure & Timebound Inquiry',
            content: [
              'The ICC guarantees absolute legal confidentiality and protected due process throughout the redressal procedure:',
            ],
            items: ICC.procedure,
          },
          {
            heading: 'Campus ICC Leadership & Contact Information',
            content: ICC.campusLeadership.map(
              l => `${l.campus}: ${l.officer} (${l.role}) | Email: ${l.email} | Phone: ${l.phone}`
            ),
          },
          {
            heading: 'Support, Protection & Zero-Retaliation Policy',
            content: [
              'Complainants and witnesses receive full administrative protection, psychological counseling support, and academic/hostel accommodations during and after inquiry proceedings.',
              'Retaliation against any individual reporting an incident or assisting in an inquiry is strictly prohibited and treated as a major disciplinary offense.',
            ],
          },
        ],
        documents: [],
        pageStatus: 'ok',
      };
    case 'women-empowerment':
      return {
        intro: WOMEN_EMPOWERMENT.intro,
        highlights: WOMEN_EMPOWERMENT.stats,
        sections: [
          {
            heading: 'Campus Safety & Gender Equity Facilities',
            content: [
              'With over 50% female enrollment, RGUKT provides specialized facilities across all constituent institutes:',
            ],
            items: WOMEN_EMPOWERMENT.infrastructure,
            image: {
              src: '/students/women-empowerment-5.jpg',
              alt: 'Women in STEM & Leadership Circles',
              caption: '50%+ female enrollment with dedicated campus safety, health, and leadership initiatives.',
              tag: 'Women in STEM',
            },
          },
          {
            heading: 'Core Empowerment & Skill Development Programs',
            content: [
              'The Women Empowerment Cell (WEC) organizes regular developmental, self-defense, and leadership initiatives:',
            ],
            items: WOMEN_EMPOWERMENT.keyPrograms,
          },
          {
            heading: 'Four-Campus Women Empowerment Initiatives',
            content: [
              'Active cells across all four constituent institutes lead campus-specific programs:',
            ],
            items: WOMEN_EMPOWERMENT.campusActivities,
          },
        ],
        documents: [],
        pageStatus: 'ok',
      };
    case 'cultural':
      return {
        intro: CULTURAL.intro,
        highlights: CULTURAL.stats,
        sections: [
          {
            heading: CULTURAL.teckzite.title,
            content: [CULTURAL.teckzite.intro],
            items: CULTURAL.teckzite.highlights,
            image: {
              src: '/students/teckzite-stage-7.jpg',
              alt: 'TECKZITE National Techno-Management Fest Stage',
              caption: 'National-level technical competitions, robotics challenges, workshops, and pro shows at RGUKT Nuzvid.',
              tag: 'TECKZITE Fest',
            },
          },
          {
            heading: CULTURAL.cygnus.title,
            content: [CULTURAL.cygnus.intro],
            items: CULTURAL.cygnus.highlights,
            image: {
              src: '/students/cygnus-fest-1.jpg',
              alt: 'CYGNUS Annual Cultural Extravaganza',
              caption: 'Signature annual cultural festival celebrating Indian performing arts, music, dance, and ramp walks.',
              tag: 'CYGNUS Extravaganza',
            },
          },
          {
            heading: 'Flagship Festivals Across Other Constituent Campuses',
            content: [
              'Each constituent campus hosts vibrant annual cultural and technical celebrations:',
            ],
            items: CULTURAL.otherCampusFests,
            image: {
              src: '/students/sitara-cultural-1.jpg',
              alt: 'Campus Musical Nights & Concerts',
              caption: 'High-energy musical concerts, choreography battles, and student performing arts across campuses.',
              tag: 'Cultural Nights',
            },
          },
          {
            heading: 'Student Cultural Clubs & Creative Societies',
            content: [
              'Student-led societies nurture artistic, literary, and performing talents:',
            ],
            items: CULTURAL.studentClubs,
          },
          {
            heading: 'Traditional, Cultural & National Celebrations',
            content: [
              'RGUKT celebrates Indian cultural heritage and national festivals with great enthusiasm:',
            ],
            items: CULTURAL.traditionalCelebrations,
          },
          {
            heading: 'Governance by Students’ Gymkhana Center (SGC)',
            content: [CULTURAL.governance],
          },
        ],
        documents: [],
        pageStatus: 'ok',
      };
    case 'sports':
      return {
        intro: SPORTS.intro,
        highlights: SPORTS.stats,
        sections: [
          {
            heading: 'Daily Sports Hours & Student Recreation',
            content: [
              'Physical fitness and sports recreation are built into the residential timetable:',
            ],
            items: SPORTS.dailyHours,
            image: {
              src: '/gallery/gallery-5.jpg',
              alt: 'Sports Grounds and Physical Fitness',
              caption: '20+ acres of standard sports grounds and athletic tracks across campuses.',
              tag: 'Athletics',
            },
          },
          {
            heading: 'Sports Facilities Across Four Campuses',
            content: SPORTS.campusFacilities.map(
              f => `${f.campus}: Facilities include ${f.facilities}. Highlights: ${f.activities}`
            ),
          },
          {
            heading: 'Intra-Campus Leagues & Competitive Selection',
            content: [
              'Students compete in university leagues and state/national championships:',
            ],
            items: SPORTS.studentTournaments,
          },
          {
            heading: 'Gymnasiums, Yoga & Mindful Wellness',
            content: [
              'Modern fitness centers and daily yoga routines support holistic physical and mental well-being:',
            ],
            items: SPORTS.fitnessAndYoga,
          },
        ],
        documents: [],
        pageStatus: 'ok',
      };
    case 'community':
      return {
        intro: COMMUNITY.intro,
        highlights: COMMUNITY.stats,
        sections: [
          {
            heading: 'Flagship NSS & Social Outreach Initiatives',
            content: [
              'Guided by the motto "Not Me But You", student volunteers actively serve rural communities:',
            ],
            items: COMMUNITY.flagshipInitiatives,
            image: {
              src: '/gallery/gallery-3.jpg',
              alt: 'NSS Community Service',
              caption: '2,000+ student volunteers leading rural village adoption and blood donation drives.',
              tag: 'NSS AP',
            },
          },
          {
            heading: 'NCC – National Cadet Corps (Unity & Discipline)',
            content: [COMMUNITY.ncc.intro],
            items: [
              `Student Participation: ${COMMUNITY.ncc.participation.join(' ')}`,
              `Training & Activities: ${COMMUNITY.ncc.trainingAndActivities.join(' ')}`,
              `Community Service: ${COMMUNITY.ncc.communityService.join(' ')}`,
              `Recent Activities & Achievements: ${COMMUNITY.ncc.recentAchievements.join(' ')}`,
            ],
            image: {
              src: '/students/ncc-cadets-parade.jpg',
              alt: 'RGUKT NCC Cadets Ceremonial Parade',
              caption: 'Senior Division & Senior Wing NCC cadets participating in national parades and community service.',
              tag: 'NCC Cadets',
            },
          },
          {
            heading: 'NCC Leadership & Active Campus Units',
            content: COMMUNITY.ncc.leadershipAndUnits.map(
              u => `${u.campus}: ${u.unit} (${u.affiliation}) | Officer: ${u.officer} (${u.designation})`
            ),
          },
          {
            heading: 'Four-Campus NSS Units & Community Impact',
            content: COMMUNITY.campusUnits.map(
              u => `${u.campus}: ${u.highlights}`
            ),
          },
          {
            heading: 'Voluntary Blood Donation & Village Adoption',
            content: [
              'NSS & NCC units maintain regular emergency blood donor registries and organize periodic blood donation camps with the Indian Red Cross Society.',
              'Adopted rural villages benefit from regular health camps, sanitation drives, and digital literacy workshops conducted by student volunteers.',
            ],
          },
        ],
        documents: [],
        pageStatus: 'ok',
      };
    case 'alumni-engagement':
      return {
        intro: ALUMNI_ENGAGEMENT.intro,
        highlights: ALUMNI_ENGAGEMENT.stats,
        sections: [
          {
            heading: 'Registered Alumni Associations & Network',
            content: [
              'RGUKT alumni are organized through registered societies and digital platforms:',
            ],
            items: ALUMNI_ENGAGEMENT.associationFramework,
            image: {
              src: '/gallery/gallery-12.jpg',
              alt: 'Alumni Engagement and Mentorship',
              caption: 'Global alumni mentoring current engineering scholars across premier domains.',
              tag: 'Alumni Network',
            },
          },
          {
            heading: 'Mentorship Programs & Knowledge Sharing',
            content: [
              'Alumni actively support current scholars through multiple interaction channels:',
            ],
            items: ALUMNI_ENGAGEMENT.mentorshipAndPrograms,
          },
          {
            heading: 'Four-Campus Alumni Coordination Desks',
            content: ALUMNI_ENGAGEMENT.campusDesks.map(
              d => `${d.campus}: ${d.office} | Contact: ${d.email}`
            ),
          },
          {
            heading: 'How Current Students Connect with Alumni',
            content: [
              'Students can request 1-on-1 mentorship, attend the Alumni Knowledge Series webinars, and participate in alumni-sponsored hackathons through their campus Student Alumni Relations Cell (SARC) or by emailing their campus alumni office.',
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

export function getStudentsPage(pageKey: string): StudentsPageData {
  const slug = STUDENTS_PAGE_KEYS[pageKey] ?? pageKey;
  const raw = scraped.pages.find(p => p.slug === slug);
  const fallback = buildFallback(slug);

  const heroImage = HERO_IMAGES[slug] ?? '/gallery/gallery-5.jpg';
  const intro = fallback.intro ?? '';
  const sections = (fallback.sections && fallback.sections.length > 0)
    ? fallback.sections
    : ((raw?.sections ?? []) as StudentsSection[]);

  const documents = (fallback.documents && fallback.documents.length > 0)
    ? fallback.documents
    : (((raw?.documents ?? []) as { title: string; url: string }[]).map(d => ({
        title: DOC_TITLES[slug] ?? d.title,
        url: d.url,
      })));

  const helpline = fallback.helpline ?? (raw?.helpline as StudentsHelpline | undefined);
  const externalUrl = fallback.externalUrl;

  return {
    slug,
    displayTitle: DISPLAY_TITLES[slug] ?? slug,
    rguktUrl: raw?.rguktUrl ?? '',
    heroImage,
    intro,
    sections,
    documents,
    highlights: fallback.highlights ?? [],
    helpline,
    externalUrl,
    pageStatus: 'ok',
  };
}

export { STUDENTS_NAV };

