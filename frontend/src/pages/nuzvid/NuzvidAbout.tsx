import { useState, useEffect } from 'react';
import './NuzvidAbout.css';

const SECTIONS = [
  { id: 'about-rgukt', label: 'About RGUKT' },
  { id: 'vision',      label: 'Vision & Mission' },
  { id: 'director',    label: "Director's Message" },
  { id: 'admin',       label: 'Administration' },
  { id: 'map',         label: 'Campus Map' },
  { id: 'naac',        label: 'NAAC Accreditation' },
];

const ADMINS = [
  { name: 'Prof. M L N Rao', role: 'Incharge Director',    email: 'director@rguktn.ac.in' },
  { name: 'Dr. K Ramesh',    role: 'Registrar',             email: 'registrar@rguktn.ac.in' },
  { name: 'Dr. S Bhaskar',   role: 'Dean, Academics',       email: 'dean.acad@rguktn.ac.in' },
  { name: 'Dr. P Latha',     role: 'Dean, Student Affairs', email: 'dean.sa@rguktn.ac.in' },
];

const ORG_NODES = [
  { x: 250, y: 0,   tx: 320, ty: 24,  label: 'Chancellor' },
  { x: 250, y: 50,  tx: 320, ty: 74,  label: 'Vice Chancellor' },
  { x: 250, y: 100, tx: 320, ty: 124, label: 'Registrar' },
  { x: 30,  y: 150, tx: 100, ty: 174, label: 'Heads of Dept.' },
];
const ORG_LINES = [
  { x1: 320, y1: 40,  x2: 320, y2: 50  },
  { x1: 320, y1: 90,  x2: 320, y2: 100 },
  { x1: 320, y1: 140, x2: 100, y2: 150 },
];

export default function NuzvidAbout() {
  const [active, setActive] = useState('about-rgukt');

  /* IntersectionObserver: highlight sidebar link for the in-view section */
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => { entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }); },
      { rootMargin: '-40% 0px -50% 0px' }
    );
    SECTIONS.forEach(({ id }) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);

  return (
    <div className="nza-root">

      {/* ── Sticky sidebar ── */}
      <aside className="nza-aside">
        <nav aria-label="About sections" className="nza-sidenav">
          {SECTIONS.map(s => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`nza-sidelink${active === s.id ? ' nza-sidelink--on' : ''}`}
            >
              {s.label}
            </a>
          ))}
        </nav>
      </aside>

      {/* ── Main content ── */}
      <article className="nza-article">

        {/* ─ About RGUKT ─ */}
        <section id="glance" className="nza-section" aria-label="About RGUKT">
          <div className="nza-kicker">About</div>
          <h1 className="nza-h1">About RGUKT Nuzvid</h1>
          <p className="nza-p">Rajiv Gandhi University of Knowledge Technologies was established in 1956 by the Government of Andhra Pradesh with a clear mandate: extend IIT-level technical education to gifted rural youth who would otherwise never reach it. The Nuzvid campus, on NH-9 in Krishna District, is one of four RGUKT campuses across the state.</p>
          <p className="nza-p">The university is UGC-recognized under Section 2(f) of the UGC Act, 1956, and holds NAAC accreditation at the 'B+' Grade — a mark of its institutional rigor and continuous improvement.</p>
          <blockquote className="nza-blockquote">
            "To identify talent early, regardless of means, and give it a world-class education." — Founding mandate, Govt. of Andhra Pradesh
          </blockquote>
        </section>

        {/* ─ Vision & Mission ─ */}
        <section id="vision" className="nza-section" aria-label="Vision and Mission">
          <h2 className="nza-h2">Vision &amp; Mission</h2>
          <div className="nza-vm-grid">
            <div className="nza-vm-card">
              <span className="nza-vm-icon">
                <svg width={26} height={26} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <circle cx={12} cy={12} r={9} />
                  <circle cx={12} cy={12} r={5} />
                  <circle cx={12} cy={12} r={1.3} fill="currentColor" />
                </svg>
              </span>
              <h3 className="nza-vm-h3">Vision</h3>
              <p className="nza-vm-p">To be a globally respected institution of technical education, known for empowering gifted rural youth of Andhra Pradesh with the skills to lead.</p>
            </div>
            <div className="nza-vm-card">
              <span className="nza-vm-icon">
                <svg width={26} height={26} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <circle cx={12} cy={12} r={9} />
                  <polygon points="14.5 9.5 10 10 9.5 14.5 14 14 14.5 9.5" />
                </svg>
              </span>
              <h3 className="nza-vm-h3">Mission</h3>
              <p className="nza-vm-p">To identify meritorious rural students early and provide them free, IIT-level six-year integrated education across engineering disciplines.</p>
            </div>
          </div>
        </section>

        {/* ─ Director's Message ─ */}
        <section id="director" className="nza-section" aria-label="Director's message">
          <h2 className="nza-h2">Director's Message</h2>
          <img
            src="/hero/hero-convocation.jpg"
            alt="RGUKT Nuzvid convocation ceremony"
            className="nza-dir-banner"
          />
          <p className="nza-dir-quote">
            Every year, hundreds of first-generation learners from villages across Andhra Pradesh walk through our gates carrying nothing but promise. Our task is to meet that promise with rigor, mentorship, and opportunity — and send them out ready to compete anywhere in the world.
          </p>
          <div className="nza-dir-sig">M L N Rao</div>
          <div className="nza-dir-name">Prof. M L N Rao</div>
          <div className="nza-dir-role">Incharge Director, RGUKT Nuzvid</div>
        </section>

        {/* ─ Administration ─ */}
        <section id="admin" className="nza-section" aria-label="Administration">
          <h2 className="nza-h2">Administration</h2>
          <svg
            viewBox="0 0 640 196"
            className="nza-orgchart"
            role="img"
            aria-label="Org chart: Chancellor, Vice Chancellor, Registrar, Heads of Department"
          >
            {ORG_NODES.map(n => (
              <g key={n.label}>
                <rect x={n.x} y={n.y} width={140} height={40} rx={4} className="nza-org-rect" />
                <text x={n.tx} y={n.ty} className="nza-org-text" textAnchor="middle">{n.label}</text>
              </g>
            ))}
            {ORG_LINES.map((l, i) => (
              <line key={i} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} className="nza-org-line" />
            ))}
          </svg>
          <div className="nza-admin-grid">
            {ADMINS.map(a => (
              <div key={a.email} className="nza-admin-card">
                <div className="nza-admin-avatar">
                  <svg width={26} height={26} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                    <circle cx={12} cy={7} r={4} />
                  </svg>
                </div>
                <div className="nza-admin-name">{a.name}</div>
                <div className="nza-admin-role">{a.role}</div>
                <a href={`mailto:${a.email}`} className="nza-admin-email">{a.email}</a>
              </div>
            ))}
          </div>
        </section>

        {/* ─ Campus Map ─ */}
        <section id="map" className="nza-section" aria-label="Campus map">
          <h2 className="nza-h2">Campus Map</h2>
          <div className="nza-map-wrap">
            <iframe
              title="RGUKT Nuzvid campus location"
              src="https://maps.google.com/maps?q=RGUKT+Nuzvid,+NH-9,+Nuzvid,+Andhra+Pradesh&output=embed"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="nza-map-frame"
            />
          </div>
        </section>

        {/* ─ NAAC ─ */}
        <section id="naac" className="nza-section" aria-label="NAAC accreditation">
          <h2 className="nza-h2">NAAC Accreditation</h2>
          <div className="nza-naac-card">
            <div className="nza-naac-badge">B+</div>
            <div>
              <div className="nza-naac-title">NAAC 'B+' Grade Accredited</div>
              <div className="nza-naac-sub">UGC-recognized under Section 2(f) of the UGC Act, 1956</div>
            </div>
          </div>
        </section>

      </article>
    </div>
  );
}
