/**
 * RGUKT-AP Careers & Recruitment Content (2025–2026)
 * Governed by the Directorate of Academic Affairs, UGC/AICTE Regulations,
 * and the RGUKT Act across Central Administration, Nuzvid, RK Valley, Ongole, and Srikakulam campuses.
 */

export interface CareerOpening {
  id: string;
  advertisementNo: string;
  title: string;
  department: string;
  campus: 'Central Admin' | 'Nuzvid' | 'RK Valley' | 'Ongole' | 'Srikakulam';
  category: 'Faculty (Regular)' | 'Guest & Contract Faculty' | 'Technical & Lab Staff' | 'Medical & Admin';
  qualifications: string;
  postedDate: string;
  lastDate: string;
  status: 'Open' | 'In Progress' | 'Archived';
  detailedPdfUrl?: string;
  applicationFormUrl?: string;
  submissionMode: 'Online & Postal' | 'Walk-in Interview' | 'Email & Postal' | 'Postal Application';
}

export interface EmploymentVertical {
  title: string;
  tagline: string;
  description: string;
  eligibilitySummary: string;
  payScaleOrCompensation: string;
}

export interface SelectionStep {
  stepNumber: number;
  title: string;
  tagline: string;
  description: string;
}

export interface CampusCareersContact {
  campus: string;
  office: string;
  email: string;
  alternateEmail?: string;
  postalAddress: string;
  deskType: string;
}

export const CAREERS_INTRO = {
  title: 'Faculty & Staff Careers at RGUKT-AP',
  lead:
    'Rajiv Gandhi University of Knowledge Technologies – Andhra Pradesh invites passionate academicians, researchers, technical specialists, and administrative professionals to shape the next generation of rural engineering leaders. Across our residential campuses in Nuzvid, RK Valley (Idupulapaya), Ongole, and Srikakulam, RGUKT provides an invigorating academic atmosphere, cutting-edge research facilities, and competitive remuneration compliant with UGC, AICTE, and AP State Government norms.',
  academicPerksNote:
    'Regular faculty members enjoy UGC 7th CPC pay matrices, research seed funding, modern on-campus residential quarters, sponsored participation in national/international conferences, and collaborative research linkages with premier institutions including IIT Hyderabad, IIT Tirupati, and ISRO.',
};

export const EMPLOYMENT_VERTICALS: EmploymentVertical[] = [
  {
    title: 'Regular Faculty Positions',
    tagline: 'Professors, Associate & Assistant Professors',
    description:
      'Tenure-track academic roles across Computer Science, Electronics, Electrical, Mechanical, Civil, Chemical, Metallurgical & Materials Engineering, Sciences, Humanities, and Management.',
    eligibilitySummary: 'Ph.D. / M.Tech in relevant branch with first class; UGC-NET / CSIR-NET / SLET and API scores as per UGC 2018 regulations.',
    payScaleOrCompensation: '7th CPC Academic Pay Matrix (Level 10 for Assistant Professor to Level 14 for Professor) plus DA, HRA, and medical benefits.',
  },
  {
    title: 'Guest & Contractual Faculty',
    tagline: 'Emerging Technologies & Specialized Courses',
    description:
      'Semester-wise and annual engagements to support dynamic teaching loads, advanced computational tracks, quantum computing, and specialized honors electives.',
    eligibilitySummary: 'Master’s degree with first class in relevant engineering discipline or Ph.D. submitted/awarded with teaching excellence.',
    payScaleOrCompensation: 'Consolidated monthly honorarium adhering to Andhra Pradesh Higher Education & RGUKT governing council guidelines.',
  },
  {
    title: 'Technical & Laboratory Specialists',
    tagline: 'High-Performance Computing & Instrumentation',
    description:
      'Engineers and technical officers managing state-of-the-art laboratory infrastructure, AI compute clusters, mechanical fabrication shops, and VLSI design centers.',
    eligibilitySummary: 'B.Tech / M.Sc / MCA / Diploma with demonstrable hands-on expertise in lab instrumentation, system administration, or network security.',
    payScaleOrCompensation: 'Competitive institutional grade pay / consolidated technical specialist scales as per project requirements.',
  },
  {
    title: 'Medical, Administrative & Student Welfare',
    tagline: 'Residential Campus Operations & Care',
    description:
      'Essential campus roles including Residential Medical Officers (RMOs), Staff Nurses, Psychological Counselors, Physical Education Directors, and Administrative Staff.',
    eligibilitySummary: 'MBBS for Medical Officers (MCI/APMC registered); B.Sc Nursing / GNM for Nurses; Master of Physical Education (M.P.Ed) for Sports Directors.',
    payScaleOrCompensation: 'State Government / RGUKT approved residential cadre pay with on-campus accommodation and duty allowances.',
  },
];

export const SELECTION_LIFECYCLE: SelectionStep[] = [
  {
    stepNumber: 1,
    title: 'Notification & Proforma Release',
    tagline: 'Official Advertisement',
    description:
      'Recruitment notifications are published in leading national dailies and on the official university portal with detailed eligibility criteria, specialization requirements, and downloadable application forms.',
  },
  {
    stepNumber: 2,
    title: 'Application Submission & Scrutiny',
    tagline: 'Document Verification & API Scoring',
    description:
      'Candidates submit online/hardcopy applications alongside self-attested academic credentials, research publications, experience certificates, and processing fee before the designated deadline.',
  },
  {
    stepNumber: 3,
    title: 'Academic Scrutiny & Screening',
    tagline: 'Shortlisting by Expert Panels',
    description:
      'Departmental Scrutiny Committees evaluate candidate profiles based on UGC Academic Performance Indicator (API) scores, research citations, and statutory reservation roster points.',
  },
  {
    stepNumber: 4,
    title: 'Pedagogical Demo & Interview',
    tagline: 'Classroom Simulation & Panel Evaluation',
    description:
      'Shortlisted faculty candidates present a classroom teaching demonstration followed by an in-depth technical interview before the Statutory Selection Committee.',
  },
  {
    stepNumber: 5,
    title: 'Executive Approval & Appointment',
    tagline: 'Governing Council Ratification',
    description:
      'Selection recommendations are ratified by the Executive Council / Governing Council of RGUKT-AP, followed by formal offer issuance and on-campus onboarding.',
  },
];

export const OFFICIAL_CAREERS_LIST: CareerOpening[] = [
  {
    id: 'JOB-2026-001',
    advertisementNo: 'RGUKT-NUZ/Recruitment/2026/01',
    title: 'Project Lab Specialist – Advanced Quantum & Computational Engineering Laboratories',
    department: 'Computer Science & Quantum Computing Lab',
    campus: 'Nuzvid',
    category: 'Technical & Lab Staff',
    qualifications: 'B.Tech / M.Tech in CSE / ECE / Data Science or M.Sc in Electronics with hands-on lab administration experience.',
    postedDate: '07-Aug-2026',
    lastDate: '22-Aug-2026',
    status: 'Open',
    detailedPdfUrl: 'https://rguktn.ac.in/careers/docs/Lab_Specialist_Advertisement_07082026.pdf',
    applicationFormUrl: 'https://rguktn.ac.in/careers/docs/Application_for_La_Specialist_07082026.pdf',
    submissionMode: 'Online & Postal',
  },
  {
    id: 'JOB-2026-002',
    advertisementNo: 'RGUKT-AP/Faculty-Advt/01/2026',
    title: 'Assistant Professor (Regular) in Artificial Intelligence, Machine Learning & Cyber Security',
    department: 'Computer Science & Engineering',
    campus: 'Central Admin',
    category: 'Faculty (Regular)',
    qualifications: 'Ph.D. in CSE / AI or First Class B.Tech and M.Tech in CSE with UGC/AICTE NET qualification.',
    postedDate: '01-Aug-2026',
    lastDate: '25-Aug-2026',
    status: 'Open',
    detailedPdfUrl: 'https://www.rgukt.in/',
    submissionMode: 'Online & Postal',
  },
  {
    id: 'JOB-2026-003',
    advertisementNo: 'RGUKT-RKV/Guest-Faculty/2026/02',
    title: 'Walk-in Interview for Guest Faculty in VLSI Design, Embedded Systems & Communication Networks',
    department: 'Electronics & Communication Engineering',
    campus: 'RK Valley',
    category: 'Guest & Contract Faculty',
    qualifications: 'First Class M.Tech in VLSI / Embedded Systems / Communication; Ph.D. holders preferred.',
    postedDate: '28-Jul-2026',
    lastDate: '16-Aug-2026',
    status: 'In Progress',
    detailedPdfUrl: 'https://www.rguktrkv.ac.in/',
    submissionMode: 'Walk-in Interview',
  },
  {
    id: 'JOB-2026-004',
    advertisementNo: 'RGUKT-SKLM/Medical/2026/01',
    title: 'Residential Medical Officer (RMO) & Lady Medical Officer for Campus Health Center',
    department: 'Campus Health Center & Student Welfare',
    campus: 'Srikakulam',
    category: 'Medical & Admin',
    qualifications: 'MBBS Degree recognized by the National Medical Commission (NMC) / APMC with minimum 1-year clinical internship.',
    postedDate: '20-Jul-2026',
    lastDate: '08-Aug-2026',
    status: 'In Progress',
    detailedPdfUrl: 'https://www.rguktsklm.ac.in/',
    submissionMode: 'Email & Postal',
  },
  {
    id: 'JOB-2026-005',
    advertisementNo: 'RGUKT-ONG/Staff/2026/01',
    title: 'Recruitment of Senior Network Engineers & Systems Administrators on Contract Basis',
    department: 'Campus IT & Network Infrastructure',
    campus: 'Ongole',
    category: 'Technical & Lab Staff',
    qualifications: 'B.Tech (CSE/IT) / MCA with CCNA / CCNP / Red Hat certification and 2+ years of campus network experience.',
    postedDate: '15-Jul-2026',
    lastDate: '30-Jul-2026',
    status: 'Archived',
    detailedPdfUrl: 'https://www.rguktong.ac.in/',
    submissionMode: 'Postal Application',
  },
  {
    id: 'JOB-2026-006',
    advertisementNo: 'RGUKT-AP/Faculty-Advt/02/2025',
    title: 'Associate Professor & Assistant Professor in Chemical Engineering & Sustainable Energy',
    department: 'Chemical Engineering',
    campus: 'Central Admin',
    category: 'Faculty (Regular)',
    qualifications: 'Ph.D. in Chemical Engineering with high-impact SCI journal publications and demonstrable research record.',
    postedDate: '10-Jun-2025',
    lastDate: '30-Jun-2025',
    status: 'Archived',
    detailedPdfUrl: 'https://www.rgukt.in/',
    submissionMode: 'Online & Postal',
  },
];

export const CAMPUS_CAREERS_CONTACTS: CampusCareersContact[] = [
  {
    campus: 'Central Administration Recruitment Cell',
    office: 'Office of the Registrar, RGUKT-AP Central Office, Andhra Pradesh',
    email: 'recruitment@rgukt.in',
    alternateEmail: 'registrar@rgukt.in',
    postalAddress: 'The Registrar, RGUKT-AP Central Office, RK Valley Campus, Idupulapaya, Kadapa District, Andhra Pradesh - 516330',
    deskType: 'University Apex Recruitment Cell',
  },
  {
    campus: 'RGUKT Nuzvid Campus',
    office: 'Administrative Block, Recruitment & Establishment Section, RGUKT Nuzvid',
    email: 'careers@rguktn.ac.in',
    alternateEmail: 'ao@rguktn.ac.in',
    postalAddress: 'The Administrative Officer, RGUKT Nuzvid Campus, Mylavaram Road, Nuzvid, Eluru District, Andhra Pradesh - 521202',
    deskType: 'Campus Establishment Desk',
  },
  {
    campus: 'RGUKT RK Valley Campus',
    office: 'Academic Block - 1, Establishment Branch, RGUKT RK Valley',
    email: 'careers@rguktrkv.ac.in',
    alternateEmail: 'ao@rguktrkv.ac.in',
    postalAddress: 'The Administrative Officer, RGUKT RK Valley Campus, Idupulapaya, Vempalli Mandal, Kadapa District, Andhra Pradesh - 516330',
    deskType: 'Campus Establishment Desk',
  },
  {
    campus: 'RGUKT Ongole Campus',
    office: 'Establishment & Recruitment Branch, Administrative Office, RGUKT Ongole',
    email: 'careers@rguktong.ac.in',
    alternateEmail: 'ao@rguktong.ac.in',
    postalAddress: 'The Administrative Officer, RGUKT Ongole Campus, Santhanuthalapadu, Prakasam District, Andhra Pradesh - 523225',
    deskType: 'Campus Establishment Desk',
  },
  {
    campus: 'RGUKT Srikakulam Campus',
    office: 'Establishment Section, Permanent Campus, S.M. Puram, Etcherla',
    email: 'careers@rguktsklm.ac.in',
    alternateEmail: 'ao@rguktsklm.ac.in',
    postalAddress: 'The Administrative Officer, RGUKT Srikakulam Campus, S.M. Puram, Etcherla Mandal, Srikakulam District, Andhra Pradesh - 532410',
    deskType: 'Campus Establishment Desk',
  },
];
