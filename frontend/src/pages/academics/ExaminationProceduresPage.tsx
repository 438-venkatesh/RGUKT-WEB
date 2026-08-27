import {
  FileCheck2,
  ShieldCheck,
  AlertTriangle,
  QrCode,
} from 'lucide-react';
import AcademicsSubLayout from '../../components/AcademicsSubLayout';
import { ACADEMIC_PROGRAM_DOCUMENTS } from '../../data/academicDocuments';
import { DocumentSection } from '../../components/DocumentCard';
import './ProgrammesPage.css';

export default function ExaminationProceduresPage() {
  const examDocs = ACADEMIC_PROGRAM_DOCUMENTS.filter(
    (d) => d.category === 'Examinations'
  );

  const examLifecycleSteps = [
    {
      step: '01',
      title: 'Portal Registration',
      timeline: '4 Weeks Prior',
      desc: 'Students verify course registrations, fee clearances, and submit regular/remedial examination applications on the exam portal.',
    },
    {
      step: '02',
      title: 'Digital Hall Tickets',
      timeline: '1 Week Prior',
      desc: 'Automated attendance verification (≥75%) generates barcoded hall tickets with allocated examination centers.',
    },
    {
      step: '03',
      title: 'Proctored Examination',
      timeline: 'Exam Window',
      desc: 'Invigilated examinations conducted with strict biometric / barcoded attendance and centralized question paper encryption.',
    },
    {
      step: '04',
      title: 'Double-Blind Valuation',
      timeline: 'Post Exam',
      desc: 'Encrypted answer scripts evaluated by internal and external evaluators to ensure total impartiality.',
    },
    {
      step: '05',
      title: 'Results & Transcripts',
      timeline: '15 Days Turnaround',
      desc: 'SGPA/CGPA result publication on the student portal, followed by grade card issuance and revaluation windows.',
    },
  ];

  const examRules = [
    {
      title: 'Mandatory Hall Ticket & ID Card',
      desc: 'Students must produce the official printed barcoded hall ticket along with their university identity card at the exam hall.',
      icon: <QrCode size={20} />,
    },
    {
      title: 'Zero Tolerance for Electronic Devices',
      desc: 'Smartphones, smartwatches, programmable calculators, or Bluetooth gadgets are strictly prohibited inside examination centers.',
      icon: <AlertTriangle size={20} />,
    },
    {
      title: 'Strict Malpractice Penalties',
      desc: 'Any violation or unfair means results in immediate cancellation of all registered courses in the semester and disciplinary action.',
      icon: <ShieldCheck size={20} />,
    },
    {
      title: 'Revaluation & Recounting Window',
      desc: 'Students may apply for digital recounting or personal verification of answer scripts within 15 days of result publication.',
      icon: <FileCheck2 size={20} />,
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
              Examination Procedures &amp; Evaluation Cell
            </h1>
            <p className="prog-hero-tagline">
              Continuous Assessment • Digital Hall Tickets • Double-Blind Evaluation • Revaluation
            </p>
            <p className="prog-hero-description">
              Standard operating procedures for examination registration, digital hall ticket
              issuance, continuous internal assessment, end-semester evaluation, grading, and result
              publication across RGUKT-AP.
            </p>
          </div>

          <div className="prog-hero-right">
            <img
              src="/gallery/examination-procedures-hero.jpg"
              alt="Examination Procedures & Evaluation Cell"
              className="prog-hero-media-img"
            />
            <div className="prog-hero-media-overlay">
              <div className="prog-hero-stats-row">
                <div className="prog-hero-stat-pill">
                  <span className="prog-stat-val">Digital</span>
                  <span className="prog-stat-lbl">Hall Tickets</span>
                </div>
                <div className="prog-hero-stat-pill">
                  <span className="prog-stat-val">Double</span>
                  <span className="prog-stat-lbl">Blind Valuation</span>
                </div>
                <div className="prog-hero-stat-pill">
                  <span className="prog-stat-val">15 Days</span>
                  <span className="prog-stat-lbl">Result Turnaround</span>
                </div>
                <div className="prog-hero-stat-pill">
                  <span className="prog-stat-val">4</span>
                  <span className="prog-stat-lbl">Exam Cells</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. EXAMINATION PRINCIPLES */}
        <section className="prog-section">
          <div className="prog-section-header">
            <span className="prog-section-kicker">Governance &amp; Rigor</span>
            <h2 className="prog-section-title">Examination Control Cell Protocols</h2>
            <p className="prog-section-subtitle">
              Ensuring complete confidentiality, fairness, and transparency across continuous
              internal assessments and end-semester examinations.
            </p>
          </div>

          <div className="prog-pedagogy-grid">
            <div className="prog-pedagogy-card">
              <div className="prog-pedagogy-icon"><QrCode size={20} /></div>
              <h3 className="prog-pedagogy-title">Digital Hall Ticket Generation</h3>
              <p className="prog-pedagogy-desc">
                Automated student eligibility verification checking minimum 75% attendance criteria
                and generating encrypted barcoded hall tickets.
              </p>
            </div>

            <div className="prog-pedagogy-card">
              <div className="prog-pedagogy-icon"><ShieldCheck size={20} /></div>
              <h3 className="prog-pedagogy-title">Double-Blind Answer Evaluation</h3>
              <p className="prog-pedagogy-desc">
                Anonymized barcode masking on answer booklets evaluated by internal and external
                domain experts to guarantee impartial grading.
              </p>
            </div>

            <div className="prog-pedagogy-card">
              <div className="prog-pedagogy-icon"><FileCheck2 size={20} /></div>
              <h3 className="prog-pedagogy-title">Transparent Revaluation &amp; Recounting</h3>
              <p className="prog-pedagogy-desc">
                Fast-track provision for students to apply for personal answer script verification,
                recounting, and challenge revaluation.
              </p>
            </div>
          </div>
        </section>

        {/* 3. EXAMINATION LIFECYCLE STEPPER */}
        <section className="prog-section">
          <div className="prog-section-header">
            <span className="prog-section-kicker">Process Lifecycle</span>
            <h2 className="prog-section-title">End-to-End Examination Operational Stepper</h2>
            <p className="prog-section-subtitle">
              A structured step-by-step roadmap from student course registration to result publication
              and degree certificate issuance.
            </p>
          </div>

          <div className="timeline-wrap">
            <div className="timeline-stepper timeline-stepper-5">
              {examLifecycleSteps.map((s) => (
                <div key={s.step} className="timeline-card">
                  <div className="timeline-step-badge">
                    <span className="timeline-number">{s.step}</span>
                    <span className="timeline-duration">{s.timeline}</span>
                  </div>
                  <h4 className="timeline-title">{s.title}</h4>
                  <p className="timeline-desc">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. EXAMINATION RULES & NORMS */}
        <section className="prog-section">
          <div className="prog-section-header">
            <span className="prog-section-kicker">Conduct &amp; Discipline</span>
            <h2 className="prog-section-title">Examination Rules &amp; Disciplinary Norms</h2>
            <p className="prog-section-subtitle">
              Essential guidelines for candidates appearing in university mid-examinations and end-semester exams.
            </p>
          </div>

          <div className="prog-card-grid">
            {examRules.map((rule) => (
              <div key={rule.title} className="prog-discipline-card" style={{ padding: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <div className="prog-card-icon">{rule.icon}</div>
                  <h4 style={{ fontSize: '14.5px', fontWeight: 800, color: '#0A2744', margin: 0 }}>
                    {rule.title}
                  </h4>
                </div>
                <p style={{ fontSize: '12.5px', color: '#475569', margin: 0, lineHeight: 1.5 }}>
                  {rule.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. VERIFIED EXAMINATION DOCUMENTS (LINE-BY-LINE) */}
        <section className="prog-section">
          <div className="prog-section-header">
            <span className="prog-section-kicker">Official Ordinances &amp; SOPs</span>
            <h2 className="prog-section-title">Verified Examination Documents (PDFs)</h2>
            <p className="prog-section-subtitle">
              Download the official Examination Manual, grading promotion ordinances, and evaluation
              guidelines published by the Controller of Examinations.
            </p>
          </div>

          <DocumentSection documents={examDocs} defaultFilter="Examinations" />
        </section>

        {/* 6. EXAMINATION PORTAL CTA */}
        <section className="prog-cta-banner">
          <div className="prog-cta-content">
            <span className="prog-cta-kicker">Examination Portal</span>
            <h2 className="prog-cta-title">Access Student Examination Services</h2>
            <p className="prog-cta-desc">
              Log in to the Examination Portal to check timetable schedules, download digital hall
              tickets, view semester results, and apply for grade cards.
            </p>
          </div>

          <div className="prog-cta-btn-group">
            <a
              href="/docs/academics/examination-manual-ordinances.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="prog-cta-btn-primary"
            >
              Examination Manual PDF →
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
