/**
 * RGUKT Nuzvid About Section Data (11 Active Official Subsections)
 * Strictly sourced from official RGUKT records (https://www.rgukt.in, https://rguktn.ac.in, RGUKT Act 18 of 2008).
 */

export interface HighlightCard {
  title: string;
  desc: string;
  icon: 'academic' | 'student' | 'campus' | 'achievement' | 'shield' | 'doc' | 'globe' | 'users' | 'building' | 'star';
  bgGradient?: string;
  borderColor?: string;
}

export interface ContentBlock {
  heading: string;
  paragraph?: string;
  bullets: string[];
  image: string;
  images?: string[]; // Multiple images rendered one by one vertically
  imageAlt: string;
  imageCaption?: string;
  attribution?: string;
  layout: 'layout-a' | 'layout-b'; // A: Text Left, Image Right | B: Image Left, Text Right
  highlights?: string[];
}

export interface SubsectionPageData {
  id: string;
  eyebrow: string;
  title: string;
  heroSubtitle: string;
  verifiedBadge?: string;
  heroImage: string;
  heroAlt: string;
  heroLayoutType?: 'fullscreen-overlay' | 'split-hero';
  introParagraph?: string;
  blocks: ContentBlock[];
  cards?: HighlightCard[];
  documentAction?: {
    label: string;
    url: string;
    description: string;
    isExternal?: boolean;
  };
}

/* ─────────────────────────────────────────────────────────────
   01: ABOUT RGUKT NUZVID
   ───────────────────────────────────────────────────────────── */
export const DATA_ABOUT_NUZVID: SubsectionPageData = {
  id: 'about-rgukt',
  eyebrow: 'ABOUT',
  title: 'RGUKT NUZVID',
  heroSubtitle:
    'Rajiv Gandhi University of Knowledge Technologies, Nuzvid was established in 2008 by the Government of Andhra Pradesh under Act 18 of 2008 to bring world-class technical education to rural youth.',
  verifiedBadge: 'AP Act 18 of 2008 · UGC 2(f) & 12(B)',
  heroImage: '/gallery/residential-campus-hd.jpg',
  heroAlt: 'RGUKT Nuzvid residential campus complex and hostel blocks',
  heroLayoutType: 'fullscreen-overlay',
  blocks: [
    {
      heading: 'Residential Campus',
      paragraph: 'An integrated residential township spanning serene surroundings on NH-9, equipped for holistic student living.',
      bullets: [
        'Dedicated secure hostel blocks for boys and girls with modern dining and clean drinking water facilities.',
        '24×7 operational 30-bed Medical Center with resident medical officers, pharmacy, and ambulance service.',
        'Self-contained township amenities including post office, banking facility, canteen, and student utility stores.',
      ],
      image: '/gallery/nuzvid-c-hero.jpg',
      imageAlt: 'RGUKT Nuzvid panoramic campus view and main academic gateway',
      imageCaption: 'Main Academic Campus & Gateway — RGUKT Nuzvid',
      layout: 'layout-a',
    },
    {
      heading: 'Educational Infrastructure',
      paragraph: 'Advanced ICT facilities, computing resources, and modern laboratories supporting learner-centric engineering education.',
      bullets: [
        'High-speed campus-wide LAN connecting academic blocks with individual laptop connectivity for every student.',
        'State-of-the-art engineering laboratories for computing, electronics, mechanical, civil, chemical, and materials sciences.',
        'Comprehensive Central Library housing thousands of textbook volumes, national/international journals, and digital terminals.',
      ],
      image: '/gallery/about-infra.jpg',
      imageAlt: 'RGUKT Nuzvid educational infrastructure and laboratories',
      imageCaption: 'Academic Infrastructure & Digital Laboratories',
      layout: 'layout-b',
    },
  ],
  cards: [
    {
      title: 'State University Act',
      desc: 'Established under Andhra Pradesh Act 18 of 2008 for gifted rural youth.',
      icon: 'shield',
    },
    {
      title: '6-Year Integrated B.Tech',
      desc: 'Seamless transition from 2-year PUC into 4-year core engineering specializations.',
      icon: 'academic',
    },
    {
      title: '100% Residential Township',
      desc: 'Self-sufficient academic environment with round-the-clock healthcare and security.',
      icon: 'campus',
    },
    {
      title: 'Learner-Centric Pedagogy',
      desc: 'ICT-driven learning, mentor-guided discourse, and hands-on laboratory practice.',
      icon: 'student',
    },
  ],
};

/* ─────────────────────────────────────────────────────────────
   02: VISION AND MISSION
   ───────────────────────────────────────────────────────────── */
export const DATA_VISION_MISSION: SubsectionPageData = {
  id: 'vision-mission',
  eyebrow: 'GUIDING PRINCIPLES',
  title: 'VISION & MISSION',
  heroSubtitle:
    'Guiding the educational mission, scientific research, and rural empowerment goals of Rajiv Gandhi University of Knowledge Technologies.',
  verifiedBadge: 'Official Institutional Mandate',
  heroImage: '/gallery/vision-mission-hero.jpg',
  heroAlt: 'RGUKT Vision and Mission strategic goals and target icons',
  heroLayoutType: 'split-hero',
  introParagraph:
    'The guiding vision and mission of Rajiv Gandhi University of Knowledge Technologies form the cornerstone of all academic curricula, mentorship, research, and governance across its constituent campuses.',
  blocks: [
    {
      heading: 'Official Institutional Vision',
      paragraph: 'To transform rural youth into global leaders and innovators in science, technology, and multidisciplinary areas and contribute to the maximization of the welfare of humanity.',
      bullets: [
        'Empowering first-generation learners from rural India with world-class engineering and computational competencies.',
        'Fostering an academic culture that blends teaching and research to meet societal needs through identified thrust areas.',
        'Nurturing scientific creativity, critical inquiry, and ethical leadership in service of the nation and humanity.',
      ],
      image: '/gallery/gallery-7.jpg',
      imageAlt: 'Academic leaders and faculty at RGUKT convocation gathering',
      imageCaption: 'Fostering excellence and leadership in rural technical education',
      layout: 'layout-a',
    },
    {
      heading: 'Official Institutional Mission',
      paragraph: 'To identify meritorious rural students early and provide them high-quality, IIT-level six-year integrated technical education through a learner-centric residential model.',
      bullets: [
        'Early identification of talent after 10th Class through statewide merit-based admissions.',
        'Providing qualitative pre-university foundation followed by intensive core engineering specializations.',
        'Integrating Information and Communication Technologies (ICT) directly into classroom discourse.',
      ],
      image: '/gallery/rguktn-wikimedia.jpg',
      imageAlt: 'RGUKT Nuzvid campus main academic entrance building',
      imageCaption: 'Main Campus Academic Gateway — RGUKT Nuzvid',
      attribution: 'Photo by RGUKT Nuzvid / CC BY-SA 3.0',
      layout: 'layout-b',
    },
  ],
  cards: [
    {
      title: 'Global Leadership',
      desc: 'Transforming rural talent into world-class engineers, scientists, and innovators.',
      icon: 'globe',
    },
    {
      title: 'IIT-Level Rigor',
      desc: 'Intensive laboratory training, problem-solving, and conceptual mastery.',
      icon: 'academic',
    },
    {
      title: 'Welfare of Humanity',
      desc: 'Applying scientific advancements to solve societal challenges with integrity.',
      icon: 'shield',
    },
  ],
};

/* ─────────────────────────────────────────────────────────────
   03: AT A GLANCE
   ───────────────────────────────────────────────────────────── */
export const DATA_AT_A_GLANCE: SubsectionPageData = {
  id: 'at-a-glance',
  eyebrow: 'CAMPUS PROFILE',
  title: 'RGUKT NUZVID AT A GLANCE',
  heroSubtitle:
    'Key institutional facts, verified campus parameters, academic departments, and infrastructure at Nuzvid.',
  verifiedBadge: 'UGC 2(f) & 12(B) · NAAC B+',
  heroImage: '/gallery/nuzvid-campus-hero.jpg',
  heroAlt: 'RGUKT Nuzvid campus panoramic view',
  heroLayoutType: 'fullscreen-overlay',
  blocks: [
    {
      heading: 'Campus Profile & Academic Framework',
      paragraph: 'Summary of the institutional profile and academic framework verified from official records.',
      bullets: [
        'Location & Year: Situated on NH-9 in Nuzvid, Krishna District, AP; established in 2008 under Act 18 of 2008.',
        'Academic Model: 6-Year Integrated B.Tech program (2-year Pre-University Course + 4-year B.Tech Degree).',
        'Accreditation: Statutorily recognized under UGC Section 2(f) and 12(B); accredited by NAAC with B+ Grade.',
      ],
      image: '/gallery/glance-profile.jpg',
      imageAlt: 'RGUKT Academic Convocation and Campus Framework',
      imageCaption: 'Integrated Academic & Residential Campus at Nuzvid',
      layout: 'layout-a',
    },
    {
      heading: 'Campus Facilities & Support Systems',
      paragraph: 'Infrastructure catering to round-the-clock student development and welfare.',
      bullets: [
        '7 Engineering Disciplines: Chemical, Civil, CSE, EEE, ECE, Mechanical, and Materials Engineering.',
        'Healthcare & Sports: 30-bed 24×7 campus hospital, outdoor courts for basketball/volleyball, and cricket ground.',
        'Digital Resources: Campus LAN connecting every student desk with individual laptop access and digital e-library.',
      ],
      image: '/gallery/glance-facilities.jpg',
      imageAlt: 'RGUKT Nuzvid Central Library and Campus Facilities',
      imageCaption: 'Self-sufficient residential infrastructure & central library',
      layout: 'layout-b',
    },
  ],
  cards: [
    {
      title: '7 Engineering Branches',
      desc: 'CSE, ECE, EEE, Mechanical, Civil, Chemical, and MME.',
      icon: 'academic',
    },
    {
      title: '24×7 Medical Center',
      desc: '30-bed hospital facility with resident doctors and pharmacy.',
      icon: 'shield',
    },
    {
      title: 'High-Speed Campus LAN',
      desc: 'Campus-wide connectivity extending to student study desks.',
      icon: 'globe',
    },
    {
      title: 'Full Residential Setup',
      desc: 'Separate secure hostels with dining halls and campus amenities.',
      icon: 'campus',
    },
  ],
};

/* ─────────────────────────────────────────────────────────────
   04: CAMPUS LIFE (Sports, Culture & Student Clubs)
   ───────────────────────────────────────────────────────────── */
export const DATA_CAMPUS_LIFE: SubsectionPageData = {
  id: 'campus-life',
  eyebrow: 'STUDENT EXPERIENCE',
  title: 'CAMPUS LIFE AT RGUKT NUZVID',
  heroSubtitle:
    'Life and learning inside a self-contained residential township fostering sports, performing arts, cultural clubs, and holistic student development.',
  verifiedBadge: 'Residential Township Community',
  heroImage: '/gallery/campus-life-hero.jpg',
  heroAlt: 'RGUKT Nuzvid lush green academic campus and buildings',
  heroLayoutType: 'fullscreen-overlay',
  blocks: [
    {
      heading: 'Sports & Athletic Facilities',
      paragraph: 'Comprehensive sports infrastructure fostering physical fitness, teamwork, and inter-campus athletic championships.',
      bullets: [
        'Mandatory morning physical training for PUC students to instill disciplined fitness and endurance.',
        'Extensive outdoor sports grounds including dedicated cricket pitch, volleyball courts, basketball arena, and football field.',
        'Indoor recreational facilities for badminton, table tennis, chess, and regular yoga instruction.',
      ],
      image: '/gallery/gallery-nuzvid-sports-yoga.jpg',
      imageAlt: 'RGUKT Nuzvid students participating in sports and yoga championship',
      imageCaption: 'Inter-Campus Sports & Yoga Championships — RGUKT Nuzvid',
      highlights: ['Outdoor Sports Pavilion', 'Inter-Campus Tournaments', 'Morning Fitness & Yoga'],
      layout: 'layout-a',
    },
    {
      heading: 'Culture & Performing Arts',
      paragraph: 'Rich cultural traditions and formal performing arts training nurturing student creativity and heritage.',
      bullets: [
        'Formal curriculum and hobby courses in Kuchipudi classical dance, Mridangam, and vocal classical music.',
        'Active student participation in theatre, drama, fine arts exhibitions, and annual cultural celebrations.',
        'Institutional celebrations of National Festivals including Republic Day, Independence Day, and Gandhi Jayanthi.',
      ],
      image: '/gallery/gallery-nuzvid-republic-day.jpg',
      imageAlt: 'RGUKT Nuzvid cultural celebrations and ceremonial assemblies',
      imageCaption: 'Ceremonial Celebrations & Performing Arts — RGUKT Nuzvid',
      highlights: ['Kuchipudi Classical Dance', 'Mridangam & Vocal Music', 'Theatre & Literary Forums'],
      layout: 'layout-b',
    },
    {
      heading: 'Student Clubs & Collaborative Activities',
      paragraph: 'Dynamic student-led societies driving technical innovation, community outreach, and leadership development.',
      bullets: [
        'Technical and coding clubs organizing workshops, hackathons, and the annual Teckzite national technical symposium.',
        'National Service Scheme (NSS) units conducting rural health camps, literacy campaigns, and Swachh Bharat drives.',
        'National Cadet Corps (NCC) battalion training students in leadership, drill discipline, and national service.',
      ],
      image: '/gallery/gallery-nuzvid-nss-camp.jpg',
      imageAlt: 'RGUKT Nuzvid student clubs and NSS rural outreach camp',
      imageCaption: 'NSS Outreach Camp & Student Collaborative Activities',
      highlights: ['Technical & Coding Clubs', 'NSS Community Outreach', 'NCC Cadet Battalion'],
      layout: 'layout-a',
    },
  ],
  cards: [
    {
      title: 'Sports & Athletics',
      desc: 'Cricket ground, volleyball, basketball, and indoor badminton arena.',
      icon: 'achievement',
    },
    {
      title: 'Performing Arts',
      desc: 'Kuchipudi dance, Mridangam, vocal music, and fine arts.',
      icon: 'star',
    },
    {
      title: 'Student Clubs & NSS',
      desc: 'Technical coding clubs, NSS rural outreach, and NCC wings.',
      icon: 'users',
    },
    {
      title: 'Residential Hostels',
      desc: 'Secure residential blocks with modern hygienic dining facilities.',
      icon: 'campus',
    },
  ],
};

/* ─────────────────────────────────────────────────────────────
   05: EDUCATION SYSTEM
   ───────────────────────────────────────────────────────────── */
export const DATA_EDUCATION_SYSTEM: SubsectionPageData = {
  id: 'education-system',
  eyebrow: 'ACADEMIC MODEL',
  title: 'THE 6-YEAR INTEGRATED EDUCATION SYSTEM',
  heroSubtitle:
    'A seamless 6-year integrated B.Tech curriculum transitioning students from 10th standard directly to engineering degrees.',
  verifiedBadge: '6-Year Integrated Curriculum',
  heroImage: '/gallery/education-system-hero.jpg',
  heroAlt: 'RGUKT technical education and modern engineering learning',
  heroLayoutType: 'fullscreen-overlay',
  blocks: [
    {
      heading: 'Integrated Course Progression',
      paragraph: 'A continuous academic trajectory designed to eliminate intermediate coaching pressure.',
      bullets: [
        'Phase 1 (2-Year PUC): Intensive pre-university foundation in Mathematics, Physics, Chemistry, Life Sciences, and IT.',
        'Phase 2 (4-Year B.Tech): Core engineering specializations across 7 disciplines with hands-on laboratory training.',
        'Flexible Options: Permitted exit route after PUC and Dual Major / Minor degree options for eligible achievers.',
      ],
      image: '/gallery/edu-progression.jpg',
      imageAlt: 'Academic Convocation and 6-Year Integrated B.Tech Course Progression',
      imageCaption: 'Integrated academic progression and engineering laboratories',
      layout: 'layout-a',
    },
    {
      heading: 'Learner-Centric Pedagogy',
      paragraph: 'Emphasizing conceptual mastery, active inquiry, and learning-by-doing.',
      bullets: [
        'Learning by Doing: Direct application of engineering concepts in daily laboratory and problem-solving sessions.',
        'ICT Integration: Video lectures by subject matter experts complemented by interactive faculty mentorship.',
        'Holistic Development: Approximately 30% of student development time devoted to humanities, soft skills, and leadership.',
      ],
      image: '/gallery/gallery-nuzvid-computing-lab.jpg',
      imageAlt: 'Advanced computing research lab and learner centric pedagogy',
      imageCaption: 'Hands-on laboratory training and computational research',
      layout: 'layout-b',
    },
  ],
  cards: [
    {
      title: '2-Year PUC Foundation',
      desc: 'Rigorous STEM, computational IT, and humanities foundation.',
      icon: 'academic',
    },
    {
      title: '4-Year Engineering',
      desc: 'B.Tech specialization across 7 core engineering disciplines.',
      icon: 'building',
    },
    {
      title: 'Major & Minor Tracks',
      desc: 'Interdisciplinary options in Management, Economics, and Science.',
      icon: 'star',
    },
    {
      title: 'Learning by Doing',
      desc: 'Hands-on laboratory training and in-class problem solving.',
      icon: 'student',
    },
  ],
};

/* ─────────────────────────────────────────────────────────────
   06: ACHIEVEMENTS & AWARDS
   ───────────────────────────────────────────────────────────── */
export const DATA_ACHIEVEMENTS: SubsectionPageData = {
  id: 'achievements',
  eyebrow: 'HONORS & EXCELLENCE',
  title: 'ACHIEVEMENTS & AWARDS',
  heroSubtitle:
    'Official student laurels, engineering design competition wins, and national recognitions earned by RGUKT Nuzvid.',
  verifiedBadge: 'Verified Institutional Laurels',
  heroImage: '/gallery/achievements-hero.jpg',
  heroAlt: 'Achievements and award laurels banner',
  heroLayoutType: 'fullscreen-overlay',
  blocks: [
    {
      heading: 'Nuzvid Campus Laurels',
      paragraph: 'National and state-level accolades earned by RGUKT Nuzvid student innovators and scholars.',
      bullets: [
        'Rally Car Design Challenge (RCDC): Team RGUKTN-RAVENCLAW won the Best Innovation Award and 2nd Prize in TIER-1 EXTREME in Bikaner, Rajasthan.',
        'Skillathon Sales Hackathon: CSE students V. Ravi (N140976) and V. Sowjanya Swathi (N140959) bagged 1st Prize of ₹1.25 Lakh from Mercuri Goldmann.',
        'European Union Fellowship: Shaik Najma Sultana, student of RGUKT Nuzvid, was selected for the prestigious EU fellowship.',
      ],
      image: '/gallery/achieve-laurels.jpg',
      imageAlt: 'RCDC Thar Desert Bikaner innovation honors won by RGUKT Nuzvid',
      imageCaption: 'Team RGUKTN-RAVENCLAW Best Innovation Award at RCDC Bikaner',
      layout: 'layout-a',
    },
    {
      heading: 'Institutional Recognitions',
      paragraph: 'Accreditations and competitive rankings affirming institutional quality.',
      bullets: [
        'Higher Education & Competitive Exam Honors: High success in national GATE, GRE, and civil examination coaching.',
        'ARIIA Recognition: Recognized in Band Performer category in Atal Ranking of Institutions on Innovation Achievements.',
        'NAAC Accreditation: Conferred "B+" Grade institutional quality accreditation by NAAC.',
      ],
      image: '/gallery/achieve-institutional.jpg',
      imageAlt: 'RGUKT Nuzvid Higher Education & Competitive Examination Recognitions',
      imageCaption: 'Institutional recognition and student competitive examination honors',
      layout: 'layout-b',
    },
  ],
  cards: [
    {
      title: 'RCDC Best Innovation',
      desc: 'Team RGUKTN-RAVENCLAW bagged top innovation honors in Bikaner.',
      icon: 'achievement',
    },
    {
      title: '₹1.25L Hackathon Win',
      desc: 'First prize won by Nuzvid CSE students in national Skillathon.',
      icon: 'star',
    },
    {
      title: 'EU Fellowship',
      desc: 'Prestigious European Union fellowship awarded to Nuzvid scholar.',
      icon: 'globe',
    },
    {
      title: 'NAAC B+ Grade',
      desc: 'National institutional quality accreditation conferred by NAAC.',
      icon: 'shield',
    },
  ],
};

/* ─────────────────────────────────────────────────────────────
   07: GOVERNING COUNCIL
   ───────────────────────────────────────────────────────────── */
export const DATA_GOVERNING_COUNCIL: SubsectionPageData = {
  id: 'governing-council',
  eyebrow: 'APEX GOVERNANCE',
  title: 'GOVERNING COUNCIL OF RGUKT',
  heroSubtitle:
    'Statutory governing body overseeing university policy, academic regulations, and strategic administration across all campuses.',
  verifiedBadge: 'Statutory Apex Council',
  heroImage: '/gallery/gov-council-hero.jpg',
  heroAlt: 'Statutory institutional governance banner',
  heroLayoutType: 'split-hero',
  blocks: [
    {
      heading: 'University Executive Leadership & Govt. Nominees',
      paragraph: 'Principal executive leaders and senior government secretaries governing institutional affairs.',
      bullets: [
        'Prof. K. Madhu Murthy — Chancellor (FAC), RGUKT & Chairman, APSCHE (Chairman).',
        'Prof. M L N Rao — Vice Chancellor, RGUKT & In-charge Director, RGUKT Nuzvid Campus (Member).',
        'Principal Secretaries to Government — Higher Education, IT & C, and Finance Departments, Govt. of AP (Members).',
      ],
      image: '/gallery/gov-exec-leaders.jpg',
      imageAlt: 'Prof. K. Madhu Murthy, Chancellor FAC RGUKT',
      imageCaption: 'Prof. K. Madhu Murthy — Chancellor (FAC), RGUKT',
      layout: 'layout-a',
    },
    {
      heading: 'Campus Directors & Eminent Members',
      paragraph: 'Distinguished educators, institutional heads, and industry leaders.',
      bullets: [
        'Directors of Constituent Campuses — Nuzvid, RK Valley, Srikakulam, and Ongole campuses (Members).',
        'Distinguished Academicians — Prof. Sandeep Kumar Shukla (IIIT Hyderabad), Prof. N. Balakrishnan (Former Assoc. Director, IISc Bangalore).',
        'Eminent Leaders & Special Invitees — Dr. Sudha Murthy, Shri K. Nityananda Reddy, and Prof. K. N. Satyanarayana (Director, IIT Tirupati).',
      ],
      image: '/gallery/gov-directors.jpg',
      imageAlt: 'Prof. M L N Rao, Vice Chancellor and In-charge Director Nuzvid',
      imageCaption: 'Prof. M L N Rao — Vice Chancellor & Director (I/c), Nuzvid',
      layout: 'layout-b',
    },
  ],
  cards: [
    {
      title: 'University Leadership',
      desc: 'Chancellor (FAC) and Vice-Chancellor guiding university direction.',
      icon: 'shield',
    },
    {
      title: 'Govt. of AP Nominees',
      desc: 'Principal Secretaries of Higher Education, IT&C, and Finance.',
      icon: 'building',
    },
    {
      title: 'Eminent Academicians',
      desc: 'Distinguished leaders from IISc, IIT Tirupati, and IIIT Hyderabad.',
      icon: 'academic',
    },
    {
      title: 'Campus Directors',
      desc: 'Directors of Nuzvid, RK Valley, Srikakulam, and Ongole campuses.',
      icon: 'users',
    },
  ],
};

/* ─────────────────────────────────────────────────────────────
   08: ARIIA 2021 REPORT
   ───────────────────────────────────────────────────────────── */
export const DATA_ARIIA_REPORT: SubsectionPageData = {
  id: 'ariia-report',
  eyebrow: 'INNOVATION RANKING',
  title: 'ARIIA 2021 REPORT',
  heroSubtitle:
    'Atal Ranking of Institutions on Innovation Achievements — Ministry of Education, Government of India.',
  verifiedBadge: 'MoE Govt. of India Ranking',
  heroImage: '/gallery/ariia-hero.jpg',
  heroAlt: 'ARIIA Atal Ranking of Institutions on Innovation Achievements official banner',
  heroLayoutType: 'split-hero',
  blocks: [
    {
      heading: 'ARIIA Framework & Key Indicators',
      paragraph: 'National ranking framework evaluating universities on startup support, patents, and innovation infrastructure.',
      bullets: [
        'Assesses institutional programs promoting student innovation, technical design prototypes, and entrepreneurship.',
        'Measures pre-incubation infrastructure, intellectual property (IP) generation, and commercialization.',
        'Recognized RGUKT in Band Performer category for innovation enablement across its constituent campuses.',
      ],
      image: '/gallery/ariia-indicators.jpg',
      imageAlt: 'Features and parameters of ARIIA Innovation Ranking Framework',
      imageCaption: 'Features and Key Performance Indicators of the ARIIA Framework',
      layout: 'layout-a',
    },
  ],
  cards: [
    {
      title: 'Ministry of Education',
      desc: 'National framework ranking higher education institutions on innovation.',
      icon: 'shield',
    },
    {
      title: 'Startup & IP Ecosystem',
      desc: 'Evaluating patents, student prototypes, and incubation support.',
      icon: 'star',
    },
    {
      title: 'Official Document',
      desc: 'Direct access to verified ARIIA 2021 institutional submission PDF.',
      icon: 'doc',
    },
  ],
  documentAction: {
    label: 'View Official ARIIA 2021 Report (PDF)',
    url: 'https://rguktn.ac.in/downloads/ARIIA_2021_Report.pdf',
    description: 'Official institutional submission document (PDF) hosted on rguktn.ac.in.',
    isExternal: true,
  },
};

/* ─────────────────────────────────────────────────────────────
   09: RIGHT TO INFORMATION ACT (RTI)
   ───────────────────────────────────────────────────────────── */
export const DATA_RTI: SubsectionPageData = {
  id: 'rti',
  eyebrow: 'STATUTORY TRANSPARENCY',
  title: 'RIGHT TO INFORMATION ACT',
  heroSubtitle:
    'Public Information Officers directory and statutory compliance under Section 4(1)(b) of the RTI Act, 2005.',
  verifiedBadge: 'RTI Act 2005 Compliance',
  heroImage: '/gallery/rti-hero.jpg',
  heroAlt: 'Right to Information Act official transparency banner',
  heroLayoutType: 'split-hero',
  blocks: [
    {
      heading: 'Designated RTI Authorities at RGUKT Nuzvid',
      paragraph: 'Designated appellate authority and public information officers for RTI queries.',
      bullets: [
        '1. First Appellate Authority (AA): Prof. M L N Rao, Director, RGUKT Nuzvid — Ph: 08656 235147 | Email: director@rguktn.ac.in',
        '2. Public Information Officer (PIO): Dr. B. Lakshmana Rao, Administrative Officer (I/c) — Ph: 8333898196 | Email: ao@rguktn.ac.in',
        '3. Public Relations Officer (PRO / APIO): Dr. Jada Subba Rao, Assistant Professor (C) — Ph: 8333898185 | Email: pro@rguktn.ac.in',
      ],
      image: '/gallery/rti-auth-1.jpg',
      images: ['/gallery/rti-auth-1.jpg', '/gallery/rti-auth-2.jpg'],
      imageAlt: 'Designated RTI Authorities at RGUKT Nuzvid',
      imageCaption: '1. Prof. M L N Rao (Appellate Authority) & 2. Dr. B. Lakshmana Rao (PIO)',
      layout: 'layout-a',
    },
    {
      heading: 'Provisions of Section 4(1)(b) & Application Process',
      paragraph: 'Procedures for submitting RTI applications and preferred appeals.',
      bullets: [
        'Proactive disclosure of institutional organization, functions, rules, and decision-making procedures.',
        'Citizens can file RTI applications with the prescribed statutory fee addressed to the Public Information Officer.',
        'Appeals against PIO decisions can be preferred before the First Appellate Authority within 30 days.',
      ],
      image: '/gallery/rti-provisions.jpg',
      imageAlt: 'Provisions of Section 4(1)(b) Proactive Disclosures',
      imageCaption: 'Provisions of Section 4(1)(b) Proactive Disclosures',
      layout: 'layout-b',
    },
  ],
  cards: [
    {
      title: 'First Appellate Authority',
      desc: 'Prof. M L N Rao, Director, RGUKT Nuzvid (Ph: 08656 235147).',
      icon: 'shield',
    },
    {
      title: 'Public Information Officer',
      desc: 'Dr. B. Lakshmana Rao, Administrative Officer (I/c) (ao@rguktn.ac.in).',
      icon: 'users',
    },
    {
      title: 'Statutory Compliance',
      desc: 'Proactive disclosures under Section 4(1)(b) of RTI Act 2005.',
      icon: 'doc',
    },
  ],
  documentAction: {
    label: 'Download RTI Section 4(1)(b) Document (PDF)',
    url: 'http://rguktn.ac.in/rti/provisions-of-sections-4-1-b.pdf?v=1',
    description: 'Official statutory disclosure document of RGUKT Nuzvid RTI provisions.',
    isExternal: true,
  },
};

/* ─────────────────────────────────────────────────────────────
   10: NAAC CERTIFICATE
   ───────────────────────────────────────────────────────────── */
export const DATA_NAAC: SubsectionPageData = {
  id: 'naac',
  eyebrow: 'ACCREDITATION',
  title: 'NAAC ACCREDITATION CERTIFICATE',
  heroSubtitle:
    'National Assessment and Accreditation Council (NAAC) institutional quality accreditation conferred on RGUKT.',
  verifiedBadge: "NAAC 'B+' Grade",
  heroImage: '/gallery/naac-hero.jpg',
  heroAlt: 'National Assessment and Accreditation Council NAAC official logo',
  heroLayoutType: 'split-hero',
  blocks: [
    {
      heading: 'NAAC Institutional Assessment Benchmarks',
      paragraph: 'Comprehensive quality evaluation across seven core criteria of higher education.',
      bullets: [
        'Conferred "B+" Grade institutional accreditation by NAAC, an autonomous body of the UGC.',
        'Evaluated on Curricular Aspects, Teaching-Learning, Research, Infrastructure, and Student Support.',
        'Continuous institutional enhancement monitored by the Internal Quality Assurance Cell (IQAC).',
      ],
      image: '/badges/naac-accredited.png',
      imageAlt: 'NAAC Institutional Accreditation seal',
      imageCaption: 'NAAC B+ Grade Accreditation Seal of RGUKT',
      layout: 'layout-a',
    },
  ],
  cards: [
    {
      title: "NAAC 'B+' Grade",
      desc: 'Institutional accreditation affirming educational quality and infrastructure.',
      icon: 'achievement',
    },
    {
      title: 'UGC Autonomous Body',
      desc: 'Accredited by National Assessment and Accreditation Council.',
      icon: 'shield',
    },
    {
      title: 'IQAC Quality Cell',
      desc: 'Internal Quality Assurance Cell monitoring continuous improvements.',
      icon: 'doc',
    },
  ],
  documentAction: {
    label: 'View Official NAAC Certificate (JPG)',
    url: 'https://rguktn.ac.in/downloads/NAAC.jpg',
    description: 'Official NAAC accreditation certificate copy hosted on rguktn.ac.in.',
    isExternal: true,
  },
};

/* ─────────────────────────────────────────────────────────────
   11: GALLERY (100% Authentic RGUKT Nuzvid Photographic Archive)
   ───────────────────────────────────────────────────────────── */
export interface GalleryPhotoItem {
  id: number;
  image: string;
  title: string;
  category: 'Campus' | 'Events' | 'Labs' | 'Sports';
}

export const DATA_GALLERY_PHOTOS: GalleryPhotoItem[] = [
  { id: 1, image: '/gallery/gallery-nuzvid-main.jpg', title: 'Main Administrative Complex & Campus Gateway', category: 'Campus' },
  { id: 2, image: '/gallery/gallery-nuzvid-library.jpg', title: 'Central Library & Academic Infrastructure', category: 'Campus' },
  { id: 3, image: '/gallery/gallery-nuzvid-techzite.jpg', title: 'Teckzite National Technical Fest at RGUKT Nuzvid', category: 'Events' },
  { id: 4, image: '/gallery/gallery-nuzvid-vp.jpg', title: 'Hon\'ble Vice President of India Visit to RGUKT Nuzvid', category: 'Events' },
  { id: 5, image: '/gallery/gallery-nuzvid-republic-day.jpg', title: '75th Republic Day Celebrations & Guard of Honor', category: 'Events' },
  { id: 6, image: '/gallery/gallery-nuzvid-womens-day.jpg', title: 'International Women\'s Day Celebrations', category: 'Events' },
  { id: 7, image: '/gallery/gallery-nuzvid-sports-yoga.jpg', title: 'Inter-Campus Sports & Yoga Championship', category: 'Sports' },
  { id: 8, image: '/gallery/gallery-nuzvid-nss-camp.jpg', title: 'NSS Special Rural Outreach & Community Service Camp', category: 'Events' },
  { id: 9, image: '/gallery/gallery-nuzvid-convocation.jpg', title: 'Annual Convocation & Academic Procession', category: 'Events' },
  { id: 10, image: '/gallery/gallery-nuzvid-computing-lab.jpg', title: 'Advanced Computing & Engineering Research Laboratory', category: 'Labs' },
  { id: 11, image: '/gallery/gallery-nuzvid-indep.jpg', title: 'Independence Day Celebrations & Flag Hoisting', category: 'Events' },
  { id: 12, image: '/gallery/gallery-nuzvid-campus-facilities.jpg', title: 'Campus Amenities & Outdoor Sports Complex', category: 'Campus' },
  { id: 13, image: '/gallery/gallery-nuzvid-gandhi.jpg', title: 'Gandhi Jayanthi Celebrations & Academic Assembly', category: 'Events' },
  { id: 14, image: '/gallery/gallery-nuzvid-swachh.jpg', title: 'Swachh Bharat & Green Campus Campaign', category: 'Events' },
  { id: 15, image: '/gallery/gallery-nuzvid-nssday.jpg', title: 'National Service Scheme (NSS) Day Celebrations', category: 'Events' },
];

export const DATA_GALLERY: SubsectionPageData = {
  id: 'gallery',
  eyebrow: 'OFFICIAL ARCHIVE',
  title: 'RGUKT NUZVID PHOTO GALLERY',
  heroSubtitle:
    'Authentic campus photographs, academic infrastructure, student events, and laboratory facilities verified from official RGUKT records.',
  verifiedBadge: 'Official Campus Gallery',
  heroImage: '/gallery/gallery-nuzvid-main.jpg',
  heroAlt: 'RGUKT Nuzvid main administrative gateway and campus buildings',
  heroLayoutType: 'fullscreen-overlay',
  blocks: [],
  cards: [
    {
      title: 'Campus Infrastructure',
      desc: 'Academic complexes, central library, smart classrooms, and grounds.',
      icon: 'campus',
    },
    {
      title: 'Official Celebrations',
      desc: 'Republic Day, Independence Day, Gandhi Jayanthi, and convocation.',
      icon: 'star',
    },
    {
      title: 'Research & Labs',
      desc: 'High-speed computing facilities, engineering labs, and innovation hubs.',
      icon: 'academic',
    },
  ],
};

/* ─────────────────────────────────────────────────────────────
   LEGACY / ROUTE COMPATIBILITY (UGC 12B, UGC 2f, Ombudsperson)
   ───────────────────────────────────────────────────────────── */
export const DATA_UGC_12B: SubsectionPageData = {
  id: 'ugc-12b',
  eyebrow: 'STATUTORY RECOGNITION',
  title: 'UGC 12(B) STATUS',
  heroSubtitle: 'Statutory recognition of RGUKT under Section 12(B) of the UGC Act, 1956.',
  verifiedBadge: 'UGC 12(B) Recognized',
  heroImage: '/gallery/nuzvid-c-hero.jpg',
  heroAlt: 'RGUKT UGC 12(B) Recognition',
  blocks: [],
};

export const DATA_UGC_2F: SubsectionPageData = {
  id: 'ugc-2f',
  eyebrow: 'STATUTORY RECOGNITION',
  title: 'UGC 2(f) STATUS',
  heroSubtitle: 'Statutory incorporation of RGUKT under Section 2(f) of the UGC Act, 1956.',
  verifiedBadge: 'UGC 2(f) Recognized',
  heroImage: '/gallery/nuzvid-c-hero.jpg',
  heroAlt: 'RGUKT UGC 2(f) Status',
  blocks: [],
};

export const DATA_OMBUDSPERSON: SubsectionPageData = {
  id: 'ombudsperson',
  eyebrow: 'STUDENT GRIEVANCE REDRESSAL',
  title: 'OMBUDSPERSON',
  heroSubtitle: 'Statutory Ombudsperson for redressal of student grievances under UGC Regulations.',
  verifiedBadge: 'UGC Grievance Redressal',
  heroImage: '/gallery/nuzvid-c-hero.jpg',
  heroAlt: 'RGUKT Ombudsperson',
  blocks: [],
};

