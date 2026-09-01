/** Academics section content — aligned with rgukt.in */

export type AcademicsDocument = {
  title: string;
  file: string;
  size: string;
};

export const ACADEMICS_NAV = [
  { label: 'Overview', href: '/academics' },
  { label: 'Undergraduate Programmes', href: '/academics/undergraduate' },
  { label: 'Postgraduate Programmes', href: '/academics/postgraduate' },
  { label: 'Research Programmes', href: '/academics/research-programmes' },
  { label: 'Summer Programmes', href: '/academics/summer' },
  { label: 'Academic Regulations', href: '/academics/regulations' },
  { label: 'Academic Calendar', href: '/academics/calendar' },
  { label: 'Academic Curriculum', href: '/academics/curriculum' },
  { label: 'Examination Procedures', href: '/academics/examinations' },
  { label: 'Examination Schedules', href: '/academics/exam-schedules' },
  { label: 'Central Library', href: '/academics/central-library' },
  { label: 'Learning Management System', href: '/academics/lms' },
  { label: 'Timetables', href: '/academics/timetables' },
  { label: 'Scholarships and Financial Assistance', href: '/academics/scholarships' },
  { label: 'Orientation Programme', href: '/academics/orientation' },
  { label: 'Council Minutes', href: '/academics/council-minutes' },
];

export const UG_BRANCHES = [
  { code: 'CSE', name: 'Computer Science & Engineering', seats: 60 },
  { code: 'ECE', name: 'Electronics & Communication Engineering', seats: 60 },
  { code: 'EEE', name: 'Electrical & Electronics Engineering', seats: 60 },
  { code: 'MECH', name: 'Mechanical Engineering', seats: 60 },
  { code: 'CIVIL', name: 'Civil Engineering', seats: 60 },
  { code: 'CHEM', name: 'Chemical Engineering', seats: 60 },
  { code: 'MME', name: 'Materials & Metallurgical Engineering', seats: 60 },
];

export const PG_PROGRAMMES = [
  { branch: 'M.Tech CSE', focus: 'AI, Data Science & Cloud Computing' },
  { branch: 'M.Tech ECE', focus: 'VLSI, Embedded Systems & IoT' },
  { branch: 'M.Tech Mechanical', focus: 'Design, Thermal & Manufacturing' },
  { branch: 'M.Tech Chemical', focus: 'Process Engineering & Energy Systems' },
];

export const RESEARCH_AREAS = [
  'Artificial Intelligence & Machine Learning',
  'Quantum Computing',
  'Renewable Energy Systems',
  'Materials Science & Nanotechnology',
  'Structural Engineering & Smart Infrastructure',
  'Water Resources & Environmental Engineering',
];

export const SUMMER_PROGRAMMES = [
  { title: 'NPTEL Certification Drives', body: 'Structured online courses with proctored examinations during the summer vacation.' },
  { title: 'Industry Internships', body: 'Placement cell coordinates summer internships with industry and research organisations.' },
  { title: 'Remedial Coaching', body: 'Bridge classes for backlog students in mathematics, physics and core engineering subjects.' },
  { title: 'Faculty Development', body: 'Workshops on pedagogy, research writing and emerging technologies for faculty.' },
];

export const ACADEMICS_DOCUMENTS = {
  regulations: [
    { title: 'B.Tech Academic Regulations 2024', file: '/docs/academics/btech-regulations-2024.pdf', size: '840 KB' },
    { title: 'M.Tech Academic Regulations 2023', file: '/docs/academics/mtech-regulations-2023.pdf', size: '620 KB' },
    { title: 'Grading & Promotion Policy', file: '/docs/academics/grading-promotion-policy.pdf', size: '290 KB' },
  ] as AcademicsDocument[],
  calendar: [
    { title: 'Academic Calendar 2025-26', file: '/docs/academics/academic-calendar-2025-26.pdf', size: '310 KB' },
    { title: 'Holiday List 2025-26', file: '/docs/academics/holiday-list-2025-26.pdf', size: '95 KB' },
  ] as AcademicsDocument[],
  curriculum: [
    { title: 'B.Tech Curriculum — All Branches (2024)', file: '/docs/academics/btech-curriculum-2024.pdf', size: '1.1 MB' },
    { title: 'PUC Curriculum Framework', file: '/docs/academics/puc-curriculum-framework.pdf', size: '480 KB' },
    { title: 'M.Tech Syllabus Booklets', file: '/docs/academics/mtech-syllabus-booklets.pdf', size: '720 KB' },
    { title: 'Ph.D. Coursework Guidelines', file: '/docs/academics/phd-coursework-guidelines.pdf', size: '350 KB' },
  ] as AcademicsDocument[],
  councilMinutes: [
    { title: 'Academic Council — Meeting 12, June 2025', file: '/docs/academics/academic-council-12-2025.pdf', size: '420 KB' },
    { title: 'Academic Council — Meeting 11, March 2025', file: '/docs/academics/academic-council-11-2025.pdf', size: '390 KB' },
    { title: 'Governing Council — Meeting 8, January 2025', file: '/docs/academics/governing-council-8-2025.pdf', size: '510 KB' },
  ] as AcademicsDocument[],
};

export const CALENDAR_DATES = [
  { period: 'Semester I — 2025-26', start: '29 Jul 2025', end: '12 Dec 2025' },
  { period: 'Mid-Semester Break', start: '6 Oct 2025', end: '12 Oct 2025' },
  { period: 'Semester II — 2025-26', start: '5 Jan 2026', end: '30 Apr 2026' },
  { period: 'End Examinations (Sem II)', start: '21 Apr 2026', end: '30 Apr 2026' },
  { period: 'Summer Vacation', start: '1 May 2026', end: '31 May 2026' },
  { period: 'Semester I — 2026-27', start: '27 Jul 2026', end: 'Dec 2026' },
];

export const EXAM_PROCEDURES = [
  'Registration for regular and supplementary examinations',
  'Hall ticket issuance and verification',
  'Answer script evaluation and revaluation',
  'Result declaration and grade sheets',
  'Malpractice prevention and disciplinary action',
];

export const CAMPUSES = ['Nuzvid', 'RK Valley', 'Srikakulam', 'Ongole'];

export const EXAM_SCHEDULES = CAMPUSES.flatMap(campus =>
  ['1', '2', '3', '4', '5', '6', '7', '8'].map(sem => ({
    campus,
    semester: sem,
    title: `${campus} Campus — Semester ${sem} 2025-26`,
    file: `/docs/academics/exam-schedule-${campus.toLowerCase().replace(/\s+/g, '-')}-sem${sem}.pdf`,
    size: '180 KB',
  })),
);

export const LIBRARY_STATS = [
  { value: '85,289', label: 'Sq. Ft. Plinth Area' },
  { value: '3 Floors', label: '31 Dedicated Rooms' },
  { value: '8 Platforms', label: 'Digital E-Resources' },
  { value: '100%', label: 'Open Access System' },
];

export const LIBRARY_SERVICES = [
  'Open access book lending & Koha OPAC search',
  'Digital library & international e-journal access',
  'Reprography & scanning services',
  'Reading rooms, discussion rooms & study carrels',
  'Previous years question paper archives',
  'Career, competitive exam cell & newspaper clippings',
];

export const LMS_FEATURES = [
  'Course material repository',
  'Online assignments and quizzes',
  'Discussion forums',
  'Attendance and grade tracking',
];

export const LMS_PORTALS = [
  { label: 'Nuzvid LMS', href: 'https://lms.rguktn.ac.in' },
  { label: 'RK Valley LMS', href: 'https://lms.rguktrkv.ac.in' },
  { label: 'Srikakulam LMS', href: 'https://lms.rguktsklm.ac.in' },
  { label: 'Ongole LMS', href: 'https://lms.rguktong.ac.in' },
];

export const TIMETABLES = CAMPUSES.map(campus => ({
  campus,
  title: `${campus} Campus — Semester II 2025-26`,
  file: `/docs/academics/timetable-${campus.toLowerCase().replace(/\s+/g, '-')}-sem2.pdf`,
  size: '220 KB',
}));

export const SCHOLARSHIPS = [
  {
    name: 'Post-Matric Scholarship',
    desc: 'Full fee waiver for eligible SC/ST/BC/EBC students under Government of Andhra Pradesh schemes.',
  },
  {
    name: 'Merit-cum-Means Scholarship',
    desc: 'Financial support for top-ranked students from low-income rural households.',
  },
  {
    name: 'Mid-Day Meal & Hostel Aid',
    desc: 'Free boarding, lodging and meals for all eligible admitted students.',
  },
  {
    name: 'Full Tuition Waiver',
    desc: 'RGUKT-AP provides tuition-free education to eligible rural students as mandated by the RGUKT Act.',
  },
];

export const ORIENTATION_COMPONENTS = [
  'Welcome address by Vice Chancellor',
  'Academic regulations briefing',
  'Campus tour and hostel allotment',
  'Club and activity fair',
  'Mentor assignment and anti-ragging orientation',
];

export const ACADEMICS_OVERVIEW_STATS = [
  { value: '6 Yrs', label: 'Integrated Programme' },
  { value: '7', label: 'B.Tech Branches' },
  { value: '4', label: 'Campuses' },
  { value: '15K+', label: 'Students' },
];
