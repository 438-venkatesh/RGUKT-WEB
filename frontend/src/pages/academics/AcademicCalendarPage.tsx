import AcademicsSubLayout from '../../components/AcademicsSubLayout';
import { ACADEMIC_PROGRAM_DOCUMENTS } from '../../data/academicDocuments';
import { DocumentSection } from '../../components/DocumentCard';
import './ProgrammesPage.css';

export default function AcademicCalendarPage() {
  const calDocs = ACADEMIC_PROGRAM_DOCUMENTS.filter(
    (d) => d.category === 'Calendar'
  );

  const sem1Schedule = [
    { date: 'July 14, 2025', title: 'Commencement of Classes', desc: 'Semester-I instruction begins for PUC-1, PUC-2, B.Tech (E1 to E4), and M.Tech.', tag: 'Commencement' },
    { date: 'Sep 8 – 12, 2025', title: 'Continuous Assessment Mid-1', desc: 'Computerized mid-term examinations covering Unit 1 & Unit 2 coursework.', tag: 'Mid Exam' },
    { date: 'Sep 29 – Oct 5, 2025', title: 'Dasara Vacation Window', desc: 'State-wide festival recess for students across all four constituent campuses.', tag: 'Vacation' },
    { date: 'Nov 3 – 7, 2025', title: 'Continuous Assessment Mid-2', desc: 'Computerized mid-term examinations covering Unit 3 & Unit 4 coursework.', tag: 'Mid Exam' },
    { date: 'Nov 21, 2025', title: 'Last Day of Instruction', desc: 'Completion of syllabus coursework with minimum 70 active teaching days.', tag: 'Instruction End' },
    { date: 'Dec 1 – 15, 2025', title: 'End Semester Examinations', desc: 'Comprehensive proctored theory and practical lab examinations.', tag: 'Final Exams' },
  ];

  const sem2Schedule = [
    { date: 'Dec 29, 2025', title: 'Commencement of Classes', desc: 'Semester-II instruction commences across all departments and programs.', tag: 'Commencement' },
    { date: 'Jan 12 – 18, 2026', title: 'Sankranti / Pongal Break', desc: 'Traditional harvest festival recess for residential students and faculty.', tag: 'Vacation' },
    { date: 'Feb 16 – 20, 2026', title: 'Continuous Assessment Mid-1', desc: 'First mid-semester computerized examination window.', tag: 'Mid Exam' },
    { date: 'April 6 – 10, 2026', title: 'Continuous Assessment Mid-2', desc: 'Second mid-semester computerized examination window.', tag: 'Mid Exam' },
    { date: 'April 24, 2026', title: 'Last Day of Instruction', desc: 'Concluding Semester-II instructional curriculum requirements.', tag: 'Instruction End' },
    { date: 'May 4 – 18, 2026', title: 'End Semester Examinations', desc: 'Final university theory examinations and lab viva-voce assessments.', tag: 'Final Exams' },
    { date: 'May 19 – June 30, 2026', title: 'Summer Term / Recess', desc: 'Summer research fellowships, NPTEL internships, and remedial coaching.', tag: 'Summer Term' },
  ];

  const gazettedHolidays = [
    { date: 'Aug 15, 2025', event: 'Independence Day', type: 'National' },
    { date: 'Aug 27, 2025', event: 'Vinayaka Chavithi', type: 'Festival' },
    { date: 'Oct 2, 2025', event: 'Gandhi Jayanti', type: 'National' },
    { date: 'Oct 2, 2025', event: 'Vijaya Dasami', type: 'Festival' },
    { date: 'Oct 20, 2025', event: 'Deepavali', type: 'Festival' },
    { date: 'Dec 25, 2025', event: 'Christmas', type: 'Festival' },
    { date: 'Jan 14 – 15, 2026', event: 'Makara Sankranti', type: 'Festival' },
    { date: 'Jan 26, 2026', event: 'Republic Day', type: 'National' },
    { date: 'Feb 15, 2026', event: 'Maha Shivaratri', type: 'Festival' },
    { date: 'March 19, 2026', event: 'Ugadi (Telugu New Year)', type: 'Festival' },
  ];

  return (
    <AcademicsSubLayout>
      <div className="prog-page-container">
        {/* 1. HERO SECTION (MATCHING ACADEMICS OVERVIEW BACKGROUND & STYLE) */}
        <section className="prog-split-hero">
          <div className="prog-hero-left">
            <span className="prog-hero-badge">ACADEMICS OF RGUKT-AP</span>
            <h1 className="prog-hero-main-title">
              Academic Calendar &amp; Almanac 2025-26
            </h1>
            <p className="prog-hero-tagline">
              Semester Schedules • Continuous Assessments • Vacation Windows
            </p>
            <p className="prog-hero-description">
              Key academic dates, semester commencement timelines, mid-semester break windows,
              end-semester examinations, and summer vacation schedules for all RGUKT-AP constituent campuses.
            </p>
          </div>

          <div className="prog-hero-right">
            <img
              src="/gallery/academic-calendar-hero.jpg"
              alt="Academic Calendar"
              className="prog-hero-media-img"
            />
            <div className="prog-hero-media-overlay">
              <div className="prog-hero-stats-row">
                <div className="prog-hero-stat-pill">
                  <span className="prog-stat-val">70+</span>
                  <span className="prog-stat-lbl">Days / Sem</span>
                </div>
                <div className="prog-hero-stat-pill">
                  <span className="prog-stat-val">2</span>
                  <span className="prog-stat-lbl">Semesters / AY</span>
                </div>
                <div className="prog-hero-stat-pill">
                  <span className="prog-stat-val">3</span>
                  <span className="prog-stat-lbl">Mid-Exams</span>
                </div>
                <div className="prog-hero-stat-pill">
                  <span className="prog-stat-val">4</span>
                  <span className="prog-stat-lbl">Campuses Sync</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. SEMESTER-I ALMANAC (ODD SEMESTER) */}
        <section className="prog-section">
          <div className="prog-section-header">
            <span className="prog-section-kicker">Academic Schedule</span>
            <h2 className="prog-section-title">Semester-I Academic Almanac (July – Dec 2025)</h2>
            <p className="prog-section-subtitle">
              Detailed chronological milestone schedule for the odd semester across all constituent campuses.
            </p>
          </div>

          <div className="prog-card-grid">
            {sem1Schedule.map((item, idx) => (
              <div key={idx} className="prog-discipline-card" style={{ padding: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontSize: '13px', fontWeight: 800, color: '#C8102E' }}>
                    {item.date}
                  </span>
                  <span style={{ fontSize: '10.5px', fontWeight: 700, background: '#EFF6FF', color: '#1D4ED8', padding: '2px 8px', borderRadius: '5px' }}>
                    {item.tag}
                  </span>
                </div>
                <h4 style={{ fontSize: '14.5px', fontWeight: 800, color: '#0A2744', margin: '0 0 6px' }}>
                  {item.title}
                </h4>
                <p style={{ fontSize: '12.5px', color: '#475569', margin: 0, lineHeight: 1.5 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. SEMESTER-II ALMANAC (EVEN SEMESTER) */}
        <section className="prog-section">
          <div className="prog-section-header">
            <span className="prog-section-kicker">Academic Schedule</span>
            <h2 className="prog-section-title">Semester-II Academic Almanac (Dec 2025 – June 2026)</h2>
            <p className="prog-section-subtitle">
              Detailed chronological milestone schedule for the even semester including summer term.
            </p>
          </div>

          <div className="prog-card-grid">
            {sem2Schedule.map((item, idx) => (
              <div key={idx} className="prog-discipline-card" style={{ padding: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontSize: '13px', fontWeight: 800, color: '#C8102E' }}>
                    {item.date}
                  </span>
                  <span style={{ fontSize: '10.5px', fontWeight: 700, background: '#EFF6FF', color: '#1D4ED8', padding: '2px 8px', borderRadius: '5px' }}>
                    {item.tag}
                  </span>
                </div>
                <h4 style={{ fontSize: '14.5px', fontWeight: 800, color: '#0A2744', margin: '0 0 6px' }}>
                  {item.title}
                </h4>
                <p style={{ fontSize: '12.5px', color: '#475569', margin: 0, lineHeight: 1.5 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. GAZETTED HOLIDAYS */}
        <section className="prog-section">
          <div className="prog-section-header">
            <span className="prog-section-kicker">University Holidays</span>
            <h2 className="prog-section-title">Official Gazetted &amp; Festival Holidays</h2>
            <p className="prog-section-subtitle">
              State government ratified general holidays observed across all RGUKT-AP constituent campuses.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '12px' }}>
            {gazettedHolidays.map((h, idx) => (
              <div
                key={idx}
                style={{
                  background: '#ffffff',
                  border: '1.5px solid #E2E8F0',
                  borderRadius: '10px',
                  padding: '12px 14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <h5 style={{ fontSize: '13px', fontWeight: 800, color: '#0A2744', margin: '0 0 2px' }}>
                    {h.event}
                  </h5>
                  <span style={{ fontSize: '11.5px', color: '#C8102E', fontWeight: 700 }}>
                    {h.date}
                  </span>
                </div>
                <span style={{ fontSize: '10px', fontWeight: 800, color: '#64748B', background: '#F1F5F9', padding: '2px 6px', borderRadius: '4px' }}>
                  {h.type}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* 5. VERIFIED CALENDAR DOCUMENTS (LINE-BY-LINE) */}
        <section className="prog-section">
          <div className="prog-section-header">
            <span className="prog-section-kicker">Official Gazettes &amp; Circulars</span>
            <h2 className="prog-section-title">Verified Academic Calendar Documents (PDFs)</h2>
            <p className="prog-section-subtitle">
              Download the official academic almanac, examination schedules, and holiday circulars
              published by the RGUKT-AP administration.
            </p>
          </div>

          <DocumentSection documents={calDocs} defaultFilter="Calendar" />
        </section>

        {/* 6. CALENDAR CTA */}
        <section className="prog-cta-banner">
          <div className="prog-cta-content">
            <span className="prog-cta-kicker">Almanac Updates</span>
            <h2 className="prog-cta-title">Subscribe to Academic Schedule Alerts</h2>
            <p className="prog-cta-desc">
              Any mid-term adjustments or emergency holiday declarations are broadcast through the
              official university portal notices and student SMS alerts.
            </p>
          </div>

          <div className="prog-cta-btn-group">
            <a
              href="/docs/academics/academic-calendar-2025-26.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="prog-cta-btn-primary"
            >
              Download Calendar PDF →
            </a>
            <a
              href="/docs/academics/holiday-list-2025-26.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="prog-cta-btn-outline"
            >
              Holiday List PDF
            </a>
          </div>
        </section>
      </div>
    </AcademicsSubLayout>
  );
}
