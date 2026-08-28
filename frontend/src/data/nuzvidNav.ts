/** Nuzvid campus navigation — aligned with https://rguktn.ac.in/ */

import type { NavLink, NavMenu } from './siteNav';
import { isNavLinkActive } from './siteNav';

export { isNavLinkActive };

const R = '/nuzvid';
const ADMISSIONS = '/nuzvid/admissions';
const ALUMNI = '/nuzvid/alumni';
const EXAMCELL = '/nuzvid/examinations';
const CDPC = '/nuzvid/students/career-development';
const FEE_PAY = 'https://www.onlinesbi.sbi/sbicollect/icollecthome.htm';

/** Campus switcher (left utility bar) */
export const NUZVID_UTILITY_LEFT: NavLink[] = [
  { label: 'RGUKT-AP', href: '/' },
  { label: 'Nuzvid', href: '/nuzvid' },
  { label: 'RK Valley', href: 'https://rguktrkv.ac.in', external: true },
  { label: 'Srikakulam', href: 'https://rguktsklm.ac.in', external: true },
  { label: 'Ongole', href: 'https://rguktong.ac.in', external: true },
];

/** Quick links from rguktn.ac.in header (right utility bar) */
export const NUZVID_UTILITY_RIGHT: NavLink[] = [
  { label: 'Admissions', href: ADMISSIONS },
  { label: 'Alumni', href: ALUMNI },
  { label: 'Careers', href: '/nuzvid/careers' },
  { label: 'Tenders', href: '/nuzvid/tenders' },
  { label: 'Fee Payment', href: FEE_PAY, external: true },
  { label: 'Intranet', href: '/nuzvid/intranet' },
  { label: 'Moodle', href: '/nuzvid/academics/lms' },
  { label: 'ICC', href: '/nuzvid/students/icc' },
  { label: 'NIRF', href: '/nuzvid/about/nirf' },
];

export const NUZVID_ENGINEERING_DEPTS: NavLink[] = [
  { label: 'Chemical Engineering', href: '/nuzvid/departments/che' },
  { label: 'Civil Engineering', href: '/nuzvid/departments/ce' },
  { label: 'Computer Science & Engineering', href: '/nuzvid/departments/cse' },
  { label: 'Electronics & Communication Engineering', href: '/nuzvid/departments/ece' },
  { label: 'Electrical & Electronics Engineering', href: '/nuzvid/departments/eee' },
  { label: 'Mechanical Engineering', href: '/nuzvid/departments/me' },
  { label: 'Metallurgical & Materials Engineering', href: '/nuzvid/departments/mme' },
];

export const NUZVID_SCIENCE_DEPTS: NavLink[] = [
  { label: 'Biology & Bio Sciences', href: '/nuzvid/departments/bio' },
  { label: 'Chemistry', href: '/nuzvid/departments/chemistry' },
  { label: 'Physics', href: '/nuzvid/departments/physics' },
  { label: 'Mathematics', href: '/nuzvid/departments/mathematics' },
  { label: 'Information Technology', href: '/nuzvid/departments/it' },
];

export const NUZVID_HUMANITIES_DEPTS: NavLink[] = [
  { label: 'English', href: '/nuzvid/departments/english' },
  { label: 'Management', href: '/nuzvid/departments/management' },
  { label: 'Telugu', href: '/nuzvid/departments/telugu' },
  { label: 'Performing Arts', href: '/nuzvid/departments/performing-arts' },
  { label: 'Physical Education & Yoga', href: '/nuzvid/departments/pe-yoga' },
];

export const NUZVID_MENUS: NavMenu[] = [
  {
    key: 'about',
    label: 'About',
    href: '/nuzvid/about',
    items: [
      { label: 'About RGUKT Nuzvid', href: '/nuzvid/about' },
      { label: 'Vision and Mission', href: '/nuzvid/about#vision' },
      { label: 'At a Glance', href: '/nuzvid/about#glance' },
      { label: 'Campus Life', href: '/nuzvid/about/campus-life' },
      { label: 'Education System', href: '/nuzvid/about/education-system' },
      { label: 'Achievements & Awards', href: '/nuzvid/about/achievements' },
      { label: 'Governing Council', href: '/nuzvid/about/governing-council' },
      { label: 'ARIIA 2021 Report', href: `${R}/downloads/ARIIA_2021_Report.pdf` },
      { label: 'Right to Information Act', href: '/nuzvid/rti' },
      { label: 'NAAC Certificate', href: `${R}/downloads/NAAC.jpg` },
      { label: 'UGC 12B Status', href: `${R}/downloads/UGC_12B_status.pdf` },
      { label: 'UGC 2(f) Status', href: `${R}/downloads/UGC_2F_status.pdf` },
      { label: 'Ombudsperson', href: '/nuzvid/ombudsperson' },
      { label: 'Gallery', href: '/nuzvid/gallery' },
    ],
  },
  {
    key: 'academics',
    label: 'Academics',
    href: '/nuzvid/academics',
    items: [
      { label: 'Overview', href: '/nuzvid/academics' },
      { label: 'Programmes', href: '/nuzvid/academics/programmes' },
      { label: 'Curricula', href: '/nuzvid/academics/curricula' },
      { label: 'Academic Regulations', href: '/nuzvid/academics/regulations' },
      { label: 'Academic Calendar', href: '/nuzvid/academics/calendar' },
      { label: 'Examinations', href: '/nuzvid/examinations' },
      { label: 'Library', href: '/nuzvid/library' },
    ],
  },
  {
    key: 'administration',
    label: 'Administration',
    href: '/nuzvid/administration',
    items: [
      { label: 'Administration Overview', href: '/nuzvid/administration' },
      { label: 'Chancellor', href: '/nuzvid/administration/chancellor' },
      { label: 'Vice Chancellor', href: '/nuzvid/administration/vice-chancellor' },
      { label: 'Director', href: '/nuzvid/administration/director' },
      { label: 'Administrative Officer', href: '/nuzvid/administration/ao' },
      { label: 'Finance Officer', href: '/nuzvid/administration/finance-officer' },
      { label: 'Dean of Academics', href: '/nuzvid/administration/dean-academics' },
      { label: 'Dean of Student Welfare', href: '/nuzvid/administration/dean-student-welfare' },
      { label: 'Controller of Examinations', href: '/nuzvid/administration/coe' },
      { label: 'Department Heads', href: '/nuzvid/administration/department-heads' },
    ],
  },
  {
    key: 'departments',
    label: 'Departments',
    href: '/nuzvid/departments',
    items: [
      { label: 'All Departments', href: '/nuzvid/departments' },
      ...NUZVID_ENGINEERING_DEPTS,
      ...NUZVID_SCIENCE_DEPTS,
      ...NUZVID_HUMANITIES_DEPTS,
      { label: 'Department Heads', href: '/nuzvid/administration/department-heads' },
    ],
  },
  {
    key: 'students',
    label: 'Students',
    href: '/nuzvid/students',
    items: [
      { label: 'Students Overview', href: '/nuzvid/students' },
      { label: 'Education at RGUKT', href: '/nuzvid/about/education-system' },
      { label: 'Career Development Cell', href: CDPC },
      { label: 'Anti Ragging', href: '/nuzvid/students/anti-ragging' },
      { label: 'Student Welfare', href: '/nuzvid/students/student-welfare' },
      { label: 'National Cadet Corps (NCC)', href: '/nuzvid/students/ncc' },
      { label: 'National Service Scheme (NSS)', href: '/nuzvid/students/nss' },
      { label: 'Convocation', href: '/nuzvid/students/convocation' },
      { label: 'Alumni & International Relations', href: ALUMNI },
      { label: 'Student Fee Payment', href: FEE_PAY, external: true },
      { label: 'Student Fee Challan', href: `${R}/downloads/Challan.pdf` },
    ],
  },
];

/** Top-level navbar links (no dropdown) — matches rguktn.ac.in */
export const NUZVID_FLAT_LINKS: NavLink[] = [
  { label: 'Examinations & Results', href: EXAMCELL },
  { label: 'Library', href: '/nuzvid/library' },
  { label: 'Placements', href: '/nuzvid/placements' },
  { label: 'Tenders', href: '/nuzvid/tenders' },
  { label: 'Careers', href: '/nuzvid/careers' },
  { label: 'Alumni', href: ALUMNI },
  { label: 'Contact Us', href: '/nuzvid/contact' },
];

/** Contact sub-pages (footer / contact hub) */
export const NUZVID_CONTACT_LINKS: NavLink[] = [
  { label: 'Address & Directions', href: '/nuzvid/contact' },
  { label: 'Communication Directory', href: '/nuzvid/contact/directory' },
];

/** Internal routes that will receive scraped content (placeholder pages for now) */
export type NuzvidContentRoute = {
  path: string;
  title: string;
  sourcePath: string;
};

function deptSourcePath(href: string): string {
  const slug = href.replace('/nuzvid/departments/', '');
  const engineering: Record<string, string> = {
    che: 'departments/che/',
    ce: 'departments/ce/',
    cse: 'departments/cse/',
    ece: 'departments/ece/',
    eee: 'departments/eee/',
    me: 'departments/me/',
    mme: 'departments/mme/',
  };
  const scienceHumanities: Record<string, string> = {
    bio: 'academics/departments/bio/',
    chemistry: 'academics/departments/chemistry/',
    physics: 'academics/departments/physics/',
    mathematics: 'academics/departments/mathematics/',
    it: 'academics/departments/information-technology/',
    english: 'academics/departments/english/',
    management: 'academics/departments/management/',
    telugu: 'academics/departments/telugu/',
    'performing-arts': 'academics/departments/performing-arts',
    'pe-yoga': 'academics/departments/physical-education-and-yoga/',
  };
  if (engineering[slug]) return engineering[slug];
  if (scienceHumanities[slug]) return scienceHumanities[slug];
  return `academics/departments/${slug}/`;
}

export const NUZVID_CONTENT_ROUTES: NuzvidContentRoute[] = [
  { path: 'about/campus-life', title: 'Campus Life', sourcePath: 'about/CampusLife/' },
  { path: 'about/education-system', title: 'Education System', sourcePath: 'about/EducationSystem/' },
  { path: 'about/achievements', title: 'Achievements & Awards', sourcePath: 'about/achievements/' },
  { path: 'about/governing-council', title: 'Governing Council', sourcePath: 'about/GoverningCouncil/' },
  { path: 'gallery', title: 'Gallery', sourcePath: 'gallery/' },
  { path: 'rti', title: 'Right to Information', sourcePath: 'rti/' },
  { path: 'ombudsperson', title: 'Ombudsperson', sourcePath: 'ombudsperson.php' },
  { path: 'academics/programmes', title: 'Programmes', sourcePath: 'academics/programmes/' },
  { path: 'academics/curricula', title: 'Curricula', sourcePath: 'academics/curricula/' },
  { path: 'academics/regulations', title: 'Academic Regulations', sourcePath: 'academics/academic-regulations/' },
  { path: 'academics/calendar', title: 'Academic Calendar', sourcePath: 'academics/academic_calendar/' },
  { path: 'administration', title: 'Administration', sourcePath: 'administration/' },
  { path: 'administration/chancellor', title: 'Chancellor', sourcePath: 'administration/chancellor/' },
  { path: 'administration/vice-chancellor', title: 'Vice Chancellor', sourcePath: 'administration/vice-chancellor/' },
  { path: 'administration/director', title: 'Director', sourcePath: 'administration/director/' },
  { path: 'administration/ao', title: 'Administrative Officer', sourcePath: 'administration/ao/' },
  { path: 'administration/finance-officer', title: 'Finance Officer', sourcePath: 'administration/fo/' },
  { path: 'administration/dean-academics', title: 'Dean of Academics', sourcePath: 'administration/dean-academics/' },
  { path: 'administration/dean-student-welfare', title: 'Dean of Student Welfare', sourcePath: 'administration/dean-studentwelfare/' },
  { path: 'administration/coe', title: 'Controller of Examinations', sourcePath: 'administration/coe/' },
  { path: 'administration/department-heads', title: 'Department Heads', sourcePath: 'academics/departments/department-heads.php' },
  { path: 'students', title: 'Students', sourcePath: 'about/EducationSystem/' },
  { path: 'students/anti-ragging', title: 'Anti Ragging', sourcePath: 'student_affairs/antiragging/' },
  { path: 'students/student-welfare', title: 'Student Welfare', sourcePath: 'student_affairs/student_welfare/' },
  { path: 'students/ncc', title: 'National Cadet Corps', sourcePath: 'student_affairs/ncc/' },
  { path: 'students/nss', title: 'National Service Scheme', sourcePath: 'student_affairs/nss/' },
  { path: 'students/convocation', title: 'Convocation', sourcePath: 'convocation/' },
  { path: 'tenders', title: 'Tenders', sourcePath: 'tenders/' },
  { path: 'careers', title: 'Careers', sourcePath: 'careers/' },
  { path: 'contact/directory', title: 'Communication Directory', sourcePath: 'contactus/communication-directory/' },
  { path: 'admissions', title: 'Admissions', sourcePath: 'about/aboutrgukt/' },
  { path: 'departments', title: 'Departments', sourcePath: 'academics/departments/' },
  ...NUZVID_ENGINEERING_DEPTS.map(d => ({
    path: d.href.replace('/nuzvid/', ''),
    title: d.label,
    sourcePath: deptSourcePath(d.href),
  })),
  ...NUZVID_SCIENCE_DEPTS.map(d => ({
    path: d.href.replace('/nuzvid/', ''),
    title: d.label,
    sourcePath: deptSourcePath(d.href),
  })),
  ...NUZVID_HUMANITIES_DEPTS.map(d => ({
    path: d.href.replace('/nuzvid/', ''),
    title: d.label,
    sourcePath: deptSourcePath(d.href),
  })),
];

export function getNuzvidMobileNavLinks(): NavLink[] {
  const links: NavLink[] = [{ label: 'Home', href: '/nuzvid' }];
  for (const menu of NUZVID_MENUS) {
    links.push({ label: menu.label, href: menu.href });
    for (const item of menu.items) {
      if (!links.some(l => l.href === item.href && l.label === item.label)) {
        links.push(item);
      }
    }
  }
  for (const link of NUZVID_FLAT_LINKS) {
    if (!links.some(l => l.href === link.href && l.label === link.label)) links.push(link);
  }
  for (const link of NUZVID_CONTACT_LINKS) {
    if (!links.some(l => l.href === link.href)) links.push(link);
  }
  return links;
}
