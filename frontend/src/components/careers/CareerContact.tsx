import { Link } from 'react-router-dom';
import { useSectionTheme } from '../SectionPageLayout';
import { RECRUITMENT_CONTACT } from '../../data/careersContent';

export default function CareerContact() {
  const c = useSectionTheme();

  return (
    <section className="careers-section" id="contact">
      <div
        className="careers-contact-card"
        style={{
          background: c.surface,
          border: `1px solid ${c.border}`,
        }}
      >
        <div className="careers-contact-header">
          <span className="careers-subheading">Recruitment Cell</span>
          <h2 className="careers-heading" style={{ color: c.text }}>
            Recruitment Helpdesk &amp; Inquiries
          </h2>
          <p className="careers-intro" style={{ color: c.textMuted }}>
            For queries regarding ongoing faculty selections, eligibility verification, or application
            technical support, contact the Central Recruitment Office:
          </p>
        </div>

        <div className="careers-contact-grid">
          {/* Card 1: Official Recruitment Office */}
          <div className="careers-contact-info-block" style={{ background: c.surface2, border: `1px solid ${c.border}` }}>
            <div className="careers-contact-icon">🏛️</div>
            <h4 className="careers-contact-block-title" style={{ color: c.text }}>
              {RECRUITMENT_CONTACT.office}
            </h4>
            <p className="careers-contact-block-desc" style={{ color: c.textMuted }}>
              {RECRUITMENT_CONTACT.university}
              <br />
              {RECRUITMENT_CONTACT.address}
            </p>
            <div className="careers-contact-time" style={{ color: c.accent }}>
              🕒 Working Hours: {RECRUITMENT_CONTACT.hours}
            </div>
          </div>

          {/* Card 2: Email Inquiries */}
          <div className="careers-contact-info-block" style={{ background: c.surface2, border: `1px solid ${c.border}` }}>
            <div className="careers-contact-icon">📧</div>
            <h4 className="careers-contact-block-title" style={{ color: c.text }}>
              Official Communication
            </h4>
            <p className="careers-contact-block-desc" style={{ color: c.textMuted }}>
              For recruitment notifications &amp; application queries:
            </p>
            <div className="careers-contact-links">
              <a
                href={`mailto:${RECRUITMENT_CONTACT.email}`}
                className="careers-contact-email"
                style={{ color: c.accent }}
              >
                ✉️ {RECRUITMENT_CONTACT.email}
              </a>
              <a
                href={`mailto:${RECRUITMENT_CONTACT.registrarEmail}`}
                className="careers-contact-email"
                style={{ color: c.primary }}
              >
                ✉️ {RECRUITMENT_CONTACT.registrarEmail}
              </a>
            </div>
          </div>

          {/* Card 3: Portals & Directory */}
          <div className="careers-contact-info-block" style={{ background: c.surface2, border: `1px solid ${c.border}` }}>
            <div className="careers-contact-icon">🌐</div>
            <h4 className="careers-contact-block-title" style={{ color: c.text }}>
              Official Portals &amp; Directory
            </h4>
            <p className="careers-contact-block-desc" style={{ color: c.textMuted }}>
              Access centralized recruitment portals and the full university contacts directory:
            </p>
            <div className="careers-contact-portals">
              <a
                href={RECRUITMENT_CONTACT.apRecruitmentPortal}
                target="_blank"
                rel="noopener noreferrer"
                className="careers-portal-btn"
              >
                <span>AP Universities Portal ↗</span>
              </a>
              <Link to="/contact" className="careers-portal-btn careers-portal-btn--secondary">
                <span>RGUKT Contact Directory →</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
