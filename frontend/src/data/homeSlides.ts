/** Slides, quick links, and data for the Home page */

export type HeroSlide = {
  id: string;
  image: string;
  caption: string;
};

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'convocation',
    image: '/hero/hero-convocation.jpg',
    caption: 'Excellence Through Rural Education',
  },
  {
    id: 'vi-convocation',
    image: '/gallery/gallery-12.jpg',
    caption: 'Honouring Excellence at VI Convocation',
  },
  {
    id: 'classroom-career',
    image: '/gallery/gallery-7.jpg',
    caption: 'Learning by Doing — Classroom to Career',
  },
  {
    id: 'four-campuses',
    image: '/gallery/gallery-1.jpg',
    caption: 'Four Campuses · One Mission · Rural India',
  },
];

export const CAMPUS_QUICK_LINKS = [
  { name: 'Nuzvid',     href: '/nuzvid',                variant: 'light' as const },
  { name: 'RK Valley',  href: 'https://rguktrkv.ac.in', variant: 'red' as const },
  { name: 'Ongole',     href: 'https://rguktong.ac.in', variant: 'light' as const },
  { name: 'Srikakulam', href: 'https://rguktsklm.ac.in', variant: 'red' as const },
];

export const ANNOUNCEMENTS = [
  {
    title: 'Admissions for AY2026-27 schedule is announced. Please check admissions portal for further details.',
    href: '/admissions/2026',
    badge: 'Admissions 2026',
    featured: true,
    image: '/admissions/admissions-banner.jpg',
  },
  {
    title: 'Academic Session 2026–27 commenced across Nuzvid, RK Valley, Ongole, and Srikakulam campuses.',
    href: '/academics/calendar',
    badge: 'Academics',
  },
  {
    title: 'Registrations are Open for admissions 2026.',
    href: '/admissions/2026',
    badge: 'Notification',
  },
];

export const ACADEMIC_UNITS = [
  { label: 'Undergraduate', href: '/academics/undergraduate', icon: 'ug' },
  { label: 'Postgraduate',  href: '/academics/postgraduate',  icon: 'pg' },
  { label: 'Research',      href: '/research',                icon: 'research' },
  { label: 'Regulations',   href: '/academics/regulations',   icon: 'regulations' },
  { label: 'Schools',       href: '/academics',               icon: 'school' },
  { label: 'Campuses',      href: '/#campuses',               icon: 'campus' },
];

export const UPCOMING_EVENTS = [
  { title: 'Quantum Valley Technical Symposium', date: 'Sep 02, 2026' },
  { title: 'Faculty Development Programme in AI/ML', date: 'Sep 14, 2026' },
  { title: 'Annual Alumni Homecoming Meet', date: 'Oct 05, 2026' },
];

export const LATEST_NEWS = [
  { title: 'UPSC Civil Services Success Story from RGUKT', image: '/gallery/gallery-1.jpg', href: '/news' },
  { title: 'MoU Signed with Premier Research Labs for Student Internships', image: '/gallery/gallery-2.jpg', href: '/news' },
  { title: 'National Technology Day Celebrated Across 4 Campuses', image: '/gallery/gallery-3.jpg', href: '/news' },
];

export const FAQS = [
  {
    q: 'What is the eligibility for RGUKT-AP undergraduate admissions?',
    a: 'Candidates must have passed 10th standard (SSC) in the first attempt. A 4% deprivation score is added for students who studied in non-residential government schools in Andhra Pradesh.',
  },
  {
    q: 'How many campuses does RGUKT-AP have?',
    a: 'RGUKT-AP has four constituent campuses — Nuzvid (Eluru), RK Valley (YSR Kadapa), Ongole (Prakasam), and Srikakulam — each offering integrated 6-year B.Tech programmes.',
  },
  {
    q: 'Is RGUKT-AP recognised by UGC?',
    a: 'Yes. RGUKT-AP is established by the Govt. of Andhra Pradesh, recognised under Section 2(f) and 12(B) of the UGC Act 1956, and accredited by NAAC with B+ Grade.',
  },
  {
    q: 'How can I contact the admissions helpdesk?',
    a: 'Email admissions@rgukt.in or call helplines 97035 42597 / 97054 72597 on working days (10:00 AM – 1:00 PM and 2:00 PM – 5:00 PM).',
  },
];
