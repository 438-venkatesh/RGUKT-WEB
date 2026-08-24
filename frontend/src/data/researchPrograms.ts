export interface PhDCategory {
  id: string;
  title: string;
  targetAudience: string;
  description: string;
  eligibility: string;
  financialSupport: string;
  icon: string;
}

export interface ResearchThrustArea {
  id: string;
  title: string;
  departments: string[];
  description: string;
  keyInitiatives: string[];
  laboratoriesAndCentres: string[];
  activeProjects: string;
  image: string;
  icon: string;
}

export interface CampusResearchProfile {
  campus: string;
  district: string;
  verifiedStrengths: string[];
  keyLaboratories: string[];
  researchHighlights: string;
  image: string;
  campusLink: string;
}

export interface ResearchMilestone {
  stage: string;
  title: string;
  timeline: string;
  description: string;
  keyRequirements: string[];
  icon: string;
}

export const PHD_REGISTRATION_MODES: PhDCategory[] = [
  {
    id: 'full-time',
    title: 'Full-Time Research Scholars (Regular)',
    targetAudience: 'Candidates dedicating 100% time to doctoral research on campus.',
    description: 'Scholars conduct active experimental and computational research in RGUKT laboratories under faculty supervision with access to institutional fellowships.',
    eligibility: 'Master’s degree in Engineering / Technology / Science with minimum 60% marks (or 6.5 CGPA) and valid GATE/NET or RGUKT Entrance Examination score.',
    financialSupport: 'University Research Fellowships (URF) / Teaching Assistantships (TA) and funded project JRF/SRF positions.',
    icon: 'GraduationCap',
  },
  {
    id: 'part-time-internal',
    title: 'Part-Time Research Scholars (Internal Faculty / Staff)',
    targetAudience: 'Permanent and regular teaching faculty of RGUKT-AP campuses.',
    description: 'Enables qualified university educators to pursue doctoral research alongside academic teaching duties to upgrade institutional research capacity.',
    eligibility: 'Master’s degree in relevant discipline and minimum 1 year of continuous service at RGUKT-AP.',
    financialSupport: 'Supported through institutional research facilities, seed grants, and academic leave provisions.',
    icon: 'BookOpen',
  },
  {
    id: 'external-sponsored',
    title: 'External / Sponsored Research Scholars',
    targetAudience: 'Professionals working in reputed R&D labs, industry, and government organizations.',
    description: 'Scholars undertake research at their parent organization with joint supervision from an RGUKT faculty guide and an external organizational co-guide.',
    eligibility: 'Master’s degree with minimum 2 years of relevant R&D/industrial experience and a No Objection Certificate (NOC) from the sponsoring employer.',
    financialSupport: 'Sponsored fully by the parent organization/employer.',
    icon: 'Building2',
  },
];

export const RESEARCH_THRUST_AREAS: ResearchThrustArea[] = [
  {
    id: 'quantum-computing',
    title: 'Quantum Computing & Quantum Algorithms',
    departments: ['Computer Science & Engineering', 'Physics', 'Mathematics'],
    description: 'Pioneering research in quantum algorithms, quantum error correction, quantum cryptography, and quantum machine learning simulations.',
    keyInitiatives: [
      'Amaravati Quantum Valley institutional collaboration',
      'Quantum circuit synthesis and error mitigation models',
      'Hybrid quantum-classical optimization algorithms',
      'Undergraduate and doctoral quantum simulation testbeds',
    ],
    laboratoriesAndCentres: [
      'Undergraduate Quantum Computing Laboratory',
      'High-Performance Computational Quantum Cluster',
    ],
    activeProjects: 'Collaborative research on NISQ-era algorithms and educational quantum curriculum.',
    image: '/gallery/quantum-research-thrust.jpg',
    icon: 'Atom',
  },
  {
    id: 'ai-data-science',
    title: 'Artificial Intelligence, Deep Learning & Cyber Security',
    departments: ['Computer Science & Engineering', 'Electronics & Communications Engineering'],
    description: 'Fundamental and applied investigation in computer vision, multilingual NLP, distributed federated learning, and cyber threat intelligence.',
    keyInitiatives: [
      'Indian language translation & speech recognition systems',
      'Medical imaging diagnostic models for rural healthcare',
      'Robust and privacy-preserving federated machine learning',
      'Blockchain-enabled secure data transmission protocols',
    ],
    laboratoriesAndCentres: [
      'Advanced AI & GPU Deep Learning Center',
      'Network Security & Threat Intelligence Lab',
    ],
    activeProjects: 'Extramural AICTE- and state-funded deep learning projects for automated diagnostics.',
    image: '/disciplines/cse.jpg',
    icon: 'Cpu',
  },
  {
    id: 'materials-nanotech',
    title: 'Advanced Materials Science & Nanotechnology',
    departments: ['Metallurgical & Materials Engineering', 'Chemical Engineering', 'Chemistry'],
    description: 'Synthesis and microscopic characterization of 2D materials, thin-film supercapacitors, solid-state batteries, and high-entropy alloys.',
    keyInitiatives: [
      'High-resolution characterization of nanostructured coatings',
      'Corrosion mitigation in maritime and coastal environments',
      'Polymer nanocomposites for lightweight structural applications',
      'Green synthesis of metallic nanoparticles for water purification',
    ],
    laboratoriesAndCentres: [
      'Central Advanced Materials Characterization Facility',
      'Thin Film Synthesis & Nanotechnology Laboratory',
    ],
    activeProjects: 'DST-SERB and industry-sponsored materials characterization and failure analysis.',
    image: '/disciplines/mme.jpg',
    icon: 'Microscope',
  },
  {
    id: 'renewable-energy-smart-grid',
    title: 'Renewable Energy Systems & Smart Grid Technology',
    departments: ['Electrical & Electronics Engineering', 'Mechanical Engineering'],
    description: 'Renewable power integration, microgrid stability control, EV battery management systems (BMS), and solar photovoltaic optimization.',
    keyInitiatives: [
      'Wide-area monitoring and protection in smart grids',
      'High-efficiency power electronic converters for solar farms',
      'Thermal runaway prevention in lithium-ion battery packs',
      'Wind-solar hybrid generation modeling and forecasting',
    ],
    laboratoriesAndCentres: [
      'Smart Grid & Power Electronics Simulation Lab',
      'Renewable Energy Microgrid Testbed',
    ],
    activeProjects: 'Solar microgrid optimization and distributed grid-tied inverter design.',
    image: '/disciplines/eee.jpg',
    icon: 'Zap',
  },
  {
    id: 'smart-infra-transportation',
    title: 'Smart Infrastructure, Structural Dynamics & Transportation',
    departments: ['Civil Engineering', 'Mechanical Engineering'],
    description: 'Resilient earthquake-resistant design, sustainable pavement materials, intelligent traffic flow management, and water resources modeling.',
    keyInitiatives: [
      'Recycled aggregate concrete for sustainable construction',
      'Intelligent traffic surveillance and congestion modeling',
      'Hydrological watershed modeling and flood mitigation',
      'Structural health monitoring using IoT sensor networks',
    ],
    laboratoriesAndCentres: [
      'Structural Dynamics & Pavement Materials Testing Lab',
      'GIS & Geotechnical Environmental Testing Lab',
    ],
    activeProjects: 'Regional flood modeling and sustainable pavement design with state agencies.',
    image: '/disciplines/civil.jpg',
    icon: 'Building2',
  },
  {
    id: 'vlsi-embedded-systems',
    title: 'VLSI Design, Embedded Systems & 5G/6G Networks',
    departments: ['Electronics & Communications Engineering'],
    description: 'Low-power CMOS circuit design, FPGA hardware acceleration, wireless communication protocols, and industrial IoT edge architectures.',
    keyInitiatives: [
      'Energy-efficient System-on-Chip (SoC) for IoT sensors',
      'Massive MIMO beamforming algorithms for next-gen wireless',
      'Embedded machine learning on low-power microcontrollers',
      'Robotics automation and sensor fusion architectures',
    ],
    laboratoriesAndCentres: [
      'Cadence & Synopsys VLSI Simulation Suite',
      '5G/6G Wireless Communication Testbed',
    ],
    activeProjects: 'Ministry of Electronics & IT (MeitY) and collaborative IoT hardware projects.',
    image: '/disciplines/ece.jpg',
    icon: 'Radio',
  },
];

export const FOUR_CAMPUS_RESEARCH: CampusResearchProfile[] = [
  {
    campus: 'RGUKT Nuzvid',
    district: 'Eluru District',
    verifiedStrengths: [
      'Materials Characterization (SEM / XRD)',
      'Artificial Intelligence & Deep Learning',
      'Chemical Synthesis & Process Engineering',
      'Undergraduate Quantum Computing Research',
    ],
    keyLaboratories: [
      'Central Characterization Facility',
      'AI & High Performance GPU Center',
      'Chemical Process Simulation Lab',
    ],
    researchHighlights: 'Leading multi-departmental research with active Ph.D. scholars in AI, metallurgy, and smart energy systems.',
    image: '/campuses/nuzvid.jpg',
    campusLink: 'https://www.rguktn.ac.in',
  },
  {
    campus: 'RGUKT RK Valley',
    district: 'YSR Kadapa District',
    verifiedStrengths: [
      'VLSI & System-on-Chip Prototyping',
      'Solar Photovoltaic & Renewable Energy',
      'Structural Dynamics & Transportation Lab',
      'Computational Fluid Dynamics & Thermal Analysis',
    ],
    keyLaboratories: [
      'Cadence Microelectronics Design Lab',
      'Renewable Energy & EV Powertrain Lab',
      'Advanced CFD & CAE Simulation Cluster',
    ],
    researchHighlights: 'Strong focus on hardware systems, power electronics, and intelligent regional infrastructure.',
    image: '/campuses/rk-valley.jpg',
    campusLink: 'https://www.rguktrkv.ac.in',
  },
  {
    campus: 'RGUKT Srikakulam',
    district: 'Srikakulam District',
    verifiedStrengths: [
      'Coastal Environmental & Water Quality Testing',
      'Embedded Systems & Sensor Networks',
      'Foundational Computing & Data Analytics',
      'Renewable Power Integration Systems',
    ],
    keyLaboratories: [
      'Environmental Engineering Analysis Lab',
      'Microcontrollers & Embedded Prototyping Lab',
      'Computer Vision & Machine Learning Facility',
    ],
    researchHighlights: 'Fostering emerging research in regional coastal infrastructure and computational algorithms.',
    image: '/campuses/srikakulam.jpg',
    campusLink: 'https://rguktsklm.ac.in',
  },
  {
    campus: 'RGUKT Ongole',
    district: 'Prakasam District',
    verifiedStrengths: [
      'Software Architecture & Cyber Security',
      'IoT Agricultural & Industrial Automation',
      'Advanced Concrete Materials Characterization',
      'Electrical Drives & Power Converters',
    ],
    keyLaboratories: [
      'Smart Agriculture & IoT Automation Lab',
      'Cyber Security & Threat Analysis Suite',
      'Advanced Building Materials Testbed',
    ],
    researchHighlights: 'Rapidly growing research programs emphasizing smart electronics and sustainable civil infrastructure.',
    image: '/campuses/ongole.jpg',
    campusLink: 'https://www.rguktong.ac.in',
  },
];

export const RESEARCH_MILESTONES: ResearchMilestone[] = [
  {
    stage: 'Stage 1',
    title: 'Induction & Coursework',
    timeline: 'Months 0 – 12',
    description: 'Completion of 12-16 credits of doctoral coursework including Research Methodology & Research and Publication Ethics (RPE).',
    keyRequirements: [
      'Minimum CGPA of 7.0 in coursework',
      'Identification of Research Supervisor & DRC assignment',
      'Literature review & problem formulation',
    ],
    icon: 'BookOpen',
  },
  {
    stage: 'Stage 2',
    title: 'Comprehensive Examination & SOTA',
    timeline: 'Months 12 – 18',
    description: 'Passing the written and oral Comprehensive Examination followed by State-of-the-Art (SOTA) research proposal defense.',
    keyRequirements: [
      'Comprehensive exam clearance',
      'SOTA proposal presentation before DRC',
      'Confirmation of Ph.D. Candidacy',
    ],
    icon: 'FileCheck',
  },
  {
    stage: 'Stage 3',
    title: 'Experimental Research & Progress Reviews',
    timeline: 'Months 18 – 36',
    description: 'Conducting core experiments, data modeling, and presenting half-yearly progress reports before the Doctoral Research Committee.',
    keyRequirements: [
      'Satisfactory half-yearly DRC progress reviews',
      'Conference presentations & peer feedback',
      'Patent filings / prototype demonstrations',
    ],
    icon: 'Microscope',
  },
  {
    stage: 'Stage 4',
    title: 'Journal Publications & Pre-Synopsis Seminar',
    timeline: 'Months 36 – 48',
    description: 'Publishing mandatory peer-reviewed research papers in SCI/Scopus indexed journals and presenting the open Pre-Ph.D. seminar.',
    keyRequirements: [
      'Minimum 2 SCI/Scopus journal papers published',
      'Open Pre-Ph.D. Synopsis seminar before DRC',
      'Submission of Ph.D. Synopsis',
    ],
    icon: 'Award',
  },
  {
    stage: 'Stage 5',
    title: 'Thesis Submission & Viva-Voce Defense',
    timeline: 'Months 48 – 60',
    description: 'Submission of the doctoral dissertation, external peer evaluation by 3 examiners, and open public viva-voce defense.',
    keyRequirements: [
      'Plagiarism verification (< 10% similarity index)',
      'Unanimous acceptance by external thesis examiners',
      'Open public oral viva-voce examination',
    ],
    icon: 'GraduationCap',
  },
];
