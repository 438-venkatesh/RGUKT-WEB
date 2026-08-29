import { useDarkMode } from '../context/DarkModeContext';
import {
  CENTRAL_OFFICE_INFO,
  APEX_OFFICER_EMAILS,
  FOUR_CAMPUSES_CONTACTS,
  CONTACT_QUERIES,
} from '../data/contactContent';
import './Contact.css';

export default function Contact() {
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
    <main className="contact-page" style={{ background: c.bg, color: c.text }}>
      <div className="contact-wrap">
        {/* ── 1. University Headquarters & Camp Office ── */}
        <div className="contact-offices-grid">
          <div
            className="contact-office-card"
            style={{ background: c.surface, border: `1px solid ${c.border}` }}
          >
            <span className="contact-section-kicker" style={{ color: c.accent }}>
              Head Office
            </span>
            <h2 className="contact-card-title" style={{ color: c.text }}>
              {CENTRAL_OFFICE_INFO.headOfficeTitle}
            </h2>
            <p className="contact-card-text" style={{ color: c.textMuted }}>
              {CENTRAL_OFFICE_INFO.headOfficeAddress}
            </p>
          </div>

          <div
            className="contact-office-card"
            style={{ background: c.surface, border: `1px solid ${c.border}` }}
          >
            <span className="contact-section-kicker" style={{ color: c.accent }}>
              Camp Office
            </span>
            <h2 className="contact-card-title" style={{ color: c.text }}>
              {CENTRAL_OFFICE_INFO.campOfficeTitle}
            </h2>
            <p className="contact-card-text" style={{ color: c.textMuted }}>
              {CENTRAL_OFFICE_INFO.campOfficeAddress}
            </p>
            <p className="contact-card-phone" style={{ color: c.textMuted, marginTop: 8 }}>
              <strong style={{ color: c.text }}>Phone Number:</strong>{' '}
              <a href={`tel:${CENTRAL_OFFICE_INFO.campOfficePhone}`} style={{ color: c.accent, fontWeight: 600 }}>
                {CENTRAL_OFFICE_INFO.campOfficePhone}
              </a>
            </p>
          </div>
        </div>

        {/* ── 2. Apex University Officers & Email Directory ── */}
        <section className="contact-section">
          <div className="contact-section-header">
            <span className="contact-section-kicker" style={{ color: c.accent }}>
              Official Communication Directory
            </span>
            <h2 className="contact-h2" style={{ color: c.text }}>
              Apex University Administration
            </h2>
            <p className="contact-section-sub" style={{ color: c.textMuted }}>
              Official email contacts for central university directorates and executive leadership.
            </p>
          </div>

          <div className="contact-officers-grid">
            {APEX_OFFICER_EMAILS.map((off) => (
              <div
                key={off.office}
                className="contact-officer-card"
                style={{ background: c.surface, border: `1px solid ${c.border}` }}
              >
                <h3 className="contact-officer-title" style={{ color: c.text }}>
                  {off.office}
                </h3>
                <span className="contact-officer-role" style={{ color: c.textMuted }}>
                  {off.role}
                </span>
                <p className="contact-officer-email" style={{ margin: '8px 0 0' }}>
                  <a href={`mailto:${off.email}`} style={{ color: c.accent, fontWeight: 600 }}>
                    ✉ {off.email}
                  </a>
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 3. Four Constituent Campuses ── */}
        <section className="contact-section">
          <div className="contact-section-header">
            <span className="contact-section-kicker" style={{ color: c.accent }}>
              Constituent Campuses
            </span>
            <h2 className="contact-h2" style={{ color: c.text }}>
              Campus Locations & Offices
            </h2>
            <p className="contact-section-sub" style={{ color: c.textMuted }}>
              Constituent residential campuses under Rajiv Gandhi University of Knowledge Technologies.
            </p>
          </div>

          <div className="contact-campuses-grid">
            {FOUR_CAMPUSES_CONTACTS.map((campus) => (
              <div
                key={campus.campus}
                className="contact-campus-card"
                style={{ background: c.surface, border: `1px solid ${c.border}` }}
              >
                <span className="contact-campus-badge" style={{ color: c.accent }}>
                  {campus.badge}
                </span>
                <h3 className="contact-campus-name" style={{ color: c.text }}>
                  {campus.campus}
                </h3>
                <p className="contact-campus-location" style={{ color: c.textMuted }}>
                  {campus.location}
                </p>
                <p className="contact-campus-email" style={{ margin: '8px 0 0' }}>
                  <a href={`mailto:${campus.email}`} style={{ color: c.accent, fontWeight: 600 }}>
                    ✉ {campus.email}
                  </a>
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 4. Contact for Queries ── */}
        <section className="contact-section">
          <div className="contact-section-header">
            <h2 className="contact-h2" style={{ color: c.text }}>
              Contact for Queries
            </h2>
          </div>
          <div className="contact-queries-grid">
            {CONTACT_QUERIES.map((contact, i) => (
              <div
                key={i}
                className="contact-query-card"
                style={{ background: c.surface, border: `1px solid ${c.border}` }}
              >
                <strong className="contact-query-name" style={{ color: c.text }}>
                  {contact.name}
                </strong>
                {contact.role && (
                  <p className="contact-query-role" style={{ color: c.textMuted }}>
                    {contact.role}
                  </p>
                )}
                {contact.email && (
                  <p className="contact-query-email" style={{ margin: '6px 0 0' }}>
                    <a href={`mailto:${contact.email}`} style={{ color: c.accent, fontWeight: 600 }}>
                      {contact.email}
                    </a>
                  </p>
                )}
                {contact.phone && (
                  <p className="contact-query-phone" style={{ color: c.textMuted, margin: '4px 0 0', fontSize: 13.5 }}>
                    <strong>Phone:</strong> <a href={`tel:${contact.phone}`} style={{ color: c.text }}>{contact.phone}</a>
                  </p>
                )}
                {contact.note && (
                  <p className="contact-query-note" style={{ color: c.textMuted, margin: '4px 0 0', fontSize: 13 }}>
                    {contact.note}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── 5. Source Reference ── */}
        <p className="contact-source-ref" style={{ color: c.textMuted }}>
          Official Reference:{' '}
          <a
            href={CENTRAL_OFFICE_INFO.rguktUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: c.accent }}
          >
            rgukt.in — Contact Us
          </a>
        </p>
      </div>
    </main>
  );
}
