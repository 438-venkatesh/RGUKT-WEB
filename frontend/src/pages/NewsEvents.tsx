import { useDarkMode } from '../context/DarkModeContext';
import './NewsEvents.css';

/* ─────────── data ─────────── */
const GRADS = [
  'linear-gradient(135deg,#0A2744,#1A4A8A)',
  'linear-gradient(135deg,#5c2f0b,#C8102E)',
  'linear-gradient(135deg,#12325f,#2a5a9a)',
];

const NEWS = [
  { date: '23-Apr-2025', title: 'RGUKT-AP Student Sai Shivani Secures 11th Rank in UPSC Civil Services Examination' },
  { date: '26-May-2025', title: 'A Historic Achievement in NPTEL Certifications' },
  { date: '09-Jun-2025', title: 'Entrepreneurship Education FDP by Wadhwani Foundation' },
  { date: '10-Jun-2025', title: 'MoU Signed Between RGUKT-AP and United Way of Hyderabad' },
  { date: '26-Jun-2025', title: 'RGUKT-AP Signs MoUs with Industry and Philanthropic Organisations' },
  { date: '26-Aug-2025', title: 'Amaravati Quantum Valley Hackathon 2025 Bootcamp at RGUKT Nuzvid' },
];

/* ─────────── component ─────────── */
export default function NewsEvents() {
  const { dark } = useDarkMode();

  const c = dark ? {
    primary:   '#4A90D9',
    surface:   '#112030',
    text:      '#C0D4EE',
    textMuted: 'rgba(192,212,238,0.65)',
    border:    'rgba(192,212,238,0.18)',
    bg:        '#0B141F',
  } : {
    primary:   '#0A2744',
    surface:   '#FFFFFF',
    text:      '#18243A',
    textMuted: '#526070',
    border:    '#C5D3E8',
    bg:        '#F2F5FA',
  };

  return (
    <div className="apne-root" style={{ background: c.bg, color: c.text }}>
      <div className="apne-inner">
        <div className="apne-grid">
          {NEWS.map((n, i) => (
            <div
              key={i}
              className="apne-card"
              style={{ background: c.surface, border: `1px solid ${c.border}` }}
            >
              <div
                className="apne-card-img"
                style={{ background: GRADS[i % 3] }}
                aria-hidden
              />
              <div className="apne-card-body">
                <div className="apne-date" style={{ color: c.textMuted }}>{n.date}</div>
                <h3 className="apne-title">{n.title}</h3>
                <a href="#" className="apne-link" style={{ color: c.primary }}>
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
