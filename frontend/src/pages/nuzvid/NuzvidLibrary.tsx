import { useState } from 'react';
import './NuzvidLibrary.css';

type Tab = 'home' | 'circulation' | 'opac' | 'facilities' | 'floorplan' | 'rules' | 'staff' | 'contact';

const TABS: { id: Tab; label: string }[] = [
  { id: 'home',        label: 'Library Home' },
  { id: 'circulation', label: 'Circulation' },
  { id: 'opac',        label: 'OPAC' },
  { id: 'facilities',  label: 'Facilities' },
  { id: 'floorplan',   label: 'Floor-Wise Details' },
  { id: 'rules',       label: 'General Rules' },
  { id: 'staff',       label: 'Staff Details' },
  { id: 'contact',     label: 'Contact Us' },
];

const STATS = [
  { value: '85,289 sq.ft', label: 'Plinth Area' },
  { value: '20,000+',      label: 'Books' },
  { value: '10,000+',      label: 'Periodicals' },
  { value: '8',            label: 'E-Resource Platforms' },
];

const ERESOURCES = [
  { name: 'Knimbus e-Library',         href: 'https://rguktap.knimbus.com/' },
  { name: 'IEEE Xplore Digital Library', href: '#' },
  { name: 'ASCE Journals',             href: '#' },
  { name: 'ASME Journals',             href: '#' },
  { name: 'NPTEL / SWAYAM',            href: 'https://swayam.gov.in/nc_details/NPTEL' },
  { name: 'National Digital Library',  href: 'https://ndl.iitkgp.ac.in/' },
  { name: 'e-ShodhSindhu',             href: '#' },
  { name: 'RGUKT Content Domain',      href: '#' },
];

const CIRCULATION_ROWS = [
  { category: 'Faculty',           books: '10 books', period: '1 semester' },
  { category: 'Research Scholars', books: '6 books',  period: '30 days' },
  { category: 'UG / PG Students',  books: '3 books',  period: '15 days' },
  { category: 'Support Staff',     books: '2 books',  period: '15 days' },
];

const FACILITIES = [
  { name: 'Reading Halls',                 desc: 'Spacious, well-lit reading halls for individual and group study.' },
  { name: 'Digital Resource Centre',       desc: 'Computer terminals with access to e-books, e-journals and e-content.' },
  { name: 'Reprography',                   desc: 'Photocopying and scanning services for reference material.' },
  { name: 'Newspaper & Periodicals',       desc: 'Daily newspapers and current periodicals in multiple languages.' },
  { name: 'Book Bank',                     desc: 'Subsidised textbook lending scheme for eligible students.' },
  { name: 'Wi-Fi Access',                  desc: 'Campus Wi-Fi coverage throughout the library building.' },
];

const FLOORS = [
  { name: 'Ground Floor', desc: 'Circulation desk, reference section, newspapers & periodicals' },
  { name: 'First Floor',  desc: 'Text books, additional reading books, reading halls' },
  { name: 'Second Floor', desc: 'Digital resource centre, research section, book bank' },
  { name: 'Third Floor',  desc: 'Silent study zones and group discussion rooms' },
];

const RULES = [
  'Library membership is mandatory for all registered students and staff.',
  'Identity cards must be produced for borrowing or renewing books.',
  'Reference books, periodicals and rare collections are for reading-room use only.',
  'A fine is levied for overdue books as per the prevailing rate per day.',
  'Loss or damage to library material must be reported and compensated.',
  'Silence must be maintained at all times inside the library premises.',
  'Mobile phones must be kept on silent mode inside the library.',
  'Library working hours are displayed at the entrance and may vary during examinations.',
];

const STAFF = [
  { name: 'Dr. V Krishna Murthy', role: 'Librarian',           email: 'librarian@rguktn.ac.in' },
  { name: 'Mr. B Ravi Kumar',     role: 'Assistant Librarian',  email: 'asstlib@rguktn.ac.in' },
  { name: 'Ms. K Swathi',         role: 'Library Attendant',    email: 'library@rguktn.ac.in' },
  { name: 'Mr. P Suresh',         role: 'Library Attendant',    email: 'library@rguktn.ac.in' },
];

const c = {
  primary:   '#0B2B5C',
  accent:    '#1565C0',
  surface:   '#FFFFFF',
  surface2:  '#EBF0F8',
  text:      '#1A2535',
  textMuted: '#5A6A7E',
  border:    '#C8D8F0',
  bg:        '#F1F4F9',
};

export default function NuzvidLibrary() {
  const [tab,   setTab]   = useState<Tab>('home');
  const [query, setQuery] = useState('');

  const activeLabel = TABS.find(t => t.id === tab)?.label ?? 'Library Home';

  return (
    <div className="nzlib-root" style={{ background: c.bg, color: c.text }}>
      <div className="nzlib-inner">

        {/* ── Sidebar ── */}
        <aside className="nzlib-sidebar">
          <div className="nzlib-sidebar-label" style={{ color: c.textMuted }}>Library</div>
          <nav aria-label="Library sections">
            {TABS.map(t => (
              <button
                key={t.id}
                className={`nzlib-tab-btn${tab === t.id ? ' nzlib-tab-btn--active' : ''}`}
                onClick={() => setTab(t.id)}
                style={{
                  color:      tab === t.id ? c.primary : c.textMuted,
                  fontWeight: tab === t.id ? 700 : 500,
                  background: tab === t.id ? c.surface2 : 'transparent',
                }}
              >
                {t.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* ── Main content ── */}
        <div className="nzlib-content">
          <h1 className="nzlib-h1">{activeLabel}</h1>

          {/* ── Library Home ── */}
          {tab === 'home' && (
            <div>
              <div className="nzlib-stats-grid">
                {STATS.map(s => (
                  <div key={s.label} className="nzlib-stat" style={{ background: c.primary }}>
                    <div className="nzlib-stat-val">{s.value}</div>
                    <div className="nzlib-stat-lbl">{s.label}</div>
                  </div>
                ))}
              </div>
              <p className="nzlib-para" style={{ color: c.textMuted }}>
                The Central Library supports the teaching and research programs of the Institute and provides facilities
                for general reading and disseminates information according to the requirement of the users. It is housed
                in a separate building with a plinth area of 85,289 sq. ft.
              </p>
              <p className="nzlib-para" style={{ color: c.textMuted }}>
                The Library is exposed to vast knowledge on various disciplines through electronic resources and printed
                copies, with online resources produced by RGUKT to serve the needs of students.
              </p>

              <h2 className="nzlib-h2">Objectives of the Library</h2>
              <ul className="nzlib-list" style={{ color: c.textMuted }}>
                <li>Procure library collection as a basic requirement for enriching quality education</li>
                <li>Maintain Text Books, Additional Reading Books, Reference Books, Newspapers, Magazines and Periodicals</li>
                <li>Encourage self-learning among students</li>
                <li>Keep libraries open in the late hours after classroom sessions</li>
                <li>Motivate students towards a study culture</li>
                <li>Procure books on personality development</li>
                <li>Ensure library support through automation and automated services</li>
                <li>Provide electronic resources — e-Books, e-Journals and e-Content</li>
                <li>Support research material needs</li>
              </ul>

              <h2 className="nzlib-h2">E-Resources</h2>
              <div className="nzlib-eresources">
                {ERESOURCES.map(r => (
                  <a
                    key={r.name}
                    href={r.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nzlib-eresource"
                    style={{ background: c.surface, border: `1px solid ${c.border}`, color: c.text }}
                  >
                    <span>{r.name}</span>
                    <ExtLinkIcon stroke={c.textMuted} />
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* ── Circulation ── */}
          {tab === 'circulation' && (
            <div>
              <p className="nzlib-para" style={{ color: c.textMuted }}>
                Circulation policies govern how books and materials are borrowed, renewed and returned by students and faculty.
              </p>
              <div className="nzlib-table-wrap" style={{ border: `1px solid ${c.border}` }}>
                <table className="nzlib-table">
                  <thead>
                    <tr style={{ background: c.surface2 }}>
                      <th>Member Category</th>
                      <th>Books Issued</th>
                      <th>Loan Period</th>
                    </tr>
                  </thead>
                  <tbody>
                    {CIRCULATION_ROWS.map((r, i) => (
                      <tr key={r.category} style={{ background: i % 2 === 0 ? c.surface : c.bg, borderTop: `1px solid ${c.border}` }}>
                        <td className="nzlib-td-bold">{r.category}</td>
                        <td>{r.books}</td>
                        <td>{r.period}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ── OPAC ── */}
          {tab === 'opac' && (
            <div>
              <p className="nzlib-para" style={{ color: c.textMuted }}>
                Search the Online Public Access Catalogue (OPAC) to check availability of books, journals and reference
                material across the collection.
              </p>
              <div className="nzlib-opac-row">
                <input
                  type="text"
                  className="nzlib-opac-inp"
                  placeholder="Search by title, author, ISBN or subject..."
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  style={{ border: `1px solid ${c.border}`, background: c.surface, color: c.text }}
                />
                <button
                  className="nzlib-opac-btn"
                  style={{ background: c.primary }}
                >
                  Search
                </button>
              </div>
              <p className="nzlib-hint" style={{ color: c.textMuted }}>
                Results are drawn from the live library management system catalogue.
              </p>
            </div>
          )}

          {/* ── Facilities ── */}
          {tab === 'facilities' && (
            <div className="nzlib-facilities-grid">
              {FACILITIES.map(f => (
                <div
                  key={f.name}
                  className="nzlib-facility"
                  style={{ background: c.surface, border: `1px solid ${c.border}` }}
                >
                  <div className="nzlib-facility-name">{f.name}</div>
                  <p className="nzlib-facility-desc" style={{ color: c.textMuted }}>{f.desc}</p>
                </div>
              ))}
            </div>
          )}

          {/* ── Floor-Wise Details ── */}
          {tab === 'floorplan' && (
            <div className="nzlib-floors">
              {FLOORS.map(fl => (
                <div
                  key={fl.name}
                  className="nzlib-floor"
                  style={{ background: c.surface, border: `1px solid ${c.border}` }}
                >
                  <div className="nzlib-floor-name">{fl.name}</div>
                  <div className="nzlib-floor-desc" style={{ color: c.textMuted }}>{fl.desc}</div>
                </div>
              ))}
            </div>
          )}

          {/* ── General Rules ── */}
          {tab === 'rules' && (
            <ol className="nzlib-rules" style={{ color: c.textMuted }}>
              {RULES.map(r => (
                <li key={r}>{r}</li>
              ))}
            </ol>
          )}

          {/* ── Staff Details ── */}
          {tab === 'staff' && (
            <div className="nzlib-staff-grid">
              {STAFF.map(s => (
                <div
                  key={s.name}
                  className="nzlib-staff-card"
                  style={{ background: c.surface, border: `1px solid ${c.border}` }}
                >
                  <div className="nzlib-avatar" style={{ background: c.surface2, color: c.textMuted }}>
                    <PersonIcon />
                  </div>
                  <div className="nzlib-staff-name">{s.name}</div>
                  <div className="nzlib-staff-role" style={{ color: c.textMuted }}>{s.role}</div>
                  <a href={`mailto:${s.email}`} className="nzlib-staff-email" style={{ color: c.primary }}>
                    {s.email}
                  </a>
                </div>
              ))}
            </div>
          )}

          {/* ── Contact Us ── */}
          {tab === 'contact' && (
            <div
              className="nzlib-contact-card"
              style={{ background: c.surface, border: `1px solid ${c.border}` }}
            >
              <div className="nzlib-contact-heading">Library Administration Office</div>
              <p className="nzlib-contact-body" style={{ color: c.textMuted }}>
                Central Library Building<br />
                RGUKT Nuzvid, NH-9, Krishna District<br />
                Andhra Pradesh 521202<br />
                <a href="mailto:library@rguktn.ac.in" style={{ color: c.primary }}>library@rguktn.ac.in</a><br />
                +91-8656-235150
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ── Inline SVG icons ── */
function ExtLinkIcon({ stroke }: { stroke: string }) {
  return (
    <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden style={{ flexShrink: 0 }}>
      <path d="M7 17L17 7" /><path d="M7 7h10v10" />
    </svg>
  );
}
function PersonIcon() {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx={12} cy={7} r={4} />
    </svg>
  );
}
