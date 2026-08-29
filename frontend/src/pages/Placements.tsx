import { useState } from 'react';
import { useDarkMode } from '../context/DarkModeContext';
import {
  PLACEMENTS_INTRO,
  PLACEMENT_OFFICER,
  PLACEMENT_TRAINING_MODULES,
  PLACEMENT_PROCESS_STEPS,
  RECRUITER_CATEGORIES,
  PLACEMENT_CONTACTS,
} from '../data/placementsContent';
import type { RecruiterCategory } from '../data/placementsContent';
import './Placements.css';

export default function Placements() {
  const { dark } = useDarkMode();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

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
        pillBg: 'rgba(255, 255, 255, 0.08)',
        policyBg: 'rgba(30, 58, 138, 0.25)',
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
        pillBg: '#F1F5F9',
        policyBg: '#EEF2FF',
      };

  const displayedCompanies =
    selectedCategory === 'All'
      ? RECRUITER_CATEGORIES.flatMap((cat) => cat.companies)
      : (
          RECRUITER_CATEGORIES.find((cat) => cat.category === selectedCategory) ||
          ({ companies: [] } as unknown as RecruiterCategory)
        ).companies;

  const categoryTabs = ['All', ...RECRUITER_CATEGORIES.map((cat) => cat.category)];

  return (
    <main className="place-page" style={{ background: c.bg, color: c.text }}>
      <div className="place-wrap">
        {/* ── 1. Officer Profile Card ── */}
        <section
          className="place-officer-card"
          style={{ background: c.surface, border: `1px solid ${c.border}` }}
        >
          <div className="place-officer-grid">
            <img
              src={PLACEMENT_OFFICER.photo}
              alt={PLACEMENT_OFFICER.name}
              className="place-officer-photo"
            />
            <div className="place-officer-body">
              <span className="place-section-kicker" style={{ color: c.accent }}>
                Directorate of EITP Leadership
              </span>
              <h2 className="place-officer-name" style={{ color: c.text }}>
                {PLACEMENT_OFFICER.name}{' '}
                <span style={{ fontSize: '0.85em', fontWeight: 500, color: c.textMuted }}>
                  {PLACEMENT_OFFICER.degrees}
                </span>
              </h2>
              <p className="place-officer-role" style={{ color: c.accent }}>
                {PLACEMENT_OFFICER.designation}
              </p>
              <p className="place-officer-sub" style={{ color: c.textMuted }}>
                {PLACEMENT_OFFICER.academicRole}
              </p>
              {PLACEMENT_OFFICER.bio.map((para, i) => (
                <p key={i} className="place-officer-para" style={{ color: c.textMuted }}>
                  {para}
                </p>
              ))}
              <p style={{ color: c.textMuted, marginTop: 10, fontSize: 14 }}>
                <strong style={{ color: c.text }}>Office Address:</strong> {PLACEMENT_OFFICER.officeAddress}
              </p>
              <div className="place-officer-actions">
                <a
                  href={`mailto:${PLACEMENT_OFFICER.email}`}
                  className="place-btn-primary"
                  style={{ background: c.accent, color: '#fff' }}
                >
                  ✉ Email: {PLACEMENT_OFFICER.email}
                </a>
                <a
                  href={`mailto:${PLACEMENT_OFFICER.alternateEmail}`}
                  className="place-btn-secondary"
                  style={{ background: c.surface2, color: c.text, border: `1px solid ${c.border}` }}
                >
                  ✉ Desk: {PLACEMENT_OFFICER.alternateEmail}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. Introduction & Policy Overview ── */}
        <section
          className="place-intro-card"
          style={{ background: c.surface, border: `1px solid ${c.border}` }}
        >
          <p className="place-intro-lead" style={{ color: c.text }}>
            {PLACEMENTS_INTRO.lead}
          </p>
          <p className="place-intro-policy" style={{ color: c.textMuted }}>
            {PLACEMENTS_INTRO.policyNote}
          </p>
        </section>

        {/* ── 3. Training & Technical Finishing Modules ── */}
        <section className="place-section">
          <div className="place-section-header">
            <span className="place-section-kicker" style={{ color: c.accent }}>
              Structured Student Preparation
            </span>
            <h2 className="place-h2" style={{ color: c.text }}>
              Training & Employability Modules
            </h2>
            <p className="place-section-sub" style={{ color: c.textMuted }}>
              Comprehensive technical, analytical, and professional modules empowering students for competitive placements.
            </p>
          </div>

          <div className="place-training-grid">
            {PLACEMENT_TRAINING_MODULES.map((module) => (
              <article
                key={module.title}
                className="place-training-card"
                style={{ background: c.surface, border: `1px solid ${c.border}` }}
              >
                <span
                  className="place-card-badge"
                  style={{ background: c.cardBadgeBg, color: c.cardBadgeColor }}
                >
                  {module.tagline}
                </span>
                <h3 className="place-card-title" style={{ color: c.text }}>
                  {module.title}
                </h3>
                <p className="place-card-desc" style={{ color: c.textMuted }}>
                  {module.description}
                </p>
                <div className="place-focus-pills">
                  {module.focusAreas.map((area) => (
                    <span
                      key={area}
                      className="place-pill"
                      style={{ background: c.pillBg, color: c.text }}
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── 4. Placement Recruitment Process ── */}
        <section className="place-section">
          <div className="place-section-header">
            <span className="place-section-kicker" style={{ color: c.accent }}>
              Standard Operational Lifecycle
            </span>
            <h2 className="place-h2" style={{ color: c.text }}>
              Placement Process & Lifecycle
            </h2>
            <p className="place-section-sub" style={{ color: c.textMuted }}>
              The end-to-end transparent process governing campus recruitment drives across RGUKT.
            </p>
          </div>

          <div className="place-timeline">
            {PLACEMENT_PROCESS_STEPS.map((step) => (
              <div
                key={step.stepNumber}
                className="place-timeline-step"
                style={{ background: c.surface, border: `1px solid ${c.border}` }}
              >
                <div
                  className="place-step-num"
                  style={{ background: c.accent, color: '#FFFFFF' }}
                >
                  {step.stepNumber}
                </div>
                <div className="place-step-content">
                  <span className="place-step-tagline" style={{ color: c.accent }}>
                    {step.tagline}
                  </span>
                  <h3 className="place-step-title" style={{ color: c.text }}>
                    {step.title}
                  </h3>
                  <p className="place-step-desc" style={{ color: c.textMuted }}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 5. Recruiter Organizations & Industry Linkages ── */}
        <section className="place-section">
          <div className="place-section-header">
            <span className="place-section-kicker" style={{ color: c.accent }}>
              Corporate Outreach
            </span>
            <h2 className="place-h2" style={{ color: c.text }}>
              Recruiter Organizations & Industry Linkages
            </h2>
            <p className="place-section-sub" style={{ color: c.textMuted }}>
              Key industrial and technology organizations participating in RGUKT recruitment and student training.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="place-category-tabs">
            {categoryTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedCategory(tab)}
                className={`place-tab-btn ${selectedCategory === tab ? 'active' : ''}`}
                style={{
                  background: selectedCategory === tab ? c.accent : c.surface,
                  color: selectedCategory === tab ? '#FFFFFF' : c.text,
                  border: `1px solid ${c.border}`,
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="place-companies-grid">
            {displayedCompanies.map((comp) => (
              <div
                key={comp.name}
                className="place-company-card"
                style={{ background: c.surface, border: `1px solid ${c.border}` }}
              >
                <h4 className="place-company-name" style={{ color: c.text }}>
                  {comp.name}
                </h4>
                <span className="place-company-domain" style={{ color: c.textMuted }}>
                  {comp.domain}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ── 6. Contact for Queries ── */}
        <section className="place-section">
          <div className="place-section-header">
            <h2 className="place-h2" style={{ color: c.text }}>
              Contact for Queries
            </h2>
          </div>
          <div className="place-queries-grid">
            {PLACEMENT_CONTACTS.map((contact, i) => (
              <div
                key={i}
                className="place-query-card"
                style={{ background: c.surface, border: `1px solid ${c.border}` }}
              >
                <strong className="place-query-name" style={{ color: c.text }}>
                  {contact.name}
                </strong>
                {contact.role && (
                  <p className="place-query-role" style={{ color: c.textMuted }}>
                    {contact.role}
                  </p>
                )}
                {contact.email && (
                  <p className="place-query-email" style={{ margin: '6px 0 0' }}>
                    <a href={`mailto:${contact.email}`} style={{ color: c.accent, fontWeight: 600 }}>
                      {contact.email}
                    </a>
                  </p>
                )}
                {contact.note && (
                  <p className="place-query-note" style={{ color: c.textMuted, margin: '4px 0 0', fontSize: 13 }}>
                    {contact.note}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── 7. Source Reference ── */}
        <p className="place-source-ref" style={{ color: c.textMuted }}>
          Official Reference:{' '}
          <a
            href={PLACEMENTS_INTRO.rguktUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: c.accent }}
          >
            rgukt.in — Training and Placements
          </a>
        </p>
      </div>
    </main>
  );
}
