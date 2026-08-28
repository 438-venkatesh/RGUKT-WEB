/**
 * Students Section Content — Single Source of Truth: https://rgukt.in
 *
 * Strictly derived from official RGUKT-AP portal pages and official PDF records.
 * Contains no external internet research, outside statistics, or speculative data.
 */

export type StudentNavItem = {
  label: string;
  href: string;
};

export const STUDENTS_NAV: StudentNavItem[] = [
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
];

export const SCHOLARSHIPS = {
  title: 'Scholarships & Financial Assistance',
  rguktUrl: 'https://www.rgukt.in/students/scholarships/',
  intro:
    'The Government of Andhra Pradesh implements the Post Matric Scholarships scheme for all eligible students belonging to SC, ST, BC, EBC (other than Kapu), Kapu, Minority, and Differently Abled categories pursuing education at RGUKT on a saturation basis.',
  schemesHeading: 'Scholarship Disbursal Schemes',
  schemes: [
    'Jagananna Vidya Deevena (RTF): Provides full fee reimbursement to every eligible student. Full Fee includes Tuition Fee, Special Fees, Other Fees & Exam Fees as defined in G.O.Ms.No.66, SW(Edn) Dept., dated 08-09-2010 and as fixed by competent authorities, credited to the respective college accounts on behalf of students.',
    'Jagananna Vasathi Deevena (MTF): Provides financial assistance towards food and hostel expenses (Rs. 10,000/- per person for ITI, Rs. 15,000/- for Polytechnic, and Rs. 20,000/- for Degree and above courses per year) credited directly into the account of the mother or natural guardian.',
  ],
  eligibilityHeading: 'Eligibility Criteria',
  eligibilityItems: [
    'Eligible Students: All students pursuing Polytechnic, ITI, and Degree & above level courses in Government/Aided/Private institutions affiliated to State Universities/Boards; Day scholars and students in College/Department Attached Hostels (CAH/DAH).',
    'Mandatory Attendance: Minimum 75% aggregate attendance is mandatory for the release and sanction of scholarships.',
    'Ineligible Categories: Students studying in Private/Deemed Universities, correspondence/distance education courses, or admitted under Management/Spot Quota.',
    'Income Limit: Total family annual income must be less than or equal to Rs. 2.50 Lakhs.',
    'Land Holding: Total land holding of the family must be less than 10.00 acres wet land or 25.00 acres dry land (or 25.00 acres wet and dry combined).',
    'Property & Employment: No family member should be a regular government employee or pensioner (sanitary workers exempted); family property in urban areas must be less than 1500 sq.ft built-up area; no family member should own a four-wheeler (taxies/tractors/autos exempted) or be an income tax payee.',
  ],
  procedureHeading: 'How to Apply (Fresh & Renewal)',
  procedureItems: [
    'Fresh Applications: Download and fill the Jnanabhumi Scholarship Application Form (J-SAF) and submit the signed copy to the College Principal. The Principal verifies and submits online through Jnanabhumi at admission. The student receives an SMS confirmation, visits a Mee Seva Centre with Application ID and Aadhaar, verifies details, and gives biometric authentication.',
    'Renewal Applications: The College Principal keys-in the current admission date and preceding examination Hall Ticket/Roll Number. The student receives an SMS confirmation and provides biometric authentication at the college.',
    'Fee Remittance Guidelines: In accordance with G.O. Ms No. 35, fee reimbursement credits are tracked through the Jnanabhumi portal to ensure timely college remittance.',
  ],
  portals: [
    { name: 'AP Jnanabhumi Official Scholarship Portal', url: 'https://jnanabhumi.ap.gov.in/' },
  ],
  documents: [
    {
      title: 'Jagananna Vidya Deevena and Jagananna Vasathi Deevena Guidelines (PDF)',
      url: 'https://rgukt.in/files/pdfs/76b968ffb2160dfa5132aff9df9fb984.pdf',
    },
  ],
};

export const MEDALS = {
  title: 'Medal Information & Honours',
  rguktUrl: 'https://www.rgukt.in/students/medal-information/',
  intro:
    'The list of Gold Medals instituted at Rajiv Gandhi University of Knowledge Technologies (RGUKT) to recognize outstanding academic excellence and achievement:',
  listHeading: 'Official Gold Medals @ RGUKT',
  list: [
    '1. One gold medal for the topper of the batch of the University in memory of Late Dr. Y.S. Rajasekhara Reddy, Former Chief Minister, Andhra Pradesh who was instrumental in the establishment of the University.',
    '2. Dr. Raj Reddy gold medal for the topper in Computer Science and Engineering in the name of Dr. Raj Reddy, Founder Chancellor of the University.',
    '3. Smt. Kalluri Venkata Subbamma gold medal for the topper among women graduates in memory of the mother of the donor.',
  ],
  donorHeading: 'Donor Philanthropy & Student Incentives',
  donorFramework:
    'The university is also approaching various donor philanthropists to institute more medals as an incentive to students who excel in their studies.',
  documents: [
    {
      title: 'Medal Information @ RGUKT (PDF)',
      url: 'https://rgukt.in/files/pdfs/aeaac9ea06bdfa0736cb69943e4cc7b4.pdf',
    },
  ],
};

export const CAREER_GROWTH = {
  title: 'Career Growth & Development',
  rguktUrl: 'https://www.rgukt.in/students/career-growth/',
  intro:
    'RGUKT supports students’ comprehensive personal, intellectual, and professional development through structured academic mentorship, competitive examinations guidance, skill building, and placement preparation across all campuses.',
  areasHeading: 'Key Dimensions of Student Career Growth',
  areas: [
    'Competitive Examinations Mentorship: Structured support and library resources for students preparing for GATE, civil services (UPSC/APPSC), and national-level examinations.',
    'Higher Education Pathways: Counseling and academic support for students aiming for advanced higher education and doctoral research in premier institutions.',
    'Technical Skill Development: Practical laboratories, technical workshops, and professional communication programs to prepare students for industry needs.',
    'Career Placement Support: Dedicated campus placement and training cells facilitating internships, corporate recruitment drives, and industry interaction.',
  ],
};

export const QUANTUM_LAB = {
  title: 'Quantum Computing Lab',
  rguktUrl: 'https://www.rgukt.in/students/quantum-computing-lab/',
  intro:
    'The Quantum Computing Laboratory at RGUKT provides specialized facilities for students and researchers to explore quantum computation, emerging algorithms, and advanced computational technologies.',
  initiativesHeading: 'Laboratory Facilities & Academic Initiatives',
  initiatives: [
    'Advanced Computational Facilities: Computing infrastructure supporting exploration of quantum simulation, algorithm design, and modern computational models.',
    'Workshops & Training: Practical laboratory sessions and technical workshops introducing undergraduate students to quantum programming and quantum information science.',
    'Student Research & Innovation: Encouraging student projects and exploration in frontier computational sciences.',
  ],
  image: {
    src: '/students/quantum-workshop-1.jpg',
    alt: 'Quantum Computing Workshop at RGUKT',
    caption: 'Students and faculty participating in quantum computing and advanced computing workshops.',
    tag: 'Computing Lab',
  },
};

export const ANTI_RAGGING = {
  title: 'Anti Ragging Mechanism',
  rguktUrl: 'https://www.rgukt.in/students/anti-ragging/',
  heading: 'UGC Regulation on curbing the menace of Ragging in Higher Educational Institutions',
  intro:
    'Rajiv Gandhi University of Knowledge Technologies maintains a strict Zero-Tolerance Policy towards ragging in all constituent campuses.',
  motto: 'Don’t Rag. Also don’t be a mute witness of Ragging.',
  helplineNotice:
    'The students in distress due to ragging related incidents can call the National Anti-Ragging Helpline 1800-180-5522 (24x7 toll free) or e-mail the Anti-Ragging Helpline at helpline@antiragging.in. For any other information regarding ragging, please visit www.ugc.ac.in & www.antiragging.in and contact UGC Monitoring Agency i.e. Aman Satya Kachroo Trust on following No. 09871170303, 09818400116 (only in case of emergency).',
  undertakingCompliance:
    'In compliance of the 2nd amendment in UGC regulations, it is compulsory for each student and every parent to submit an online undertaking every academic year at www.antiragging.in & www.amanmovement.org.',
  helpline: {
    phones: ['1800-180-5522', '09871170303', '09818400116'],
    emails: ['helpline@antiragging.in'],
  },
  portalsHeading: 'Official Portals for Anti-Ragging Compliance',
  portals: [
    { name: 'UGC Official Portal', url: 'https://www.ugc.ac.in' },
    { name: 'National Anti-Ragging Portal', url: 'https://www.antiragging.in' },
    { name: 'Aman Movement Undertaking Portal', url: 'https://www.amanmovement.org' },
  ],
};

export const ICC = {
  title: 'Internal Complaints Committee (ICC)',
  rguktUrl: 'https://www.rgukt.in/students/internal-complaint-committee/',
  intro:
    'The Internal Complaints Committee (ICC) at RGUKT is constituted in accordance with statutory guidelines to address, prevent, and resolve issues related to sexual harassment, ensuring a safe, supportive, and dignified environment for all students and staff across campuses.',
  responsibilitiesHeading: 'Statutory Mandate & Responsibilities',
  responsibilities: [
    'Handles and resolves issues related to sexual harassment across all campuses.',
    'Provides a confidential, accessible grievance redressal mechanism for residential students and staff.',
    'Conducts gender sensitization and awareness programs to promote mutual respect, safety, and gender equity throughout the university.',
  ],
};

export const WOMEN_EMPOWERMENT = {
  title: 'Women Empowerment & Gender Equity',
  rguktUrl: 'https://www.rgukt.in/students/women-empowerment/',
  mainHeading: 'PROMOTION OF GENDER EQUITY',
  overview:
    'RGUKT prioritizes the promotion of gender equity across all its campuses. Girl students constitute around 50% of the enrolment. Guest speakers are invited to discuss gender-related issues, emphasizing the contributions of women to society. RGUKT upholds inclusivity, providing equal opportunities to all, regardless of gender, caste, religion, social status, or any other consideration.',
  facilitiesHeading: 'Special Facilities Provided on Each Campus to Promote Gender Equity:',
  facilities: [
    'Girls’ Common Room: Equipped with toilets, drinking water facilities, and security.',
    'Safety and Security: Women security guards are present on campus and in hostels. Security checkpoints are established at key points, and 24x7 surveillance is maintained through CC cameras.',
    'Medical Facilities: Separate medical facilities for girls with ten beds are available at each campus health center.',
    'Counseling Services: A counselor is always available to provide emotional support and address gender sensitization issues.',
    'Women Empowerment Cell: This cell addresses grievances and organizes awareness and empowerment programs.',
    'Internal Compliance Committee: It handles and resolves issues related to sexual harassment.',
  ],
  image: {
    src: '/students/women-empowerment-1.jpg',
    alt: 'Promotion of Gender Equity at RGUKT',
    caption: 'Special facilities, dedicated health center wards, counseling, and security for girl students.',
    tag: 'Gender Equity',
  },
};

export const CULTURAL = {
  title: 'Cultural Activities & Performing Arts',
  rguktUrl: 'https://www.rgukt.in/students/cultural-activities/',
  department: 'Performing Arts Department (RGUKT - Nuzvid, RK Valley, Ongole, Srikakulam)',
  overview:
    'The Rajiv Gandhi University of Knowledge Technologies (RGUKT) administration has taken a commendable step by establishing a dedicated music department within the university. Recognizing the immense value of music as an art form and its positive impact on students’ overall development, RGUKT has created a vibrant space where students can explore their musical talents and pursue their passion for music. The music department at RGUKT offers a diverse range of courses and opportunities, catering to various genres and styles of music. Under the guidance of experienced and accomplished faculty members, students have access to state-of-the-art facilities and resources, enabling them to hone their skills in singing, playing musical instruments, music composition, dance, theatre and more.',
  coursesHeading: 'Courses Offered:',
  courses: ['Vocal', 'Kuchipudi', 'Mridangam'],
  achievementsHeading: 'Achievements:',
  achievements: [
    'National level Percussion Mridangam 2nd place, Chandigarh University.',
    'National level third prize Mridangam, Lucknow.',
    'AIU 2nd prize Mridangam, Tirupati.',
    'AIU 4th, 5th places in folk orchestra, light vocal, and Non-percussion Instrument.',
    'National level participation in Folk song group (Dharwad) and Theatre (Lucknow).',
    'State level first prizes more than 20 from past 8 years in culturals, etc.',
    'Guinness Book of World Records won by 9 students in Kuchipudi.',
    '4th and 5th places in South zone youth festivals.',
  ],
  teckziteHeading: 'National Technical & Cultural Fest — TECKZITE',
  teckziteContent:
    'TECKZITE is RGUKT’s annual national-level technical and cultural fest conducted at the Nuzvid campus, providing a university-wide platform for student innovation, technical design, and creative cultural expression.',
  image: {
    src: '/students/sitara-cultural-1.jpg',
    alt: 'Performing Arts and Cultural Programs at RGUKT',
    caption: 'Students practicing classical music, Kuchipudi dance, and instrumental arts in the Performing Arts Department.',
    tag: 'Performing Arts',
  },
  documents: [
    {
      title: 'Cultural Activities — Performing Arts Department (PDF)',
      url: 'https://rgukt.in/files/pdfs/d69db10bc7b04238ebf42b4189e727ad.pdf',
    },
  ],
};

export const SPORTS = {
  title: 'Student Sports & Sports Board',
  rguktUrl: 'https://www.rgukt.in/students/sports/',
  intro:
    'RGUKT fosters physical fitness, athletic discipline, and sportsmanship across all constituent campuses under the coordination of the University Sports Board.',
  boardHeading: 'About Sports Board',
  boardDescription:
    'The Vice Chancellor has constituted the Sports Board for RGUKT with the following Members, as per the guidelines of the Association of Indian Universities (AIU). The Sports Board will be responsible for planning and monitoring various games and sports activities in the University.',
  membersHeading: 'Members of the Sports Board:',
  members: [
    'Prof. M. Vijaya Kumar, Vice-Chancellor (FAC), RGUKT — Chairman (vc@rgukt.in)',
    'Director, RGUKT RK Valley Campus — Member (director@rguktrkv.ac.in)',
    'Director, RGUKT Nuzvid Campus — Member (director@rguktn.ac.in)',
    'Director, RGUKT Srikakulam Campus — Member (director.sklm@rgukt.in)',
    'Director, RGUKT Ongole Campus — Member (director@rguktong.ac.in)',
    'Registrar, RGUKT — Special Invitee (registrar@rgukt.in)',
    'Finance Officer, RGUKT — Special Invitee (fo@rgukt.in)',
    'Administrative Officers, All Campuses — Members',
    'Dean Academics, All Campuses — Members',
    'Finance Officers, All Campuses — Members',
    'V. Bala Obaiah, Physical Director, RK Valley Campus — Member',
    'Dr. Ch. S. R. Naveen Kumar, Asst. Director, Physical Education, Nuzvid Campus — Member',
    'B. Ramaprasad, Instructor, Ongole — Member',
    'K. Archana, Instructor, Srikakulam — Member',
    'Dr. Nalluri Srinivasa Rao, Academic Officer — Member (External)',
  ],
  image: {
    src: '/gallery/gallery-5.jpg',
    alt: 'RGUKT Sports and Physical Fitness Facilities',
    caption: 'Multi-campus athletic grounds, indoor sports arenas, and university tournament coordination.',
    tag: 'Sports Board',
  },
};

export const COMMUNITY = {
  title: 'Community Activities & National Service Scheme (NSS)',
  rguktUrl: 'https://www.rgukt.in/students/community-activities/',
  intro:
    'The University and the neighbourhood are entwined with each other. One of the main fabrics is the National Service Scheme (NSS). The NSS Units on the campuses are very active and their dedication and efforts are visible in various activities and community outreach initiatives.',
  activitiesHeading: 'Community Outreach & Service Initiatives',
  activities: [
    'Active NSS units across all constituent campuses engaging students in community development and social responsibility.',
    'Awareness programs through poster presentations, videos, drawings, and paintings created by students.',
    'Community volunteering, environmental cleanliness drives, and public welfare assistance.',
  ],
  daysHeading: 'Important Days Observed on Campuses:',
  daysIntro:
    'To promote the spirit of nationalism and make the students aware of significant events, all important national and international days are celebrated across all four campuses of the university, including:',
  days: [
    'International Mother Language Day',
    'International Women’s Day',
    'World Forestry Day',
    'World Poetry Day',
    'World Water Day',
    'Awareness Program on "Disha" Act',
  ],
  image: {
    src: '/gallery/gallery-3.jpg',
    alt: 'RGUKT Community Activities and NSS Volunteering',
    caption: 'Student volunteers participating in community service, environmental initiatives, and public awareness.',
    tag: 'NSS Outreach',
  },
};

export const ALUMNI_ENGAGEMENT = {
  title: 'Alumni Engagement',
  rguktUrl: 'https://www.rgukt.in/students/alumni-engagement/',
  intro:
    'The alumni of the university are distributed across the world in various capacities such as technocrats, entrepreneurs, scientists, academicians, politicians, and IAS/IPS/administrative officers. RGUKT campus institutes have registered alumni associations for building a strong bond between alumni and students and faculty. The associations are registered under the societies ACT XXI of 1860.',
  objectivesHeading: 'Objectives',
  objectives: [
    'To encourage and promote close relations between the institution and its alumni and among the alumni themselves for well-being of the institution.',
    'To provide and disseminate information regarding their Alma Mater, its graduates, faculties, and students, to the alumni.',
    'To assist and support the efforts of the institution in obtaining funds for development.',
    'To serve as a forum through which alumni may support and advance the pursuit of academic excellence at the institution.',
    'To organize and co-ordinate reunion activities of the alumni and let the alumni acknowledge their gratitude to their Alma Mater.',
    'To collect, publish, and distribute such information as may be useful to the alumni and their Alma Mater.',
  ],
  activitiesHeading: 'Activities of the Alumni',
  activities: [
    'Inviting them to deliver talks, guest lectures, and alumni fora.',
    'Inviting them as participants/speakers at the workshops and conferences organized by the university.',
    'Placing students in their respective companies.',
    'Supporting events of the university as sponsors.',
    'Sharing their knowledge in a capacity of visiting faculty members.',
    'Inviting contributions in upgrading the curriculum in the form of feedback.',
  ],
  image: {
    src: '/gallery/gallery-12.jpg',
    alt: 'RGUKT Alumni Engagement and Mentorship',
    caption: 'Registered alumni associations fostering academic collaboration, guest lectures, and student mentorship.',
    tag: 'Alumni Network',
  },
  documents: [
    {
      title: 'RGUKT Nuzvid Alumni Association Certificate (PDF)',
      url: 'https://www.rgukt.in/files/pdfs/1301bbc90d44896b766ceb28a122717f.pdf',
    },
  ],
};
