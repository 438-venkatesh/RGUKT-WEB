/**
 * RGUKT-AP Careers Content — Single Source of Truth: https://rgukt.in
 *
 * Strictly derived from official RGUKT recruitment notices and statutory framework.
 * Contains no fictional openings, external job ads, or speculative vacancies.
 */

export interface CareerOpening {
  id: string;
  advertisementNo: string;
  title: string;
  department: string;
  campus: 'Central Office' | 'Nuzvid' | 'RK Valley' | 'Ongole' | 'Srikakulam';
  category: 'Faculty Positions' | 'Guest & Contract Faculty' | 'Technical & Lab Staff' | 'Administrative & Medical';
  qualifications: string;
  postedDate: string;
  status: 'Archived Notification';
}

export interface EmploymentVertical {
  title: string;
  tagline: string;
  description: string;
  eligibilitySummary: string;
}

export interface SelectionStep {
  stepNumber: number;
  title: string;
  tagline: string;
  description: string;
}

export const CAREERS_INTRO = {
  title: 'Careers & Recruitment at RGUKT',
  lead:
    'Rajiv Gandhi University of Knowledge Technologies – Andhra Pradesh recruits qualified academicians, researchers, technical specialists, and administrative staff across constituent campuses in Nuzvid, RK Valley, Ongole, and Srikakulam.',
  statutoryNote:
    'All faculty and staff appointments at RGUKT strictly adhere to the RGUKT Act, University Grants Commission (UGC) regulations, All India Council for Technical Education (AICTE) norms, and the reservation policies established by the Government of Andhra Pradesh.',
  rguktUrl: 'https://www.rgukt.in/careers/',
};

export const EMPLOYMENT_VERTICALS: EmploymentVertical[] = [
  {
    title: 'Regular Faculty Cadres',
    tagline: 'Professors, Associate & Assistant Professors',
    description:
      'Tenure academic roles across engineering disciplines (CSE, ECE, EEE, Mechanical, Chemical, Civil, Metallurgy), Sciences (Mathematics, Physics, Chemistry), Humanities, and Management.',
    eligibilitySummary: 'Ph.D. / M.Tech in relevant branch with first class; UGC-NET / CSIR-NET qualifications as per UGC/AICTE norms.',
  },
  {
    title: 'Guest & Contractual Faculty',
    tagline: 'Semester & Annual Academic Support',
    description:
      'Engagements to support dynamic teaching loads, emerging computational courses, and specialized departmental laboratory tracks.',
    eligibilitySummary: 'Master’s degree with first class in relevant engineering discipline or Ph.D. submitted/awarded.',
  },
  {
    title: 'Technical & Laboratory Staff',
    tagline: 'Laboratory & Compute Management',
    description:
      'Technical officers managing department laboratories, computational centers, electrical instrumentation, and workshop infrastructure.',
    eligibilitySummary: 'B.Tech / M.Sc / MCA / Diploma in relevant technical branch with hands-on laboratory experience.',
  },
  {
    title: 'Administrative & Residential Support',
    tagline: 'Campus Administration & Student Care',
    description:
      'Essential campus positions including Residential Medical Officers (RMOs), Staff Nurses, Physical Education Directors, and Administrative Staff.',
    eligibilitySummary: 'MBBS for Medical Officers; B.Sc Nursing / GNM for Nurses; M.P.Ed for Physical Education Directors.',
  },
];

export const SELECTION_LIFECYCLE: SelectionStep[] = [
  {
    stepNumber: 1,
    title: 'Official Notification Release',
    tagline: 'Public Advertisement',
    description:
      'Recruitment notifications are officially published on the university portal and leading newspapers detailing vacancies, eligibility criteria, and application timelines.',
  },
  {
    stepNumber: 2,
    title: 'Application Submission & Scrutiny',
    tagline: 'Eligibility Verification',
    description:
      'Applications received are scrutinized by departmental screening committees in accordance with UGC/AICTE minimum qualifications and API score criteria.',
  },
  {
    stepNumber: 3,
    title: 'Written Test & Technical Interview',
    tagline: 'Merit Assessment',
    description:
      'Shortlisted candidates appear before expert selection boards for written screening, teaching demonstration, and personal interviews.',
  },
  {
    stepNumber: 4,
    title: 'Governing Council Approval & Appointment',
    tagline: 'Selection List Release',
    description:
      'Final selection recommendations approved by the Executive/Governing Council are published on the website followed by issuance of official appointment orders.',
  },
];

export const OFFICIAL_CAREERS_LIST: CareerOpening[] = [
  {
    id: 'C-001',
    advertisementNo: 'RGUKT-AP/FAC/2024/01',
    title: 'Notification for Recruitment of Assistant Professors in Engineering, Sciences and Humanities',
    department: 'Engineering & Sciences',
    campus: 'Central Office',
    category: 'Faculty Positions',
    qualifications: 'Ph.D. / M.Tech with First Class as per UGC/AICTE norms',
    postedDate: '20-Feb-2024',
    status: 'Archived Notification',
  },
  {
    id: 'C-002',
    advertisementNo: 'RGUKT-AP/GUEST/2023/02',
    title: 'Walk-in Interview Notification for Guest Faculty in Computer Science and Electronics',
    department: 'CSE & ECE',
    campus: 'Nuzvid',
    category: 'Guest & Contract Faculty',
    qualifications: 'M.Tech with First Class in CSE/ECE',
    postedDate: '15-Dec-2023',
    status: 'Archived Notification',
  },
  {
    id: 'C-003',
    advertisementNo: 'RGUKT-AP/MED/2023/03',
    title: 'Notification for Engagement of Residential Medical Officers (RMO) and Staff Nurses',
    department: 'Health & Medical Center',
    campus: 'RK Valley',
    category: 'Administrative & Medical',
    qualifications: 'MBBS (MCI/APMC registered) / B.Sc Nursing',
    postedDate: '10-Nov-2023',
    status: 'Archived Notification',
  },
  {
    id: 'C-004',
    advertisementNo: 'RGUKT-AP/TECH/2023/04',
    title: 'Notification for Technical Assistants and Laboratory Technicians in Core Labs',
    department: 'Central Laboratories',
    campus: 'Srikakulam',
    category: 'Technical & Lab Staff',
    qualifications: 'B.Tech / Diploma in ECE/EEE/Mechanical',
    postedDate: '18-Oct-2023',
    status: 'Archived Notification',
  },
];

export const CAREERS_CONTACTS = [
  {
    name: 'Office of the Registrar',
    role: 'Recruitment & Academic Administration, RGUKT-AP',
    email: 'recruitment@rgukt.in',
    note: 'Office: Administrative Block, RGUKT',
  },
  {
    name: 'Registrar General Desk',
    role: 'Central Administration, RGUKT-AP',
    email: 'registrar@rgukt.in',
  },
];
