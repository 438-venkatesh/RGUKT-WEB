import { useState } from 'react';
import {
  Calendar,
  Clock,
  CheckCircle2,
  Eye,
  Download,
} from 'lucide-react';
import AcademicsSubLayout from '../../components/AcademicsSubLayout';
import { ACADEMIC_PROGRAM_DOCUMENTS } from '../../data/academicDocuments';
import { DocumentSection } from '../../components/DocumentCard';
import './ProgrammesPage.css';

export default function ExaminationSchedulesPage() {
  const [selectedCampus, setSelectedCampus] = useState<string>('All');

  const scheduleDocs = ACADEMIC_PROGRAM_DOCUMENTS.filter(
    (d) => d.category === 'ExamSchedules'
  );

  const campusSchedules = [
    {
      campus: 'Nuzvid',
      semester: 'Semester-I End Exams (PUC & B.Tech E1–E4)',
      academicYear: 'AY 2025–26 (Dec 1–15, 2025)',
      dates: 'Dec 1 – Dec 15, 2025',
      session: 'FN (09:30 AM – 12:30 PM) & AN (02:00 PM – 05:00 PM)',
      branches: 'CSE, ECE, EEE, MECH, CIVIL, CHEM, MME + PUC',
      pdfUrl: '/docs/academics/exam-schedule-nuzvid-sem1.pdf',
    },
    {
      campus: 'Nuzvid',
      semester: 'Semester-II End Exams (PUC & B.Tech E1–E4)',
      academicYear: 'AY 2025–26 (May 4–18, 2026)',
      dates: 'May 4 – May 18, 2026',
      session: 'FN (09:30 AM – 12:30 PM) & Project Defenses',
      branches: 'All 7 B.Tech Engineering Branches + Minor Degrees',
      pdfUrl: '/docs/academics/exam-schedule-nuzvid-sem2.pdf',
    },
    {
      campus: 'RK Valley',
      semester: 'Semester-I End Exams (PUC & B.Tech E1–E4)',
      academicYear: 'AY 2025–26 (Dec 1–15, 2025)',
      dates: 'Dec 1 – Dec 15, 2025',
      session: 'FN (09:30 AM – 12:30 PM) & AN (02:00 PM – 05:00 PM)',
      branches: 'CSE, ECE, EEE, MECH, CIVIL, CHEM, MME + PUC',
      pdfUrl: '/docs/academics/exam-schedule-rk-valley-sem1.pdf',
    },
    {
      campus: 'RK Valley',
      semester: 'Semester-II End Exams (PUC & B.Tech E1–E4)',
      academicYear: 'AY 2025–26 (May 4–18, 2026)',
      dates: 'May 4 – May 18, 2026',
      session: 'FN (09:30 AM – 12:30 PM)',
      branches: 'All 7 B.Tech Engineering Branches + PUC Foundation',
      pdfUrl: '/docs/academics/exam-schedule-rk-valley-sem2.pdf',
    },
    {
      campus: 'Srikakulam',
      semester: 'Semester-I End Exams (PUC & B.Tech E1–E4)',
      academicYear: 'AY 2025–26 (Dec 1–15, 2025)',
      dates: 'Dec 1 – Dec 15, 2025',
      session: 'FN (09:30 AM – 12:30 PM)',
      branches: 'CSE, ECE, MECH, CIVIL + PUC-1 & PUC-2',
      pdfUrl: '/docs/academics/exam-schedule-srikakulam-sem1.pdf',
    },
    {
      campus: 'Srikakulam',
      semester: 'Semester-II End Exams (PUC & B.Tech E1–E4)',
      academicYear: 'AY 2025–26 (May 4–18, 2026)',
      dates: 'May 4 – May 18, 2026',
      session: 'FN (09:30 AM – 12:30 PM)',
      branches: 'CSE, ECE, MECH, CIVIL + PUC-1 & PUC-2',
      pdfUrl: '/docs/academics/exam-schedule-srikakulam-sem2.pdf',
    },
    {
      campus: 'Ongole',
      semester: 'Semester-I End Exams (PUC & B.Tech E1–E4)',
      academicYear: 'AY 2025–26 (Dec 1–15, 2025)',
      dates: 'Dec 1 – Dec 15, 2025',
      session: 'FN (09:30 AM – 12:30 PM)',
      branches: 'CSE, ECE, EEE, MECH, CIVIL + PUC-1 & PUC-2',
      pdfUrl: '/docs/academics/exam-schedule-ongole-sem1.pdf',
    },
    {
      campus: 'Ongole',
      semester: 'Semester-II End Exams (PUC & B.Tech E1–E4)',
      academicYear: 'AY 2025–26 (May 4–18, 2026)',
      dates: 'May 4 – May 18, 2026',
      session: 'FN (09:30 AM – 12:30 PM)',
      branches: 'CSE, ECE, EEE, MECH, CIVIL + PUC-1 & PUC-2',
      pdfUrl: '/docs/academics/exam-schedule-ongole-sem2.pdf',
    },
  ];

  const filteredSchedules =
    selectedCampus === 'All'
      ? campusSchedules
      : campusSchedules.filter((s) => s.campus.toLowerCase() === selectedCampus.toLowerCase());

  return (
    <AcademicsSubLayout>
      <div className="prog-page-container">
        {/* 1. HERO SECTION (MATCHING ACADEMICS OVERVIEW BACKGROUND & STYLE) */}
        <section className="prog-split-hero">
          <div className="prog-hero-left">
            <span className="prog-hero-badge">ACADEMICS OF RGUKT-AP</span>
            <h1 className="prog-hero-main-title">
              Examination Timetables &amp; Schedules
            </h1>
            <p className="prog-hero-tagline">
              End-Semester Timetables • Remedial Exam Slots • 4 Campuses Synchronized
            </p>
            <p className="prog-hero-description">
              Download official examination timetables, mid-term assessment schedules, and
              semester-end examination notifications for all semesters across Nuzvid, RK Valley,
              Srikakulam, and Ongole constituent campuses.
            </p>
          </div>

          <div className="prog-hero-right">
            <img
              src="/gallery/examination-schedules-hero.jpg"
              alt="Examination Timetables & Schedules"
              className="prog-hero-media-img"
            />
            <div className="prog-hero-media-overlay">
              <div className="prog-hero-stats-row">
                <div className="prog-hero-stat-pill">
                  <span className="prog-stat-val">4</span>
                  <span className="prog-stat-lbl">Campuses</span>
                </div>
                <div className="prog-hero-stat-pill">
                  <span className="prog-stat-val">Sem 1–8</span>
                  <span className="prog-stat-lbl">PUC &amp; B.Tech</span>
                </div>
                <div className="prog-hero-stat-pill">
                  <span className="prog-stat-val">2 Shifts</span>
                  <span className="prog-stat-lbl">FN &amp; AN Slots</span>
                </div>
                <div className="prog-hero-stat-pill">
                  <span className="prog-stat-val">100%</span>
                  <span className="prog-stat-lbl">Proctored</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. EXAMINATION SESSION TIMINGS & ENTRY GUIDELINES */}
        <section className="prog-section">
          <div className="prog-section-header">
            <span className="prog-section-kicker">Session Structure</span>
            <h2 className="prog-section-title">Examination Shift Timings &amp; Hall Entry Norms</h2>
            <p className="prog-section-subtitle">
              Strictly enforced reporting schedules and session timings for theory and practical laboratory examinations.
            </p>
          </div>

          <div className="prog-pedagogy-grid">
            <div className="prog-pedagogy-card">
              <div className="prog-pedagogy-icon"><Clock size={20} /></div>
              <h3 className="prog-pedagogy-title">Forenoon Session (FN)</h3>
              <p style={{ fontSize: '12.5px', fontWeight: 800, color: '#C8102E', margin: 0 }}>
                09:30 AM – 12:30 PM (Reporting: 09:00 AM)
              </p>
              <p className="prog-pedagogy-desc">
                Conducted primarily for B.Tech regular core engineering subjects and PUC foundational sciences.
              </p>
            </div>

            <div className="prog-pedagogy-card">
              <div className="prog-pedagogy-icon"><Clock size={20} /></div>
              <h3 className="prog-pedagogy-title">Afternoon Session (AN)</h3>
              <p style={{ fontSize: '12.5px', fontWeight: 800, color: '#C8102E', margin: 0 }}>
                02:00 PM – 05:00 PM (Reporting: 01:30 PM)
              </p>
              <p className="prog-pedagogy-desc">
                Dedicated for minor degree electives, interdisciplinary courses, and remedial backlog examinations.
              </p>
            </div>

            <div className="prog-pedagogy-card">
              <div className="prog-pedagogy-icon"><CheckCircle2 size={20} /></div>
              <h3 className="prog-pedagogy-title">Late Entry &amp; Seating Norms</h3>
              <p style={{ fontSize: '12.5px', fontWeight: 800, color: '#0A2744', margin: 0 }}>
                Cut-off: 15 Minutes after commencement
              </p>
              <p className="prog-pedagogy-desc">
                No student is permitted inside the examination hall after 09:45 AM (FN) or 02:15 PM (AN).
              </p>
            </div>
          </div>
        </section>

        {/* 3. CAMPUS-WISE EXAMINATION TIMETABLES (FULL ROW PER PDF) */}
        <section className="prog-section">
          <div className="prog-section-header">
            <span className="prog-section-kicker">Date Sheets &amp; Timetables</span>
            <h2 className="prog-section-title">Campus-Specific Examination Timetables</h2>
            <p className="prog-section-subtitle">
              Filter and view synchronized examination date sheets, session timings, and branch-wise
              slots across all four constituent campuses. Each timetable item is arranged row-by-row.
            </p>
          </div>

          {/* Campus Filter Buttons */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '8px' }}>
            {['All', 'Nuzvid', 'RK Valley', 'Srikakulam', 'Ongole'].map((campus) => (
              <button
                key={campus}
                onClick={() => setSelectedCampus(campus)}
                style={{
                  padding: '7px 16px',
                  borderRadius: '20px',
                  fontSize: '12.5px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  border: selectedCampus === campus ? '1.5px solid #C8102E' : '1.5px solid #CBD5E1',
                  background: selectedCampus === campus ? '#C8102E' : '#ffffff',
                  color: selectedCampus === campus ? '#ffffff' : '#0A2744',
                  transition: 'all 0.2s ease',
                }}
              >
                {campus === 'All' ? 'All Campuses (8 Timetables)' : `${campus} Campus`}
              </button>
            ))}
          </div>

          {/* Full-width Line-by-Line Timetable Rows */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%' }}>
            {filteredSchedules.map((s, idx) => (
              <div
                key={idx}
                className="doc-row-item"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '16px',
                  width: '100%',
                  padding: '14px 18px',
                  background: '#FFFFFF',
                  border: '1.5px solid #E2E8F0',
                  borderRadius: '12px',
                  boxShadow: '0 2px 8px rgba(10, 39, 68, 0.03)',
                  transition: 'all 0.22s ease',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flex: 1, minWidth: 0 }}>
                  <div className="doc-row-icon-box" style={{ flexShrink: 0 }}>
                    <Calendar size={20} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                      <span
                        style={{
                          fontSize: '10.5px',
                          fontWeight: 800,
                          background: '#14283E',
                          color: '#FFFFFF',
                          padding: '2px 8px',
                          borderRadius: '5px',
                          letterSpacing: '0.04em',
                          textTransform: 'uppercase',
                        }}
                      >
                        {s.campus} Campus
                      </span>
                      <h4 style={{ fontSize: '14px', fontWeight: 800, color: '#0A2744', margin: 0 }}>
                        {s.semester}
                      </h4>
                      <span
                        style={{
                          fontSize: '11px',
                          fontWeight: 700,
                          padding: '2px 7px',
                          borderRadius: '5px',
                          background: '#FEF2F2',
                          color: '#C8102E',
                          border: '1px solid #FECACA',
                        }}
                      >
                        {s.academicYear}
                      </span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', fontSize: '11.5px', color: '#475569', marginTop: '2px' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Calendar size={12} color="#C8102E" />
                        <strong>Dates:</strong> {s.dates}
                      </span>
                      <span>•</span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Clock size={12} color="#14283E" />
                        <strong>Shift:</strong> {s.session}
                      </span>
                      <span>•</span>
                      <span><strong>Disciplines:</strong> {s.branches}</span>
                    </div>
                  </div>
                </div>

                {/* Right-aligned Actions */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
                  <a
                    href={s.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="doc-row-btn-primary"
                    title={`View ${s.campus} ${s.semester} PDF`}
                  >
                    <Eye size={13} />
                    <span>View PDF</span>
                  </a>
                  <a
                    href={s.pdfUrl}
                    download
                    className="doc-row-btn-secondary"
                    title={`Download ${s.campus} ${s.semester} PDF`}
                  >
                    <Download size={13} />
                    <span>Download PDF</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. VERIFIED EXAMINATION SCHEDULE DOCUMENTS (LINE-BY-LINE) */}
        <section className="prog-section">
          <div className="prog-section-header">
            <span className="prog-section-kicker">Official Timetable Gazettes</span>
            <h2 className="prog-section-title">Verified Examination Schedules Documents (PDFs)</h2>
            <p className="prog-section-subtitle">
              Download the official campus-wise examination notifications, schedule gazettes, and
              seating charts published by the Controller of Examinations.
            </p>
          </div>

          <DocumentSection documents={scheduleDocs} />
        </section>

        {/* 5. EXAMINATION NOTIFICATIONS CTA */}
        <section className="prog-cta-banner">
          <div className="prog-cta-content">
            <span className="prog-cta-kicker">Examination Helpline</span>
            <h2 className="prog-cta-title">Need Exam Schedule Assistance?</h2>
            <p className="prog-cta-desc">
              For clashes in elective timetables, remedial registration queries, or hall ticket
              issues, contact your campus Examination Cell officer.
            </p>
          </div>

          <div className="prog-cta-btn-group">
            <a
              href="/docs/academics/exam-schedule-nuzvid-sem1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="prog-cta-btn-primary"
            >
              Nuzvid Exam Timetable →
            </a>
            <a
              href="/docs/academics/exam-schedule-rk-valley-sem1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="prog-cta-btn-outline"
            >
              RK Valley Exam Timetable
            </a>
          </div>
        </section>
      </div>
    </AcademicsSubLayout>
  );
}
