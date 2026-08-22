import { useState } from 'react';
import { useDarkMode } from '../context/DarkModeContext';
import './Alumni.css';

/* ─── Types ─── */
type Campus = 'All' | 'Nuzvid' | 'RK Valley' | 'Srikakulam' | 'Ongole';

interface AlumniPerson {
  name:   string;
  detail: string;
  campus: Exclude<Campus, 'All'>;
}

/* ─── Static data ─── */
const ALUMNI: AlumniPerson[] = [
  { name: 'K. Sravani, IAS',  detail: 'UPSC CSE 2024 Topper',       campus: 'Nuzvid'     },
  { name: 'M. Ravi Teja',     detail: 'Senior SDE, Amazon',          campus: 'RK Valley'  },
  { name: 'P. Anitha',        detail: 'Founder, AgriTech Startup',   campus: 'Srikakulam' },
  { name: 'S. Naveen Kumar',  detail: 'Research Scientist, ISRO',    campus: 'Ongole'     },
  { name: 'D. Lakshmi',       detail: 'IAS, Andhra Pradesh Cadre',   campus: 'Nuzvid'     },
  { name: 'B. Praveen',       detail: 'Product Manager, Google',     campus: 'RK Valley'  },
];

const FILTERS: Campus[] = ['All', 'Nuzvid', 'RK Valley', 'Srikakulam', 'Ongole'];

export default function Alumni() {
  const { dark } = useDarkMode();
  const [campus, setCampus] = useState<Campus>('All');

  const c = dark ? {
    primary:   '#0B141F',
    accent:    '#E8203C',
    surface:   '#112030',
    surface2:  '#18293c',
    bg:        '#0B141F',
    text:      '#C0D4EE',
    textMuted: 'rgba(192,212,238,0.65)',
    border:    'rgba(192,212,238,0.18)',
  } : {
    primary:   '#0A2744',
    accent:    '#C8102E',
    surface:   '#FFFFFF',
    surface2:  '#E8EEF8',
    bg:        '#F2F5FA',
    text:      '#18243A',
    textMuted: '#526070',
    border:    '#C5D3E8',
  };

  const visible = campus === 'All'
    ? ALUMNI
    : ALUMNI.filter(a => a.campus === campus);

  return (
    <main
      className="alumni-page"
      style={{ background: c.bg, color: c.text, fontFamily: 'Inter,system-ui,sans-serif' }}
    >
      <div className="alumni-wrap">

        {/* Campus filter pills */}
        <div className="alumni-filters">
          {FILTERS.map(f => {
            const isActive = campus === f;
            return (
              <button
                key={f}
                className="alumni-filter-btn"
                onClick={() => setCampus(f)}
                style={{
                  border:     `1px solid ${c.border}`,
                  background: isActive ? c.primary : 'transparent',
                  color:      isActive ? '#ffffff'  : c.text,
                }}
              >
                {f}
              </button>
            );
          })}
        </div>

        {/* ── Notable Alumni grid ── */}
        <section className="alumni-section">
          <h2 className="alumni-h2" style={{ color: c.text }}>Notable Alumni</h2>

          {visible.length === 0 ? (
            <p className="alumni-empty" style={{ color: c.textMuted }}>
              No notable alumni on record for this campus yet.
            </p>
          ) : (
            <div className="alumni-grid">
              {visible.map(a => (
                <div
                  key={a.name}
                  className="alumni-card"
                  style={{ background: c.surface, border: `1px solid ${c.border}` }}
                >
                  {/* Avatar */}
                  <div className="alumni-avatar" style={{ background: c.surface2, color: c.textMuted }}>
                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                      <circle cx={12} cy={7} r={4} />
                    </svg>
                  </div>

                  {/* Name */}
                  <div className="alumni-name" style={{ color: c.text }}>{a.name}</div>

                  {/* Detail */}
                  <div className="alumni-detail" style={{ color: c.textMuted }}>{a.detail}</div>

                  {/* Campus tag */}
                  <div className="alumni-campus" style={{ color: c.accent }}>{a.campus}</div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* ── Alumni Association banner ── */}
        <section
          className="alumni-banner"
          style={{ background: c.primary }}
        >
          <div className="alumni-banner-text">
            <div className="alumni-banner-name">RGUKT-AP Alumni Association</div>
            <div className="alumni-banner-sub">50,000+ alumni network across four campuses</div>
          </div>
          <a
            href="#"
            className="alumni-banner-btn"
            style={{ color: c.primary }}
          >
            Register as Alumni →
          </a>
        </section>

      </div>
    </main>
  );
}
