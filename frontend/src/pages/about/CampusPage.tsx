import { Link, useLocation } from 'react-router-dom';
import AboutSubLayout, { useAboutTheme } from '../../components/AboutSubLayout';
import { getCampusByPath } from '../../data/aboutContent';
import '../../components/AboutSubLayout.css';
import './CampusPage.css';

export default function CampusPage() {
  const { pathname } = useLocation();
  const campus = getCampusByPath(pathname);
  const c = useAboutTheme();

  if (!campus) {
    return (
      <AboutSubLayout>
        <p>Campus not found.</p>
        <Link to="/about" style={{ color: c.accent }}>Back to About</Link>
      </AboutSubLayout>
    );
  }

  return (
    <AboutSubLayout>
      <div className="campus-hero-img-wrap">
        <img src={campus.image} alt={campus.name} className="campus-hero-img" />
      </div>

      <h1 className="about-sub-h1">{campus.name}</h1>
      <p className="about-sub-intro" style={{ color: c.textMuted }}>{campus.about}</p>

      <div className="campus-stat-row">
        {campus.stats.map(s => (
          <div key={s.label} className="campus-stat-box" style={{ background: c.surface, border: `1px solid ${c.border}` }}>
            <div className="campus-stat-val" style={{ color: c.accent }}>{s.value}</div>
            <div className="campus-stat-lbl" style={{ color: c.textMuted }}>{s.label}</div>
          </div>
        ))}
      </div>

      <section className="campus-section">
        <h2 className="about-sub-h2">Engineering Departments</h2>
        <div className="campus-dept-tags">
          {campus.departments.map(d => (
            <span key={d} className="campus-dept-tag" style={{ background: c.surface2, color: c.text }}>{d}</span>
          ))}
        </div>
      </section>

      <section className="campus-section">
        <h2 className="about-sub-h2">Campus Gallery</h2>
        <div className="campus-gallery-row">
          {campus.galleryImages.map(src => (
            <img key={src} src={src} alt="" className="campus-gallery-thumb" />
          ))}
        </div>
      </section>

      <section className="campus-section">
        <h2 className="about-sub-h2">Contact</h2>
        <ul className="campus-contact-list" style={{ color: c.textMuted }}>
          <li><strong style={{ color: c.text }}>Address:</strong> {campus.address}</li>
          <li><strong style={{ color: c.text }}>Phone:</strong> {campus.phone}</li>
          <li><strong style={{ color: c.text }}>Email:</strong> <a href={`mailto:${campus.email}`} style={{ color: c.accent }}>{campus.email}</a></li>
          <li><strong style={{ color: c.text }}>Established:</strong> {campus.established} · {campus.district}</li>
        </ul>
      </section>

      <div className="campus-actions">
        {campus.internalHref && (
          <Link to={campus.internalHref} className="campus-btn campus-btn-primary" style={{ background: c.accent }}>
            Visit Campus Site
          </Link>
        )}
        {campus.website && (
          <a href={campus.website} target="_blank" rel="noopener noreferrer" className="campus-btn campus-btn-outline" style={{ borderColor: c.accent, color: c.accent }}>
            Official Website →
          </a>
        )}
        <Link to="/contact" className="campus-btn campus-btn-outline" style={{ borderColor: c.border, color: c.text }}>
          Contact Info
        </Link>
      </div>
    </AboutSubLayout>
  );
}
