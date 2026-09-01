/**
 * RGUKT Nuzvid Central Library — 100% Verified Official Data
 * Primary Source: https://rguktn.ac.in/library/
 * Subpages verified:
 * - opac.php, facilities.php, general-rules.php, floorwise_plan.php,
 *   rgukt-content.php, contact-us.php, circulation.php, staff-details.php
 */

export interface LibraryStat {
  value: string;
  label: string;
  sub?: string;
  icon?: string;
}

export interface LibraryObjective {
  title: string;
  detail: string;
  icon: string;
}

export interface LibraryFacility {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: 'core' | 'support' | 'services';
}

export interface EResource {
  name: string;
  provider: string;
  description: string;
  href: string;
  isInternal?: boolean;
  category: 'journal' | 'ebook' | 'courseware' | 'repository';
  badge: string;
}

export interface ContentDomainLink {
  sNo: number;
  year: string;
  title: string;
  desc: string;
  url: string;
  code: string;
}

export interface FloorRoom {
  sNo: number;
  roomNo: string;
  name: string;
  category: 'Labs' | 'Reading Rooms' | 'Subject Wings' | 'IT & Servers' | 'Administration' | 'Utilities & Stores';
  description?: string;
}

export interface FloorPlan {
  floorId: string;
  floorName: string;
  subtitle: string;
  image?: string;
  rooms: FloorRoom[];
}

export interface CirculationRule {
  memberCategory: string;
  booksIssued: number;
  firstRenewalOnline: string;
  secondRenewalInPerson: string;
  eligibleGroup: string;
}

export interface StaffMember {
  sNo: number;
  name: string;
  designation: string;
  roleDescription: string;
  phone?: string;
  email?: string;
}

/* ── 1. Hero & Overview ── */

export const LIBRARY_META = {
  title: 'Central Library',
  subtitle:
    'A modern learning, reading, research and digital resource space supporting the academic community of RGUKT Nuzvid.',
  plinthArea: '85,289 sq. ft.',
  buildingStructure: 'Dedicated 3-Storey Central Library Building',
  overviewParagraphs: [
    'The Central Library supports the teaching and research programs of the Institute and provides facilities for general reading and disseminates information according to the requirements of the users. It is housed in a separate building with a plinth area of 85,289 sq. ft.',
    'The Library is exposed to vast knowledge on various disciplines through electronic resources and printed copies. The Library is well-developed to meet the needs of the students and the faculty. Video recordings are prepared in well-established studios within RGUKT.',
    'Students have open access to the Library to make use of books and reference collections. High-speed online resources and digitized academic materials are also produced and curated by RGUKT to comprehensively serve the learning needs of students and faculty members.',
  ],
};

/* ── 2. Verified Key Highlights & Stats ── */

export const LIBRARY_STATS: LibraryStat[] = [
  {
    value: '85,289',
    label: 'Sq. Ft. Plinth Area',
    sub: 'Dedicated standalone building',
    icon: 'building',
  },
  {
    value: '3 Floors',
    label: 'Academic Wings',
    sub: 'Ground, First & Second Floors',
    icon: 'layers',
  },
  {
    value: '31 Rooms',
    label: 'Dedicated Facilities',
    sub: 'Labs, reading halls, archives & stacks',
    icon: 'grid',
  },
  {
    value: '8 Platforms',
    label: 'Digital E-Resources',
    sub: 'IEEE, ASCE, ASME, Knimbus, NPTEL & NDL',
    icon: 'laptop',
  },
  {
    value: '100%',
    label: 'Open Access System',
    sub: 'Direct shelf access for all students',
    icon: 'unlock',
  },
  {
    value: 'Koha LMS',
    label: 'Automated Catalog',
    sub: 'Campus-wide OPAC search & circulation',
    icon: 'database',
  },
];

/* ── 3. Official Objectives (Verbatim from rguktn.ac.in/library/) ── */

export const LIBRARY_OBJECTIVES: LibraryObjective[] = [
  {
    title: 'Enriching Quality Education',
    detail:
      'To procure library collection as a basic requirement to enriching quality education across all academic streams.',
    icon: 'award',
  },
  {
    title: 'Comprehensive Resource Collection',
    detail:
      'The collection includes Text Books, Additional Reading Books, Reference Books, Newspapers, Magazines, and Periodicals.',
    icon: 'book-open',
  },
  {
    title: 'Encouraging Self-Learning',
    detail:
      'Fostering independent enquiry, self-directed exploration, and continuous critical thinking among students.',
    icon: 'sparkles',
  },
  {
    title: 'Extended Study Hours',
    detail:
      'Keeping the libraries accessible in the late hours after regular classroom sessions for night study and preparation.',
    icon: 'clock',
  },
  {
    title: 'Nurturing a Study Culture',
    detail:
      'Motivating students towards a disciplined, collaborative, and scholarly study culture on campus.',
    icon: 'users',
  },
  {
    title: 'Personality Development',
    detail:
      'Procuring literature on leadership, ethics, communication skills, career growth, and personality development.',
    icon: 'user-check',
  },
  {
    title: 'Library Automation',
    detail:
      'Ensuring modern library support with the help of automated cataloging, Koha management system, and digital workflows.',
    icon: 'cpu',
  },
  {
    title: 'Electronic Resources',
    detail:
      'Providing full digital access to electronic resources viz., e-Books, e-Journals, digital lecture series, and e-Content.',
    icon: 'globe',
  },
  {
    title: 'Research & Scholarly Material',
    detail:
      'Supporting faculty and student researchers with advanced journals, research labs, computational archives, and reference citations.',
    icon: 'microscope',
  },
];

/* ── 4. Official Facilities (Verbatim from facilities.php) ── */

export const LIBRARY_FACILITIES: LibraryFacility[] = [
  {
    id: 'open-access',
    name: 'Open Access System',
    description: 'Open access book browsing allowing all registered students and faculty members to freely explore physical stacks.',
    icon: 'unlock',
    category: 'core',
  },
  {
    id: 'ict-wifi',
    name: 'ICT & Wi-Fi Connectivity',
    description: 'High-speed campus Wi-Fi network and ICT terminals enabled for browsing, researching, and downloading academic materials.',
    icon: 'wifi',
    category: 'core',
  },
  {
    id: 'referencing',
    name: 'Referencing Service',
    description: 'Dedicated reference collection and staff assistance to aid complex literature queries, project research, and citation needs.',
    icon: 'search',
    category: 'services',
  },
  {
    id: 'photocopy',
    name: 'Photocopying & Reprography',
    description: 'In-house reprography service room providing photocopy and scanning facilities for reference articles and excerpts.',
    icon: 'printer',
    category: 'services',
  },
  {
    id: 'furniture',
    name: 'Comfortable Reading Furniture',
    description: 'Ergonomically designed desks, study carrels, and spacious well-lit reading halls tailored for extended study sessions.',
    icon: 'armchair',
    category: 'support',
  },
  {
    id: 'amenities',
    name: 'Drinking Water & Washrooms',
    description: 'Hygienic RO purified drinking water stations and well-maintained washroom facilities situated across the building.',
    icon: 'droplet',
    category: 'support',
  },
  {
    id: 'discussion-rooms',
    name: 'Discussion Rooms',
    description: 'Acoustically partitioned rooms designed for group discussions, peer tutoring, teamwork, and collaborative project planning.',
    icon: 'messages-square',
    category: 'core',
  },
  {
    id: 'pyq-papers',
    name: "Previous Years' Question Papers",
    description: 'Complete archives of past semester exam question papers organized by department, semester, and course.',
    icon: 'file-text',
    category: 'services',
  },
  {
    id: 'career-higher-edu',
    name: 'Career & Higher Education Info',
    description: 'Dedicated corner with competitive exam prep guides, GATE/GRE/CAT resources, scholarship alerts, and career notices.',
    icon: 'compass',
    category: 'services',
  },
  {
    id: 'newspaper-clippings',
    name: 'Newspaper Clipping Services',
    description: 'Daily curated news clippings, national dailies in multiple languages, and technical magazine press updates.',
    icon: 'newspaper',
    category: 'services',
  },
];

/* ── 5. Official E-Resources (Direct URLs verified) ── */

export const E_RESOURCES: EResource[] = [
  {
    name: 'Knimbus e-Library',
    provider: 'Knimbus / RGUKT Portal',
    description: 'Unified search portal providing one-stop remote and on-campus access to thousands of e-books, e-journals, and multimedia content.',
    href: 'https://rguktap.knimbus.com/',
    category: 'ebook',
    badge: 'Primary Portal',
  },
  {
    name: 'IEEE Xplore Digital Library',
    provider: 'IEEE',
    description: 'Premier scientific database with full-text access to IEEE transactions, journals, letters, and conference proceedings in engineering and CS.',
    href: 'https://www.ieeexplore-ieee-org-rguktap.knimbus.com/Xplore/home.jsp',
    category: 'journal',
    badge: 'Engineering & CS',
  },
  {
    name: 'ASCE Journals',
    provider: 'American Society of Civil Engineers',
    description: 'Authoritative research papers, technical notes, and peer-reviewed journals for civil, environmental, and structural engineering.',
    href: 'https://ascelibrary-org-rguktap.knimbus.com/',
    category: 'journal',
    badge: 'Civil Engineering',
  },
  {
    name: 'ASME Journals',
    provider: 'American Society of Mechanical Engineers',
    description: 'Flagship mechanical engineering repository including ASME peer-reviewed journals, robotics, thermal sciences, and manufacturing.',
    href: 'https://asmedigitalcollection-asme-org-rguktap.knimbus.com/',
    category: 'journal',
    badge: 'Mechanical Engg',
  },
  {
    name: 'NPTEL / SWAYAM',
    provider: 'MoE / IITs & IISc',
    description: 'National programme on technology enhanced learning offering hundreds of video courses, lecture notes, and certification drives.',
    href: 'https://swayam.gov.in/nc_details/NPTEL',
    category: 'courseware',
    badge: 'National Platform',
  },
  {
    name: 'National Digital Library (NDL)',
    provider: 'MoE / IIT Kharagpur',
    description: 'Virtual repository of learning resources with millions of books, articles, theses, manuscripts, and educational videos for all streams.',
    href: 'https://ndl.iitkgp.ac.in/',
    category: 'repository',
    badge: 'National Repository',
  },
  {
    name: 'e-ShodhSindhu',
    provider: 'INFLIBNET Centre',
    description: 'Consortium for higher education electronic resources providing access to peer-reviewed journals and bibliographic databases.',
    href: 'https://ess.inflibnet.ac.in/oes/index.php',
    category: 'journal',
    badge: 'Consortium',
  },
  {
    name: 'RGUKT Content Domain',
    provider: 'RGUKT Academic Intranet',
    description: 'Internal academic server hosting semester courseware, digitized lecture notes, syllabi, and faculty slides for Engineering Years 1 to 4.',
    href: 'https://rguktn.ac.in/library/rgukt-content.php',
    isInternal: true,
    category: 'courseware',
    badge: 'Campus Intranet',
  },
];

/* ── 6. RGUKT Content Domain Links (rgukt-content.php) ── */

export const CONTENT_DOMAIN_LINKS: ContentDomainLink[] = [
  {
    sNo: 1,
    year: 'Engineering Year 1',
    title: 'E1 Course Content & Multimedia Lectures',
    desc: 'Foundational engineering mathematics, basic sciences, core programming, and introductory engineering graphics repository.',
    url: 'http://engg1a.nuz.rgukt.in',
    code: 'E1 Portal',
  },
  {
    sNo: 2,
    year: 'Engineering Year 2',
    title: 'E2 Core Engineering Courseware',
    desc: 'Department-specific core engineering theory notes, lab manuals, circuit designs, and computational problem sets.',
    url: 'http://engg2a.nuz.rgukt.in',
    code: 'E2 Portal',
  },
  {
    sNo: 3,
    year: 'Engineering Year 3',
    title: 'E3 Advanced Core & Electives',
    desc: 'Advanced discipline subjects, professional elective materials, mini-project guidelines, and industry-oriented tutorials.',
    url: 'http://engg3b.nuz.rgukt.in',
    code: 'E3 Portal',
  },
  {
    sNo: 4,
    year: 'Engineering Year 4',
    title: 'E4 Capstone & Advanced Specialization',
    desc: 'Final year specialized electives, major project templates, internship documentation, and research literature guides.',
    url: 'http://engg4b.nuz.rgukt.in',
    code: 'E4 Portal',
  },
];

/* ── 7. OPAC Details (opac.php) ── */

export const OPAC_CONFIG = {
  title: 'Online Public Access Catalog (OPAC)',
  software: 'Koha Integrated Library System',
  internalIp: '10.5.50.50:8888',
  url: 'http://10.5.50.50:8888/',
  description:
    'The Library uses Koha Software for total library automation. Using this catalog, students and faculty can search and check availability of resources across the entire library collection.',
  searchFields: [
    { label: 'Title', placeholder: 'e.g. Data Structures & Algorithms, Thermodynamics...' },
    { label: 'Author', placeholder: 'e.g. Tanenbaum, Hayt, Korth...' },
    { label: 'Publisher', placeholder: 'e.g. Pearson, McGraw Hill, Wiley...' },
    { label: 'Subject Heading', placeholder: 'e.g. Computer Science, VLSI, Civil...' },
    { label: 'Keywords', placeholder: 'e.g. Machine Learning, Structural Analysis...' },
  ],
  capabilities: [
    'Real-time search across entire catalog by Title, Author, Publisher, Subject, and Keywords',
    'Automated book issue, check-in, and renewal management',
    'Automatic overdue tracking and accurate fine calculation',
    'Online book reservation and borrower history tracking',
  ],
};

/* ── 8. Official Floor-Wise Breakdown (31 Rooms across 3 Floors) ── */

export const FLOOR_PLANS: FloorPlan[] = [
  {
    floorId: 'ground',
    floorName: 'Ground Floor',
    subtitle: 'Circulation Desk, Reprography, Faculty Rooms & Departmental Reading Stacks',
    rooms: [
      { sNo: 1, roomNo: 'Room No 1', name: 'Technical Room', category: 'Administration', description: 'Cataloging, technical processing, accessioning and barcode labelling of new books.' },
      { sNo: 2, roomNo: 'Room No 2', name: 'Library Staff Room', category: 'Administration', description: 'Office workstation for library assistants and support personnel.' },
      { sNo: 3, roomNo: 'Room No 3', name: 'Faculty Reading Room', category: 'Reading Rooms', description: 'Exclusive quiet reading and research environment for university faculty members.' },
      { sNo: 4, roomNo: 'Room No 4', name: 'Reprography Services Room', category: 'Utilities & Stores', description: 'Photocopying, printing, and digital scanning facilities for students.' },
      { sNo: 5, roomNo: 'Room No 5', name: 'Library Coordinator Room', category: 'Administration', description: 'Administrative office of the Library Coordinator.' },
      { sNo: 6, roomNo: 'Room No 6', name: 'Faculty In-Charge Room', category: 'Administration', description: 'Executive chamber of the Faculty In-Charge, Library.' },
      { sNo: 7, roomNo: 'Room No 7', name: 'Store Room - I', category: 'Utilities & Stores', description: 'Ground floor archival repository and supplies storage.' },
      { sNo: 8, roomNo: 'Room No 8', name: 'ECE & CSE Room', category: 'Subject Wings', description: 'Dedicated stacks and reading tables for Electronics & Computer Science engineering books.' },
      { sNo: 9, roomNo: 'Room No 9', name: 'Physics, Chemistry & Maths Room', category: 'Subject Wings', description: 'Core basic science textbooks, reference compendiums, and problem sets.' },
      { sNo: 10, roomNo: 'Room No 10', name: 'MME, Chemical & Management Room', category: 'Subject Wings', description: 'Metallurgical, Chemical engineering, and Humanities/Management library collections.' },
      { sNo: 11, roomNo: 'Room No 11', name: 'Civil & Mechanical Room', category: 'Subject Wings', description: 'Comprehensive civil, mechanical, thermal, and design engineering stacks.' },
      { sNo: 12, roomNo: 'Room No 12', name: 'Power Room - I', category: 'Utilities & Stores', description: 'Electrical distribution and UPS power backup infrastructure for Ground Floor.' },
    ],
  },
  {
    floorId: 'first',
    floorName: 'First Floor',
    subtitle: 'Data Centre, IT Infra, Discussion Rooms, PUC Stacks & Social Welfare Stacks',
    rooms: [
      { sNo: 13, roomNo: 'Room No 13', name: 'Server Room 1', category: 'IT & Servers', description: 'Primary network routing and library software server rack.' },
      { sNo: 14, roomNo: 'Room No 14', name: 'Server Room 2 (Data Centre)', category: 'IT & Servers', description: 'High-availability campus data centre and digital repository servers.' },
      { sNo: 15, roomNo: 'Room No 15', name: 'Laptop IT Infra', category: 'IT & Servers', description: 'Student laptop service desk, OS configuration, and technical maintenance cell.' },
      { sNo: 16, roomNo: 'Room No 16', name: 'Discussion Room', category: 'Reading Rooms', description: 'Collaborative study space for group academic discussions and peer learning.' },
      { sNo: 17, roomNo: 'Room No 17', name: 'Store Room - II', category: 'Utilities & Stores', description: 'First floor material and auxiliary equipment storage.' },
      { sNo: 18, roomNo: 'Room No 18', name: 'Social Welfare Books Room', category: 'Subject Wings', description: 'Dedicated textbook bank under social welfare schemes for eligible students.' },
      { sNo: 19, roomNo: 'Room No 19', name: 'PUC1 & PUC2 Room', category: 'Subject Wings', description: 'Pre-University Course (Years 1 & 2) textbooks, remedial guides, and study materials.' },
      { sNo: 20, roomNo: 'Room No 20', name: 'Books / Newspaper Store Room', category: 'Utilities & Stores', description: 'Archived daily newspapers, past periodical issues, and overflow storage.' },
      { sNo: 21, roomNo: 'Room No 21', name: 'Power Room - II', category: 'Utilities & Stores', description: 'Dedicated power management and battery back-up unit for First Floor & Data Centre.' },
    ],
  },
  {
    floorId: 'second',
    floorName: 'Second Floor',
    subtitle: 'Digital Library, Faculty Research Lab, English Lab, Competitive Exam Cell & Studios',
    rooms: [
      { sNo: 22, roomNo: 'Room No 22', name: 'Faculty Research Lab', category: 'Labs', description: 'Advanced computational stations for faculty research, journal drafting, and data analytics.' },
      { sNo: 23, roomNo: 'Room No 23', name: 'Institute Computation Lab', category: 'Labs', description: 'High-performance computing laboratory for modeling, simulations, and algorithmic tasks.' },
      { sNo: 24, roomNo: 'Room No 24', name: 'English Language Lab', category: 'Labs', description: 'Audio-visual and multimedia software consoles for English communication and soft skills.' },
      { sNo: 25, roomNo: 'Room No 25', name: 'Studio Room', category: 'Labs', description: 'Acoustically treated studio for recording video lectures, webinars, and e-content production.' },
      { sNo: 26, roomNo: 'Room No 26', name: 'Store Room - III', category: 'Utilities & Stores', description: 'Second floor general archival and lab equipment storage.' },
      { sNo: 27, roomNo: 'Room No 27', name: 'Exam Cell Archive Room', category: 'Administration', description: 'Secure archive holding historical question banks, evaluation records, and syllabi.' },
      { sNo: 28, roomNo: 'Room No 28', name: 'Reference Room', category: 'Reading Rooms', description: 'Rare encyclopedias, handbooks, research standards, and non-circulating reference works.' },
      { sNo: 29, roomNo: 'Room No 29', name: 'Competitive Exam Cell', category: 'Reading Rooms', description: 'Specialized study cell with resources for GATE, CAT, GRE, UPSC, and IES.' },
      { sNo: 30, roomNo: 'Room No 30', name: 'Digital Library Room', category: 'Labs', description: 'Internet-enabled desktop nodes providing seamless access to IEEE, ASCE, ASME, and Knimbus.' },
      { sNo: 31, roomNo: 'Room No 31', name: 'Power Room - III', category: 'Utilities & Stores', description: 'Dedicated electrical supply control and inverter back-up for Second Floor facilities.' },
    ],
  },
];

/* ── 9. Official General Rules (Verbatim from general-rules.php) ── */

export const GENERAL_RULES: string[] = [
  'Library is a place for study and research. Strict silence is to be observed at all times.',
  'A user has to show their official Identity Card whenever he / she enters the Library.',
  'All personal belongings (bags, helmets, personal books) must be deposited at the property counter at the entrance.',
  'Users are requested to allow frisking of person at the Library exit gate while leaving the Library premises.',
  'Personal books, private printed material, and external photocopy materials are not allowed inside the reading halls.',
  'Outsiders are strictly not allowed into the Library without prior written permission from the authorities.',
  'Smoking, eating, and consumption of beverages are strictly prohibited inside the entire Library building.',
  'Users must maintain cleanliness and handle all library furniture, books, and computers with utmost care.',
];

/* ── 10. Circulation Timings, Quotas & Rules (circulation.php) ── */

export const CIRCULATION_TIMINGS = [
  { days: 'Monday to Saturday (Library Hours)', timing: '6:00 AM to 11:00 PM', note: 'Extended night study support' },
  { days: 'Books Issue & Return Timings', timing: '10:00 AM to 6:00 PM', note: 'Counter active on working days' },
  { days: 'Sunday & Public Holidays', timing: '9:00 AM to 5:00 PM', note: 'Reading rooms accessible' },
];

export const CIRCULATION_RULES: CirculationRule[] = [
  {
    memberCategory: 'Students (UG / PUC)',
    booksIssued: 3,
    firstRenewalOnline: '15 days',
    secondRenewalInPerson: '15 days',
    eligibleGroup: 'Registered PUC & B.Tech Students',
  },
  {
    memberCategory: 'Staff (Non-Teaching)',
    booksIssued: 5,
    firstRenewalOnline: '15 days',
    secondRenewalInPerson: '15 days',
    eligibleGroup: 'Administrative & Technical Staff',
  },
  {
    memberCategory: 'Staff (Teaching / Faculty)',
    booksIssued: 8,
    firstRenewalOnline: '45 days',
    secondRenewalInPerson: '45 days',
    eligibleGroup: 'Assistant, Associate & Full Professors',
  },
];

export const CIRCULATION_POLICIES = [
  {
    title: 'Re-issue Gap',
    desc: 'The same book can be re-issued to the same student only two days after its physical return / submission.',
  },
  {
    title: 'Overdue Fines',
    desc: 'Fine beyond the due date is ₹1/- per day for the first 30 days. After 30 days, ₹2/- per day will be charged until return.',
  },
  {
    title: 'Condition Inspection & Binding Fee',
    desc: 'Borrowers must check book condition upon issue. An amount of ₹50/- towards binding cost will be charged if returned in damaged / disfigured condition.',
  },
  {
    title: 'Lost Book Formula',
    desc: 'Total Fine = Actual Cost of Book + 10% per annum (appreciation/depreciation) + 5% transportation charge + Overdue Late Fine.',
  },
  {
    title: 'Examination Return & Vacation Clearance',
    desc: 'Books borrowed during examination must be returned within 1 week. Students must return all books before vacations. Gate pass is issued only after No Dues clearance.',
  },
];

/* ── 11. Official Staff Directory (staff-details.php & contact-us.php) ── */

export const LIBRARY_STAFF: StaffMember[] = [
  {
    sNo: 1,
    name: 'Madhusudhan Rao Dasari',
    designation: 'Faculty In-charge Library',
    roleDescription: 'Academic supervision, strategic collection development, and overall library administration.',
  },
  {
    sNo: 2,
    name: 'V. Prem Raj Kumar',
    designation: 'Library Coordinator',
    roleDescription: 'Coordination of automated workflows, e-resource consortium subscriptions, and student services.',
  },
  {
    sNo: 3,
    name: 'K. Adiseshudu',
    designation: 'Library Assistant',
    roleDescription: 'Circulation desk supervision, Koha LMS user records, member queries, and stack maintenance.',
    phone: '9396257271',
    email: 'library@rguktn.ac.in',
  },
];

/* ── 12. Study & Research Support Highlights ── */

export const STUDY_RESEARCH_SUPPORT = [
  {
    title: 'Self-Learning & Open Courseware',
    body: 'Empowering students to pace their learning with access to NPTEL, SWAYAM, and digitized lecture captures from in-house RGUKT studios.',
    icon: 'book-open',
  },
  {
    title: 'High-Impact Research Access',
    body: 'Direct access to premier IEEE, ASCE, and ASME repositories enabling faculty and student research papers to meet global standards.',
    icon: 'sparkles',
  },
  {
    title: 'Competitive Examinations Wing',
    body: 'Dedicated reference room (Room 29) stocked with mock papers, solved manuals, and standard references for GATE, UPSC, GRE, and CAT.',
    icon: 'award',
  },
  {
    title: 'Curated Question Bank Archives',
    body: 'Historical question paper repository across all semesters and engineering disciplines to assist focused exam preparation.',
    icon: 'file-text',
  },
  {
    title: 'Digital Computing Infrastructure',
    body: 'Dedicated Digital Library (Room 30) and Faculty Research Lab (Room 22) with gigabit internet and high-performance terminals.',
    icon: 'cpu',
  },
  {
    title: 'Language & Communication Lab',
    body: 'Equipped with interactive multimedia tools (Room 24) to enhance professional communication, presentation, and interview skills.',
    icon: 'headphones',
  },
];

/* ── 13. Official Contact & Campus Location ── */

export const LIBRARY_CONTACT = {
  building: 'Central Library Building',
  campus: 'Rajiv Gandhi University of Knowledge Technologies - Nuzvid Campus',
  address: 'Mylavaram Road, Nuzvid, Krishna / Eluru District, Andhra Pradesh - 521202, India',
  phone: '9396257271 (Library Assistant)',
  email: 'library@rguktn.ac.in',
  officialWeb: 'https://rguktn.ac.in/library/',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3819.668542396991!2d80.8178867!3d16.7931584!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3675e4dd70dfdf%3A0x1cdfd9f97d5b3a66!2sCentral%20Library%2CIIIT%20Nuzvid!5e0!3m2!1sen!2sin!4v1703075976167!5m2!1sen!2sin',
};
