import { useState, useRef } from 'react';
import './NuzvidExaminations.css';

/* ─────────── data ─────────── */
type Program = 'B.Tech' | 'M.Tech';
type Branch  = 'CSE' | 'ECE' | 'EEE' | 'Mechanical' | 'Civil' | 'Chemical' | 'MME';
type Year    = '1' | '2' | '3' | '4';
type Sem     = '1' | '2';

const BRANCHES: Branch[] = ['CSE', 'ECE', 'EEE', 'Mechanical', 'Civil', 'Chemical', 'MME'];

const STUDENT_NAMES = ['B Sai Kumar', 'K Divya Sri', 'M Praveen', 'N Lakshmi', 'P Ravi Teja', 'S Anitha'];

const SCHEDULE = [
  { month: 'Sep 2026', exam: 'Mid-term Examinations',     dates: '15–20 Sep' },
  { month: 'Oct 2026', exam: 'Practical Examinations',     dates: '10–14 Oct' },
  { month: 'Nov 2026', exam: 'Semester End Examinations',  dates: '18–30 Nov' },
  { month: 'Dec 2026', exam: 'Supplementary Examinations', dates: '12–16 Dec' },
];

const REGULATIONS = [
  { title: 'B.Tech Academic Regulations 2024', size: '840 KB' },
  { title: 'M.Tech Academic Regulations 2023', size: '620 KB' },
  { title: 'Grading & Promotion Policy',        size: '310 KB' },
];

/* ─────────── component ─────────── */
export default function NuzvidExaminations() {
  const [program,     setProgram]     = useState<Program>('B.Tech');
  const [branch,      setBranch]      = useState<Branch>('CSE');
  const [year,        setYear]        = useState<Year>('3');
  const [sem,         setSem]         = useState<Sem>('1');
  const [showResults, setShowResults] = useState(false);

  const rollRef = useRef<HTMLInputElement>(null);
  const dobRef  = useRef<HTMLInputElement>(null);

  /* Build result rows from current branch / sem state */
  const pfx = branch.slice(0, 2).toUpperCase();
  const resultsRows = STUDENT_NAMES.map((name, i) => ({
    roll: `N20${pfx}${100 + i}`,
    name,
    gp:   (7.2 + i * 0.3).toFixed(1),
    cgpa: (7.5 + i * 0.2).toFixed(2),
    alt:  i % 2 !== 0,
  }));

  const resetResults = () => setShowResults(false);

  return (
    <div className="nze-root">
      <div className="nze-inner">
        <h1 className="nze-h1">Examinations &amp; Results</h1>

        {/* ── Filter card ── */}
        <div className="nze-card no-print">
          <div className="nze-field">
            <label className="nze-lbl">Program</label>
            <select className="nze-sel" value={program}
              onChange={e => { setProgram(e.target.value as Program); resetResults(); }}>
              <option>B.Tech</option>
              <option>M.Tech</option>
            </select>
          </div>
          <div className="nze-field">
            <label className="nze-lbl">Branch</label>
            <select className="nze-sel" value={branch}
              onChange={e => { setBranch(e.target.value as Branch); resetResults(); }}>
              {BRANCHES.map(b => <option key={b}>{b}</option>)}
            </select>
          </div>
          <div className="nze-field">
            <label className="nze-lbl">Year</label>
            <select className="nze-sel" value={year}
              onChange={e => { setYear(e.target.value as Year); resetResults(); }}>
              {(['1', '2', '3', '4'] as Year[]).map(y => <option key={y}>{y}</option>)}
            </select>
          </div>
          <div className="nze-field">
            <label className="nze-lbl">Semester</label>
            <select className="nze-sel" value={sem}
              onChange={e => { setSem(e.target.value as Sem); resetResults(); }}>
              <option>1</option>
              <option>2</option>
            </select>
          </div>
          <button className="nze-btn-primary" onClick={() => setShowResults(true)}>
            Fetch Results
          </button>
        </div>

        {/* ── Results table ── */}
        {showResults && (
          <div className="nze-results">
            <div className="nze-results-hd">
              <h2 className="nze-h2">{branch} — Sem {sem} Results</h2>
              <button className="nze-btn-outline no-print" onClick={() => window.print()}>
                Export as PDF
              </button>
            </div>
            <div className="nze-tscroll">
              <table className="nze-table nze-mono">
                <thead>
                  <tr className="nze-thead">
                    <th>Roll No</th>
                    <th className="nze-sans">Student Name</th>
                    <th>Grade Points</th>
                    <th>CGPA</th>
                  </tr>
                </thead>
                <tbody>
                  {resultsRows.map(row => (
                    <tr key={row.roll} className={`nze-tr${row.alt ? ' nze-tr--alt' : ''}`}>
                      <td>{row.roll}</td>
                      <td className="nze-sans">{row.name}</td>
                      <td>{row.gp}</td>
                      <td>{row.cgpa}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ── Hall Ticket ── */}
        <section className="nze-section no-print">
          <h2 className="nze-h2 nze-h2-gap">Hall Ticket Download</h2>
          <div className="nze-card">
            <div className="nze-field">
              <label className="nze-lbl">Roll Number</label>
              <input ref={rollRef} type="text" placeholder="e.g. N200101" className="nze-inp" />
            </div>
            <div className="nze-field">
              <label className="nze-lbl">Date of Birth</label>
              <input ref={dobRef} type="date" className="nze-inp" />
            </div>
            <button
              className="nze-btn-accent"
              onClick={() => alert('Hall ticket download — coming soon.')}
            >
              Download Hall Ticket
            </button>
          </div>
        </section>

        {/* ── Exam Schedule ── */}
        <section className="nze-section">
          <h2 className="nze-h2 nze-h2-gap">Exam Schedule</h2>
          <div className="nze-tscroll">
            <table className="nze-table">
              <thead>
                <tr className="nze-thead">
                  <th>Month</th>
                  <th>Exam</th>
                  <th>Dates</th>
                </tr>
              </thead>
              <tbody>
                {SCHEDULE.map(s => (
                  <tr key={s.exam} className="nze-tr">
                    <td className="nze-month">{s.month}</td>
                    <td>{s.exam}</td>
                    <td className="nze-mono">{s.dates}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Academic Regulations ── */}
        <section className="nze-section no-print">
          <h2 className="nze-h2 nze-h2-gap">Academic Regulations</h2>
          <div className="nze-regs">
            {REGULATIONS.map(r => (
              <a key={r.title} href="#" className="nze-reg">
                <DocIcon />
                <span className="nze-reg-title">{r.title}</span>
                <span className="nze-reg-size">{r.size}</span>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

function DocIcon() {
  return (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="#0B2B5C"
      strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"
      aria-hidden style={{ flexShrink: 0 }}>
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1={9} y1={13} x2={15} y2={13} />
      <line x1={9} y1={17} x2={15} y2={17} />
    </svg>
  );
}
