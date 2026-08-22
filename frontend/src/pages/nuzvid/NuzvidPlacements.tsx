import { useState, useEffect } from 'react';
import './NuzvidPlacements.css';

/* ─────────── data ─────────── */
const YEAR_DATA = [
  { year: '2020', pct: 52 },
  { year: '2021', pct: 58 },
  { year: '2022', pct: 61 },
  { year: '2023', pct: 64 },
  { year: '2024', pct: 66 },
  { year: '2025', pct: 68 },
];

type BranchRow = { branch: string; rate: number; top: string };
const BRANCH_ROWS: BranchRow[] = [
  { branch: 'CSE',        rate: 82, top: 'Infosys'       },
  { branch: 'ECE',        rate: 71, top: 'Wipro'          },
  { branch: 'EEE',        rate: 65, top: 'L&T'            },
  { branch: 'Mechanical', rate: 58, top: 'TCS'            },
  { branch: 'Civil',      rate: 54, top: 'L&T'            },
  { branch: 'Chemical',   rate: 49, top: 'HCL'            },
  { branch: 'MME',        rate: 46, top: 'Kusalava Intl.' },
];

type Sector = 'All' | 'IT' | 'Core' | 'PSU' | 'Finance';
const SECTORS: Sector[] = ['All', 'IT', 'Core', 'PSU', 'Finance'];

const RECRUITERS: { name: string; sector: Sector }[] = [
  { name: 'Infosys',       sector: 'IT'      },
  { name: 'TCS',           sector: 'IT'      },
  { name: 'Wipro',         sector: 'IT'      },
  { name: 'Tech Mahindra', sector: 'IT'      },
  { name: 'L&T',           sector: 'Core'    },
  { name: 'Kusalava Intl.',sector: 'Core'    },
  { name: 'BHEL',          sector: 'PSU'     },
  { name: 'HDFC Bank',     sector: 'Finance' },
];

const PROCESS_STEPS = [
  { n: 1, label: 'Register'      },
  { n: 2, label: 'Shortlist'     },
  { n: 3, label: 'Visit Campus'  },
  { n: 4, label: 'Offers'        },
];

const TESTIMONIALS = [
  { quote: 'RGUKT gave me the foundation to land at Infosys.',               name: 'Priya K, CSE 2023' },
  { quote: 'The CDPC team prepared us thoroughly for every interview round.', name: 'Ravi T, ECE 2022'  },
  { quote: 'Campus placements opened doors I never imagined possible.',       name: 'Anitha S, EEE 2024'},
];

/* ─────────── Bar chart ─────────── */
const BAR_W = 60, BAR_GAP = 90, CHART_H = 220, MAX_BAR_H = 160;
const maxPct = Math.max(...YEAR_DATA.map(d => d.pct));

function BarChart() {
  return (
    <svg
      viewBox={`0 0 ${20 + YEAR_DATA.length * BAR_GAP} ${CHART_H}`}
      className="nzp-chart"
      role="img"
      aria-label="Bar chart of placement rate by year, 2020 to 2025"
    >
      {YEAR_DATA.map((d, i) => {
        const h  = Math.round((d.pct / maxPct) * MAX_BAR_H);
        const x  = 20 + i * BAR_GAP;
        const y  = CHART_H - 35 - h;
        const tx = x + BAR_W / 2;
        return (
          <g key={d.year}>
            <rect x={x} y={y} width={BAR_W} height={h} fill="#0B2B5C" rx={3} />
            <text x={tx} y={CHART_H - 12} fontSize={12} textAnchor="middle" fill="#5A6A7E" fontFamily="Inter,sans-serif">
              {d.year}
            </text>
            <text x={tx} y={y - 6} fontSize={12} fontWeight={700} textAnchor="middle" fill="#1A2535" fontFamily="Inter,sans-serif">
              {d.pct}%
            </text>
          </g>
        );
      })}
    </svg>
  );
}

/* ─────────── component ─────────── */
type SortKey = 'branch' | 'rate';

export default function NuzvidPlacements() {
  const [sortKey, setSortKey] = useState<SortKey>('branch');
  const [sortDir, setSortDir] = useState<1 | -1>(1);
  const [sector,  setSector]  = useState<Sector>('All');
  const [testIdx, setTestIdx] = useState(0);

  /* Rotate testimonials every 5 s */
  useEffect(() => {
    const iv = setInterval(() => setTestIdx(i => (i + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(iv);
  }, []);

  /* Sorted branch rows */
  const sortedBranches = [...BRANCH_ROWS].sort((a, b) => {
    if (sortKey === 'rate') return (a.rate - b.rate) * sortDir;
    return a.branch.localeCompare(b.branch) * sortDir;
  });

  function toggleSort(key: SortKey) {
    if (sortKey === key) setSortDir(d => (d === 1 ? -1 : 1));
    else { setSortKey(key); setSortDir(1); }
  }

  const visibleRecruiters = RECRUITERS.filter(r => sector === 'All' || r.sector === sector);
  const testimonial = TESTIMONIALS[testIdx];

  return (
    <div className="nzp-root">

      {/* ── Hero banner ── */}
      <section className="nzp-hero">
        <div className="nzp-hero-inner">
          <h1 className="nzp-h1">Placements</h1>
          <div className="nzp-stats">
            <div className="nzp-stat">
              <div className="nzp-stat-val">68%</div>
              <div className="nzp-stat-lbl">Placement Rate</div>
            </div>
            <div className="nzp-stat">
              <div className="nzp-stat-val">₹4.2 LPA</div>
              <div className="nzp-stat-lbl">Avg CTC</div>
            </div>
            <div className="nzp-stat">
              <div className="nzp-stat-val">300+</div>
              <div className="nzp-stat-lbl">Companies</div>
            </div>
          </div>
        </div>
      </section>

      <div className="nzp-inner">

        {/* ── Year-wise bar chart ── */}
        <section className="nzp-section">
          <h2 className="nzp-h2">Year-wise Placement Rate</h2>
          <BarChart />
        </section>

        {/* ── Branch-wise table ── */}
        <section className="nzp-section">
          <h2 className="nzp-h2">Branch-wise Placement Rate</h2>
          <div className="nzp-tscroll">
            <table className="nzp-table">
              <thead>
                <tr className="nzp-thead">
                  <th
                    className="nzp-th-sort"
                    onClick={() => toggleSort('branch')}
                    aria-label="Sort by branch"
                  >
                    Branch {sortKey === 'branch' ? (sortDir === 1 ? '↑' : '↓') : '↕'}
                  </th>
                  <th
                    className="nzp-th-sort"
                    onClick={() => toggleSort('rate')}
                    aria-label="Sort by placement rate"
                  >
                    Placement Rate {sortKey === 'rate' ? (sortDir === 1 ? '↑' : '↓') : '↕'}
                  </th>
                  <th>Top Recruiter</th>
                </tr>
              </thead>
              <tbody>
                {sortedBranches.map(r => (
                  <tr key={r.branch} className="nzp-tr">
                    <td className="nzp-td-branch">{r.branch}</td>
                    <td className="nzp-td-rate">{r.rate}%</td>
                    <td className="nzp-td-top">{r.top}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Recruiters ── */}
        <section className="nzp-section">
          <h2 className="nzp-h2">Recruiters</h2>
          <div className="nzp-filters">
            {SECTORS.map(s => (
              <button
                key={s}
                className={`nzp-filter${sector === s ? ' nzp-filter--on' : ''}`}
                onClick={() => setSector(s)}
              >
                {s}
              </button>
            ))}
          </div>
          <div className="nzp-recruiters">
            {visibleRecruiters.map(r => (
              <div key={r.name} className="nzp-recruiter">{r.name}</div>
            ))}
          </div>
        </section>

        {/* ── Placement Process ── */}
        <section className="nzp-section">
          <h2 className="nzp-h2">Placement Process</h2>
          <div className="nzp-process">
            {PROCESS_STEPS.map((step, i) => (
              <div key={step.n} className="nzp-step">
                {i > 0 && <div className="nzp-connector" aria-hidden />}
                <div className="nzp-step-num">{step.n}</div>
                <div className="nzp-step-label">{step.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Testimonial ── */}
        <section className="nzp-section">
          <div className="nzp-testimonial">
            <p className="nzp-quote">"{testimonial.quote}"</p>
            <div className="nzp-quote-name">{testimonial.name}</div>
          </div>
        </section>

        {/* ── CDPC Contact ── */}
        <section className="nzp-section">
          <h2 className="nzp-h2">CDPC Contact</h2>
          <div className="nzp-contact">
            <div className="nzp-contact-avatar" aria-hidden>
              <UsersIcon />
            </div>
            <div className="nzp-contact-info">
              <div className="nzp-contact-name">Career Development &amp; Placement Cell</div>
              <div className="nzp-contact-details">cdpc@rguktn.ac.in · +91-8656-235100</div>
            </div>
            <a href="mailto:cdpc@rguktn.ac.in" className="nzp-contact-cta">
              New Recruiter? Contact Us →
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

function UsersIcon() {
  return (
    <svg width={30} height={30} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"
      aria-hidden>
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx={9} cy={7} r={4} />
      <path d="M23 21v-2a4 4 0 00-3-3.87" />
      <path d="M16 3.13a4 4 0 010 7.75" />
    </svg>
  );
}
