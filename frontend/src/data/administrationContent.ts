/** Administration section content — aligned with rgukt.in */

export const ADMIN_NAV = [
  { label: 'Governing Council', href: '/administration/governing-council' },
  { label: 'Chancellor', href: '/administration/chancellor' },
  { label: 'Academic Council', href: '/administration/academic-council' },
  { label: 'Vice Chancellor', href: '/administration/vice-chancellor' },
  { label: 'Registrar', href: '/administration/registrar' },
  { label: 'Directors', href: '/administration/directors' },
  { label: 'Chief Administrative Officer', href: '/administration/cao' },
  { label: 'Dean of Evaluation', href: '/administration/dean-evaluation' },
  { label: 'Dean of Academics', href: '/administration/dean-academics' },
  { label: 'Dean of EITP', href: '/administration/dean-eitp' },
  { label: 'Dean of R & D', href: '/administration/dean-rd' },
  { label: 'Dean of IQAC', href: '/iqac' },
  { label: 'Dean of Student Affairs', href: '/administration/dean-student-affairs' },
  { label: 'Finance Officer', href: '/administration/finance-officer' },
  { label: 'Sports Board', href: '/administration/sports-board' },
];

export const ADMIN_OVERVIEW_STATS = [
  { value: '4', label: 'Campuses' },
  { value: '4', label: 'Campus Directors' },
  { value: '8', label: 'Central Officers' },
  { value: '2', label: 'Statutory Councils' },
];

export const GOVERNING_COUNCIL = {
  intro: 'The Governing Council is the apex body overseeing RGUKT-AP governance and policy. It is chaired by the Hon\'ble Chancellor and includes government nominees, academic experts and university officials.',
  functions: [
    'Approve statutes and ordinances',
    'Review annual plans and budgets',
    'Oversee campus development',
    'Appoint key university officers',
  ],
  composition: [
    'Hon\'ble Chancellor (Chairperson)',
    'Vice Chancellor',
    'Secretary to Government, Higher Education',
    'Nominees of the Government of Andhra Pradesh',
    'Eminent academicians and industry experts',
    'Registrar (Member Secretary)',
  ],
};

export const ACADEMIC_COUNCIL = {
  intro: 'The Academic Council is presided over by the Vice Chancellor and includes Deans, Campus Directors and elected faculty representatives. It is responsible for academic standards, curriculum and examination policies.',
  responsibilities: [
    'Approve academic regulations',
    'Recommend new programmes',
    'Review examination policies',
    'Recognize research centres',
    'Recommend conferment of degrees',
  ],
  composition: [
    'Vice Chancellor (Chairperson)',
    'Dean of Academics',
    'Dean of Evaluation',
    'Campus Directors',
    'Heads of Departments (elected)',
    'Registrar (Member Secretary)',
  ],
};

export type CampusDirector = {
  name: string;
  campus: string;
  email: string;
  phone: string;
  campusHref: string;
};

export const CAMPUS_DIRECTORS: CampusDirector[] = [
  {
    name: 'Prof. M L N Rao',
    campus: 'Nuzvid',
    email: 'director.n@rguktn.ac.in',
    phone: '+91-8656-235092',
    campusHref: '/nuzvid',
  },
  {
    name: 'Dr. Y Venkateswarlu',
    campus: 'RK Valley',
    email: 'director.rkv@rguktrkv.ac.in',
    phone: '+91-8565-249202',
    campusHref: '/campus/rk-valley',
  },
  {
    name: 'Dr. K Sarala',
    campus: 'Srikakulam',
    email: 'director.sklm@rguktsklm.ac.in',
    phone: '+91-8942-244102',
    campusHref: '/campus/srikakulam',
  },
  {
    name: 'Dr. P Rajasekhar',
    campus: 'Ongole',
    email: 'director.ong@rguktong.ac.in',
    phone: '+91-8592-224302',
    campusHref: '/campus/ongole',
  },
];

export const CAO = {
  intro: 'The Chief Administrative Officer (CAO) manages non-academic administration including establishment, estates and general services across all RGUKT-AP campuses.',
  duties: [
    'Establishment and personnel administration',
    'Estates and campus infrastructure coordination',
    'General services and procurement support',
    'Coordination with campus administrative officers',
  ],
  contact: { email: 'cao@rgukt.ac.in', phone: '+91-863-2344705' },
};

export const FINANCE_OFFICER = {
  intro: 'The Finance Officer manages budgeting, audit compliance, fee collection and financial reporting for the university in accordance with Government of Andhra Pradesh norms.',
  duties: [
    'Annual budget preparation and monitoring',
    'Audit compliance and financial reporting',
    'Fee collection and scholarship disbursement',
    'Campus accounts coordination',
  ],
  contact: { email: 'finance@rgukt.ac.in', phone: '+91-863-2344708' },
};

export const SPORTS_BOARD = {
  intro: 'The Sports Board promotes inter-campus tournaments, participation in university games and fitness programmes for all students at RGUKT-AP.',
  activities: [
    'Annual inter-campus sports meet',
    'Cricket, volleyball, athletics and kabaddi leagues',
    'Fitness and yoga programmes',
    'Selection for state and national events',
  ],
};

export const OFFICER_QUICK_LINKS = [
  { label: 'Chancellor', href: '/administration/chancellor' },
  { label: 'Vice Chancellor', href: '/administration/vice-chancellor' },
  { label: 'Registrar', href: '/administration/registrar' },
  { label: 'Dean of Evaluation', href: '/administration/dean-evaluation' },
  { label: 'Dean of Academics', href: '/administration/dean-academics' },
  { label: 'Dean of EITP', href: '/administration/dean-eitp' },
  { label: 'Dean of R & D', href: '/administration/dean-rd' },
  { label: 'Dean of Student Affairs', href: '/administration/dean-student-affairs' },
];
