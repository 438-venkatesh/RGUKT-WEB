/** University officer profiles — aligned with rgukt.in administration pages */

export type OfficerProfile = {
  path: string;
  heroTitle: string;
  name: string;
  role: string;
  subtitle?: string;
  photo: string;
  email?: string;
  phone?: string;
  message?: string;
  messageShort?: string;
  duties?: string[];
};

export const CHANCELLOR_MESSAGE = `Dear Students,

I am very happy to welcome each one of you to Rajiv Gandhi University of Knowledge Technologies (RGUKT). You are now part of a growing and forward-looking university that cares about good education, overall development, and helping students become strong and successful.

At RGUKT, learning is not just about books and exams. It is about discovering new ideas, building your skills, and learning to lead. We want you to think deeply, try new things, and become confident to face any challenge in life.

Our teachers and staff are here to support and guide you. Please make good use of their help. Take part in class, ask questions, join discussions, share your ideas, and work with your friends. These activities will make your learning better and more fun.

In today's fast-changing world, it is very important to learn new things, be creative, and keep improving. At RGUKT, we follow the idea of "learning by doing." This means you will learn through practice and real-life activities in a helpful and active learning environment.

As the Chairman of the Andhra Pradesh State Council of Higher Education, I assure you that the Government of Andhra Pradesh is deeply committed to transforming higher education and making it accessible to all sections of society. RGUKT plays a vital role in this mission, offering a platform where merit and potential are nurtured without barriers.

I encourage you to make the best use of your time at RGUKT. Stay curious, be disciplined, help each other, and always do your best. I truly believe in your talent and look forward to seeing you grow and succeed.`;

export const OFFICER_PROFILES: OfficerProfile[] = [
  {
    path: '/administration/chancellor',
    heroTitle: 'Chancellor',
    name: 'Prof. (Dr.) Kotha Madhu Murthy',
    role: 'Chancellor (in-charge / FAC), RGUKT-AP',
    subtitle: 'Chairman, Andhra Pradesh State Council of Higher Education (APSCHE)',
    photo: '/people/governing-council/madhu-murthy.jpg',
    email: 'chancellor@rgukt.in',
    phone: '+91-863-2344700',
    message: CHANCELLOR_MESSAGE,
    messageShort:
      'The current Chancellor (in-charge / FAC) of RGUKT-AP is Prof. (Dr.) Kotha Madhu Murthy. He also serves as the Chairman of APSCHE.',
    duties: [
      'Role: Appointed as the in-charge Chancellor to guide administrative and academic functions across RGUKT campuses (including Nuzvid, RK Valley, Ongole, and Srikakulam).',
      'Expertise: An academician and administrator specializing in areas like solar energy, IC engines, and biofuels, with extensive experience in technical education reforms.',
      'Previous Leadership: He took over the responsibility following previous transitions in university administration to stabilize and steer policy and campus development.',
    ],
  },
  {
    path: '/administration/vice-chancellor',
    heroTitle: 'Vice Chancellor',
    name: 'Prof. Maddali Lakshmi Narayana Rao',
    role: 'Vice-Chancellor, RGUKT-AP',
    subtitle: 'Professor (HAG), Department of Chemistry, IIT Kanpur',
    photo: '/people/governing-council/mln-rao.jpg',
    email: 'vc@rgukt.in',
    phone: '+91-863-2344701',
    message: `As Vice Chancellor of RGUKT-AP, I am committed to advancing academic excellence, outcome-based technical education, and world-class research incubation to empower gifted rural engineering students across Nuzvid, RK Valley, Srikakulam, and Ongole campuses.`,
    messageShort:
      'Prof. Maddali Lakshmi Narayana Rao (M.L.N. Rao) is a distinguished chemist and Higher Administrative Grade Professor from IIT Kanpur serving as the Vice-Chancellor of RGUKT-AP.',
    duties: [
      'Principal Academic and Executive Officer under RGUKT Act 18 of 2008',
      'Member-Convener of the University Governing Council',
      'Oversees academic curricula, examination integrity, and Outcome-Based Education (OBE)',
      'Spearheads research incubation, Quantum Computing labs, and corporate placement partnerships',
    ],
  },
  {
    path: '/administration/registrar',
    heroTitle: 'Registrar',
    name: 'Prof. Amarendra Kumar Sandra',
    role: 'Registrar (FAC), RGUKT-AP',
    subtitle: 'Professor, Department of Civil Engineering (Transportation Engineering)',
    photo: '/people/amarendra-kumar-sandra.jpg',
    email: 'registrar@rgukt.in',
    phone: '+91-863-2344702',
    message: `As Registrar of RGUKT-AP, I am dedicated to maintaining the highest standards of administrative integrity, regulatory compliance, statutory governance, and seamless student support across all four constituent IIIT campuses.`,
    messageShort:
      'Prof. Amarendra Kumar Sandra is a senior academician and transportation engineering expert serving as the Registrar of RGUKT-AP, overseeing university administration, statutory records, and inter-campus coordination.',
    duties: [
      'Official Custodian of University Records, Common Seal, and Statutory Statutes',
      'Member-Secretary and Secretariat Lead for Governing Council & Academic Council',
      'Superintends Central Establishment, Notifications, and Regulatory Audits',
      'Central Coordinator for State Engineering Admissions and Convocation Logistics',
    ],
  },
  {
    path: '/administration/cao',
    heroTitle: 'Chief Administrative Officer',
    name: 'Dr. B. Prasad',
    role: 'Chief Administrative Officer (CAO), RGUKT-AP',
    subtitle: 'Assistant Professor, Department of Electrical & Electronics Engineering, RGUKT Nuzvid',
    photo: '/people/cao-b-prasad.jpg',
    email: 'cao@rgukt.in',
    phone: '+91-863-2344705',
    message: `As Chief Administrative Officer of RGUKT-AP, I am committed to modernizing campus infrastructure, enhancing non-academic operations, ensuring robust security, and delivering transparent administrative services across all constituent campuses.`,
    messageShort:
      'Dr. B. Prasad (Ph.D. IIT Tirupati, M.Tech. IIT Bombay) is the Chief Administrative Officer of RGUKT-AP, overseeing university establishment, campus estates, and general administrative services.',
    duties: [
      'Supervises Central Non-Academic Establishment and General Administrative Sections',
      'Coordinates University Estates, Civil Infrastructure, Electrical Utilities, and Maintenance',
      'Directs Central Procurement, Tendering, Logistics, and Equipment Asset Management',
      'Liaises with Campus Administrative Officers (AOs) across Nuzvid, RK Valley, Ongole, and Srikakulam',
    ],
  },
  {
    path: '/administration/dean-evaluation',
    heroTitle: 'Dean of Evaluation',
    name: 'Dr. SK. Riyaz Hussian',
    role: 'Dean of Evaluation, RGUKT-AP',
    subtitle: 'Assistant Professor, Department of Electronics & Communication Engineering, RGUKT Nuzvid',
    photo: '/people/dean-evaluation-riyaz-hussain.jpg',
    email: 'dean.evaluation@rgukt.in',
    phone: '+91-863-2344714',
    message: `As Dean of Evaluation of RGUKT-AP, I am dedicated to administering an examination and grading ecosystem characterized by strict confidentiality, academic integrity, transparent evaluations, and timely result declarations across all four constituent campuses.`,
    messageShort:
      'Dr. SK. Riyaz Hussian (Ph.D., M.Tech.) is the Dean of Evaluation of RGUKT-AP, overseeing university examinations, grading standards, result moderation, and degree audits.',
    duties: [
      'Centralized Scheduling and Synchronous Conduct of End-Semester & Remedial Examinations',
      'Confidential Moderation, Encrypted Question Paper Transmissions, and Spot Valuation Camps',
      'Enforcement of R24/R25 Academic Ordinances, Grading Standards, and Result Declarations',
      'Administration of Student Revaluation, Paper Recounting, and Malpractice Enquiries',
      'Oversees Issuance of Grade Sheets, Consolidated Transcripts, and Convocation Medals',
    ],
  },
  {
    path: '/administration/dean-academics',
    heroTitle: 'Dean of Academics',
    name: 'Mrs. D. Sravani Duvvuri',
    role: 'Dean of Academics, RGUKT-AP',
    subtitle: 'Assistant Professor, Department of Civil Engineering, RGUKT Nuzvid',
    photo: '/people/dean-academics-sravani-duvvuri.jpg',
    email: 'dean.acad@rgukt.ac.in',
    phone: '+91-863-2344710',
    message: `As Dean of Academics of RGUKT-AP, I am dedicated to modernizing our 6-Year Integrated B.Tech curricula in alignment with NEP 2020, fostering Outcome-Based Education (OBE), ensuring synchronized academic pacing, and elevating classroom and laboratory pedagogy across all four constituent campuses.`,
    messageShort:
      'Mrs. D. Sravani Duvvuri (M.Tech.) is the Dean of Academics of RGUKT-AP, directing university curriculum frameworks, academic calendars, Board of Studies coordination, and pedagogical standards.',
    duties: [
      'Overarching Curriculum Modernization & Outcome-Based Education (OBE) Alignment',
      'Harmonization and Enforcement of Centralized University Academic Calendars across all 4 Campuses',
      'Coordination of University Board of Studies (BoS) and Academic Council Statutory Proceedings',
      'Faculty Development Programmes, Pedagogical Innovations & Technology-Enabled Learning',
      'University Academic Audits, Course Curriculum Equivalencies, and NAAC/IQAC Benchmarking',
    ],
  },
  {
    path: '/administration/dean-eitp',
    heroTitle: 'Dean of EITP',
    name: 'Mr. P. Shyam',
    role: 'Dean of EITP, RGUKT-AP',
    subtitle: 'Assistant Professor, Department of Electronics & Communication Engineering, RGUKT Nuzvid',
    photo: '/people/dean-eitp-shyam.jpg',
    email: 'dean.eitp@rgukt.ac.in',
    phone: '+91-863-2344715',
    message: `As Dean of EITP of RGUKT-AP, I am committed to bridging our exceptionally talented rural engineering students with global technology leaders, cultivating robust campus placement ecosystems, accelerating startup incubation, and delivering industry-ready skill training across all four constituent campuses.`,
    messageShort:
      'Mr. P. Shyam (M.Tech.) is the Dean of EITP of RGUKT-AP, spearheading university corporate placements, industry MoUs, skill development ecosystems, and startup incubation.',
    duties: [
      'Strategic Corporate Relations, Campus Recruitment Drives, and Multinational Placements',
      'Industry-Academia MoUs, Corporate Centers of Excellence (CoEs), and Advanced Labs',
      'Student Skill Development Bootcamps, Soft-Skills Finishing Schools & GATE Training',
      'Entrepreneurship Cell (E-Cell) Mentorship, Innovation Hackathons & Startup Incubation',
      'Harmonized Inter-Campus Placement Scheduling across Nuzvid, RK Valley, Ongole & Srikakulam',
    ],
  },
  {
    path: '/administration/dean-rd',
    heroTitle: 'Dean of R&D',
    name: 'Dr. Bogala Konda Reddy',
    role: 'Dean of Research & Development (R&D), RGUKT-AP',
    subtitle: 'Assistant Professor & Head, Department of Mechanical Engineering, RGUKT RK Valley',
    photo: '/people/dean-rd-konda-reddy.jpg',
    email: 'dean.rd@rgukt.ac.in',
    phone: '+91-863-2344711',
    message: `As Dean of Research & Development of RGUKT-AP, I am dedicated to fostering a high-impact research culture, expanding sponsored funding from DST and AICTE, nurturing doctoral research scholars, managing patents and IPR, and accelerating frontier scientific hubs across all four constituent campuses.`,
    messageShort:
      'Dr. Bogala Konda Reddy (Ph.D. IIT Madras) is the Dean of R&D of RGUKT-AP, directing university research governance, sponsored grants, IPR filings, and doctoral programs.',
    duties: [
      'Direction and Administration of Sponsored Research Grants (DST, SERB, AICTE, MHRD)',
      'Doctoral (Ph.D.) Programme Oversight, Research Ethics & Progress Monitoring',
      'Intellectual Property Rights (IPR) Management, Patent Drafting & Commercialization',
      'Advanced Research Hubs, Collaborative Industry MoUs & Quantum Valley Initiatives',
      'Faculty Research Seed Funding, SCI/Scopus Publications & Inter-Campus Research',
    ],
  },
  {
    path: '/administration/dean-student-welfare',
    heroTitle: 'Dean of Student Welfare',
    name: 'Dean of Student Welfare',
    role: 'Dean, Student Welfare (DSW), RGUKT-AP',
    subtitle: 'Apex Office for Residential Campus Life, Hostel Governance & Student Well-Being',
    photo: '/gallery/gallery-8.jpg',
    email: 'dsw@rgukt.ac.in',
    phone: '+91-863-2344713',
    message: `The Office of the Dean of Student Welfare is committed to providing a secure, nurturing, and enriching residential environment for over 20,000 students across our four constituent campuses, ensuring 24/7 medical care, hygienic dining, strict anti-ragging protection, and vibrant student activities.`,
    messageShort:
      'The Dean of Student Welfare oversees residential hostel governance, 24/7 healthcare, dining quality, anti-ragging enforcement, and student support across all four RGUKT-AP campuses.',
    duties: [
      'Residential Hostel Governance, Accommodation & Room Allocations',
      'Mess & Dining Hall Nutritional Audits, Hygiene Supervision & Food Safety',
      'Campus 24/7 Medical Dispensaries, Emergency Response & Student Health Insurance',
      'Statutory Anti-Ragging Committees, Internal Complaints (ICC) & Campus Discipline',
      'Multi-Tier Student Grievance Redressal, Counseling & Peer Mentorship Support',
      'Student Technical Clubs, Cultural Fests, Sports Tournaments & Co-Curriculars',
    ],
  },
  {
    path: '/administration/dean-student-affairs',
    heroTitle: 'Dean of Student Welfare',
    name: 'Dean of Student Welfare',
    role: 'Dean, Student Welfare (DSW), RGUKT-AP',
    subtitle: 'Apex Office for Residential Campus Life, Hostel Governance & Student Well-Being',
    photo: '/gallery/gallery-8.jpg',
    email: 'dsw@rgukt.ac.in',
    phone: '+91-863-2344713',
    message: `The Office of the Dean of Student Welfare is committed to providing a secure, nurturing, and enriching residential environment for over 20,000 students across our four constituent campuses, ensuring 24/7 medical care, hygienic dining, strict anti-ragging protection, and vibrant student activities.`,
    messageShort:
      'The Dean of Student Welfare oversees residential hostel governance, 24/7 healthcare, dining quality, anti-ragging enforcement, and student support across all four RGUKT-AP campuses.',
    duties: [
      'Residential Hostel Governance, Accommodation & Room Allocations',
      'Mess & Dining Hall Nutritional Audits, Hygiene Supervision & Food Safety',
      'Campus 24/7 Medical Dispensaries, Emergency Response & Student Health Insurance',
      'Statutory Anti-Ragging Committees, Internal Complaints (ICC) & Campus Discipline',
      'Multi-Tier Student Grievance Redressal, Counseling & Peer Mentorship Support',
      'Student Technical Clubs, Cultural Fests, Sports Tournaments & Co-Curriculars',
    ],
  },
  {
    path: '/administration/finance-officer',
    heroTitle: 'Finance Officer',
    name: 'Dr. D. V. Nagarjana Devi, M.Tech., Ph.D.',
    role: 'Finance Officer, RGUKT-AP',
    subtitle: 'Assistant Professor, Department of Computer Science & Engineering, RGUKT Nuzvid',
    photo: '/people/finance-officer-nagarjana-devi.jpg',
    email: 'fo@rgukt.ac.in',
    phone: '+91-863-2344708',
    message: `The Office of the Finance Officer ensures prudent fiscal management, transparent budget planning, audit compliance, and coordinated financial governance across all four constituent campuses of RGUKT-AP.`,
    messageShort:
      'The Finance Officer directs annual university budgeting, state government grants, audit compliance, and financial administration across all four RGUKT campuses.',
    duties: [
      'Annual University Budget Preparation, Fiscal Monitoring & Grant Utilization',
      'Statutory Audit Compliance, State Resident Audits & CAG Account Reconciliations',
      'Government Welfare Scholarships (JVD), Fee Reimbursements & Student Stipends',
      'Payroll Management, Contributory Pension Scheme (CPS/PF) & Statutory Deductions',
      'Four-Campus Financial Integration & Standardized Accounting Systems',
    ],
  },
];

const OFFICER_BY_PATH = new Map(OFFICER_PROFILES.map(o => [o.path, o]));

export function getOfficerByPath(path: string): OfficerProfile | undefined {
  return OFFICER_BY_PATH.get(path);
}

const DEDICATED_OFFICER_ROUTES = new Set([
  '/administration/chancellor',
  '/administration/vice-chancellor',
  '/administration/registrar',
  '/administration/dean-evaluation',
  '/administration/dean-eitp',
  '/administration/cao',
]);

export const OFFICER_PATHS = OFFICER_PROFILES
  .map(o => o.path)
  .filter(path => !DEDICATED_OFFICER_ROUTES.has(path));
