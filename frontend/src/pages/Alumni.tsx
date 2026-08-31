import { useDarkMode } from '../context/DarkModeContext';
import {
  ALUMNI_INTRO,
  ALUMNI_PILLARS,
  CAMPUS_ALUMNI_UNITS,
  ALUMNI_CONTACTS,
} from '../data/alumniContent';
import './Alumni.css';

export default function Alumni() {
  const { dark } = useDarkMode();

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

  return (
    <main className="alumni-page" style={{ background: c.bg, color: c.text }}>
      <div className="alumni-wrap">
        {/* ── 1. Introduction & Purpose ── */}
        <section
          className="alumni-intro-card"
          style={{ background: c.surface, border: `1px solid ${c.border}` }}
        >
          <span className="alumni-section-kicker" style={{ color: c.accent }}>
            Global Graduate Network
          </span>
          <h2 className="alumni-intro-title" style={{ color: c.text }}>
            What is the RGUKT Alumni Network?
          </h2>
          <p className="alumni-intro-lead" style={{ color: c.text }}>
            {ALUMNI_INTRO.lead}
          </p>
          <p className="alumni-intro-purpose" style={{ color: c.textMuted }}>
            {ALUMNI_INTRO.purpose}
          </p>
        </section>

        {/* ── 2. How Alumni Support RGUKT & Current Students (Pillars) ── */}
        <section className="alumni-section">
          <div className="alumni-section-header">
            <span className="alumni-section-kicker" style={{ color: c.accent }}>
              Core Initiatives
            </span>
            <h2 className="alumni-h2" style={{ color: c.text }}>
              How Alumni Support RGUKT & Students
            </h2>
            <p className="alumni-section-sub" style={{ color: c.textMuted }}>
              Structured mentorship, technical webinars, research guidance, and institutional support.
            </p>
          </div>

          <div className="alumni-pillars-grid">
            {ALUMNI_PILLARS.map((pillar) => (
              <article
                key={pillar.title}
                className="alumni-pillar-card"
                style={{ background: c.surface, border: `1px solid ${c.border}` }}
              >
                <span
                  className="alumni-card-badge"
                  style={{ background: c.cardBadgeBg, color: c.cardBadgeColor }}
                >
                  {pillar.tagline}
                </span>
                <h3 className="alumni-card-title" style={{ color: c.text }}>
                  {pillar.title}
                </h3>
                <p className="alumni-card-desc" style={{ color: c.textMuted }}>
                  {pillar.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* ── 3. Constituent Campus Alumni Units ── */}
        <section className="alumni-section">
          <div className="alumni-section-header">
            <span className="alumni-section-kicker" style={{ color: c.accent }}>
              Four-Campus Coordination
            </span>
            <h2 className="alumni-h2" style={{ color: c.text }}>
              Campus Alumni Engagement Units
            </h2>
            <p className="alumni-section-sub" style={{ color: c.textMuted }}>
              Alumni coordination and student interaction cells across constituent campuses.
            </p>
          </div>

          <div className="alumni-units-grid">
            {CAMPUS_ALUMNI_UNITS.map((unit) => (
              <div
                key={unit.campus}
                className="alumni-unit-card"
                style={{ background: c.surface, border: `1px solid ${c.border}` }}
              >
                <span className="alumni-unit-campus" style={{ color: c.accent }}>
                  {unit.campus}
                </span>
                <h3 className="alumni-unit-name" style={{ color: c.text }}>
                  {unit.name}
                </h3>
                <p className="alumni-unit-desc" style={{ color: c.textMuted }}>
                  {unit.description}
                </p>
                <p className="alumni-unit-email" style={{ margin: '8px 0 0' }}>
                  <a href={`mailto:${unit.email}`} style={{ color: c.accent, fontWeight: 600 }}>
                    ✉ {unit.email}
                  </a>
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 4. How to Connect & Get Involved ── */}
        <section
          className="alumni-connect-card"
          style={{ background: c.surface, border: `1px solid ${c.border}` }}
        >
          <h2 className="alumni-h2" style={{ color: c.text }}>
            How Can Alumni Connect & Get Involved?
          </h2>
          <p className="alumni-card-desc" style={{ color: c.textMuted, marginTop: 8 }}>
            Alumni are encouraged to register their details with the university alumni network, join campus interaction days, participate as guest speakers in technical webinars, and mentor graduating students.
          </p>
          <div style={{ marginTop: 16 }}>
            <a
              href="mailto:alumni@rgukt.in"
              className="alumni-btn-primary"
              style={{ background: c.accent, color: '#FFFFFF' }}
            >
              ✉ Register & Connect via Official Email: alumni@rgukt.in
            </a>
          </div>
        </section>

        {/* ── 5. Contact for Queries ── */}
        <section className="alumni-section">
          <div className="alumni-section-header">
            <h2 className="alumni-h2" style={{ color: c.text }}>
              Contact for Queries
            </h2>
          </div>
          <div className="alumni-queries-grid">
            {ALUMNI_CONTACTS.map((contact, i) => (
              <div
                key={i}
                className="alumni-query-card"
                style={{ background: c.surface, border: `1px solid ${c.border}` }}
              >
                <strong className="alumni-query-name" style={{ color: c.text }}>
                  {contact.name}
                </strong>
                {contact.role && (
                  <p className="alumni-query-role" style={{ color: c.textMuted }}>
                    {contact.role}
                  </p>
                )}
                {contact.email && (
                  <p className="alumni-query-email" style={{ margin: '6px 0 0' }}>
                    <a href={`mailto:${contact.email}`} style={{ color: c.accent, fontWeight: 600 }}>
                      {contact.email}
                    </a>
                  </p>
                )}
                {contact.note && (
                  <p className="alumni-query-note" style={{ color: c.textMuted, margin: '4px 0 0', fontSize: 13 }}>
                    {contact.note}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── 6. Source Reference ── */}
        <p className="alumni-source-ref" style={{ color: c.textMuted }}>
          Official Reference:{' '}
          <a
            href={ALUMNI_INTRO.rguktUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: c.accent }}
          >
            rgukt.in — Alumni
          </a>
        </p>
      </div>
    </main>
  );
}
