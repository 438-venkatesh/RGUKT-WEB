/** Admissions section content — aligned with rgukt.in */

export const ADMISSIONS_NAV = [
  { label: 'UG Admissions', href: '/admissions' },
  { label: 'Admissions 2025', href: '/admissions/2025' },
  { label: 'Admissions 2026', href: '/admissions/2026' },
  { label: 'PG Admissions', href: '/admissions/postgraduate' },
  { label: 'Doctoral Admissions', href: '/admissions/doctoral' },
  { label: 'Eligibility Criteria', href: '/admissions/eligibility' },
  { label: 'Application Process', href: '/admissions/process' },
  { label: 'Fee Structure', href: '/admissions/fees' },
];

export const ADMISSIONS_OVERVIEW_STATS = [
  { value: '6 Yrs', label: 'Integrated Programme' },
  { value: '₹0', label: 'Tuition (Eligible)' },
  { value: '4', label: 'Campuses' },
  { value: 'SSC', label: 'Entry Qualification' },
];

export const PORTAL_URL = 'https://rgukt.in/';

export const ELIGIBILITY_CRITERIA = [
  'Passed 10th standard (SSC) from a school in Andhra Pradesh',
  'Rural residency as per Government of Andhra Pradesh norms',
  'Meets the minimum aggregate marks specified in the admission notification',
  'Age criteria as specified in the official prospectus',
  'Category certificates (SC/ST/BC/EBC) where applicable',
];

export const APPLICATION_STEPS = [
  { n: 1, label: 'Register Online', detail: 'Create an account on the RGUKT-AP admissions portal with a valid email and mobile number.' },
  { n: 2, label: 'Entrance Test', detail: 'Download hall ticket and appear for the state entrance examination at the allotted centre.' },
  { n: 3, label: 'Rank & Counselling', detail: 'Check rank, participate in web counselling and choose campus/branch preferences.' },
  { n: 4, label: 'Campus Allotment', detail: 'Confirm seat allotment, pay fees (if applicable) and report to campus with documents.' },
];

export const APPLICATION_HOW_TO = [
  'Register on the RGUKT-AP admissions portal with a valid email and mobile number.',
  'Fill the application form and upload SSC marks memo and certificates.',
  'Pay the application fee (if applicable) and submit before the last date.',
  'Download hall ticket and appear for the entrance examination.',
  'Participate in web counselling and confirm seat allotment.',
  'Report to the allotted campus with original documents.',
];

export const FEE_ROWS = [
  { campus: 'Nuzvid', tuition: '₹0 (waived)', hostel: '₹18,000/yr' },
  { campus: 'RK Valley', tuition: '₹0 (waived)', hostel: '₹18,000/yr' },
  { campus: 'Srikakulam', tuition: '₹0 (waived)', hostel: '₹17,000/yr' },
  { campus: 'Ongole', tuition: '₹0 (waived)', hostel: '₹17,000/yr' },
];

export const ADMISSIONS_FAQ = [
  {
    q: 'Is education free for admitted students?',
    a: 'Yes, eligible rural students receive full fee waivers including tuition. Hostel and mess charges may apply with scholarship support.',
  },
  {
    q: 'Can students from other states apply?',
    a: 'No, UG admission is reserved for rural students who completed 10th standard in Andhra Pradesh.',
  },
  {
    q: 'What is the duration of the programme?',
    a: 'A six-year integrated programme spanning two years of pre-university and four years of B.Tech engineering.',
  },
  {
    q: 'How do I check application status?',
    a: 'Application status can be tracked on the admissions portal using your registration ID.',
  },
];

export const ADMISSIONS_2025 = {
  intro: 'Admissions for Academic Year 2025–26 were conducted for rural SSC graduates from Andhra Pradesh through the state entrance examination and counselling process.',
  dates: [
    { label: 'Notification', value: 'April 2025' },
    { label: 'Last date for applications', value: 'May 2025' },
    { label: 'Counselling', value: 'June–July 2025' },
    { label: 'Classes commenced', value: 'August 2025' },
  ],
};

export const ADMISSIONS_2026 = {
  intro: 'Six-year integrated B.Tech programme for gifted rural youth of Andhra Pradesh — applications for AY 2026–27 are now open.',
  timeline: [
    { date: 'May 2026', event: 'Notification & prospectus release' },
    { date: 'Jun 2026', event: 'Online application portal opens' },
    { date: 'Jul 2026', event: 'Entrance examination' },
    { date: 'Aug 2026', event: 'Rank declaration & web counselling' },
    { date: 'Sep 2026', event: 'Campus reporting & classes commence' },
  ],
  documents: [
    'SSC / 10th marks memo',
    'Study certificates (Classes 6–10)',
    'Rural residency certificate',
    'Caste/category certificate (if applicable)',
    'Income certificate (if applicable)',
    'Aadhaar card',
  ],
};

export const PG_ADMISSIONS = {
  intro: 'M.Tech admissions at RGUKT-AP are based on GATE scores followed by university counselling. Vacancies are announced campus-wise each academic year.',
  eligibility: [
    'B.Tech/B.E. in relevant discipline with minimum CGPA as per regulations',
    'Valid GATE score (preferred)',
    'Andhra Pradesh domicile norms as applicable',
  ],
  programmes: ['M.Tech CSE', 'M.Tech ECE', 'M.Tech Mechanical', 'M.Tech Chemical'],
};

export const DOCTORAL_ADMISSIONS = {
  intro: 'Full-time and part-time Ph.D. programmes are offered in engineering and science departments. Selection is through written test and interview.',
  requirements: [
    'Master\'s degree in relevant field',
    'NET/GATE qualification (preferred)',
    'Research proposal submission',
    'Interview with departmental research committee',
  ],
};
