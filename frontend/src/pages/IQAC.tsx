import { useDarkMode } from '../context/DarkModeContext';
import './IQAC.css';

const IQAC_OFFICER = {
  name: 'Mrs. M. D. S. V. J. P. Koteswari',
  degrees: 'M.Tech (IIT Madras), (Ph.D.)',
  designation: 'Dean of Internal Quality Assurance Cell (IQAC)',
  academicRole: 'Assistant Professor, Department of Chemical Engineering, RGUKT RK Valley',
  photo: '/people/dean-iqac-koteswari.jpg',
  officeAddress: 'I3 Block, RGUKT Nuzvid Campus / RGUKT RK Valley',
  email: 'dean.iqac@rgukt.in',
  alternateEmail: 'iqac@rgukt.in',
  bio: [
    'Ms. D. S. V. J. P. Koteswari, M.Tech (IIT Madras), (Ph.D.) is an Assistant Professor in the Department of Chemical Engineering at RGUKT RK Valley. She holds a B.Tech in Chemical Engineering, completed her M.Tech from IIT Madras, and is currently pursuing her Ph.D. Her primary areas of specialization include Process Intensification, Membrane Technology, Novel Separation Processes, and Process Modelling and Simulation.',
    'Her research focuses on optimizing chemical processes to improve efficiency and sustainability. She has taught a wide range of subjects, including Mass Transfer Operations, Chemical Reaction Engineering, Industrial Safety and Hazard Management, Novel Separation Processes, and Petroleum Engineering and Technology.',
  ],
};

const IQAC_OBJECTIVES = [
  {
    title: 'Quality Benchmark Formulation',
    tagline: 'Academic Standards & Metrics',
    description:
      'Developing and applying quality benchmarks and parameters for the various academic and administrative activities of the university.',
  },
  {
    title: 'Learner-Centric Environment',
    tagline: 'Pedagogy & Faculty Development',
    description:
      'Facilitating the creation of a learner-centric environment conducive to quality education and faculty maturation to adopt the requisite knowledge and technology for participatory teaching and learning.',
  },
  {
    title: 'Stakeholder Feedback Mechanism',
    tagline: 'Continuous Evaluation',
    description:
      'Arranging for feedback responses from students, parents, alumni, and other stakeholders on quality-related institutional processes.',
  },
  {
    title: 'Dissemination of Quality Culture',
    tagline: 'Workshops & Best Practices',
    description:
      'Disseminating information on various quality parameters of higher education, organizing inter- and intra-institutional workshops and seminars on quality-related themes.',
  },
  {
    title: 'Documentation & AQAR Preparation',
    tagline: 'Institutional Reporting',
    description:
      'Documenting the various programs and activities leading to quality improvement and preparing the Annual Quality Assurance Report (AQAR) in accordance with quality guidelines.',
  },
];

const IQAC_COMPOSITION = [
  { role: 'Chairperson', member: 'Vice-Chancellor, RGUKT-AP' },
  { role: 'Convener / Director', member: 'Dean of Internal Quality Assurance Cell (IQAC), RGUKT-AP' },
  { role: 'Constituent Campus Leadership', member: 'Directors of Constituent Campuses (Nuzvid, RK Valley, Ongole, Srikakulam)' },
  { role: 'Academic Administration', member: 'Deans of Academics & Deans of Evaluation' },
  { role: 'Administrative Representatives', member: 'Registrar & Finance Officer' },
  { role: 'Senior Faculty Members', member: 'Nominated Senior Faculty Representatives from Engineering & Science Departments' },
  { role: 'Stakeholder Representatives', member: 'Nominated Industry Experts, Alumni, and Student Representatives' },
];

const IQAC_CONTACTS = [
  {
    name: 'Mrs. M. D. S. V. J. P. Koteswari',
    role: 'Dean of Internal Quality Assurance Cell (IQAC), RGUKT-AP',
    email: 'dean.iqac@rgukt.in',
    note: 'Office: I3 Block, RGUKT Nuzvid / RK Valley',
  },
  {
    name: 'Central IQAC Secretariat',
    role: 'Quality Assurance Coordination Desk, RGUKT-AP',
    email: 'iqac@rgukt.in',
  },
];

export default function IQAC() {
  const { dark } = useDarkMode();

  const c = dark
    ? {
        primary: '#0B141F',
        accent: '#E8203C',
        surface: '#112030',
        surface2: '#18293c',
        bg: '#0B141F',
        text: '#C0D4EE',
        textMuted: 'rgba(192,212,238,0.70)',
        border: 'rgba(192,212,238,0.18)',
        tagBg: 'rgba(232, 32, 60, 0.15)',
        tagColor: '#FF6B81',
        cardBadgeBg: 'rgba(30, 58, 138, 0.4)',
        cardBadgeColor: '#93C5FD',
      }
    : {
        primary: '#0A2744',
        accent: '#C8102E',
        surface: '#FFFFFF',
        surface2: '#F1F5F9',
        bg: '#F8FAFC',
        text: '#18243A',
        textMuted: '#475569',
        border: '#E2E8F0',
        tagBg: 'rgba(200, 16, 46, 0.08)',
        tagColor: '#C8102E',
        cardBadgeBg: '#EEF2FF',
        cardBadgeColor: '#1E40AF',
      };

  return (
    <main className="iqac-page" style={{ background: c.bg, color: c.text }}>
      <div className="iqac-wrap">
        {/* ── 1. Officer Profile Card ── */}
        <section
          className="iqac-officer-card"
          style={{ background: c.surface, border: `1px solid ${c.border}` }}
        >
          <div className="iqac-officer-grid">
            <img
              src={IQAC_OFFICER.photo}
              alt={IQAC_OFFICER.name}
              className="iqac-officer-photo"
            />
            <div className="iqac-officer-body">
              <span className="iqac-section-kicker" style={{ color: c.accent }}>
                Internal Quality Assurance Cell Leadership
              </span>
              <h2 className="iqac-officer-name" style={{ color: c.text }}>
                {IQAC_OFFICER.name}{' '}
                <span style={{ fontSize: '0.85em', fontWeight: 500, color: c.textMuted }}>
                  {IQAC_OFFICER.degrees}
                </span>
              </h2>
              <p className="iqac-officer-role" style={{ color: c.accent }}>
                {IQAC_OFFICER.designation}
              </p>
              <p className="iqac-officer-sub" style={{ color: c.textMuted }}>
                {IQAC_OFFICER.academicRole}
              </p>
              {IQAC_OFFICER.bio.map((para, i) => (
                <p key={i} className="iqac-officer-para" style={{ color: c.textMuted }}>
                  {para}
                </p>
              ))}
              <p style={{ color: c.textMuted, marginTop: 10, fontSize: 14 }}>
                <strong style={{ color: c.text }}>Office Address:</strong> {IQAC_OFFICER.officeAddress}
              </p>
              <div className="iqac-officer-actions">
                <a
                  href={`mailto:${IQAC_OFFICER.email}`}
                  className="iqac-btn-primary"
                  style={{ background: c.accent, color: '#fff' }}
                >
                  ✉ Email: {IQAC_OFFICER.email}
                </a>
                <a
                  href={`mailto:${IQAC_OFFICER.alternateEmail}`}
                  className="iqac-btn-secondary"
                  style={{ background: c.surface2, color: c.text, border: `1px solid ${c.border}` }}
                >
                  ✉ Desk: {IQAC_OFFICER.alternateEmail}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. Introduction & Mandate ── */}
        <section
          className="iqac-intro-card"
          style={{ background: c.surface, border: `1px solid ${c.border}` }}
        >
          <span className="iqac-section-kicker" style={{ color: c.accent }}>
            Institutional Quality Framework
          </span>
          <h2 className="iqac-intro-title" style={{ color: c.text }}>
            About the Internal Quality Assurance Cell (IQAC)
          </h2>
          <p className="iqac-intro-lead" style={{ color: c.text }}>
            The Internal Quality Assurance Cell (IQAC) at RGUKT functions as a nodal agency to develop a system for conscious, consistent, and catalytic action to improve the academic and administrative performance of the university across its constituent campuses.
          </p>
          <p className="iqac-intro-lead" style={{ color: c.textMuted }}>
            IQAC coordinates quality sustenance and quality enhancement measures, facilitating the integration of modern teaching methodologies, institutional audits, and stakeholder feedback into continuous academic refinement.
          </p>
        </section>

        {/* ── 3. Core Objectives & Functions ── */}
        <section className="iqac-section">
          <div className="iqac-section-header">
            <span className="iqac-section-kicker" style={{ color: c.accent }}>
              Key Operational Dimensions
            </span>
            <h2 className="iqac-h2" style={{ color: c.text }}>
              Core Objectives & Functions
            </h2>
            <p className="iqac-section-sub" style={{ color: c.textMuted }}>
              Institutional mechanisms ensuring continuous academic rigor, teaching excellence, and administrative efficiency.
            </p>
          </div>

          <div className="iqac-objectives-grid">
            {IQAC_OBJECTIVES.map((obj) => (
              <article
                key={obj.title}
                className="iqac-objective-card"
                style={{ background: c.surface, border: `1px solid ${c.border}` }}
              >
                <span
                  className="iqac-card-badge"
                  style={{ background: c.cardBadgeBg, color: c.cardBadgeColor }}
                >
                  {obj.tagline}
                </span>
                <h3 className="iqac-card-title" style={{ color: c.text }}>
                  {obj.title}
                </h3>
                <p className="iqac-card-desc" style={{ color: c.textMuted }}>
                  {obj.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* ── 4. Composition & Committee Structure ── */}
        <section className="iqac-section">
          <div className="iqac-section-header">
            <span className="iqac-section-kicker" style={{ color: c.accent }}>
              Governance Structure
            </span>
            <h2 className="iqac-h2" style={{ color: c.text }}>
              IQAC Composition Framework
            </h2>
            <p className="iqac-section-sub" style={{ color: c.textMuted }}>
              Structure of the Internal Quality Assurance Cell committee representing leadership, academics, and administration.
            </p>
          </div>

          <div className="iqac-table-wrap" style={{ background: c.surface, border: `1px solid ${c.border}` }}>
            <table className="iqac-table">
              <thead>
                <tr style={{ borderBottom: `2px solid ${c.border}` }}>
                  <th style={{ color: c.text }}>Designation / Category</th>
                  <th style={{ color: c.text }}>Committee Representation</th>
                </tr>
              </thead>
              <tbody>
                {IQAC_COMPOSITION.map((row, i) => (
                  <tr key={i} style={{ borderBottom: `1px solid ${c.border}` }}>
                    <td style={{ color: c.accent, fontWeight: 600 }}>{row.role}</td>
                    <td style={{ color: c.text }}>{row.member}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── 5. Contact for Queries ── */}
        <section className="iqac-section">
          <div className="iqac-section-header">
            <h2 className="iqac-h2" style={{ color: c.text }}>
              Contact for Queries
            </h2>
          </div>
          <div className="iqac-queries-grid">
            {IQAC_CONTACTS.map((contact, i) => (
              <div
                key={i}
                className="iqac-query-card"
                style={{ background: c.surface, border: `1px solid ${c.border}` }}
              >
                <strong className="iqac-query-name" style={{ color: c.text }}>
                  {contact.name}
                </strong>
                {contact.role && (
                  <p className="iqac-query-role" style={{ color: c.textMuted }}>
                    {contact.role}
                  </p>
                )}
                {contact.email && (
                  <p className="iqac-query-email" style={{ margin: '6px 0 0' }}>
                    <a href={`mailto:${contact.email}`} style={{ color: c.accent, fontWeight: 600 }}>
                      {contact.email}
                    </a>
                  </p>
                )}
                {contact.note && (
                  <p className="iqac-query-note" style={{ color: c.textMuted, margin: '4px 0 0', fontSize: 13 }}>
                    {contact.note}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── 6. Source Reference ── */}
        <p className="iqac-source-ref" style={{ color: c.textMuted }}>
          Official Reference:{' '}
          <a
            href="https://www.rgukt.in/administration/dean-iqac/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: c.accent }}
          >
            rgukt.in — Dean of IQAC
          </a>
        </p>
      </div>
    </main>
  );
}
