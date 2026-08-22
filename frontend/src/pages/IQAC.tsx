import { useDarkMode } from '../context/DarkModeContext';
import './IQAC.css';

/* ─────────── data ─────────── */
const INITIATIVES = [
  { tag: 'NAAC',          desc: 'Coordinating institutional self-study and NAAC accreditation cycles.' },
  { tag: 'Feedback',      desc: 'Annual stakeholder feedback from students, faculty, alumni and employers.' },
  { tag: 'Academic Audit',desc: 'Departmental academic audits and curriculum review processes.' },
  { tag: 'Best Practices',desc: 'Documenting and disseminating institutional best practices.' },
];

const DOCUMENTS = [
  { title: 'IQAC Annual Quality Assurance Report 2024-25', size: '1.2 MB' },
  { title: 'Self Study Report — NAAC Cycle 2',             size: '4.8 MB' },
  { title: 'Academic Audit Report 2025',                   size: '860 KB' },
  { title: 'Stakeholder Feedback Analysis 2025',           size: '540 KB' },
];

/* ─────────── component ─────────── */
export default function IQAC() {
  const { dark } = useDarkMode();

  const c = dark ? {
    primary:     '#4A90D9',
    accent:      '#E8203C',
    accentLight: 'rgba(232,32,60,0.15)',
    surface:     '#112030',
    surface2:    '#18293c',
    text:        '#C0D4EE',
    textMuted:   'rgba(192,212,238,0.65)',
    border:      'rgba(192,212,238,0.18)',
    bg:          '#0B141F',
  } : {
    primary:     '#0A2744',
    accent:      '#C8102E',
    accentLight: '#FBE9E7',
    surface:     '#FFFFFF',
    surface2:    '#E8EEF8',
    text:        '#18243A',
    textMuted:   '#526070',
    border:      '#C5D3E8',
    bg:          '#F2F5FA',
  };

  return (
    <div className="apiq-root" style={{ background: c.bg, color: c.text }}>
      <div className="apiq-inner">
        <p className="apiq-intro" style={{ color: c.textMuted }}>
          The IQAC drives continuous quality enhancement across academics, research and governance
          at RGUKT-AP, in line with NAAC guidelines.
        </p>

        {/* ── Dean card ── */}
        <section className="apiq-section">
          <h2 className="apiq-h2">Dean, IQAC</h2>
          <div
            className="apiq-dean-card"
            style={{ background: c.surface, border: `1px solid ${c.border}` }}
          >
            <div className="apiq-avatar" style={{ background: c.surface2, color: c.textMuted }}>
              <PersonIcon />
            </div>
            <div>
              <div className="apiq-dean-name">Dr. N Ramana</div>
              <div className="apiq-dean-email" style={{ color: c.textMuted }}>
                <a href="mailto:dean.iqac@rgukt.ac.in" className="apiq-email-link" style={{ color: c.textMuted }}>
                  dean.iqac@rgukt.ac.in
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Quality Initiatives ── */}
        <section className="apiq-section">
          <h2 className="apiq-h2">Quality Initiatives</h2>
          <div className="apiq-initiatives">
            {INITIATIVES.map(i => (
              <div key={i.tag} className="apiq-initiative">
                <span
                  className="apiq-tag"
                  style={{ background: c.accentLight, color: c.accent }}
                >
                  {i.tag}
                </span>
                <span className="apiq-initiative-desc" style={{ color: c.textMuted }}>
                  {i.desc}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ── Reports & Documents ── */}
        <section className="apiq-section">
          <h2 className="apiq-h2">Reports &amp; Documents</h2>
          <div className="apiq-docs">
            {DOCUMENTS.map(d => (
              <a
                key={d.title}
                href="#"
                className="apiq-doc"
                style={{
                  background: c.surface,
                  border:     `1px solid ${c.border}`,
                  color:      c.text,
                }}
              >
                <DocIcon stroke={c.primary} />
                <span className="apiq-doc-title">{d.title}</span>
                <span className="apiq-doc-size" style={{ color: c.textMuted }}>{d.size}</span>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

function PersonIcon() {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"
      aria-hidden>
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
      <circle cx={12} cy={7} r={4} />
    </svg>
  );
}

function DocIcon({ stroke }: { stroke: string }) {
  return (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="none"
      stroke={stroke} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"
      aria-hidden style={{ flexShrink: 0 }}>
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>
  );
}
