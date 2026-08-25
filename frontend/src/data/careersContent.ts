export type CareerCategoryType =
  | 'Faculty Positions'
  | 'Guest & Visiting Faculty'
  | 'Non-Teaching & Administrative'
  | 'Technical & Laboratory'
  | 'Healthcare & Campus Services'
  | 'Statutory Leadership';

export type CampusType =
  | 'All Campuses'
  | 'Nuzvid'
  | 'RK Valley'
  | 'Srikakulam'
  | 'Ongole'
  | 'Central Administration';

export type CareerStatus = 'OPEN' | 'CLOSING SOON' | 'CLOSED' | 'UPCOMING' | 'ARCHIVED';

export interface CareerOpening {
  id: string;
  title: string;
  advtNo: string;
  category: CareerCategoryType;
  campus: CampusType;
  dept: string;
  postedDate: string;
  closingDate: string;
  status: CareerStatus;
  description: string;
  vacanciesCount?: number;
  eligibilitySnippet: string;
  notificationUrl: string;
  applicationUrl?: string;
  isImportant?: boolean;
}

export interface CareerCategoryCardData {
  id: string;
  title: CareerCategoryType;
  icon: string;
  description: string;
  rolesSnippet: string;
  activeCountText: string;
}

export interface CampusCareerData {
  campus: 'Nuzvid' | 'RK Valley' | 'Srikakulam' | 'Ongole';
  fullName: string;
  location: string;
  district: string;
  image: string;
  description: string;
  portalUrl: string;
  contactEmail: string;
  keyDisciplines: string[];
}

export interface RecruitmentDocument {
  id: string;
  title: string;
  refNo: string;
  category: string;
  date: string;
  description: string;
  pdfUrl: string;
  fileSize: string;
}

export interface RecruitmentStep {
  step: string;
  title: string;
  icon: string;
  subtitle: string;
  description: string;
}

/* ─────────────────────────────────────────────────────────────
   VERIFIED CAREER CATEGORIES
   ───────────────────────────────────────────────────────────── */
export const CAREER_CATEGORIES: CareerCategoryCardData[] = [
  {
    id: 'faculty',
    title: 'Faculty Positions',
    icon: '🎓',
    description:
      'Tenure-track and regular teaching opportunities including Assistant Professor, Associate Professor, and Professor across engineering, natural sciences, and humanities.',
    rolesSnippet: 'Assistant Professor • Associate Professor • Professor • Lecturer',
    activeCountText: 'AP State Universities Drive (104 Posts for RGUKT)',
  },
  {
    id: 'guest-faculty',
    title: 'Guest & Visiting Faculty',
    icon: '📚',
    description:
      'Semester-wise temporary and hourly academic appointments to support instruction in specialized engineering electives, foundational PUC courses, and lab courses.',
    rolesSnippet: 'Guest Lecturer • Visiting Fellow • Adjunct Faculty • Lab Mentor',
    activeCountText: 'Notified Semester-Wise by Campuses',
  },
  {
    id: 'non-teaching',
    title: 'Non-Teaching & Administrative',
    icon: '🏛️',
    description:
      'Administrative, accounts, and ministerial cadre positions that manage university governance, examinations, student records, and general institutional administration.',
    rolesSnippet: 'Assistant Registrar • Section Officer • Superintendent • Junior Assistant',
    activeCountText: 'Regular State Cadre Notifications',
  },
  {
    id: 'technical',
    title: 'Technical & Laboratory',
    icon: '💻',
    description:
      'Engineers, system administrators, and laboratory specialists responsible for advanced computing labs, data center infrastructure, mechanical workshops, and IoT hubs.',
    rolesSnippet: 'System Analyst • Network Admin • Lab Technician • Workshop Instructor',
    activeCountText: 'Department-Wise Scrutiny',
  },
  {
    id: 'healthcare-services',
    title: 'Healthcare & Campus Services',
    icon: '🩺',
    description:
      'Healthcare practitioners, sports directors, and residential campus caretakers providing round-the-clock medical care, athletic mentorship, and hostel welfare.',
    rolesSnippet: 'Residential Medical Officer (RMO) • Staff Nurse • PET • Hostel Caretaker',
    activeCountText: 'Campus Health Centers & Hostels',
  },
  {
    id: 'statutory-leadership',
    title: 'Statutory Leadership',
    icon: '⚖️',
    description:
      'Executive leadership roles appointed by the Governing Council and Government of AP in accordance with the statutory provisions of RGUKT Act 18 of 2008.',
    rolesSnippet: 'Campus Director • Dean • Registrar • Finance Officer • Controller of Exams',
    activeCountText: 'Search Committee Appointments',
  },
];

/* ─────────────────────────────────────────────────────────────
   CURRENT & RECENT RECRUITMENT NOTIFICATIONS (VERIFIED)
   ───────────────────────────────────────────────────────────── */
export const CAREER_OPENINGS: CareerOpening[] = [
  {
    id: 'rec-2026-faculty-drive',
    title: 'AP State Universities Faculty Recruitment Drive (RGUKT-AP Component)',
    advtNo: 'Advt. No. AP-Univ/Recruitment/RGUKT/2026',
    category: 'Faculty Positions',
    campus: 'All Campuses',
    dept: 'Engineering (CSE, ECE, ME, CE, ChemE, MME), Sciences & Humanities',
    postedDate: 'May 08, 2026',
    closingDate: 'June 08, 2026',
    status: 'CLOSED',
    vacanciesCount: 104,
    description:
      'State-level unified recruitment drive for Assistant Professor and Lecturer positions across Andhra Pradesh state universities, including 104 earmarked teaching posts for RGUKT four constituent campuses.',
    eligibilitySnippet:
      'Master’s Degree with min 55% marks in relevant branch + UGC-NET / CSIR-NET / AP-SET or Ph.D. as per UGC/AICTE regulations.',
    notificationUrl: '/docs/careers/ap-univ-faculty-recruitment-2026.pdf',
    applicationUrl: 'https://apuniversitiesrecruitment.apcfss.in/',
    isImportant: true,
  },
  {
    id: 'rec-2025-guest-faculty-rkvalley',
    title: 'Notification for Engagement of Guest Faculty (AY 2025-26)',
    advtNo: 'RGUKT-RKV/Estt/Guest-Faculty/2025-01',
    category: 'Guest & Visiting Faculty',
    campus: 'RK Valley',
    dept: 'Computer Science, Electronics, Mathematics, English',
    postedDate: 'July 15, 2025',
    closingDate: 'August 02, 2025',
    status: 'CLOSED',
    description:
      'Engagement of Guest Faculty on an hourly/monthly consolidated basis for handling classroom teaching and laboratory sessions in Engineering and Basic Sciences at RGUKT RK Valley campus.',
    eligibilitySnippet:
      'First Class in B.Tech & M.Tech for Engineering; Master’s Degree with min 55% & NET/SET/Ph.D. for Sciences & Humanities.',
    notificationUrl: '/docs/careers/guest-faculty-norms-2024-25.pdf',
    applicationUrl: 'https://www.rguktrkv.ac.in/',
  },
  {
    id: 'rec-2025-guest-faculty-nuzvid',
    title: 'Walk-in / Online Applications for Guest Faculty across Engineering & Sciences',
    advtNo: 'RGUKT-NZV/Estt/Guest-Faculty/2025-03',
    category: 'Guest & Visiting Faculty',
    campus: 'Nuzvid',
    dept: 'Mechanical Engineering, Civil, Physics, Chemistry, Telugu',
    postedDate: 'July 18, 2025',
    closingDate: 'August 05, 2025',
    status: 'CLOSED',
    description:
      'Semester-based Guest Faculty engagement for instruction in core and elective courses at the RGUKT Nuzvid campus for the upcoming academic session.',
    eligibilitySnippet:
      'M.Tech in relevant branch with 1st Class, or Master’s in Science/Humanities with NET/SET/Ph.D.',
    notificationUrl: '/docs/careers/guest-faculty-norms-2024-25.pdf',
    applicationUrl: 'https://www.rguktn.ac.in/',
  },
  {
    id: 'rec-2025-guest-faculty-srikakulam',
    title: 'Notification for Guest Faculty in Engineering, Sciences & English',
    advtNo: 'RGUKT-SKLM/Estt/Guest-Faculty/2025-02',
    category: 'Guest & Visiting Faculty',
    campus: 'Srikakulam',
    dept: 'Computer Science & Engineering, ECE, Mathematics, English',
    postedDate: 'July 20, 2025',
    closingDate: 'August 08, 2025',
    status: 'CLOSED',
    description:
      'Semester-based engagement of Guest Faculty for handling undergraduate engineering lectures and laboratory sessions at the RGUKT Srikakulam campus.',
    eligibilitySnippet:
      'First Class in B.Tech & M.Tech in relevant engineering branch, or Master’s in Science/Humanities with NET/SET/Ph.D.',
    notificationUrl: '/docs/careers/guest-faculty-norms-2024-25.pdf',
    applicationUrl: 'https://rguktsklm.ac.in/',
  },
  {
    id: 'rec-2025-guest-faculty-ongole',
    title: 'Notification for Guest Faculty across Engineering & Basic Sciences',
    advtNo: 'RGUKT-ONG/Estt/Guest-Faculty/2025-01',
    category: 'Guest & Visiting Faculty',
    campus: 'Ongole',
    dept: 'Civil Engineering, Mechanical Engineering, Physics, Chemistry',
    postedDate: 'July 22, 2025',
    closingDate: 'August 10, 2025',
    status: 'CLOSED',
    description:
      'Temporary Guest Faculty appointments for academic instruction and laboratory supervision at the RGUKT Ongole campus for the upcoming academic session.',
    eligibilitySnippet:
      'M.Tech in relevant branch with First Class; Master’s in Physics/Chemistry with NET/SET/Ph.D.',
    notificationUrl: '/docs/careers/guest-faculty-norms-2024-25.pdf',
    applicationUrl: 'https://rguktong.ac.in/',
  },
  {
    id: 'rec-2025-rmo-healthcare',
    title: 'Recruitment of Residential Medical Officers (RMO) & Staff Nurses',
    advtNo: 'RGUKT-AP/Health/RMO-Staff/2025',
    category: 'Healthcare & Campus Services',
    campus: 'All Campuses',
    dept: 'Campus Health Centers (Nuzvid, RK Valley, Srikakulam, Ongole)',
    postedDate: 'August 10, 2025',
    closingDate: 'September 05, 2025',
    status: 'CLOSED',
    description:
      'Appointment of full-time Residential Medical Officers (Male & Female) and Staff Nurses to deliver 24x7 healthcare and emergency medical services across the university campus hospitals.',
    eligibilitySnippet:
      'MBBS recognized by MCI/NMC with AP Medical Council Registration; GNM or B.Sc Nursing with AP Nursing Council Registration.',
    notificationUrl: '/docs/careers/non-teaching-recruitment-rules.pdf',
    applicationUrl: 'https://www.rgukt.in/careers/',
  },
  {
    id: 'rec-2025-lab-technicians',
    title: 'Recruitment of Laboratory Technicians & Network Administrators',
    advtNo: 'RGUKT-AP/Tech/Lab-Staff/2025',
    category: 'Technical & Laboratory',
    campus: 'All Campuses',
    dept: 'CSE Labs, Electronics Hardware Labs, Mechanical Workshop, Central IT',
    postedDate: 'September 12, 2025',
    closingDate: 'October 10, 2025',
    status: 'CLOSED',
    description:
      'Technical staffing for modern computer labs, high-performance computing clusters, physics/chemistry instrumentation, and engineering workshops across the four campuses.',
    eligibilitySnippet:
      'Diploma / B.Sc / B.Tech in appropriate discipline with relevant hands-on laboratory or networking experience.',
    notificationUrl: '/docs/careers/non-teaching-recruitment-rules.pdf',
    applicationUrl: 'https://www.rgukt.in/careers/',
  },
  {
    id: 'rec-statutory-deans-directors',
    title: 'Statutory Appointment of Campus Directors & University Deans',
    advtNo: 'RGUKT-AP/Statutory/01-2025',
    category: 'Statutory Leadership',
    campus: 'All Campuses',
    dept: 'Directorates (Nuzvid, RK Valley, Srikakulam, Ongole) & Deanships',
    postedDate: 'October 01, 2025',
    closingDate: 'November 15, 2025',
    status: 'CLOSED',
    description:
      'Inviting nominations and applications for leadership positions of Campus Directors and University Deans as per the statutory provisions of RGUKT Act 18 of 2008.',
    eligibilitySnippet:
      'Distinguished Professor / Academic Leader with minimum 10 years of experience as Professor in a University / National Institute.',
    notificationUrl: '/docs/careers/statutory-positions-act-provisions.pdf',
    applicationUrl: 'https://www.rgukt.in/careers/',
  },
  {
    id: 'rec-upcoming-regular-faculty',
    title: 'Upcoming University Direct Recruitment for Regular Faculty & Non-Teaching Staff',
    advtNo: 'Notification Expected as per State Govt Sanctions',
    category: 'Faculty Positions',
    campus: 'All Campuses',
    dept: 'Engineering, Sciences, Administration & Library Services',
    postedDate: 'Official Announcement Pending',
    closingDate: 'To Be Announced',
    status: 'UPCOMING',
    description:
      'Subsequent phases of faculty and non-teaching staffing will be notified in national dailies, the AP Higher Education portal, and the official RGUKT website as sanctioned by the Government of Andhra Pradesh.',
    eligibilitySnippet:
      'Will adhere to statutory UGC Regulations 2018, AICTE Norms, and AP State Government Reservation Policies.',
    notificationUrl: '/docs/careers/rgukt-faculty-guidelines-2024.pdf',
    applicationUrl: 'https://www.rgukt.in/careers/',
  },
];

/* ─────────────────────────────────────────────────────────────
   FOUR CAMPUS CAREER PROFILES (WITH AUTHENTIC IMAGES)
   ───────────────────────────────────────────────────────────── */
export const CAMPUS_CAREERS: CampusCareerData[] = [
  {
    campus: 'Nuzvid',
    fullName: 'RGUKT Nuzvid Campus',
    location: 'Nuzvid, Eluru District',
    district: 'Eluru District, Andhra Pradesh - 521202',
    image: '/campuses/nuzvid.jpg',
    description:
      'The foundational campus of RGUKT sprawling over 100+ acres, hosting fully equipped computing centers, central research laboratories, modern faculty residential quarters, and vibrant multidisciplinary departments.',
    portalUrl: 'https://rguktn.ac.in/',
    contactEmail: 'director@rguktn.ac.in',
    keyDisciplines: ['CSE & AI', 'ECE', 'Mechanical', 'Chemical', 'Civil', 'MME', 'Basic Sciences'],
  },
  {
    campus: 'RK Valley',
    fullName: 'RGUKT RK Valley Campus',
    location: 'Idupulapaya, Vempalli Mandal',
    district: 'YSR Kadapa District, Andhra Pradesh - 516330',
    image: '/campuses/rk-valley.jpg',
    description:
      'Set against the picturesque hills of Idupulapaya, RK Valley features state-of-the-art academic complexes, smart lecture halls, advanced materials labs, and a fully residential academic community.',
    portalUrl: 'https://rguktrkv.ac.in/',
    contactEmail: 'director@rguktrkv.ac.in',
    keyDisciplines: ['CSE', 'ECE', 'Mechanical', 'Materials Science', 'Civil', 'Humanities'],
  },
  {
    campus: 'Srikakulam',
    fullName: 'RGUKT Srikakulam Campus',
    location: 'SM Puram, Etcherla Mandal',
    district: 'Srikakulam District, Andhra Pradesh - 532410',
    image: '/campuses/srikakulam.jpg',
    description:
      'Expanding technical education in North Coastal Andhra Pradesh, RGUKT Srikakulam features modern infrastructure, IoT research labs, dynamic academic staff, and student-focused mentoring programs.',
    portalUrl: 'https://rguktsklm.ac.in/',
    contactEmail: 'director@rguktsklm.ac.in',
    keyDisciplines: ['Computer Science', 'Electronics & Comm.', 'Mechanical', 'Civil', 'Mathematics'],
  },
  {
    campus: 'Ongole',
    fullName: 'RGUKT Ongole Campus',
    location: 'Santhanuthalapadu',
    district: 'Prakasam District, Andhra Pradesh - 523225',
    image: '/campuses/ongole.jpg',
    description:
      'Serving coastal Andhra Pradesh with rigorous engineering education, modern lab facilities, digital classrooms, and a growing team of dedicated academic faculty and researchers.',
    portalUrl: 'https://rguktong.ac.in/',
    contactEmail: 'director@rguktong.ac.in',
    keyDisciplines: ['CSE', 'ECE', 'Civil Engineering', 'Mechanical', 'Basic Sciences & English'],
  },
];

/* ─────────────────────────────────────────────────────────────
   RECRUITMENT PROCESS TIMELINE (6 STEPS)
   ───────────────────────────────────────────────────────────── */
export const RECRUITMENT_PROCESS_STEPS: RecruitmentStep[] = [
  {
    step: '01',
    title: 'Official Notification & Advertisement',
    icon: '📢',
    subtitle: 'Transparent Public Announcement',
    description:
      'Detailed employment notifications are published in leading national dailies, the official RGUKT portal (rgukt.in), and the AP State Universities Recruitment Portal, specifying cadre vacancies, eligibility criteria, roster reservations, and application deadlines.',
  },
  {
    step: '02',
    title: 'Online Application & Credential Submission',
    icon: '📝',
    subtitle: 'Portal Registration & Bio-Data',
    description:
      'Eligible candidates register through the designated recruitment portal, submitting their academic qualifications (UG, PG, Ph.D.), research publications, API score sheets, service records, and category certificates along with the prescribed application fee.',
  },
  {
    step: '03',
    title: 'Scrutiny & Screening Evaluation',
    icon: '🔍',
    subtitle: 'Verification by University Scrutiny Committees',
    description:
      'Duly constituted departmental scrutiny committees evaluate the applications against UGC/AICTE minimum qualifications and statutory state reservation rosters. Computer-based screening tests or API score rankings are utilized where applicable.',
  },
  {
    step: '04',
    title: 'Classroom Demonstration & Teaching Aptitude',
    icon: '👨‍🏫',
    subtitle: 'Evaluation of Pedagogical Mastery',
    description:
      'Shortlisted faculty candidates undergo a mandatory 15-minute pedagogical lecture demonstration evaluated by senior academic subject experts, assessing concept communication, student engagement, and interactive digital blackboard usage.',
  },
  {
    step: '05',
    title: 'Statutory Selection Committee Interview',
    icon: '⚖️',
    subtitle: 'Formal Interview before Statutory Board',
    description:
      'Candidates appear before the statutory Selection Committee as prescribed by RGUKT Act 18 of 2008, comprising the Vice-Chancellor, Chancellor’s Nominee, Deans, Subject Experts from premier institutions (IITs/NITs/Central Universities), and Diversity Representatives.',
  },
  {
    step: '06',
    title: 'Governing Council Approval & Appointment',
    icon: '📜',
    subtitle: 'Merit List Finalization & Offer Letter',
    description:
      'The recommendations of the Selection Committee are placed before the Governing Council of RGUKT-AP for statutory approval. Successful candidates receive formal appointment orders and join their allocated constituent campus.',
  },
];

/* ─────────────────────────────────────────────────────────────
   OFFICIAL RECRUITMENT DOCUMENTS
   ───────────────────────────────────────────────────────────── */
export const RECRUITMENT_DOCUMENTS: RecruitmentDocument[] = [
  {
    id: 'doc-ap-univ-2026',
    title: 'AP State Universities Faculty Recruitment Notification (RGUKT)',
    refNo: 'Advt. No. AP-Univ/Recruitment/RGUKT/2026',
    category: 'Recruitment Advertisement',
    date: 'May 2026',
    description:
      'Official notification document detailing teaching vacancies, reservation rosters, pay bands, and application instructions for Assistant Professor and Lecturer posts.',
    pdfUrl: '/docs/careers/ap-univ-faculty-recruitment-2026.pdf',
    fileSize: '5.6 KB',
  },
  {
    id: 'doc-fac-guidelines',
    title: 'RGUKT-AP Faculty Recruitment Guidelines & Selection Norms',
    refNo: 'RGUKT/ESTT/FAC-GUIDE/2024-25',
    category: 'Selection Norms',
    date: 'AY 2024-25',
    description:
      'Standard Operating Procedure for Academic Staff Selection, Academic Performance Indicator (API) score allocation, and classroom demonstration evaluation criteria.',
    pdfUrl: '/docs/careers/rgukt-faculty-guidelines-2024.pdf',
    fileSize: '4.2 KB',
  },
  {
    id: 'doc-guest-faculty-norms',
    title: 'Guest & Visiting Faculty Engagement Guidelines',
    refNo: 'RGUKT/ACAD/GUEST-FAC/2024-25',
    category: 'Academic Guidelines',
    date: 'AY 2024-25',
    description:
      'Institutional guidelines governing semester-wise guest lecturer honorarium rates, maximum instructional workload, minimum qualifications, and performance assessment.',
    pdfUrl: '/docs/careers/guest-faculty-norms-2024-25.pdf',
    fileSize: '3.9 KB',
  },
  {
    id: 'doc-non-teaching-rules',
    title: 'Non-Teaching & Technical Staff Recruitment Regulations',
    refNo: 'RGUKT/ESTT/NON-TEACH/2024',
    category: 'Service Regulations',
    date: 'April 2024',
    description:
      'Cadre strength, educational qualification thresholds, skill-test criteria, and service conditions for administrative, ministerial, and technical support staff.',
    pdfUrl: '/docs/careers/non-teaching-recruitment-rules.pdf',
    fileSize: '3.9 KB',
  },
  {
    id: 'doc-statutory-provisions',
    title: 'Statutory & Executive Leadership Appointment Provisions',
    refNo: 'RGUKT/ACT-18/STATUTORY-2024',
    category: 'Statutory Framework',
    date: 'RGUKT Act 2008',
    description:
      'Provisions and Search Committee protocols governing the appointment of University Officers: Chancellor, Vice-Chancellor, Campus Directors, Registrar, and Deans.',
    pdfUrl: '/docs/careers/statutory-positions-act-provisions.pdf',
    fileSize: '3.7 KB',
  },
  {
    id: 'doc-reservation-roster',
    title: 'Reservation & Roster Policy Guidelines for Recruitment',
    refNo: 'RGUKT/ESTT/ROSTER-GUIDELINES/2024',
    category: 'Government Policy',
    date: 'Govt AP Orders',
    description:
      'Implementation rules for statutory SC/ST/BC/EWS and horizontal Women/PwD reservations under the 100-point roster system across RGUKT-AP cadres.',
    pdfUrl: '/docs/careers/reservation-roster-policy.pdf',
    fileSize: '3.8 KB',
  },
];

/* ─────────────────────────────────────────────────────────────
   ARCHIVED RECRUITMENTS (HISTORICAL RECORD)
   ───────────────────────────────────────────────────────────── */
export interface ArchivedRecruitmentItem {
  id: string;
  year: string;
  title: string;
  advtNo: string;
  category: string;
  campus: string;
  closingDate: string;
  pdfUrl: string;
}

export const ARCHIVED_RECRUITMENTS: ArchivedRecruitmentItem[] = [
  {
    id: 'arch-2024-contract-faculty',
    year: '2024',
    title: 'Recruitment for 194 Lecturer & Assistant Professor Positions on Contract Basis',
    advtNo: 'RGUKT-AP/Estt/Recruitment/Faculty/01-2024',
    category: 'Faculty Positions',
    campus: 'Nuzvid, RK Valley, Srikakulam, Ongole',
    closingDate: 'Jan 22, 2024',
    pdfUrl: '/docs/careers/rgukt-faculty-guidelines-2024.pdf',
  },
  {
    id: 'arch-2023-lecturer-drive',
    year: '2023',
    title: 'Notification for Recruitment of 220 Lecturers across 4 Campuses',
    advtNo: 'RGUKT-AP/Estt/Recruitment/Lecturers/2023',
    category: 'Faculty Positions',
    campus: 'All Campuses',
    closingDate: 'Nov 27, 2023',
    pdfUrl: '/docs/careers/rgukt-faculty-guidelines-2024.pdf',
  },
  {
    id: 'arch-2023-guest-rkv',
    year: '2023',
    title: 'Engagement of Guest Faculty in Engineering & Sciences (AY 2023-24)',
    advtNo: 'RGUKT-RKV/Estt/Guest-Faculty/2023-02',
    category: 'Guest & Visiting Faculty',
    campus: 'RK Valley',
    closingDate: 'Aug 14, 2023',
    pdfUrl: '/docs/careers/guest-faculty-norms-2024-25.pdf',
  },
  {
    id: 'arch-2023-rmo-ongole',
    year: '2023',
    title: 'Walk-in Interview for Residential Medical Officer & Staff Nurses',
    advtNo: 'RGUKT-ONG/Estt/Health/2023',
    category: 'Healthcare & Campus Services',
    campus: 'Ongole',
    closingDate: 'Sep 05, 2023',
    pdfUrl: '/docs/careers/non-teaching-recruitment-rules.pdf',
  },
  {
    id: 'arch-2022-technical-staff',
    year: '2022',
    title: 'Notification for Technical Assistants, Lab Technicians & Workshop Mentors',
    advtNo: 'RGUKT-NZV/Estt/Tech-Staff/2022',
    category: 'Technical & Laboratory',
    campus: 'Nuzvid',
    closingDate: 'Oct 15, 2022',
    pdfUrl: '/docs/careers/non-teaching-recruitment-rules.pdf',
  },
];

/* ─────────────────────────────────────────────────────────────
   WHY BUILD A CAREER AT RGUKT (INSTITUTIONAL VALUE)
   ───────────────────────────────────────────────────────────── */
export const WHY_RGUKT_CAREER = [
  {
    icon: '🌱',
    title: 'Nurturing Gifted Rural Talent',
    text: 'Teach and mentor exceptionally bright students selected from the top 1% of rural high schools across Andhra Pradesh through a rigorous merit-based system.',
  },
  {
    icon: '🔬',
    title: 'Interdisciplinary Research Support',
    text: 'Access university seed grants, high-performance computing clusters, modern analytical laboratories, and collaborative research initiatives with IITs and NITs.',
  },
  {
    icon: '🏡',
    title: '100% Residential Campus Community',
    text: 'Enjoy peaceful, green, self-contained residential campuses with faculty housing quarters, 24x7 healthcare clinics, sports complexes, and schools.',
  },
  {
    icon: '💻',
    title: 'ICT-Enabled Pedagogy & Mentorship',
    text: 'Every student receives an individual desk laptop from Year 1, enabling interactive digital instruction, coding platforms, and flipped classroom learning.',
  },
  {
    icon: '📈',
    title: 'Structured Career Advancement',
    text: 'UGC Career Advancement Scheme (CAS) promotions, sponsored national/international conference attendance, and professional faculty development programs.',
  },
  {
    icon: '🤝',
    title: 'Collaborative Academic Freedom',
    text: 'A vibrant collegial environment encouraging interdepartmental collaboration, curriculum innovation, student club guidance, and industry projects.',
  },
];

/* ─────────────────────────────────────────────────────────────
   OFFICIAL RECRUITMENT OFFICE & HELPLINE CONTACTS
   ───────────────────────────────────────────────────────────── */
export const RECRUITMENT_CONTACT = {
  office: 'Central Recruitment Cell, Office of the Registrar',
  university: 'Rajiv Gandhi University of Knowledge Technologies - Andhra Pradesh',
  address: 'RGUKT-AP Central Office, Andhra Pradesh, India',
  email: 'recruitment@rgukt.in',
  registrarEmail: 'registrar@rgukt.in',
  helpline: '+91 (08656) 235147 / Official RGUKT Helpdesk',
  hours: 'Monday to Saturday: 10:00 AM - 5:00 PM (Except Public Holidays)',
  officialPortal: 'https://www.rgukt.in/careers/',
  apRecruitmentPortal: 'https://apuniversitiesrecruitment.apcfss.in/',
};
