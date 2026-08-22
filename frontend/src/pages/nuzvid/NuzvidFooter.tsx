import { Link } from 'react-router-dom';
import RGUKTLogo from '../../components/RGUKTLogo';
import {
  NUZVID_ENGINEERING_DEPTS,
  NUZVID_FLAT_LINKS,
  NUZVID_CONTACT_LINKS,
} from '../../data/nuzvidNav';
import '../../components/RGUKTLogo.css';
import './NuzvidFooter.css';

const QUICK_LINKS = [
  { label: 'About', href: '/nuzvid/about' },
  { label: 'Academics', href: '/nuzvid/academics' },
  { label: 'Administration', href: '/nuzvid/administration' },
  { label: 'Departments', href: '/nuzvid/departments' },
  { label: 'Students', href: '/nuzvid/students' },
  ...NUZVID_FLAT_LINKS.filter(l => !l.external).map(l => ({ label: l.label, href: l.href })),
];

const BOTTOM_LINKS = [
  { label: 'RTI', href: '/nuzvid/rti', internal: true },
  { label: 'Gallery', href: '/nuzvid/gallery', internal: true },
  { label: 'Tenders', href: '/nuzvid/tenders', internal: true },
  { label: 'Careers', href: '/nuzvid/careers', internal: true },
];

export default function NuzvidFooter() {
  return (
    <footer className="nzf">
      <div className="nzf-grid">
        <div className="nzf-brand-col">
          <div className="nzf-brand">
            <span className="nzf-logo" aria-hidden>
              <RGUKTLogo width={32} height={46} />
            </span>
            <span className="nzf-brand-name">RGUKT Nuzvid</span>
          </div>
          <p className="nzf-tagline">
            Catering to the Educational Needs of Gifted Rural Youth
          </p>
          <span className="nzf-naac-tag">NAAC B+</span>
          <div className="nzf-socials">
            <a href="#" aria-label="Facebook" className="nzf-social"><FacebookIcon /></a>
            <a href="#" aria-label="YouTube" className="nzf-social"><YouTubeIcon /></a>
            <a href="#" aria-label="X (Twitter)" className="nzf-social"><XIcon /></a>
            <a href="#" aria-label="LinkedIn" className="nzf-social"><LinkedInIcon /></a>
          </div>
        </div>

        <div className="nzf-col">
          <div className="nzf-kicker">Quick Links</div>
          <nav className="nzf-links">
            {QUICK_LINKS.map(l => (
              <Link key={l.href + l.label} to={l.href} className="nzf-link">{l.label}</Link>
            ))}
          </nav>
        </div>

        <div className="nzf-col">
          <div className="nzf-kicker">Departments</div>
          <nav className="nzf-links">
            {NUZVID_ENGINEERING_DEPTS.map(d => (
              <Link key={d.href} to={d.href} className="nzf-link">{d.label.replace(' Engineering', '').replace(' & Engineering', '')}</Link>
            ))}
            <Link to="/nuzvid/departments" className="nzf-link">All Departments →</Link>
          </nav>
        </div>

        <div className="nzf-col">
          <div className="nzf-kicker">Contact</div>
          <nav className="nzf-links">
            {NUZVID_CONTACT_LINKS.map(l => (
              <Link key={l.href} to={l.href} className="nzf-link">{l.label}</Link>
            ))}
          </nav>
          <address className="nzf-address">
            NH-9, Nuzvid, Krishna District,<br />
            Andhra Pradesh 521 202<br />
            <a href="tel:+918656235092" className="nzf-link nzf-contact-link">+91-8656-235092</a><br />
            <a href="mailto:info@rguktn.ac.in" className="nzf-link nzf-contact-link">info@rguktn.ac.in</a>
          </address>
        </div>
      </div>

      <div className="nzf-divider" />

      <div className="nzf-bottom">
        <span className="nzf-copy">
          © 2026 RGUKT Nuzvid · Established by Govt. of AP · UGC Recognized · NAAC B+
        </span>
        <nav className="nzf-bottom-links">
          {BOTTOM_LINKS.map(l => (
            <Link key={l.label} to={l.href} className="nzf-bottom-link">{l.label}</Link>
          ))}
          <Link to="/" className="nzf-bottom-link nzf-back-link">← RGUKT-AP</Link>
        </nav>
      </div>
    </footer>
  );
}

function FacebookIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 12a10 10 0 10-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.5.3v2.7h-1.7c-1.3 0-1.6.7-1.6 1.6V12h2.9l-.5 2.9h-2.4v7A10 10 0 0022 12z"/>
    </svg>
  );
}
function YouTubeIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M22.5 8.5s-.2-1.6-.9-2.3c-.8-.9-1.8-.9-2.2-1C16.6 5 12 5 12 5h0s-4.6 0-7.4.2c-.4.1-1.4.1-2.2 1-.7.7-.9 2.3-.9 2.3S1.3 10.4 1.3 12.3v1.8c0 1.9.2 3.8.2 3.8s.2 1.6.9 2.3c.8.9 1.9.9 2.4 1 1.7.2 7.2.2 7.2.2s4.6 0 7.4-.2c.4-.1 1.4-.1 2.2-1 .7-.7.9-2.3.9-2.3s.2-1.9.2-3.8v-1.8c0-1.9-.2-3.8-.2-3.8z"/>
      <polygon fill="currentColor" stroke="none" points="9.75,8.5 15.5,12 9.75,15.5"/>
    </svg>
  );
}
function XIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.9 2H22l-7.6 8.7L23 22h-6.9l-5.4-7-6.2 7H1.4l8.1-9.3L1 2h7l4.9 6.4L18.9 2z"/>
    </svg>
  );
}
function LinkedInIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5C4.98 4.88 3.9 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.24 8.5h4.5V23h-4.5V8.5zM8 8.5h4.32v1.98h.06c.6-1.14 2.07-2.34 4.26-2.34 4.56 0 5.4 3 5.4 6.9V23h-4.5v-6.9c0-1.65-.03-3.78-2.3-3.78-2.3 0-2.66 1.8-2.66 3.66V23H8V8.5z"/>
    </svg>
  );
}
