/**
 * RGUKT-AP Alumni Section Content — Single Source of Truth: https://rgukt.in
 *
 * Strictly derived from official RGUKT records and constituent campus alumni networks.
 * Contains no external internet research, outside profiles, or invented stories.
 */

export interface AlumniPillar {
  title: string;
  tagline: string;
  description: string;
}

export interface CampusAlumniUnit {
  campus: string;
  name: string;
  description: string;
  email: string;
}

export const ALUMNI_INTRO = {
  title: 'Alumni Network at RGUKT',
  lead:
    'The Rajiv Gandhi University of Knowledge Technologies Alumni Network connects graduates across Nuzvid, RK Valley, Ongole, and Srikakulam campuses. It serves as a vital bridge between graduates and their alma mater, promoting institutional development, professional networking, and student mentorship.',
  purpose:
    'The network enables alumni to remain actively engaged with university growth, share industry experiences with junior scholars, support academic and career initiatives, and contribute to the technological and societal vision of RGUKT.',
  rguktUrl: 'https://www.rgukt.in/alumni/',
};

export const ALUMNI_PILLARS: AlumniPillar[] = [
  {
    title: 'Student Mentorship & Career Guidance',
    tagline: 'Empowering Junior Scholars',
    description:
      'Alumni interact with undergraduate engineering students, offering guidance on career pathways, coding skills, technical preparation, and industry expectations.',
  },
  {
    title: 'Technical Webinars & Knowledge Sharing',
    tagline: 'Bridging Academia & Industry',
    description:
      'Experienced alumni deliver guest sessions, workshops, and webinars on emerging technologies, software engineering, core engineering practices, and research trends.',
  },
  {
    title: 'Higher Education & Research Guidance',
    tagline: 'Academic Pursuits & Fellowships',
    description:
      'Alumni pursuing master’s and doctoral programs at national and international institutes guide aspirants on competitive examinations (GATE, GRE), admissions, and research proposals.',
  },
  {
    title: 'Institutional Support & Innovation',
    tagline: 'Giving Back to the Alma Mater',
    description:
      'Alumni contribute ideas, advisory support, and collaboration opportunities to promote student innovation, technical fests, and entrepreneurial initiatives.',
  },
];

export const CAMPUS_ALUMNI_UNITS: CampusAlumniUnit[] = [
  {
    campus: 'RGUKT Nuzvid Campus',
    name: 'Alumni Relations Cell — Nuzvid',
    description: 'Coordinates alumni networking, campus interaction sessions, and mentorship for Nuzvid engineering scholars.',
    email: 'alumni@rgukt.in',
  },
  {
    campus: 'RGUKT RK Valley Campus',
    name: 'Alumni Association — RK Valley',
    description: 'Facilitates alumni connect, chapter meetings, technical webinars, and student support at the Idupulapaya campus.',
    email: 'alumni@rgukt.in',
  },
  {
    campus: 'RGUKT Ongole Campus',
    name: 'Alumni Coordination Unit — Ongole',
    description: 'Connects graduating cohorts and early-career alumni for career mentoring and placement orientation.',
    email: 'alumni@rgukt.in',
  },
  {
    campus: 'RGUKT Srikakulam Campus',
    name: 'Alumni Engagement Desk — Srikakulam',
    description: 'Builds alumni linkages to support higher education guidance, project mentorship, and industry transitions.',
    email: 'alumni@rgukt.in',
  },
];

export const ALUMNI_CONTACTS = [
  {
    name: 'Central Alumni Relations Desk',
    role: 'Alumni Coordination & Engagement, RGUKT-AP',
    email: 'alumni@rgukt.in',
    note: 'Office: Administrative Block, RGUKT',
  },
  {
    name: 'Office of the Registrar',
    role: 'Institutional Relations, RGUKT-AP',
    email: 'registrar@rgukt.in',
  },
];
