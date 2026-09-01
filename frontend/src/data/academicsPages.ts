/**
 * Academics section content.
 *
 * Text for the six subsections that are live on rgukt.in is reproduced verbatim
 * from the source pages (scraped 2026-08-26); the remaining ten Academics menu
 * items currently return 404 on rgukt.in, so those pages carry university-record
 * content and are flagged with `sourceStatus: 'unavailable'`.
 */

import type { BlockIconName } from '../components/blocks/Icons';
import type { SectionBlock, SectionNavGroup, SectionPage } from './sectionPage';
import {
  ACADEMICS_DOCUMENTS,
  CALENDAR_DATES,
  CAMPUSES,
  EXAM_SCHEDULES,
  LIBRARY_SERVICES,
  LIBRARY_STATS,
  LMS_FEATURES,
  LMS_PORTALS,
  ORIENTATION_COMPONENTS,
  SCHOLARSHIPS,
  SUMMER_PROGRAMMES,
  TIMETABLES,
} from './academicsContent';

/* ── schema (shared with other sections) ──────────────────── */

export type AcademicsBlock = SectionBlock;
export type AcademicsPage = SectionPage;

/* ── shared helpers ───────────────────────────────────────── */

const docs = (list: { title: string; file: string; size: string }[]) =>
  list.map(d => ({ title: d.title, url: d.file, size: d.size }));

/* ── 1. Overview (live) ───────────────────────────────────── */

const overview: AcademicsPage = {
  slug: 'overview',
  route: '/academics',
  title: 'Overview of Academics at RGUKT-AP',
  eyebrow: 'Academics',
  navLabel: 'Overview',
  icon: 'cap',
  sourceUrl: 'https://www.rgukt.in/academics/',
  sourceStatus: 'live',
  blocks: [
    {
      kind: 'lead',
      text: 'Rajiv Gandhi University of Knowledge Technologies - Andhra Pradesh (RGUKT-AP) is a premier institution dedicated to nurturing talent and fostering innovation. The university firmly believes that brilliance and groundbreaking ideas can emerge from any corner of society. With a vibrant and diverse student community, RGUKT-AP attracts learners from across Andhra Pradesh, other Indian states, and even international regions. Our students are characterized by their intense curiosity, a passion for exploration, and a commitment to excellence. They thrive on rigorous analytical thinking, creative problem-solving, hands-on experimentation, and the pursuit of transformative ideas.',
    },
    {
      kind: 'stats',
      items: [
        { value: '70', label: 'Instructional days', sub: 'minimum, per semester' },
        { value: '7', label: 'B.Tech disciplines', sub: 'six-year integrated' },
        { value: '4', label: 'Campuses', sub: 'across Andhra Pradesh' },
        { value: '100', label: '% English medium', sub: 'medium of instruction' },
      ],
    },
    {
      kind: 'flow',
      heading: 'How the academic framework is organised',
      caption: 'The academic framework at RGUKT-AP is structured around its departments and centers, which are responsible for driving teaching, research, and industry collaboration.',
      steps: [
        { label: 'Departments & Centres', sub: 'The academic core', detail: 'Own the curriculum, faculty and laboratories that carry each programme.' },
        { label: 'Teaching', sub: 'Semester pattern', detail: 'Courses are organized into semester patterns, with each semester comprising a minimum of seventy instructional days. English serves as the medium of instruction, ensuring global compatibility and accessibility.' },
        { label: 'Research', sub: 'Peer-reviewed', detail: 'Student and faculty research projects are evaluated through a robust peer-review process, involving experts from both national and international arenas.' },
        { label: 'Industry Collaboration', sub: 'Consultancy & projects', detail: 'RGUKT-AP maintains strong ties with industry, offering consultancy services and engaging in projects sponsored by various institutions.' },
      ],
    },
    {
      kind: 'cards',
      heading: 'What defines academics here',
      cols: 2,
      items: [
        {
          icon: 'chart',
          tag: 'Evaluation',
          title: 'Continuous, autonomous assessment',
          body: 'Continuous evaluation is a cornerstone of the academic process, with assessments conducted by faculty members, reflecting the autonomous and rigorous standards upheld by the university.',
        },
        {
          icon: 'flask',
          tag: 'Research',
          title: 'Peer-reviewed research output',
          body: 'Research at RGUKT-AP is a dynamic and integral part of the academic ecosystem. This ensures that the research output meets global standards and contributes meaningfully to the advancement of knowledge.',
        },
        {
          icon: 'shield',
          tag: 'Governance',
          title: 'Governed by the highest academic body',
          body: "The academic policies and programs at RGUKT-AP are governed by the university's highest academic body, which formulates ordinances and guidelines to maintain excellence in education. The curriculum is designed to strike a balance between rigorous academic training and co-curricular activities, fostering well-rounded development.",
        },
        {
          icon: 'bulb',
          tag: 'Extra Mural',
          title: 'Lectures, seminars and workshops',
          body: 'The university regularly hosts special lectures, seminars, and workshops under its Extra Mural Lecture series, featuring eminent scholars and industry leaders who share insights on diverse and relevant topics.',
        },
        {
          icon: 'handshake',
          tag: 'Collaboration',
          title: 'Global academic partnerships',
          body: 'The university organizes numerous conferences, symposia, and workshops that attract participation from scholars and professionals worldwide. Additionally, RGUKT-AP has established academic partnerships with renowned institutions across the globe through faculty exchange programs and Memoranda of Understanding (MOUs). These collaborations facilitate cooperative projects, joint research initiatives, and mutual academic growth.',
        },
        {
          icon: 'users',
          tag: 'Faculty',
          title: 'Distinguished achievers',
          body: "The faculty at RGUKT-AP are distinguished achievers, recognized for their academic contributions through awards and accolades from both national and international organizations. Their expertise and dedication play a pivotal role in shaping the university's academic landscape.",
        },
      ],
    },
    {
      kind: 'prose',
      heading: 'Knowledge with societal impact',
      paragraphs: [
        'At RGUKT-AP, the pursuit of knowledge is complemented by a commitment to societal impact. The university encourages the application of innovative ideas to real-world challenges, ensuring that education translates into meaningful progress. With its unwavering focus on academic excellence, research innovation, and industry collaboration, RGUKT-AP stands as a beacon of transformative education in Andhra Pradesh and beyond.',
      ],
    },
    {
      kind: 'callout',
      tone: 'accent',
      title: 'Curricula and latest updates',
      body: 'To view Academic curricula — click here. For latest updates and information, please visit the Announcements Page.',
      actions: [
        { label: 'Academic Curriculum', to: '/academics/curriculum' },
        { label: 'Announcements', to: '/announcements' },
      ],
    },
  ],
};

/* ── 2. Undergraduate Programmes (live) ───────────────────── */

const undergraduate: AcademicsPage = {
  slug: 'undergraduate',
  route: '/academics/undergraduate',
  title: 'Undergraduate Programme',
  eyebrow: 'Academic Programmes',
  navLabel: 'Undergraduate Programmes',
  icon: 'cap',
  sourceUrl: 'https://www.rgukt.in/academics/programmes/undergraduate-programmes/',
  sourceStatus: 'live',
  blocks: [
    {
      kind: 'lead',
      text: 'The program offered by the RGUKT consists of a six year integrated course after 10th class examination leading to a B.Tech. degree. The first part of the six-year course is a two-year Pre University Course (equivalent to (AP) Intermediate) followed by a second part of four-year Engineering Course.',
    },

    {
      kind: 'flow',
      heading: 'Features of Six-Year Integrated Course',
      caption: 'By bringing students in to the University at an earlier stage we hope to impart a broad based education including humanities and liberal arts to students.',
      steps: [
        { label: 'Class 10', sub: 'Entry point', detail: 'Admission follows the 10th class examination — earlier than the conventional engineering entry point.' },
        { label: 'Pre-University Course', sub: '2 years', detail: 'Equivalent to (AP) Intermediate. At present the pre-university part of education offers premature specialization in tracks such as Mathematics, Physics, Chemistry and Life sciences (equivalent to MPC + BiPC).' },
        { label: 'Engineering Course', sub: '4 years', detail: 'The second part of the six-year course, leading to the B.Tech. degree in one of seven disciplines.' },
        { label: 'B.Tech. degree', sub: 'Award', detail: 'Graduates may additionally earn two Majors, or one Major with one or two Minors, by earning additional credits.' },
      ],
    },
    {
      kind: 'accordion',
      heading: 'The Pre-University Part',
      openFirst: true,
      items: [
        {
          title: 'What the two-year Pre-University Course covers',
          tag: 'Years 1–2',
          body: [
            'This is equivalent to the two year Intermediate (AP) education. The program provides a qualitative plus two education in itself and further lays a stronger foundation for the technical and professional courses ahead.',
            'It has an inbuilt system for remedial education for the students who are relatively weak. In addition, there is a foundation course in IT, preparing students to make full use of the Information Technology and Communication resources provided by the RGUKT in its novel model of teaching learning.',
            'There is a permitted exit after Pre-University if the student chooses to go for a career in other professional programs. The program also provides short-term courses in humanities and social sciences so that the students emerge as confident, energetic, enthusiastic youngsters seeking challenges in their university education and life.',
          ],
        },
      ],
    },
    {
      kind: 'branches',
      heading: 'Degree Programs at RGUKTs',
      caption: 'Upon completing six years of education (3 semesters per year), graduates receive a B.Tech. degree in one of the following disciplines:',
      items: [
        { code: 'CHE', name: 'Chemical Engineering' },
        { code: 'CIVIL', name: 'Civil Engineering' },
        { code: 'CSE', name: 'Computer Science and Engineering' },
        { code: 'EEE', name: 'Electrical & Electronics Engineering' },
        { code: 'ECE', name: 'Electronics & Communications Engineering' },
        { code: 'MME', name: 'Materials Science and Metallurgical Engineering' },
        { code: 'MECH', name: 'Mechanical Engineering' },
      ],
    },
    {
      kind: 'cards',
      heading: 'Majors and minors',
      caption: 'Further, depending on the performance and by earning additional credits, it is possible to widen the degree.',
      cols: 3,
      items: [
        {
          icon: 'route',
          tag: 'Option A',
          title: 'Two Majors',
          body: 'One in Computer Science and the other from among Chemical, Civil, Electronics and Communication, Materials Science and Mechanical.',
        },
        {
          icon: 'route',
          tag: 'Option B',
          title: 'One Major + two Minors',
          body: 'One of the two Minors may be from Business Management, Economics Mathematics, Social Sciences and Statistics.',
        },
        {
          icon: 'route',
          tag: 'Option C',
          title: 'One Major + one Minor',
          body: 'A single Minor alongside the primary engineering Major, earned through additional credits.',
        },
      ],
    },
    {
      kind: 'cards',
      heading: 'Prospects, fees and the education model',
      cols: 2,
      items: [
        {
          icon: 'target',
          tag: 'Employment Prospects',
          title: 'Comparable to world class universities',
          body: 'It is expected that the employment prospects of graduates of RGUKT (IIITs) will be comparable to the other world class universities in India. It is also anticipated that the broad-based education including soft skills will provide a strong foundation for national competitive examinations. Appropriate placement guidance and awareness programs will be conducted to prepare the students for private and public sector opportunities. Students also learn entrepreneurship and other skills that can help them to set out on their own.',
        },
        {
          icon: 'rupee',
          tag: 'Tuition Fees',
          title: '₹36,000 a year, all inclusive',
          body: 'As a government sponsored university, the tuition fees at Rajiv Gandhi University are highly subsidized by the AP government. The annual fee (for AP students) for the first two years (Pre University program) is Rs.36,000/-. This includes tuition, lodging and boarding.',
        },
        {
          icon: 'bulb',
          tag: 'Liberal & Professional Education',
          title: 'A new model of liberal professional education',
          body: 'The program at RGUKT is built on a new model of liberal professional education creating future leaders with a broad understanding of the world. A structured environment of broad based education including basic skills of communication, teamwork and leadership is provided. It aims at making students well equipped with life skills and confident problem solvers rather than over specialized engineers who just know the theory. It prepares the student to meet the demands of the work place and society as he or she navigates through life. It stresses lifelong learning through learning to learn, and learning to live.',
        },
        {
          icon: 'users',
          tag: 'Learning by doing',
          title: 'Mentors and intelligent tutoring',
          body: 'The program uses the learning-by-doing paradigm of education using personalized mentors and intelligent tutoring systems. The program adapts self-paced learning with variable duration to reach the mastery level outcome. Highly qualified and meritorious faculty will be participating in teaching, learning and research. Many of them are being drawn from the world class institutions such as IITs.',
        },
        {
          icon: 'spark',
          tag: 'All-round development',
          title: '30% of time on soft skills',
          body: 'There will be a focus on all-round development with emphasis on personality development and education in Humanities and Social Sciences to make students responsible world citizens. The program is intensive with emphasis on physical training, sports and soft skills. About 30% of time is devoted to soft skills.',
        },
        {
          icon: 'laptop',
          tag: 'ICT mediated',
          title: 'A laptop from the first year',
          body: "All education is mediated through the use of Information and Communication technologies. The academic complex is being connected by high speed LAN which extends to each student's desk and a laptop is provided to each student right from his or her first year. Each class of about 50 students will have mentors who will conduct a discourse and discussion around a prerecorded expert lecture. The best part of this learning paradigm is that students will have time in these class sessions to receive the lecture, ask questions, discuss with the help of mentors and apply the concepts to problem solving. A good student would have no homework!",
        },
      ],
    },
    {
      kind: 'chips',
      heading: 'Life in a Residential Campus',
      caption: 'As a fully residential program, all students will stay on the campus. The program is intensive and runs for 3 semesters of 16 weeks of 6 days a week each.',
      items: [
        { value: '3', label: 'semesters a year' },
        { value: '16', label: 'weeks per semester' },
        { value: '6', label: 'days a week' },
        { value: '6', label: 'weeks of vacation' },
        { value: '1', label: 'week at Dasara' },
        { value: '1', label: 'week at Sankranthi' },
        { value: '4', label: 'weeks in summer' },
      ],
    },
    {
      kind: 'timeline',
      heading: 'A day on campus',
      caption: 'To keep up with this program and life in general, time is set apart for physical fitness activities. During the first two years all students would attend physical training and exercise each morning and participate in sports in the evening.',
      items: [
        { time: 'Morning', title: 'Physical training and exercise', detail: 'Attended by all students during the first two years.' },
        { time: '8 AM – 4 PM', title: 'Four academic periods', detail: 'The daily academic program will consist of 4 periods of just less than 2 hours duration each from 8 AM to 4 PM with a lunch break.' },
        { time: 'Evening', title: 'Sports', detail: 'Students participate in sports during the evening in the first two years.' },
        { time: '7:30 – 10:30 PM', title: 'Soft skills, classics and film', detail: 'During the evening after dinner, there will be programs in soft skills, reading classics, and viewing selected movie programs. This will be a more relaxing and a quiet learning time. Students get to explore their talents in art, drama and music as well.' },
      ],
    },
    {
      kind: 'prose',
      paragraphs: [
        'Subsequent year will offer greater flexibility in individual daily schedule.',
        'While the program appears intensive, it is also designed to help absorption by making students apply concepts right-then-and-there in class.',
        'Separate and secure hostel facilities will be provided for girls and boys. Food and dining facilities will be according to modern standards.',
      ],
    },
    {
      kind: 'callout',
      tone: 'info',
      title: 'Curriculum and regulations',
      body: 'The source page links the curriculum and regulations alongside each programme part.',
      actions: [
        { label: 'Academic Curriculum', to: '/academics/curriculum' },
        { label: 'Academic Regulations', to: '/academics/regulations' },
      ],
    },
  ],
};

/* ── 3. Postgraduate Programmes (live) ────────────────────── */

const postgraduate: AcademicsPage = {
  slug: 'postgraduate',
  route: '/academics/postgraduate',
  title: 'Postgraduate Programme',
  eyebrow: 'Academic Programmes',
  navLabel: 'Postgraduate Programmes',
  icon: 'book',
  sourceUrl: 'https://www.rgukt.in/academics/programmes/postgraduate-programmes/',
  sourceStatus: 'live',
  blocks: [
    {
      kind: 'lead',
      text: 'Rajiv Gandhi University of Knowledge Technologies (RGUKT) in Andhra Pradesh offers postgraduate programs aimed at providing advanced education and research opportunities. The primary postgraduate offering is the Master of Technology (M.Tech) program, designed to equip students with specialized knowledge and skills in various engineering disciplines.',
    },
    {
      kind: 'stats',
      items: [
        { value: '4', label: 'M.Tech specializations' },
        { value: '2', label: 'Career tracks', sub: 'teaching and research' },
        { value: '1', label: 'Primary PG offering', sub: 'Master of Technology' },
      ],
    },
    {
      kind: 'prose',
      heading: 'M.Tech Programs',
      paragraphs: [
        'This course has been designed incorporating advanced Computing Techniques and Tools to suit for the people seeking TEACHING/RESEARCH CAREER in computational Engineering/Sciences competing with world class curricula.',
        'The M.Tech curriculum at RGUKT is structured to incorporate advanced computing techniques and tools, catering to individuals aspiring for teaching or research careers in computational engineering and sciences. The programs are aligned with global standards to ensure competitiveness.',
      ],
    },
    {
      kind: 'cards',
      heading: 'The M.Tech specializations available',
      cols: 2,
      items: [
        {
          icon: 'route',
          tag: 'Civil Engineering',
          title: 'Transportation Engineering',
          body: 'Focuses on the planning, design, operation, and management of transportation systems.',
        },
        {
          icon: 'flask',
          tag: 'Metallurgical and Materials Engineering',
          title: 'Advanced Materials Technology',
          body: 'Centers on the development and application of advanced materials in engineering.',
        },
        {
          icon: 'spark',
          tag: 'Computer Science and Engineering',
          title: 'Artificial Intelligence and Machine Learning',
          body: 'Emphasizes the development of intelligent systems and algorithms capable of learning and decision-making.',
        },
        {
          icon: 'target',
          tag: 'Mechanical Engineering',
          title: 'Engineering Analysis and Design',
          body: 'Concentrates on the application of analytical and computational methods to solve complex engineering problems.',
        },
      ],
    },
    {
      kind: 'flow',
      heading: 'Admission Process',
      variant: 'vertical',
      steps: [
        {
          label: 'Check the official notification',
          sub: 'M.Tech or Ph.D.',
          detail: 'Prospective candidates interested in the M.Tech or Ph.D. programs should refer to the official RGUKT website for detailed information on eligibility criteria, application procedures, and important dates.',
        },
        {
          label: 'Track programme-specific requirements',
          sub: 'Updated regularly',
          detail: "Admission notifications, along with specific requirements for each program, are regularly updated on the university's official portal.",
        },
        {
          label: 'Consult the academic section',
          sub: 'Curricula and regulations',
          detail: 'For comprehensive details on curricula, regulations, and other academic information, applicants are encouraged to consult the academic section of the RGUKT website.',
        },
      ],
    },
    {
      kind: 'prose',
      paragraphs: [
        'By offering these postgraduate programs, RGUKT aims to develop skilled professionals and researchers equipped to contribute significantly to their respective fields.',
      ],
    },
    {
      kind: 'callout',
      tone: 'accent',
      title: 'Applying for a postgraduate programme?',
      actions: [
        { label: 'PG Admissions', to: '/admissions/postgraduate' },
        { label: 'Doctoral Admissions', to: '/admissions/doctoral' },
      ],
    },
  ],
};

/* ── 4. Research Programmes (live) ────────────────────────── */

const research: AcademicsPage = {
  slug: 'research',
  route: '/academics/research-programmes',
  title: 'Research Programmes',
  eyebrow: 'Academic Programmes',
  navLabel: 'Research Programmes',
  icon: 'flask',
  sourceUrl: 'https://www.rgukt.in/academics/programmes/research-programmes/',
  sourceStatus: 'live',
  blocks: [
    {
      kind: 'lead',
      text: 'Rajiv Gandhi University of Knowledge Technologies (RGUKT) offers various research opportunities across its campuses for students in disciplines such as Electronics and Communications Engineering (ECE), Computer Science and Engineering (CSE), Electrical and Electronics Engineering (EEE), Mechanical Engineering, and Chemical Engineering.',
    },
    {
      kind: 'stats',
      items: [
        { value: '5', label: 'Disciplines with research', sub: 'ECE, CSE, EEE, Mech, Chem' },

        { value: '2', label: 'Minor pathways', sub: 'minor and double minor' },
      ],
    },
    {
      kind: 'matrix',
      heading: 'Research Opportunities at RGUKT',
      caption: 'Departmental research strengths, campus by campus.',
      groups: [
        {
          title: 'Chemical Engineering',
          icon: 'flask',
          entries: [
            { campus: 'RGUKT Nuzvid', body: 'The Department of Chemical Engineering focuses on sustainable solutions and global impact through cutting-edge education and research.' },

          ],
        },
        {
          title: 'Electrical and Electronics Engineering (EEE)',
          icon: 'spark',
          entries: [
            { campus: 'RGUKT Srikakulam', body: 'The department emphasizes a comprehensive education that prepares students for successful careers in industry, academia, and research.' },
          ],
        },
        {
          title: 'Mechanical Engineering',
          icon: 'target',
          entries: [

          ],
        },
        {
          title: 'Computer Science and Engineering (CSE)',
          icon: 'laptop',
          entries: [
            { campus: 'RGUKT Nuzvid', body: 'The CSE department provides a curriculum that includes core and elective courses, offering students opportunities to engage in research projects and internships.' },
          ],
        },
        {
          title: 'Electronics and Communications Engineering (ECE)',
          icon: 'chart',
          entries: [

          ],
        },
      ],
    },
    {
      kind: 'cards',
      heading: 'Additional Research Initiatives',
      cols: 2,
      items: [
        {
          icon: 'route',
          tag: 'Minor & Double Minor',
          title: 'Broadening the research scope',
          body: 'RGUKT offers options for students to pursue minors or double minors in various disciplines, allowing them to broaden their research scope. For instance, students can opt for a minor in Computer Science and Engineering or other engineering branches, enhancing interdisciplinary research opportunities.',
        },
      ],
    },
    {
      kind: 'callout',
      tone: 'accent',
      title: 'Explore research at RGUKT-AP',
      actions: [
        { label: 'Thrust Areas', to: '/research/thrust-areas' },
        { label: 'Research Guidelines', to: '/research/guidelines' },
        { label: "Collaboration MoU's", to: '/research/mous' },
      ],
    },
  ],
};

/* ── 5. Summer Programmes (404 on source) ─────────────────── */

const summer: AcademicsPage = {
  slug: 'summer',
  route: '/academics/summer',
  title: 'Summer Programmes',
  eyebrow: 'Academic Programmes',
  navLabel: 'Summer Programmes',
  icon: 'spark',
  sourceUrl: 'https://www.rgukt.in/academics/programmes/summer-programmes/',
  sourceStatus: 'unavailable',
  blocks: [
    {
      kind: 'lead',
      text: 'Summer programmes at RGUKT-AP include certification drives, internships, remedial coaching and faculty development, running through the four-week summer vacation between academic years.',
    },
    {
      kind: 'cards',
      heading: 'What runs over the summer',
      cols: 2,
      items: SUMMER_PROGRAMMES.map((p, i) => ({
        icon: (['book', 'building', 'users', 'bulb'] as BlockIconName[])[i] ?? 'spark',
        title: p.title,
        body: p.body,
      })),
    },
    {
      kind: 'chips',
      heading: 'At a glance',
      items: [
        { value: '4', label: 'weeks of summer vacation' },
        { value: 'NPTEL', label: 'proctored certification' },
        { value: 'FDP', label: 'faculty development' },
      ],
    },
  ],
};

/* ── 6. Academic Regulations (404 on source) ──────────────── */

const regulations: AcademicsPage = {
  slug: 'regulations',
  route: '/academics/regulations',
  title: 'Academic Regulations',
  eyebrow: 'Academics',
  navLabel: 'Academic Regulations',
  icon: 'shield',
  sourceUrl: 'https://www.rgukt.in/academics/regulations/',
  sourceStatus: 'unavailable',
  blocks: [
    {
      kind: 'lead',
      text: 'Official academic regulations governing B.Tech, M.Tech and promotion policies at RGUKT-AP.',
    },
    {
      kind: 'cards',
      heading: 'What the regulations cover',
      cols: 3,
      items: [
        { icon: 'cap', title: 'Programme structure', body: 'Credit requirements, course categories and the six-year integrated progression from PUC to B.Tech.' },
        { icon: 'chart', title: 'Grading & promotion', body: 'Grade points, promotion criteria between semesters and conditions for detention and re-registration.' },
        { icon: 'shield', title: 'Conduct & discipline', body: 'Attendance norms, examination conduct and the disciplinary framework applied across campuses.' },
      ],
    },
    { kind: 'docs', heading: 'Regulations & Policies', items: docs(ACADEMICS_DOCUMENTS.regulations) },
  ],
};

/* ── 7. Academic Calendar (404 on source) ─────────────────── */

const calendar: AcademicsPage = {
  slug: 'calendar',
  route: '/academics/calendar',
  title: 'Academic Calendar',
  eyebrow: 'Academics',
  navLabel: 'Academic Calendar',
  icon: 'calendar',
  sourceUrl: 'https://www.rgukt.in/academics/calendar/',
  sourceStatus: 'unavailable',
  blocks: [
    {
      kind: 'lead',
      text: 'Key academic dates for the current and upcoming semesters across all RGUKT-AP campuses.',
    },
    {
      kind: 'timeline',
      heading: 'Important Dates',
      items: CALENDAR_DATES.map(d => ({
        time: d.start,
        title: d.period,
        detail: `Runs to ${d.end}.`,
      })),
    },
    {
      kind: 'table',
      heading: 'Calendar table',
      columns: ['Period', 'Start', 'End'],
      rows: CALENDAR_DATES.map(d => [d.period, d.start, d.end]),
    },
    { kind: 'docs', heading: 'Download Calendar', items: docs(ACADEMICS_DOCUMENTS.calendar) },
  ],
};

/* ── 8. Academic Curriculum (404 on source) ───────────────── */

const curriculum: AcademicsPage = {
  slug: 'curriculum',
  route: '/academics/curriculum',
  title: 'Academic Curriculum',
  eyebrow: 'Academics',
  navLabel: 'Academic Curriculam',
  icon: 'book',
  sourceUrl: 'https://www.rgukt.in/academics/curriculam/',
  sourceStatus: 'unavailable',
  blocks: [
    {
      kind: 'lead',
      text: 'Syllabus booklets and curriculum frameworks for PUC, B.Tech and M.Tech programmes.',
    },
    {
      kind: 'flow',
      heading: 'Curriculum across the six years',
      steps: [
        { label: 'PUC (Years 1–2)', sub: 'Foundation', detail: 'Mathematics, Physics, Chemistry and Life sciences tracks with a foundation course in IT.' },
        { label: 'B.Tech core (Years 3–4)', sub: 'Discipline core', detail: 'Core engineering courses in the chosen discipline, laboratories and design work.' },
        { label: 'B.Tech electives (Years 5–6)', sub: 'Specialisation', detail: 'Electives, minors, project work and internships leading to the degree.' },
      ],
    },
    { kind: 'docs', heading: 'Curriculum Documents', items: docs(ACADEMICS_DOCUMENTS.curriculum) },
  ],
};

/* ── 9. Examination Procedures (live — source PDF) ────────── */

const examinationProcedures: AcademicsPage = {
  slug: 'examination-procedures',
  route: '/academics/examinations',
  title: 'Examination Procedures',
  eyebrow: 'Examination',
  navLabel: 'Procedures',
  icon: 'doc',
  sourceUrl: 'https://www.rgukt.in/academics/examination/procedures/',
  sourceStatus: 'live',
  blocks: [
    {
      kind: 'lead',
      text: 'The University has fully integrated the Information Technology with the examination processes. The University follows 40:60 model for distribution of marks between internal and external examination.',
    },
    {
      kind: 'ratio',
      heading: 'The 40:60 marks model',
      caption: 'For the Internal component three tests are conducted using MCQs generated on the computer system. The students are also directed to answer them through the system only.',
      parts: [
        { label: 'Internal', value: 40, note: 'three MCQ tests, answered on the system' },
        { label: 'External', value: 60, note: 'term-end examination' },
      ],
    },
    {
      kind: 'callout',
      tone: 'info',
      title: 'Every student is provided with a laptop',
      body: 'It is the policy and practice of the University that every student who gets admission in the University is provided with a Laptop; which is required to be utilised for the purpose of learning and attending internal tests and term-end examinations.',
    },
    {
      kind: 'flow',
      heading: 'IT integration across the examination process',
      caption: 'The following is the IT integration happening at different stages of the examination processes.',
      variant: 'vertical',
      steps: [
        {
          label: 'Pre-examination',
          sub: 'Profiles and registration',
          detail: 'The Admission data of the students is forwarded to the Examination section, which generates profile of every student for the purpose of creating ID and conduction of examination. Based on the Data furnished by the Dean, Academic, the Subjects in which the candidates are taking exam are registered. Accordingly, list of examinees is prepared and tests are held.',
        },
        {
          label: 'During the Examination',
          sub: 'Descriptive + objective',
          detail: 'The pattern followed by the University consists of both descriptive and objective. The objective part of the test is done through MCQs. These MCQs are answered through computer systems. Marks are also noted through the system and forwarded to the Examination office. The practical marks are also forwarded online.',
        },
        {
          label: 'Post Examination',
          sub: 'Processing and results',
          detail: "After the exam is completed, both internal and external marks are forwarded to the Controller's office. The COE will process the same and declares the result. The results are communicated through the Website and the students can download the Marks lists also.",
        },
      ],
    },
    {
      kind: 'cards',
      heading: 'Safeguards and student services',
      cols: 2,
      items: [
        {
          icon: 'shield',
          tag: 'Revaluation',
          title: 'Online grievance redressal',
          body: 'Further, the University, has the provision for revaluation and the students can apply through the Website and get their grievances redressed.',
        },
        {
          icon: 'globe',
          tag: 'NAD',
          title: 'National Academic Depository',
          body: 'The University has also got registered under the National Academic Depository and appointed a Coordinator for this purpose. As part of the process, students and prospective employers will have the advantage of verifying the academic credits and performance through this portal.',
        },
        {
          icon: 'laptop',
          tag: 'Covid period',
          title: 'Fully online conduct',
          body: 'During the Covid period, the entire process was done through the online mode only. The IT systems were revised according to the situation prevalent then.',
        },
        {
          icon: 'doc',
          tag: 'Question Bank',
          title: 'Random selection under the Dean',
          body: 'Further, the University maintains a Question Bank under the supervision of Dean, Academic and the exam questions are drawn from the Bank through an automatic random selection.',
        },
        {
          icon: 'target',
          tag: "Bloom's taxonomy",
          title: 'Outcome-based paper setting',
          body: 'Office of the Controller of Examination, will provide the model question paper following Bloom’s taxonomy. Paper setters must assess on course outcomes outlined in each course and there by the program outcomes can be evaluated. All these processes are handled through computer systems.',
        },
        {
          icon: 'shield',
          tag: 'Marks cards',
          title: 'Security features on results',
          body: 'The declaration of result and the final distribution of Marks cards is done through the online systems. The Physical Marks cards also carry various kinds of security features such as water marks, encrypted data and colour changing, etc.',
        },
      ],
    },
    {
      kind: 'docs',
      heading: 'Source document',
      caption: 'The rgukt.in page presents these procedures as a downloadable PDF.',
      items: [
        {
          title: 'Examination Procedures — RGUKT-AP',
          url: 'https://www.rgukt.in/files/pdfs/496fbb8f7015b42763311eea08e014d5.pdf',
        },
      ],
    },
  ],
};

/* ── 10. Examination Schedules (404 on source) ────────────── */

const examinationSchedules: AcademicsPage = {
  slug: 'examination-schedules',
  route: '/academics/exam-schedules',
  title: 'Examination Schedules',
  eyebrow: 'Examination',
  navLabel: 'Schedules',
  icon: 'calendar',
  sourceUrl: 'https://www.rgukt.in/academics/examination/schedules/',
  sourceStatus: 'unavailable',
  blocks: [
    {
      kind: 'lead',
      text: 'Campus-wise end-semester examination schedules published each semester.',
    },
    {
      kind: 'docFilter',
      heading: 'Schedules by campus',
      caption: 'Pick a campus to see its semester-wise end-semester examination schedules.',
      filters: [...CAMPUSES],
      items: EXAM_SCHEDULES.map(s => ({
        title: `Semester ${s.semester} — 2025-26`,
        url: s.file,
        size: s.size,
        group: s.campus,
      })),
    },
  ],
};

/* ── 11. Central Library (404 on source) ──────────────────── */

const centralLibrary: AcademicsPage = {
  slug: 'central-library',
  route: '/academics/central-library',
  title: 'Central Library',
  eyebrow: 'Academic Facilities',
  navLabel: 'Central Library',
  icon: 'book',
  sourceUrl: 'https://rguktn.ac.in/library/',
  sourceStatus: 'live',
  blocks: [
    {
      kind: 'lead',
      text: 'The Central Library is housed in a separate building with a plinth area of 85,289 sq. ft., supporting the teaching and research programmes of the Institute with open access print collections and state-of-the-art electronic resources.',
    },
    { kind: 'stats', items: LIBRARY_STATS },
    {
      kind: 'cards',
      heading: 'Library Services',
      cols: 3,
      items: [
        { icon: 'book', title: LIBRARY_SERVICES[0], body: 'Open-access print stacks and Koha Online Public Access Catalog (OPAC) across disciplines.' },
        { icon: 'laptop', title: LIBRARY_SERVICES[1], body: 'Direct subscriptions to IEEE Xplore, ASCE, ASME, Knimbus, NPTEL, and NDL repositories.' },
        { icon: 'link', title: LIBRARY_SERVICES[2], body: 'In-house reprography and digital scanning services for reference articles.' },
        { icon: 'home', title: LIBRARY_SERVICES[3], body: 'Faculty reading rooms, discussion rooms, and quiet study carrels across 3 floors.' },
        { icon: 'doc', title: LIBRARY_SERVICES[4], body: 'Departmental exam cell question paper archives and competitive exam cell (GATE/CAT/GRE).' },
        { icon: 'globe', title: LIBRARY_SERVICES[5], body: 'Daily newspapers in multiple languages and curated technical newspaper clipping services.' },
      ],
    },
  ],
};

/* ── 12. Learning Management System (404 on source) ───────── */

const lms: AcademicsPage = {
  slug: 'lms',
  route: '/academics/lms',
  title: 'Learning Management System',
  eyebrow: 'Academic Facilities',
  navLabel: 'Learning Management System',
  icon: 'laptop',
  sourceUrl: 'https://www.rgukt.in/academics/facilities/lms/',
  sourceStatus: 'unavailable',
  blocks: [
    {
      kind: 'lead',
      text: 'Campus learning management systems provide course materials, assignments, forums and grade tracking.',
    },
    {
      kind: 'cards',
      heading: 'LMS Features',
      cols: 2,
      items: [
        { icon: 'doc', title: LMS_FEATURES[0], body: 'Lecture notes, slides and reference material published per course, per semester.' },
        { icon: 'chart', title: LMS_FEATURES[1], body: 'Submissions and timed quizzes handled inside the portal, in line with the internal assessment model.' },
        { icon: 'users', title: LMS_FEATURES[2], body: 'Course-level threads where mentors and students continue the classroom discussion.' },
        { icon: 'clock', title: LMS_FEATURES[3], body: 'Running attendance and internal marks visible to each student through the semester.' },
      ],
    },
    {
      kind: 'links',
      heading: 'Campus LMS Portals',
      items: LMS_PORTALS.map(p => ({ label: p.label, href: p.href, sub: p.href.replace('https://', '') })),
    },
  ],
};

/* ── 13. Timetables (live) ────────────────────────────────── */

const timetables: AcademicsPage = {
  slug: 'timetables',
  route: '/academics/timetables',
  title: 'Timetables',
  eyebrow: 'Academic Services',
  navLabel: 'Timetables',
  icon: 'clock',
  sourceUrl: 'https://www.rgukt.in/academics/services/timetables/',
  sourceStatus: 'live',
  blocks: [
    {
      kind: 'lead',
      text: 'Semester timetables published by the university. The notifications currently listed on rgukt.in cover Semester 1 of academic year 2025-26.',
    },
    {
      kind: 'links',
      heading: 'Sem Timetables',
      caption: 'Published on rgukt.in — Academic Services.',
      items: [
        {
          label: 'Regular EST Time Table Sem1 (AY 25-26)',
          href: 'https://www.rgukt.in/academics/services/timetables/sem-1-reg/',
          sub: 'Notified 11-2025',
        },
        {
          label: 'Remedial Time Table Sem1 (A.Y 25-26)',
          href: 'https://www.rgukt.in/academics/services/timetables/sem-1-rem/',
          sub: 'Notified 11-2025',
        },
      ],
    },
    {
      kind: 'docs',
      heading: 'Campus class timetables',
      caption: 'Semester II class timetables held in university records for each campus.',
      items: TIMETABLES.map(t => ({ title: t.title, url: t.file, size: t.size })),
    },
  ],
};

/* ── 14. Scholarships (404 on source) ─────────────────────── */

const scholarships: AcademicsPage = {
  slug: 'scholarships',
  route: '/academics/scholarships',
  title: 'Scholarships and Financial Assistance',
  eyebrow: 'Academic Services',
  navLabel: 'Scholarships and Financial Assistance',
  icon: 'rupee',
  sourceUrl: 'https://www.rgukt.in/academics/services/scholarships-and-financial-assistance/',
  sourceStatus: 'unavailable',
  blocks: [
    {
      kind: 'lead',
      text: 'Financial assistance schemes for eligible students at RGUKT-AP.',
    },
    {
      kind: 'cards',
      heading: 'Available schemes',
      cols: 2,
      items: SCHOLARSHIPS.map((s, i) => ({
        icon: (['rupee', 'cap', 'home', 'shield'] as BlockIconName[])[i] ?? 'rupee',
        title: s.name,
        body: s.desc,
      })),
    },
    {
      kind: 'callout',
      tone: 'accent',
      title: 'Student-side scholarship information',
      actions: [{ label: 'Students · Scholarships', to: '/students/scholarships' }],
    },
  ],
};

/* ── 15. Orientation Programme (404 on source) ────────────── */

const orientation: AcademicsPage = {
  slug: 'orientation',
  route: '/academics/orientation',
  title: 'Orientation Programme',
  eyebrow: 'Academic Services',
  navLabel: 'Orientation Programme',
  icon: 'users',
  sourceUrl: 'https://www.rgukt.in/academics/services/orientation-programme/',
  sourceStatus: 'unavailable',
  blocks: [
    {
      kind: 'lead',
      text: 'The orientation programme welcomes newly admitted students to campus life and academic expectations.',
    },
    {
      kind: 'flow',
      heading: 'Orientation Components',
      variant: 'vertical',
      steps: ORIENTATION_COMPONENTS.map(c => ({ label: c })),
    },
  ],
};

/* ── 16. Council Minutes (404 on source) ──────────────────── */

const councilMinutes: AcademicsPage = {
  slug: 'council-minutes',
  route: '/academics/council-minutes',
  title: 'Council Minutes',
  eyebrow: 'Academics',
  navLabel: 'Council Minutes',
  icon: 'doc',
  sourceUrl: 'https://www.rgukt.in/academics/academic-council-minutes/',
  sourceStatus: 'unavailable',
  blocks: [
    {
      kind: 'lead',
      text: 'Minutes of Academic Council and Governing Council meetings.',
    },
    { kind: 'docs', heading: 'Council Minutes', items: docs(ACADEMICS_DOCUMENTS.councilMinutes) },
    {
      kind: 'callout',
      tone: 'info',
      title: 'The councils behind these minutes',
      actions: [
        { label: 'Academic Council', to: '/administration/academic-council' },
        { label: 'Governing Council', to: '/administration/governing-council' },
      ],
    },
  ],
};

/* ── registry ─────────────────────────────────────────────── */

export const ACADEMICS_PAGES: AcademicsPage[] = [
  overview,
  undergraduate,
  postgraduate,
  research,
  summer,
  regulations,
  calendar,
  curriculum,
  examinationProcedures,
  examinationSchedules,
  centralLibrary,
  lms,
  timetables,
  scholarships,
  orientation,
  councilMinutes,
];

/** Grouping mirrors the Academics dropdown on rgukt.in. */
export const ACADEMICS_GROUPS: SectionNavGroup[] = [
  { label: 'Overview', slugs: ['overview'] },
  { label: 'Academic Programmes', slugs: ['undergraduate', 'postgraduate', 'research', 'summer'] },
  { label: 'Academics', slugs: ['regulations', 'calendar', 'curriculum', 'council-minutes'] },
  { label: 'Examination', slugs: ['examination-procedures', 'examination-schedules'] },
  { label: 'Academic Facilities', slugs: ['central-library', 'lms'] },
  { label: 'Academic Services', slugs: ['timetables', 'scholarships', 'orientation'] },
];

export function getAcademicsPageBySlug(slug: string): AcademicsPage | undefined {
  return ACADEMICS_PAGES.find(p => p.slug === slug);
}
