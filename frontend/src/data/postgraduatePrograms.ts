export interface PGProgram {
  id: string;
  code: string;
  title: string;
  degree: string;
  duration: string;
  parentDiscipline: string;
  department: string;
  shortDescription: string;
  fullDescription: string;
  researchAndIndustryFocus: string;
  keySkillsDeveloped: string[];
  curriculumHighlights: string[];
  computationalTools: string[];
  careerTrajectories: string[];
  eligibility: string;
  campusAvailabilityNotes: string;
  image: string;
  iconName: string;
  campusAvailability: {
    nuzvid: boolean;
    rkValley: boolean;
    srikakulam: boolean;
    ongole: boolean;
  };
}

export interface SpecializationConnection {
  ugBranch: string;
  ugCode: string;
  pgSpecialization: string;
  pgCode: string;
  focusArea: string;
  industryAlignment: string;
  icon: string;
}

export const PG_PROGRAMS: PGProgram[] = [
  {
    id: 'ai-ml',
    code: 'MTECH-AIML',
    title: 'Artificial Intelligence & Machine Learning',
    degree: 'M.Tech',
    duration: '2 Years (4 Semesters)',
    parentDiscipline: 'Computer Science & Engineering',
    department: 'Department of Computer Science & Engineering',
    shortDescription: 'Advanced computational intelligence, deep neural networks, natural language processing, computer vision, and distributed AI computing.',
    fullDescription: 'The M.Tech in Artificial Intelligence & Machine Learning prepares specialists for modern computational research and AI engineering. Emphasizes statistical learning theory, deep learning architectures, reinforcement learning, and high-performance GPU computing.',
    researchAndIndustryFocus: 'Applied generative AI, intelligent health diagnostics, autonomous systems, edge AI acceleration, and Indian language computational NLP.',
    keySkillsDeveloped: [
      'Deep Neural Network Design',
      'Computer Vision & Multimodal Perception',
      'NLP & LLM Fine-Tuning',
      'Distributed GPU Computing',
      'AI Ethics & Robustness',
    ],
    curriculumHighlights: [
      'Mathematical Foundations of Data Science',
      'Deep Learning & Generative Models',
      'Large Scale Machine Learning Architectures',
      '1-Year Dedicated Industry/R&D Thesis',
    ],
    computationalTools: ['PyTorch', 'TensorFlow', 'CUDA / GPU Clusters', 'Hugging Face', 'Ray Distributed AI'],
    careerTrajectories: [
      'AI Research Scientist in R&D Labs',
      'Principal Machine Learning Engineer',
      'Computer Vision / NLP Architect',
      'Doctoral Research Scholar',
    ],
    eligibility: 'B.E. / B.Tech in CSE / IT / ECE with valid GATE score or qualified in RGUKT PG Entrance.',
    campusAvailabilityNotes: 'Supported with dedicated GPU computing clusters and industry R&D thesis links.',
    image: '/disciplines/cse.jpg',
    iconName: 'Cpu',
    campusAvailability: {
      nuzvid: true,
      rkValley: true,
      srikakulam: false,
      ongole: false,
    },
  },
  {
    id: 'advanced-materials',
    code: 'MTECH-AMT',
    title: 'Advanced Materials Technology',
    degree: 'M.Tech',
    duration: '2 Years (4 Semesters)',
    parentDiscipline: 'Metallurgical & Materials Engineering',
    department: 'Department of Metallurgical & Materials Engineering',
    shortDescription: 'Nanomaterials synthesis, functional ceramics, high-entropy alloys, energy storage materials, and electron microscopy.',
    fullDescription: 'The M.Tech in Advanced Materials Technology focuses on materials for aerospace, defense, clean energy, and microelectronics. Students perform advanced characterization, phase transformation modeling, and computational materials science.',
    researchAndIndustryFocus: 'Solid-state battery electrolytes, high-temperature superalloys, 2D nanomaterials for sensors, and corrosion-resistant thin films.',
    keySkillsDeveloped: [
      'Advanced XRD, SEM & TEM Characterization',
      'Nanomaterial Synthesis & Surface Engg',
      'Computational Materials Modeling (DFT)',
      'Energy Storage Materials',
      'Failure Analysis & Quality Assurance',
    ],
    curriculumHighlights: [
      'Thermodynamics & Kinetics of Materials',
      'Advanced Characterization Techniques',
      'Nanostructured Materials & Devices',
      '1-Year Dedicated Materials R&D Thesis',
    ],
    computationalTools: ['VASP (DFT)', 'Thermo-Calc', 'ImageJ', 'Materials Studio', 'COMSOL Multiphysics'],
    careerTrajectories: [
      'Materials R&D Scientist (ISRO/DRDO)',
      'Semiconductor Materials Specialist',
      'Battery & Clean Energy Engineer',
      'Doctoral Research Scholar',
    ],
    eligibility: 'B.E. / B.Tech in Metallurgy / Materials / Mechanical / Chemical or M.Sc. in Physics/Materials with valid GATE / PG Entrance.',
    campusAvailabilityNotes: 'Equipped with Advanced Materials Characterization and High-Resolution Microscopy facilities.',
    image: '/disciplines/mme.jpg',
    iconName: 'Atom',
    campusAvailability: {
      nuzvid: true,
      rkValley: false,
      srikakulam: false,
      ongole: false,
    },
  },
  {
    id: 'transportation-engg',
    code: 'MTECH-TE',
    title: 'Transportation Engineering',
    degree: 'M.Tech',
    duration: '2 Years (4 Semesters)',
    parentDiscipline: 'Civil Engineering',
    department: 'Department of Civil Engineering',
    shortDescription: 'Intelligent transportation systems (ITS), traffic flow simulation, sustainable highway pavement design, and urban transit planning.',
    fullDescription: 'The M.Tech in Transportation Engineering equips engineers with computational and experimental skills to design, analyze, and operate safe, resilient, and green transportation networks.',
    researchAndIndustryFocus: 'AI-driven traffic optimization, EV charging infrastructure, recycled pavement materials, and highway safety audit systems.',
    keySkillsDeveloped: [
      'Intelligent Transportation Systems (ITS)',
      'Traffic Simulation & Network Modeling',
      'Pavement Material Characterization',
      'GIS for Urban Infrastructure',
      'Road Safety Engineering & Auditing',
    ],
    curriculumHighlights: [
      'Traffic Flow Theory & Simulation',
      'Pavement Analysis & Sustainable Design',
      'Urban Transportation Systems Planning',
      '1-Year Transportation Field/Research Thesis',
    ],
    computationalTools: ['VISSIM', 'AIMSUN', 'ArcGIS / QGIS', 'KENPAVE', 'TransCAD'],
    careerTrajectories: [
      'Transportation Planning & ITS Consultant',
      'Highway & Pavement Specialist (NHAI)',
      'Urban Transit Operations Analyst',
      'Doctoral Scholar & Researcher',
    ],
    eligibility: 'B.E. / B.Tech in Civil Engineering with valid GATE score or qualified in RGUKT PG Entrance.',
    campusAvailabilityNotes: 'Supported by advanced traffic simulation software suites and pavement testing testbeds.',
    image: '/disciplines/civil.jpg',
    iconName: 'Building2',
    campusAvailability: {
      nuzvid: true,
      rkValley: true,
      srikakulam: false,
      ongole: false,
    },
  },
  {
    id: 'engg-analysis-design',
    code: 'MTECH-EAD',
    title: 'Engineering Analysis & Design',
    degree: 'M.Tech',
    duration: '2 Years (4 Semesters)',
    parentDiscipline: 'Mechanical Engineering',
    department: 'Department of Mechanical Engineering',
    shortDescription: 'Nonlinear finite element analysis (FEA), computational fluid dynamics (CFD), multi-body dynamics, robotics, and fatigue reliability.',
    fullDescription: 'The M.Tech in Engineering Analysis & Design is a computationally intensive program designed to solve complex structural, thermal, and dynamic problems in automotive, aerospace, and energy sectors.',
    researchAndIndustryFocus: 'Lightweight composite structures, thermal management in high-power electronics, crashworthiness simulation, and robotic actuator dynamics.',
    keySkillsDeveloped: [
      'Nonlinear FEA & Structural Dynamics',
      'CFD & Multiphase Flow Simulation',
      'Vibration Analysis & Diagnostics',
      'Design for Additive Manufacturing',
      'Fatigue & Reliability Engineering',
    ],
    curriculumHighlights: [
      'Advanced Finite Element Methods',
      'Computational Fluid Dynamics',
      'Advanced Mechanics of Composites',
      '1-Year Industry CAD/CAE Thesis',
    ],
    computationalTools: ['ANSYS Mechanical & Fluent', 'Abaqus', 'HyperMesh', 'SolidWorks', 'OpenFOAM'],
    careerTrajectories: [
      'Senior CAE / FEA Simulation Engineer',
      'CFD Aerodynamics Specialist',
      'Structural Dynamics & NVH Engineer',
      'R&D Scientist in National Labs',
    ],
    eligibility: 'B.E. / B.Tech in Mechanical / Aerospace / Production / Automobile with valid GATE / PG Entrance.',
    campusAvailabilityNotes: 'Equipped with High Performance CAE and CFD simulation suites.',
    image: '/disciplines/mech.jpg',
    iconName: 'Settings',
    campusAvailability: {
      nuzvid: true,
      rkValley: true,
      srikakulam: false,
      ongole: false,
    },
  },
];

export const SPECIALIZATION_MAP: SpecializationConnection[] = [
  {
    ugBranch: 'Computer Science & Engineering',
    ugCode: 'B.Tech CSE',
    pgSpecialization: 'Artificial Intelligence & Machine Learning',
    pgCode: 'M.Tech AI & ML',
    focusArea: 'Deep Learning, Scalable Generative AI & Autonomous Systems',
    industryAlignment: 'Tier-1 Tech R&D, AI Labs & Intelligent Systems',
    icon: 'Cpu',
  },
  {
    ugBranch: 'Metallurgical & Materials Engineering',
    ugCode: 'B.Tech MME',
    pgSpecialization: 'Advanced Materials Technology',
    pgCode: 'M.Tech AMT',
    focusArea: 'Nanomaterials, High-Entropy Alloys & Energy Storage',
    industryAlignment: 'Aerospace R&D (ISRO/DRDO) & Semiconductor Materials',
    icon: 'Atom',
  },
  {
    ugBranch: 'Civil Engineering',
    ugCode: 'B.Tech CIVIL',
    pgSpecialization: 'Transportation Engineering',
    pgCode: 'M.Tech TE',
    focusArea: 'Intelligent Transportation Systems (ITS) & Sustainable Infrastructure',
    industryAlignment: 'National Infrastructure (NHAI), Smart Cities & Metro Transit',
    icon: 'Building2',
  },
  {
    ugBranch: 'Mechanical Engineering',
    ugCode: 'B.Tech MECH',
    pgSpecialization: 'Engineering Analysis & Design',
    pgCode: 'M.Tech EAD',
    focusArea: 'Computational FEA, CFD Dynamics & Multiphysics Simulation',
    industryAlignment: 'Automotive CAE, Aerospace Propulsion & Precision Robotics',
    icon: 'Settings',
  },
];

export const PG_ACADEMIC_FRAMEWORK = [
  {
    title: 'Computational Engineering Core',
    description: 'Postgraduate specializations integrate high-performance computing, mathematical modeling, simulation algorithms, and numerical methods.',
    icon: 'Cpu',
  },
  {
    title: '1-Year Research Dissertation',
    description: 'The entire second year (Semesters 3 & 4) is dedicated to an in-depth thesis project conducted in RGUKT laboratories or with premier industry partners.',
    icon: 'FlaskConical',
  },
  {
    title: 'Teaching & Research Assistantships',
    description: 'Eligible postgraduate scholars receive academic stipend support and gain instructional experience mentoring undergraduate laboratory sessions.',
    icon: 'Award',
  }
];
