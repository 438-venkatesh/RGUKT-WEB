import { useDarkMode } from '../context/DarkModeContext';
import './Announcements.css';

/* ─────────── data ─────────── */
const ANNOUNCEMENTS = [
  { date: '25-May-2026', title: 'Common Remedial Examinations Schedule for PUC (2022, 2023, 2024 batches) and E1 to E4 of Sem2 for 2020 batch, AY 2025-26' },
  { date: '01-May-2026', title: 'Admissions 2026 — Application Portal Now Open' },
  { date: '23-Mar-2026', title: 'AY2526 Sem-2 Examination Schedule' },
  { date: '14-May-2025', title: 'Prospectus for Admissions into RGUKT — AY 2025-26' },
  { date: '08-May-2025', title: 'VC Notification — Withdraw Proceedings' },
  { date: '23-Apr-2025', title: 'RGUKT Announces Admission Notification for AY 2025-26 — Last Date for Online Applications 20 May 2025' },
  { date: '10-Feb-2025', title: 'Revised Fee Structure for Non-Scholarship Students' },
  { date: '05-Jan-2025', title: 'Convocation 2025 — Registration Guidelines' },
];

/* ─────────── component ─────────── */
export default function Announcements() {
  const { dark } = useDarkMode();

  const c = dark ? {
    primary:   '#4A90D9',
    text:      '#C0D4EE',
    textMuted: 'rgba(192,212,238,0.65)',
    border:    'rgba(192,212,238,0.18)',
    bg:        '#0B141F',
  } : {
    primary:   '#0A2744',
    text:      '#18243A',
    textMuted: '#526070',
    border:    '#C5D3E8',
    bg:        '#F2F5FA',
  };

  return (
    <div className="apan-root" style={{ background: c.bg, color: c.text }}>
      <div className="apan-inner">
        <div className="apan-list">
          {ANNOUNCEMENTS.map((a, i) => (
            <div
              key={i}
              className="apan-row"
              style={{ borderBottom: `1px solid ${c.border}` }}
            >
              <div className="apan-date" style={{ color: c.textMuted }}>{a.date}</div>
              <div className="apan-body">
                <div className="apan-title">{a.title}</div>
                <a href="#" className="apan-link" style={{ color: c.primary }}>
                  View Details →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
