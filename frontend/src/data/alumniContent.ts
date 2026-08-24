/**
 * RGUKT-AP Alumni Section Content — Aligned with official university records (2025–2026)
 * Governing alumni networks across Nuzvid, RK Valley, Ongole, and Srikakulam campuses
 */

export interface AlumniPillar {
  title: string;
  tagline: string;
  description: string;
  icon: string;
}

export interface CampusAlumniEcosystem {
  campus: string;
  associationName: string;
  structure: string;
  coordinator?: string;
  officeLocation: string;
  email: string;
  portalUrl?: string;
  registrationUrl?: string;
  keyInitiatives: string[];
}

export interface FeaturedAlumnus {
  name: string;
  campus: 'Nuzvid' | 'RK Valley' | 'Ongole' | 'Srikakulam';
  degree: string;
  batch?: string;
  role: string;
  organization: string;
  field: 'Civil & Public Services' | 'Space & Scientific Research' | 'Entrepreneurship & Tech' | 'Software & Industry';
  achievement: string;
  contribution?: string;
}

export interface AlumniActivity {
  title: string;
  campus: string;
  type: string;
  description: string;
  impact: string;
}

export const ALUMNI_INTRO = {
  title: 'Alumni Ecosystem at RGUKT-AP',
  lead:
    'The Rajiv Gandhi University of Knowledge Technologies – Andhra Pradesh Alumni ecosystem represents a global network of accomplished engineering graduates from Nuzvid, RK Valley (Idupulapaya), Ongole, and Srikakulam campuses. Born out of a visionary initiative to provide world-class technical education to rural talent, RGUKT alumni now lead transformative careers across top-tier multinational corporations, civil administration, national scientific laboratories, defense forces, and dynamic technology startups.',
  purpose:
    'Alumni engagement at RGUKT fosters a lifelong bridge between graduates and their alma mater. Alumni actively give back to the university by mentoring students, conducting technical workshops, funding student innovations, advising on curriculum improvements, and facilitating campus placements.',
};

export const ALUMNI_PILLARS: AlumniPillar[] = [
  {
    title: '1-on-1 Mentorship & Career Guidance',
    tagline: 'Empowering Next-Gen Rural Engineers',
    description:
      'Alumni working in Fortune 500 tech companies and premier research institutions provide one-on-one mentorship to pre-final and final-year students on competitive coding, resume reviews, system design, and technical interview roadmaps.',
    icon: 'mentorship',
  },
  {
    title: 'Alumni Tech Talks & Knowledge Series',
    tagline: 'Bridging Academia with Industry 4.0',
    description:
      'Regular guest webinars, masterclasses, and hands-on workshops on Artificial Intelligence, Cloud Architectures, VLSI Semiconductor Design, and Cybersecurity delivered by practicing alumni engineers from Google, Microsoft, Amazon, Intel, and Qualcomm.',
    icon: 'tech-talks',
  },
  {
    title: 'Higher Education & Research Pathways',
    tagline: 'Navigating GATE, GRE, and Doctoral Studies',
    description:
      'Alumni pursuing Master’s and Ph.D. programs at IISc, IITs, Stanford, and premier European universities mentor students on GATE preparation, research proposal drafting, international scholarship applications, and graduate admissions.',
    icon: 'research',
  },
  {
    title: 'Civil Services & Public Leadership Circle',
    tagline: 'Guiding Aspirants into Administration',
    description:
      'Interactive guidance sessions by alumni who successfully cracked the UPSC Civil Services Examination (IAS/IPS/IRS), Engineering Services Examination (ESE), and State Group-I services, providing structured strategy and interview guidance.',
    icon: 'civil-services',
  },
  {
    title: 'Student Innovation & Conference Support',
    tagline: 'Corpus Grants for Global Competitions',
    description:
      'Alumni associations provide partial financial sponsorship, travel assistance, and mentorship for student teams presenting research papers at international conferences and competing in national hackathons.',
    icon: 'innovation',
  },
  {
    title: 'Placement Referrals & Internships',
    tagline: 'Expanding Industry Opportunities',
    description:
      'Active corporate networks facilitate verified job referrals, pre-placement talks, internship opportunities, and industry-sponsored hackathons across the university.',
    icon: 'placements',
  },
];

export const CAMPUS_ALUMNI_NETWORKS: CampusAlumniEcosystem[] = [
  {
    campus: 'RGUKT Nuzvid Campus',
    associationName: 'International & Alumni Relations (IAR)',
    structure: 'Constituent campus alumni & global relations directorate',
    coordinator: 'Mr. K. Sivalal, Assistant Professor, Department of ECE (Faculty In-Charge)',
    officeLocation: 'Room No. 97, Administrative Block (I-3), RGUKT Nuzvid Campus',
    email: 'alumni@rguktn.ac.in',
    portalUrl: 'https://alumni.rguktn.ac.in/',
    registrationUrl: 'https://forms.gle/vhQPp74RcVQZzm7X7',
    keyInitiatives: [
      'Eternox Alumni Platform: Dedicated homecoming and digital network rekindling alumni connection with campus.',
      'Corpus Student Development Fund: Partial financial assistance for scholars attending global research conferences.',
      'Domain-Specific Alumni Communities: Special interest groups in AI, Embedded Systems, Core Engineering, and Management.',
      'City Chapters: Active regional networking chapters in Hyderabad, Bengaluru, Chennai, and overseas chapters.',
    ],
  },
  {
    campus: 'RGUKT RK Valley (Idupulapaya) Campus',
    associationName: 'RGUKT RK Valley Alumni Association (RGURAA)',
    structure: 'Registered Alumni Association under the Societies Registration Act',
    coordinator: 'RGURAA Governing Body & Faculty Advisory Committee',
    officeLocation: 'Academic Block - 1, RGUKT RK Valley Campus, Kadapa District',
    email: 'alumni@rguktrkv.ac.in',
    portalUrl: 'https://rguktrkv.ac.in/',
    keyInitiatives: [
      'Fireside Chats & Tech Series: Interactive technical dialogues and leadership journeys streamed for current scholars.',
      'Decennial Chapter Reunions: Milestone 10-year batch reunions bringing alumni back to Idupulapaya.',
      'Alumni Achievement Awards: Annual institutional recognition for excellence in entrepreneurship, research, and public service.',
      'Samprovation Magazine & Campus Saransh: Official alumni-driven publication and knowledge-sharing portal.',
    ],
  },
  {
    campus: 'RGUKT Ongole Campus',
    associationName: 'Alumni Coordination & Career Mentorship Cell',
    structure: 'Campus alumni coordination desk & career guidance unit',
    coordinator: 'Campus Alumni Liaison Committee',
    officeLocation: 'Administrative Office, RGUKT Ongole Campus, Prakasam District',
    email: 'alumni@rguktong.ac.in',
    portalUrl: 'https://www.rgukt.in/',
    keyInitiatives: [
      'Early-Career Mentoring: Recent graduates mentoring juniors on coding fundamentals, project execution, and campus placements.',
      'GATE & ESE Study Circles: Alumni-led peer guidance and resource sharing for national competitive exams.',
      'Industry Transition Webinars: Sessions on transitioning from college to corporate software and VLSI environments.',
    ],
  },
  {
    campus: 'RGUKT Srikakulam Campus',
    associationName: 'Alumni Relations Cell, S.M. Puram',
    structure: 'Campus alumni relations and higher education cell',
    coordinator: 'Alumni Faculty In-Charge, S.M. Puram',
    officeLocation: 'Permanent Campus, S.M. Puram, Etcherla Mandal, Srikakulam District',
    email: 'alumni@rguktsklm.ac.in',
    portalUrl: 'https://www.rguktsklm.ac.in/',
    keyInitiatives: [
      'Srikakulam Alumni Network: Fostering connect with graduates serving in premier IT firms, research labs, and public sectors.',
      'Higher Studies Counseling: Guidance on M.Tech./MS admissions at IITs, NITs, and central universities.',
      'Technical Mock Interview Drives: Mock coding and HR interview series organized by working alumni.',
    ],
  },
];

export const FEATURED_ALUMNI: FeaturedAlumnus[] = [
  {
    name: 'G. Raghava Reddy',
    campus: 'RK Valley',
    degree: 'B.Tech in Civil Engineering',
    role: 'Assistant Executive Engineer / Central Govt. Cadre',
    organization: 'Central Public Works / Engineering Services',
    field: 'Civil & Public Services',
    achievement:
      'Secured All India Rank 3 (AIR-3) in the prestigious UPSC Engineering Services Examination (ESE) and top national ranks in GATE.',
    contribution: 'Mentors RGUKT civil and mechanical engineering scholars on GATE/ESE strategy and public engineering careers.',
  },
  {
    name: 'T. Purushottam',
    campus: 'Nuzvid',
    degree: 'B.Tech in Mechanical Engineering',
    role: 'Research Scientist',
    organization: 'Indian Space Research Organisation (ISRO)',
    field: 'Space & Scientific Research',
    achievement:
      'Contributed as a scientist at ISRO working on satellite launch vehicle subsystems and aerospace engineering.',
    contribution: 'Delivers guest lectures on space engineering and computational fluid dynamics for undergraduate scholars.',
  },
  {
    name: 'Rajashekar Avuti',
    campus: 'Nuzvid',
    degree: 'B.Tech in Computer Science & Engineering',
    role: 'Senior Scientific Officer',
    organization: 'International Crops Research Institute for the Semi-Arid Tropics (ICRISAT)',
    field: 'Space & Scientific Research',
    achievement:
      'Leads advanced computational agriculture, scientific data modeling, and genomics data architectures at ICRISAT.',
    contribution: 'Collaborates on research initiatives involving IoT in precision agriculture and data analytics.',
  },
  {
    name: 'Mohan Sri Ramakrishna',
    campus: 'Nuzvid',
    degree: 'B.Tech in Electrical & Electronics Engineering',
    role: 'Founder & Chief Executive Officer',
    organization: 'Electrovolt',
    field: 'Entrepreneurship & Tech',
    achievement:
      'Founded Electrovolt, an innovative clean mobility and advanced EV battery management technology company.',
    contribution: 'Mentors student innovators on clean-tech hardware prototyping and entrepreneurial venture building.',
  },
  {
    name: 'M. Karthik Reddy',
    campus: 'RK Valley',
    degree: 'B.Tech in Computer Science & Engineering',
    role: 'Co-Founder & CEO',
    organization: 'BroChill',
    field: 'Entrepreneurship & Tech',
    achievement:
      'Co-founded BroChill, a high-growth vernacular AI social content platform backed by prominent angel investors.',
    contribution: 'Conducts startup workshops and mentors campus coding clubs on scalable cloud software architecture.',
  },
  {
    name: 'Malireddy Rajasekhar',
    campus: 'Nuzvid',
    degree: 'B.Tech in Computer Science & Engineering',
    role: 'Senior Software Engineer & Platform Architect',
    organization: 'Enterprise IT / Systems',
    field: 'Software & Industry',
    achievement:
      'Developed OLMS (Online Leave Management System), an automated governance platform deployed institutionally across RGUKT campuses.',
    contribution: 'Built core digital software systems utilized daily by thousands of students and university administrators.',
  },
];

export const RECENT_ALUMNI_ACTIVITIES: AlumniActivity[] = [
  {
    title: 'Eternox Alumni Homecoming & Tech Meet',
    campus: 'RGUKT Nuzvid',
    type: 'Alumni Gathering & Mentorship',
    description:
      'Annual homecoming organized by International & Alumni Relations (IAR), featuring interactive panels between industry alumni and undergraduate engineering students.',
    impact: 'Connected hundreds of pre-final year scholars directly with engineers from Google, Amazon, Intel, and Qualcomm.',
  },
  {
    title: 'RGURAA Fireside Chat Series',
    campus: 'RGUKT RK Valley',
    type: 'Technical & Career Webinar',
    description:
      'Interactive virtual series organized by RGURAA covering career transitions, higher education in the US/Europe, and UPSC civil services preparation.',
    impact: 'Live interactive Q&A and personalized roadmaps shared with students preparing for competitive examinations.',
  },
  {
    title: 'Domain-Specific Tech Talk on AI & VLSI',
    campus: 'Four-Campus Initiative',
    type: 'Guest Lecture Series',
    description:
      'Alumni semiconductor and AI engineers conducted hands-on technical sessions covering modern silicon design workflows, FPGA testbeds, and deep learning frameworks.',
    impact: 'Enriched academic coursework with current industrial best practices and open-source tooling.',
  },
  {
    title: 'Decennial Chapter Reunions',
    campus: 'RGUKT RK Valley & Nuzvid',
    type: 'Milestone Reunion',
    description:
      'Commemorative 10-year reunions of founding batches, celebrating institutional heritage and establishing student scholarship funds.',
    impact: 'Contributed to campus development and fostered lasting alumni-faculty collaboration.',
  },
];
