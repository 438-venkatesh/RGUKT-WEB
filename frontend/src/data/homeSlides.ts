export type HeroSlide = {
  id: number;
  image: string;
  caption: string;
  sub?: string;
};

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    image: '/hero/hero-convocation.jpg',
    caption: 'Excellence Through Rural Education',
  },
  {
    id: 2,
    image: '/gallery/gallery-12.jpg',
    caption: 'Honouring Excellence at VI Convocation',
  },
  {
    id: 3,
    image: '/gallery/gallery-7.jpg',
    caption: 'Learning by Doing — Classroom to Career',
  },
  {
    id: 4,
    image: '/gallery/gallery-1.jpg',
    caption: 'Four Campuses · One Mission · Rural India',
  },
];

export const CAMPUS_QUICK_LINKS = [
  { name: 'Nuzvid',     href: '/nuzvid',                 variant: 'light' as const, icon: 'campus' },
  { name: 'RK Valley',  href: 'https://rguktrkv.ac.in',  variant: 'red'   as const, icon: 'campus' },
  { name: 'Ongole',     href: 'https://rguktong.ac.in',  variant: 'light' as const, icon: 'campus' },
  { name: 'Srikakulam', href: 'https://rguktsklm.ac.in', variant: 'red'   as const, icon: 'campus' },
];

export const ANNOUNCEMENTS = [
  { title: 'Admissions 2026 — Applications Now Open', href: '/admissions/2026', featured: true, image: '/campuses/ongole.jpg' },
  { title: 'VI Convocation 2025 — Photo Gallery Released', href: '/gallery' },
  { title: 'NPTEL Certifications Milestone — May 2025', href: '/news', badge: 'NEW' },
  { title: 'Quantum Valley Hackathon 2025 Results', href: '/news' },
  { title: 'Entrepreneurship Education FDP Announced', href: '/announcements' },
  { title: 'UPSC Civil Services Achievers — Apr 2025', href: '/news', badge: 'NEW' },
];

export const ACADEMIC_UNITS = [
  { label: 'Departments', href: '/academics/undergraduate', icon: 'building' },
  { label: 'Centres',     href: '/research',             icon: 'atom' },
  { label: 'Schools',     href: '/academics',            icon: 'school' },
  { label: 'Campuses',    href: '/#campuses',            icon: 'campus' },
];

export const UPCOMING_EVENTS = [
  { title: 'Admissions Counselling 2026', date: 'Sep 15, 2026' },
  { title: 'Quantum Valley Hackathon Finals', date: 'Aug 02, 2026' },
  { title: 'Faculty Development Programme', date: 'Jul 14, 2026' },
  { title: 'Alumni Homecoming Week', date: 'Mar 05, 2026' },
];

export const LATEST_NEWS = [
  { title: 'UPSC Civil Services Success Story', image: '/gallery/gallery-1.jpg', href: '/news' },
  { title: 'MoU Signed with APEWIDC for Industry Training', image: '/gallery/gallery-2.jpg', href: '/news' },
  { title: 'NITI Aayog Member Addresses Students', image: '/gallery/gallery-3.jpg', href: '/news' },
];

export const FAQS = [
  {
    q: 'What is the eligibility for RGUKT-AP admissions?',
    a: 'Candidates must have passed 10th standard from a rural background in Andhra Pradesh and meet the age criteria specified in the admissions notification.',
  },
  {
    q: 'How many campuses does RGUKT-AP have?',
    a: 'RGUKT-AP has four campuses — Nuzvid, RK Valley, Ongole, and Srikakulam — each offering integrated B.Tech programmes.',
  },
  {
    q: 'Is RGUKT-AP recognised by UGC?',
    a: 'Yes. RGUKT-AP is established by the Govt. of Andhra Pradesh and recognised under Section 2(f) and 12(B) of the UGC Act, 1956.',
  },
  {
    q: 'How can I contact the admissions office?',
    a: 'Call the Admissions Helpline at 1800-425-2977 or visit the Admissions page for campus-wise contact details.',
  },
];
