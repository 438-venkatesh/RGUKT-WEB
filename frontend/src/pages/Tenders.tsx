import { useState } from 'react';
import { useDarkMode } from '../context/DarkModeContext';
import './Tenders.css';

/* ─────────── data ─────────── */
type TenderStatus = 'Open' | 'Closed' | 'Awarded';
type FilterKey    = 'All' | TenderStatus;

interface Tender {
  no:      string;
  title:   string;
  campus:  string;
  closing: string;
  status:  TenderStatus;
}

const ALL_TENDERS: Tender[] = [
  { no: 'RGUKT/T/2026/014', title: 'Campus IT Infrastructure Upgrade',    campus: 'Nuzvid',       closing: '15-Sep-2026', status: 'Open'    },
  { no: 'RGUKT/T/2026/013', title: 'Hostel Mess Catering Services',        campus: 'RK Valley',    closing: '02-Sep-2026', status: 'Open'    },
  { no: 'RGUKT/T/2026/012', title: 'Solar Power Plant Installation',       campus: 'Srikakulam',   closing: '28-Aug-2026', status: 'Open'    },
  { no: 'RGUKT/T/2026/011', title: 'Library Furniture Supply',             campus: 'Ongole',       closing: '10-Jul-2026', status: 'Closed'  },
  { no: 'RGUKT/T/2026/010', title: 'Campus Security Services',             campus: 'All Campuses', closing: '30-Jun-2026', status: 'Closed'  },
  { no: 'RGUKT/T/2025/098', title: 'Laboratory Equipment Procurement',     campus: 'Nuzvid',       closing: '15-Dec-2025', status: 'Awarded' },
];

const FILTERS: FilterKey[] = ['All', 'Open', 'Closed', 'Awarded'];

const STATUS_COLOR: Record<TenderStatus, string> = {
  Open:    '#1D8A4A',
  Closed:  '#526070',
  Awarded: '#C8102E',
};

/* ─────────── component ─────────── */
export default function Tenders() {
  const { dark } = useDarkMode();
  const [filter, setFilter] = useState<FilterKey>('All');

  const c = dark ? {
    primary:   '#0B141F',
    accent:    '#E8203C',
    surface:   '#112030',
    surface2:  '#18293c',
    text:      '#C0D4EE',
    textMuted: 'rgba(192,212,238,0.65)',
    border:    'rgba(192,212,238,0.18)',
    bg:        '#0B141F',
  } : {
    primary:   '#0A2744',
    accent:    '#C8102E',
    surface:   '#FFFFFF',
    surface2:  '#E8EEF8',
    text:      '#18243A',
    textMuted: '#526070',
    border:    '#C5D3E8',
    bg:        '#F2F5FA',
  };

  const visible = ALL_TENDERS.filter(t => filter === 'All' || t.status === filter);

  return (
    <div className="apt-root" style={{ background: c.bg, color: c.text }}>
      <div className="apt-inner">
        <p className="apt-desc" style={{ color: c.textMuted }}>
          Open and archived tenders for goods, works and services across RGUKT-AP campuses.
        </p>

        {/* ── Filter chips ── */}
        <div className="apt-filters">
          {FILTERS.map(f => (
            <button
              key={f}
              className={`apt-filter${filter === f ? ' apt-filter--on' : ''}`}
              style={{
                border:     `1px solid ${c.border}`,
                background: filter === f ? c.primary : 'transparent',
                color:      filter === f ? '#fff' : c.text,
              }}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {/* ── Tenders table ── */}
        <div className="apt-tscroll" style={{ border: `1px solid ${c.border}` }}>
          <table className="apt-table">
            <thead>
              <tr className="apt-thead" style={{ background: c.surface2 }}>
                <th className="apt-th">Tender No.</th>
                <th className="apt-th">Title</th>
                <th className="apt-th">Campus</th>
                <th className="apt-th">Closing Date</th>
                <th className="apt-th">Status</th>
                <th className="apt-th apt-th-dl" aria-label="Download" />
              </tr>
            </thead>
            <tbody>
              {visible.map((t, i) => {
                const rowBg    = i % 2 === 0 ? c.surface : c.bg;
                const statClr  = STATUS_COLOR[t.status];
                return (
                  <tr key={t.no} style={{ borderTop: `1px solid ${c.border}`, background: rowBg }}>
                    <td className="apt-td apt-mono">{t.no}</td>
                    <td className="apt-td">{t.title}</td>
                    <td className="apt-td apt-muted" style={{ color: c.textMuted }}>{t.campus}</td>
                    <td className="apt-td apt-mono">{t.closing}</td>
                    <td className="apt-td">
                      <span
                        className="apt-badge"
                        style={{ color: statClr, border: `1px solid ${statClr}` }}
                      >
                        {t.status}
                      </span>
                    </td>
                    <td className="apt-td apt-td-dl">
                      <a href="#" aria-label={`Download ${t.no}`} style={{ color: c.text }}>
                        <DownloadIcon />
                      </a>
                    </td>
                  </tr>
                );
              })}
              {visible.length === 0 && (
                <tr>
                  <td colSpan={6} className="apt-empty" style={{ color: c.textMuted }}>
                    No tenders match the selected filter.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function DownloadIcon() {
  return (
    <svg width={16} height={16} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
      aria-hidden>
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1={12} y1={15} x2={12} y2={3} />
    </svg>
  );
}
