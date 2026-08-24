export interface VerifiedCampus {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  district: string;
  locationTitle: string;
  established: string;
  studentStrength: string;
  image: string;
  verifiedBranches: string[];
  campusUrl: string;
  officialSite: string;
  overview: string;
  academicHighlights: string[];
}

export const VERIFIED_CAMPUSES: VerifiedCampus[] = [
  {
    id: 'nuzvid',
    slug: 'nuzvid',
    name: 'RGUKT Nuzvid Campus',
    shortName: 'Nuzvid',
    district: 'Eluru / Krishna District',
    locationTitle: 'Mylavaram Road, Nuzvid, AP 521202',
    established: '2008',
    studentStrength: '3,500+',
    image: '/campuses/nuzvid.jpg',
    verifiedBranches: ['CSE', 'ECE', 'EEE', 'Mechanical', 'Civil', 'Chemical', 'MME'],
    campusUrl: '/nuzvid',
    officialSite: 'https://www.rguktn.ac.in',
    overview: 'The Nuzvid campus is a premier founding constituent institute of RGUKT-AP, featuring state-of-the-art laboratory facilities across all seven engineering branches, the undergraduate quantum lab, and central characterization suites.',
    academicHighlights: [
      'All 7 B.Tech Engineering Branches active',
      'Undergraduate Quantum Computing Laboratory',
      'Advanced Materials Characterization Center',
      'Dedicated M.Tech in AI & ML and AMT',
    ],
  },
  {
    id: 'rk-valley',
    slug: 'rk-valley',
    name: 'RGUKT RK Valley Campus',
    shortName: 'RK Valley',
    district: 'YSR Kadapa District (Idupulapaya)',
    locationTitle: 'Idupulapaya, Vempalli Mandal, AP 516330',
    established: '2008',
    studentStrength: '3,200+',
    image: '/campuses/rk-valley.jpg',
    verifiedBranches: ['CSE', 'ECE', 'EEE', 'Mechanical', 'Civil', 'Chemical'],
    campusUrl: '/campus/rk-valley',
    officialSite: 'https://www.rguktrkv.ac.in',
    overview: 'Located amidst the scenic hills of Idupulapaya, RK Valley offers expansive residential infrastructure, high-performance computing centers, solar energy microgrids, and extensive academic engineering facilities.',
    academicHighlights: [
      '6 Core B.Tech Engineering Branches',
      'Renewable Solar Energy & Smart Microgrid Research',
      'Advanced CAD/CAM & Fluid Dynamics Suites',
      'Extensive Residential ICT Infrastructure',
    ],
  },
  {
    id: 'srikakulam',
    slug: 'srikakulam',
    name: 'RGUKT Srikakulam Campus',
    shortName: 'Srikakulam',
    district: 'Srikakulam District (Etcherla)',
    locationTitle: 'S.M. Puram, Etcherla, Srikakulam, AP 532410',
    established: '2016',
    studentStrength: '2,800+',
    image: '/campuses/srikakulam.jpg',
    verifiedBranches: ['CSE', 'ECE', 'EEE', 'Mechanical', 'Civil'],
    campusUrl: '/campus/srikakulam',
    officialSite: 'https://rguktsklm.ac.in',
    overview: 'Serving North Coastal Andhra Pradesh, the Srikakulam campus delivers modern residential education with a dedicated faculty cohort in five core engineering disciplines and modern smart ICT classrooms.',
    academicHighlights: [
      '5 Core B.Tech Disciplines (CSE, ECE, EEE, MECH, CIVIL)',
      'Power Systems & Smart Grid Simulation Labs',
      'Applied Data Science & Machine Learning Research',
      'Rapidly Growing Residential Campus Facility',
    ],
  },
  {
    id: 'ongole',
    slug: 'ongole',
    name: 'RGUKT Ongole Campus',
    shortName: 'Ongole',
    district: 'Prakasam District (Santhanuthalapadu)',
    locationTitle: 'Santhanuthalapadu, Ongole, AP 523225',
    established: '2016',
    studentStrength: '2,400+',
    image: '/campuses/ongole.jpg',
    verifiedBranches: ['CSE', 'ECE', 'EEE', 'Mechanical', 'Civil'],
    campusUrl: '/campus/ongole',
    officialSite: 'https://www.rguktong.ac.in',
    overview: 'The Ongole campus serves the Prakasam and South Coastal region, offering the 6-year integrated B.Tech model across five key engineering streams with intensive laboratory and computing training.',
    academicHighlights: [
      '5 Core B.Tech Disciplines (CSE, ECE, EEE, MECH, CIVIL)',
      'High-Speed Digital Computing & Cloud Classrooms',
      'Modern IoT Hardware & Embedded Systems Labs',
      'Dedicated Mentor-Led Pedagogy and Placement Training',
    ],
  },
];
