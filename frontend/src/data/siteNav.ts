/** Main navigation structure aligned with https://rgukt.in/ */

export type NavLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type NavMenu = {
  key: string;
  label: string;
  href: string;
  items: NavLink[];
};

/** Top utility bar — campus quick links (matches rgukt.in) */
export const UTILITY_LEFT_LINKS: NavLink[] = [
  { label: 'Nuzvid', href: '/nuzvid' },
  { label: 'RK Valley', href: '/campus/rk-valley' },
  { label: 'Srikakulam', href: '/campus/srikakulam' },
  { label: 'Ongole', href: '/campus/ongole' },
];

/** Homepage panels + footer — not in main nav on rgukt.in */
export const NAV_SECONDARY_LINKS: NavLink[] = [
  { label: 'Announcements', href: '/announcements' },
  { label: 'News & Events', href: '/news' },
];

export const NAV_MENUS: NavMenu[] = [
  {
    key: 'about',
    label: 'About',
    href: '/about',
    items: [
      { label: 'About RGUKT', href: '/about' },
      { label: 'Vision, Mission and Quality Policy', href: '/about/vision-mission' },
      { label: 'Best Practices', href: '/about/best-practices' },
      { label: 'Organization Chart', href: '/about/orgchart' },
      { label: 'Strategic Five Year Plan (2025–2029)', href: '/about/strategic-plan' },
      { label: 'Annual Report', href: '/about/annual-report' },
      { label: 'RGUKT ACT', href: '/about/rgukt-act' },
      { label: 'RGUKT Nuzvid Campus', href: '/nuzvid' },
      { label: 'RGUKT RK Valley Campus', href: '/campus/rk-valley' },
      { label: 'RGUKT Srikakulam Campus', href: '/campus/srikakulam' },
      { label: 'RGUKT Ongole Campus', href: '/campus/ongole' },
    ],
  },
  {
    key: 'academics',
    label: 'Academics',
    href: '/academics',
    items: [
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
    ],
  },
  {
    key: 'administration',
    label: 'Administration',
    href: '/administration',
    items: [
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
    ],
  },
  {
    key: 'admissions',
    label: 'Admissions',
    href: '/admissions',
    items: [
      { label: 'UG Admissions', href: '/admissions' },
      { label: 'Admissions 2025', href: '/admissions/2025' },
      { label: 'Admissions 2026', href: '/admissions/2026' },
      { label: 'PG Admissions', href: '/admissions/postgraduate' },
      { label: 'Doctoral Admissions', href: '/admissions/doctoral' },
      { label: 'Eligibility Criteria', href: '/admissions/eligibility' },
      { label: 'Application Process', href: '/admissions/process' },
      { label: 'Fee Structure', href: '/admissions/fees' },
    ],
  },
  {
    key: 'students',
    label: 'Students',
    href: '/students',
    items: [
      { label: 'Scholarships', href: '/students/scholarships' },
      { label: 'Medal Information', href: '/students/medals' },
      { label: 'Career Growth', href: '/students/career-growth' },
      { label: 'Quantum Computing Lab', href: '/students/quantum-lab' },
      { label: 'Anti Ragging', href: '/students/anti-ragging' },
      { label: 'Internal Complaint Committee', href: '/students/icc' },
      { label: 'Women Empowerment', href: '/students/women-empowerment' },
      { label: 'Cultural Activities', href: '/students/cultural' },
      { label: 'Sports', href: '/students/sports' },
      { label: 'Community Activities', href: '/students/community' },
      { label: 'Alumni Engagement', href: '/students/alumni-engagement' },
    ],
  },
  {
    key: 'research',
    label: 'Research',
    href: '/research',
    items: [
      { label: 'Overview', href: '/research' },
      { label: 'Research Head', href: '/research/head' },
      { label: 'Ethics for Research', href: '/research/ethics' },
      { label: 'Thrust Areas', href: '/research/thrust-areas' },
      { label: 'Guidelines', href: '/research/guidelines' },
      { label: 'Collaboration MoUs', href: '/research/mous' },
      { label: 'Research Advisory Committee', href: '/research/advisory-committee' },
    ],
  },
];

/** Main navbar flat links — order matches rgukt.in */
export const NAV_FLAT_LINKS: NavLink[] = [
  { label: 'Training & Placements', href: '/placements' },
  { label: 'Alumni', href: '/alumni' },
  { label: 'IQAC', href: '/iqac' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Tenders', href: '/tenders' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact Us', href: '/contact' },
];

/** Flat list for mobile drawer */
export function getMobileNavLinks(): NavLink[] {
  const links: NavLink[] = [{ label: 'Home', href: '/' }];
  for (const menu of NAV_MENUS) {
    links.push({ label: menu.label, href: menu.href });
    for (const item of menu.items) {
      if (!links.some(l => l.href === item.href)) {
        links.push(item);
      }
    }
  }
  for (const link of NAV_FLAT_LINKS) {
    if (!links.some(l => l.href === link.href)) links.push(link);
  }
  for (const link of NAV_SECONDARY_LINKS) {
    if (!links.some(l => l.href === link.href)) links.push(link);
  }
  return links;
}

export function isNavLinkActive(pathname: string, hash: string, href: string): boolean {
  if (href.startsWith('http')) return false;
  const [path, fragment] = href.split('#');
  if (fragment) {
    return pathname === path && hash === `#${fragment}`;
  }
  if (pathname === path) return true;
  if (path !== '/' && pathname.startsWith(path + '/')) return true;
  return false;
}
