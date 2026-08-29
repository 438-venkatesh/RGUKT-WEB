import { useState } from 'react';
import { useDarkMode } from '../context/DarkModeContext';
import {
  CAREERS_INTRO,
  EMPLOYMENT_VERTICALS,
  SELECTION_LIFECYCLE,
  OFFICIAL_CAREERS_LIST,
  CAREERS_CONTACTS,
} from '../data/careersContent';
import './Careers.css';

export default function Careers() {
  const { dark } = useDarkMode();
  const [selectedCampus, setSelectedCampus] = useState<string>('All');

  const c = dark
    ? {
        primary: '#0B141F',
        accent: '#E8203C',
        surface: '#112030',
        surface2: '#18293c',
        bg: '#0B141F',
        text: '#C0D4EE',
        textMuted: 'rgba(192,212,238,0.70)',
        border: 'rgba(192,212,238,0.18)',
        tagBg: 'rgba(232, 32, 60, 0.15)',
        tagColor: '#FF6B81',
        cardBadgeBg: 'rgba(30, 58, 138, 0.4)',
        cardBadgeColor: '#93C5FD',
      }
    : {
        primary: '#0A2744',
        accent: '#C8102E',
        surface: '#FFFFFF',
        surface2: '#F1F5F9',
        bg: '#F8FAFC',
        text: '#18243A',
        textMuted: '#475569',
        border: '#E2E8F0',
        tagBg: 'rgba(200, 16, 46, 0.08)',
        tagColor: '#C8102E',
        cardBadgeBg: '#EEF2FF',
        cardBadgeColor: '#1E40AF',
      };

  const campuses = ['All', 'Central Office', 'Nuzvid', 'RK Valley', 'Ongole', 'Srikakulam'];

  const filteredCareers =
    selectedCampus === 'All'
      ? OFFICIAL_CAREERS_LIST
      : OFFICIAL_CAREERS_LIST.filter((t) => t.campus === selectedCampus);

  return (
    <main className="careers-page" style={{ background: c.bg, color: c.text }}>
      <div className="careers-wrap">
        {/* ── 1. Introduction & Statutory Note ── */}
        <section
          className="careers-intro-card"
          style={{ background: c.surface, border: `1px solid ${c.border}` }}
        >
          <span className="careers-section-kicker" style={{ color: c.accent }}>
            Faculty & Staff Opportunities
          </span>
          <h2 className="careers-intro-title" style={{ color: c.text }}>
            Recruitment & Employment at RGUKT
          </h2>
          <p className="careers-intro-lead" style={{ color: c.text }}>
            {CAREERS_INTRO.lead}
          </p>
          <p className="careers-intro-lead" style={{ color: c.textMuted }}>
            {CAREERS_INTRO.statutoryNote}
          </p>
        </section>

        {/* ── 2. Employment Verticals ── */}
        <section className="careers-section">
          <div className="careers-section-header">
            <span className="careers-section-kicker" style={{ color: c.accent }}>
              Cadres & Roles
            </span>
            <h2 className="careers-h2" style={{ color: c.text }}>
              Employment Verticals
            </h2>
            <p className="careers-section-sub" style={{ color: c.textMuted }}>
              Academic, technical, and residential administrative career positions across RGUKT.
            </p>
          </div>

          <div className="careers-verticals-grid">
            {EMPLOYMENT_VERTICALS.map((vertical) => (
              <article
                key={vertical.title}
                className="careers-vertical-card"
                style={{ background: c.surface, border: `1px solid ${c.border}` }}
              >
                <span
                  className="careers-card-badge"
                  style={{ background: c.cardBadgeBg, color: c.cardBadgeColor }}
                >
                  {vertical.tagline}
                </span>
                <h3 className="careers-card-title" style={{ color: c.text }}>
                  {vertical.title}
                </h3>
                <p className="careers-card-desc" style={{ color: c.textMuted }}>
                  {vertical.description}
                </p>
                <div className="careers-eligibility-box" style={{ background: c.surface2, border: `1px solid ${c.border}` }}>
                  <strong style={{ color: c.text, fontSize: 12 }}>Eligibility Overview:</strong>
                  <p style={{ color: c.textMuted, fontSize: 13, margin: '2px 0 0' }}>
                    {vertical.eligibilitySummary}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── 3. Selection Lifecycle ── */}
        <section className="careers-section">
          <div className="careers-section-header">
            <span className="careers-section-kicker" style={{ color: c.accent }}>
              Merit-Based Selection
            </span>
            <h2 className="careers-h2" style={{ color: c.text }}>
              Selection & Recruitment Process
            </h2>
            <p className="careers-section-sub" style={{ color: c.textMuted }}>
              Transparent multi-tier recruitment lifecycle governing university appointments.
            </p>
          </div>

          <div className="careers-timeline">
            {SELECTION_LIFECYCLE.map((step) => (
              <div
                key={step.stepNumber}
                className="careers-timeline-step"
                style={{ background: c.surface, border: `1px solid ${c.border}` }}
              >
                <div
                  className="careers-step-num"
                  style={{ background: c.accent, color: '#FFFFFF' }}
                >
                  {step.stepNumber}
                </div>
                <div className="careers-step-content">
                  <span className="careers-step-tagline" style={{ color: c.accent }}>
                    {step.tagline}
                  </span>
                  <h3 className="careers-step-title" style={{ color: c.text }}>
                    {step.title}
                  </h3>
                  <p className="careers-step-desc" style={{ color: c.textMuted }}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 4. Recruitment Notifications & Archive Table ── */}
        <section className="careers-section">
          <div className="careers-section-header">
            <span className="careers-section-kicker" style={{ color: c.accent }}>
              Notifications & Records
            </span>
            <h2 className="careers-h2" style={{ color: c.text }}>
              Recruitment Notifications & Archive
            </h2>
            <p className="careers-section-sub" style={{ color: c.textMuted }}>
              Official recruitment advertisements and notification archive across RGUKT campuses.
            </p>
          </div>

          {/* Campus Filter Tabs */}
          <div className="careers-category-tabs">
            {campuses.map((campus) => (
              <button
                key={campus}
                onClick={() => setSelectedCampus(campus)}
                className={`careers-tab-btn ${selectedCampus === campus ? 'active' : ''}`}
                style={{
                  background: selectedCampus === campus ? c.accent : c.surface,
                  color: selectedCampus === campus ? '#FFFFFF' : c.text,
                  border: `1px solid ${c.border}`,
                }}
              >
                {campus}
              </button>
            ))}
          </div>

          <div className="careers-table-wrap" style={{ background: c.surface, border: `1px solid ${c.border}` }}>
            <table className="careers-table">
              <thead>
                <tr style={{ borderBottom: `2px solid ${c.border}` }}>
                  <th style={{ color: c.text }}>Advt / Ref No</th>
                  <th style={{ color: c.text }}>Description</th>
                  <th style={{ color: c.text }}>Department & Campus</th>
                  <th style={{ color: c.text }}>Qualifications Summary</th>
                  <th style={{ color: c.text }}>Posted Date</th>
                  <th style={{ color: c.text }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredCareers.map((career) => (
                  <tr key={career.id} style={{ borderBottom: `1px solid ${c.border}` }}>
                    <td style={{ color: c.accent, fontWeight: 600 }}>{career.advertisementNo}</td>
                    <td style={{ color: c.text }}>
                      <strong>{career.title}</strong>
                      <span className="careers-table-category" style={{ color: c.textMuted }}>
                        {career.category}
                      </span>
                    </td>
                    <td style={{ color: c.textMuted }}>
                      {career.department}
                      <br />
                      <span style={{ fontSize: 12 }}>({career.campus})</span>
                    </td>
                    <td style={{ color: c.textMuted }}>{career.qualifications}</td>
                    <td style={{ color: c.textMuted }}>{career.postedDate}</td>
                    <td>
                      <span
                        className="careers-status-badge"
                        style={{ background: c.surface2, color: c.textMuted, border: `1px solid ${c.border}` }}
                      >
                        {career.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── 5. Contact for Queries ── */}
        <section className="careers-section">
          <div className="careers-section-header">
            <h2 className="careers-h2" style={{ color: c.text }}>
              Contact for Queries
            </h2>
          </div>
          <div className="careers-queries-grid">
            {CAREERS_CONTACTS.map((contact, i) => (
              <div
                key={i}
                className="careers-query-card"
                style={{ background: c.surface, border: `1px solid ${c.border}` }}
              >
                <strong className="careers-query-name" style={{ color: c.text }}>
                  {contact.name}
                </strong>
                {contact.role && (
                  <p className="careers-query-role" style={{ color: c.textMuted }}>
                    {contact.role}
                  </p>
                )}
                {contact.email && (
                  <p className="careers-query-email" style={{ margin: '6px 0 0' }}>
                    <a href={`mailto:${contact.email}`} style={{ color: c.accent, fontWeight: 600 }}>
                      {contact.email}
                    </a>
                  </p>
                )}
                {contact.note && (
                  <p className="careers-query-note" style={{ color: c.textMuted, margin: '4px 0 0', fontSize: 13 }}>
                    {contact.note}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── 6. Source Reference ── */}
        <p className="careers-source-ref" style={{ color: c.textMuted }}>
          Official Reference:{' '}
          <a
            href={CAREERS_INTRO.rguktUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: c.accent }}
          >
            rgukt.in — Careers
          </a>
        </p>
      </div>
    </main>
  );
}
