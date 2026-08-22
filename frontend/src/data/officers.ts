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
    name: 'Prof. K. Madhu Murthy',
    role: 'Chancellor (FAC), RGUKT-AP',
    subtitle: 'Chairman, Andhra Pradesh State Council of Higher Education (APSCHE)',
    photo: '/people/chancellor.jpg',
    email: 'chancellor@rgukt.ac.in',
    phone: '+91-863-2344700',
    message: CHANCELLOR_MESSAGE,
    messageShort: CHANCELLOR_MESSAGE.split('\n\n')[1],
    duties: [
      'Presides over convocation and major university ceremonies',
      'Provides strategic guidance on university policy and rural education mission',
      'Chairs key governance meetings as Chancellor (FAC)',
    ],
  },
  {
    path: '/administration/vice-chancellor',
    heroTitle: 'ViceChancellor',
    name: 'Prof. K. Madhu Murthy',
    role: 'Vice Chancellor, RGUKT-AP',
    photo: '/people/chancellor.jpg',
    email: 'vc@rgukt.ac.in',
    phone: '+91-863-2344701',
    message: `As Vice Chancellor of RGUKT-AP, I oversee academic excellence, campus development, and the university's mission to empower gifted rural youth through world-class technical education across all four campuses.`,
    duties: [
      'Chief executive and academic head of the university',
      'Presides over Academic Council meetings',
      'Coordinates campus directors and central administration',
      'Leads strategic initiatives including quantum computing and industry MoUs',
    ],
  },
  {
    path: '/administration/registrar',
    heroTitle: 'Registrar',
    name: 'Dr. B. Narsimha',
    role: 'Registrar, RGUKT-AP',
    photo: '/gallery/gallery-1.jpg',
    email: 'registrar@rgukt.ac.in',
    phone: '+91-863-2344702',
    message: `The Registrar's office maintains academic records, conducts examinations coordination with the Dean of Evaluation, and serves as the custodian of university statutes and ordinances.`,
    duties: [
      'Maintenance of student and faculty records',
      'Conduct of Senate and Academic Council secretariat',
      'Issuance of transcripts, degrees and certificates',
      'Coordination with campus registrars',
    ],
  },
  {
    path: '/administration/dean-evaluation',
    heroTitle: 'DeanEvaluation',
    name: 'Dr. K Venkatesh',
    role: 'Dean of Evaluation, RGUKT-AP',
    photo: '/gallery/gallery-10.jpg',
    email: 'dean.eval@rgukt.ac.in',
    phone: '+91-863-2344714',
    message: `The Office of the Dean of Evaluation ensures fair, transparent and timely conduct of examinations across all RGUKT-AP campuses.`,
    duties: [
      'Examination scheduling and hall ticket issuance',
      'Answer script evaluation and result processing',
      'Revaluation and recounting procedures',
      'Malpractice prevention and disciplinary coordination',
    ],
  },
  {
    path: '/administration/dean-academics',
    heroTitle: 'DeanAcademics',
    name: 'Dr. S Bhaskar',
    role: 'Dean of Academics, RGUKT-AP',
    photo: '/gallery/gallery-12.jpg',
    email: 'dean.acad@rgukt.ac.in',
    phone: '+91-863-2344710',
    message: `The Dean of Academics coordinates curriculum development, academic audits, faculty recruitment and quality of teaching-learning across all engineering and science departments.`,
    duties: [
      'Curriculum revision and Academic Council coordination',
      'Faculty recruitment and induction programmes',
      'Academic audit and NAAC documentation support',
      'Orientation and academic calendar planning',
    ],
  },
  {
    path: '/administration/dean-eitp',
    heroTitle: 'DeanEITP',
    name: 'Dr. Y Reddy',
    role: 'Dean of EITP, RGUKT-AP',
    subtitle: 'Entrepreneurship, Innovation, Training & Placements',
    photo: '/gallery/gallery-6.jpg',
    email: 'dean.eitp@rgukt.ac.in',
    phone: '+91-863-2344715',
    message: `The Dean of EITP leads industry collaboration, entrepreneurship programmes, and training & placement activities including partnerships with Wadhwani Foundation and leading recruiters.`,
    duties: [
      'Campus placement drives and internship coordination',
      'Industry MoUs and guest lecture programmes',
      'Entrepreneurship cell and startup incubation support',
      'Soft skills and employability training',
    ],
  },
  {
    path: '/administration/dean-rd',
    heroTitle: 'DeanRD',
    name: 'Dr. R Kiran',
    role: 'Dean of Research & Development, RGUKT-AP',
    photo: '/gallery/gallery-3.jpg',
    email: 'dean.rd@rgukt.ac.in',
    phone: '+91-863-2344711',
    message: `The Dean of R&D promotes funded research, publications, and collaborations including Amaravati Quantum Valley, DST and AICTE projects across all campuses.`,
    duties: [
      'Research project administration and MoU coordination',
      'Ph.D. programme oversight and research ethics',
      'Industry consultancy and IPR policy implementation',
      'Research advisory committee secretariat',
    ],
  },
  {
    path: '/administration/dean-student-affairs',
    heroTitle: 'DeanStudentAffairs',
    name: 'Dr. P Latha',
    role: 'Dean of Student Affairs, RGUKT-AP',
    photo: '/gallery/gallery-8.jpg',
    email: 'dean.sa@rgukt.ac.in',
    phone: '+91-863-2344713',
    message: `The Dean of Student Affairs oversees student welfare, hostels, clubs, sports, cultural activities, anti-ragging measures and grievance redressal across all campuses.`,
    duties: [
      'Student welfare and hostel administration',
      'Anti-ragging and ICC coordination',
      'Sports and cultural festival oversight',
      'Student grievance redressal mechanisms',
    ],
  },
];

const OFFICER_BY_PATH = new Map(OFFICER_PROFILES.map(o => [o.path, o]));

export function getOfficerByPath(path: string): OfficerProfile | undefined {
  return OFFICER_BY_PATH.get(path);
}

export const OFFICER_PATHS = OFFICER_PROFILES.map(o => o.path);
