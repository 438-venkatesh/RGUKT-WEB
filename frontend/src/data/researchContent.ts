/**
 * Research Section Content — Single Source of Truth: https://rgukt.in
 *
 * Strictly derived from official RGUKT-AP portal pages and official PDF records.
 * Contains no external internet research, outside statistics, or speculative data.
 */

export type ResearchNavItem = {
  label: string;
  href: string;
};

export const RESEARCH_NAV: ResearchNavItem[] = [
  { label: 'Overview', href: '/research' },
  { label: 'Research Head', href: '/research/head' },
  { label: 'Ethics for Research', href: '/research/ethics' },
  { label: 'Thrust Areas', href: '/research/thrust-areas' },
  { label: 'Guidelines', href: '/research/guidelines' },
  { label: 'Collaboration MoUs', href: '/research/mous' },
  { label: 'Research Advisory Committee', href: '/research/advisory-committee' },
];

export const RESEARCH_OVERVIEW = {
  title: 'Research Ecosystem at RGUKT',
  rguktUrl: 'https://www.rgukt.in/research/',
  intro:
    'Research at Rajiv Gandhi University of Knowledge Technologies is an integral and dynamic part of the university academic ecosystem. RGUKT promotes creative and scholarly inquiry, fostering innovations and developments aimed at solving technological challenges and addressing societal needs.',
  ecosystemHeading: 'Academic & Research Ecosystem',
  ecosystemPillars: [
    'Peer-Reviewed Quality: Student and faculty research projects undergo structured peer review involving national and international experts to maintain academic and scientific standards.',
    'Societal Impact & Rural Innovation: The university encourages research that protects the environment, betters the quality of life, and addresses problems in the vicinity and rural sectors.',
    'Conferences & Academic Symposia: RGUKT organizes conferences, symposia, and workshops attracting scholars and professionals across engineering, sciences, and humanities.',
    'Academic Collaborations & MoUs: The university maintains active partnerships with premier institutes and industries through Memoranda of Understanding (MoUs) for joint research, faculty exchange, and cooperative projects.',
  ],
  supportHeading: 'Institutional Research Support & Governance',
  supportItems: [
    'Research & Development Cell: Facilitates initiation, implementation, monitoring, and evaluation of sponsored research and consultancy projects across campuses.',
    'Faculty Development Fund (FDF): Institutional mechanism where research overheads and publication incentives are channeled to support faculty research activities, laboratory consumables, and conference participation.',
    'Seed Grant Assistance: Need-based seed funding provided to faculty members to initiate exploratory research projects and leverage major external grants.',
    'Industry Consultancy: Structured revenue-sharing framework for faculty consultancy in research/field work, materials testing, and technical investigations.',
  ],
  image: {
    src: '/gallery/gallery-6.jpg',
    alt: 'Research and Laboratory Facilities at RGUKT',
    caption: 'Faculty and student researchers engaged in laboratory experimentation and scientific research at RGUKT.',
    tag: 'Research Ecosystem',
  },
};

export const RESEARCH_HEAD = {
  title: 'About Research Head',
  rguktUrl: 'https://www.rgukt.in/research/head/',
  name: 'Dr. Bogala Konda Reddy',
  degrees: 'M.Tech, Ph.D.',
  designation: 'Head, Department of Mechanical Engineering & Dean of Research and Development (R&D)',
  photo: '/people/dean-rd-konda-reddy.jpg',
  intro:
    'Dr. Bogala Konda Reddy, M.Tech, Ph.D., is the Head of the Department of Mechanical Engineering at RGUKT RK Valley and Dean of Research & Development at RGUKT. He completed his Ph.D. in Heat Transfer from IIT Madras (2010–2013), M.Tech in Thermal Engineering from NIT Warangal (2005–2007), and B.Tech in Mechanical Engineering from JNTU Hyderabad (2000–2004).',
  academicBackgroundHeading: 'Academic & Professional Background',
  backgroundItems: [
    'Edison Engineer at General Electric (GE) (2007–2009): Focused on the design and thermal analysis of motor control centers.',
    'Joined RGUKT in 2013: Joined as Lecturer in 2013 and became Assistant Professor in 2016.',
    'Research Interests: Multi-mode and inverse heat transfer, computational methods in engineering, and energy system design and optimization.',
  ],
  researchAndPublicationsHeading: 'Research Projects & Publications',
  researchItems: [
    'Sponsored Research Project: Principal Investigator for "Design and development of biomass-fired wood gas stoves for rural applications," sponsored by the MHRD, Government of India.',
    'Scholarly Publications: Authored high-impact journal articles, including publications in the International Journal of Heat and Mass Transfer and the Journal of Thermal Sciences.',
    'Conference Presentations: Presented papers at international conferences, including the ISHMT-ASME and the European Thermal Sciences Conference.',
    'Textbook & Course Contributions: Assisted Prof. C. Balaji in authoring books and NPTEL lectures on thermal system design and optimization.',
  ],
  administrativeRolesHeading: 'Teaching & Administrative Leadership',
  administrativeItems: [
    'Teaching Courses: Fluid mechanics, thermodynamics, heat transfer, and power plant engineering.',
    'Dean of Academics, RGUKT RK Valley (2016–2018).',
    'Associate Dean of Academics, RGUKT RK Valley (2015–2016).',
    'Placement Coordinator, RGUKT RK Valley (2014–2015).',
    'Head of the Department (HoD), Mechanical Engineering, RGUKT RK Valley.',
  ],
  officeAddress: 'I3 Block, RGUKT Nuzvid / RGUKT RK Valley',
  contacts: [
    {
      name: 'Dr. Bogala Konda Reddy',
      role: 'Dean of Research & Development (R&D), RGUKT',
      email: 'dean.rd@rgukt.in',
      note: 'Office: I3 Block, RGUKT',
    },
  ],
};

export const RESEARCH_ETHICS = {
  title: 'Ethics for Research',
  rguktUrl: 'https://www.rgukt.in/research/ethics/',
  intro:
    'RGUKT envisages a well-defined policy and a well-laid procedure for promoting academic integrity and handling allegations of misconduct in research. A clear definition of misconduct with a legal foundation prescribes procedural rules, along with measures to be taken if allegations are upheld after following due process.',
  policyHeading: 'Policy on Research Misconduct & Due Process',
  policyPoints: [
    'Definition & Procedures: The regulations clearly define responsibility at each step of the procedure, process for consideration of available evidence, provisions for constitution of investigation committees, provisions to rule out conflicts of interest, and the procedural principles of the rule of law.',
    'Fair Hearing: It is important that both the complainant and respondent are allowed to be heard at every stage of the process.',
    'Confidentiality: Information relating to the persons involved in the ongoing process and findings of the investigation are treated in strict confidence until it is demonstrated that misconduct has occurred.',
    'Timebound Proceedings: The university ensures the completion of the entire process promptly within a given appropriate timeframe.',
  ],
  explanationHeading: 'Distinction of Misconduct & Institutional Regulations',
  explanationContent:
    'It is to be emphasised that every breach of good research practice does not constitute misconduct and the same needs to be distinguished. Only when there is a deliberate or grossly negligent infringement as defined in a set of regulations should be considered scientific misconduct including fabrication or falsification of data, and plagiarism using data from other authors’ work.',
  linkedCodesHeading: 'Linked Institutional Codes and Regulations:',
  linkedCodes: [
    'Code of Good Academic Research Practices',
    'The Disciplinary Regulations',
    'Policy on Harassment Prevention',
  ],
  phdCommitment:
    'The registration to the Ph.D. programme at the Higher Educational Institution signifies that the researcher has accepted the conditions and guidelines set out in the policies and commits to respect all aspects of research throughout the programme. To further inform researchers on aspects of research such as academic responsibility and integrity, the university provides courses or workshops on research ethics.',
  authorshipHeading: 'Authorship Standards',
  authorshipContent:
    'For academic accountability, all authors must make a genuine, identifiable contribution to the content of a research publication in experimental planning, experimentation, collection/analysis of data, software, and/or writing of the text. It is also important that all authors have agreed on the final version of the work to be published. Unless it has been explicitly stated otherwise, all authors share responsibility for the published work.',
};

export const THRUST_AREAS = {
  title: 'Thrust Areas of Research',
  rguktUrl: 'https://www.rgukt.in/research/thrust-areas/',
  intro:
    'RGUKT encourages carrying out research that helps in protecting the environment, betters quality of life, and helps in meeting the grand technological and scientific challenges facing mankind today. Conscious of its social responsibility, RGUKT helps in addressing problems of the vicinity and identifies the following areas of research as its thrust areas for in-house research:',
  areasHeading: 'Official Thrust Areas for In-House Research @ RGUKT',
  areas: [
    'Nano-Technology (Drug design, Membranes, Industrial Coatings and other Industrial Applications)',
    'Green technologies (Computing, Communications, Infrastructure and other Technologies)',
    'Water (Conservation, Purification, Utilization, Systems, etc.)',
    'Energy (Conventional and Alternative Energy Resources - Solar PV, Wind, Fuel Cells, Nuclear, Hybrid, other Energy Sources, Energy storage, etc.)',
    'Data mining, Information systems, Information Security and High Performance Computing',
    'Wireless Communications, Sensor Networks and VLSI (Cellular, Next Generation Internet, VLSI Design, Sensor and Ad-hoc Networks, etc.)',
    'Computational - x (e.g. Computational Physics, Computational Fluid Dynamics, Computational Electromagnetics, etc.)',
    'Implementation, Policy, Economical and Social Issues of Major Projects of public interest (Cases of Jalayagnam, E-Seva, ICT based education, River Networking, etc.)',
    'Health Care (Telemedicine, Medical Informatics, Drug Design, Public Health, etc.)',
    'Robotics and Intelligent Manufacturing (Robotics, Rapid Prototyping, Intelligent Manufacturing, etc.)',
    'Bioinformatics, Biomaterials and Biopharmaceuticals',
    'Technologies for the rural and Unorganized Sectors',
    'Education Science and Technology',
  ],
  image: {
    src: '/gallery/gallery-7.jpg',
    alt: 'Research Thrust Areas at RGUKT',
    caption: 'Interdisciplinary research across nano-technology, green energy, computing, and rural engineering.',
    tag: 'Thrust Areas',
  },
};

export const GUIDELINES = {
  title: 'Research Guidelines',
  rguktUrl: 'https://www.rgukt.in/research/guidelines/',
  intro:
    'RGUKT has established comprehensive guidelines for the promotion of research and consultancy activities across its campuses. Research and development is a major pillar of strength in the university system, aiming to bring faculty together to nurture and promote scientific excellence.',
  frameworkHeading: 'Key Dimensions of Research & Consultancy Guidelines',
  frameworkItems: [
    'Research Ecosystem & Motivation: Facilitates initiation, implementation, monitoring, and evaluation of research projects. Promotes research excellence and faculty development.',
    'Faculty Development Fund (FDF): Overheads and incentives from funded projects are credited to a dedicated Faculty Development Fund in the name of the investigator to support conference travel, publication fees, laboratory materials, and research tools.',
    'Publication Incentives & Academic Leave: Graded incentives for high-quality research publications; contract faculty permitted academic leave of up to 20 days per academic year for research pursuits.',
    'Consultancy Projects & Revenue Sharing: Structured guidelines for faculty consultancy with industry across three categories: Type I (Research / Field work), Type II (Materials Testing), and Type III (Routine Testing). Revenue is shared between the faculty and university with the former receiving the major share.',
    'Seed Grant for Research: Need-based seed grants provided to faculty upon proposal evaluation to initiate research projects and prepare for major external funding.',
    'Incubation Centers & Industry Focus: Fostering technologies catering to local industries (agro-based food processing and storage in the Krishna/Godavari delta near Nuzvid; mining and mineral processing near RK Valley).',
    'Student Product Fairs & Cash Prizes: Annual exhibitions of final-year engineering projects to display innovative talent to industries and the public, backed by university incentive cash prizes.',
  ],
  documents: [
    {
      title: 'Guidelines for Promotion of Research and Consultancy Activities at RGUKT (PDF)',
      url: 'https://rgukt.in/files/pdfs/dee97cf737a3e4671c29c511b1582a81.pdf',
    },
  ],
};

export const COLLABORATION_MOUS = {
  title: 'Collaboration MoUs',
  rguktUrl: 'https://www.rgukt.in/research/collaboration-mous/',
  intro:
    'RGUKT actively enters into Memoranda of Understanding (MoUs) and collaborative partnerships with premier academic institutions, national research bodies, and industry organizations to foster collaborative research, faculty exchange, student internships, and technological innovation.',
  mousHeading: 'Official Collaboration MoUs @ RGUKT',
  mous: [
    'Memorandum of Understanding (MoU) with Bureau of Indian Standards (BIS)',
    'Memorandum of Understanding Between RGUKT and Indian School of Business (ISB)',
    'Memorandum of Understanding Between RGUKT and M/s Efftronics Systems Pvt. Ltd, Vijayawada',
    'Memorandum of Understanding Between RGUKT and National Institute of Technology Warangal (NIT Warangal)',
    'Memorandum of Understanding Between RGUKT and Andhra Pradesh State Skill Development Corporation (APSSDC)',
    'Memorandum of Understanding Between RGUKT and Indian Institute of Technology Hyderabad (IIT Hyderabad)',
    'Memorandum of Understanding Between RGUKT and Indian Institute of Technology Tirupati (IIT Tirupati)',
    'Memorandum of Understanding Between RGUKT Srikakulam and Telecommunications Consultants India Limited (TCIL)',
    'Memorandum of Understanding Between RGUKT and the Korean Cultural & Technological Center',
    'Memorandum of Understanding Between RGUKT Srikakulam and the RAILTEL Corporation of India Ltd.',
    'RGUKT Signing of MoU with Aalborg University Denmark for Collaborative Research and Academic Activities',
  ],
  image: {
    src: '/gallery/gallery-10.jpg',
    alt: 'Academic and Industry Collaborations at RGUKT',
    caption: 'MoU signings and collaborative partnerships between RGUKT, premier institutes, and industry leaders.',
    tag: 'Institutional MoUs',
  },
};

export const ADVISORY_COMMITTEE = {
  title: 'Research Advisory Committee',
  rguktUrl: 'https://www.rgukt.in/research/advisory-committee/',
  intro:
    'The Research Advisory Committee at RGUKT provides strategic direction and policy guidance for university-wide research initiatives, inter-campus research coordination, sponsored project reviews, and academic-industry collaborations in accordance with the Guidelines for Promotion of Research and Consultancy Activities.',
  functionsHeading: 'Key Roles & Responsibilities',
  functions: [
    'Formulating long-term research policy and identifying emerging strategic research areas for the university.',
    'Evaluating faculty research proposals for institutional seed grants and monitoring progress.',
    'Reviewing and recommending collaborative research proposals, industry MoUs, and inter-institutional partnerships.',
    'Overseeing adherence to research ethics, integrity standards, and intellectual property guidelines.',
    'Guiding the establishment and upgradation of central research facilities across all constituent campuses.',
  ],
  compositionHeading: 'Committee Framework:',
  composition: [
    'Vice-Chancellor, RGUKT — Chairperson',
    'Dean of Research & Development (R&D), RGUKT — Convener / Member Secretary',
    'Directors of Constituent Campuses (Nuzvid, RK Valley, Ongole, Srikakulam) — Members',
    'Deans of Academics of Constituent Campuses — Members',
    'Nominated External Academic & Industry Experts — Members',
  ],
  contacts: [
    {
      name: 'Office of the Dean of Research & Development',
      role: 'Secretariat, Research Advisory Committee, RGUKT',
      email: 'dean.rd@rgukt.in',
    },
  ],
};
