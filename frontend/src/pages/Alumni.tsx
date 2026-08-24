import { useState } from 'react';
import { useDarkMode } from '../context/DarkModeContext';
import {
  ALUMNI_INTRO,
  ALUMNI_PILLARS,
  CAMPUS_ALUMNI_NETWORKS,
  FEATURED_ALUMNI,
  RECENT_ALUMNI_ACTIVITIES,
} from '../data/alumniContent';
import type { FeaturedAlumnus } from '../data/alumniContent';
import './Alumni.css';

type CampusFilter = 'All' | 'Nuzvid' | 'RK Valley' | 'Ongole' | 'Srikakulam';

const FILTERS: CampusFilter[] = ['All', 'Nuzvid', 'RK Valley', 'Ongole', 'Srikakulam'];

export default function Alumni() {
  const { dark } = useDarkMode();
  const [selectedCampus, setSelectedCampus] = useState<CampusFilter>('All');

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

  const filteredAlumni: FeaturedAlumnus[] =
    selectedCampus === 'All'
      ? FEATURED_ALUMNI
      : FEATURED_ALUMNI.filter((a) => a.campus === selectedCampus);

  return (
    <main className="alumni-page" style={{ background: c.bg, color: c.text }}>
      <div className="alumni-wrap">
        {/* ── 1. Two-Line Hero Banner ── */}
        <div className="alumni-hero" style={{ border: `1px solid ${c.border}` }}>
          <img
            src="/students/quantum-workshop-1.jpg"
            alt="RGUKT Alumni & Student Knowledge Exchange"
            className="alumni-hero-img"
          />
          <div className="alumni-hero-overlay" />
          <div className="alumni-hero-text">
            <span className="alumni-hero-eyebrow">Alumni Engagement & Network</span>
            <h1 className="alumni-hero-title">
              Alumni
              <br />
              @RGUKT-AP
            </h1>
          </div>
        </div>

        {/* ── 2. Introduction & Purpose ── */}
        <section
          className="alumni-intro-card"
          style={{ background: c.surface, border: `1px solid ${c.border}` }}
        >
          <p className="alumni-intro-lead" style={{ color: c.text }}>
            {ALUMNI_INTRO.lead}
          </p>
          <p className="alumni-intro-purpose" style={{ color: c.textMuted }}>
            {ALUMNI_INTRO.purpose}
          </p>
        </section>

        {/* ── 3. How Alumni Support RGUKT & Current Students (Pillars) ── */}
        <section className="alumni-section">
          <div className="alumni-section-header">
            <h2 className="alumni-h2" style={{ color: c.text }}>
              How Alumni Support RGUKT & Students
            </h2>
            <p className="alumni-section-sub" style={{ color: c.textMuted }}>
              Structured student mentorship, technical webinars, research guidance, and competitive exam coaching.
            </p>
          </div>

          <div className="alumni-pillars-grid">
            {ALUMNI_PILLARS.map((pillar, idx) => (
              <div
                key={idx}
                className="alumni-pillar-card"
                style={{ background: c.surface, border: `1px solid ${c.border}` }}
              >
                <span className="alumni-pillar-tagline" style={{ color: c.accent }}>
                  {pillar.tagline}
                </span>
                <h3 className="alumni-pillar-title" style={{ color: c.text }}>
                  {pillar.title}
                </h3>
                <p className="alumni-pillar-desc" style={{ color: c.textMuted }}>
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 4. Alumni Across Four Campuses ── */}
        <section className="alumni-section">
          <div className="alumni-section-header">
            <h2 className="alumni-h2" style={{ color: c.text }}>
              Alumni Networks Across Four Campuses
            </h2>
            <p className="alumni-section-sub" style={{ color: c.textMuted }}>
              Campus-specific registered associations, international relations cells, and dedicated faculty coordination desks.
            </p>
          </div>

          <div className="campus-ecosystem-grid">
            {CAMPUS_ALUMNI_NETWORKS.map((campusItem, idx) => (
              <div
                key={idx}
                className="campus-ecosystem-card"
                style={{ background: c.surface, border: `1px solid ${c.border}` }}
              >
                <span
                  className="campus-card-badge"
                  style={{ background: c.cardBadgeBg, color: c.cardBadgeColor }}
                >
                  {campusItem.campus}
                </span>
                <h3 className="campus-card-title" style={{ color: c.text }}>
                  {campusItem.associationName}
                </h3>
                <div className="campus-card-assoc" style={{ color: c.accent }}>
                  {campusItem.structure}
                </div>

                <div className="campus-card-details">
                  {campusItem.coordinator && (
                    <p style={{ color: c.text }}>
                      <strong>Coordinator:</strong> {campusItem.coordinator}
                    </p>
                  )}
                  <p style={{ color: c.textMuted }}>
                    <strong>Office:</strong> {campusItem.officeLocation}
                  </p>
                  <p style={{ color: c.textMuted }}>
                    <strong>Official Email:</strong>{' '}
                    <a
                      href={`mailto:${campusItem.email}`}
                      style={{ color: c.accent, fontWeight: 600 }}
                    >
                      {campusItem.email}
                    </a>
                  </p>
                </div>

                <h4 className="campus-initiatives-title" style={{ color: c.text }}>
                  Key Initiatives:
                </h4>
                <ul className="campus-initiatives-list" style={{ color: c.textMuted }}>
                  {campusItem.keyInitiatives.map((init, iIdx) => (
                    <li key={iIdx}>{init}</li>
                  ))}
                </ul>

                <div className="campus-card-actions">
                  {campusItem.portalUrl && (
                    <a
                      href={campusItem.portalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="campus-action-btn"
                      style={{ background: c.primary, color: '#ffffff' }}
                    >
                      Official Portal ↗
                    </a>
                  )}
                  {campusItem.registrationUrl && (
                    <a
                      href={campusItem.registrationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="campus-action-btn"
                      style={{ background: c.accent, color: '#ffffff' }}
                    >
                      Join / Register ↗
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 5. Featured Alumni Achievers (Strictly Verified) ── */}
        <section className="alumni-section">
          <div className="alumni-section-header">
            <h2 className="alumni-h2" style={{ color: c.text }}>
              Featured Alumni Achievers
            </h2>
            <p className="alumni-section-sub" style={{ color: c.textMuted }}>
              Strictly verified graduates demonstrating leadership in Civil Services, Aerospace/Science, Technology Startups, and Core Engineering.
            </p>
          </div>

          {/* Campus Filter Buttons */}
          <div className="alumni-filters">
            {FILTERS.map((f) => {
              const isActive = selectedCampus === f;
              return (
                <button
                  key={f}
                  className="alumni-filter-btn"
                  onClick={() => setSelectedCampus(f)}
                  style={{
                    border: `1px solid ${isActive ? c.accent : c.border}`,
                    background: isActive ? c.primary : c.surface,
                    color: isActive ? '#ffffff' : c.text,
                  }}
                >
                  {f === 'All' ? 'All Campuses' : `${f} Campus`}
                </button>
              );
            })}
          </div>

          {/* Alumni Grid */}
          <div className="featured-alumni-grid">
            {filteredAlumni.map((alumnus, idx) => (
              <div
                key={idx}
                className="alumnus-card"
                style={{ background: c.surface, border: `1px solid ${c.border}` }}
              >
                <div className="alumnus-header">
                  <h3 className="alumnus-name" style={{ color: c.text }}>
                    {alumnus.name}
                  </h3>
                  <span
                    className="alumnus-campus-tag"
                    style={{ background: c.tagBg, color: c.tagColor }}
                  >
                    {alumnus.campus}
                  </span>
                </div>

                <div className="alumnus-role" style={{ color: c.accent }}>
                  {alumnus.role}
                </div>
                <div className="alumnus-org" style={{ color: c.text }}>
                  {alumnus.organization}
                </div>

                <div className="alumnus-degree" style={{ borderColor: c.border, color: c.textMuted }}>
                  <strong>Graduation:</strong> {alumnus.degree}
                </div>

                <p className="alumnus-achievement" style={{ color: c.text }}>
                  <strong>Key Distinction:</strong> {alumnus.achievement}
                </p>

                {alumnus.contribution && (
                  <p className="alumnus-contribution" style={{ color: c.textMuted }}>
                    <strong>Alma Mater Connect:</strong> {alumnus.contribution}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── 6. Recent Alumni Activities & Collaborations ── */}
        <section className="alumni-section">
          <div className="alumni-section-header">
            <h2 className="alumni-h2" style={{ color: c.text }}>
              Recent Alumni Activities & Engagements
            </h2>
            <p className="alumni-section-sub" style={{ color: c.textMuted }}>
              Highlights of recent homecomings, webinars, and technical mentorship drives across campuses.
            </p>
          </div>

          <div className="activities-grid">
            {RECENT_ALUMNI_ACTIVITIES.map((act, idx) => (
              <div
                key={idx}
                className="activity-card"
                style={{ background: c.surface, border: `1px solid ${c.border}` }}
              >
                <div className="activity-header">
                  <span className="activity-campus" style={{ color: c.accent }}>
                    {act.campus}
                  </span>
                  <span className="activity-type" style={{ color: c.textMuted }}>
                    {act.type}
                  </span>
                </div>
                <h3 className="activity-title" style={{ color: c.text }}>
                  {act.title}
                </h3>
                <p className="activity-desc" style={{ color: c.textMuted }}>
                  {act.description}
                </p>
                <p className="activity-impact" style={{ color: c.text }}>
                  <strong>Impact:</strong> {act.impact}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 7. Join & Connect Call-to-Action ── */}
        <section
          className="alumni-cta-banner"
          style={{ background: c.primary, color: '#ffffff' }}
        >
          <div className="alumni-cta-content">
            <div>
              <h2 className="alumni-cta-title">Join the Official RGUKT Alumni Network</h2>
              <p className="alumni-cta-desc" style={{ color: 'rgba(255, 255, 255, 0.82)' }}>
                Are you an alumnus of RGUKT Nuzvid, RK Valley, Ongole, or Srikakulam? Reconnect with your alma mater, mentor aspiring rural engineers, update your contact details, and participate in campus chapters.
              </p>
            </div>

            <div className="alumni-cta-actions">
              <a
                href="https://alumni.rguktn.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="alumni-cta-btn"
                style={{ background: '#ffffff', color: c.primary }}
              >
                Access Nuzvid IAR Portal ↗
              </a>
              <a
                href="https://forms.gle/vhQPp74RcVQZzm7X7"
                target="_blank"
                rel="noopener noreferrer"
                className="alumni-cta-btn"
                style={{ background: c.accent, color: '#ffffff' }}
              >
                Alumni Registration Form ↗
              </a>
            </div>

            <div className="alumni-cta-emails">
              <span>
                <strong>Campus Desks:</strong>
              </span>
              <span>
                Nuzvid: <a href="mailto:alumni@rguktn.ac.in" className="alumni-cta-email-link" style={{ color: '#ffffff' }}>alumni@rguktn.ac.in</a>
              </span>
              <span>
                RK Valley: <a href="mailto:alumni@rguktrkv.ac.in" className="alumni-cta-email-link" style={{ color: '#ffffff' }}>alumni@rguktrkv.ac.in</a>
              </span>
              <span>
                Ongole: <a href="mailto:alumni@rguktong.ac.in" className="alumni-cta-email-link" style={{ color: '#ffffff' }}>alumni@rguktong.ac.in</a>
              </span>
              <span>
                Srikakulam: <a href="mailto:alumni@rguktsklm.ac.in" className="alumni-cta-email-link" style={{ color: '#ffffff' }}>alumni@rguktsklm.ac.in</a>
              </span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

