import { useState } from 'react';
import { useDarkMode } from '../context/DarkModeContext';
import './Careers.css';

/* ─────────── data ─────────── */
type JobType   = 'Faculty' | 'Staff';
type FilterKey = 'All' | JobType;

interface Job {
  title:  string;
  dept:   string;
  campus: string;
  type:   JobType;
}

const ALL_JOBS: Job[] = [
  { title: 'Assistant Professor — Computer Science',    dept: 'CSE',            campus: 'Nuzvid',     type: 'Faculty' },
  { title: 'Associate Professor — Electronics',         dept: 'ECE',            campus: 'RK Valley',  type: 'Faculty' },
  { title: 'Assistant Professor — Mathematics',         dept: 'Sciences',       campus: 'Srikakulam', type: 'Faculty' },
  { title: 'Junior Assistant',                          dept: 'Administration', campus: 'Ongole',     type: 'Staff'   },
  { title: 'Lab Technician — Mechanical',               dept: 'MECH',           campus: 'Nuzvid',     type: 'Staff'   },
  { title: 'Assistant Professor — Chemical Engineering',dept: 'Chemical',       campus: 'RK Valley',  type: 'Faculty' },
];

const FILTERS: FilterKey[] = ['All', 'Faculty', 'Staff'];

/* ─────────── component ─────────── */
export default function Careers() {
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

  const visible = ALL_JOBS.filter(j => filter === 'All' || j.type === filter);

  return (
    <div className="apc-root" style={{ background: c.bg, color: c.text }}>
      <div className="apc-inner">
        <p className="apc-desc" style={{ color: c.textMuted }}>
          Faculty and staff recruitment opportunities across RGUKT-AP's four campuses.
        </p>

        {/* ── Filter chips ── */}
        <div className="apc-filters">
          {FILTERS.map(f => (
            <button
              key={f}
              className={`apc-filter${filter === f ? ' apc-filter--on' : ''}`}
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

        {/* ── Job listings ── */}
        <div className="apc-jobs">
          {visible.map(j => (
            <div
              key={`${j.title}-${j.campus}`}
              className="apc-job"
              style={{ background: c.surface, border: `1px solid ${c.border}` }}
            >
              <div className="apc-job-info">
                <div className="apc-job-title">{j.title}</div>
                <div className="apc-job-meta" style={{ color: c.textMuted }}>
                  {j.dept} · {j.campus} · {j.type}
                </div>
              </div>
              <a
                href="#"
                className="apc-apply"
                style={{ background: c.primary }}
              >
                View &amp; Apply →
              </a>
            </div>
          ))}
          {visible.length === 0 && (
            <p className="apc-empty" style={{ color: c.textMuted }}>
              No openings match the selected filter.
            </p>
          )}
        </div>

        {/* ── General Applications ── */}
        <section className="apc-general" style={{ background: c.surface2 }}>
          <h2 className="apc-gen-h2">General Applications</h2>
          <p className="apc-gen-p" style={{ color: c.textMuted }}>
            Don't see a matching role? Send your CV to{' '}
            <a
              href="mailto:careers@rgukt.ac.in"
              className="apc-gen-link"
              style={{ color: c.primary }}
            >
              careers@rgukt.ac.in
            </a>{' '}
            for future openings.
          </p>
        </section>
      </div>
    </div>
  );
}
