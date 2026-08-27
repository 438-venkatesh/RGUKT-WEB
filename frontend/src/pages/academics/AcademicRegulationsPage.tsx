import {
  FileCheck,
  Percent,
  Clock,
} from 'lucide-react';
import AcademicsSubLayout from '../../components/AcademicsSubLayout';
import { ACADEMIC_PROGRAM_DOCUMENTS } from '../../data/academicDocuments';
import { DocumentSection } from '../../components/DocumentCard';
import './ProgrammesPage.css';

export default function AcademicRegulationsPage() {
  const regDocs = ACADEMIC_PROGRAM_DOCUMENTS.filter(
    (d) => d.category === 'Regulations'
  );

  const gradingTiers = [
    { grade: 'Ex', point: '10', range: '≥ 90%', performance: 'Outstanding', desc: 'Demonstrates extraordinary mastery of theoretical concepts and practical problem solving.' },
    { grade: 'A', point: '9', range: '80% – 89%', performance: 'Excellent', desc: 'High analytical competence with strong conceptual clarity and laboratory performance.' },
    { grade: 'B', point: '8', range: '70% – 79%', performance: 'Very Good', desc: 'Above average understanding with solid engineering design and problem solving.' },
    { grade: 'C', point: '7', range: '60% – 69%', performance: 'Good', desc: 'Good grasp of course fundamentals and satisfactory laboratory experiment completion.' },
    { grade: 'D', point: '6', range: '50% – 59%', performance: 'Fair', desc: 'Meets minimum curriculum benchmarks and foundational comprehension standards.' },
    { grade: 'E', point: '5', range: '40% – 49%', performance: 'Pass', desc: 'Minimum passing threshold across internal continuous assessment and end-semester exams.' },
    { grade: 'R', point: '0', range: '< 40%', performance: 'Remedial', desc: 'Requires mandatory re-appearance in supplementary remedial examinations.' },
  ];

  const creditPrograms = [
    {
      title: 'Pre-University Course (PUC)',
      duration: '2 Years (4 Semesters)',
      credits: '64 Credits',
      focus: 'Foundational Mathematics, Physics, Chemistry, IT & English Communication.',
      colorClass: 'prog-discipline-card',
    },
    {
      title: 'Bachelor of Technology (B.Tech)',
      duration: '4 Years (8 Semesters)',
      credits: '160 Credits',
      focus: 'Departmental Core, Professional Electives, Open Electives, Labs & Capstone.',
      colorClass: 'prog-discipline-card',
    },
    {
      title: 'Interdisciplinary Minor Degree',
      duration: 'Concurrent with B.Tech',
      credits: '+20 Extra Credits',
      focus: 'Optional specialized track in AI/ML, Business Management, or VLSI.',
      colorClass: 'prog-discipline-card',
    },
    {
      title: 'Master of Technology (M.Tech)',
      duration: '2 Years (4 Semesters)',
      credits: '70 Credits',
      focus: 'Advanced Computational Core, Simulation Labs & 1-Year R&D Dissertation.',
      colorClass: 'prog-discipline-card',
    },
  ];

  return (
    <AcademicsSubLayout>
      <div className="prog-page-container">
        {/* 1. HERO SECTION (MATCHING ACADEMICS OVERVIEW BACKGROUND & STYLE) */}
        <section className="prog-split-hero">
          <div className="prog-hero-left">
            <span className="prog-hero-badge">ACADEMICS OF RGUKT-AP</span>
            <h1 className="prog-hero-main-title">
              Academic Governance &amp; Regulations
            </h1>
            <p className="prog-hero-tagline">
              Credit Framework • Attendance Norms • Grading &amp; Progression Policy
            </p>
            <p className="prog-hero-description">
              Comprehensive academic rules, credit structures, mandatory attendance requirements,
              letter grading scale, and promotion guidelines governing all Pre-University Course (PUC),
              B.Tech, and M.Tech programmes across RGUKT-AP.
            </p>
          </div>

          <div className="prog-hero-right">
            <img
              src="/gallery/academic-regulations-hero.jpg"
              alt="Academic Governance & Regulations"
              className="prog-hero-media-img"
            />
            <div className="prog-hero-media-overlay">
              <div className="prog-hero-stats-row">
                <div className="prog-hero-stat-pill">
                  <span className="prog-stat-val">160</span>
                  <span className="prog-stat-lbl">B.Tech Credits</span>
                </div>
                <div className="prog-hero-stat-pill">
                  <span className="prog-stat-val">75%</span>
                  <span className="prog-stat-lbl">Min Attendance</span>
                </div>
                <div className="prog-hero-stat-pill">
                  <span className="prog-stat-val">10-Pt</span>
                  <span className="prog-stat-lbl">Grading Scale</span>
                </div>
                <div className="prog-hero-stat-pill">
                  <span className="prog-stat-val">40:60</span>
                  <span className="prog-stat-lbl">Internal:End</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. REGULATORY PILLARS */}
        <section className="prog-section">
          <div className="prog-section-header">
            <span className="prog-section-kicker">Statutory Principles</span>
            <h2 className="prog-section-title">Core Academic Standards &amp; Policies</h2>
            <p className="prog-section-subtitle">
              Uniform governance standards approved by the Academic Council ensuring academic
              rigor, continuous internal evaluation, and transparent student progression.
            </p>
          </div>

          <div className="prog-pedagogy-grid">
            <div className="prog-pedagogy-card">
              <div className="prog-pedagogy-icon"><Percent size={20} /></div>
              <h3 className="prog-pedagogy-title">Mandatory 75% Attendance</h3>
              <p className="prog-pedagogy-desc">
                A student must secure a minimum of 75% aggregate attendance in all registered theory
                and practical subjects to be eligible for End-Semester Examinations.
              </p>
            </div>

            <div className="prog-pedagogy-card">
              <div className="prog-pedagogy-icon"><Clock size={20} /></div>
              <h3 className="prog-pedagogy-title">Medical Condonation (65% – 74.9%)</h3>
              <p className="prog-pedagogy-desc">
                Condonation of attendance shortage between 65% and 74.9% may be granted by the
                Campus Director on genuine medical grounds with certified documentation.
              </p>
            </div>

            <div className="prog-pedagogy-card">
              <div className="prog-pedagogy-icon"><FileCheck size={20} /></div>
              <h3 className="prog-pedagogy-title">Continuous Evaluation (40:60)</h3>
              <p className="prog-pedagogy-desc">
                Continuous internal assessment comprises 40 marks (best 2 of 3 mid-exams, assignments,
                quizzes) and End-Semester comprehensive examination carries 60 marks.
              </p>
            </div>

          
          </div>
        </section>

        {/* 3. 10-POINT LETTER GRADING SCALE */}
        <section className="prog-section">
          <div className="prog-section-header">
            <span className="prog-section-kicker">Evaluation Metrics</span>
            <h2 className="prog-section-title">10-Point Absolute Letter Grading Scale</h2>
            <p className="prog-section-subtitle">
              Standardized grade points and letter tiers used to compute Semester Grade Point Average
              (SGPA) and Cumulative Grade Point Average (CGPA).
            </p>
          </div>

          <div className="prog-card-grid">
            {gradingTiers.map((tier) => (
              <div key={tier.grade} className="prog-discipline-card" style={{ padding: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontSize: '18px', fontWeight: 900, color: '#C8102E' }}>
                    Grade {tier.grade}
                  </span>
                  <span style={{ fontSize: '12px', fontWeight: 800, background: '#0A2744', color: '#ffffff', padding: '3px 8px', borderRadius: '6px' }}>
                    {tier.point} Points
                  </span>
                </div>
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#0A2744' }}>
                  Score: {tier.range} ({tier.performance})
                </span>
                <p style={{ fontSize: '12px', color: '#475569', margin: '6px 0 0', lineHeight: 1.45 }}>
                  {tier.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. CREDIT ALLOCATION ARCHITECTURE */}
        <section className="prog-section">
          <div className="prog-section-header">
            <span className="prog-section-kicker">Degree Structures</span>
            <h2 className="prog-section-title">Programme Credit Structures</h2>
            <p className="prog-section-subtitle">
              Total credit allocations and curriculum distribution across pre-university, undergraduate,
              and postgraduate degree programmes.
            </p>
          </div>

          <div className="prog-card-grid">
            {creditPrograms.map((prog) => (
              <div key={prog.title} className={prog.colorClass}>
                <div className="prog-card-body" style={{ paddingTop: '18px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 800, color: '#64748B', textTransform: 'uppercase' }}>
                    {prog.duration}
                  </span>
                  <h3 className="prog-card-name" style={{ fontSize: '15px' }}>{prog.title}</h3>
                  <p className="prog-card-short-desc">{prog.focus}</p>
                </div>
                <div className="prog-card-footer">
                  <span className="prog-card-intake">
                    Total Credits: <strong style={{ color: '#0A2744' }}>{prog.credits}</strong>
                  </span>
                  <span style={{ fontSize: '11.5px', fontWeight: 800, color: '#C8102E' }}>
                    AICTE Aligned ✓
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. VERIFIED REGULATORY DOCUMENTS (LINE-BY-LINE) */}
        <section className="prog-section">
          <div className="prog-section-header">
            <span className="prog-section-kicker">Statutory Ordinances &amp; Gazettes</span>
            <h2 className="prog-section-title">Verified Academic Regulations Documents (PDFs)</h2>
            <p className="prog-section-subtitle">
              Download the official B.Tech R24 regulations, grading policy manual, and academic
              council resolutions published by RGUKT-AP.
            </p>
          </div>

          <DocumentSection documents={regDocs} defaultFilter="Regulations" />
        </section>

        {/* 6. ACADEMIC ADVISORY CTA */}
        <section className="prog-cta-banner">
          <div className="prog-cta-content">
            <span className="prog-cta-kicker">Office of Dean Academics</span>
            <h2 className="prog-cta-title">Need Clarification on Academic Rules?</h2>
            <p className="prog-cta-desc">
              Consult with your faculty academic advisor, departmental head, or visit the Dean of
              Academics portal for official circulars and academic petition guidelines.
            </p>
          </div>

          <div className="prog-cta-btn-group">
            <a
              href="/docs/academics/btech-regulations-2024.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="prog-cta-btn-primary"
            >
              Download B.Tech Regulations →
            </a>
            <a
              href="/docs/academics/grading-promotion-policy.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="prog-cta-btn-outline"
            >
              Grading Policy PDF
            </a>
          </div>
        </section>
      </div>
    </AcademicsSubLayout>
  );
}
