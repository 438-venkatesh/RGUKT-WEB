import { Link } from 'react-router-dom';
import { useDarkMode } from '../context/DarkModeContext';
import RGUKTLogo from './RGUKTLogo';
import './RGUKTLogo.css';
import './Footer.css';

const QUICK_LINKS = [
  { label: 'About Us',       to: '/about' },
  { label: 'Administration', to: '/administration' },
  { label: 'Research',       to: '/research' },
  { label: 'Contact Us',     to: '/contact' },
  { label: 'Sitemap',        to: '#' },
  { label: 'Privacy Policy', to: '#' },
  { label: 'Terms',          to: '#' },
  { label: 'Accessibility',  to: '#' },
];

const HAPPENINGS = [
  { label: 'News & Events',  to: '/news' },
  { label: 'Careers',        to: '/careers' },
  { label: 'Tenders',        to: '/tenders' },
  { label: 'Announcements',  to: '/announcements' },
  { label: 'Gallery',        to: '/gallery' },
  { label: 'IQAC',           to: '/iqac' },
];

const CAMPUSES = [
  { label: 'Nuzvid',     href: 'https://rguktn.ac.in' },
  { label: 'RK Valley',  href: 'https://rguktrkv.ac.in' },
  { label: 'Srikakulam', href: 'https://rguktsklm.ac.in' },
  { label: 'Ongole',     href: 'https://rguktong.ac.in' },
];

export default function Footer() {
  const { dark } = useDarkMode();
  const accentAlt = dark ? '#F0A030' : '#E8850A';

  return (
    <footer className="apf-root" style={{ borderTop: `3px solid ${accentAlt}` }}>
      <div className="apf-main">
        <div className="apf-grid">

          {/* ── Col 1 — Brand ── */}
          <div className="apf-col-brand">
            <div className="apf-brand">
              <div className="apf-logo-circle" aria-hidden>
                <RGUKTLogo width={30} height={42} />
              </div>
              <div>
                <div className="apf-wordmark">RGUKT — AP</div>
                <div className="apf-brand-sub">Andhra Pradesh</div>
              </div>
            </div>
            <p className="apf-tagline">
              Transforming rural youth into technology leaders since 2008 — across four campuses in Andhra Pradesh.
            </p>
            <div className="apf-badges">
              <span className="apf-badge" style={{ borderColor: accentAlt, color: accentAlt }}>NAAC B+</span>
              <span className="apf-badge apf-badge--dim">UGC 2(f)</span>
            </div>
            <div className="apf-socials">
              <a href="#" aria-label="Facebook" className="apf-social"><FbIcon /></a>
              <a href="#" aria-label="YouTube" className="apf-social"><YtIcon /></a>
              <a href="#" aria-label="X (Twitter)" className="apf-social"><XIcon /></a>
            </div>
          </div>

          {/* ── Col 2 — Quick Links ── */}
          <div>
            <h4 className="apf-heading" style={{ color: accentAlt }}>Quick Links</h4>
            <ul className="apf-links">
              {QUICK_LINKS.map(l => (
                <li key={l.label}><Link to={l.to}>{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* ── Col 3 — Happenings ── */}
          <div>
            <h4 className="apf-heading" style={{ color: accentAlt }}>Happenings</h4>
            <ul className="apf-links">
              {HAPPENINGS.map(l => (
                <li key={l.to}><Link to={l.to}>{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* ── Col 4 — Campuses ── */}
          <div>
            <h4 className="apf-heading" style={{ color: accentAlt }}>Campuses</h4>
            <ul className="apf-links apf-campus-list">
              {CAMPUSES.map(c => (
                <li key={c.label}>
                  <a href={c.href} target="_blank" rel="noopener noreferrer" className="apf-campus-link">
                    <PinIcon />
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="apf-bottom">
        <div className="apf-bottom-inner">
          <span>© 2026 RGUKT-AP · Established by Govt. of Andhra Pradesh · UGC Recognised · NAAC Accredited</span>
          <div className="apf-bottom-links">
            <a href="#">RTI</a>
            <a href="#">Disclaimer</a>
            <a href="#">Developer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ── Inline SVG icons ── */
function FbIcon() {
  return (
    <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M22 12a10 10 0 10-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.5.3v2.7h-1.7c-1.3 0-1.6.7-1.6 1.6V12h2.9l-.5 2.9h-2.4v7A10 10 0 0022 12z" />
    </svg>
  );
}
function YtIcon() {
  return (
    <svg width={17} height={17} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path d="M22.5 8.5s-.2-1.6-.9-2.3c-.8-.9-1.8-.9-2.2-1C16.6 5 12 5 12 5s-4.6 0-7.4.2c-.4.1-1.4.1-2.2 1-.7.7-.9 2.3-.9 2.3S1.3 10.4 1.3 12.3v1.8c0 1.9.2 3.8.2 3.8s.2 1.6.9 2.3c.8.9 1.9.9 2.4 1C6.5 21.4 12 21.4 12 21.4s4.6 0 7.4-.2c.4-.1 1.4-.1 2.2-1 .7-.7.9-2.3.9-2.3s.2-1.9.2-3.8v-1.8c0-1.9-.2-3.8-.2-3.8z" />
      <polygon fill="currentColor" stroke="none" points="10,8.5 16,12 10,15.5" />
    </svg>
  );
}
function XIcon() {
  return (
    <svg width={15} height={15} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.912-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  );
}
function PinIcon() {
  return (
    <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden style={{ flexShrink: 0, marginTop: 1 }}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx={12} cy={10} r={3} />
    </svg>
  );
}
