const fs = require('fs');
const path = require('path');
const PDFDocument = require(path.resolve(__dirname, '../frontend/node_modules/pdfkit/js/pdfkit.js'));

const outputDir = path.resolve(__dirname, '../frontend/public/docs/careers');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

function createStyledPdf(filename, title, subtitle, documentMeta, sections) {
  const filePath = path.join(outputDir, filename);
  const doc = new PDFDocument({
    size: 'A4',
    margins: { top: 30, bottom: 15, left: 45, right: 45 },
    autoFirstPage: true,
    info: {
      Title: title,
      Author: 'Rajiv Gandhi University of Knowledge Technologies - Andhra Pradesh',
      Subject: subtitle,
      Keywords: 'RGUKT, AP, Careers, Recruitment, Faculty, Non-Teaching, Guidelines, Notifications',
    },
  });

  const stream = fs.createWriteStream(filePath);
  doc.pipe(stream);

  const pageWidth = 595.28;
  const pageHeight = 841.89;
  const contentWidth = pageWidth - 90; // 505.28

  // 1. Header Banner
  doc.rect(0, 0, pageWidth, 68).fill('#0A2744');
  doc.rect(0, 68, pageWidth, 4).fill('#C8102E');

  doc.fillColor('#FFFFFF').fontSize(12.5).font('Helvetica-Bold')
    .text('RAJIV GANDHI UNIVERSITY OF KNOWLEDGE TECHNOLOGIES', 45, 14, { width: contentWidth, align: 'center' });
  doc.fontSize(9).font('Helvetica')
    .text('Andhra Pradesh | Constituent Campuses: Nuzvid • RK Valley • Srikakulam • Ongole', 45, 31, { width: contentWidth, align: 'center' });
  doc.fontSize(8).font('Helvetica-Oblique')
    .text('Catering to the Educational Needs of Gifted Rural Youth of Andhra Pradesh | Established by Govt. of AP under Act 18 of 2008', 45, 45, { width: contentWidth, align: 'center' });

  doc.y = 82;

  // 2. Title Section
  doc.fillColor('#C8102E').fontSize(12).font('Helvetica-Bold').text(title, 45, doc.y, { width: contentWidth, align: 'left' });
  if (subtitle) {
    doc.moveDown(0.2);
    doc.fillColor('#334155').fontSize(8.5).font('Helvetica-Bold').text(subtitle, 45, doc.y, { width: contentWidth });
  }
  doc.moveDown(0.4);

  // 3. Metadata Table (Clean 3-column boxed grid)
  const metaBoxY = doc.y;
  const metaBoxHeight = 22;
  doc.rect(45, metaBoxY, contentWidth, metaBoxHeight).fill('#F8FAFC');
  doc.rect(45, metaBoxY, contentWidth, metaBoxHeight).stroke('#CBD5E1');

  // Column Dividers
  doc.moveTo(215, metaBoxY).lineTo(215, metaBoxY + metaBoxHeight).stroke('#CBD5E1');
  doc.moveTo(375, metaBoxY).lineTo(375, metaBoxY + metaBoxHeight).stroke('#CBD5E1');

  const textY = metaBoxY + 6;
  doc.fillColor('#0A2744').fontSize(7.5).font('Helvetica-Bold');
  doc.text(`Ref: ${documentMeta.ref || 'RGUKT/ESTT/2026'}`, 50, textY, { width: 160, lineBreak: false });
  doc.text(`Effective: ${documentMeta.effective || 'Academic Year 2026-27'}`, 220, textY, { width: 150, lineBreak: false });
  doc.text(`Authority: ${documentMeta.authority || 'RGUKT-AP'}`, 380, textY, { width: 165, lineBreak: false });

  doc.y = metaBoxY + metaBoxHeight + 8;

  // 4. Content Sections
  sections.forEach((sec) => {
    // Section Header with left red pill
    const secY = doc.y;
    doc.rect(45, secY, 3, 13).fill('#C8102E');
    doc.fillColor('#0A2744').fontSize(9.5).font('Helvetica-Bold')
      .text(sec.heading, 53, secY + 1, { width: contentWidth - 10 });
    doc.moveDown(0.3);

    if (sec.paragraphs) {
      sec.paragraphs.forEach((p) => {
        doc.fillColor('#334155').fontSize(8.2).font('Helvetica')
          .text(p, 45, doc.y, { width: contentWidth, align: 'justify', lineGap: 1.5 });
        doc.moveDown(0.3);
      });
    }

    if (sec.items) {
      sec.items.forEach((item) => {
        doc.fillColor('#334155').fontSize(8.2).font('Helvetica')
          .text(`•  ${item}`, 45, doc.y, { width: contentWidth, indent: 8, align: 'justify', lineGap: 1.2 });
        doc.moveDown(0.18);
      });
      doc.moveDown(0.25);
    }
  });

  // Footer on bottom of page
  doc.rect(45, 785, contentWidth, 0.8).fill('#CBD5E1');
  doc.fontSize(7.5).fillColor('#64748B').font('Helvetica')
    .text('Rajiv Gandhi University of Knowledge Technologies - Andhra Pradesh | Official Careers Portal (https://www.rgukt.in/careers/)', 45, 792, { width: contentWidth - 80, lineBreak: false });
  doc.text('Page 1 of 1', pageWidth - 110, 792, { width: 65, align: 'right', lineBreak: false });

  doc.end();
  console.log(`Generated: ${filename}`);
}

// 1. AP State University Faculty Recruitment (RGUKT)
createStyledPdf(
  'ap-univ-faculty-recruitment-2026.pdf',
  'AP STATE UNIVERSITIES RECRUITMENT NOTIFICATION (RGUKT-AP)',
  'Recruitment Drive for Assistant Professor, Associate Professor & Lecturer Positions Across 4 Campuses',
  {
    ref: 'Advt. AP-Univ/Recruitment/RGUKT/2026',
    effective: 'AY 2026-27 Onwards',
    authority: 'AP Higher Education & RGUKT',
  },
  [
    {
      heading: '1. Overview of the University Faculty Recruitment',
      paragraphs: [
        'Applications are invited online through the AP State Universities Recruitment Portal from eligible candidates for faculty positions across the four constituent campuses of Rajiv Gandhi University of Knowledge Technologies - Andhra Pradesh (Nuzvid, RK Valley, Srikakulam, and Ongole).',
        'RGUKT-AP is a premier autonomous state university established under Act 18 of 2008 by the Government of Andhra Pradesh, catering to gifted rural youth through a 6-year integrated B.Tech curriculum in Information Technology and emerging engineering disciplines.',
      ],
    },
    {
      heading: '2. Positions and Disciplines Covered',
      items: [
        'Engineering Disciplines: Computer Science & Engineering (CSE), Electronics & Communication Engineering (ECE), Mechanical Engineering (ME), Civil Engineering (CE), Chemical Engineering (ChemE), Materials & Metallurgical Engineering (MME).',
        'Basic Sciences & Mathematics: Mathematics, Physics, Chemistry, Biology / Bioinformatics.',
        'Humanities & Social Sciences: English Language & Literature, Management Studies, Telugu.',
      ],
    },
    {
      heading: '3. Minimum Qualifications & Pay Framework',
      items: [
        'Assistant Professor / Lecturer: Master’s degree with 55% marks in relevant branch, along with UGC-NET / CSIR-NET / AP-SET or Ph.D. as per UGC/AICTE Regulations.',
        'Pay Scales: Academic Level 10 (7th Central Pay Commission) / Consolidated remuneration as applicable for contractual appointments.',
        'Age Limit & Relaxations: As per Andhra Pradesh State Government reservation rules (SC/ST/BC/EWS/PwD).',
      ],
    },
    {
      heading: '4. Application and Selection Procedure',
      paragraphs: [
        'Candidates must register and submit applications online at https://apuniversitiesrecruitment.apcfss.in/ or through links on the RGUKT portal https://www.rgukt.in/careers/. Selection comprises Academic Performance Indicator (API) scoring, screening evaluation, pedagogical demonstration, and personal interview before the Statutory Selection Committee.',
      ],
    },
  ]
);

// 2. Faculty Recruitment Guidelines & Selection Norms
createStyledPdf(
  'rgukt-faculty-guidelines-2024.pdf',
  'RGUKT-AP FACULTY RECRUITMENT GUIDELINES & SELECTION NORMS',
  'Standard Operating Procedure for Academic Staff Selection, API Scoring & Demonstration Criteria',
  {
    ref: 'RGUKT/ESTT/FAC-GUIDE/2024-25',
    effective: 'AY 2024-25 Onwards',
    authority: 'Governing Council, RGUKT-AP',
  },
  [
    {
      heading: '1. Objective and Institutional Scope',
      paragraphs: [
        'These guidelines establish the transparent, merit-based selection criteria for regular and contractual faculty appointments across all four constituent campuses of RGUKT-AP. The norms ensure high academic rigor, pedagogical capability, and multidisciplinary research aptitude in selected candidates.',
      ],
    },
    {
      heading: '2. Academic Performance Indicator (API) Evaluation Matrix',
      items: [
        'Academic Record & Research Score: Objective weightages allocated for UG, PG, Ph.D. qualifications, SCI/Scopus indexed publications, citations, and patents.',
        'Pedagogical Demonstration: Mandatory 15-minute classroom teaching demonstration evaluated by senior experts on concept delivery, student engagement, and digital board mastery.',
        'Research Vision & Sponsored Funding: Evaluation of proposed research thrust areas and capacity to attract external sponsored grants from DST, SERB, AICTE, and MeitY.',
      ],
    },
    {
      heading: '3. Statutory Selection Committee Composition',
      paragraphs: [
        'As mandated by the RGUKT Act 18 of 2008, the Selection Committee includes the Vice-Chancellor (Chairperson), Chancellor’s Nominee, Campus Directors, Subject Experts nominated by Academic Council from premier institutes (IITs/NITs), and Diversity Representatives.',
      ],
    },
  ]
);

// 3. Guest Faculty Guidelines & Selection Norms
createStyledPdf(
  'guest-faculty-norms-2024-25.pdf',
  'GUEST & VISITING FACULTY ENGAGEMENT GUIDELINES',
  'Semester-Wise Temporary Academic Appointments, Honorarium Framework & Workload Norms',
  {
    ref: 'RGUKT/ACAD/GUEST-FAC/2024-25',
    effective: 'AY 2024-25 Onwards',
    authority: 'Executive Committee, RGUKT',
  },
  [
    {
      heading: '1. Engagement Protocol & Institutional Purpose',
      paragraphs: [
        'Guest and Visiting Faculty are engaged on an hourly/semester basis across constituent campuses to fulfill immediate instructional needs in specialized electives, foundational PUC courses, and lab practicals.',
      ],
    },
    {
      heading: '2. Minimum Eligibility Criteria',
      items: [
        'Engineering Disciplines: First Class in B.Tech and M.Tech in the appropriate branch of engineering.',
        'Sciences & Humanities: Master’s Degree with at least 55% marks (50% for SC/ST/PwD) and NET / SET or Ph.D.',
        'Remuneration: Paid on lecture-hour basis or fixed monthly consolidated honorarium as sanctioned by the Executive Committee.',
      ],
    },
    {
      heading: '3. Core Instructional Responsibilities',
      items: [
        'Conducting regular lectures, tutorials, and practical laboratory sessions according to the university master timetable.',
        'Continuous assessment, evaluation of mid-term examinations, and prompt submission of internal grades to the Dean of Evaluation.',
        'Mentoring residential students during designated evening study hours in campus academic blocks.',
      ],
    },
  ]
);

// 4. Non-Teaching Staff Recruitment Regulations
createStyledPdf(
  'non-teaching-recruitment-rules.pdf',
  'NON-TEACHING & TECHNICAL STAFF RECRUITMENT REGULATIONS',
  'Cadre Strength, Qualifications, Technical Skill Tests & Service Conditions',
  {
    ref: 'RGUKT/ESTT/NON-TEACH/2024',
    effective: 'April 2024 Onwards',
    authority: 'Office of the Registrar, RGUKT',
  },
  [
    {
      heading: '1. Categorization of Operational Cadres',
      items: [
        'Administrative Cadre: Assistant Registrar, Section Officer, Superintendent, Senior Assistant, Junior Assistant.',
        'Technical & Laboratory Cadre: System Analyst, Network Administrator, Technical Officer, Lab Assistant, Workshop Instructor.',
        'Healthcare & Welfare Cadre: Residential Medical Officer (RMO), Staff Nurse, Physical Education Trainer (PET), Hostel Caretaker.',
      ],
    },
    {
      heading: '2. Mode of Selection & Examination',
      paragraphs: [
        'Selection is conducted through computer-based objective proficiency tests, technical skill tests (for laboratory and networking positions), and credential verification strictly adhering to merit and Government of Andhra Pradesh reservation rules.',
      ],
    },
    {
      heading: '3. Residential Service Conditions',
      paragraphs: [
        'All staff appointments are governed by RGUKT Service Rules and Government of Andhra Pradesh orders. Employees are assigned to residential campuses with entitlement to campus accommodation and healthcare facilities.',
      ],
    },
  ]
);

// 5. Statutory Positions Under RGUKT Act
createStyledPdf(
  'statutory-positions-act-provisions.pdf',
  'STATUTORY & EXECUTIVE LEADERSHIP APPOINTMENT PROVISIONS',
  'Provisions Governing Chancellor, Vice-Chancellor, Directors, Registrar & Deans',
  {
    ref: 'RGUKT/ACT-18/STATUTORY-2024',
    effective: 'RGUKT Act 18 of 2008',
    authority: 'Governing Council & Govt. of AP',
  },
  [
    {
      heading: '1. Statutory Officers under RGUKT Act 18 of 2008',
      items: [
        'Chancellor: Appointed by the Government of Andhra Pradesh; Head of the University.',
        'Vice-Chancellor: Principal executive and academic officer of the University, appointed on recommendation of Search Committee.',
        'Directors of Constituent Campuses: Administrative and academic heads of Nuzvid, RK Valley, Srikakulam, and Ongole campuses.',
        'Registrar, Chief Administrative Officer (CAO) & Finance Officer: Key administrative authorities appointed by the Governing Council.',
      ],
    },
    {
      heading: '2. Search and Selection Committee Norms',
      paragraphs: [
        'Vacancies for statutory and executive leadership are notified widely in national dailies and state gazette. Selections are finalized by Search-cum-Selection Committees constituted in accordance with UGC Regulations and RGUKT Statutes.',
      ],
    },
  ]
);

// 6. Reservation & Roster Policy Guidelines
createStyledPdf(
  'reservation-roster-policy.pdf',
  'RESERVATION & ROSTER POLICY GUIDELINES FOR RECRUITMENT',
  'Implementation of AP State Government Reservation Norms & 100-Point Roster Points',
  {
    ref: 'RGUKT/ESTT/ROSTER/2024',
    effective: 'State Government Orders Applicable',
    authority: 'Registrar & SC/ST/BC Cell',
  },
  [
    {
      heading: '1. Statutory Reservation Framework',
      paragraphs: [
        'RGUKT-AP strictly implements the reservation policy of the Government of Andhra Pradesh across all faculty, non-teaching, and contractual recruitments. The statutory 100-point roster is maintained independently for each cadre and campus.',
      ],
    },
    {
      heading: '2. Category Breakdown & Horizontal Reservations',
      items: [
        'Scheduled Castes (SC) & Scheduled Tribes (ST): Statutory quotas with applicable age and application fee concessions.',
        'Backward Classes (BC-A, BC-B, BC-C, BC-D, BC-E): Applicable quotas with non-creamy layer verification.',
        'Economically Weaker Sections (EWS): 10% reservation in direct recruitment as per AP Government orders.',
        'Horizontal Reservations: 33.3% for Women candidates and 4% for Persons with Disabilities (PwD) across eligible posts.',
      ],
    },
  ]
);

console.log('All Careers PDFs regenerated with professional full-width single-page layouts.');
