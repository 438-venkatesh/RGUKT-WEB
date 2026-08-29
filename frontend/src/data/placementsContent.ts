/**
 * RGUKT-AP Training & Placements Content — Single Source of Truth: https://rgukt.in
 *
 * Strictly derived from official RGUKT records and Directorate of EITP governance.
 * Contains no external internet research, outside statistics, or speculative filler.
 */

export interface PlacementTrainingModule {
  title: string;
  tagline: string;
  description: string;
  focusAreas: string[];
}

export interface PlacementProcessStep {
  stepNumber: number;
  title: string;
  tagline: string;
  description: string;
}

export interface RecruiterCategory {
  category: string;
  description: string;
  companies: {
    name: string;
    domain: string;
  }[];
}

export const PLACEMENTS_INTRO = {
  title: 'Training & Placements at RGUKT',
  lead:
    'The Directorate of Entrepreneurship, Incubation, Training and Placements (EITP), along with the Career Development and Placement Cells across constituent campuses, coordinates comprehensive career guidance, technical finishing modules, industry internships, and campus placement drives for students across Nuzvid, RK Valley, Ongole, and Srikakulam campuses.',
  policyNote:
    'RGUKT provides structured training and equitable placement assistance to empower rural youth in securing meaningful careers in multinational IT corporations, core engineering industries, public sector undertakings, and entrepreneurial ventures.',
  rguktUrl: 'https://www.rgukt.in/training-and-placements/',
};

export const PLACEMENT_OFFICER = {
  name: 'Mr. P. Shyam',
  degrees: 'M.Tech',
  designation: 'Dean of Entrepreneurship, Incubation, Training and Placements (EITP)',
  academicRole: 'Assistant Professor, Department of Electronics & Communications Engineering (ECE)',
  photo: '/people/dean-eitp-p-shyam.jpg',
  officeAddress: 'I3 Block, RGUKT Nuzvid Campus',
  email: 'dean.eitp@rgukt.in',
  alternateEmail: 'placements@rgukt.in',
  bio: [
    'Mr. P. Shyam, M.Tech, is an Assistant Professor in the Department of ECE at RGUKT Nuzvid, where he has been serving since June 2012. His expertise includes VLSI Design, FPGA Prototyping, Digital System Design, and IoT applications for healthcare and agriculture.',
    'He received the Silver Award at the Asia Pacific Japan Regional Finals of the InnovateFPGA Global Design Contest (2022) and the Award of Excellence at the InnovateFPGA Design Contest (2019). He has held key administrative roles at RGUKT, including Administrative Officer (2019–2021), Finance Officer (2016–2018), and Head of the Department.',
  ],
};

export const PLACEMENT_TRAINING_MODULES: PlacementTrainingModule[] = [
  {
    title: 'Technical Competencies & Programming',
    tagline: 'Coding & Algorithmic Problem Solving',
    description:
      'Structured practice in fundamental programming languages (C, C++, Java, Python), data structures, algorithms, and database management systems.',
    focusAreas: ['Data Structures & Algorithms', 'Object-Oriented Programming', 'Database Concepts', 'Hands-on Coding Labs'],
  },
  {
    title: 'Core Engineering & Domain Training',
    tagline: 'Discipline-Specific Competencies',
    description:
      'Specialized domain preparation in VLSI design, embedded systems, power systems, thermal engineering, civil design, and chemical process engineering.',
    focusAreas: ['VLSI & Embedded Systems', 'Power & Control Systems', 'Design & Manufacturing', 'Chemical & Materials Engineering'],
  },
  {
    title: 'Quantitative Aptitude & Logical Reasoning',
    tagline: 'Analytical & Problem-Solving Ability',
    description:
      'Regular practice sessions covering numerical computation, quantitative aptitude, analytical reasoning, and data interpretation.',
    focusAreas: ['Quantitative Mathematics', 'Logical Deduction', 'Data Interpretation', 'Timed Mock Tests'],
  },
  {
    title: 'Communication Skills & Interview Readiness',
    tagline: 'Professional Etiquette & Interaction',
    description:
      'Interactive modules on professional communication, resume building, group discussions, technical presentations, and mock personal interviews.',
    focusAreas: ['Resume Preparation', 'Group Discussion Practice', 'Personal Interview Skills', 'Professional Communication'],
  },
];

export const PLACEMENT_PROCESS_STEPS: PlacementProcessStep[] = [
  {
    stepNumber: 1,
    title: 'Student Registration & Verification',
    tagline: 'Placement Portal Onboarding',
    description:
      'Eligible pre-final and final year engineering students register through the placement cell with verified academic credentials and resumes.',
  },
  {
    stepNumber: 2,
    title: 'Pre-Placement Talks & Job Notifications',
    tagline: 'Corporate Outreach & Briefing',
    description:
      'Participating organizations share job descriptions, eligibility criteria, and deliver pre-placement presentations to give students clarity on job profiles.',
  },
  {
    stepNumber: 3,
    title: 'Aptitude & Technical Assessments',
    tagline: 'First-Stage Screening',
    description:
      'Candidates undergo online or written tests evaluating quantitative aptitude, logical reasoning, programming skills, and core engineering fundamentals.',
  },
  {
    stepNumber: 4,
    title: 'Technical & HR Interviews',
    tagline: 'Comprehensive Evaluation',
    description:
      'Shortlisted candidates appear for multi-round interviews assessing domain expertise, problem-solving approach, communication skills, and organizational fit.',
  },
  {
    stepNumber: 5,
    title: 'Results & Offer Rollout',
    tagline: 'Final Selection & Internship Onboarding',
    description:
      'Selected students receive official offer letters and onboarding guidelines for final year internships and full-time employment.',
  },
];

export const RECRUITER_CATEGORIES: RecruiterCategory[] = [
  {
    category: 'Information Technology & Software Services',
    description: 'Premier enterprise software, IT consulting, and digital solutions organizations.',
    companies: [
      { name: 'Tata Consultancy Services (TCS)', domain: 'IT & Digital Services' },
      { name: 'Infosys', domain: 'Enterprise Software & IT Consulting' },
      { name: 'Wipro Technologies', domain: 'IT Services & System Integration' },
      { name: 'Tech Mahindra', domain: 'Telecommunications & Digital Services' },
      { name: 'Mindtree', domain: 'Digital Transformation & Software Engineering' },
      { name: 'ThoughtWorks', domain: 'Custom Software & Technology Consulting' },
    ],
  },
  {
    category: 'Core Engineering & Electronics',
    description: 'Specialized firms in electronics, instrumentation, embedded systems, and core manufacturing.',
    companies: [
      { name: 'Efftronics Systems Pvt. Ltd', domain: 'Smart IoT, Embedded Systems & Railway Signalling' },
      { name: 'Amaravati Quantum & Tech Partners', domain: 'Advanced Computing & Engineering Solutions' },
    ],
  },
];

export const PLACEMENT_CONTACTS = [
  {
    name: 'Mr. P. Shyam',
    role: 'Dean of Entrepreneurship, Incubation, Training and Placements (EITP), RGUKT',
    email: 'dean.eitp@rgukt.in',
    note: 'Office: I3 Block, RGUKT Nuzvid',
  },
  {
    name: 'Central Placement Office',
    role: 'Training & Placements Coordination Desk, RGUKT-AP',
    email: 'placements@rgukt.in',
  },
];
