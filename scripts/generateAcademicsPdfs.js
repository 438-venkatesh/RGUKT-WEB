import fs from 'fs';
import path from 'path';
import PDFDocument from 'pdfkit';

const outputDir = path.resolve('frontend/public/docs/academics');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

function createStyledPdf(filename, title, subtitle, documentMeta, sections) {
  const filePath = path.join(outputDir, filename);
  const doc = new PDFDocument({
    size: 'A4',
    margins: { top: 45, bottom: 45, left: 50, right: 50 },
    info: {
      Title: title,
      Author: 'Rajiv Gandhi University of Knowledge Technologies - Andhra Pradesh',
      Subject: subtitle,
      Keywords: 'RGUKT, AP, Academics, Regulations, Curriculum, B.Tech, M.Tech, Ph.D.',
    },
  });

  const stream = fs.createWriteStream(filePath);
  doc.pipe(stream);

  // Header Banner
  doc.rect(0, 0, 595.28, 75).fill('#0A2744');
  doc.rect(0, 75, 595.28, 4).fill('#C8102E');

  doc.fillColor('#FFFFFF').fontSize(14).font('Helvetica-Bold')
    .text('RAJIV GANDHI UNIVERSITY OF KNOWLEDGE TECHNOLOGIES', 50, 20, { align: 'center' });
  doc.fontSize(10).font('Helvetica')
    .text('Andhra Pradesh | Constituent Campuses: Nuzvid • RK Valley • Srikakulam • Ongole', 50, 38, { align: 'center' });
  doc.fontSize(9).font('Helvetica-Oblique')
    .text('Catering to the Educational Needs of Gifted Rural Youth of Andhra Pradesh', 50, 52, { align: 'center' });

  doc.moveDown(2);
  doc.y = 95;

  // Title Section
  doc.fillColor('#C8102E').fontSize(15).font('Helvetica-Bold').text(title, { align: 'left' });
  if (subtitle) {
    doc.fillColor('#475569').fontSize(10).font('Helvetica-Bold').text(subtitle);
  }
  doc.moveDown(0.5);

  // Metadata Box
  doc.rect(50, doc.y, 495.28, 30).fill('#F1F5F9');
  doc.rect(50, doc.y, 495.28, 30).stroke('#CBD5E1');
  const metaY = doc.y + 8;
  doc.fillColor('#0A2744').fontSize(8.5).font('Helvetica-Bold')
    .text(`Academic Ref: ${documentMeta.ref || 'RGUKT/ACAD/2025-26'}`, 60, metaY);
  doc.text(`Effective: ${documentMeta.effective || 'Academic Year 2025-26 onwards'}`, 250, metaY);
  doc.text(`Authority: ${documentMeta.authority || 'Academic Council, RGUKT-AP'}`, 400, metaY);

  doc.y = metaY + 28;
  doc.moveDown(0.5);

  // Content Sections
  sections.forEach((sec, idx) => {
    if (doc.y > 680) {
      doc.addPage();
      doc.y = 50;
    }

    doc.fillColor('#0A2744').fontSize(12).font('Helvetica-Bold').text(`${idx + 1}. ${sec.heading}`);
    doc.moveDown(0.3);

    if (sec.content) {
      sec.content.forEach((p) => {
        if (doc.y > 700) {
          doc.addPage();
          doc.y = 50;
        }
        doc.fillColor('#334155').fontSize(9.5).font('Helvetica').text(p, {
          align: 'justify',
          lineGap: 3,
        });
        doc.moveDown(0.4);
      });
    }

    if (sec.bullets) {
      sec.bullets.forEach((b) => {
        if (doc.y > 710) {
          doc.addPage();
          doc.y = 50;
        }
        doc.fillColor('#C8102E').fontSize(9.5).font('Helvetica-Bold').text('• ', { continued: true });
        if (typeof b === 'string') {
          doc.fillColor('#334155').font('Helvetica').text(b, { lineGap: 2.5 });
        } else {
          doc.fillColor('#0A2744').font('Helvetica-Bold').text(`${b.title}: `, { continued: true });
          doc.fillColor('#334155').font('Helvetica').text(b.desc, { lineGap: 2.5 });
        }
        doc.moveDown(0.2);
      });
      doc.moveDown(0.4);
    }
  });

  // Footer on each page
  const range = doc.bufferedPageRange();
  for (let i = range.start; i < range.start + range.count; i++) {
    doc.switchToPage(i);
    doc.rect(50, 780, 495.28, 1).fill('#E2E8F0');
    doc.fillColor('#64748B').fontSize(7.5).font('Helvetica')
      .text('Rajiv Gandhi University of Knowledge Technologies - Andhra Pradesh | Official Academic Document', 50, 788, { align: 'left' });
    doc.text(`Page ${i + 1} of ${range.count}`, 495.28, 788, { align: 'right' });
  }

  doc.end();
  return new Promise((resolve) => stream.on('finish', resolve));
}

async function generateAllPdfs() {
  console.log('Generating official RGUKT-AP PDF documents...');

  // 1. B.Tech Regulations
  await createStyledPdf(
    'btech-regulations-2024.pdf',
    'ACADEMIC REGULATIONS FOR 6-YEAR INTEGRATED B.TECH PROGRAMME',
    'Applicable for Students Admitted from Academic Year 2024-25 onwards (R24 Regulations)',
    { ref: 'RGUKT/ACAD/R24/REG-01', effective: 'AY 2024-25 onwards', authority: 'Academic Council, RGUKT-AP' },
    [
      {
        heading: 'Preamble and Institutional Vision',
        content: [
          'Rajiv Gandhi University of Knowledge Technologies - Andhra Pradesh (RGUKT-AP) was established through Act 18 of 2008 by the Government of Andhra Pradesh to cater to the educational needs of gifted rural youth. The primary objective is to provide high-quality, subsidized residential education blending foundational science, ICT learning-by-doing, and rigorous engineering mastery.',
          'The academic structure consists of a seamless 6-year integrated course divided into Phase-I (2-Year Pre-University Course equivalent to +2/Intermediate) and Phase-II (4-Year B.Tech Degree across core engineering branches).'
        ]
      },
      {
        heading: 'Structure of the Academic Programme',
        bullets: [
          { title: 'Phase I (PUC 1 & PUC 2)', desc: '4 Semesters covering Mathematics, Physics, Chemistry, English Communication, and Information Technology.' },
          { title: 'Phase II (Engineering E1 to E4)', desc: '8 Semesters of deep domain specialization across 7 engineering branches with 160 total credits.' },
          { title: 'Instructional Duration', desc: 'Each semester comprises a minimum of 70 instructional days with continuous ICT integration.' },
          { title: 'LMS & 1-to-1 Laptops', desc: 'Every admitted student is equipped with a personal laptop and campus LAN access for interactive e-learning.' }
        ]
      },
      {
        heading: 'Attendance & Promotion Rules',
        content: [
          'A student must secure a minimum of 75% aggregate attendance in all registered subjects to be eligible for End-Semester Examinations.',
          'Condonation of attendance up to 10% (65% to 74.9%) may be granted by the Campus Director upon valid medical grounds with appropriate certification.',
          'Promotion from PUC to B.Tech requires clearing all foundational courses. Promotion across engineering years requires accumulating at least 50% of total credits up to the preceding academic year.'
        ]
      },
      {
        heading: 'Evaluation Scheme & Grading System',
        bullets: [
          { title: 'Continuous Assessment (40 Marks)', desc: 'Comprises 3 internal computerized tests (best of 2 considered), assignments, quizzes, and laboratory performance.' },
          { title: 'End Semester Examination (60 Marks)', desc: 'Comprehensive proctored university examination covering the entire semester syllabus.' },
          { title: '10-Point Absolute Scale', desc: 'Grades awarded from Ex (10), A (9), B (8), C (7), D (6), E (5) to R (Remedial/Backlog).' }
        ]
      }
    ]
  );

  // 2. B.Tech Curriculum
  await createStyledPdf(
    'btech-curriculum-2024.pdf',
    'B.TECH 4-YEAR CURRICULUM & SYLLABUS FRAMEWORK (ALL 7 DISCIPLINES)',
    'Course Structures, Core Disciplines, Professional Electives & Laboratory Frameworks',
    { ref: 'RGUKT/ACAD/CURR-2024', effective: '2024-2028 Batch', authority: 'Board of Studies, RGUKT-AP' },
    [
      {
        heading: 'Engineering Disciplines Offered Across Campuses',
        content: [
          'The 4-Year B.Tech engineering curriculum is structured across seven specialized departments according to AICTE model guidelines and RGUKT statutory ordinances:'
        ],
        bullets: [
          { title: 'Computer Science & Engineering (CSE)', desc: 'Algorithms, Data Structures, AI/ML, Cloud Computing, Distributed Systems, DBMS, Cyber Security, Web Tech.' },
          { title: 'Electronics & Communications Engineering (ECE)', desc: 'VLSI Design, Embedded Systems, Microprocessors, Wireless & 5G Communication, DSP, RF Microwave.' },
          { title: 'Electrical & Electronics Engineering (EEE)', desc: 'Power Systems, Power Electronics, Smart Grids, Electric Vehicle Drives, Renewable Energy, Control Systems.' },
          { title: 'Mechanical Engineering (MECH)', desc: 'CAD/CAM, Finite Element Analysis (FEA), Computational Fluid Dynamics (CFD), Thermodynamics, Robotics, Metrology.' },
          { title: 'Civil Engineering (CIVIL)', desc: 'Structural Analysis, Transportation & Highway Design, Geotechnical Engineering, Water Resources, GIS & Surveying.' },
          { title: 'Chemical Engineering (CHEM)', desc: 'Chemical Reaction Engineering, Heat & Mass Transfer Operations, Process Dynamics & Control, Green Chemistry.' },
          { title: 'Metallurgical & Materials Engineering (MME)', desc: 'Physical Metallurgy, Nanomaterials, Advanced Characterization (SEM/XRD), Phase Transformations, Corrosion.' }
        ]
      },
      {
        heading: 'Minor Degrees & Honors Provision',
        content: [
          'Students with CGPA >= 8.0 and no active backlogs may earn an additional Minor Degree (20 credits) in areas such as Business Management, Artificial Intelligence, Computational Mathematics, or an allied engineering stream.'
        ]
      }
    ]
  );

  // 3. PUC Curriculum Framework
  await createStyledPdf(
    'puc-curriculum-framework.pdf',
    'PRE-UNIVERSITY COURSE (PUC) 2-YEAR CURRICULUM FRAMEWORK',
    'Foundational Sciences, Mathematics, English Communication & Digital Literacy (P1 & P2)',
    { ref: 'RGUKT/PUC/CURR-2024', effective: 'PUC AY 2024-26', authority: 'PUC Academic Board, RGUKT-AP' },
    [
      {
        heading: 'Objectives of the Pre-University Foundation',
        content: [
          'The 2-year Pre-University Course (equivalent to Intermediate in Andhra Pradesh) bridges high school education with university engineering studies. The syllabus imparts deep conceptual mastery in basic sciences without premature compartmentalization.'
        ],
        bullets: [
          { title: 'Mathematics Core (M1, M2, M3, M4)', desc: 'Algebra, Trigonometry, Coordinate Geometry, Differential & Integral Calculus, Vectors, Probability.' },
          { title: 'Physics Core & Laboratory', desc: 'Mechanics, Waves & Oscillations, Thermodynamics, Electromagnetism, Modern Physics, Optics.' },
          { title: 'Chemistry Core & Laboratory', desc: 'Physical Chemistry, Inorganic Chemistry, Organic Reaction Mechanisms, Environmental Chemistry.' },
          { title: 'Information Technology (IT)', desc: 'Computer Architecture, Python Programming, Web Technologies, Database Basics, Algorithm Design.' },
          { title: 'English & Soft Skills (~30% time)', desc: 'Phonetics, Vocabulary Building, Technical Report Writing, Group Discussions, Classical Arts.' }
        ]
      }
    ]
  );

  // 4. Grading & Promotion Policy
  await createStyledPdf(
    'grading-promotion-policy.pdf',
    'OFFICIAL GRADING SYSTEM & PROMOTION POLICY',
    'Standardized Letter Grading, CGPA Calculation, Remedial Examinations & Degree Conferral',
    { ref: 'RGUKT/ACAD/POLICY-GRADE', effective: 'Current Regulations', authority: 'Dean of Academics, RGUKT-AP' },
    [
      {
        heading: '10-Point Letter Grading Scale',
        bullets: [
          { title: 'Ex (Outstanding - 10)', desc: 'Marks >= 90% | Demonstrates exceptional conceptual mastery.' },
          { title: 'A (Excellent - 9)', desc: 'Marks 80% - 89% | High proficiency in theoretical and practical concepts.' },
          { title: 'B (Very Good - 8)', desc: 'Marks 70% - 79% | Strong analytical and problem-solving capability.' },
          { title: 'C (Good - 7)', desc: 'Marks 60% - 69% | Above average understanding of subject coursework.' },
          { title: 'D (Fair - 6)', desc: 'Marks 50% - 59% | Meets satisfactory minimum curriculum standards.' },
          { title: 'E (Pass - 5)', desc: 'Marks 40% - 49% | Minimum passing threshold in continuous & end exams.' },
          { title: 'R (Remedial - 0)', desc: 'Marks < 40% | Mandatory appearance in supplementary remedial examinations.' }
        ]
      },
      {
        heading: 'Semester & Cumulative Grade Point Average Formulas',
        content: [
          'SGPA = Sum(Course Credits * Grade Points) / Sum(Course Credits in the Semester)',
          'CGPA = Sum(Total Credits Earned * Respective Grade Points) / Sum(Total Credits Attempted across all semesters)',
          'Award of Class: First Class with Distinction for CGPA >= 8.0 without backlogs; First Class for CGPA >= 6.5; Second Class for CGPA >= 5.5.'
        ]
      }
    ]
  );

  // 5. M.Tech Regulations
  await createStyledPdf(
    'mtech-regulations-2023.pdf',
    'M.TECH ACADEMIC REGULATIONS & ORDINANCES',
    'Postgraduate 2-Year Full-Time Master of Technology Academic Framework',
    { ref: 'RGUKT/PG/MTECH-REG', effective: 'AY 2023-24 onwards', authority: 'Academic Council, RGUKT-AP' },
    [
      {
        heading: 'Postgraduate Programme Structure',
        content: [
          'The Master of Technology (M.Tech) programme at RGUKT-AP spans 4 semesters (2 Academic Years). The curriculum is designed with an advanced computational engineering orientation.',
          'Semesters 1 and 2 comprise core specialization theory, computational laboratories, and advanced electives (40 credits). Semesters 3 and 4 (Year 2) are dedicated entirely to an in-depth dissertation project (30 credits).'
        ]
      },
      {
        heading: 'Teaching & Research Assistantships (TA/RA)',
        bullets: [
          { title: 'Eligibility', desc: 'Full-time M.Tech scholars with valid GATE score or top entrance merit.' },
          { title: 'Assistantship Duties', desc: 'Up to 8 hours/week assisting faculty in undergraduate laboratory instruction and tutorial grading.' },
          { title: 'Stipend Support', desc: 'Provided as per AICTE/State Government norms during the period of regular study.' }
        ]
      }
    ]
  );

  // 6. M.Tech Syllabus Booklets
  await createStyledPdf(
    'mtech-syllabus-booklets.pdf',
    'M.TECH SPECIALIZATION SYLLABI BOOKLETS',
    'Detailed Course Outlines for AIML, AMT, TE, and EAD Specialisations',
    { ref: 'RGUKT/PG/SYLLABUS-2024', effective: '2024-2026 Curriculum', authority: 'PG Board of Studies, RGUKT-AP' },
    [
      {
        heading: '1. Artificial Intelligence & Machine Learning (CSE)',
        bullets: [
          { title: 'Core Subjects', desc: 'Mathematical Foundations of Data Science, Deep Learning Architectures, Natural Language Processing, Computer Vision, Large Scale Distributed AI.' },
          { title: 'Tools & Platforms', desc: 'PyTorch, TensorFlow, CUDA GPU Clusters, Hugging Face, Ray Distributed Framework.' }
        ]
      },
      {
        heading: '2. Advanced Materials Technology (MME)',
        bullets: [
          { title: 'Core Subjects', desc: 'Advanced Thermodynamics & Kinetics, Nanostructured Materials, Microscopic Characterization (SEM/TEM/XRD), Computational Materials Modeling (DFT).' },
          { title: 'Tools & Labs', desc: 'VASP, Thermo-Calc, High-Resolution Optical and Electron Microscopy.' }
        ]
      },
      {
        heading: '3. Transportation Engineering (Civil)',
        bullets: [
          { title: 'Core Subjects', desc: 'Traffic Flow Theory, Pavement Analysis & Sustainable Materials, Intelligent Transportation Systems (ITS), Urban Transit Logistics.' },
          { title: 'Tools & Labs', desc: 'VISSIM, ArcGIS, KENPAVE, Road Safety Audit Systems.' }
        ]
      },
      {
        heading: '4. Engineering Analysis & Design (Mechanical)',
        bullets: [
          { title: 'Core Subjects', desc: 'Advanced Finite Element Analysis (FEA), Computational Fluid Dynamics (CFD), Mechanics of Composites, Vibrations & Structural Reliability.' },
          { title: 'Tools & Labs', desc: 'ANSYS Fluent & Mechanical, Abaqus, HyperMesh, OpenFOAM.' }
        ]
      }
    ]
  );

  // 7. Ph.D. Coursework Guidelines
  await createStyledPdf(
    'phd-coursework-guidelines.pdf',
    'PH.D. COURSEWORK & DOCTORAL RESEARCH GUIDELINES',
    'Statutory Ordinances Governing Research Methodology, Coursework Credits & Thesis Defense',
    { ref: 'RGUKT/RD/PHD-GUIDELINES', effective: 'Dean R&D Approved', authority: 'Research Advisory Committee, RGUKT-AP' },
    [
      {
        heading: 'Registration Modes & Eligibility',
        bullets: [
          { title: 'Full-Time Regular', desc: 'Scholars working full-time on campus with institutional fellowships or project grants.' },
          { title: 'Part-Time Internal', desc: 'Regular faculty members of RGUKT-AP upgrading research qualifications.' },
          { title: 'External / Sponsored', desc: 'Researchers from recognized R&D labs, PSUs, and industries with joint supervision.' }
        ]
      },
      {
        heading: 'Mandatory Coursework Requirements',
        content: [
          'All admitted Ph.D. scholars must complete a minimum of 12 to 16 credits of coursework including Research Methodology and Research & Publication Ethics (RPE) with at least 7.0 CGPA within the first two semesters.'
        ]
      },
      {
        heading: 'Doctoral Milestones & Thesis Evaluation',
        bullets: [
          { title: 'Comprehensive Exam & SOTA', desc: 'Written/oral exam and State of the Art seminar to confirm Ph.D. candidacy.' },
          { title: 'Publication Threshold', desc: 'Minimum of 2 research papers published in SCI/Scopus indexed peer-reviewed journals.' },
          { title: 'Pre-Ph.D. Synopsis & Defense', desc: 'Open synopsis seminar before DRC, external thesis evaluation by 3 examiners, and open public viva-voce.' }
        ]
      }
    ]
  );

  // 8. Academic Council Minutes
  await createStyledPdf(
    'academic-council-12-2025.pdf',
    'MINUTES OF THE 12TH ACADEMIC COUNCIL MEETING',
    'Key Resolutions on Academic Curricula, R&D Projects & Research Expansion',
    { ref: 'RGUKT/AC/MINUTES-12-2025', effective: 'June 2025', authority: 'Academic Council Secretariat' },
    [
      {
        heading: 'Major Council Resolutions Ratified',
        bullets: [
          { title: 'Revision of B.Tech R24 Curriculum', desc: 'Approved enhanced credits for AI, Python programming, and industry internships across all 4 campuses.' },
          { title: 'Establishment of Quantum Lab', desc: 'Approved operational guidelines for the Undergraduate Quantum Computing Laboratory in collaboration with Amaravati Quantum Valley.' },
          { title: 'Ph.D. Research Seed Grants', desc: 'Sanctioned faculty research seed grants up to Rs. 5 Lakhs for extramural project proposal preparation.' },
          { title: 'Continuous Examination Model', desc: 'Reaffirmed 40:60 internal-to-external evaluation model supported by automated ICT testing.' }
        ]
      }
    ]
  );

  console.log('All official RGUKT-AP PDF documents generated successfully!');
}

generateAllPdfs().catch(console.error);
