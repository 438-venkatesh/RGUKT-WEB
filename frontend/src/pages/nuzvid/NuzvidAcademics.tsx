import { useState, useEffect } from 'react';
import './NuzvidAcademics.css';

/* ─────────── types & data ─────────── */
type AcadTab = 'programs' | 'curriculum' | 'calendar' | 'research';
type Branch  = 'CSE' | 'ECE' | 'EEE' | 'Mechanical' | 'Civil' | 'Chemical' | 'MME';

const BRANCHES: Branch[] = ['CSE', 'ECE', 'EEE', 'Mechanical', 'Civil', 'Chemical', 'MME'];

const BTECH = BRANCHES.map(b => ({ name: `B.Tech ${b}`, seats: 60 }));
const MTECH = [
  { name: 'M.Tech VLSI Design',           seats: 18 },
  { name: 'M.Tech Structural Engineering', seats: 18 },
  { name: 'M.Tech Computer Science',       seats: 18 },
];

function buildSemesters(branch: Branch) {
  const pfx = branch.slice(0, 2).toUpperCase();
  return Array.from({ length: 8 }, (_, i) => {
    const n = i + 1;
    return {
      num: n, label: `Semester ${n}`,
      courses: [
        { code: `${pfx}${100 + n * 10}`, name: `Core Subject ${n}.1`, credits: 4, type: 'Core' },
        { code: `${pfx}${101 + n * 10}`, name: `Core Subject ${n}.2`, credits: 3, type: 'Core' },
        { code: `${pfx}${102 + n * 10}`, name: `Elective ${n}`,       credits: 3, type: 'Elective' },
      ],
    };
  });
}

const CALENDAR = [
  { date: 'Aug 21', title: 'Mid-term exams begin',     color: '#C0392B' },
  { date: 'Sep 05', title: "Teacher's Day holiday",    color: '#1A4A8A' },
  { date: 'Sep 22', title: 'Sitara Cultural Fest',     color: '#1565C0' },
  { date: 'Oct 15', title: 'Semester end exams',       color: '#C0392B' },
  { date: 'Nov 01', title: 'AP Formation Day holiday', color: '#1A4A8A' },
  { date: 'Dec 10', title: 'Google Dev Fest',          color: '#1565C0' },
  { date: 'Jan 26', title: 'Republic Day holiday',     color: '#1A4A8A' },
  { date: 'Feb 10', title: 'End-sem practicals',       color: '#C0392B' },
];

const RESEARCH = [
  { kicker: 'Research Groups', title: '12 active research groups',   desc: 'Spanning AI, materials science, power systems and structural engineering.' },
  { kicker: 'MoUs',            title: '20+ institutional MoUs',      desc: 'Partnerships with industry and academia for joint research and internships.' },
  { kicker: 'Funded Projects', title: '15 ongoing funded projects',  desc: 'Supported by DST, AICTE and state government research grants.' },
];

const TABS: { id: AcadTab; label: string }[] = [
  { id: 'programs',   label: 'Programs' },
  { id: 'curriculum', label: 'Curriculum' },
  { id: 'calendar',   label: 'Academic Calendar' },
  { id: 'research',   label: 'Research' },
];

/* ─────────── component ─────────── */
export default function NuzvidAcademics() {
  const [tab,     setTab]     = useState<AcadTab>('programs');
  const [branch,  setBranch]  = useState<Branch>('CSE');
  const [openSem, setOpenSem] = useState<number | null>(1);

  /* Honour URL hash: /nuzvid/academics#curriculum etc. */
  useEffect(() => {
    const hash = window.location.hash.replace('#', '') as AcadTab;
    if (TABS.some(t => t.id === hash)) setTab(hash);
  }, []);

  const semesters = buildSemesters(branch);

  return (
    <div className="nzac-root">
      <div className="nzac-inner">
        <h1 className="nzac-h1">Academics</h1>

        {/* ── Tab bar ── */}
        <div className="nzac-tabbar" role="tablist">
          {TABS.map(t => (
            <button
              key={t.id}
              role="tab"
              aria-selected={tab === t.id}
              className={`nzac-tab${tab === t.id ? ' nzac-tab--on' : ''}`}
              onClick={() => setTab(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* ══ Programs ══ */}
        {tab === 'programs' && (
          <div>
            <h2 className="nzac-h2">B.Tech Programs</h2>
            <div className="nzac-prog-grid">
              {BTECH.map(p => (
                <div key={p.name} className="nzac-card">
                  <div className="nzac-card-name">{p.name}</div>
                  <div className="nzac-card-meta">
                    <span>Duration: 4 years</span>
                    <span>Total seats: {p.seats}</span>
                    <span>Eligibility: 10th pass + RGUKT entrance</span>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="nzac-h2 nzac-mt40">M.Tech Programs</h2>
            <div className="nzac-prog-grid">
              {MTECH.map(p => (
                <div key={p.name} className="nzac-card">
                  <div className="nzac-card-name">{p.name}</div>
                  <div className="nzac-card-meta">
                    <span>Duration: 2 years · Seats: {p.seats}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ══ Curriculum ══ */}
        {tab === 'curriculum' && (
          <div>
            <div className="nzac-branch-row">
              <label htmlFor="nzac-branch" className="nzac-branch-lbl">Select branch:</label>
              <select
                id="nzac-branch"
                className="nzac-branch-sel"
                value={branch}
                onChange={e => setBranch(e.target.value as Branch)}
              >
                {BRANCHES.map(b => <option key={b} value={b}>{b}</option>)}
              </select>
            </div>

            <div className="nzac-accord">
              {semesters.map(s => (
                <div key={s.num} className="nzac-sem">
                  <button
                    className="nzac-sem-hd"
                    aria-expanded={openSem === s.num}
                    onClick={() => setOpenSem(o => o === s.num ? null : s.num)}
                  >
                    <span>{s.label}</span>
                    <span className="nzac-chevron">{openSem === s.num ? '−' : '+'}</span>
                  </button>

                  {openSem === s.num && (
                    <table className="nzac-ctable">
                      <thead>
                        <tr className="nzac-chead">
                          <th>Code</th>
                          <th>Course Name</th>
                          <th>Credits</th>
                          <th>Type</th>
                        </tr>
                      </thead>
                      <tbody>
                        {s.courses.map(c => (
                          <tr key={c.code} className="nzac-crow">
                            <td className="nzac-code">{c.code}</td>
                            <td>{c.name}</td>
                            <td>{c.credits}</td>
                            <td>
                              <span className={`nzac-type nzac-type--${c.type.toLowerCase()}`}>{c.type}</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ══ Academic Calendar ══ */}
        {tab === 'calendar' && (
          <div>
            <div className="nzac-legend">
              <span className="nzac-leg"><span className="nzac-leg-dot" style={{ background: '#C0392B' }} />Exams</span>
              <span className="nzac-leg"><span className="nzac-leg-dot" style={{ background: '#1A4A8A' }} />Holidays</span>
              <span className="nzac-leg"><span className="nzac-leg-dot" style={{ background: '#1565C0' }} />Events</span>
            </div>
            <div className="nzac-cal-grid">
              {CALENDAR.map(ev => (
                <div key={ev.title} className="nzac-ev" style={{ borderLeftColor: ev.color }}>
                  <div className="nzac-ev-date">{ev.date}</div>
                  <div className="nzac-ev-title">{ev.title}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ══ Research ══ */}
        {tab === 'research' && (
          <div className="nzac-prog-grid">
            {RESEARCH.map(r => (
              <div key={r.title} className="nzac-card">
                <div className="nzac-res-kicker">{r.kicker}</div>
                <div className="nzac-card-name">{r.title}</div>
                <p className="nzac-res-desc">{r.desc}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
