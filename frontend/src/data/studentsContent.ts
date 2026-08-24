/** Students section content — aligned with official RGUKT-AP portal and 4-campus records */

export const STUDENTS_NAV = [
  { label: 'Scholarships', href: '/students/scholarships' },
  { label: 'Medal Information', href: '/students/medals' },
  { label: 'Career Growth', href: '/students/career-growth' },
  { label: 'Quantum Computing Lab', href: '/students/quantum-lab' },
  { label: 'Anti Ragging', href: '/students/anti-ragging' },
  { label: 'Internal Complaint Committee', href: '/students/icc' },
  { label: 'Women Empowerment', href: '/students/women-empowerment' },
  { label: 'Cultural Activities', href: '/students/cultural' },
  { label: 'Sports', href: '/students/sports' },
  { label: 'Community Activities', href: '/students/community' },
  { label: 'Alumni Engagement', href: '/students/alumni-engagement' },
];

export const STUDENTS_OVERVIEW_STATS = [
  { value: '20,000+', label: 'Residential Scholars' },
  { value: '4 Campuses', label: 'Nuzvid, RK Valley, Ongole, Srikakulam' },
  { value: '90%+', label: 'Scholarship Beneficiaries' },
  { value: '24×7', label: 'Anti-Ragging Helpline' },
];

export const ESSENTIAL_SERVICES = {
  title: 'Student Support & Essential Campus Services',
  policeAssistance: {
    title: 'Campus Police & Security Assistance',
    intro:
      'RGUKT constituent campuses maintain active police and security coordination to safeguard residential scholars, faculty, and campus premises 24×7.',
    facilities: [
      'RK Valley (Idupulapaya) Campus: A dedicated on-campus Police Station is established at Idupulapaya near the IIIT academic complex, providing round-the-clock law enforcement, patrolling, and immediate emergency response.',
      'Nuzvid Campus: 24×7 internal security control wing with security checkpoints across all hostel and academic zones, operating in close coordination with the Nuzvid Deputy Superintendent of Police (DSP) and Town Police Station.',
      'Ongole & Srikakulam Campuses: Comprehensive internal security vigilance, biometric entry gates, CCTV surveillance, and direct emergency liaison with local police outposts.',
      'What Students Can Approach For: Loss of valuable identity documents/devices, reporting security or safety concerns, emergency police assistance, and legal verification support.',
      'Emergency Contacts: National Police Emergency: 112 / 100 | Campus Security Control Desks at all main gates.',
    ],
  },
  bankingServices: {
    title: 'State Bank of India (SBI) Campus Banking',
    intro:
      'State Bank of India operates dedicated full-service branches, 24×7 ATMs, and digital fee payment portals across RGUKT constituent campuses.',
    facilities: [
      'RGUKT Nuzvid Campus Branch: Full-service on-campus branch — SBI RGUIIIT Nuzvid (Branch Code: 21233 | IFSC: SBIN0021233) with on-site ATMs.',
      'RGUKT RK Valley Campus Branch: Full-service on-campus branch — SBI Idupulapaya (Branch Code: 21280 | IFSC: SBIN0021280) with on-site ATMs.',
      'Ongole & Srikakulam Campuses: Campus fee facilitation desks and digital banking support.',
      'SBI Collect Online Fee Payments: Official university fee payment portal (tuition, examination fees, mess, and hostel dues) accessible via https://www.onlinesbi.sbi/sbicollect/ with instant e-receipt generation.',
      'Student Services Provided: Zero-balance student savings accounts, Aadhaar-NPCI seeding for direct scholarship DBT disbursements, debit card issuance, and educational loan assistance.',
    ],
  },
};

export const SCHOLARSHIPS = {
  title: 'Scholarships & Financial Assistance',
  intro:
    'RGUKT-AP provides a comprehensive financial support and fee reimbursement ecosystem for rural meritorious students pursuing the 6-year integrated B.Tech program. Over 90% of enrolled scholars benefit from Government of Andhra Pradesh Post-Matric welfare schemes (Jagananna Vidya Deevena & Vasathi Deevena), National Scholarship Portal (NSP) grants, and institutional fee concessions.',
  stateSchemes: [
    'Jagananna Vidya Deevena (RTF): 100% full tuition fee reimbursement provided by the Government of Andhra Pradesh for eligible SC, ST, BC, EBC, Kapu, Minority, and Differently-Abled (PwD) students, credited via Direct Benefit Transfer (DBT) into the mother’s bank account through the Jnanabhumi portal.',
    'Jagananna Vasathi Deevena (MTF): Annual financial assistance provided towards hostel, mess, and boarding maintenance expenses for residential engineering scholars from economically weaker backgrounds.',
    'Post-Matric Welfare Scholarships: Targeted state assistance coordinated through AP Social Welfare, Tribal Welfare, BC Welfare, and Minority Welfare departments.',
  ],
  centralSchemes: [
    'National Scholarship Portal (NSP): Central Sector Scheme of Scholarship for College and University Students for top-merit rankers.',
    'Top Class Education for SC/ST Students: Ministry of Social Justice and Empowerment scheme covering full academic fees and living allowances for meritorious scholars.',
    'AICTE Pragati & Saksham Schemes: Dedicated scholarship grants for female engineering students (Pragati) and differently-abled students (Saksham).',
    'Ishan Uday Special Scholarship Scheme: UGC scholarship support for eligible students from the North Eastern Region.',
  ],
  eligibilityAndRules: [
    'Income Eligibility: Annual family income within state-notified limits (typically ≤ ₹2.50 Lakhs per annum for state welfare schemes).',
    'Mandatory Biometric Attendance: Minimum 75% biometric attendance required across all academic semesters for scholarship sanction and renewal.',
    'Aadhaar NPCI Mapping: Bank accounts must be strictly mapped with Aadhaar (NPCI active) for seamless DBT benefit transfer.',
    'Documentation: Annual submission of valid Income, Caste, and Residence certificates, along with college admission and promotion receipts.',
  ],
  campusDesks: [
    {
      campus: '1. Nuzvid Campus',
      location: 'Scholarship & Academic Section, Administrative Block (I-3), RGUKT Nuzvid',
      email: 'scholarships@rguktn.ac.in',
      phone: '+91-8656-235147',
    },
    {
      campus: '2. RK Valley (Idupulapaya) Campus',
      location: 'Scholarship & Student Welfare Section, Academic Block - 1, RGUKT RK Valley',
      email: 'scholarships@rguktrkv.ac.in',
      phone: '08588-283654',
    },
    {
      campus: '3. Ongole Campus',
      location: 'Student Welfare & Scholarship Desk, Administrative Office, RGUKT Ongole',
      email: 'scholarships@rguktong.ac.in',
      phone: '08592-223135',
    },
    {
      campus: '4. Srikakulam Campus',
      location: 'Scholarship Section, Administrative Complex, S.M. Puram Campus, Etcherla',
      email: 'scholarships@rguktsklm.ac.in',
      phone: '+91-8942-240100',
    },
  ],
  stats: [
    { value: '90%+', label: 'Scholarship Coverage' },
    { value: '100%', label: 'Tuition Fee Waiver (JVD)' },
    { value: '4 Desks', label: 'Dedicated Campus Support' },
    { value: 'Jnanabhumi', label: 'Integrated DBT Portal' },
  ],
  portals: [
    { name: 'AP Jnanabhumi Portal', url: 'https://jnanabhumi.ap.gov.in/' },
    { name: 'National Scholarship Portal (NSP)', url: 'https://scholarships.gov.in/' },
  ],
};

export const MEDALS = {
  title: 'Medal Information & Academic Honours',
  intro:
    'Rajiv Gandhi University of Knowledge Technologies – Andhra Pradesh recognizes outstanding academic brilliance, exemplary character, and all-round excellence through prestigious University Medals and Awards conferred at the formal University Convocation ceremonies.',
  categories: [
    'Chancellor’s Gold Medal: The highest academic distinction awarded to the Overall University Topper across all branches of engineering and constituent campuses in the graduating batch.',
    'Vice Chancellor’s Gold Medals: Awarded to the first-rank holders (toppers) in each individual branch of engineering (CSE, ECE, EEE, ME, CE, ChemE, and MME).',
    'Campus Director’s Medals: Conferred upon the top-performing graduates at each constituent campus (Nuzvid, RK Valley, Ongole, and Srikakulam).',
    'Special Academic & Leadership Awards: Conferred for Best Outgoing Student, Best All-Rounder (Academics & Sports), and Outstanding Undergraduate Project/Patent.',
  ],
  criteria: [
    'Academic Excellence: Must secure a Cumulative Grade Point Average (CGPA) of 8.00 or above on a 10.0-point scale.',
    'First Attempt Clearance: Must have passed all courses, laboratories, internships, and project viva in the first appearance / attempt without any history of backlogs.',
    'Prescribed Duration: Must complete the 6-year integrated B.Tech program (2-year PUC + 4-year B.Tech) within the standard minimum prescribed timeframe.',
    'Exemplary Conduct: Must possess a clean disciplinary record with no history of disciplinary penalties, malpractice, or detention due to attendance shortage.',
  ],
  convocationHighlights: [
    'VI Convocation (27 June 2026): Presided over by Hon’ble Chancellor Prof. K. Madhu Murthy and Chief Guest Prof. Gobardhan Das (Member, NITI Aayog), conferring degrees and gold medals upon meritorious scholars.',
    'Departmental Gold Medals awarded across Chemical Engineering, Civil Engineering, Computer Science, Electronics & Communications, Electrical & Electronics, Mechanical Engineering, and Metallurgical & Materials Engineering.',
    'Multi-Campus Honor Roll: Meritorious students from Nuzvid, RK Valley, Ongole, and Srikakulam celebrated for academic excellence and research contributions.',
  ],
  stats: [
    { value: 'Chancellor’s', label: 'Overall Topper Gold Medal' },
    { value: '7 Branches', label: 'Departmental Gold Medals' },
    { value: 'CGPA ≥ 8.0', label: 'Minimum Eligibility Criterion' },
    { value: '1st Attempt', label: 'Strict Merit Requirement' },
  ],
};

export const CAREER_GROWTH = {
  title: 'Career Growth & Student Development',
  intro:
    'RGUKT-AP is dedicated to the comprehensive personal, intellectual, and professional development of rural youth. Moving beyond routine recruitment, the university fosters competitive examination readiness (GATE, UPSC), higher education pathways (IISc, IITs, top global universities), coding excellence, and technology entrepreneurship across all four campuses.',
  pillars: [
    'Competitive Examination Mentorship (GATE & ESE): Dedicated coaching modules, test series, and mentorship by faculty and alumni for GATE preparation, leading to admissions in premier M.Tech/Ph.D. programs and recruitment in Maharatna/Navratna PSUs.',
    'Civil Services & Public Administration (UPSC & APPSC): Guidance cells, specialized library resources, and interactive sessions with serving IAS, IPS, and state civil servants from the RGUKT alumni network.',
    'Higher Studies & Global Admissions (GRE, TOEFL, CAT): Counseling on statement of purpose (SOP) drafting, letters of recommendation, and application procedures for premier institutes in India and abroad.',
    'Competitive Programming & Software Mastery: Student-led coding clubs, LeetCode/CodeChef hackathons, open-source development, and full-stack software engineering bootcamps.',
    'Innovation, Incubation & Entrepreneurship: Campus Innovation & Incubation Cells (IIC) support student founders in prototype development, patent filings, and regional hackathon participation (including Amaravati Quantum Valley challenges).',
    'Industry Skill Partnerships: Collaborations with technical skill platforms (such as Wadhwani Foundation) providing AI-powered communication, professional ethics, and leadership training.',
  ],
  campusCells: [
    {
      campus: '1. Nuzvid Campus',
      office: 'Career Guidance Cell (CGC) & Innovation Center, Administrative Complex',
      email: 'cgc@rguktn.ac.in',
    },
    {
      campus: '2. RK Valley (Idupulapaya) Campus',
      office: 'Career Development & Placement Cell (CDPC), Academic Block - 1',
      email: 'cdpc@rguktrkv.ac.in',
    },
    {
      campus: '3. Ongole Campus',
      office: 'Career Guidance Desk, RGUKT Ongole Campus',
      email: 'cgc@rguktong.ac.in',
    },
    {
      campus: '4. Srikakulam Campus',
      office: 'Training, Placement & Career Guidance Cell, S.M. Puram Campus',
      email: 'cgc@rguktsklm.ac.in',
    },
  ],
  stats: [
    { value: 'GATE & UPSC', label: 'Dedicated Guidance Tracks' },
    { value: '1:1 Mentoring', label: 'Faculty & Alumni Network' },
    { value: '100% Laptop', label: 'Access to Digital Learning' },
    { value: '4 Campuses', label: 'Active Career Cells' },
  ],
};

export const QUANTUM_LAB = {
  title: 'Quantum Computing Laboratory & Initiatives',
  intro:
    'RGUKT-AP is at the forefront of undergraduate quantum computing education and research in Andhra Pradesh. In synergy with the National Quantum Mission (NQM) and the state’s Amaravati Quantum Valley (AQV) ecosystem, the university has established advanced undergraduate quantum computing facilities and active hackathon hubs.',
  initiatives: [
    'Undergraduate Quantum Computing Lab (Nuzvid Campus): Equipped with high-performance computational systems, cloud access to quantum simulators, and development environments for quantum algorithms, circuits, and quantum cryptography.',
    'Amaravati Quantum Valley (AQV) Synergy: Active student and faculty participation in Andhra Pradesh’s quantum technology hub, engaging with quantum reference facilities and industry pioneers including IBM and TCS.',
    'Qiskit Fall Fest & Hackathons: Annual international quantum computing hackathons and bootcamps organized at RGUKT Nuzvid and Srikakulam campuses with IBM Quantum mentorship.',
    'Academic Course Modules: Specialized elective courses covering Quantum Information Theory, Qiskit SDK programming, Quantum Key Distribution (QKD), and Quantum Machine Learning (QML).',
    'Student Research Projects: Mentored undergraduate research on post-quantum cryptography, quantum optimization algorithms, and quantum circuit simulation.',
  ],
  campusHighlights: [
    'Nuzvid Campus: Dedicated Quantum Laboratory facility, faculty research seminars, and student quantum computing study circles.',
    'Srikakulam Campus: Host campus for Qiskit Fall Fest, hands-on quantum programming bootcamps, and developer workshops.',
    'RK Valley & Ongole Campuses: University-wide participation in state quantum hackathons and online quantum circuit competitions.',
  ],
  portalUrl: 'https://quantumtech.rgukt.in/',
  stats: [
    { value: 'IBM Qiskit', label: 'Integrated SDK Infrastructure' },
    { value: 'AQV Aligned', label: 'National Quantum Mission' },
    { value: 'Annual', label: 'Qiskit Fall Fest Hackathons' },
    { value: 'UG Focus', label: 'Undergraduate Quantum Research' },
  ],
};

export const ANTI_RAGGING = {
  title: 'Anti-Ragging Mechanism & Zero-Tolerance Policy',
  intro:
    'RGUKT-AP strictly enforces a ZERO-TOLERANCE policy against ragging in any form across all its constituent campuses. Ragging is a cognizable criminal offense punishable under Andhra Pradesh Prohibition of Ragging Act, 1997, and UGC Regulations on Curbing the Menace of Ragging in Higher Educational Institutions, 2009.',
  definitions: [
    'Ragging constitutes any conduct by words spoken or written, or by an act which has the effect of teasing, treating or handling with rudeness any student.',
    'Indulging in rowdy or undisciplined activities which cause or are likely to cause annoyance, hardship, physical/psychological harm, or fear in any student.',
    'Asking any student to perform any act which causes shame, embarrassment, or mental agony, or violates the dignity of the individual.',
  ],
  preventionFramework: [
    'Anti-Ragging Committees: Apex statutory bodies on every campus chaired by the Campus Director and comprising senior faculty, police authorities, local revenue officers, media, NGOs, parents, and student representatives.',
    'Anti-Ragging Squads: Dedicated faculty squads conducting 24×7 surprise vigilance rounds in hostel corridors, dining messes, common rooms, sports grounds, and transit routes.',
    'Mandatory Online Undertakings: Every student and parent must submit an annual online anti-ragging affidavit at www.antiragging.in or www.amanmovement.org at the beginning of each academic year.',
  ],
  consequences: [
    'Suspension: Immediate suspension from attending classes, academic privileges, and laboratory facilities.',
    'Withholding Benefits: Withholding scholarships, fellowships, examination hall tickets, and results.',
    'Debarring from Events: Debarring from representing the university in sports meets, cultural fests, and campus recruitment drives.',
    'Hostel Expulsion: Immediate suspension or permanent expulsion from residential hostel accommodation and dining messes.',
    'Rustication: Rustication from the university for periods ranging from 1 to 4 academic semesters.',
    'Permanent Expulsion: Expulsion from the institution and consequent debarment from admission to any other educational institution across India.',
    'Criminal Prosecution: Filing of formal First Information Report (FIR) with police authorities leading to arrest and rigorous imprisonment under the Andhra Pradesh Prohibition of Ragging Act, 1997.',
  ],
  reportingSteps: [
    'Step 1: Immediately notify your Campus Proctor, Hostel Warden, or Anti-Ragging Squad member.',
    'Step 2: Call the 24×7 National Anti-Ragging Toll-Free Helpline: 1800-180-5522.',
    'Step 3: Submit an online complaint at www.antiragging.in or email helpline@antiragging.in / antiragging@rgukt.ac.in.',
    'Step 4: In immediate danger, contact the UGC Monitoring Agency (Aman Satya Kachroo Trust) at 09871170303 / 09818400116 or dial National Police Emergency: 112.',
  ],
  helplines: {
    nationalTollFree: '1800-180-5522',
    nationalEmail: 'helpline@antiragging.in',
    emergencyMonitors: ['09871170303', '09818400116'],
    centralEmail: 'antiragging@rgukt.ac.in',
  },
  campusEmergencyContacts: [
    {
      campus: '1. Nuzvid Campus',
      office: 'Proctorial & Anti-Ragging Cell, Administrative Block',
      phone: '+91-8656-235147',
      email: 'dsw@rguktn.ac.in',
    },
    {
      campus: '2. RK Valley (Idupulapaya) Campus',
      office: 'Anti-Ragging Monitoring Squad, Academic Block - 1',
      phone: '08588-283654',
      email: 'dsw@rguktrkv.ac.in',
    },
    {
      campus: '3. Ongole Campus',
      office: 'Student Welfare & Anti-Ragging Cell, RGUKT Ongole',
      phone: '08592-223135',
      email: 'swo@rguktong.ac.in',
    },
    {
      campus: '4. Srikakulam Campus',
      office: 'Campus Anti-Ragging Desk, S.M. Puram Campus',
      phone: '+91-8942-240100',
      email: 'dsw@rguktsklm.ac.in',
    },
  ],
  stats: [
    { value: '1800-180-5522', label: '24×7 Toll-Free National Helpline' },
    { value: 'Zero Tolerance', label: 'Strictly Enforced Policy' },
    { value: '4 Campus Squads', label: '24×7 Hostel & Campus Vigilance' },
    { value: '100%', label: 'Mandatory Annual Affidavits' },
  ],
};

export const ICC = {
  title: 'Internal Complaints Committee (ICC)',
  intro:
    'The Internal Complaints Committee (ICC) of RGUKT-AP is statutory constituted in accordance with the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013 (POSH Act) and UGC Regulations, 2015. ICC functions exclusively to ensure a safe, respectful, and gender-equitable residential learning and working environment for all female students, faculty, and staff.',
  mandate: [
    'Scope & Purpose: Dedicated exclusively to the prevention, prohibition, and timebound redressal of complaints pertaining to sexual harassment, gender discrimination, or intimidation.',
    'Who Can Approach: Any female student, research scholar, faculty member, administrative staff, or contractual employee associated with RGUKT.',
    'Statutory Authority: Empowered under the POSH Act, 2013 to conduct impartial internal inquiries with the powers of a civil court regarding summoning and examination.',
    'Gender Sensitization: Organizes regular workshops on gender awareness, women’s rights, mental wellness, and workplace safety.',
  ],
  procedure: [
    'Filing a Complaint: Any aggrieved woman may submit a written or email complaint to the Presiding Officer / ICC within 3 months of the date of the incident.',
    'Confidentiality: Absolute legal confidentiality of the complainant’s identity, witness statements, and inquiry proceedings is strictly guaranteed.',
    'Timebound Impartial Inquiry: The Committee conducts a fair, transparent inquiry completed strictly within the statutory 90-day timeframe.',
    'Interim Relief & Support: The Committee may recommend interim accommodations (hostel reallocation, academic leaves, psychological counseling support) during proceedings.',
    'Zero Retaliation Policy: Strict administrative prohibition against any form of retaliation against complainants or witnesses, treated as severe misconduct.',
  ],
  campusLeadership: [
    {
      campus: 'RGUKT-AP Central & Nuzvid Campus',
      officer: 'Dr. D. V. Nagarjana Devi, M.Tech., Ph.D.',
      role: 'Presiding Officer, ICC & Assistant Professor CSE',
      email: 'icc@rguktn.ac.in',
      phone: '+91-863-2344708',
    },
    {
      campus: 'RK Valley (Idupulapaya) Campus',
      officer: 'Presiding Officer, Women’s Cell & ICC',
      role: 'Academic Block - 1, RGUKT RK Valley',
      email: 'icc@rguktrkv.ac.in',
      phone: '08588-283654',
    },
    {
      campus: 'Ongole Campus',
      officer: 'Campus ICC Coordinator & Women Welfare Desk',
      role: 'RGUKT Ongole Campus',
      email: 'icc@rguktong.ac.in',
      phone: '08592-223135',
    },
    {
      campus: 'Srikakulam Campus',
      officer: 'Presiding Officer, Campus ICC & Women Grievance Cell',
      role: 'S.M. Puram Campus, Etcherla',
      email: 'icc@rguktsklm.ac.in',
      phone: '+91-8942-240100',
    },
  ],
  stats: [
    { value: 'POSH Act 2013', label: 'Statutory Legal Compliance' },
    { value: '100% Confidential', label: 'Protected Grievance Redressal' },
    { value: '90-Day', label: 'Timebound Inquiry Resolution' },
    { value: '4 Campuses', label: 'Active Women Support Cells' },
  ],
};

export const WOMEN_EMPOWERMENT = {
  title: 'Women Empowerment & Gender Equity',
  intro:
    'With female students comprising over 50% of the total student enrollment, RGUKT-AP places paramount emphasis on gender equity, personal safety, health, and leadership development. The Women Empowerment Cell (WEC) actively provides institutional support and developmental initiatives across all constituent campuses.',
  infrastructure: [
    'Dedicated Girls’ Common Rooms: Safe, hygienic spaces equipped with purified drinking water, clean sanitation facilities, and sanitary napkin vending & incinerator disposal systems.',
    '24×7 Women Security: Dedicated female security guards stationed at all girls’ hostel complexes, academic block entry points, and campus checkpoints.',
    'Campus Medical Centers: 10-bed healthcare wards with resident female medical officers, nurses, and 24×7 emergency ambulance connectivity.',
    'Professional Psychological Counseling: Full-time female counselors offering confidential mental health, stress management, and emotional support.',
  ],
  keyPrograms: [
    'Practical Self-Defence Training: Regular martial arts, karate, and situational defense workshops conducted across girls’ hostels to build agility, awareness, and physical confidence.',
    'Women in STEM & Leadership Circles: Interactive mentorship sessions with distinguished female scientists, corporate leaders, and civil servants.',
    'Health & Nutrition Camps: Regular medical screening for anemia, gynecological consultations, and menstrual hygiene awareness drives.',
    'International Women’s Day Celebrations (March 8): University-wide annual celebrations featuring literary debates, elocution, arts, and felicitations for outstanding female achievers.',
  ],
  campusActivities: [
    'Nuzvid Campus: Active Women Empowerment Cell organizing annual "Tejaswini" leadership seminars and personality development camps.',
    'RK Valley Campus: Comprehensive self-defense training workshops, yoga for wellness, and peer-mentoring circles in girls’ hostels.',
    'Ongole Campus: Regular health checkup camps, gender sensitization lectures, and cultural events.',
    'Srikakulam Campus: Technical skill-building workshops, career empowerment sessions, and women student leadership conclaves.',
  ],
  stats: [
    { value: '50%+', label: 'Girl Student Enrolment' },
    { value: '24×7', label: 'Dedicated Female Security' },
    { value: '10-Bed', label: 'Campus Healthcare Wards' },
    { value: 'Regular', label: 'Self-Defence Training' },
  ],
};

export const CULTURAL = {
  title: 'Cultural Activities & Student Societies',
  intro:
    'Cultural life at RGUKT-AP is vibrant, inclusive, and deeply woven into residential campus living. Through student-led clubs, the signature national fest TECKZITE, and the cultural extravaganza CYGNUS, students celebrate rich Indian heritage, performing arts, contemporary music, literature, and theatre across all four campuses.',
  teckzite: {
    title: 'TECKZITE — Annual National Techno-Management Fest (RGUKT Nuzvid)',
    intro:
      'TECKZITE is the premier annual national-level techno-management fest organized by the Student Development & Campus Activity Cell (SDCAC) at RGUKT Nuzvid (conducted in the second semester, typically February/March). It brings together thousands of engineering scholars from across India.',
    highlights: [
      'Technical Challenges & Hackathons: National-level coding marathons, 24-hour hackathons, robotics obstacle races, drone leagues, Auto Expo, Circuit Mania, and Civil CAD design challenges.',
      'Certified Technical Workshops: Hands-on workshops in cutting-edge domains including Machine Learning, Cloud Computing, IoT, AWS, 3D printing, and Cyber Security.',
      'Project Expos & Paper Presentations: Undergraduate innovation showcases evaluated by industry experts and academic judges.',
      'Cultural Nights & Pro Shows: High-octane musical concerts, celebrity guest performances, DJ nights, and multi-college talent showcases.',
      'Participation & Certification: Draws thousands of participants from over 100+ colleges nationwide with verified merit certificates, cash prizes, and corporate internship linkages.',
    ],
  },
  cygnus: {
    title: 'CYGNUS — Annual Cultural Extravaganza (RGUKT Nuzvid)',
    intro:
      'CYGNUS is the signature annual cultural festival hosted at RGUKT Nuzvid (conducted in the spring semester, typically March/April). While TECKZITE focuses on technology and management, CYGNUS is dedicated exclusively to celebrating artistic expression, stage performances, and cultural diversity.',
    highlights: [
      'Music & Singing Competitions: Classical Carnatic/Hindustani recitals, light vocal, western acoustic bands, and inter-batch musical face-offs.',
      'Dance Battles & Choreography: Classical Kuchipudi/Bharatanatyam, regional folk dance (Dhimsa, Lambadi), and high-energy western group choreography.',
      'Dramatics & Street Plays: Theatrical stage plays, social-issue mimes, and energetic street plays (Nukkad Natak).',
      'Fashion Show & Ramp Walk: Ethnic and contemporary student fashion showcases celebrating diverse cultural traditions.',
      'Fine Arts & Photography Exhibitions: Live sketching, canvas painting, Rangoli contests, and campus photo galleries.',
    ],
  },
  otherCampusFests: [
    'RGUKT RK Valley (Idupulapaya) — Abhiyanth: Grand annual national techno-cultural festival integrating technical hackathons with electrifying cultural nights and celebrity artist concerts.',
    'RGUKT Ongole — Ornate: Annual talent and cultural festival showcasing student music bands, classical dance recitals, flash mobs, and literary debates.',
    'RGUKT Srikakulam — TechFest / Techniverse & Cultural Carnivals: Annual student fests coordinated under the Students’ Gymkhana Center (SGC) featuring inter-departmental performing arts championships.',
  ],
  studentClubs: [
    'Music & Vocal Arts: Classical music circles, acoustic student bands, and choral singing groups.',
    'Dance Societies: Classical dance troupes, folk ensembles, and contemporary western dance crews.',
    'Literary & Debating: Telugu Bhasha Samiti, English Literary Society, Model United Nations (MUN), poetry slams, and oratory clubs.',
    'Fine Arts & Photography: Sketching, canvas painting, rangoli art, digital graphics, and campus photography clubs.',
    'Theatre & Dramatics: Street plays (Nukkad Natak), social issue mimes, and annual full-length theatrical productions.',
  ],
  traditionalCelebrations: [
    'Sankranti Sambaralu: Vibrant campus-wide celebrations with traditional attire, kite flying, Rangoli competitions, and folk performances.',
    'Telugu Bhasha Dinotsavam: Commemorating the rich heritage and literature of the Telugu language through poetry recitals and scholarly talks.',
    'National Youth Day (Jan 12): Celebrating Swami Vivekananda’s birth anniversary with youth conclaves, debates, and community pledges.',
  ],
  governance:
    'All cultural events and clubs are governed by the Students’ Gymkhana Center (SGC) and Student Development & Campus Activity Cells (SDCAC) under the Dean of Student Welfare.',
  stats: [
    { value: 'TECKZITE', label: 'National Techno-Management Fest' },
    { value: 'CYGNUS', label: 'Signature Cultural Extravaganza' },
    { value: '25+ Clubs', label: 'Active Student Societies' },
    { value: '4 Campuses', label: 'Vibrant Annual Fests' },
  ],
};

export const SPORTS = {
  title: 'Student Sports & Physical Fitness',
  intro:
    'Sports and physical fitness are an integral component of student life at RGUKT-AP. Every residential scholar has daily access to standard grounds, floodlit courts, multi-gymnasiums, professional physical education faculty, and competitive tournament selection pathways.',
  dailyHours: [
    'Morning Fitness & Conditioning: 6:00 AM – 7:30 AM (Running, athletics, physical conditioning, yoga, and warm-up drills).',
    'Evening Sports & Games: 4:30 PM – 7:00 PM (Team sports matches, cricket, volleyball, basketball, racquet games, and gym training).',
    'Equipment Availability: Sports equipment and kits are issued to students against college ID cards from campus sports stores.',
  ],
  campusFacilities: [
    {
      campus: '1. Nuzvid Campus',
      facilities: '400m running track, standard cricket ground, floodlit basketball and volleyball courts, indoor badminton hall, table tennis tables, multi-gym, and open-air yoga pavilion.',
      activities: 'Department Premier League (DPL), inter-batch athletic championships, and AIU selection trials.',
    },
    {
      campus: '2. RK Valley (Idupulapaya) Campus',
      facilities: 'Multi-purpose cricket & football grounds, 400m athletics track, outdoor volleyball & kabaddi courts, indoor sports stadium (badminton/TT), well-equipped gym for boys & girls, and Yoga Dhyana Kendra.',
      activities: 'Physical education curriculum, annual campus sports fest, and inter-hostel leagues.',
    },
    {
      campus: '3. Ongole Campus',
      facilities: 'Campus sports grounds, volleyball & throwball courts, kabaddi arena, indoor badminton practice setups, table tennis, and fitness stations.',
      activities: 'Inter-branch sports meets, sports day competitions, and morning fitness conditioning.',
    },
    {
      campus: '4. Srikakulam Campus',
      facilities: '20+ acre dedicated sports zone at the permanent S.M. Puram campus featuring multi-sport grounds, cricket pitch, volleyball courts, kabaddi courts, and indoor sports hall.',
      activities: 'Hosted the RGUKT Inter-Campus Sports Meet; regular campus athletic leagues and yoga camps.',
    },
  ],
  studentTournaments: [
    'Department Premier League (DPL): Thrilling intra-campus cricket and volleyball championships between engineering branches.',
    'Inter-Hostel Championship Cups: Annual multi-sport leagues organized across residential hostel blocks.',
    'RGUKT Inter-Campus Sports Meet: Apex university championship where selected campus contingents compete for the Overall Rolling Trophy.',
    'AIU & State Tournaments: Open trials for representing RGUKT-AP in South Zone and All India Inter-University championships, AP CM Cup, and Khelo India.',
  ],
  fitnessAndYoga: [
    'Modern Campus Gymnasiums: Equipped with cardiovascular trainers, weight-training benches, and resistance machines with designated hours for boys and girls.',
    'Yoga & Mindful Wellness: Daily guided sessions in Hatha Yoga, Surya Namaskar, and Pranayama for stress relief and focus, plus grand annual celebrations of International Yoga Day on June 21.',
  ],
  stats: [
    { value: '15+ Sports', label: 'Indoor & Outdoor Games' },
    { value: '20+ Acres', label: 'Dedicated Sports Infrastructure' },
    { value: 'Daily Access', label: 'Morning & Evening Recreation' },
    { value: 'AIU Pathways', label: 'National University Competitions' },
  ],
};

export const NCC = {
  title: 'NCC – National Cadet Corps',
  intro:
    'Functioning under the supreme motto "Unity and Discipline (Ekta aur Anushasan)", the National Cadet Corps (NCC) at RGUKT develops character, comradeship, leadership, secular outlook, the spirit of adventure, and the ideals of selfless service among students, motivating engineering scholars to excel in nation-building and defense service careers.',
  participation: [
    'Annual Enrollment: Open to 1st-year and 2nd-year engineering undergraduates across Senior Division (SD - Boys) and Senior Wing (SW - Girls).',
    'Special Category Quota: NCC certificate holders receive designated statutory reservation under the Special Category during RGUKT admissions and government career pathways.',
    'Certificate Progression: Cadets undergo a structured 3-year institutional and camp curriculum to clear the prestigious NCC ‘B’ and ‘C’ Certificate examinations.',
  ],
  trainingAndActivities: [
    'Institutional Training: Weekly ceremonial drills, weapon training (.22 rifle handling and firing practice), map reading, field craft, obstacle courses, and military leadership classes.',
    'Annual Training Camps (ATC / CATC): Intensive 10-day residential training camps focusing on military discipline, tent pitching, night navigation, and inter-battalion sports and drill competitions.',
    'Ceremonial Parades: NCC contingents present the Guard of Honour and lead university march-pasts during Independence Day (August 15) and Republic Day (January 26) celebrations.',
    'National Integration & Adventure: Advanced training avenues including Republic Day Camp (RDC), Thal Sainik Camp (TSC), trekking expeditions, and national integration camps across India.',
  ],
  communityService: [
    'Puneet Sagar & Swachh Bharat Abhiyan: Cadets actively lead water-body rejuvenation, plastic eradication, and campus sanitation drives.',
    'Voluntary Blood Donation: Life-saving blood donation drives organized in coordination with Government General Hospitals and the Indian Red Cross Society.',
    'Social Awareness Rallies: High-impact awareness campaigns on anti-drug abuse, traffic safety, organ donation, disaster response, and girl-child education.',
    'Disaster Relief & Civic Assistance: Disciplined cadet volunteer squads mobilized to assist local administration during civic emergencies and public events.',
  ],
  recentAchievements: [
    'Republic Day Camp (RDC) Representation: Cadets (including Cadet G. Harinath Babu) selected to represent the Directorate at the prestigious Republic Day Camp in New Delhi.',
    'Commissioned as Armed Forces Officers: Distinguished alumni selected through SSB and trained at the Indian Military Academy (IMA) to serve as Indian Army Officers (e.g. Lt. Ch. S. R. Krishna Teja, Lt. B. Yadagiri).',
    'High ‘B’ & ‘C’ Certificate Pass Percentage: Consistent top-tier pass rates in NCC certificate examinations conducted under the NCC Vijayawada Group.',
  ],
  leadershipAndUnits: [
    {
      unit: 'Senior Division (SD) Boys Company',
      affiliation: '17 (A) Battalion NCC, Vijayawada Group',
      officer: 'Captain Dr. Ch. S. R. Naveen Kumar',
      designation: 'Associate NCC Officer (ANO)',
      campus: 'RGUKT Nuzvid Campus',
    },
    {
      unit: 'Senior Wing (SW) Girls Company',
      affiliation: '4 (A) Girls Battalion NCC, Vijayawada Group',
      officer: 'Lieutenant Subbalakshmi Ch',
      designation: 'Associate NCC Officer (ANO)',
      campus: 'RGUKT Nuzvid Campus',
    },
  ],
};

export const COMMUNITY = {
  title: 'Community Activities & National Service Scheme (NSS)',
  intro:
    'Dedicated to the motto "Not Me But You", RGUKT-AP fosters social empathy and rural leadership among engineering students. Through the National Service Scheme (NSS), National Cadet Corps (NCC), and student social cells, volunteers actively lead rural development, healthcare drives, literacy camps, disaster management, and environmental conservation projects.',
  flagshipInitiatives: [
    '7-Day Special Rural Residential Camps: NSS units adopt neighboring rural villages (such as Ravicharla, Kommaram Palli, Veerannagattu Palli, and S.M. Puram) to conduct socio-economic surveys, sanitation drives, and rural technology demonstrations.',
    'Voluntary Blood Donation Camps: Organized regularly in association with the Indian Red Cross Society and Government General Hospitals, contributing hundreds of life-saving blood units annually.',
    'Swachh Bharat & Swachh Andhra Drives: Extensive campus cleanliness campaigns, plastic-free zone enforcement, and village waste-segregation awareness programs.',
    'Digital & Science Literacy for Rural Schools: Engineering students conduct hands-on computer workshops, science experiments, and mathematics mentoring for rural government school children.',
    'Vanamahotsavam & Environmental Protection: Large-scale tree plantation drives, maintaining green campus belts, rainwater harvesting initiatives, and water conservation awareness.',
  ],
  campusUnits: [
    {
      campus: '1. Nuzvid Campus',
      highlights: '4 active NSS units with over 1,000+ registered student volunteers conducting massive Swachh Bharat and rural development drives.',
    },
    {
      campus: '2. RK Valley (Idupulapaya) Campus',
      highlights: 'Multiple NSS units leading mega health awareness camps, Ek Bharat Shreshtha Bharat cultural exchanges, and village adoption projects.',
    },
    {
      campus: '3. Ongole Campus',
      highlights: 'Dedicated community service wing organizing rural health camps, tree plantation, and digital literacy classes.',
    },
    {
      campus: '4. Srikakulam Campus',
      highlights: 'Over 400+ active NSS volunteers leading bi-annual blood donation camps and monthly cleanliness drives in S.M. Puram.',
    },
  ],
  ncc: NCC,
  stats: [
    { value: '2,000+', label: 'Active NSS Volunteers' },
    { value: '2 Active COYs', label: 'NCC Senior Div & Wing Units' },
    { value: '10+ Villages', label: 'Adopted Rural Communities' },
    { value: '1,500+ Units', label: 'Blood Donated Annually' },
  ],
};

export const ALUMNI_ENGAGEMENT = {
  title: 'Alumni Engagement & Student Mentorship',
  intro:
    'The global RGUKT Alumni Network comprises thousands of accomplished graduates serving as technocrats in Fortune 500 companies, research scientists, civil servants (IAS/IPS), and successful entrepreneurs. Current students benefit through structured mentorship, industry webinars, coding guidance, and career pathways.',
  associationFramework: [
    'Registered Alumni Associations: Formal alumni bodies registered under the Societies Registration Act XXI of 1860, including the RGUKT RK Valley Alumni Association (RGURAA) and RGUKT Nuzvid International & Alumni Relations (IAR).',
    'Digital Alumni Portals & Networks: Interactive platforms (such as Eternox) and LinkedIn chapters connecting alumni across Bengaluru, Hyderabad, Silicon Valley, and Europe with current scholars.',
  ],
  mentorshipAndPrograms: [
    '1-on-1 Student Career Mentorship: Distinguished alumni mentor pre-final and final-year students on career roadmaps, resume building, and technical interview preparation.',
    'Alumni Knowledge Series & Tech Talks: Industry leaders from Google, Microsoft, Amazon, Qualcomm, TCS, and Infosys deliver guest lectures on AI/ML, Cloud Computing, VLSI, and Cybersecurity.',
    'Civil Services Mentorship Circle: Interactive guidance sessions by alumni who cracked UPSC Civil Services (IAS/IPS/IRS) and APPSC Group-I examinations.',
    'Higher Studies Mentoring: Alumni pursuing Master’s and Ph.D. programs at IISc, IITs, Stanford, CMU, and European universities guide students on admissions, GRE/TOEFL, and research fellowships.',
    'Placement Referrals & Internships: Active alumni networks provide corporate referrals, internship opportunities, and sponsorship for student hackathons and merit awards.',
  ],
  campusDesks: [
    {
      campus: '1. Nuzvid Campus',
      office: 'International & Alumni Relations (IAR) Office, Administrative Block',
      email: 'iar@rguktn.ac.in',
    },
    {
      campus: '2. RK Valley (Idupulapaya) Campus',
      office: 'RGUKT RK Valley Alumni Association (RGURAA), Academic Block - 1',
      email: 'alumni@rguktrkv.ac.in',
    },
    {
      campus: '3. Ongole Campus',
      office: 'Alumni Coordination Desk, RGUKT Ongole Campus',
      email: 'alumni@rguktong.ac.in',
    },
    {
      campus: '4. Srikakulam Campus',
      office: 'Alumni Relations Cell, S.M. Puram Campus',
      email: 'alumni@rguktsklm.ac.in',
    },
  ],
  stats: [
    { value: '25,000+', label: 'Global Alumni Network' },
    { value: 'Fortune 500', label: 'Top Tech & Research Placements' },
    { value: '100+', label: 'Annual Mentorship Sessions' },
    { value: 'Registered', label: 'Societies Act XXI Alumni Bodies' },
  ],
};
