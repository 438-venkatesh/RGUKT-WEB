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

export const ABOUT_FOUNDING = [
  'Rajiv Gandhi University of Knowledge Technologies (RGUKT) was established by the Government of Andhra Pradesh through Act No. 18 of 2008. Two original campuses were set up at Nuzvid (Krishna District) and RK Valley (Kadapa District). Two additional campuses were established in Ongole and Srikakulam in 2016.',
  'RGUKT offers a six-year integrated programme (two years of pre-university course and four years of engineering) in fully residential mode — the first of its kind in the country. Admissions are based on Class 10 merit, with additional weightage for students from government schools in Andhra Pradesh. About 90% of students are gifted rural youth who may otherwise be deprived of high-quality technological education.',
  'The university is recognised under Section 2(f) and 12(B) of the UGC Act, 1956 and accredited by NAAC. RGUKT currently operates four fully residential campuses with approximately 26,000 students in the integrated PUC cum B.Tech programme, and offers M.Tech and doctoral programmes at select campuses.',
];

export type AboutObjective = {
  text: string;
  icon: 'education' | 'skills' | 'values' | 'tech' | 'humanities' | 'innovation' | 'industry' | 'ict';
};

export const ABOUT_OBJECTIVES: AboutObjective[] = [
  { icon: 'education', text: 'Provide high-quality professional and technical education to the rural youth of Andhra Pradesh.' },
  { icon: 'skills', text: 'Impart broad skills in each student for Learning to Learn, Learning to Think, and Learning to Live.' },
  { icon: 'values', text: 'Reinforce core values of integrity, respect for all, and environmental responsibility.' },
  { icon: 'tech', text: 'Disseminate and advance knowledge in emerging fields such as Information Technology and Nanotechnology.' },
  { icon: 'humanities', text: 'Offer integrated courses in Humanities, Social Sciences, and interdisciplinary areas for broad-based education.' },
  { icon: 'innovation', text: 'Function as a resource centre for knowledge management and entrepreneurship in emerging technologies.' },
  { icon: 'industry', text: 'Establish strong industry linkages and align teaching and research with national and global needs.' },
  { icon: 'ict', text: 'Leverage ICT to scale learning environments through learner-centric pedagogy and personal computing access.' },
];

export const ABOUT_LEADERSHIP = [
  {
    name: 'Prof. (Dr.) Kotha Madhu Murthy',
    role: 'Chancellor',
    note: 'Chairman, Andhra Pradesh State Council of Higher Education (APSCHE)',
    photo: '/people/chancellor.jpg',
    href: '/administration/chancellor',
  },
  {
    name: 'Prof. Maddali Lakshmi Narayana Rao',
    role: 'Vice-Chancellor',
    note: 'Professor (HAG), Department of Chemistry, IIT Kanpur',
    photo: '/people/vice-chancellor.jpg',
    href: '/administration/vice-chancellor',
  },
  {
    name: 'Dr. Amarendra Kumar Sandra',
    role: 'Registrar',
    photo: '/people/amarendra-kumar-sandra.jpg',
    href: '/administration/registrar',
  },
];

export type CampusDirector = {
  campus: string;
  name: string;
  roleLabel: string;
  photo: string;
  href: string;
  note?: string;
  email?: string;
};

export const ABOUT_CAMPUS_DIRECTORS: CampusDirector[] = [
  {
    campus: 'Nuzvid',
    name: 'Prof. M. Lakshminarayana Rao',
    roleLabel: 'In-charge Director, RGUKT Nuzvid',
    photo: '/people/vice-chancellor.jpg',
    href: '/nuzvid',
  },
  {
    campus: 'RK Valley',
    name: 'Prof. A. V. S. S. Kumara Swami Gupta',
    roleLabel: 'Director, RGUKT RK Valley',
    photo: '/people/director-rk-valley.jpg',
    href: '/campus/rk-valley',
  },
  {
    campus: 'Ongole',
    name: 'Prof. Amarendra Kumar Sandra',
    roleLabel: 'Director, RGUKT Ongole',
    photo: '/people/amarendra-kumar-sandra.jpg',
    href: '/campus/ongole',
    email: 'director@rguktong.ac.in',
  },
  {
    campus: 'Srikakulam',
    name: 'Prof. Giridhar Madras',
    roleLabel: 'Director, RGUKT-Srikakulam',
    photo: '/people/director-srikakulam.jpg',
    href: '/campus/srikakulam',
    note: 'Ph.D. (Chemical Engineering)',
    email: 'director@rguktsklm.ac.in',
  },
];

export const VMQ_CARDS = [
  {
    title: 'Vision',
    icon: 'vision' as const,
    body: 'To transform rural youth into global leaders and innovators in science, technology, and multidisciplinary areas and contribute to the maximization of the welfare of humanity.',
  },
  {
    title: 'Mission',
    icon: 'mission' as const,
    body: 'To provide quality technical education with the goal of inclusiveness in terms of access to the meritorious rural youth, who are perennially deprived of opportunities through an innovative blend of modern computer-assisted, learner-centric instructional methodology along with rigorous traditional teaching in a world-class ambience.',
  },
  {
    title: 'Quality Policy',
    icon: 'quality' as const,
    body: 'To impart world class engineering education to the students of the University through highly focused teaching–learning methodology optimising resources.',
  },
];

export type BestPractice = {
  title: string;
  points: string[];
};

export const BEST_PRACTICES: BestPractice[] = [
  {
    title: 'Unique Six-Year Integrated Programme (PUC + B.Tech)',
    points: [
      'Six-year integrated curriculum: two-year Pre-University Course followed by four-year B.Tech.',
      'Eliminates competitive entrance exams after Class 10, strengthening fundamentals before professional engineering.',
    ],
  },
  {
    title: 'ICT-Enabled Learning & Digital Education',
    points: [
      'Each student receives a laptop; teaching integrates e-learning, video lectures, and digital assessments.',
      'Expert lectures from IITs, IISc, IIITs and NPTEL courses; Problem-Based and Self-Paced Learning approaches.',
    ],
  },
  {
    title: 'Fully Residential University with Holistic Development',
    points: [
      'Fully residential campuses with hostels, healthcare, and recreational facilities.',
      'Co-curricular activities, sports, cultural events, and soft-skills training integrated into student life.',
    ],
  },
  {
    title: 'Transparent and Merit-Based Admissions',
    points: [
      'Admissions based on Class 10 merit with weightage for government-school students.',
      'Transparent, structured merit-based ranking under the Mandal best model.',
    ],
  },
  {
    title: 'Industry–Academia Collaboration and Internships',
    points: [
      'Mandatory two-month Summer School; one-year internships permitted in the fourth year of B.Tech.',
      'Industry visits, MoUs, and real-world projects with leading companies and research organisations.',
    ],
  },
  {
    title: 'Research, Innovation, and Entrepreneurship',
    points: [
      'R&D centres, incubation labs, and participation in hackathons and technical symposiums.',
      'Entrepreneurship and Incubation Cell supports student startups and faculty-led research projects.',
    ],
  },
  {
    title: 'Soft Skills, Communication, and Employability',
    points: [
      'English proficiency, group discussions, and placement training including mock interviews and aptitude tests.',
      'Career Development and Placement Cells (CDPCs) coordinate with recruiters across campuses.',
    ],
  },
  {
    title: 'Student-Centric Policies and Welfare',
    points: [
      'Free education, food, uniforms, and laptops as per government policy; scholarships for disadvantaged students.',
      'Health and wellness programmes and a student grievance redressal mechanism.',
    ],
  },
  {
    title: 'Green and Sustainable Campus Initiatives',
    points: [
      'Rainwater harvesting, solar energy, waste management, and tree plantation drives.',
      'Energy-efficient campus operations to reduce carbon footprint.',
    ],
  },
  {
    title: 'Continuous Curriculum Upgradation',
    points: [
      'Curriculum updated to align with industry trends; credit-based grading and interdisciplinary learning.',
      'Faculty development programmes keep pedagogy current with modern teaching methods.',
    ],
  },
];

export const RGUKT_ACT_SUMMARY = [
  'Established Rajiv Gandhi University of Knowledge Technologies by the Government of Andhra Pradesh (Act No. 18 of 2008).',
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
    established: '2008',
    district: 'Krishna District',
    address: 'NH-9, Nuzvid, Krishna District, Andhra Pradesh 521202',
    phone: '+91-8656-235092',
    email: 'info@rguktn.ac.in',
    internalHref: '/nuzvid',
    departments: ['CSE', 'ECE', 'EEE', 'Mechanical', 'Civil', 'Chemical', 'MME', 'Sciences'],
    stats: [
      { label: 'Established', value: '2008' },
      { label: 'District', value: 'Krishna' },
      { label: 'Programme', value: '6-Yr B.Tech' },
    ],
    about: 'RGUKT Nuzvid is a founding campus in Krishna District, offering the six-year integrated residential B.Tech programme with ICT-enabled pedagogy and modern laboratories.',
  },
  {
    slug: 'rk-valley',
    path: '/campus/rk-valley',
    name: 'RGUKT RK Valley',
    shortName: 'RK Valley',
    heroTitle: 'RKValley',
    image: '/campuses/rk-valley.jpg',
    established: '2008',
    district: 'YSR Kadapa District',
    address: 'Idupulapaya, Vempalli Mandal, Kadapa District, AP 516330',
    phone: '+91-8565-249202',
    email: 'info@rguktrkv.ac.in',
    website: 'https://rguktrkv.ac.in',
    departments: ['CSE', 'ECE', 'EEE', 'Mechanical', 'Civil', 'Chemical'],
    stats: [
      { label: 'Established', value: '2008' },
      { label: 'District', value: 'Kadapa' },
      { label: 'Programme', value: '6-Yr B.Tech' },
    ],
    about: 'RK Valley at Idupulapaya is a founding campus envisioned by Dr. Y.S. Rajasekhara Reddy to bring world-class technical education to rural Andhra Pradesh.',
  },
  {
    slug: 'srikakulam',
    path: '/campus/srikakulam',
    name: 'RGUKT Srikakulam',
    shortName: 'Srikakulam',
    heroTitle: 'Srikakulam',
    image: '/campuses/srikakulam.jpg',
    established: '2016',
    district: 'Srikakulam District',
    address: 'SM Puram, Etcherla Mandal, Srikakulam District, AP 532402',
    phone: '+91-8942-240700',
    email: 'info@rguktsklm.ac.in',
    website: 'https://rguktsklm.ac.in',
    departments: ['CSE', 'ECE', 'EEE', 'Mechanical', 'Civil'],
    stats: [
      { label: 'Established', value: '2016' },
      { label: 'District', value: 'Srikakulam' },
      { label: 'Programme', value: '6-Yr B.Tech' },
    ],
    about: 'The Srikakulam campus serves north coastal Andhra Pradesh with fully residential six-year integrated engineering education for gifted rural students.',
  },
  {
    slug: 'ongole',
    path: '/campus/ongole',
    name: 'RGUKT Ongole',
    shortName: 'Ongole',
    heroTitle: 'Ongole',
    image: '/campuses/ongole.jpg',
    established: '2016',
    district: 'Prakasam District',
    address: 'Rao & Naidu Campus, Ongole, Prakasam District, AP 523001',
    phone: '+91-8592-223133',
    email: 'info@rguktong.ac.in',
    website: 'https://rguktong.ac.in',
    departments: ['CSE', 'ECE', 'EEE', 'Mechanical', 'Civil'],
    stats: [
      { label: 'Established', value: '2016' },
      { label: 'District', value: 'Prakasam' },
      { label: 'Programme', value: '6-Yr B.Tech' },
    ],
    about: 'The Ongole campus extends RGUKT-AP\'s mission to Prakasam district with modern laboratories, residential facilities, and industry collaboration programmes.',
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
