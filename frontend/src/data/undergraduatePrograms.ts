export interface UGProgram {
  id: string;
  code: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  discipline: string;
  intakePerCampus: number;
  iconName: string;
  image: string;
  keyAreas: string[];
  laboratoryInfrastructure: string[];
  careerDirections: string[];
  minorOptions?: string[];
  campusAvailability: {
    nuzvid: boolean;
    rkValley: boolean;
    srikakulam: boolean;
    ongole: boolean;
  };
}

export interface UGJourneyStep {
  step: string;
  phase: string;
  title: string;
  duration: string;
  description: string;
  highlights: string[];
  icon: string;
}

export const UG_JOURNEY_STEPS: UGJourneyStep[] = [
  {
    step: '01',
    phase: 'Entry',
    title: 'Class 10 / SSC Exit',
    duration: 'Merit Gateway',
    description: 'Direct admission based on Class 10 GPA with 0.4 deprivation score weightage for rural government school students.',
    highlights: ['Merit-based admission', '0.4 rural weightage', 'Subsidized care'],
    icon: 'School',
  },
  {
    step: '02',
    phase: 'PUC-1',
    title: 'PUC – Year 1 (P1)',
    duration: 'Semesters 1 & 2',
    description: 'Foundational Mathematics, Physics, Chemistry, English Communication, and 1-to-1 individual laptop allocation.',
    highlights: ['1-to-1 Laptop issued', 'Learning-by-doing', 'English lab'],
    icon: 'Laptop',
  },
  {
    step: '03',
    phase: 'PUC-2',
    title: 'PUC – Year 2 (P2)',
    duration: 'Semesters 3 & 4',
    description: 'Advanced calculus, scientific fundamentals, Python programming, and branch allocation counselling.',
    highlights: ['Calculus & Physics', 'Remedial tutoring', 'Branch counselling'],
    icon: 'BookOpen',
  },
  {
    step: '04',
    phase: 'Engg E1',
    title: 'Engineering Year 1 (E1)',
    duration: 'Semesters 5 & 6',
    description: 'Induction into chosen engineering department, basic mechanics, circuits, and core laboratory workshops.',
    highlights: ['Dept orientation', 'Core science-to-engg', 'Hardware labs'],
    icon: 'Layers',
  },
  {
    step: '05',
    phase: 'Engg E2',
    title: 'Engineering Year 2 (E2)',
    duration: 'Semesters 7 & 8',
    description: 'Intermediate departmental theory, domain laboratories, design algorithms, and mini-project execution.',
    highlights: ['Core domain theory', 'Mini-projects', 'NPTEL certs'],
    icon: 'Cpu',
  },
  {
    step: '06',
    phase: 'Engg E3',
    title: 'Engineering Year 3 (E3)',
    duration: 'Semesters 9 & 10',
    description: 'Advanced departmental electives, minor degree tracks, and mandatory summer industrial internships.',
    highlights: ['Minor degree courses', 'Summer internship', 'GATE training'],
    icon: 'FlaskConical',
  },
  {
    step: '07',
    phase: 'Engg E4',
    title: 'Engineering Year 4 (E4)',
    duration: 'Semesters 11 & 12',
    description: 'Major capstone design project, industry research thesis, and campus placement recruitments.',
    highlights: ['Capstone thesis', 'Placement season', 'Research papers'],
    icon: 'Sparkles',
  },
  {
    step: '08',
    phase: 'Award',
    title: 'B.Tech Degree Conferral',
    duration: 'Graduation',
    description: 'Conferral of the 6-Year Integrated B.Tech degree with major/minor specializations at the convocation.',
    highlights: ['AICTE/UGC degree', 'Alumni network', 'Global careers'],
    icon: 'GraduationCap',
  },
];

export const UG_PROGRAMS: UGProgram[] = [
  {
    id: 'cse',
    code: 'CSE',
    name: 'Computer Science & Engineering',
    shortDescription: 'Core computing principles, software engineering, AI/ML, cloud systems, algorithms, and cyber security.',
    fullDescription: 'The Department of Computer Science & Engineering delivers comprehensive education in computational theory, software design, artificial intelligence, and scalable distributed systems with hands-on smart computing laboratories.',
    discipline: 'Computer Science & Engineering',
    intakePerCampus: 60,
    iconName: 'Code',
    image: '/disciplines/cse.jpg',
    keyAreas: [
      'Data Structures & Algorithms',
      'Artificial Intelligence & Machine Learning',
      'Database Systems & Big Data',
      'Cloud Computing & Networks',
      'Cyber Security & Cryptography',
    ],
    laboratoryInfrastructure: [
      'High-Performance Computing Cluster',
      'AI & Deep Learning Laboratory',
      'Advanced Software Development Lab',
    ],
    careerDirections: [
      'Software Development Engineer (SDE)',
      'AI / ML Engineer',
      'Data Scientist',
      'Cloud Architect',
    ],
    minorOptions: ['Business Management', 'Artificial Intelligence', 'Mathematics'],
    campusAvailability: {
      nuzvid: true,
      rkValley: true,
      srikakulam: true,
      ongole: true,
    },
  },
  {
    id: 'ece',
    code: 'ECE',
    name: 'Electronics & Communications Engineering',
    shortDescription: 'VLSI design, embedded systems, wireless communications, digital signal processing, and microchips.',
    fullDescription: 'The Department of Electronics & Communications Engineering equips students with deep domain expertise in semiconductor devices, microprocessors, wireless networks, and embedded system prototyping.',
    discipline: 'Electronics & Communications Engineering',
    intakePerCampus: 60,
    iconName: 'Radio',
    image: '/disciplines/ece.jpg',
    keyAreas: [
      'VLSI Design & System-on-Chip (SoC)',
      'Embedded Systems & IoT',
      'Digital Signal Processing (DSP)',
      'Wireless & 5G Communications',
      'Microwave & RF Engineering',
    ],
    laboratoryInfrastructure: [
      'Cadence VLSI Design Suite Lab',
      'Embedded Microcontroller Lab',
      'Digital Communication & DSP Lab',
    ],
    careerDirections: [
      'VLSI Design & Verification Engineer',
      'Embedded Firmware Developer',
      'Telecom & RF Engineer',
      'IoT Solutions Specialist',
    ],
    minorOptions: ['Computer Science', 'Robotics & Automation', 'Economics'],
    campusAvailability: {
      nuzvid: true,
      rkValley: true,
      srikakulam: true,
      ongole: true,
    },
  },
  {
    id: 'eee',
    code: 'EEE',
    name: 'Electrical & Electronics Engineering',
    shortDescription: 'Power grids, electrical wiring connections, high-voltage transmission, renewable energy, and EV drives.',
    fullDescription: 'The Department of Electrical & Electronics Engineering bridges high-voltage power transmission with modern micro-converters, solar/wind integration, and electric vehicle powertrain design.',
    discipline: 'Electrical & Electronics Engineering',
    intakePerCampus: 60,
    iconName: 'Zap',
    image: '/disciplines/eee.jpg',
    keyAreas: [
      'Power Systems & Smart Grids',
      'Power Electronics & EV Drives',
      'Solar & Wind Energy Systems',
      'Control Systems & Automation',
      'Electrical Machine Design',
    ],
    laboratoryInfrastructure: [
      'Power Systems Simulation Lab',
      'Power Electronics & Drives Lab',
      'Renewable Energy Microgrid Testbed',
    ],
    careerDirections: [
      'Power Systems & Grid Engineer',
      'EV Powertrain Specialist',
      'Renewable Energy Consultant',
      'Control & Automation Engineer',
    ],
    minorOptions: ['Computer Science', 'Energy Economics', 'Management'],
    campusAvailability: {
      nuzvid: true,
      rkValley: true,
      srikakulam: false,
      ongole: true,
    },
  },
  {
    id: 'mech',
    code: 'MECH',
    name: 'Mechanical Engineering',
    shortDescription: 'Thermal sciences, mechanical robotics, CAD/CAM machinery, precision gears, and manufacturing automation.',
    fullDescription: 'The Department of Mechanical Engineering offers rigorous training across thermal engineering, finite element analysis (FEA), fluid mechanics, CNC machining, and modern robotics.',
    discipline: 'Mechanical Engineering',
    intakePerCampus: 60,
    iconName: 'Settings',
    image: '/disciplines/mech.jpg',
    keyAreas: [
      'CAD/CAM & Digital Simulation',
      'Thermal Systems & Heat Transfer',
      'Finite Element Analysis (FEA)',
      'Computational Fluid Dynamics (CFD)',
      'Robotics & Manufacturing Metrology',
    ],
    laboratoryInfrastructure: [
      'CAD/CAM & Simulation Centre',
      'Thermal Engineering & IC Engines Lab',
      'CNC Machine Workshop',
    ],
    careerDirections: [
      'CAE & Simulation Engineer',
      'Thermal Systems Specialist',
      'Manufacturing & Production Lead',
      'Automotive Systems Analyst',
    ],
    minorOptions: ['Computer Science', 'Materials Engineering', 'Business'],
    campusAvailability: {
      nuzvid: true,
      rkValley: true,
      srikakulam: true,
      ongole: true,
    },
  },
  {
    id: 'civil',
    code: 'CIVIL',
    name: 'Civil Engineering',
    shortDescription: 'Modern structural design, bridge engineering, highway networks, soil mechanics, and urban infrastructure.',
    fullDescription: 'The Department of Civil Engineering prepares engineers to design, construct, and manage modern public and private infrastructure, including earthquake-resistant structures and smart transit networks.',
    discipline: 'Civil Engineering',
    intakePerCampus: 60,
    iconName: 'Building',
    image: '/disciplines/civil.jpg',
    keyAreas: [
      'Structural Analysis & Concrete Tech',
      'Transportation & Highway Design',
      'Geotechnical & Soil Mechanics',
      'Water Resources & Hydraulics',
      'GIS & Remote Sensing Surveying',
    ],
    laboratoryInfrastructure: [
      'Structural Dynamics & Concrete Lab',
      'Transportation & Pavement Testing Lab',
      'Geotechnical Soil Mechanics Lab',
    ],
    careerDirections: [
      'Structural Design Consultant',
      'Transportation Planning Engineer',
      'Geotechnical Analyst',
      'Infrastructure Project Manager',
    ],
    minorOptions: ['Computer Science', 'Environmental Economics', 'Management'],
    campusAvailability: {
      nuzvid: true,
      rkValley: true,
      srikakulam: true,
      ongole: true,
    },
  },
  {
    id: 'chem',
    code: 'CHEM',
    name: 'Chemical Engineering',
    shortDescription: 'Chemical laboratory reactions, glassware solutions, process simulation, thermodynamics, and industrial safety.',
    fullDescription: 'The Department of Chemical Engineering trains students in reaction kinetics, thermodynamics, transport phenomena, and industrial process control for pharmaceuticals, energy, and polymer industries.',
    discipline: 'Chemical Engineering',
    intakePerCampus: 60,
    iconName: 'FlaskRound',
    image: '/disciplines/chem.jpg',
    keyAreas: [
      'Process Design & Simulation',
      'Chemical Reaction Engg & Catalysis',
      'Mass & Heat Transfer Operations',
      'Petrochemicals & Polymers',
      'Industrial Safety & Environment',
    ],
    laboratoryInfrastructure: [
      'Chemical Reaction Engineering Lab',
      'Mass & Heat Transfer Operations Lab',
      'Process Instrumentation & Control Lab',
    ],
    careerDirections: [
      'Chemical Process Design Engineer',
      'Plant Operations Executive',
      'Pharma & Petrochemical R&D Scientist',
      'Environmental Compliance Engineer',
    ],
    minorOptions: ['Computer Science', 'Materials Science', 'Business'],
    campusAvailability: {
      nuzvid: true,
      rkValley: true,
      srikakulam: false,
      ongole: false,
    },
  },
  {
    id: 'mme',
    code: 'MME',
    name: 'Metallurgical & Materials Engineering',
    shortDescription: 'Molten metallurgy, metal forging, advanced alloy materials, crystallography, and characterization.',
    fullDescription: 'The Department of Metallurgical & Materials Engineering investigates structure-property-processing relationships of metals, alloys, ceramics, and semiconductors for aerospace and electronics.',
    discipline: 'Metallurgical & Materials Engineering',
    intakePerCampus: 60,
    iconName: 'Atom',
    image: '/disciplines/mme.jpg',
    keyAreas: [
      'Physical & Mechanical Metallurgy',
      'Nanomaterials & Thin Films',
      'Thermodynamics & Phase Diagrams',
      'Advanced Characterization (SEM/XRD)',
      'Corrosion Science & Protection',
    ],
    laboratoryInfrastructure: [
      'Central Materials Characterization Lab',
      'Heat Treatment & Metallography Lab',
      'Mechanical Testing & Fracture Lab',
    ],
    careerDirections: [
      'Materials Characterization Specialist',
      'Metallurgical Quality Lead',
      'Aerospace Materials Analyst',
      'Semiconductor Materials Engineer',
    ],
    minorOptions: ['Computer Science', 'Mechanical Engineering', 'Business'],
    campusAvailability: {
      nuzvid: true,
      rkValley: true,
      srikakulam: false,
      ongole: false,
    },
  },
];

export const UG_PEDAGOGICAL_PILLARS = [
  {
    title: '1-to-1 Digital Laptop Allocation',
    description: 'Every student receives an individual high-configuration laptop from year one to access online courses, coding platforms, and digital library databases.',
    icon: 'Laptop',
  },
  {
    title: 'Learning-by-Doing Paradigm',
    description: 'Classrooms emphasize interactive mentor-led discourse around expert lectures with immediate hands-on problem solving in labs.',
    icon: 'Cpu',
  },
  {
    title: 'Holistic Time (~30% Soft Skills)',
    description: 'Balanced education allocating substantial time to English communication labs, physical training, sports, humanities, and classical arts.',
    icon: 'HeartHandshake',
  },
];
