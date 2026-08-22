/** About section content — aligned with rgukt.in */

export type AboutDocument = {
  title: string;
  file: string;
  size: string;
  year?: string;
};

export const ABOUT_DOCUMENTS = {
  strategicPlan: {
    title: 'Strategic Five Year Plan (2025–2029)',
    file: '/docs/strategic-plan-2025-2029.pdf',
    size: '1.2 MB',
  },
  rguktAct: {
    title: 'RGUKT Act, 2008',
    file: '/docs/rgukt-act-2008.pdf',
    size: '840 KB',
  },
  annualReports: [
    { title: 'Annual Report 2024–25', file: '/docs/annual-report-2024-25.pdf', size: '2.4 MB', year: '2024–25' },
    { title: 'Annual Report 2023–24', file: '/docs/annual-report-2023-24.pdf', size: '2.1 MB', year: '2023–24' },
    { title: 'Annual Report 2022–23', file: '/docs/annual-report-2022-23.pdf', size: '1.9 MB', year: '2022–23' },
  ] as AboutDocument[],
};

export const VMQ_CARDS = [
  {
    title: 'Vision',
    body: 'To be a globally respected institution that empowers gifted rural youth of Andhra Pradesh to lead in technology, innovation, and nation-building at the highest levels.',
  },
  {
    title: 'Mission',
    body: 'To identify rural talent at the pre-university stage and provide free, residential, IIT-level education — nurturing engineers, researchers, entrepreneurs, and leaders who serve society.',
  },
  {
    title: 'Quality Policy',
    body: 'RGUKT-AP is committed to continuous improvement in teaching, learning, research and governance through IQAC-led processes, stakeholder feedback, and NAAC-aligned quality benchmarks across all campuses.',
  },
];

export const BEST_PRACTICES = [
  {
    title: 'Mentorship-Based Learning',
    body: 'Every student is paired with a faculty mentor who monitors academic progress, career aspirations, and personal wellbeing throughout the six-year integrated programme.',
  },
  {
    title: 'Industry-Integrated Curriculum',
    body: 'Syllabi are co-designed with industry partners and reviewed bi-annually to reflect current technologies, tools, and workplace expectations.',
  },
  {
    title: 'Rural Outreach Admissions',
    body: 'Dedicated counselling camps are conducted in rural mandals to guide eligible SSC graduates and their families through the application and counselling process.',
  },
  {
    title: 'Free & Fully Residential Education',
    body: 'Eligible admitted students receive tuition, accommodation, meals, and study materials at no cost — removing financial barriers to higher education.',
  },
  {
    title: 'Learning by Doing',
    body: 'Laboratory-intensive pedagogy, project-based learning, and summer internships ensure students gain practical skills alongside theoretical foundations.',
  },
  {
    title: 'Cross-Campus Collaboration',
    body: 'Shared academic policies, inter-campus faculty exchange, and unified examination systems maintain consistent quality across Nuzvid, RK Valley, Srikakulam and Ongole.',
  },
];

export const STRATEGIC_PLAN_PRIORITIES = [
  { title: 'Research & Innovation', body: 'Expand quantum computing, AI/ML labs and funded research projects in partnership with Amaravati Quantum Valley and national agencies.' },
  { title: 'Infrastructure', body: 'Upgrade hostels, laboratories, smart classrooms and campus connectivity across all four locations.' },
  { title: 'Industry Partnerships', body: 'Deepen MoUs with industry, startups and philanthropic organisations for placements, internships and skill development.' },
  { title: 'Student Outcomes', body: 'Strengthen GATE, UPSC and higher-studies coaching; track graduate outcomes and alumni success.' },
  { title: 'Quality Assurance', body: 'Advance NAAC accreditation, academic audits and digital governance through IQAC.' },
];

export const RGUKT_ACT_SUMMARY = [
  'Established Rajiv Gandhi University of Knowledge Technologies by the Government of Andhra Pradesh (2008).',
  'Mandate to provide free residential education to gifted rural youth through a six-year integrated B.Tech programme.',
  'Defines governance structure including Chancellor, Vice Chancellor, Registrar and campus directors.',
  'Prescribes reservation and admission policies for rural students who complete 10th standard in Andhra Pradesh.',
  'Recognised under Section 2(f) and 12(B) of the UGC Act, 1956.',
];

export type CampusInfo = {
  slug: string;
  path: string;
  name: string;
  shortName: string;
  heroTitle: string;
  image: string;
  galleryImages: string[];
  established: string;
  district: string;
  address: string;
  phone: string;
  email: string;
  website?: string;
  internalHref?: string;
  departments: string[];
  stats: { label: string; value: string }[];
  about: string;
};

export const CAMPUSES: CampusInfo[] = [
  {
    slug: 'nuzvid',
    path: '/nuzvid',
    name: 'RGUKT Nuzvid',
    shortName: 'Nuzvid',
    heroTitle: 'Nuzvid',
    image: '/campuses/nuzvid.jpg',
    galleryImages: ['/campuses/nuzvid.jpg', '/gallery/gallery-1.jpg', '/gallery/gallery-7.jpg'],
    established: '2008',
    district: 'Krishna District',
    address: 'NH-9, Nuzvid, Krishna District, Andhra Pradesh 521202',
    phone: '+91-8656-235092',
    email: 'info@rguktn.ac.in',
    internalHref: '/nuzvid',
    departments: ['CSE', 'ECE', 'EEE', 'Mechanical', 'Civil', 'Chemical', 'MME', 'Sciences'],
    stats: [
      { label: 'Students', value: '3,500+' },
      { label: 'Departments', value: '7' },
      { label: 'Established', value: '2008' },
    ],
    about: 'The Nuzvid campus is a major centre for RGUKT-AP in the Krishna region, hosting the undergraduate quantum computing laboratory and leading convocation and national event hosting.',
  },
  {
    slug: 'rk-valley',
    path: '/campus/rk-valley',
    name: 'RGUKT RK Valley',
    shortName: 'RK Valley',
    heroTitle: 'RKValley',
    image: '/campuses/rk-valley.jpg',
    galleryImages: ['/campuses/rk-valley.jpg', '/hero/hero-convocation.jpg', '/gallery/gallery-12.jpg'],
    established: '2008',
    district: 'Kadapa District (Idupulapaya)',
    address: 'Idupulapaya, Vempalli Mandal, Kadapa District, AP 516330',
    phone: '+91-8565-249202',
    email: 'info@rguktrkv.ac.in',
    website: 'https://rguktrkv.ac.in',
    departments: ['CSE', 'ECE', 'EEE', 'Mechanical', 'Civil', 'Chemical'],
    stats: [
      { label: 'Students', value: '3,200+' },
      { label: 'Departments', value: '6' },
      { label: 'Established', value: '2008' },
    ],
    about: 'RK Valley at Idupulapaya is the founding campus of RGUKT-AP, envisioned by Dr. Y.S. Rajasekhara Reddy to bring world-class technical education to rural Andhra Pradesh.',
  },
  {
    slug: 'srikakulam',
    path: '/campus/srikakulam',
    name: 'RGUKT Srikakulam',
    shortName: 'Srikakulam',
    heroTitle: 'Srikakulam',
    image: '/campuses/srikakulam.jpg',
    galleryImages: ['/campuses/srikakulam.jpg', '/gallery/gallery-7.jpg', '/gallery/gallery-6.jpg'],
    established: '2009',
    district: 'Srikakulam District',
    address: 'Etcherla, Srikakulam District, Andhra Pradesh 532410',
    phone: '+91-8942-244102',
    email: 'info@rguktsklm.ac.in',
    website: 'https://rguktsklm.ac.in',
    departments: ['CSE', 'ECE', 'EEE', 'Mechanical', 'Civil'],
    stats: [
      { label: 'Students', value: '2,800+' },
      { label: 'Departments', value: '5' },
      { label: 'Established', value: '2009' },
    ],
    about: 'The Srikakulam campus serves north coastal Andhra Pradesh, providing fully residential six-year integrated engineering education to gifted rural students.',
  },
  {
    slug: 'ongole',
    path: '/campus/ongole',
    name: 'RGUKT Ongole',
    shortName: 'Ongole',
    heroTitle: 'Ongole',
    image: '/campuses/ongole.jpg',
    galleryImages: ['/campuses/ongole.jpg', '/gallery/gallery-3.jpg', '/gallery/gallery-9.jpg'],
    established: '2009',
    district: 'Prakasam District',
    address: 'Vejendla, Ongole, Prakasam District, Andhra Pradesh 523272',
    phone: '+91-8592-224302',
    email: 'info@rguktong.ac.in',
    website: 'https://rguktong.ac.in',
    departments: ['CSE', 'ECE', 'EEE', 'Mechanical', 'Civil'],
    stats: [
      { label: 'Students', value: '2,400+' },
      { label: 'Departments', value: '5' },
      { label: 'Established', value: '2009' },
    ],
    about: 'The Ongole campus extends RGUKT-AP\'s mission to Prakasam district, with modern laboratories, hostels and active placement and industry collaboration programmes.',
  },
];

export const ABOUT_NAV = [
  { label: 'About RGUKT', href: '/about' },
  { label: 'Vision, Mission & Quality Policy', href: '/about/vision-mission' },
  { label: 'Best Practices', href: '/about/best-practices' },
  { label: 'Organization Chart', href: '/about/orgchart' },
  { label: 'Strategic Plan (2025–2029)', href: '/about/strategic-plan' },
  { label: 'Annual Report', href: '/about/annual-report' },
  { label: 'RGUKT ACT', href: '/about/rgukt-act' },
  { label: 'RGUKT Nuzvid Campus', href: '/nuzvid' },
  { label: 'RGUKT RK Valley Campus', href: '/campus/rk-valley' },
  { label: 'RGUKT Srikakulam Campus', href: '/campus/srikakulam' },
  { label: 'RGUKT Ongole Campus', href: '/campus/ongole' },
];

export function getCampusBySlug(slug: string): CampusInfo | undefined {
  return CAMPUSES.find(c => c.slug === slug);
}

export function getCampusByPath(path: string): CampusInfo | undefined {
  return CAMPUSES.find(c => c.path === path);
}

export const ABOUT_SUB_PATHS = [
  '/about/vision-mission',
  '/about/best-practices',
  '/about/strategic-plan',
  '/about/rgukt-act',
  '/about/annual-report',
];

export const CAMPUS_PATHS = CAMPUSES.filter(c => c.path.startsWith('/campus/')).map(c => c.path);
