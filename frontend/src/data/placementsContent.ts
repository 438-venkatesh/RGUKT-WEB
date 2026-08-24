/**
 * RGUKT-AP Training & Placements Section Content (2025–2026)
 * Governed by the Directorate of Entrepreneurship, Incubation, Training & Placements (EITP)
 * and Career Development and Placement Cells (CDPC) across Nuzvid, RK Valley, Ongole, and Srikakulam.
 */

export interface PlacementTrainingModule {
  title: string;
  tagline: string;
  description: string;
  focusAreas: string[];
}

export interface PlacementProcessStep {
  stepNumber: number;
  title: string;
  tagline: string;
  description: string;
}

export interface CampusPlacementDesk {
  campus: string;
  cellName: string;
  officeLocation: string;
  email: string;
  alternateEmail?: string;
  facilities: string[];
  keyHighlights: string[];
}

export interface RecruiterCategory {
  category: string;
  description: string;
  companies: {
    name: string;
    type: string;
    domain: string;
  }[];
}

export const PLACEMENTS_INTRO = {
  title: 'Training & Placements at RGUKT-AP',
  lead:
    'The Career Development and Placement Cell (CDPC), under the guidance of the Directorate of Entrepreneurship, Incubation, Training and Placements (EITP), functions as the apex institutional interface connecting meritorious rural engineering talent with premier multinational corporations, core industrial enterprises, and emerging tech startups across Nuzvid, RK Valley (Idupulapaya), Ongole, and Srikakulam campuses.',
  policyNote:
    'RGUKT follows a unified, merit-driven placement policy structured around the \'One Student One Job\' framework, with dynamic \'Dream\' and \'Marquee\' provisions enabling high-performing candidates to secure elite technology and research appointments while ensuring equitable placement opportunities across all branches.',
};

export const PLACEMENT_TRAINING_MODULES: PlacementTrainingModule[] = [
  {
    title: 'Technical Finishing School & DSA Bootcamps',
    tagline: 'Algorithmic Problem Solving & System Architecture',
    description:
      'Rigorous coding bootcamps in C++, Java, and Python focusing on advanced Data Structures, Object-Oriented Design, Database Management Systems (SQL/NoSQL), and Full-Stack Web Development.',
    focusAreas: ['Data Structures & Algorithms', 'Competitive Programming', 'System Design & OS', 'Cloud & Web Frameworks'],
  },
  {
    title: 'Core Engineering & Specialized Domain Tracks',
    tagline: 'Industry-Aligned Practical Competencies',
    description:
      'Branch-specific training in VLSI semiconductor design, embedded systems, automotive engineering, structural analysis (STAAD/ETABS), chemical process simulation (ASPEN), and metallurgy.',
    focusAreas: ['VLSI & Embedded Systems', 'CAD/CAM/CAE Modeling', 'Power Systems & EV Tech', 'Industrial Process Simulation'],
  },
  {
    title: 'Quantitative Aptitude & Logical Reasoning',
    tagline: 'Structured Analytical Mastery',
    description:
      'Daily practice sessions, speed mathematics, logical deductions, data interpretation, and timed mock assessments designed to master corporate recruitment screening tests.',
    focusAreas: ['Quantitative Mathematics', 'Logical & Critical Deduction', 'Data Interpretation', 'Timed Mock Assessments'],
  },
  {
    title: 'Soft Skills & Corporate Executive Communication',
    tagline: 'Professional Etiquette & Leadership Presence',
    description:
      'Interactive modules on professional business communication, group discussion (GD) simulations, corporate etiquette, resume crafting, and executive interview presence.',
    focusAreas: ['Group Discussion Simulations', 'Professional Resume Building', 'Corporate Etiquette', 'Verbal Communication'],
  },
  {
    title: 'Mock Technical & HR Interview Drives',
    tagline: 'Simulated 1-on-1 Panel Assessments',
    description:
      'Multi-round mock interviews conducted by experienced industry professionals, senior alumni, and academic mentors to provide individualized feedback before actual campus drives.',
    focusAreas: ['1-on-1 Technical Mock Panels', 'HR & Situational Interviews', 'Personalized Feedback Reports', 'Stress Interview Handling'],
  },
];

export const PLACEMENT_PROCESS_STEPS: PlacementProcessStep[] = [
  {
    stepNumber: 1,
    title: 'Master Registration & Verification',
    tagline: 'Pre-Final & Final Year Cohorts',
    description:
      'Eligible B.Tech scholars (E3-S2 & E4) register on the central CDPC portal, verifying academic credentials, departmental CGPA, branch specializations, and verified resumes.',
  },
  {
    stepNumber: 2,
    title: 'Job Notification Form (JNF) & Pre-Placement Talk',
    tagline: 'Recruiter Outreach & Orientation',
    description:
      'Corporate recruiters release Job Notification Forms (JNF) detailing job profiles, CTC packages, eligibility cutoffs, and deliver interactive Pre-Placement Talks (PPT) to registered students.',
  },
  {
    stepNumber: 3,
    title: 'Assessments & Online Screening Tests',
    tagline: 'Aptitude & Technical Round',
    description:
      'Candidates undergo secure computer-based screening tests covering quantitative aptitude, programming competencies, core engineering concepts, and situational judgment.',
  },
  {
    stepNumber: 4,
    title: 'Technical & HR Interview Rounds',
    tagline: 'Multi-Stage In-Person / Virtual Panels',
    description:
      'Shortlisted candidates appear for technical coding rounds, domain panel interviews, and behavioral/HR assessments hosted across campus interview suites or dedicated virtual platforms.',
  },
  {
    stepNumber: 5,
    title: 'Unified Offer Issuance & Acceptance',
    tagline: 'Standardized University Policy',
    description:
      'Recruiters declare final selections through the Central CDPC. Offers are officially recorded and issued adhering to the university\'s transparent \'One Student One Job\' and \'Dream Option\' regulations.',
  },
];

export const CAMPUS_PLACEMENT_DESKS: CampusPlacementDesk[] = [
  {
    campus: 'RGUKT Nuzvid Campus',
    cellName: 'Career Development and Placement Cell (CDPC), Nuzvid',
    officeLocation: 'Administrative Block / Academic Block - I, RGUKT Nuzvid Campus, Eluru District',
    email: 'placement@rguktn.ac.in',
    alternateEmail: 'tnp@rguktn.ac.in',
    facilities: [
      'Dedicated computer laboratories with over 1,000+ networked systems for online screening.',
      'Auditoriums with 1,500+ seating capacity equipped with high-definition audio-visual infrastructure for PPTs.',
      'Multiple air-conditioned personal interview (PI) and group discussion (GD) suites.',
    ],
    keyHighlights: [
      'High-volume recruitment drives with top IT enterprises and semiconductor corporations.',
      'Dedicated technical finishing school programs and competitive programming cells.',
      'Comprehensive campus residential accommodation and hospitality for corporate recruitment teams.',
    ],
  },
  {
    campus: 'RGUKT RK Valley (Idupulapaya) Campus',
    cellName: 'Career Development and Placement Cell (CDPC), RK Valley',
    officeLocation: 'Academic Block - 1, RGUKT RK Valley Campus, Vempalli Mandal, YSR Kadapa District',
    email: 'placement@rguktrkv.ac.in',
    alternateEmail: 'cdpc@rguktrkv.ac.in',
    facilities: [
      'Advanced IT testing centers with high-speed redundant optical fiber connectivity.',
      'Central seminar halls with multimedia presentation setups for corporate campus drives.',
      'Dedicated executive suites for recruiter panels and pre-placement interactions.',
    ],
    keyHighlights: [
      'Active placement pipelines across product engineering, civil infrastructure, and electronics.',
      'Alumni-driven mock interview panels and corporate career counseling series.',
      'Full-fledged logistics and on-campus guest house facilities for visiting corporate executives.',
    ],
  },
  {
    campus: 'RGUKT Ongole Campus',
    cellName: 'Career Development and Placement Cell (CDPC), Ongole',
    officeLocation: 'Administrative Office, RGUKT Ongole Campus, Prakasam District',
    email: 'placement@rguktong.ac.in',
    facilities: [
      'Modern networked computer labs for virtual and proctored technical evaluations.',
      'Interactive conference halls for virtual pre-placement presentations and webinars.',
      'Individual video-conference interview cubicles.',
    ],
    keyHighlights: [
      'Synchronized participation in centralized RGUKT-AP joint recruitment drives.',
      'Focus on full-stack development bootcamps and competitive aptitude coaching.',
      'Dedicated faculty placement coordinator desk guiding student placement cohorts.',
    ],
  },
  {
    campus: 'RGUKT Srikakulam Campus',
    cellName: 'Career Development and Placement Cell (CDPC), Srikakulam',
    officeLocation: 'Permanent Campus, S.M. Puram, Etcherla Mandal, Srikakulam District',
    email: 'placement@rguktsklm.ac.in',
    alternateEmail: 'cdpc@rguktsklm.ac.in',
    facilities: [
      'High-speed networked computer laboratories equipped for centralized technical hiring exams.',
      'State-of-the-art academic seminar halls for recruitment presentations and panel sessions.',
      'Equipped interview and GD chambers.',
    ],
    keyHighlights: [
      'Integrated participation in state-level university campus hiring drives.',
      'Continuous soft skills, aptitude coaching, and core engineering finishing school.',
      'Direct linkage with regional manufacturing, power, and software industry clusters.',
    ],
  },
];

export const RECRUITER_CATEGORIES: RecruiterCategory[] = [
  {
    category: 'Product & Tier-1 Tech Giants',
    description: 'Leading global software, product engineering, and digital technology corporations.',
    companies: [
      { name: 'Amazon', type: 'Product Giant', domain: 'Cloud & E-Commerce' },
      { name: 'Google', type: 'Product Giant', domain: 'Search & Cloud Platforms' },
      { name: 'Microsoft', type: 'Product Giant', domain: 'Enterprise Software & Azure' },
      { name: 'Intel', type: 'Semiconductor', domain: 'Silicon & Hardware Systems' },
      { name: 'Qualcomm', type: 'Semiconductor', domain: 'Wireless & Embedded Systems' },
      { name: 'AMD', type: 'Semiconductor', domain: 'Processors & Graphics Tech' },
      { name: 'Oracle', type: 'Enterprise Tech', domain: 'Database & Cloud Solutions' },
      { name: 'IBM', type: 'Global Tech', domain: 'Hybrid Cloud & AI' },
    ],
  },
  {
    category: 'IT Services & Digital Transformation',
    description: 'Premier global IT services, consulting, and enterprise digital solutions leaders.',
    companies: [
      { name: 'Tata Consultancy Services (TCS)', type: 'IT Services', domain: 'Digital, Ninja & Prime' },
      { name: 'Infosys', type: 'IT Services', domain: 'Enterprise Services & SE' },
      { name: 'Wipro Technologies', type: 'IT Services', domain: 'Digital & System Integration' },
      { name: 'Cognizant (CTS)', type: 'IT Services', domain: 'Digital Engineering & GenC' },
      { name: 'Tech Mahindra', type: 'IT Services', domain: 'Telecom & Enterprise Software' },
      { name: 'HCL Technologies', type: 'IT Services', domain: 'Engineering & R&D Services' },
      { name: 'Capgemini', type: 'Consulting & Tech', domain: 'Cloud & Digital Platforms' },
      { name: 'Accenture', type: 'Consulting & Tech', domain: 'Technology & Application Services' },
    ],
  },
  {
    category: 'Core Engineering, Automotive & VLSI',
    description: 'Pioneering infrastructure, automotive, defense electronics, and manufacturing firms.',
    companies: [
      { name: 'Larsen & Toubro (L&T)', type: 'Core / Infrastructure', domain: 'Civil, Electrical & Heavy Engg' },
      { name: 'Kusalava International', type: 'Automotive & Precision', domain: 'Precision Engine Components' },
      { name: 'Medha Servo Drives', type: 'Power Electronics', domain: 'Railway Propulsion & Control' },
      { name: 'Hyundai Mobis', type: 'Automotive Tech', domain: 'Embedded Automotive Software' },
      { name: 'Amararaja Batteries', type: 'Energy & Power', domain: 'Energy Storage & Industrial Power' },
      { name: 'Thermax Limited', type: 'Energy & Environment', domain: 'Clean Tech & Thermal Systems' },
    ],
  },
  {
    category: 'BFSI, Fintech & Analytics',
    description: 'Prominent banking, financial services, insurance, and quantitative analytics enterprises.',
    companies: [
      { name: 'HDFC Bank', type: 'BFSI', domain: 'Fintech & Digital Banking' },
      { name: 'ICICI Bank', type: 'BFSI', domain: 'Financial Operations & Systems' },
      { name: 'State Street', type: 'Financial Services', domain: 'Investment Servicing & Tech' },
      { name: 'Standard Chartered', type: 'Banking & Tech', domain: 'Global Technology Services' },
    ],
  },
  {
    category: 'Public Sector & Premier Research',
    description: 'State and central government enterprises and premier national research bodies.',
    companies: [
      { name: 'Bharat Heavy Electricals (BHEL)', type: 'Maharatna PSU', domain: 'Power Plant & Heavy Equipment' },
      { name: 'Bharat Electronics (BEL)', type: 'Navratna PSU', domain: 'Defense Electronics & Avionics' },
      { name: 'DRDO Research Avenues', type: 'National Lab', domain: 'Defense R&D Pathways' },
      { name: 'ISRO Research Subsystems', type: 'Space Agency', domain: 'Aerospace & Launch Vehicle R&D' },
    ],
  },
];
