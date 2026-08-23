import { useDarkMode } from '../context/DarkModeContext';
import './IQAC.css';

/* ─────────── Verified Campus Coordinators Data ─────────── */
interface Coordinator {
  campus: string;
  name: string;
  designation: string;
  role: string;
  email: string;
  location: string;
  associates?: string[];
  responsibilities: string[];
}

const CAMPUS_COORDINATORS: Coordinator[] = [
  {
    campus: '1. Nuzvid Campus',
    name: 'Mr. Kumar Anurupam',
    designation: 'Assistant Professor, Department of Computer Science & Engineering (CSE)',
    role: 'Coordinator, IQAC — Nuzvid',
    email: 'iqac@rguktn.ac.in',
    location: 'RGUKT Nuzvid Campus, Krishna District, AP - 521202',
    responsibilities: [
      'Conducting periodic departmental academic audits and course file reviews',
      'Overseeing semester-end student feedback collection and faculty appraisal analysis',
      'Coordinating NAAC Self-Study Report (SSR) data collection and departmental documentation',
    ],
  },
  {
    campus: '2. RK Valley (Idupulapaya) Campus',
    name: 'Dr. P. Nagaraja',
    designation: 'Assistant Professor, Department of Chemistry',
    role: 'Coordinator, IQAC — RK Valley',
    email: 'iqac@rguktrkv.ac.in',
    location: 'RGUKT RK Valley Campus, YSR Kadapa District, AP - 516330',
    associates: [
      'Mr. A. V. Durga Kishor Reddy (Chemistry)',
      'Mr. N. Satyanandaram (CSE)',
      'Mr. D. Gnanavenkata Kumar (IT)',
      'Mr. P. Siva Krishna (ECE)',
    ],
    responsibilities: [
      'Harmonizing campus-wide quality enhancement initiatives, NIRF parameters, and AQAR inputs',
      'Facilitating laboratory safety, equipment calibration, and outcome-based course planning',
      'Organizing quality-focused faculty development programs and student orientation workshops',
    ],
  },
  {
    campus: '3. Ongole Campus',
    name: 'Dr. M. Rupas Kumar',
    designation: 'Assistant Professor & Dean of Academic Affairs (I/c), RGUKT Ongole',
    role: 'Campus Academic & Quality Coordinator, IQAC — Ongole',
    email: 'da@rguktong.ac.in',
    location: 'RGUKT Ongole Campus, Prakasam District, AP - 523225',
    responsibilities: [
      'Supervising academic curriculum delivery, continuous internal evaluations (CIE), and pacing',
      'Coordinating student grievance redressal, classroom feedback, and academic mentorship',
      'Ensuring alignment with central university academic regulations and examination standards',
    ],
  },
  {
    campus: '4. Srikakulam Campus',
    name: 'Office of Academic Affairs & Quality Assurance',
    designation: 'Directorate of Academic Affairs & Quality Monitoring, RGUKT Srikakulam',
    role: 'Campus Quality & Academic Assurance Secretariat, IQAC — Srikakulam',
    email: 'da@rguktsklm.ac.in',
    location: 'RGUKT Srikakulam Campus, S.M. Puram, Etcherla, AP - 532410',
    responsibilities: [
      'Monitoring teaching-learning process compliance and faculty induction protocols',
      'Compiling institutional data matrices for university-wide annual quality assessments',
      'Facilitating outcome-based curriculum delivery and laboratory infrastructure readiness',
    ],
  },
];

const CORE_FUNCTIONS = [
  {
    title: 'Academic & Administrative Audits (AAA)',
    desc: 'Regular review of departmental course files, syllabus coverage, laboratory infrastructure, and evaluation rigor across all engineering disciplines.',
    icon: 'audit',
  },
  {
    title: 'Outcome-Based Education (OBE)',
    desc: 'Formulating and measuring Course Outcomes (COs) and Program Outcomes (POs) attainment in alignment with AICTE and NEP 2020 frameworks.',
    icon: 'target',
  },
  {
    title: 'Multi-Tier Stakeholder Feedback',
    desc: 'Systematic collection and analytical review of feedback from students, alumni, faculty, parents, and industrial recruiting partners.',
    icon: 'feedback',
  },
  {
    title: 'Faculty Development & Pedagogy',
    desc: 'Organizing professional orientation workshops, technology-enabled learning (TEL) training, and modern flipped-classroom methodologies.',
    icon: 'faculty',
  },
  {
    title: 'AQAR & Accreditation Readiness',
    desc: 'Continuous compilation of the Annual Quality Assurance Report (AQAR), NIRF institutional data, and NAAC self-study documentation.',
    icon: 'report',
  },
  {
    title: 'Institutional Best Practices',
    desc: 'Standardizing Standard Operating Procedures (SOPs), academic integrity guidelines, and scalable teaching-learning innovations across campuses.',
    icon: 'sparkle',
  },
];

const STAKEHOLDER_PILLARS = [
  {
    target: 'For Students',
    title: 'Quality Learning & Welfare',
    points: [
      'Outcome-based curriculum aligned with global engineering industry needs',
      'Continuous, transparent internal assessments and modern laboratory facilities',
      'Confidential online feedback mechanisms for prompt academic enhancements',
      'Robust mentorship, remedial support, and competitive career development',
    ],
  },
  {
    target: 'For Faculty',
    title: 'Pedagogical & Research Growth',
    points: [
      'Faculty induction programs and continuous technical refresher workshops',
      'Standardized course file templates, grading rubrics, and teaching aids',
      'Support for sponsored research grant applications, publications, and patents',
      'Platform for institutional innovation and inter-disciplinary collaboration',
    ],
  },
  {
    target: 'For Institution',
    title: 'Governance & Accreditation',
    points: [
      'Continuous compliance with UGC, AICTE, and NAAC quality standards',
      'Harmonized academic and administrative benchmarks across all 4 campuses',
      'Centralized data-driven decision-making for resource optimization',
      'Publication of verified Annual Quality Assurance Reports (AQAR)',
    ],
  },
];

const QUALITY_INITIATIVES = [
  {
    tag: 'Academic Audits',
    title: 'Institutional Course & Lab Audits',
    desc: 'Comprehensive annual reviews of course delivery plans, laboratory experiment schedules, and student assessment integrity across all campuses.',
  },
  {
    tag: 'Feedback Portal',
    title: 'Digital Stakeholder Feedback System',
    desc: 'End-to-end online feedback loop enabling students to anonymously evaluate course relevance, instructional clarity, and campus facilities.',
  },
  {
    tag: 'OBE Alignment',
    title: 'Bloom’s Taxonomy & CO-PO Attainment',
    desc: 'University-wide faculty workshops on outcome-based question paper design, rubrics formulation, and quantitative attainment analysis.',
  },
  {
    tag: 'LMS Integration',
    title: 'Central Digital Academic Repositories',
    desc: 'Expanding institutional LMS repositories with digitized lecture notes, recorded sessions, and open-access research learning modules.',
  },
];

/* ─────────── Main IQAC Page Component ─────────── */
export default function IQAC() {
  const { dark } = useDarkMode();

  const c = dark
    ? {
        primary: '#4A90D9',
        accent: '#E8203C',
        accentLight: 'rgba(232,32,60,0.15)',
        surface: '#112030',
        surface2: '#18293c',
        text: '#C0D4EE',
        textMuted: 'rgba(192,212,238,0.7)',
        border: 'rgba(192,212,238,0.18)',
        bg: '#0B141F',
      }
    : {
        primary: '#0A2744',
        accent: '#C8102E',
        accentLight: '#FBE9E7',
        surface: '#FFFFFF',
        surface2: '#E8EEF8',
        text: '#18243A',
        textMuted: '#526070',
        border: '#C5D3E8',
        bg: '#F2F5FA',
      };

  return (
    <div className="apiq-root" style={{ background: c.bg, color: c.text }}>
      <div className="apiq-inner">
        {/* ── 1. Introduction: What is IQAC? ── */}
        <section className="apiq-hero-intro" aria-label="About IQAC">
          <span className="apiq-eyebrow" style={{ color: c.accent }}>
            Institutional Quality Assurance
          </span>
          <h1 className="apiq-main-title">Internal Quality Assurance Cell (IQAC)</h1>
          <div className="apiq-lead-paragraphs">
            <p className="apiq-lead" style={{ color: c.text }}>
              The <strong>Internal Quality Assurance Cell (IQAC)</strong> is the statutory apex body
              at Rajiv Gandhi University of Knowledge Technologies – Andhra Pradesh responsible for
              planning, guiding, and monitoring quality assurance (QA) and quality enhancement (QE)
              activities across all university operations.
            </p>
            <p className="apiq-sublead" style={{ color: c.textMuted }}>
              Established in strict accordance with the guidelines of the University Grants
              Commission (UGC) and the National Assessment and Accreditation Council (NAAC), the
              IQAC institutionalizes a culture of continuous academic and administrative improvement.
              Through synchronized academic audits, outcome-based curricula, transparent feedback
              mechanisms, and faculty development, IQAC ensures world-class technical education
              across all four constituent IIIT campuses—<strong>Nuzvid</strong>,{' '}
              <strong>RK Valley</strong>, <strong>Ongole</strong>, and <strong>Srikakulam</strong>.
            </p>
          </div>
        </section>

        {/* ── 2. Why IQAC Matters / Purpose ── */}
        <section className="apiq-section" aria-label="Purpose of IQAC">
          <div className="apiq-section-header">
            <h2 className="apiq-h2">Purpose of IQAC at RGUKT-AP</h2>
            <div className="apiq-line-accent" style={{ background: c.accent }} />
          </div>
          <div className="apiq-purpose-grid">
            <div
              className="apiq-purpose-card"
              style={{ background: c.surface, border: `1px solid ${c.border}` }}
            >
              <div className="apiq-card-badge" style={{ background: c.accentLight, color: c.accent }}>
                Quality Sustenance
              </div>
              <h3 className="apiq-h3">Continuous Improvement</h3>
              <p style={{ color: c.textMuted }}>
                To develop a conscious, consistent, and catalytic action plan for improving the
                academic and administrative performance of the university.
              </p>
            </div>

            <div
              className="apiq-purpose-card"
              style={{ background: c.surface, border: `1px solid ${c.border}` }}
            >
              <div className="apiq-card-badge" style={{ background: c.accentLight, color: c.accent }}>
                Accreditation
              </div>
              <h3 className="apiq-h3">NAAC &amp; Statutory Compliance</h3>
              <p style={{ color: c.textMuted }}>
                To coordinate institutional self-study reports, compile annual quality reports
                (AQAR), and prepare constituent campuses for state and national accreditations.
              </p>
            </div>

            <div
              className="apiq-purpose-card"
              style={{ background: c.surface, border: `1px solid ${c.border}` }}
            >
              <div className="apiq-card-badge" style={{ background: c.accentLight, color: c.accent }}>
                Pedagogy
              </div>
              <h3 className="apiq-h3">Outcome-Based Learning</h3>
              <p style={{ color: c.textMuted }}>
                To institutionalize learner-centric environments, Bloom’s taxonomy-aligned
                evaluations, and technology-enabled learning (TEL) methodologies.
              </p>
            </div>

            <div
              className="apiq-purpose-card"
              style={{ background: c.surface, border: `1px solid ${c.border}` }}
            >
              <div className="apiq-card-badge" style={{ background: c.accentLight, color: c.accent }}>
                Stakeholders
              </div>
              <h3 className="apiq-h3">Feedback &amp; Action Loops</h3>
              <p style={{ color: c.textMuted }}>
                To collect, analyze, and act upon structured stakeholder feedback from students,
                faculty, alumni, and industry employers to drive curricular updates.
              </p>
            </div>
          </div>
        </section>

        {/* ── 3. Central IQAC Leadership ── */}
        <section className="apiq-section" aria-label="IQAC Leadership">
          <div className="apiq-section-header">
            <h2 className="apiq-h2">Central IQAC Leadership</h2>
            <div className="apiq-line-accent" style={{ background: c.accent }} />
          </div>

          <div
            className="apiq-leader-card"
            style={{ background: c.surface, border: `1px solid ${c.border}` }}
          >
            <div className="apiq-leader-avatar" style={{ background: c.surface2, color: c.accent }}>
              <LeadershipIcon />
            </div>
            <div className="apiq-leader-info">
              <div className="apiq-leader-badge" style={{ background: c.accentLight, color: c.accent }}>
                University Central Secretariat
              </div>
              <h3 className="apiq-leader-name" style={{ color: c.text }}>
                Mrs. M. D. S. V. J. P. Koteswari
              </h3>
              <p className="apiq-leader-role" style={{ color: c.accent }}>
                Nodal Officer / Dean of IQAC, RGUKT-AP
              </p>
              <p className="apiq-leader-sub" style={{ color: c.textMuted }}>
                Assistant Professor, Department of Chemical Engineering, RGUKT RK Valley
                <br />
                <strong>Qualifications:</strong> M.Tech. (Chemical Engineering, IIT Madras), B.Tech.
              </p>
              <p className="apiq-leader-desc" style={{ color: c.textMuted }}>
                Specializes in process intensification, novel separation processes, and chemical
                engineering modeling. Coordinates central IQAC governance, university-level AQAR
                reporting, institutional quality policies, and inter-campus audit frameworks across
                all constituent institutes.
              </p>
              <div className="apiq-contact-row">
                <a
                  href="mailto:dean.iqac@rgukt.in"
                  className="apiq-contact-btn"
                  style={{ background: c.primary, color: '#FFFFFF' }}
                >
                  <MailIcon /> dean.iqac@rgukt.in
                </a>
                <a
                  href="mailto:iqac@rgukt.in"
                  className="apiq-contact-btn apiq-btn-outline"
                  style={{ border: `1px solid ${c.border}`, color: c.text }}
                >
                  <MailIcon /> iqac@rgukt.in
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. Campus IQAC Coordinators (Fixed 4 Campuses Order) ── */}
        <section className="apiq-section" aria-label="Campus IQAC Coordinators">
          <div className="apiq-section-header">
            <h2 className="apiq-h2">Campus IQAC Coordinators</h2>
            <p className="apiq-section-sub" style={{ color: c.textMuted }}>
              Decentralized quality assurance leadership across the four constituent RGUKT-AP
              campuses:
            </p>
            <div className="apiq-line-accent" style={{ background: c.accent }} />
          </div>

          <div className="apiq-coordinators-grid">
            {CAMPUS_COORDINATORS.map((coord, idx) => (
              <div
                key={coord.campus}
                className="apiq-coord-card"
                style={{ background: c.surface, border: `1px solid ${c.border}` }}
              >
                <div className="apiq-coord-header">
                  <div className="apiq-coord-num" style={{ background: c.surface2, color: c.accent }}>
                    0{idx + 1}
                  </div>
                  <div>
                    <h3 className="apiq-coord-campus" style={{ color: c.text }}>
                      {coord.campus}
                    </h3>
                    <div className="apiq-coord-role" style={{ color: c.accent }}>
                      {coord.role}
                    </div>
                  </div>
                </div>

                <div className="apiq-coord-body">
                  <h4 className="apiq-coord-name" style={{ color: c.text }}>
                    {coord.name}
                  </h4>
                  <p className="apiq-coord-desig" style={{ color: c.textMuted }}>
                    {coord.designation}
                  </p>

                  {coord.associates && coord.associates.length > 0 && (
                    <div className="apiq-associates-box" style={{ background: c.surface2 }}>
                      <span className="apiq-assoc-title" style={{ color: c.text }}>
                        Associate Coordinators:
                      </span>
                      <ul className="apiq-assoc-list" style={{ color: c.textMuted }}>
                        {coord.associates.map(assoc => (
                          <li key={assoc}>{assoc}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="apiq-coord-resp">
                    <span className="apiq-resp-title" style={{ color: c.text }}>
                      Core Campus Mandate:
                    </span>
                    <ul className="apiq-resp-list" style={{ color: c.textMuted }}>
                      {coord.responsibilities.map(r => (
                        <li key={r}>{r}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="apiq-coord-footer" style={{ borderTop: `1px solid ${c.border}` }}>
                  <a
                    href={`mailto:${coord.email}`}
                    className="apiq-email-pill"
                    style={{ color: c.primary }}
                  >
                    <MailIcon /> {coord.email}
                  </a>
                  <span className="apiq-coord-loc" style={{ color: c.textMuted }}>
                    {coord.location}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 5. Key Functions / Responsibilities ── */}
        <section className="apiq-section" aria-label="Key Functions">
          <div className="apiq-section-header">
            <h2 className="apiq-h2">Key Functions &amp; Responsibilities</h2>
            <div className="apiq-line-accent" style={{ background: c.accent }} />
          </div>

          <div className="apiq-functions-grid">
            {CORE_FUNCTIONS.map((fn, idx) => (
              <div
                key={fn.title}
                className="apiq-fn-card"
                style={{ background: c.surface, border: `1px solid ${c.border}` }}
              >
                <div className="apiq-fn-idx" style={{ color: c.accent }}>
                  {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                </div>
                <h3 className="apiq-fn-title" style={{ color: c.text }}>
                  {fn.title}
                </h3>
                <p className="apiq-fn-desc" style={{ color: c.textMuted }}>
                  {fn.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 6. How IQAC Supports Students, Faculty & Institution ── */}
        <section className="apiq-section" aria-label="Stakeholder Support">
          <div className="apiq-section-header">
            <h2 className="apiq-h2">How IQAC Supports the RGUKT-AP Ecosystem</h2>
            <div className="apiq-line-accent" style={{ background: c.accent }} />
          </div>

          <div className="apiq-pillars-grid">
            {STAKEHOLDER_PILLARS.map(p => (
              <div
                key={p.target}
                className="apiq-pillar-card"
                style={{ background: c.surface, border: `1px solid ${c.border}` }}
              >
                <span className="apiq-pillar-tag" style={{ background: c.accentLight, color: c.accent }}>
                  {p.target}
                </span>
                <h3 className="apiq-pillar-title" style={{ color: c.text }}>
                  {p.title}
                </h3>
                <ul className="apiq-pillar-list" style={{ color: c.textMuted }}>
                  {p.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── 7. Verified Quality Initiatives ── */}
        <section className="apiq-section" aria-label="Quality Initiatives">
          <div className="apiq-section-header">
            <h2 className="apiq-h2">Quality Enhancement Initiatives</h2>
            <div className="apiq-line-accent" style={{ background: c.accent }} />
          </div>

          <div className="apiq-initiatives-grid">
            {QUALITY_INITIATIVES.map(init => (
              <div
                key={init.title}
                className="apiq-init-card"
                style={{ background: c.surface, border: `1px solid ${c.border}` }}
              >
                <span className="apiq-init-tag" style={{ background: c.accentLight, color: c.accent }}>
                  {init.tag}
                </span>
                <h3 className="apiq-init-title" style={{ color: c.text }}>
                  {init.title}
                </h3>
                <p className="apiq-init-desc" style={{ color: c.textMuted }}>
                  {init.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 8. Official Contact & Directorate Directory ── */}
        <section className="apiq-section" aria-label="Contact and Official Directory">
          <div className="apiq-section-header">
            <h2 className="apiq-h2">Official IQAC Contact Directory</h2>
            <div className="apiq-line-accent" style={{ background: c.accent }} />
          </div>

          <div
            className="apiq-directory-card"
            style={{ background: c.surface, border: `1px solid ${c.border}` }}
          >
            <div className="apiq-dir-row">
              <div className="apiq-dir-col">
                <h4 style={{ color: c.text }}>Central University IQAC Office</h4>
                <p style={{ color: c.textMuted }}>
                  Administrative Block (I-3), RGUKT-AP Central Office, Andhra Pradesh
                </p>
                <p>
                  <strong>Primary Email:</strong>{' '}
                  <a href="mailto:dean.iqac@rgukt.in" style={{ color: c.accent }}>
                    dean.iqac@rgukt.in
                  </a>
                </p>
                <p>
                  <strong>General Inquiries:</strong>{' '}
                  <a href="mailto:iqac@rgukt.in" style={{ color: c.accent }}>
                    iqac@rgukt.in
                  </a>
                </p>
              </div>

              <div className="apiq-dir-col" style={{ borderLeft: `1px solid ${c.border}` }}>
                <h4 style={{ color: c.text }}>Campus Nodes</h4>
                <ul className="apiq-dir-campus-links">
                  <li>
                    <strong>Nuzvid:</strong>{' '}
                    <a href="mailto:iqac@rguktn.ac.in" style={{ color: c.primary }}>
                      iqac@rguktn.ac.in
                    </a>
                  </li>
                  <li>
                    <strong>RK Valley:</strong>{' '}
                    <a href="mailto:iqac@rguktrkv.ac.in" style={{ color: c.primary }}>
                      iqac@rguktrkv.ac.in
                    </a>
                  </li>
                  <li>
                    <strong>Ongole:</strong>{' '}
                    <a href="mailto:da@rguktong.ac.in" style={{ color: c.primary }}>
                      da@rguktong.ac.in
                    </a>
                  </li>
                  <li>
                    <strong>Srikakulam:</strong>{' '}
                    <a href="mailto:da@rguktsklm.ac.in" style={{ color: c.primary }}>
                      da@rguktsklm.ac.in
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

/* ─────────── SVG Icons ─────────── */
function LeadershipIcon() {
  return (
    <svg
      width={32}
      height={32}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
      <circle cx={9} cy={7} r={4} />
      <path d="M22 21v-2a4 4 0 00-3-3.87" />
      <path d="M16 3.13a4 4 0 010 7.75" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      style={{ verticalAlign: 'middle', marginRight: 6 }}
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

