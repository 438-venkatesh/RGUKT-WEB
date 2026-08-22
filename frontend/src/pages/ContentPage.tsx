import { Link, useLocation } from 'react-router-dom';
import { useDarkMode } from '../context/DarkModeContext';
import { getSitePage } from '../data/sitePages';
import './ContentPage.css';

export default function ContentPage() {
  const { pathname } = useLocation();
  const page = getSitePage(pathname);
  const { dark } = useDarkMode();

  const c = dark ? {
    surface: '#112030',
    bg: '#0B141F',
    text: '#C0D4EE',
    textMuted: 'rgba(192,212,238,0.65)',
    border: 'rgba(192,212,238,0.18)',
    accent: '#E8203C',
  } : {
    surface: '#FFFFFF',
    bg: '#F2F5FA',
    text: '#18243A',
    textMuted: '#526070',
    border: '#C5D3E8',
    accent: '#C8102E',
  };

  if (!page) {
    return (
      <div className="cp-root" style={{ background: c.bg, color: c.text }}>
        <div className="cp-inner">
          <h1 className="cp-title">Page not found</h1>
          <p style={{ color: c.textMuted }}>The page you requested does not exist.</p>
          <Link to="/" className="cp-link" style={{ color: c.accent }}>Return home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cp-root" style={{ background: c.bg, color: c.text }}>
      <div className="cp-inner">
        {page.intro && (
          <p className="cp-intro" style={{ color: c.textMuted }}>{page.intro}</p>
        )}

        {page.sections.map((sec, i) => (
          <section key={i} className="cp-section">
            {sec.heading && <h2 className="cp-h2">{sec.heading}</h2>}
            {sec.body && <p className="cp-body" style={{ color: c.textMuted }}>{sec.body}</p>}
            {sec.bullets && (
              <ul className="cp-list" style={{ color: c.textMuted }}>
                {sec.bullets.map(b => <li key={b}>{b}</li>)}
              </ul>
            )}
            {sec.links && (
              <div className="cp-links">
                {sec.links.map(l => (
                  <Link key={l.href} to={l.href} className="cp-link" style={{ color: c.accent }}>
                    {l.label} →
                  </Link>
                ))}
              </div>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}
