import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import PDFDocument from 'pdfkit';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const outputDir = path.resolve(__dirname, 'public/docs/academics');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

function createStyledPdf(filename, title, subtitle, documentMeta, sections) {
  const filePath = path.join(outputDir, filename);
  const doc = new PDFDocument({
    size: 'A4',
    margins: { top: 50, bottom: 50, left: 50, right: 50 },
    info: {
      Title: title,
      Author: 'Rajiv Gandhi University of Knowledge Technologies - Andhra Pradesh',
      Subject: subtitle,
      Keywords: 'RGUKT, AP, Academics, Regulations, Curriculum, B.Tech, M.Tech, Examination Timetable',
    },
    bufferPages: true,
  });

  const stream = fs.createWriteStream(filePath);
  doc.pipe(stream);

  const CONTENT_WIDTH = 495;
  const LEFT_MARGIN = 50;

  // Header Banner
  doc.rect(0, 0, 595.28, 75).fill('#0A2744');
  doc.rect(0, 75, 595.28, 4).fill('#C8102E');

  doc.fillColor('#FFFFFF').fontSize(13).font('Helvetica-Bold')
    .text('RAJIV GANDHI UNIVERSITY OF KNOWLEDGE TECHNOLOGIES', LEFT_MARGIN, 18, {
      align: 'center',
      width: CONTENT_WIDTH,
    });
  doc.fontSize(9.5).font('Helvetica')
    .text('Andhra Pradesh | Constituent Campuses: Nuzvid • RK Valley • Srikakulam • Ongole', LEFT_MARGIN, 36, {
      align: 'center',
      width: CONTENT_WIDTH,
    });
  doc.fontSize(8.5).font('Helvetica-Oblique')
    .text('Catering to the Educational Needs of Gifted Rural Youth of Andhra Pradesh', LEFT_MARGIN, 50, {
      align: 'center',
      width: CONTENT_WIDTH,
    });

  doc.y = 95;

  // Title Section
  doc.fillColor('#C8102E').fontSize(13).font('Helvetica-Bold')
    .text(title, LEFT_MARGIN, doc.y, { width: CONTENT_WIDTH, align: 'left' });
  doc.moveDown(0.3);

  if (subtitle) {
    doc.fillColor('#475569').fontSize(9).font('Helvetica-Bold')
      .text(subtitle, LEFT_MARGIN, doc.y, { width: CONTENT_WIDTH, align: 'left' });
    doc.moveDown(0.5);
  }

  // Metadata Box
  const boxY = doc.y;
  doc.rect(LEFT_MARGIN, boxY, CONTENT_WIDTH, 24).fill('#F1F5F9');
  doc.rect(LEFT_MARGIN, boxY, CONTENT_WIDTH, 24).stroke('#CBD5E1');

  const metaTextY = boxY + 7;
  doc.fillColor('#0A2744').fontSize(8).font('Helvetica-Bold');
  doc.text(`Ref: ${documentMeta.ref || 'RGUKT/EXAM/2025-26'}`, LEFT_MARGIN + 10, metaTextY, { lineBreak: false });
  doc.text(`Effective: ${documentMeta.effective || 'Academic Year 2025-26'}`, LEFT_MARGIN + 180, metaTextY, { lineBreak: false });
  doc.text(`Authority: ${documentMeta.authority || 'Controller of Examinations'}`, LEFT_MARGIN + 330, metaTextY, { lineBreak: false });

  doc.y = boxY + 34;

  // Content Sections
  sections.forEach((sec, idx) => {
    if (doc.y > 670) {
      doc.addPage();
      doc.y = 60;
    }

    doc.fillColor('#0A2744').fontSize(11).font('Helvetica-Bold')
      .text(`${idx + 1}. ${sec.heading}`, LEFT_MARGIN, doc.y, { width: CONTENT_WIDTH, align: 'left' });
    doc.moveDown(0.3);

    if (sec.content) {
      sec.content.forEach((p) => {
        if (doc.y > 690) {
          doc.addPage();
          doc.y = 60;
        }
        doc.fillColor('#334155').fontSize(9).font('Helvetica')
          .text(p, LEFT_MARGIN, doc.y, {
            width: CONTENT_WIDTH,
            align: 'left',
            lineGap: 3,
          });
        doc.moveDown(0.4);
      });
    }

    if (sec.bullets) {
      sec.bullets.forEach((b) => {
        if (doc.y > 700) {
          doc.addPage();
          doc.y = 60;
        }

        const startY = doc.y;
        doc.fillColor('#C8102E').fontSize(9).font('Helvetica-Bold')
          .text('•', LEFT_MARGIN + 5, startY, { lineBreak: false });

        if (typeof b === 'string') {
          doc.fillColor('#334155').fontSize(9).font('Helvetica')
            .text(b, LEFT_MARGIN + 18, startY, {
              width: CONTENT_WIDTH - 18,
              align: 'left',
              lineGap: 2.5,
            });
        } else {
          doc.fillColor('#0A2744').fontSize(9).font('Helvetica-Bold')
            .text(`${b.title}: `, LEFT_MARGIN + 18, startY, {
              continued: true,
            });
          doc.fillColor('#334155').font('Helvetica')
            .text(b.desc, {
              width: CONTENT_WIDTH - 18,
              align: 'left',
              lineGap: 2.5,
            });
        }
        doc.moveDown(0.25);
      });
      doc.moveDown(0.35);
    }
  });

  // Footer on each page
  const range = doc.bufferedPageRange();
  for (let i = range.start; i < range.start + range.count; i++) {
    doc.switchToPage(i);
    doc.rect(LEFT_MARGIN, 775, CONTENT_WIDTH, 1).fill('#CBD5E1');
    doc.fillColor('#64748B').fontSize(7.5).font('Helvetica')
      .text('Rajiv Gandhi University of Knowledge Technologies - Andhra Pradesh | Official Examination Notification', LEFT_MARGIN, 783, {
        align: 'left',
        lineBreak: false,
      });
    doc.text(`Page ${i + 1} of ${range.count}`, LEFT_MARGIN + 430, 783, {
      align: 'right',
      width: 65,
    });
  }

  doc.end();
  return new Promise((resolve) => stream.on('finish', resolve));
}

async function generateAllPdfs() {
  console.log('Generating comprehensive official RGUKT-AP PDF timetables with complete matter...');

  // 1. Nuzvid Sem 1 Timetable
  await createStyledPdf(
    'exam-schedule-nuzvid-sem1.pdf',
    'END-SEMESTER REGULAR & REMEDIAL EXAMINATION TIMETABLE (SEM-I) — NUZVID CAMPUS',
    'Applicable for PUC-1, PUC-2, and B.Tech E1 to E4 (All 7 Engineering Branches) — AY 2025–26',
    { ref: 'RGUKT/NZD/EXAM/TT-2025-S1', effective: 'December 1 – 15, 2025', authority: 'Controller of Examinations, Nuzvid' },
    [
      {
        heading: 'General Instructions & Session Shift Timings',
        content: [
          'The End-Semester Theory & Practical Examinations for Semester-I (Academic Year 2025-26) will be conducted across designated examination halls at RGUKT Nuzvid Campus from December 1 to December 15, 2025.',
          'Examinations are scheduled in two daily session shifts: Forenoon (FN: 09:30 AM to 12:30 PM) and Afternoon (AN: 02:00 PM to 05:00 PM). Candidates must report to their respective exam halls at least 30 minutes prior to commencement.'
        ],
        bullets: [
          { title: 'Forenoon Shift (FN)', desc: '09:30 AM – 12:30 PM (Reporting Time: 09:00 AM | Entry Cut-off: 09:45 AM)' },
          { title: 'Afternoon Shift (AN)', desc: '02:00 PM – 05:00 PM (Reporting Time: 01:30 PM | Entry Cut-off: 02:15 PM)' },
          { title: 'Mandatory Documents', desc: 'Original University ID Card and printed Barcoded Digital Hall Ticket verified with minimum 75% attendance clearance.' },
          { title: 'Electronic Device Policy', desc: 'Smartphones, programmable calculators, smartwatch gadgets, and unauthorized materials are strictly prohibited.' }
        ]
      },
      {
        heading: 'Pre-University Course (PUC-1 & PUC-2) Schedule',
        bullets: [
          { title: 'Dec 01, 2025 (FN)', desc: 'Mathematics-I (M111 / M211) — Calculus, Algebra & Coordinate Geometry' },
          { title: 'Dec 03, 2025 (FN)', desc: 'Physics-I (P112 / P212) — Classical Mechanics, Waves & Optics' },
          { title: 'Dec 05, 2025 (FN)', desc: 'Chemistry-I (C113 / C213) — Physical, Inorganic & Organic Reaction Principles' },
          { title: 'Dec 08, 2025 (FN)', desc: 'Information Technology (IT114 / IT214) — Python Programming & Algorithms' },
          { title: 'Dec 10, 2025 (FN)', desc: 'English Communication (E115 / E215) — Technical Communication & Soft Skills' }
        ]
      },
      {
        heading: 'B.Tech Engineering Programmes (E1, E2, E3, E4) Branch-Wise Date Sheet',
        bullets: [
          { title: 'Computer Science & Engg (CSE)', desc: 'Dec 01 (Data Structures), Dec 03 (Discrete Math), Dec 05 (Operating Systems), Dec 08 (Database Systems), Dec 10 (AI/ML Core), Dec 12 (Computer Networks).' },
          { title: 'Electronics & Comm Engg (ECE)', desc: 'Dec 01 (Signals & Systems), Dec 03 (Network Theory), Dec 05 (Digital VLSI Design), Dec 08 (Analog Circuits), Dec 10 (Microprocessors & IoT), Dec 12 (Electromagnetics).' },
          { title: 'Electrical & Electronics Engg (EEE)', desc: 'Dec 01 (Electrical Circuit Analysis), Dec 03 (Power Systems-I), Dec 05 (Power Electronics), Dec 08 (Control Systems), Dec 10 (Electrical Machines), Dec 12 (Renewable Energy).' },
          { title: 'Mechanical Engineering (MECH)', desc: 'Dec 01 (Engineering Mechanics), Dec 03 (Thermodynamics), Dec 05 (Fluid Mechanics), Dec 08 (CAD/CAM Manufacturing), Dec 10 (Finite Element Analysis), Dec 12 (Kinematics).' },
          { title: 'Civil Engineering (CIVIL)', desc: 'Dec 01 (Solid Mechanics), Dec 03 (Surveying & Geomatics), Dec 05 (Fluid Mechanics), Dec 08 (Structural Analysis), Dec 10 (Transportation Engg), Dec 12 (Soil Mechanics).' },
          { title: 'Chemical Engineering (CHEM)', desc: 'Dec 01 (Process Calculations), Dec 03 (Fluid Flow Ops), Dec 05 (Heat Transfer), Dec 08 (Mass Transfer Ops), Dec 10 (Chemical Reaction Engg), Dec 12 (Process Dynamics).' },
          { title: 'Materials & Metallurgical (MME)', desc: 'Dec 01 (Intro to Metallurgy), Dec 03 (Thermodynamics of Materials), Dec 05 (Physical Metallurgy), Dec 08 (Mechanical Behavior), Dec 10 (Nanomaterials), Dec 12 (Corrosion).' }
        ]
      },
      {
        heading: 'Practical Laboratory & Viva-Voce Schedule',
        content: [
          'End-Semester Practical Laboratory Examinations and Project Viva-Voce evaluations will be held department-wise between Dec 16 and Dec 20, 2025. Detailed batch allocations will be displayed on departmental notice boards.'
        ]
      }
    ]
  );

  // 2. Nuzvid Sem 2 Timetable
  await createStyledPdf(
    'exam-schedule-nuzvid-sem2.pdf',
    'END-SEMESTER REGULAR & REMEDIAL EXAMINATION TIMETABLE (SEM-II) — NUZVID CAMPUS',
    'Comprehensive Schedule for PUC and B.Tech E1 to E4 — Academic Year 2025–26',
    { ref: 'RGUKT/NZD/EXAM/TT-2026-S2', effective: 'May 4 – May 18, 2026', authority: 'Controller of Examinations, Nuzvid' },
    [
      {
        heading: 'Semester-II Examination Protocol & Shifts',
        content: [
          'The End-Semester Theory Examinations for Semester-II will be held from May 4 to May 18, 2026. Hall tickets can be generated from the university portal starting April 28, 2026, upon clearance of fee dues and attendance threshold verification.'
        ],
        bullets: [
          { title: 'Theory Examinations', desc: 'May 04 to May 15, 2026 (Daily 09:30 AM – 12:30 PM)' },
          { title: 'Remedial Supplementary Slots', desc: 'May 04 to May 15, 2026 (Afternoon Shift: 02:00 PM – 05:00 PM)' },
          { title: 'Capstone Project Viva (E4)', desc: 'May 16 to May 18, 2026 (External Defense Panel)' }
        ]
      },
      {
        heading: 'Discipline-Wise Major Course Schedule',
        bullets: [
          { title: 'May 04, 2026', desc: 'Mathematics-II / Probability & Statistics / Transform Techniques' },
          { title: 'May 06, 2026', desc: 'Design & Analysis of Algorithms (CSE) / Digital Signal Processing (ECE) / Machine Design (MECH) / Hydrology (CIVIL)' },
          { title: 'May 08, 2026', desc: 'Computer Organization (CSE) / Embedded Systems (ECE) / Smart Grids (EEE) / Heat Transfer (MECH)' },
          { title: 'May 11, 2026', desc: 'Compiler Design (CSE) / Wireless Comm (ECE) / Electric Drives (EEE) / Geotechnical Engg (CIVIL)' },
          { title: 'May 13, 2026', desc: 'Cloud Computing & Cyber Security / VLSI Physical Design / Power System Operation / FEM Analysis' },
          { title: 'May 15, 2026', desc: 'Professional Electives & Interdisciplinary Minor Degree Examinations (All Branches)' }
        ]
      }
    ]
  );

  // 3. RK Valley Sem 1 Timetable
  await createStyledPdf(
    'exam-schedule-rk-valley-sem1.pdf',
    'END-SEMESTER REGULAR & REMEDIAL EXAMINATION TIMETABLE (SEM-I) — RK VALLEY CAMPUS',
    'Applicable for PUC and B.Tech E1 to E4 across all Disciplines — AY 2025–26',
    { ref: 'RGUKT/RKV/EXAM/TT-2025-S1', effective: 'December 1 – 15, 2025', authority: 'Controller of Examinations, RK Valley' },
    [
      {
        heading: 'RK Valley Central Examination Cell Directives',
        content: [
          'End-Semester Examinations for Odd Semester (2025-26) will commence across all Academic Blocks at RK Valley Campus, Idupulapaya, Kadapa District from Dec 1 to Dec 15, 2025.',
          'Strict biometric and barcoded identity verification will be conducted at hall entrance checkpoints.'
        ],
        bullets: [
          { title: 'Forenoon Session (FN)', desc: '09:30 AM to 12:30 PM (All Regular B.Tech & PUC Theory Courses)' },
          { title: 'Afternoon Session (AN)', desc: '02:00 PM to 05:00 PM (Minor Degrees & Remedial Backlog Subjects)' },
          { title: 'Seating Arrangements', desc: 'Daily hall seating allotment will be published on the campus intranet portal at 08:00 AM.' }
        ]
      },
      {
        heading: 'Core Departmental Date Sheet',
        bullets: [
          { title: 'Dec 01, 2025', desc: 'Advanced Data Structures (CSE) / Signals & Systems (ECE) / Circuit Theory (EEE) / Solid Mechanics (CIVIL/MECH)' },
          { title: 'Dec 03, 2025', desc: 'Discrete Mathematics (CSE) / Electronic Devices & Circuits (ECE) / Electrical Machines-I (EEE) / Thermodynamics (MECH)' },
          { title: 'Dec 05, 2025', desc: 'Operating Systems (CSE) / Digital Logic Design (ECE) / Power Electronics (EEE) / Fluid Mechanics (MECH/CIVIL)' },
          { title: 'Dec 08, 2025', desc: 'Database Management Systems (CSE) / Analog Communication (ECE) / Control Systems (EEE) / Surveying (CIVIL)' },
          { title: 'Dec 10, 2025', desc: 'Artificial Intelligence & Machine Learning / Microprocessors & Microcontrollers / Power Systems / Structural Analysis' },
          { title: 'Dec 12, 2025', desc: 'Computer Networks / Electromagnetic Waves / High Voltage Engg / Transportation Engg / Material Science' }
        ]
      }
    ]
  );

  // 4. RK Valley Sem 2 Timetable
  await createStyledPdf(
    'exam-schedule-rk-valley-sem2.pdf',
    'END-SEMESTER REGULAR & REMEDIAL EXAMINATION TIMETABLE (SEM-II) — RK VALLEY CAMPUS',
    'Academic Year 2025–26 Even Semester Examination Schedule',
    { ref: 'RGUKT/RKV/EXAM/TT-2026-S2', effective: 'May 4 – May 18, 2026', authority: 'Controller of Examinations, RK Valley' },
    [
      {
        heading: 'Even Semester Examination Framework',
        content: [
          'Detailed schedule of regular Semester-II examinations and remedial backlog assessments for RK Valley constituent campus.'
        ],
        bullets: [
          { title: 'May 04, 2026 (FN)', desc: 'Mathematics-II & Numerical Analysis Core' },
          { title: 'May 06, 2026 (FN)', desc: 'Algorithms Analysis (CSE) / DSP (ECE) / Power Systems-II (EEE) / Machine Design (MECH)' },
          { title: 'May 08, 2026 (FN)', desc: 'Software Engineering (CSE) / VLSI Design (ECE) / Renewable Energy (EEE) / Geotechnical Engg (CIVIL)' },
          { title: 'May 11, 2026 (FN)', desc: 'Web Technologies (CSE) / Antenna & Microwave (ECE) / Drives & Automation (EEE) / Environmental Engg (CIVIL)' },
          { title: 'May 13, 2026 (FN)', desc: 'Professional Electives Pool & AICTE Minor Degree Courses' },
          { title: 'May 15, 2026 (FN)', desc: 'Open Elective Humanities, Management & Ethics Courses' }
        ]
      }
    ]
  );

  // 5. Srikakulam Sem 1 Timetable
  await createStyledPdf(
    'exam-schedule-srikakulam-sem1.pdf',
    'END-SEMESTER REGULAR & REMEDIAL EXAMINATION TIMETABLE (SEM-I) — SRIKAKULAM CAMPUS',
    'PUC-1, PUC-2, and B.Tech (CSE, ECE, MECH, CIVIL) — AY 2025–26',
    { ref: 'RGUKT/SKLM/EXAM/TT-2025-S1', effective: 'December 1 – 15, 2025', authority: 'Controller of Examinations, Srikakulam' },
    [
      {
        heading: 'Srikakulam Campus Examination Cell Guidelines',
        content: [
          'End-Semester Examinations for Srikakulam campus will be conducted at the Academic Examination Complex with strict proctoring from Dec 1 to Dec 15, 2025.'
        ],
        bullets: [
          { title: 'Forenoon Session (FN)', desc: '09:30 AM to 12:30 PM (Theory Subject Examinations)' },
          { title: 'Afternoon Session (AN)', desc: '02:00 PM to 05:00 PM (Remedial Examinations & Skill Tests)' },
          { title: 'Dec 01, 2025 (FN)', desc: 'PUC Maths-I / B.Tech Engineering Mathematics & Data Structures' },
          { title: 'Dec 03, 2025 (FN)', desc: 'PUC Physics-I / Discrete Mathematics & Signals & Systems' },
          { title: 'Dec 05, 2025 (FN)', desc: 'PUC Chemistry-I / Operating Systems & Digital Electronics' },
          { title: 'Dec 08, 2025 (FN)', desc: 'PUC IT Programming / Database Systems & Fluid Mechanics' },
          { title: 'Dec 10, 2025 (FN)', desc: 'PUC English / AI Foundations & Structural Analysis' },
          { title: 'Dec 12, 2025 (FN)', desc: 'Computer Networks / Microwave Engg / Manufacturing Tech / Soil Mechanics' }
        ]
      }
    ]
  );

  // 6. Srikakulam Sem 2 Timetable
  await createStyledPdf(
    'exam-schedule-srikakulam-sem2.pdf',
    'END-SEMESTER REGULAR & REMEDIAL EXAMINATION TIMETABLE (SEM-II) — SRIKAKULAM CAMPUS',
    'Even Semester Schedule for PUC and B.Tech Batches — AY 2025–26',
    { ref: 'RGUKT/SKLM/EXAM/TT-2026-S2', effective: 'May 4 – May 18, 2026', authority: 'Controller of Examinations, Srikakulam' },
    [
      {
        heading: 'Even Semester Schedule',
        bullets: [
          { title: 'May 04 – 08, 2026', desc: 'Core Engineering Mathematics, Algorithms, and Signal Processing' },
          { title: 'May 11 – 15, 2026', desc: 'Departmental Core Courses, Electives, and Environmental Sciences' },
          { title: 'May 16 – 18, 2026', desc: 'Laboratory Practical Exams and Technical Seminar Defenses' }
        ]
      }
    ]
  );

  // 7. Ongole Sem 1 Timetable
  await createStyledPdf(
    'exam-schedule-ongole-sem1.pdf',
    'END-SEMESTER REGULAR & REMEDIAL EXAMINATION TIMETABLE (SEM-I) — ONGOLE CAMPUS',
    'PUC-1, PUC-2, and B.Tech (CSE, ECE, EEE, MECH, CIVIL) — AY 2025–26',
    { ref: 'RGUKT/ONG/EXAM/TT-2025-S1', effective: 'December 1 – 15, 2025', authority: 'Controller of Examinations, Ongole' },
    [
      {
        heading: 'Ongole Campus Examination Instructions',
        content: [
          'Official End-Semester Examinations for Ongole constituent campus will be held across Academic Blocks A & B from Dec 1 to Dec 15, 2025.'
        ],
        bullets: [
          { title: 'Session Timings', desc: 'FN: 09:30 AM – 12:30 PM | AN: 02:00 PM – 05:00 PM' },
          { title: 'Dec 01, 2025 (FN)', desc: 'PUC Maths-I / B.Tech Data Structures / Circuit Analysis / Solid Mechanics' },
          { title: 'Dec 03, 2025 (FN)', desc: 'PUC Physics-I / Discrete Mathematics / Signals & Systems / Thermodynamics' },
          { title: 'Dec 05, 2025 (FN)', desc: 'PUC Chemistry-I / Operating Systems / Analog Circuits / Power Systems' },
          { title: 'Dec 08, 2025 (FN)', desc: 'PUC IT Basics / DBMS / Control Systems / Fluid Mechanics' },
          { title: 'Dec 10, 2025 (FN)', desc: 'AI & Machine Learning / Microprocessors / Electrical Machines / Structural Analysis' },
          { title: 'Dec 12, 2025 (FN)', desc: 'Computer Networks / Electromagnetics / Power Electronics / Highway Engg' }
        ]
      }
    ]
  );

  // 8. Ongole Sem 2 Timetable
  await createStyledPdf(
    'exam-schedule-ongole-sem2.pdf',
    'END-SEMESTER REGULAR & REMEDIAL EXAMINATION TIMETABLE (SEM-II) — ONGOLE CAMPUS',
    'Even Semester Schedule for PUC and B.Tech Batches — AY 2025–26',
    { ref: 'RGUKT/ONG/EXAM/TT-2026-S2', effective: 'May 4 – May 18, 2026', authority: 'Controller of Examinations, Ongole' },
    [
      {
        heading: 'Even Semester Schedule',
        bullets: [
          { title: 'May 04 – 08, 2026', desc: 'Core Engineering Mathematics, Algorithms, DSP, and Machine Design' },
          { title: 'May 11 – 15, 2026', desc: 'Departmental Core Courses, Electives, and Professional Minors' },
          { title: 'May 16 – 18, 2026', desc: 'Laboratory Practical Exams and Capstone Project Defenses' }
        ]
      }
    ]
  );

  // Re-generate other key documents to guarantee full matter
  await createStyledPdf(
    'examination-manual-ordinances.pdf',
    'EXAMINATION MANUAL & STANDARD OPERATING PROCEDURES (SOP)',
    'Guidelines for Examination Conduct, Digital Hall Tickets, Double Evaluation & Transcripts',
    { ref: 'RGUKT/EXAM/SOP-2024', effective: 'Examination Cell, RGUKT-AP', authority: 'Controller of Examinations' },
    [
      {
        heading: 'Examination Registration & Eligibility',
        content: [
          'Registration for regular and remedial examinations is conducted electronically through the campus examination portal. A student must achieve at least 75% attendance to generate the barcoded hall ticket.',
          'Detained students with attendance below 65% are required to repeat the semester coursework.'
        ]
      },
      {
        heading: 'Evaluation, Moderation & Double Evaluation',
        bullets: [
          { title: 'Double Blind Evaluation', desc: 'Answer scripts are coded with encrypted barcodes. Valuation is conducted by internal and external subject examiners.' },
          { title: 'Valuation Variance Resolution', desc: 'If the score difference between two examiners exceeds 15 marks, the script is referred to a third senior evaluator.' },
          { title: 'Revaluation & Recounting', desc: 'Students can apply for challenge valuation or personal verification within 15 days of result publication.' }
        ]
      },
      {
        heading: 'Malpractice Prevention & Discipline',
        content: [
          'Possession of unapproved electronic devices or unauthorized materials inside the examination hall leads to cancellation of all registered courses in the semester and disciplinary committee action.'
        ]
      }
    ]
  );

  console.log('ALL comprehensive official RGUKT-AP examination schedule PDFs generated successfully!');
}

generateAllPdfs().catch(console.error);
