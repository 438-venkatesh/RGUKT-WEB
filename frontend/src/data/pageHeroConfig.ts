import type { PageHeroProps } from '../components/PageHero';
import { getSitePage, SITE_PAGE_PATHS } from './sitePages';
import { OFFICER_PROFILES } from './officers';
import { CAMPUSES } from './aboutContent';

type PageHeroConfig = PageHeroProps & { match: string };

/** Single hero image for all inner pages (IIT Jobs-style header). */
export const PAGE_HERO_IMAGE = '/gallery/gallery-7.jpg';

const DEFAULT_QUOTE =
  'The best way to <strong>predict</strong> the future is to <strong>create</strong> it';
const DEFAULT_AUTHOR = 'Abraham Lincoln';

const hero = (title: string, extra?: Partial<PageHeroProps>): Omit<PageHeroConfig, 'match'> => ({
  title,
  bgImage: PAGE_HERO_IMAGE,
  titleImage: PAGE_HERO_IMAGE,
  ...extra,
});

const studentHero = (title: string, extra?: Partial<PageHeroProps>): Omit<PageHeroConfig, 'match'> => ({
  title,
  titleImage: PAGE_HERO_IMAGE,
  noHeroBg: true,
  ...extra,
});

const researchHero = (title: string, extra?: Partial<PageHeroProps>): Omit<PageHeroConfig, 'match'> => ({
  title,
  titleImage: PAGE_HERO_IMAGE,
  noHeroBg: true,
  ...extra,
});

/** Core pages with custom hero copy */
const CORE_HERO_CONFIGS: PageHeroConfig[] = [
  { ...hero('About@RGUKT-AP'), match: '/about', quote: DEFAULT_QUOTE, quoteAuthor: DEFAULT_AUTHOR },
  { ...hero('VisionMission@RGUKT-AP'), match: '/about/vision-mission' },
  { ...hero('BestPractices@RGUKT-AP'), match: '/about/best-practices' },
  { ...hero('OrgChart@RGUKT-AP'), match: '/about/orgchart' },
  { ...hero('StrategicPlan@RGUKT-AP'), match: '/about/strategic-plan' },
  { ...hero('AnnualReport@RGUKT-AP'), match: '/about/annual-report' },
  { ...hero('RGUKTAct@RGUKT-AP'), match: '/about/rgukt-act' },
  { ...hero('Academics@RGUKT-AP'), match: '/academics', quote: DEFAULT_QUOTE, quoteAuthor: DEFAULT_AUTHOR },
  { ...hero('Undergraduate@RGUKT-AP'), match: '/academics/undergraduate' },
  { ...hero('Postgraduate@RGUKT-AP'), match: '/academics/postgraduate' },
  { ...hero('ResearchProgrammes@RGUKT-AP'), match: '/academics/research-programmes' },
  { ...hero('SummerProgrammes@RGUKT-AP'), match: '/academics/summer' },
  { ...hero('Regulations@RGUKT-AP'), match: '/academics/regulations' },
  { ...hero('Calendar@RGUKT-AP'), match: '/academics/calendar' },
  { ...hero('Curriculum@RGUKT-AP'), match: '/academics/curriculum' },
  { ...hero('Examinations@RGUKT-AP'), match: '/academics/examinations' },
  { ...hero('ExamSchedules@RGUKT-AP'), match: '/academics/exam-schedules' },
  { ...hero('CentralLibrary@RGUKT-AP'), match: '/academics/central-library' },
  { ...hero('LMS@RGUKT-AP'), match: '/academics/lms' },
  { ...hero('Timetables@RGUKT-AP'), match: '/academics/timetables' },
  { ...hero('Scholarships@RGUKT-AP'), match: '/academics/scholarships' },
  { ...hero('Orientation@RGUKT-AP'), match: '/academics/orientation' },
  { ...hero('CouncilMinutes@RGUKT-AP'), match: '/academics/council-minutes' },
  { ...hero('Administration@RGUKT-AP'), match: '/administration' },
  { ...hero('Governing Council@RGUKT-AP'), match: '/administration/governing-council' },
  { ...hero('Academic Council@RGUKT-AP'), match: '/administration/academic-council' },
  { ...hero('Directors@RGUKT-AP'), match: '/administration/directors' },
  { ...hero('Chief Administrative Officer@RGUKT-AP'), match: '/administration/cao' },
  { ...hero('Dean of Evaluation@RGUKT-AP'), match: '/administration/dean-evaluation' },
  { ...hero('Dean of Academics@RGUKT-AP'), match: '/administration/dean-academics' },
  { ...hero('Dean of EITP@RGUKT-AP'), match: '/administration/dean-eitp' },
  { ...hero('Dean of R&D@RGUKT-AP'), match: '/administration/dean-rd' },
  { ...hero('IQAC@RGUKT-AP'), match: '/administration/iqac' },
  { ...hero('Dean of Student Welfare@RGUKT-AP'), match: '/administration/dean-student-welfare' },
  { ...hero('Dean of Student Welfare@RGUKT-AP'), match: '/administration/dean-student-affairs' },
  { ...hero('Finance Officer@RGUKT-AP'), match: '/administration/finance-officer' },
  { ...hero('Sports Board@RGUKT-AP'), match: '/administration/sports-board' },
  {
    ...hero('Admissions@RGUKT-AP'),
    match: '/admissions',
    quote: 'Empowering <strong>rural youth</strong> with world-class technical education.',
  },
  { ...hero('Admissions2025@RGUKT-AP'), match: '/admissions/2025' },
  { ...hero('Admissions2026@RGUKT-AP'), match: '/admissions/2026' },
  { ...hero('PGAdmissions@RGUKT-AP'), match: '/admissions/postgraduate' },
  { ...hero('DoctoralAdmissions@RGUKT-AP'), match: '/admissions/doctoral' },
  { ...hero('Eligibility@RGUKT-AP'), match: '/admissions/eligibility' },
  { ...hero('ApplicationProcess@RGUKT-AP'), match: '/admissions/process' },
  { ...hero('FeeStructure@RGUKT-AP'), match: '/admissions/fees' },
  { ...studentHero('Students@RGUKT-AP'), match: '/students' },
  { ...studentHero('Scholarships@RGUKT-AP'), match: '/students/scholarships' },
  { ...studentHero('Medal Information@RGUKT-AP'), match: '/students/medals' },
  { ...studentHero('Career Growth@RGUKT-AP'), match: '/students/career-growth' },
  { ...studentHero('Quantum Computing Lab@RGUKT-AP'), match: '/students/quantum-lab' },
  { ...studentHero('Anti Ragging@RGUKT-AP'), match: '/students/anti-ragging' },
  { ...studentHero('Internal Complaint Committee@RGUKT-AP'), match: '/students/icc' },
  { ...studentHero('Women Empowerment@RGUKT-AP'), match: '/students/women-empowerment' },
  { ...studentHero('Cultural Activities@RGUKT-AP'), match: '/students/cultural' },
  { ...studentHero('Sports@RGUKT-AP'), match: '/students/sports' },
  { ...studentHero('Community Activities@RGUKT-AP'), match: '/students/community' },
  { ...studentHero('Alumni Engagement@RGUKT-AP'), match: '/students/alumni-engagement' },
  { ...researchHero('Research@RGUKT-AP'), match: '/research' },
  { ...researchHero('Research Head@RGUKT-AP'), match: '/research/head' },
  { ...researchHero('Ethics for Research@RGUKT-AP'), match: '/research/ethics' },
  { ...researchHero('Thrust Areas@RGUKT-AP'), match: '/research/thrust-areas' },
  { ...researchHero('Research Guidelines@RGUKT-AP'), match: '/research/guidelines' },
  { ...researchHero('Collaboration MoUs@RGUKT-AP'), match: '/research/mous' },
  { ...researchHero('Research Advisory Committee@RGUKT-AP'), match: '/research/advisory-committee' },
  { ...researchHero('Training & Placements@RGUKT-AP'), match: '/placements' },
  { ...researchHero('Alumni@RGUKT-AP'), match: '/alumni' },
  { ...researchHero('Contact Us@RGUKT-AP'), match: '/contact' },
  { ...researchHero('Careers@RGUKT-AP'), match: '/careers' },
  { ...researchHero('Tenders@RGUKT-AP'), match: '/tenders' },
  { ...hero('Announcements@RGUKT-AP'), match: '/announcements' },
  { ...hero('News@RGUKT-AP'), match: '/news' },
  { ...hero('Gallery@RGUKT-AP'), match: '/gallery' },
  { ...researchHero('IQAC@RGUKT-AP'), match: '/iqac' },
];

/** Campus profile pages (About nav) */
const CAMPUS_HERO_CONFIGS: PageHeroConfig[] = CAMPUSES
  .filter(c => c.path.startsWith('/campus/'))
  .map(c => ({
    match: c.path,
    ...hero(`${c.heroTitle}@RGUKT-AP`, { bgImage: c.image, titleImage: c.image }),
  }));

/** Officer profile pages */
const OFFICER_HERO_CONFIGS: PageHeroConfig[] = OFFICER_PROFILES.map(o => ({
  match: o.path,
  ...hero(`${o.heroTitle}@RGUKT-AP`),
}));

/** Auto-generated heroes for remaining content sub-pages */
const CONTENT_HERO_CONFIGS: PageHeroConfig[] = SITE_PAGE_PATHS.map(path => {
  const page = getSitePage(path)!;
  return {
    match: path,
    ...hero(page.heroTitle),
  };
});

export const PAGE_HERO_CONFIGS: PageHeroConfig[] = [
  ...CORE_HERO_CONFIGS,
  ...CAMPUS_HERO_CONFIGS,
  ...OFFICER_HERO_CONFIGS,
  ...CONTENT_HERO_CONFIGS,
];

export function getPageHeroConfig(pathname: string): PageHeroProps | null {
  const found = PAGE_HERO_CONFIGS.find(c => c.match === pathname);
  if (!found) return null;
  const { match: _, ...props } = found;
  return props;
}

export function isInnerPageRoute(pathname: string): boolean {
  return pathname !== '/' && !pathname.startsWith('/nuzvid') && getPageHeroConfig(pathname) !== null;
}
