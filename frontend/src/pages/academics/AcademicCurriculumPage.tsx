import {
  Code,
  Radio,
  Zap,
  Settings,
  Building,
  FlaskRound,
  Atom,
  Layers,
  Award,
  BookOpen,
} from 'lucide-react';
import AcademicsSubLayout from '../../components/AcademicsSubLayout';
import { ACADEMIC_PROGRAM_DOCUMENTS } from '../../data/academicDocuments';
import { DocumentSection } from '../../components/DocumentCard';
import './ProgrammesPage.css';

export default function AcademicCurriculumPage() {
  const currDocs = ACADEMIC_PROGRAM_DOCUMENTS.filter(
    (d) => d.category === 'Curriculum'
  );

  const branches = [
    {
      code: 'CSE',
      name: 'Computer Science & Engineering',
      credits: '160 Credits',
      icon: <Code size={18} />,
      image: '/disciplines/cse.jpg',
      coreTopics: ['Data Structures & Algorithms', 'Operating Systems', 'AI & Machine Learning', 'Cloud Computing', 'Database Management Systems'],
      labs: ['Advanced Programming Lab', 'AI & Data Engineering Lab', 'Computer Networks Lab'],
    },
    {
      code: 'ECE',
      name: 'Electronics & Communication Engineering',
      credits: '160 Credits',
      icon: <Radio size={18} />,
      image: '/disciplines/ece.jpg',
      coreTopics: ['Digital VLSI Design', 'Signals & Systems', 'Embedded IoT Systems', 'Wireless Communication', 'Microprocessors & Microcontrollers'],
      labs: ['VLSI Simulation Lab', 'Embedded Systems Testbed', 'Microwave & Optical Lab'],
    },
    {
      code: 'EEE',
      name: 'Electrical & Electronics Engineering',
      credits: '160 Credits',
      icon: <Zap size={18} />,
      image: '/disciplines/eee.jpg',
      coreTopics: ['Power Systems Engineering', 'Power Electronics', 'Electric Vehicle Technology', 'Smart Grids', 'Control Systems Theory'],
      labs: ['Power Electronics Simulation Lab', 'Electric Machines Lab', 'Smart Grid Facility'],
    },
    {
      code: 'MECH',
      name: 'Mechanical Engineering',
      credits: '160 Credits',
      icon: <Settings size={18} />,
      image: '/disciplines/mech.jpg',
      coreTopics: ['Thermodynamics & Heat Transfer', 'CAD/CAM/CAE Modeling', 'Finite Element Analysis', 'Robotics & Automation', 'Fluid Mechanics'],
      labs: ['CNC & Advanced Machining Lab', 'Automotive Systems Lab', 'CFD Simulation Cell'],
    },
    {
      code: 'CIVIL',
      name: 'Civil Engineering',
      credits: '160 Credits',
      icon: <Building size={18} />,
      image: '/disciplines/civil.jpg',
      coreTopics: ['Structural Analysis & Design', 'Geotechnical Engineering', 'Highway & Transportation Design', 'Water Resources', 'GIS & Remote Sensing'],
      labs: ['Structural Concrete Testing Lab', 'Soil Mechanics Lab', 'Environmental Engineering Lab'],
    },
    {
      code: 'CHEM',
      name: 'Chemical Engineering',
      credits: '160 Credits',
      icon: <FlaskRound size={18} />,
      image: '/disciplines/chem.jpg',
      coreTopics: ['Chemical Reaction Engineering', 'Heat & Mass Transfer Operations', 'Process Dynamics & Control', 'Petrochemical Processing', 'Green Chemistry'],
      labs: ['Process Control Lab', 'Reaction Engineering Lab', 'Mass Transfer Unit Lab'],
    },
    {
      code: 'MME',
      name: 'Materials & Metallurgical Engineering',
      credits: '160 Credits',
      icon: <Atom size={18} />,
      image: '/disciplines/mme.jpg',
      coreTopics: ['Physical Metallurgy', 'Advanced Characterization (SEM/XRD)', 'Nanomaterials & Composites', 'Corrosion Engineering', 'Phase Transformations'],
      labs: ['Metallography Lab', 'Materials Characterization Suite', 'Heat Treatment Facility'],
    },
  ];

  const minors = [
    { title: 'Minor in Artificial Intelligence & Data Science', dept: 'CSE & Math', credits: '20 Credits', desc: 'Deep Learning, NLP, Cloud Computing, and Big Data Engineering.' },
    { title: 'Minor in Business Management & Entrepreneurship', dept: 'Management', credits: '20 Credits', desc: 'Technology Marketing, Financial Accounting, Operations & Startup Incubation.' },
    { title: 'Minor in VLSI & Embedded Systems', dept: 'ECE & EEE', credits: '20 Credits', desc: 'FPGA Design, SoC Architecture, Real-Time Operating Systems, and IoT.' },
    { title: 'Minor in Renewable Energy & Smart Grids', dept: 'EEE & MECH', credits: '20 Credits', desc: 'Solar PV Systems, Battery Energy Storage, Energy Policy, and Microgrids.' },
  ];

  return (
    <AcademicsSubLayout>
      <div className="prog-page-container">
        {/* 1. HERO SECTION (MATCHING ACADEMICS OVERVIEW BACKGROUND & STYLE) */}
        <section className="prog-split-hero">
          <div className="prog-hero-left">
            <span className="prog-hero-badge">ACADEMICS OF RGUKT-AP</span>
            <h1 className="prog-hero-main-title">
              Curriculum &amp; Course Structures
            </h1>
            <p className="prog-hero-tagline">
              Outcome-Based Education • Choice-Based Credit System • Interdisciplinary Minors
            </p>
            <p className="prog-hero-description">
              RGUKT-AP follows an advanced AICTE and NBA aligned curriculum emphasizing foundational
              sciences in the Pre-University Course (PUC) and cutting-edge engineering specializations
              with heavy laboratory computing in the 4-year B.Tech programme.
            </p>
          </div>

          <div className="prog-hero-right">
            <img
              src="/gallery/gallery-10.jpg"
              alt="RGUKT Curriculum Development and Laboratories"
              className="prog-hero-media-img"
            />
            <div className="prog-hero-media-overlay">
              <div className="prog-hero-stats-row">
                <div className="prog-hero-stat-pill">
                  <span className="prog-stat-val">AICTE/NBA</span>
                  <span className="prog-stat-lbl">Aligned</span>
                </div>
                <div className="prog-hero-stat-pill">
                  <span className="prog-stat-val">7</span>
                  <span className="prog-stat-lbl">B.Tech Branches</span>
                </div>
                <div className="prog-hero-stat-pill">
                  <span className="prog-stat-val">20</span>
                  <span className="prog-stat-lbl">Minor Credits</span>
                </div>
                <div className="prog-hero-stat-pill">
                  <span className="prog-stat-val">100%</span>
                  <span className="prog-stat-lbl">Laptop Labs</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. CURRICULUM HIGHLIGHTS */}
        <section className="prog-section">
          <div className="prog-section-header">
            <span className="prog-section-kicker">Educational Model</span>
            <h2 className="prog-section-title">Outcome-Based Educational Framework</h2>
            <p className="prog-section-subtitle">
              Curriculum mapped to global AICTE and NBA quality benchmarks for technical education.
            </p>
          </div>

          <div className="prog-pedagogy-grid">
            <div className="prog-pedagogy-card">
              <div className="prog-pedagogy-icon"><Layers size={20} /></div>
              <h3 className="prog-pedagogy-title">Choice-Based Credit System (CBCS)</h3>
              <p className="prog-pedagogy-desc">
                Flexible elective credit pools allowing students to tailor their studies with
                professional electives, open electives, and minor degree tracks.
              </p>
            </div>

            <div className="prog-pedagogy-card">
              <div className="prog-pedagogy-icon"><Award size={20} /></div>
              <h3 className="prog-pedagogy-title">Outcome-Based Education (OBE)</h3>
              <p className="prog-pedagogy-desc">
                Course outcomes (COs) and program outcomes (POs) explicitly defined to foster
                analytical skills, design capabilities, engineering ethics, and life-long learning.
              </p>
            </div>

            <div className="prog-pedagogy-card">
              <div className="prog-pedagogy-icon"><BookOpen size={20} /></div>
              <h3 className="prog-pedagogy-title">Integrated Capstone Project</h3>
              <p className="prog-pedagogy-desc">
                Hands-on practicals, mini-projects, community service projects, and a rigorous
                2-semester capstone engineering design thesis.
              </p>
            </div>
          </div>
        </section>

        {/* 3. 7 B.TECH ENGINEERING CURRICULA */}
        <section className="prog-section">
          <div className="prog-section-header">
            <span className="prog-section-kicker">Departmental Structures</span>
            <h2 className="prog-section-title">Branch-Wise B.Tech Curricula &amp; Syllabi</h2>
            <p className="prog-section-subtitle">
              Comprehensive 160-credit course structures, core courses, and practical laboratories
              across all seven engineering departments.
            </p>
          </div>

          <div className="prog-card-grid">
            {branches.map((b) => (
              <div key={b.code} className="prog-discipline-card">
                <div className="prog-card-image-wrap" style={{ maxHeight: '135px' }}>
                  <img
                    src={b.image}
                    alt={`${b.name} engineering branch at RGUKT`}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/disciplines/cse.jpg';
                    }}
                  />
                  <span className="prog-card-code-badge">{b.code}</span>
                </div>

                <div className="prog-card-body" style={{ padding: '14px 16px' }}>
                  <div className="prog-card-header-row">
                    <div className="prog-card-icon">{b.icon}</div>
                    <div>
                      <span style={{ fontSize: '11px', fontWeight: 800, color: '#C8102E' }}>
                        {b.code}
                      </span>
                      <h3 className="prog-card-name" style={{ fontSize: '14.5px' }}>{b.name}</h3>
                    </div>
                  </div>

                  <div>
                    <span style={{ fontSize: '11px', fontWeight: 800, color: '#0A2744', display: 'block', marginBottom: '4px' }}>
                      CORE SUBJECT COURSES:
                    </span>
                    <div className="prog-card-key-areas">
                      {b.coreTopics.map((topic, idx) => (
                        <span key={idx} className="prog-key-area-tag">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span style={{ fontSize: '11px', fontWeight: 800, color: '#0A2744', display: 'block', marginBottom: '4px' }}>
                      SPECIALIZED LABORATORIES:
                    </span>
                    <div className="prog-card-key-areas">
                      {b.labs.map((lab, idx) => (
                        <span key={idx} className="prog-key-area-tag" style={{ background: '#EFF6FF', color: '#1D4ED8' }}>
                          {lab}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="prog-card-footer" style={{ padding: '10px 16px' }}>
                  <span className="prog-card-intake">
                    Total Credits: <strong>{b.credits}</strong>
                  </span>
                  <span style={{ fontSize: '11.5px', fontWeight: 800, color: '#C8102E' }}>
                    BoS Ratified ✓
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. INTERDISCIPLINARY MINOR DEGREES */}
        <section className="prog-section">
          <div className="prog-section-header">
            <span className="prog-section-kicker">Multi-Disciplinary Options</span>
            <h2 className="prog-section-title">Interdisciplinary Minor Degree Programmes</h2>
            <p className="prog-section-subtitle">
              Expand your engineering horizons by opting for a 20-credit minor degree alongside your
              primary B.Tech major discipline.
            </p>
          </div>

          <div className="prog-card-grid">
            {minors.map((m) => (
              <div key={m.title} className="prog-discipline-card" style={{ padding: '16px' }}>
                <span style={{ fontSize: '11px', fontWeight: 800, color: '#64748B', textTransform: 'uppercase' }}>
                  Offered by: {m.dept}
                </span>
                <h3 style={{ fontSize: '14.5px', fontWeight: 800, color: '#0A2744', margin: '4px 0 6px' }}>
                  {m.title}
                </h3>
                <p style={{ fontSize: '12px', color: '#475569', margin: '0 0 10px', lineHeight: 1.45 }}>
                  {m.desc}
                </p>
                <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '10px', borderTop: '1px solid #F1F5F9' }}>
                  <span style={{ fontSize: '11.5px', fontWeight: 700, color: '#0A2744' }}>
                    Requirement: <strong>{m.credits}</strong>
                  </span>
                  <span style={{ fontSize: '11px', fontWeight: 800, color: '#C8102E' }}>
                    Optional Pathway
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. VERIFIED CURRICULUM DOCUMENTS (LINE-BY-LINE) */}
        <section className="prog-section">
          <div className="prog-section-header">
            <span className="prog-section-kicker">Course Syllabi &amp; Booklets</span>
            <h2 className="prog-section-title">Verified Academic Curriculum Documents (PDFs)</h2>
            <p className="prog-section-subtitle">
              Download the approved B.Tech branch-wise syllabi, Pre-University course structure, and
              interdisciplinary minor degree regulations published by RGUKT-AP.
            </p>
          </div>

          <DocumentSection documents={currDocs} />
        </section>

        {/* 6. CURRICULUM ENQUIRY CTA */}
        <section className="prog-cta-banner">
          <div className="prog-cta-content">
            <span className="prog-cta-kicker">Curriculum Advisory Board</span>
            <h2 className="prog-cta-title">Explore Detailed Course Syllabi</h2>
            <p className="prog-cta-desc">
              Access the complete course catalogs, departmental electives, and laboratory manuals
              approved by the Board of Studies (BoS).
            </p>
          </div>

          <div className="prog-cta-btn-group">
            <a
              href="/docs/academics/btech-curriculum-2024.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="prog-cta-btn-primary"
            >
              B.Tech Curriculum PDF →
            </a>
            <a
              href="/docs/academics/minor-degree-curriculum-framework.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="prog-cta-btn-outline"
            >
              Minor Degree Framework
            </a>
          </div>
        </section>
      </div>
    </AcademicsSubLayout>
  );
}
