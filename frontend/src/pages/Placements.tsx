import { useState } from 'react';
import { useDarkMode } from '../context/DarkModeContext';
import {
  PLACEMENTS_INTRO,
  PLACEMENT_TRAINING_MODULES,
  PLACEMENT_PROCESS_STEPS,
  CAMPUS_PLACEMENT_DESKS,
  RECRUITER_CATEGORIES,
} from '../data/placementsContent';
import type { RecruiterCategory } from '../data/placementsContent';
import './Placements.css';

export default function Placements() {
  const { dark } = useDarkMode();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sent, setSent] = useState(false);
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

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

  // Compile list of companies based on selected category tab
  const displayedCompanies =
    selectedCategory === 'All'
      ? RECRUITER_CATEGORIES.flatMap((cat) => cat.companies)
      : (
          RECRUITER_CATEGORIES.find((cat) => cat.category === selectedCategory) ||
          ({ companies: [] } as unknown as RecruiterCategory)
        ).companies;

  const categoryTabs = ['All', ...RECRUITER_CATEGORIES.map((cat) => cat.category)];

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <main className="place-page" style={{ background: c.bg, color: c.text }}>
      <div className="place-wrap">
        {/* ── 1. Two-Line Hero Banner ── */}
        <div className="place-hero" style={{ border: `1px solid ${c.border}` }}>
          <img
            src="/students/quantum-workshop-2.jpg"
            alt="RGUKT Career Development & Placement Ecosystem"
            className="place-hero-img"
          />
          <div className="place-hero-overlay" />
          <div className="place-hero-text">
            <span className="place-hero-eyebrow">Training, Incubation & Career Pathways</span>
            <h1 className="place-hero-title">
              Placements
              <br />
              @RGUKT-AP
            </h1>
          </div>
        </div>

        {/* ── 2. Introduction & Policy Overview ── */}
        <section
          className="place-intro-card"
          style={{ background: c.surface, border: `1px solid ${c.border}` }}
        >
          <p className="place-intro-lead" style={{ color: c.text }}>
            {PLACEMENTS_INTRO.lead}
          </p>
          <p
            className="place-intro-policy"
            style={{
              background: c.policyBg,
              borderColor: c.accent,
              color: c.text,
            }}
          >
            <strong>Institutional Placement Policy:</strong> {PLACEMENTS_INTRO.policyNote}
          </p>
        </section>

        {/* ── 3. Comprehensive Placement Training Curriculum (Pillars) ── */}
        <section className="place-section">
          <div className="place-section-header">
            <h2 className="place-h2" style={{ color: c.text }}>
              Comprehensive Placement Training Curriculum
            </h2>
            <p className="place-section-sub" style={{ color: c.textMuted }}>
              Structured finishing schools, coding bootcamps, and domain-specific coaching preparing rural engineering scholars for global industry standards.
            </p>
          </div>

          <div className="place-training-grid">
            {PLACEMENT_TRAINING_MODULES.map((mod, idx) => (
              <div
                key={idx}
                className="place-training-card"
                style={{ background: c.surface, border: `1px solid ${c.border}` }}
              >
                <span className="place-training-tagline" style={{ color: c.accent }}>
                  {mod.tagline}
                </span>
                <h3 className="place-training-title" style={{ color: c.text }}>
                  {mod.title}
                </h3>
                <p className="place-training-desc" style={{ color: c.textMuted }}>
                  {mod.description}
                </p>
                <div className="place-focus-pills">
                  {mod.focusAreas.map((f, fIdx) => (
                    <span
                      key={fIdx}
                      className="place-focus-pill"
                      style={{ background: c.pillBg, color: c.text }}
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 4. Structured 5-Step Placement Process ── */}
        <section className="place-section">
          <div className="place-section-header">
            <h2 className="place-h2" style={{ color: c.text }}>
              Unified 5-Step Campus Placement Process
            </h2>
            <p className="place-section-sub" style={{ color: c.textMuted }}>
              A transparent, synchronized recruitment lifecycle ensuring rigorous selection and equitable opportunity.
            </p>
          </div>

          <div className="place-process-flow">
            {PLACEMENT_PROCESS_STEPS.map((step) => (
              <div
                key={step.stepNumber}
                className="place-step-card"
                style={{ background: c.surface, border: `1px solid ${c.border}` }}
              >
                <div
                  className="place-step-badge"
                  style={{ background: c.accent, color: '#ffffff' }}
                >
                  {step.stepNumber}
                </div>
                <h3 className="place-step-title" style={{ color: c.text }}>
                  {step.title}
                </h3>
                <span className="place-step-tagline" style={{ color: c.accent }}>
                  {step.tagline}
                </span>
                <p className="place-step-desc" style={{ color: c.textMuted }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 5. Four-Campus CDPC Desks & Infrastructure ── */}
        <section className="place-section">
          <div className="place-section-header">
            <h2 className="place-h2" style={{ color: c.text }}>
              Career Development & Placement Cells Across Four Campuses
            </h2>
            <p className="place-section-sub" style={{ color: c.textMuted }}>
              Dedicated placement directorates, massive computer-based assessment labs, and executive interview suites.
            </p>
          </div>

          <div className="place-campus-grid">
            {CAMPUS_PLACEMENT_DESKS.map((desk, idx) => (
              <div
                key={idx}
                className="place-campus-card"
                style={{ background: c.surface, border: `1px solid ${c.border}` }}
              >
                <span
                  className="place-campus-badge"
                  style={{ background: c.cardBadgeBg, color: c.cardBadgeColor }}
                >
                  {desk.campus}
                </span>
                <h3 className="place-campus-title" style={{ color: c.text }}>
                  {desk.cellName}
                </h3>

                <div className="place-campus-details">
                  <p style={{ color: c.textMuted }}>
                    <strong>Office:</strong> {desk.officeLocation}
                  </p>
                  <p style={{ color: c.textMuted }}>
                    <strong>Official Email:</strong>{' '}
                    <a href={`mailto:${desk.email}`} style={{ color: c.accent, fontWeight: 600 }}>
                      {desk.email}
                    </a>
                    {desk.alternateEmail && (
                      <>
                        {' | '}
                        <a
                          href={`mailto:${desk.alternateEmail}`}
                          style={{ color: c.accent, fontWeight: 600 }}
                        >
                          {desk.alternateEmail}
                        </a>
                      </>
                    )}
                  </p>
                </div>

                <h4 className="place-facilities-title" style={{ color: c.text }}>
                  Campus Recruitment Infrastructure:
                </h4>
                <ul className="place-facilities-list" style={{ color: c.textMuted }}>
                  {desk.facilities.map((fac, fIdx) => (
                    <li key={fIdx}>{fac}</li>
                  ))}
                </ul>

                <h4 className="place-facilities-title" style={{ color: c.text }}>
                  Key Highlights:
                </h4>
                <ul className="place-facilities-list" style={{ color: c.textMuted }}>
                  {desk.keyHighlights.map((hl, hIdx) => (
                    <li key={hIdx}>{hl}</li>
                  ))}
                </ul>

                <div className="place-campus-action">
                  <a
                    href={`mailto:${desk.email}`}
                    className="place-campus-btn"
                    style={{ background: c.primary, color: '#ffffff' }}
                  >
                    Contact Campus TPO ✉
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 6. Prominent Recruiters by Industry Vertical ── */}
        <section className="place-section">
          <div className="place-section-header">
            <h2 className="place-h2" style={{ color: c.text }}>
              Prominent Corporate Recruiters
            </h2>
            <p className="place-section-sub" style={{ color: c.textMuted }}>
              Leading Fortune 500 multinationals, semiconductor enterprises, infrastructure majors, and public sector organizations recruiting RGUKT graduates.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="place-recruiter-tabs">
            {categoryTabs.map((tab) => {
              const isActive = selectedCategory === tab;
              return (
                <button
                  key={tab}
                  className="place-tab-btn"
                  onClick={() => setSelectedCategory(tab)}
                  style={{
                    border: `1px solid ${isActive ? c.accent : c.border}`,
                    background: isActive ? c.primary : c.surface,
                    color: isActive ? '#ffffff' : c.text,
                  }}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          {/* Recruiters Grid */}
          <div className="place-recruiters-grid">
            {displayedCompanies.map((comp, idx) => (
              <div
                key={idx}
                className="place-recruiter-card"
                style={{ background: c.surface, border: `1px solid ${c.border}` }}
              >
                <h3 className="place-recruiter-name" style={{ color: c.text }}>
                  {comp.name}
                </h3>
                <div className="place-recruiter-meta">
                  <span className="place-recruiter-type" style={{ color: c.accent }}>
                    {comp.type}
                  </span>
                  <span className="place-recruiter-domain" style={{ color: c.textMuted }}>
                    {comp.domain}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 7. Corporate Connect & Recruiter Facilities CTA ── */}
        <section className="place-cta-banner" style={{ background: c.primary, color: '#ffffff' }}>
          <div className="place-cta-content">
            <div>
              <h2 className="place-cta-title">Invite RGUKT-AP for Campus Recruitment</h2>
              <p className="place-cta-desc" style={{ color: 'rgba(255, 255, 255, 0.82)' }}>
                Partner with Andhra Pradesh’s premier rural technological university. With over 4,000+ disciplined, technically adept engineering graduates passing out annually across four campuses, RGUKT offers rich talent across Computer Science, Electronics, Electrical, Mechanical, Civil, Chemical, and Metallurgy disciplines.
              </p>
            </div>

            <div className="place-cta-grid">
              <div className="place-facility-card">
                <div className="place-facility-title">⚡ High-Throughput Assessment Labs</div>
                <p className="place-facility-desc">
                  Over 1,000+ networked systems on high-bandwidth optical fiber LAN per campus for parallel online coding exams.
                </p>
              </div>
              <div className="place-facility-card">
                <div className="place-facility-title">🏛 State-of-the-Art Auditoriums</div>
                <p className="place-facility-desc">
                  Air-conditioned presentation venues with seating for 1,500+ candidates and multimedia projection setups.
                </p>
              </div>
              <div className="place-facility-card">
                <div className="place-facility-title">🏨 Executive Guest Hospitality</div>
                <p className="place-facility-desc">
                  Fully furnished university guest houses, executive board rooms, and personalized liaison officers for corporate panels.
                </p>
              </div>
            </div>

            {/* Recruiter Quick Contact Form */}
            <form
              onSubmit={handleSubmit}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '12px',
                marginTop: '12px',
              }}
            >
              <input
                required
                placeholder="Company / Organization Name"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                style={{
                  padding: '10px 14px',
                  borderRadius: '6px',
                  border: '1px solid rgba(255,255,255,0.3)',
                  background: 'rgba(255,255,255,0.1)',
                  color: '#ffffff',
                  outline: 'none',
                }}
              />
              <input
                required
                type="email"
                placeholder="HR / Recruiter Official Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  padding: '10px 14px',
                  borderRadius: '6px',
                  border: '1px solid rgba(255,255,255,0.3)',
                  background: 'rgba(255,255,255,0.1)',
                  color: '#ffffff',
                  outline: 'none',
                }}
              />
              <input
                placeholder="Contact Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                style={{
                  padding: '10px 14px',
                  borderRadius: '6px',
                  border: '1px solid rgba(255,255,255,0.3)',
                  background: 'rgba(255,255,255,0.1)',
                  color: '#ffffff',
                  outline: 'none',
                }}
              />
              <button
                type="submit"
                className="place-cta-btn"
                style={{
                  background: c.accent,
                  color: '#ffffff',
                  border: 'none',
                  cursor: 'pointer',
                  justifyContent: 'center',
                }}
              >
                Submit Hiring Interest ↗
              </button>
            </form>

            {sent && (
              <p style={{ color: '#86EFAC', fontWeight: 600, margin: '8px 0 0' }}>
                ✓ Thank you! The Central CDPC office will get in touch with your recruitment team promptly with the Job Notification Form (JNF).
              </p>
            )}

            <div className="place-cta-emails">
              <span>
                <strong>Central Directorate:</strong>
              </span>
              <span>
                Dean of EITP:{' '}
                <a
                  href="mailto:dean.eitp@rgukt.ac.in"
                  className="place-cta-email-link"
                  style={{ color: '#ffffff' }}
                >
                  dean.eitp@rgukt.ac.in
                </a>
              </span>
              <span>
                Central Placement:{' '}
                <a
                  href="mailto:placement@rgukt.ac.in"
                  className="place-cta-email-link"
                  style={{ color: '#ffffff' }}
                >
                  placement@rgukt.ac.in
                </a>
              </span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

