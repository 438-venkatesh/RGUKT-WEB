import { useState } from 'react';
import { useDarkMode } from '../context/DarkModeContext';
import {
  CENTRAL_OFFICE_INFO,
  FOUR_CAMPUSES_CONTACTS,
  FUNCTIONAL_DESKS,
} from '../data/contactContent';
import './Contact.css';

export default function Contact() {
  const { dark } = useDarkMode();
  const [sent, setSent] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [targetDesk, setTargetDesk] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

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
        cardBadgeBg: 'rgba(30, 58, 138, 0.4)',
        cardBadgeColor: '#93C5FD',
        bannerBg: 'rgba(30, 58, 138, 0.25)',
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
        cardBadgeBg: '#EEF2FF',
        cardBadgeColor: '#1E40AF',
        bannerBg: '#EEF2FF',
      };

  const inputStyle = {
    border: `1px solid ${c.border}`,
    background: c.surface,
    color: c.text,
  };

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <main className="contact-page" style={{ background: c.bg, color: c.text }}>
      <div className="contact-wrap">
        {/* ── 1. Two-Line Hero Banner ── */}
        <div className="contact-hero" style={{ border: `1px solid ${c.border}` }}>
          <img
            src="/gallery/gallery-2.jpg"
            alt="RGUKT-AP Communication & Contact Directory"
            className="contact-hero-img"
          />
          <div className="contact-hero-overlay" />
          <div className="contact-hero-text">
            <span className="contact-hero-eyebrow">Communication & Directory</span>
            <h1 className="contact-hero-title">
              Contact Us
              <br />
              @RGUKT-AP
            </h1>
          </div>
        </div>

        {/* ── 2. Central University Headquarters ── */}
        <section className="contact-section">
          <div
            className="contact-central-card"
            style={{ background: c.surface, border: `1px solid ${c.border}` }}
          >
            <div className="contact-central-top">
              <div>
                <h2 className="contact-central-title" style={{ color: c.text }}>
                  {CENTRAL_OFFICE_INFO.name}
                </h2>
                <p className="contact-central-sub" style={{ color: c.accent }}>
                  {CENTRAL_OFFICE_INFO.subtitle}
                </p>
              </div>
              <span
                className="contact-central-badge"
                style={{ background: c.cardBadgeBg, color: c.cardBadgeColor }}
              >
                Central Helpline: {CENTRAL_OFFICE_INFO.phone}
              </span>
            </div>

            <div className="contact-central-grid">
              <div className="contact-central-block">
                <p style={{ color: c.text }}>
                  <strong>Main Administrative Headquarters:</strong>
                </p>
                <p style={{ color: c.textMuted }}>{CENTRAL_OFFICE_INFO.address}</p>
                <p style={{ color: c.text, marginTop: '8px' }}>
                  <strong>Camp / Transit Office:</strong>
                </p>
                <p style={{ color: c.textMuted }}>{CENTRAL_OFFICE_INFO.transitOffice}</p>
              </div>

              <div className="contact-central-block">
                <p style={{ color: c.text }}>
                  <strong>Apex Leadership & Central Desks:</strong>
                </p>
                <div className="contact-central-emails">
                  <span>
                    Chancellor:{' '}
                    <a
                      href={`mailto:${CENTRAL_OFFICE_INFO.chancellorEmail}`}
                      className="contact-link"
                      style={{ color: c.accent }}
                    >
                      {CENTRAL_OFFICE_INFO.chancellorEmail}
                    </a>
                  </span>
                  <span>
                    Vice Chancellor:{' '}
                    <a
                      href={`mailto:${CENTRAL_OFFICE_INFO.vcEmail}`}
                      className="contact-link"
                      style={{ color: c.accent }}
                    >
                      {CENTRAL_OFFICE_INFO.vcEmail}
                    </a>
                  </span>
                  <span>
                    Registrar:{' '}
                    <a
                      href={`mailto:${CENTRAL_OFFICE_INFO.registrarEmail}`}
                      className="contact-link"
                      style={{ color: c.accent }}
                    >
                      {CENTRAL_OFFICE_INFO.registrarEmail}
                    </a>
                  </span>
                  <span>
                    General Inquiries:{' '}
                    <a
                      href={`mailto:${CENTRAL_OFFICE_INFO.generalEmail}`}
                      className="contact-link"
                      style={{ color: c.accent }}
                    >
                      {CENTRAL_OFFICE_INFO.generalEmail}
                    </a>
                  </span>
                </div>
                <p style={{ color: c.textMuted, marginTop: '8px', fontSize: 12 }}>
                  🕒 {CENTRAL_OFFICE_INFO.workingHours}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. Four Constituent Campuses ── */}
        <section className="contact-section">
          <div className="contact-section-header">
            <h2 className="contact-h2" style={{ color: c.text }}>
              Constituent Campuses Directory
            </h2>
            <p className="contact-section-sub" style={{ color: c.textMuted }}>
              Direct leadership, administrative, and academic contact details for all four RGUKT campuses.
            </p>
          </div>

          <div className="contact-campus-grid">
            {FOUR_CAMPUSES_CONTACTS.map((cm) => (
              <div
                key={cm.campus}
                className="contact-campus-card"
                style={{ background: c.surface, border: `1px solid ${c.border}` }}
              >
                <span
                  className="contact-campus-badge"
                  style={{ background: c.cardBadgeBg, color: c.cardBadgeColor }}
                >
                  {cm.badge}
                </span>
                <h3 className="contact-campus-title" style={{ color: c.text }}>
                  {cm.campus}
                </h3>
                <p className="contact-campus-loc" style={{ color: c.textMuted }}>
                  {cm.location}
                </p>

                <div className="contact-campus-officers">
                  <p style={{ color: c.text }}>
                    <strong>{cm.directorContact.title}:</strong>{' '}
                    <a
                      href={`mailto:${cm.directorContact.email}`}
                      className="contact-link"
                      style={{ color: c.accent }}
                    >
                      {cm.directorContact.email}
                    </a>
                    <br />
                    <span style={{ color: c.textMuted, fontSize: 12 }}>
                      Phone: {cm.directorContact.phone}
                    </span>
                  </p>

                  <p style={{ color: c.text }}>
                    <strong>{cm.adminContact.title}:</strong>{' '}
                    <a
                      href={`mailto:${cm.adminContact.email}`}
                      className="contact-link"
                      style={{ color: c.accent }}
                    >
                      {cm.adminContact.email}
                    </a>
                    <br />
                    <span style={{ color: c.textMuted, fontSize: 12 }}>
                      Phone: {cm.adminContact.phone}
                    </span>
                  </p>

                  <p style={{ color: c.text }}>
                    <strong>Academic Section:</strong>{' '}
                    <a
                      href={`mailto:${cm.academicsEmail}`}
                      className="contact-link"
                      style={{ color: c.accent }}
                    >
                      {cm.academicsEmail}
                    </a>
                  </p>
                </div>

                <div className="contact-campus-links" style={{ borderColor: c.border }}>
                  <a
                    href={cm.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                    style={{ color: c.primary }}
                  >
                    Campus Portal ↗
                  </a>
                  <a
                    href={cm.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                    style={{ color: c.accent }}
                  >
                    Google Maps 📍
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 4. Key Functional Desks ── */}
        <section className="contact-section">
          <div className="contact-section-header">
            <h2 className="contact-h2" style={{ color: c.text }}>
              Functional Desks & Special Cells
            </h2>
            <p className="contact-section-sub" style={{ color: c.textMuted }}>
              Specialized communication points for admissions, examinations, placements, research, and student welfare.
            </p>
          </div>

          <div className="contact-desks-grid">
            {FUNCTIONAL_DESKS.map((d, idx) => (
              <div
                key={idx}
                className="contact-desk-card"
                style={{ background: c.surface, border: `1px solid ${c.border}` }}
              >
                <span
                  className="contact-desk-badge"
                  style={{ background: c.cardBadgeBg, color: c.cardBadgeColor }}
                >
                  {d.badge}
                </span>
                <h3 className="contact-desk-title" style={{ color: c.text }}>
                  {d.department}
                </h3>
                <p className="contact-desk-purpose" style={{ color: c.textMuted }}>
                  {d.purpose}
                </p>

                <div className="contact-desk-contact">
                  <a
                    href={`mailto:${d.email}`}
                    className="contact-link"
                    style={{ color: c.accent }}
                  >
                    {d.email}
                  </a>
                  {d.alternateEmail && (
                    <>
                      {' | '}
                      <a
                        href={`mailto:${d.alternateEmail}`}
                        className="contact-link"
                        style={{ color: c.accent }}
                      >
                        {d.alternateEmail}
                      </a>
                    </>
                  )}
                  {d.phone && (
                    <div style={{ color: c.textMuted, fontSize: 12, marginTop: 2 }}>
                      Phone: {d.phone}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 5. Simple General Enquiry Form ── */}
        <section className="contact-section">
          <div
            className="contact-form-card"
            style={{ background: c.surface, border: `1px solid ${c.border}` }}
          >
            <h2 className="contact-h2" style={{ color: c.text }}>
              Send a General Enquiry
            </h2>
            <p className="contact-section-sub" style={{ color: c.textMuted }}>
              Submit your inquiry to the relevant university office. Our administrative team will respond promptly.
            </p>

            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                required
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="contact-input"
                style={inputStyle}
              />
              <input
                required
                type="email"
                placeholder="Official Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="contact-input"
                style={inputStyle}
              />

              <input
                type="tel"
                placeholder="Contact Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="contact-input"
                style={inputStyle}
              />

              <select
                value={targetDesk}
                onChange={(e) => setTargetDesk(e.target.value)}
                className="contact-select"
                style={inputStyle}
              >
                <option value="">Select Target Office / Campus</option>
                <option value="Central Administration">Central Administration (Vijayawada / RK Valley)</option>
                <option value="Nuzvid Campus">RGUKT Nuzvid Campus</option>
                <option value="RK Valley Campus">RGUKT RK Valley Campus</option>
                <option value="Ongole Campus">RGUKT Ongole Campus</option>
                <option value="Srikakulam Campus">RGUKT Srikakulam Campus</option>
                <option value="Admissions Cell">Admissions & Counseling Cell</option>
                <option value="Examinations">Examinations & Transcripts</option>
                <option value="Placements">Placements & Career Cell (CDPC)</option>
                <option value="Research">Research & Development Directorate</option>
                <option value="Anti-Ragging / ICC">Anti-Ragging & ICC Grievance Cell</option>
              </select>

              <input
                required
                placeholder="Subject of Enquiry"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="contact-input contact-input--full"
                style={inputStyle}
              />

              <textarea
                required
                placeholder="Your detailed message or inquiry..."
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="contact-textarea"
                style={inputStyle}
              />

              <div className="contact-submit-row">
                <button
                  type="submit"
                  className="contact-submit-btn"
                  style={{ background: c.primary, color: '#ffffff' }}
                >
                  Submit Enquiry ✉
                </button>
                {sent && (
                  <p className="contact-sent-msg" style={{ color: '#059669' }}>
                    ✓ Thank you! Your enquiry has been received and routed to the designated university office.
                  </p>
                )}
              </div>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}

