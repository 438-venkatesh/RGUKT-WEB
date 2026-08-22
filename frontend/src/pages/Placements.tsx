import { useState } from 'react';
import { useDarkMode } from '../context/DarkModeContext';
import './Placements.css';

/* ─── Static data ─── */
const HERO_STATS = [
  { value: '9,800+',  label: 'Students Placed' },
  { value: '₹4.6 LPA', label: 'Avg CTC' },
  { value: '400+',    label: 'Companies' },
];

const YEAR_DATA = [
  { year: '2020', pct: 48 },
  { year: '2021', pct: 54 },
  { year: '2022', pct: 60 },
  { year: '2023', pct: 63 },
  { year: '2024', pct: 66 },
  { year: '2025', pct: 70 },
];

const CAMPUS_ROWS = [
  { campus: 'Nuzvid',     rate: 68, top: 'Infosys' },
  { campus: 'RK Valley',  rate: 64, top: 'TCS' },
  { campus: 'Srikakulam', rate: 58, top: 'Wipro' },
  { campus: 'Ongole',     rate: 55, top: 'HCL' },
];

const RECRUITERS = [
  'Infosys', 'TCS', 'Wipro', 'Tech Mahindra',
  'L&T', 'HCL', 'Cognizant', 'BHEL', 'HDFC Bank', 'Amazon',
];

export default function Placements() {
  const { dark } = useDarkMode();
  const [sent, setSent]         = useState(false);
  const [company, setCompany]   = useState('');
  const [email, setEmail]       = useState('');

  const c = dark ? {
    primary:   '#0B141F',
    accent:    '#E8203C',
    accentAlt: '#F0A030',
    surface:   '#112030',
    surface2:  '#18293c',
    bg:        '#0B141F',
    text:      '#C0D4EE',
    textMuted: 'rgba(192,212,238,0.65)',
    border:    'rgba(192,212,238,0.18)',
  } : {
    primary:   '#0A2744',
    accent:    '#C8102E',
    accentAlt: '#E8850A',
    surface:   '#FFFFFF',
    surface2:  '#E8EEF8',
    bg:        '#F2F5FA',
    text:      '#18243A',
    textMuted: '#526070',
    border:    '#C5D3E8',
  };

  /* Chart bar geometry (matches design's renderVals exactly) */
  const chartBars = YEAR_DATA.map((d, i) => {
    const h = d.pct * 1.8;
    return {
      x:    20 + i * 90,
      y:    190 - h,
      h,
      tx:   50 + i * 90,
      ly:   185 - h,
      year: d.year,
      pct:  d.pct + '%',
    };
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <main
      className="place-page"
      style={{ background: c.bg, color: c.text, fontFamily: 'Inter,system-ui,sans-serif' }}
    >

      {/* ── Stats bar ── */}
      <section className="place-stats-bar" style={{ background: c.primary }}>
        <div className="place-hero-inner">
          <div className="place-hero-stats">
            {HERO_STATS.map(s => (
              <div key={s.label} className="place-hero-stat">
                <div className="place-hero-stat-value" style={{ color: c.accentAlt }}>
                  {s.value}
                </div>
                <div className="place-hero-stat-label">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Content area ── */}
      <div className="place-content">

        {/* 1. Bar chart */}
        <section className="place-section">
          <h2 className="place-h2" style={{ color: c.text }}>Year-wise Placement Rate</h2>
          <svg
            viewBox="0 0 560 220"
            className="place-chart"
            role="img"
            aria-label="Bar chart of placement rate by year"
          >
            {chartBars.map(b => (
              <g key={b.year}>
                <rect
                  x={b.x} y={b.y}
                  width={60} height={b.h}
                  fill={c.primary} rx={3}
                />
                <text
                  x={b.tx} y={200}
                  fontSize={12} textAnchor="middle"
                  fill={c.textMuted}
                >
                  {b.year}
                </text>
                <text
                  x={b.tx} y={b.ly}
                  fontSize={12} fontWeight={700} textAnchor="middle"
                  fill={c.text}
                >
                  {b.pct}
                </text>
              </g>
            ))}
          </svg>
        </section>

        {/* 2. Campus-wise table */}
        <section className="place-section">
          <h2 className="place-h2" style={{ color: c.text }}>Campus-wise Placement Rate</h2>
          <div
            className="place-table-wrap"
            style={{ border: `1px solid ${c.border}` }}
          >
            <table className="place-table">
              <thead>
                <tr style={{ background: c.surface2, textAlign: 'left' }}>
                  <th className="place-th" style={{ color: c.text }}>Campus</th>
                  <th className="place-th" style={{ color: c.text }}>Placement Rate</th>
                  <th className="place-th" style={{ color: c.text }}>Top Recruiter</th>
                </tr>
              </thead>
              <tbody>
                {CAMPUS_ROWS.map(r => (
                  <tr key={r.campus} style={{ borderTop: `1px solid ${c.border}` }}>
                    <td className="place-td place-td--bold" style={{ color: c.text }}>
                      {r.campus}
                    </td>
                    <td className="place-td place-td--mono" style={{ color: c.text }}>
                      {r.rate}%
                    </td>
                    <td className="place-td" style={{ color: c.textMuted }}>
                      {r.top}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 3. Recruiter grid */}
        <section className="place-section">
          <h2 className="place-h2" style={{ color: c.text }}>Recruiters</h2>
          <div className="place-recruiters-grid">
            {RECRUITERS.map(r => (
              <div
                key={r}
                className="place-recruiter-card"
                style={{ border: `1px solid ${c.border}`, background: c.surface, color: c.text }}
              >
                {r}
              </div>
            ))}
          </div>
        </section>

        {/* 4. Contact CDPC form */}
        <section
          className="place-form-section"
          style={{ background: c.surface2 }}
        >
          <h2 className="place-h2 place-form-h2" style={{ color: c.text }}>Contact CDPC</h2>
          <form className="place-form" onSubmit={handleSubmit}>
            <input
              required
              placeholder="Company Name"
              value={company}
              onChange={e => setCompany(e.target.value)}
              className="place-input"
              style={{
                border:     `1px solid ${c.border}`,
                background: c.surface,
                color:      c.text,
              }}
            />
            <input
              required
              type="email"
              placeholder="Contact Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="place-input"
              style={{
                border:     `1px solid ${c.border}`,
                background: c.surface,
                color:      c.text,
              }}
            />
            <button
              type="submit"
              className="place-submit-btn"
              style={{ background: c.accent }}
            >
              Contact CDPC
            </button>
            {sent && (
              <p className="place-sent-msg" style={{ color: c.accent }}>
                Thanks — CDPC will reach out shortly.
              </p>
            )}
          </form>
        </section>

      </div>
    </main>
  );
}
