/**
 * RGUKT-AP Admissions Section Content
 * Verified from official RGUKT Admissions Portal (https://admissions.rgukt.in),
 * official 2026 & 2025 prospectuses, government orders, and campus regulations.
 */

export const ADMISSIONS_NAV = [
  { label: 'UG Admissions', href: '/admissions' },
  { label: 'Admissions 2025', href: '/admissions/2025' },
  { label: 'Admissions 2026', href: '/admissions/2026' },
  { label: 'PG Admissions', href: '/admissions/postgraduate' },
  { label: 'Doctoral Admissions', href: '/admissions/doctoral' },
  { label: 'Eligibility Criteria', href: '/admissions/eligibility' },
  { label: 'Application Process', href: '/admissions/process' },
  { label: 'Fee Structure', href: '/admissions/fees' },
];

export const OFFICIAL_PORTAL_URL = 'https://admissions.rgukt.in/';
export const MAIN_SITE_URL = 'https://www.rgukt.in/';

/** Central Helpline Info */
export const ADMISSIONS_HELPLINE = {
  email: 'admissions@rgukt.in',
  phones: ['97035 42597', '97054 72597'],
  timings: '10:00 AM to 1:00 PM and 2:00 PM to 5:00 PM (Working days only)',
  emailFormatNotice: 'When emailing the helpdesk, please include: 1) RGUKT Application Number, 2) Full Name, 3) SSC Hall Ticket Number, 4) Mobile Number, and 5) Problem Description.',
};

/** Four Constituent Campuses */
export const RGUKT_CAMPUSES = [
  {
    name: 'RGUKT Nuzvid Campus',
    district: 'Eluru District',
    location: 'Nuzvid, Andhra Pradesh – 521202',
    established: '2008',
    overview: 'The founding campus sprawling across 100+ acres with state-of-the-art academic blocks, central computing facilities, advanced laboratories, and full residential amenities.',
    branches: ['Computer Science & Engineering', 'Electronics & Communication Engineering', 'Mechanical Engineering', 'Civil Engineering', 'Chemical Engineering', 'Metallurgical & Materials Engineering'],
    href: '/nuzvid',
  },
  {
    name: 'RGUKT RK Valley Campus',
    district: 'YSR Kadapa District',
    location: 'Idupulapaya, Vempalli Mandal, Andhra Pradesh – 516330',
    established: '2008',
    overview: 'Located in scenic surroundings at Idupulapaya, offering comprehensive engineering departments, high-performance computing clusters, sports complex, and modern hostel blocks.',
    branches: ['Computer Science & Engineering', 'Electronics & Communication Engineering', 'Mechanical Engineering', 'Civil Engineering', 'Chemical Engineering', 'Metallurgical & Materials Engineering', 'Electrical & Electronics Engineering'],
    href: '/campus/rk-valley',
  },
  {
    name: 'RGUKT Ongole Campus',
    district: 'Prakasam District',
    location: 'Santhanuthalapadu, Ongole, Andhra Pradesh – 523225',
    established: '2016',
    overview: 'Established to expand high-quality technological education in central Andhra Pradesh, equipped with specialized engineering labs, digital smart classrooms, and residential infrastructure.',
    branches: ['Computer Science & Engineering', 'Electronics & Communication Engineering', 'Mechanical Engineering', 'Civil Engineering', 'Electrical & Electronics Engineering'],
    href: '/campus/ongole',
  },
  {
    name: 'RGUKT Srikakulam Campus',
    district: 'Srikakulam District',
    location: 'SM Puram, Etcherla Mandal, Andhra Pradesh – 532410',
    established: '2016',
    overview: 'Established to empower meritorious rural students in northern coastal Andhra Pradesh with cutting-edge technical curriculum, modern libraries, and high-speed campus networks.',
    branches: ['Computer Science & Engineering', 'Electronics & Communication Engineering', 'Mechanical Engineering', 'Civil Engineering', 'Electrical & Electronics Engineering'],
    href: '/campus/srikakulam',
  },
];

/** UG Admissions Overview */
export const UG_ADMISSIONS_DATA = {
  heroEyebrow: 'Admissions',
  title: 'UG Admissions',
  label: '@RGUKT-AP',
  heroImage: '/admissions/admissions-banner.jpg',
  stats: [
    { value: '6 Years', label: 'Integrated B.Tech Programme' },
    { value: '4', label: 'Constituent Campuses' },
    { value: '10th / SSC', label: 'Merit-Based Entry (No Exam)' },
    { value: '100%', label: 'Tuition Waiver for Eligible AP Students' },
  ],
  statusBanner: {
    status: 'closed-sports-open' as const,
    headline: 'Admissions for AY 2026–27 are CLOSED EXCEPT SPORTS QUOTA',
    subtext: 'Regular certificate verification and counselling phases (Phases I to V) have concluded. Special Category (Sports) provisional lists will be announced following SAAP AP verification.',
    portalUrl: OFFICIAL_PORTAL_URL,
  },
  programmeStructure: {
    puc: {
      duration: '2 Years (PUC-I & PUC-II)',
      title: 'Pre-University Course (Preparatory Stage)',
      curriculum: 'Mathematics, Physics, Chemistry, English, Telugu / Sanskrit, and Information Technology.',
      details: 'Lays a robust foundational knowledge in physical sciences and computing, equivalent to Intermediate (+2) with intense exposure to computer programming and digital self-learning.',
    },
    btech: {
      duration: '4 Years (E-1 to E-4)',
      title: 'Bachelor of Technology (Engineering Stage)',
      curriculum: 'Rigorous engineering curricula aligned with AICTE and industry standards, culminating in major capstone projects and corporate internships.',
      allocation: 'Allocation of engineering branches is conducted at the end of PUC-II purely based on the cumulative GPA (CGPA) in PUC and the prevailing statutory reservation rules.',
    },
  },
  selectionBasis: {
    rule: 'Purely on Marks obtained in the 10th Class (SSC or equivalent) in the first attempt.',
    deprivationScore: 'In accordance with Section 2(b) of the RGUKT Act 18 of 2008, a Deprivation Score of 4% of the maximum marks per subject is added to the 10th-class marks of candidates who studied in non-residential Government Schools (Zilla Parishad, Municipal, AP Model Schools, etc.) in Andhra Pradesh.',
    noEntrance: 'Admissions are merit-based through state web counseling — no separate entrance examination is conducted.',
  },
  seatAllocation: {
    localRatio: '85% of total seats are reserved for local candidates of Andhra Pradesh and Telangana (divided between AU and SVU regions as per the AP Educational Institutions Presidential Order 1974).',
    unreservedRatio: '15% of seats are unreserved (open to meritorious students from Andhra Pradesh, Telangana, and other states of India).',
    supernumerary: 'An additional 5% supernumerary quota is available for candidates from Other States of India and International/NRI categories.',
  },
  tieBreakingRules: [
    'Higher marks in Mathematics',
    'Higher marks in Science',
    'Higher marks in English',
    'Higher marks in Social Studies',
    'Higher marks in 1st Language',
    'Date of Birth (Elder candidate receives preference)',
    'Lowest random number generated from the 10th-class SSC Hall Ticket Number (if tie persists)',
  ],
};

/** Admissions 2026 Page Data (Live Official Cycle) */
export const ADMISSIONS_2026_DATA = {
  heroEyebrow: 'Admissions',
  title: 'Admissions 2026',
  label: '@RGUKT-AP',
  heroImage: '/admissions/admissions-banner.jpg',
  statusBanner: {
    status: 'closed-sports-open' as const,
    badge: 'Official Status: AY 2026–27',
    headline: 'ADMISSIONS 2026 ARE CLOSED EXCEPT SPORTS QUOTA',
    description: 'Admissions for AY 2026–27 regular phases have officially concluded. Regular classes commenced on July 1, 2026, and Phase-V vacancy counselling was held on August 7, 2026. Online admissions remain ACTIVE ONLY for candidates who applied under the Special Category (SPORTS).',
    sportsNotice: 'Notice to Students applied under Special Category (SPORTS): The provisional selection lists for SPORTS will be announced and published on the admissions portal once authenticated evaluations are received from the Sports Authority of Andhra Pradesh (SAAP AP). Students who applied under Sports Quota must regularly visit admissions.rgukt.in for selection list releases.',
    portalUrl: OFFICIAL_PORTAL_URL,
  },
  applicationFees: [
    { category: 'AP Candidates – OC & BC', fee: '₹400', mode: 'Online via Payment Gateway' },
    { category: 'AP Candidates – SC & ST', fee: '₹250', mode: 'Online via Payment Gateway' },
    { category: 'Other-State Candidates (All Categories)', fee: '₹1,000', mode: 'Online via Payment Gateway' },
  ],
  applicationSteps: [
    {
      step: 1,
      title: 'Registration',
      badge: 'Step 1',
      description: 'Candidate initiates registration on the official portal (AP / Other States). On successful registration, a unique RGUKT Application Number is generated.',
      actionNote: 'Save your unique RGUKT Application Number for all subsequent steps.',
    },
    {
      step: 2,
      title: 'Admission Fee Payment',
      badge: 'Step 2',
      description: 'Complete the application fee payment online using the generated Application Number (₹400 for OC/BC, ₹250 for SC/ST, ₹1,000 for Other States) through Net Banking / Debit Card / Credit Card / UPI.',
      actionNote: 'Payment must be completed prior to application form submission.',
    },
    {
      step: 3,
      title: 'Online Application Submission',
      badge: 'Step 3',
      description: 'Log in using your RGUKT Application Number and Date of Birth. Fill out academic marks, reservation details, study history, and upload certificates. Multiple submissions are permitted — information in the latest submission is considered.',
      actionNote: 'Carefully cross-verify all 7 critical fields before final submit.',
    },
    {
      step: 4,
      title: 'Download & Retain Application Form',
      badge: 'Step 4',
      description: 'Download the finalized application form with registration credentials and retain a printed copy for future reference. Candidates are advised NOT to post/submit hard copies to university offices.',
      actionNote: 'No physical application forms should be posted to RGUKT offices.',
    },
  ],
  criticalChecklist: [
    'SSC / 10th Class Hall Ticket Number (Must match board records exactly)',
    'SSC Board (BSE AP, TS, CBSE, ICSE, NIOS, or Recognized State Boards)',
    'Date of Birth (Exactly as recorded in Class 10 Certificate)',
    'Gender (Male / Female / Transgender)',
    'Reservation Category (OC / EWS / BC-A / BC-B / BC-C / BC-D / BC-E / SC / ST)',
    'Communication Details (Valid Mobile Number, Email Address, and Postal Address)',
    'SSC Marks / Grade Points (Subject-wise marks and maximum marks accurately entered)',
  ],
  officialSchedule: [
    { sNo: 1, event: 'Date of Official Admission Notification', date: '01-05-2026', status: 'Completed' },
    { sNo: 2, event: 'Online Applications Receiving Window Opened', date: '01-05-2026 (10:00 AM)', status: 'Completed' },
    { sNo: 3, event: 'Last Date for Receiving Online Applications', date: '30-05-2026 (05:00 PM)', status: 'Completed' },
    { sNo: 4, event: 'Special Categories Certificate Verification at Nuzvid Campus (CAP, Sports, NCC, Bharat Scouts & Guides)', date: '05-06-2026 to 08-06-2026', status: 'Completed' },
    { sNo: 5, event: 'Announcement of General Provisional Selection List (All 4 Campuses)', date: '12-06-2026', status: 'Completed' },
    { sNo: 6, event: 'Certificate Verification for RGUKT Nuzvid Campus (at Nuzvid)', date: '19-06-2026 & 20-06-2026', status: 'Completed' },
    { sNo: 7, event: 'Certificate Verification for RGUKT RK Valley Campus (at RK Valley)', date: '19-06-2026 & 20-06-2026', status: 'Completed' },
    { sNo: 8, event: 'Certificate Verification for RGUKT Ongole Campus (at RK Valley)', date: '22-06-2026 & 23-06-2026', status: 'Completed' },
    { sNo: 9, event: 'Certificate Verification for RGUKT Srikakulam Campus (at Srikakulam)', date: '22-06-2026 & 23-06-2026', status: 'Completed' },
    { sNo: 10, event: 'Reporting of Admitted Students to Respective Campuses', date: '01-07-2026', status: 'Completed' },
    { sNo: 11, event: 'Phase-V Vacancy Counselling & Certificate Verification', date: '07-08-2026', status: 'Completed' },
    { sNo: 12, event: 'Sports Quota Provisional Selection Lists (Subject to SAAP AP confirmation)', date: 'To be Announced / In Progress', status: 'In Progress' },
  ],
  requiredDocuments: [
    'SSC / 10th Class Hall Ticket & Marks Memo (Original & Xerox Copies)',
    'Study & Conduct Certificates from 4th Class to 10th Class',
    'Proof of Non-Residential Government School Study (for 4% Deprivation Score eligibility)',
    'Integrated Community Certificate / Caste Certificate (SC/ST/BC) issued by Meeseva / Tahsildar',
    'Income Certificate (issued by competent authority on or after April 1, 2025/2026) or White Ration Card / Rice Card',
    'EWS Certificate (Economically Weaker Sections) if applicable',
    'Special Category Original Certificates (PH through SADAREM, CAP from Sainik Board, NCC Directorate, Sports Authority SAAP, Scouts & Guides)',
    'Transfer Certificate (TC) and Migration Certificate (for non-AP state boards)',
    'Aadhaar Cards of Student and Parents',
    'Passport-size Color Photographs (6 copies)',
  ],
};

/** Admissions 2025 – Historical Archive */
export const ADMISSIONS_2025_DATA = {
  heroEyebrow: 'Admissions',
  title: 'Admissions 2025',
  label: '@RGUKT-AP',
  heroImage: '/campuses/nuzvid.jpg',
  archiveBanner: {
    badge: 'Historical Archive',
    headline: 'Admissions 2025 (AY 2025–26 Cycle) – Concluded',
    subtext: 'The 2025–26 admission cycle is completely closed. All selection phases, certificate verifications, campus allocations, and class orientations have been executed. This page provides historical reference records for students and researchers.',
    currentLink: '/admissions/2026',
  },
  summary: {
    intake: 'Centralized state-level admissions across RGUKT Nuzvid, RK Valley, Ongole, and Srikakulam campuses.',
    mode: 'Merit-based admission on 10th Class GPA/Marks with 4% deprivation score for non-residential government school students.',
    timeline: [
      { date: 'May 2025', event: 'Release of detailed admission notification and prospectus' },
      { date: 'May – June 2025', event: 'Online registration and fee payment window' },
      { date: 'June 2025', event: 'Special category certificate verification (PH/CAP/NCC/Sports/Scouts)' },
      { date: 'June – July 2025', event: 'Phase-I and Phase-II certificate verification & campus reporting' },
      { date: 'August 2025', event: 'Academic orientation and commencement of PUC-I semester classes' },
    ],
  },
};

/** PG Admissions (M.Tech) */
export const PG_ADMISSIONS_DATA = {
  heroEyebrow: 'Admissions',
  title: 'PG Admissions',
  label: '@RGUKT-AP',
  heroImage: '/gallery/gallery-1.jpg',
  intro: 'RGUKT offers high-caliber Master of Technology (M.Tech) programmes designed to cultivate research acumen, computational mastery, and advanced engineering specializations in contemporary technological domains.',
  specializations: [
    {
      name: 'Transportation Engineering',
      department: 'Department of Civil Engineering',
      focus: 'Highway engineering, traffic modeling, smart urban transport systems, pavement evaluation, GIS in transport planning.',
      campus: 'Nuzvid & RK Valley Campuses',
      eligibility: 'B.Tech/B.E. in Civil Engineering with minimum 60% marks (55% for SC/ST).',
    },
    {
      name: 'Advanced Materials Technology',
      department: 'Department of Metallurgical & Materials Engineering',
      focus: 'Nanomaterials, composite structures, biomaterials, computational materials science, high-entropy alloys, metallurgy.',
      campus: 'Nuzvid & RK Valley Campuses',
      eligibility: 'B.Tech/B.E. in Metallurgical / Materials / Mechanical / Chemical Engineering or M.Sc. in Physics/Chemistry/Materials Science.',
    },
    {
      name: 'Artificial Intelligence & Machine Learning',
      department: 'Department of Computer Science & Engineering',
      focus: 'Deep learning, computer vision, natural language processing, neural networks, quantum computing, cloud architectures.',
      campus: 'Nuzvid & RK Valley Campuses',
      eligibility: 'B.Tech/B.E. in CSE / IT / ECE / Data Science / AI or MCA / M.Sc. (CS) with strong mathematical foundation.',
    },
    {
      name: 'Engineering Analysis & Design',
      department: 'Department of Mechanical Engineering',
      focus: 'Finite element analysis (FEA), computational fluid dynamics (CFD), structural mechanics, CAD/CAM/CAE, vibration dynamics.',
      campus: 'Nuzvid & RK Valley Campuses',
      eligibility: 'B.Tech/B.E. in Mechanical / Automobile / Production / Aerospace Engineering.',
    },
  ],
  admissionProcess: {
    criteria: 'Preference is given to candidates with valid GATE scores. Non-GATE candidates are admitted through AP PGECET rank followed by university counselling and departmental interview.',
    fellowship: 'GATE-qualified regular full-time M.Tech scholars receive a monthly AICTE Post Graduate Scholarship (₹12,400 per month) subject to AICTE norms and biometric attendance.',
    cycleNote: 'Postgraduate admission notifications are announced annually on the official university portal www.rgukt.in. Interested candidates must follow the central notifications.',
  },
};

/** Doctoral Admissions (Ph.D.) */
export const DOCTORAL_ADMISSIONS_DATA = {
  heroEyebrow: 'Admissions',
  title: 'Doctoral Admissions',
  label: '@RGUKT-AP',
  heroImage: '/gallery/gallery-12.jpg',
  intro: 'RGUKT offers full-time and part-time Doctor of Philosophy (Ph.D.) programmes across diverse engineering, scientific, and interdisciplinary domains, fostering indigenous innovation, research excellence, and intellectual leadership.',
  disciplines: [
    {
      school: 'Engineering & Technology',
      areas: 'Computer Science & AI/ML, Electronics & VLSI/IoT, Mechanical Systems & Thermo-Fluids, Structural & Water Resources Engineering, Chemical & Environmental Processes, Materials & Metallurgy.',
    },
    {
      school: 'Sciences & Humanities',
      areas: 'Physics & Quantum Materials, Chemistry & Catalysis, Mathematics & Computational Fluid Dynamics, English Language Teaching & Literature, Management & Technological Economics.',
    },
  ],
  eligibility: [
    'Master\'s Degree in Engineering/Technology (M.Tech/M.E.) or Master\'s Degree in Sciences/Humanities (M.Sc./M.A./M.Phil) with a minimum of 55% marks (or 50% for SC/ST/Differently-Abled categories) or equivalent CGPA from a UGC-recognized university.',
    'Exemption from University Written Test for candidates qualified in UGC-NET / CSIR-NET JRF / GATE / GPAT / SLET or recipients of national fellowships (DST-INSPIRE, ICMR, etc.).',
    'Non-fellowship applicants must qualify in the RGUKT Ph.D. Written Entrance Test.',
    'All shortlisted applicants must appear for a technical research proposal presentation and viva-voce before the Departmental Research Committee (DRC).',
  ],
  regulations: [
    'Doctoral Committee (DC) oversees periodic 6-month progress reviews.',
    'Mandatory coursework credits in Research Methodology and Advanced Domain Electives.',
    'Publication in peer-reviewed SCI/SCIE/Scopus-indexed journals prior to thesis submission.',
    'Plagiarism checking and rigorous external peer-review evaluation of doctoral dissertations.',
  ],
  contact: {
    office: 'Dean, Research & Development, RGUKT Andhra Pradesh',
    email: 'deanrd@rgukt.in',
    portalUrl: MAIN_SITE_URL,
  },
};

/** Eligibility Criteria Module */
export const ELIGIBILITY_MODULE_DATA = {
  heroEyebrow: 'Admissions',
  title: 'Eligibility Criteria',
  label: '@RGUKT-AP',
  heroImage: '/gallery/gallery-7.jpg',
  ugEligibility: {
    title: 'UG 6-Year Integrated B.Tech Eligibility',
    points: [
      {
        heading: 'Educational Qualification',
        text: 'Candidates must have passed the 10th Class (SSC) examination conducted by the Board of Secondary Education, Andhra Pradesh or Telangana, CBSE, ICSE, or any other recognized equivalent examination in the first attempt in the relevant academic year.',
      },
      {
        heading: 'Age Limit',
        text: 'Candidates must not have completed 18 years of age as of 31st December of the admission year (relaxed up to 21 years for SC and ST candidates).',
      },
      {
        heading: 'Local / Residential Status',
        text: '85% of total seats are reserved for local candidates belonging to Andhra Pradesh and Telangana as defined in the AP Educational Institutions (Regulation of Admissions) Order 1974. 15% seats are unreserved for meritorious students from any state.',
      },
      {
        heading: 'Deprivation Score Benefit',
        text: 'A Deprivation Score of 4% of maximum marks per subject is added to SSC marks for students from non-residential government schools (Zilla Parishad, Municipal, AP Model Schools, etc.) as per Section 2(b) of the RGUKT Act.',
      },
      {
        heading: 'Supernumerary Quota',
        text: 'Candidates from Other States of India (including Jammu & Kashmir and North-Eastern States) and International / NRI candidates are eligible for the 5% supernumerary quota.',
      },
    ],
  },
  pgEligibility: {
    title: 'PG (M.Tech) Eligibility',
    points: [
      {
        heading: 'Qualifying Degree',
        text: 'B.Tech / B.E. in the relevant discipline with a minimum of 60% aggregate marks or 6.5/10 CGPA (55% or 6.0/10 CGPA for SC/ST candidates).',
      },
      {
        heading: 'Entrance Examination',
        text: 'Valid GATE score is given first priority. Remaining seats are filled based on AP PGECET rank followed by university counselling.',
      },
    ],
  },
  doctoralEligibility: {
    title: 'Doctoral (Ph.D.) Eligibility',
    points: [
      {
        heading: 'Postgraduate Degree',
        text: 'Master\'s degree in Engineering/Technology (M.Tech/M.E.) or Sciences/Humanities (M.Sc./M.A.) with minimum 55% marks (50% for SC/ST/PwD).',
      },
      {
        heading: 'National Qualifications',
        text: 'UGC-NET, CSIR-NET JRF, GATE, or RGUKT Research Entrance Test followed by Departmental Research Committee interview.',
      },
    ],
  },
  specialCategories: [
    {
      code: 'PH / PwD',
      name: 'Differently Abled (Persons with Disabilities)',
      percentage: '5% Horizontal',
      criteria: 'Minimum 40% permanent disability certified through authentic medical board certificate verified on the SADAREM portal.',
    },
    {
      code: 'CAP',
      name: 'Children of Armed Personnel',
      percentage: '2% Horizontal',
      criteria: 'Children of serving / ex-servicemen / martyrs certified with authentic priority credentials by the Zilla Sainik Welfare Board.',
    },
    {
      code: 'NCC',
      name: 'National Cadet Corps',
      percentage: '1% Horizontal',
      criteria: 'Holders of NCC \'A\' / \'B\' / \'C\' certificates with prioritized camp credentials authenticated by the NCC Directorate (AP & TS).',
    },
    {
      code: 'Sports',
      name: 'Sports & Games Quota',
      percentage: '0.5% Horizontal',
      criteria: 'Medal winners / participants in recognized National / State / District school games and championships authenticated and ranked by SAAP AP.',
    },
    {
      code: 'BSG',
      name: 'Bharat Scouts & Guides',
      percentage: '0.5% Horizontal',
      criteria: 'Rashtrapati Award or Rajya Puraskar recipients certified by the Bharat Scouts & Guides State Headquarters.',
    },
  ],
};

/** Application Process Module */
export const APPLICATION_PROCESS_DATA = {
  heroEyebrow: 'Admissions',
  title: 'Application Process',
  label: '@RGUKT-AP',
  heroImage: '/gallery/gallery-3.jpg',
  intro: 'A comprehensive step-by-step walkthrough for applying to RGUKT-AP admissions through the official centralized admission portal.',
  stages: [
    {
      phase: 'Phase 1: Pre-Requisite Preparation',
      summary: 'Collect all mandatory documents and academic credentials before opening the online portal.',
      items: [
        'SSC Hall Ticket Number and exact date of birth.',
        'Study certificates from Class 4 to Class 10 to establish local candidate status.',
        'Proof of Non-Residential Government School study (if claiming 4% deprivation score).',
        'Caste Certificate / EWS Certificate / Income Certificate (if claiming fee reimbursement or category quota).',
        'Special category certificates (SADAREM, CAP, NCC, Sports, Scouts) if applicable.',
        'Scanned passport photograph and signature in required pixel/KB sizes.',
        'Valid Mobile Number & Email ID for OTP verification and counselling alerts.',
      ],
    },
    {
      phase: 'Phase 2: Online Registration & Fee Payment',
      summary: 'Register on admissions.rgukt.in and pay the prescribed application fee.',
      items: [
        'Access the official Admissions Portal (https://admissions.rgukt.in).',
        'Click on "Registration" (AP students or Other States students link).',
        'Submit basic identity information to generate your unique RGUKT Application Number.',
        'Proceed to "Admission Fee Payment" and pay online: ₹400 (AP OC/BC), ₹250 (AP SC/ST), or ₹1,000 (Other States).',
      ],
    },
    {
      phase: 'Phase 3: Application Form Fill-up & Verification',
      summary: 'Log in and enter comprehensive academic details and category preferences.',
      items: [
        'Log in with your RGUKT Application Number and Date of Birth.',
        'Verify your SSC marks, school type (government / private), and reservation categories.',
        'Upload required scanned documents and certificates.',
        'Perform the 7-Point Cross-Verification Checklist before clicking Submit.',
        'Note: Multiple submissions are permitted on the portal — data in the latest submitted application will be used for provisional ranking.',
      ],
    },
    {
      phase: 'Phase 4: Download Receipt & Follow Counselling',
      summary: 'Save confirmation PDF and track provisional selection lists.',
      items: [
        'Download the finalized Application Form PDF and save a digital copy.',
        'Do NOT mail or post physical printouts to RGUKT campuses.',
        'Track provisional selection lists and certificate verification dates on admissions.rgukt.in.',
        'Report in person to the designated certificate verification venue on the allotted date with original certificates.',
      ],
    },
  ],
};

/** Fee Structure Module */
export const FEE_STRUCTURE_DATA = {
  heroEyebrow: 'Admissions',
  title: 'Fee Structure',
  label: '@RGUKT-AP',
  heroImage: '/gallery/gallery-9.jpg',
  intro: 'RGUKT-AP operates under a subsidized residential education model. Andhra Pradesh students eligible for Government Fee Reimbursement receive full tuition waivers.',
  applicationFees: [
    { type: 'AP Students – OC & BC Categories', amount: '₹400', recurrence: 'One-time per application cycle' },
    { type: 'AP Students – SC & ST Categories', amount: '₹250', recurrence: 'One-time per application cycle' },
    { type: 'Other-State Students (All Categories)', amount: '₹1,000', recurrence: 'One-time per application cycle' },
    { type: 'International / NRI Candidates', amount: 'US $50 / ₹4,000', recurrence: 'One-time per application cycle' },
  ],
  tuitionFees: [
    {
      programme: 'Pre-University Course (PUC-I & PUC-II)',
      forAP: '₹45,000 per annum',
      forOtherStates: '₹1,50,000 per annum',
      reimbursement: '100% reimbursed by AP Govt for eligible students (Jagananna Vidya Deevena)',
    },
    {
      programme: 'B.Tech Engineering (Years 1 to 4)',
      forAP: '₹50,000 per annum',
      forOtherStates: '₹1,50,000 per annum',
      reimbursement: '100% reimbursed by AP Govt for eligible students (Jagananna Vidya Deevena)',
    },
    {
      programme: 'M.Tech Postgraduate Programme',
      forAP: '₹30,000 per semester',
      forOtherStates: '₹50,000 per semester',
      reimbursement: 'AICTE PG Scholarship (₹12,400/mo) for eligible GATE-qualified scholars',
    },
    {
      programme: 'Doctoral (Ph.D.) Programme',
      forAP: '₹15,000 per semester (Full-Time)',
      forOtherStates: '₹25,000 per semester',
      reimbursement: 'Fellowships available via UGC/CSIR-NET JRF, DST-INSPIRE, or Institute schemes',
    },
  ],
  oneTimeAndInstitutionalFees: [
    { feeHead: 'Admission / Registration Fee', amount: '₹1,000 (₹500 for SC/ST)', note: 'Paid once at the time of certificate verification' },
    { feeHead: 'Refundable Caution Deposit', amount: '₹1,000 – ₹2,000', note: 'Refundable upon completion of programme or withdrawal' },
    { feeHead: 'Student Medical & Group Insurance', amount: '₹1,200 per annum', note: 'Comprehensive campus medical coverage' },
    { feeHead: 'Hostel Maintenance Charges', amount: '₹1,000 per annum', note: 'Infrastructure and residential amenity maintenance' },
    { feeHead: 'Examination & Grade Card Fee', amount: 'As prescribed (~₹1,000/sem)', note: 'Covers continuous evaluation and end-semester examinations' },
  ],
  hostelAndMessDetails: {
    title: 'Hostel & Mess Operations',
    description: 'All RGUKT campuses are fully residential. Messes operate on a non-profit, monthly dividing system managed cooperatively by student mess committees and wardens. The average monthly mess expenditure typically ranges between ₹2,500 to ₹3,200 per month (~₹18,000 – ₹22,000 per semester). Eligible AP students receive boarding and hostel assistance under government welfare schemes.',
  },
  reimbursementScheme: {
    title: 'Government Fee Reimbursement (Jagananna Vidya Deevena)',
    eligibility: 'Available to all admitted candidates belonging to SC, ST, BC, EBC, Kapu, Minority, and Differently-Abled categories whose annual family income is below ₹2.50 Lakh, subject to AP Government welfare guidelines and bi-monthly biometric attendance verification.',
    benefits: '100% of the prescribed annual tuition fee is covered under the scheme. Admitted students receiving government fee reimbursement pay nominal one-time institutional charges upon admission.',
  },
};

/** Frequently Asked Questions */
export const ADMISSIONS_FAQ = [
  {
    q: 'What is the current status of RGUKT Admissions 2026?',
    a: 'Admissions for AY 2026–27 regular phases have officially concluded following Phase-V counselling. Online admissions remain active ONLY for candidates who applied under the Special Category (SPORTS) pending final authenticated merit lists from SAAP AP.',
  },
  {
    q: 'How is admission granted to the 6-Year Integrated B.Tech programme?',
    a: 'Admission is granted purely on merit based on 10th Class (SSC or equivalent) examination marks in the first attempt. There is no entrance examination.',
  },
  {
    q: 'What is the Deprivation Score and who is eligible for it?',
    a: 'Under Section 2(b) of the RGUKT Act, a Deprivation Score of 4% of the maximum marks per subject is added to the 10th-class marks of candidates who studied in non-residential Government Schools (Zilla Parishad, Municipal, AP Model Schools) in Andhra Pradesh.',
  },
  {
    q: 'Can students from other states of India apply for UG admissions?',
    a: 'Yes. While 85% of seats are reserved for local candidates of Andhra Pradesh and Telangana, 15% seats are unreserved merit seats. Additionally, 5% supernumerary seats are allocated for candidates from other states of India and International/NRI categories.',
  },
  {
    q: 'What are the application fees for Admissions 2026?',
    a: 'For Andhra Pradesh students: ₹400 for OC and BC candidates, and ₹250 for SC and ST candidates. For Other-State candidates: ₹1,000 for all categories.',
  },
  {
    q: 'Is education free for eligible students from Andhra Pradesh?',
    a: 'Yes. Eligible students belonging to SC, ST, BC, EBC, Kapu, Minority, and Differently-Abled categories with annual family income below ₹2.50 Lakh receive 100% tuition fee reimbursement under the Government of Andhra Pradesh Jagananna Vidya Deevena scheme.',
  },
  {
    q: 'How are engineering branches allocated to students?',
    a: 'Engineering disciplines (CSE, ECE, ME, CE, Chemical, MME, EEE) are allocated at the end of the 2-year Pre-University Course (PUC) based strictly on the student\'s cumulative GPA (CGPA) in PUC and the statutory rules of reservation.',
  },
  {
    q: 'How do I contact the RGUKT Admissions Helpdesk?',
    a: 'You can email admissions@rgukt.in or call helpline numbers 97035 42597 / 97054 72597 on working days between 10:00 AM – 1:00 PM and 2:00 PM – 5:00 PM. Please include your RGUKT Application Number, Name, SSC Hall Ticket Number, and Mobile Number.',
  },
];
