import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BookOpen,
  ChevronRight,
  FlaskConical,
  GraduationCap,
  Landmark,
  Library,
  Microscope,
  Monitor,
  Trophy,
  Users,
} from 'lucide-react';
import './NuzvidAcademics.css';

const DEPARTMENTS = [
  { name: 'Computer Science & Engineering', href: '/nuzvid/departments', icon: Monitor },
  { name: 'Electronics & Communication Engineering', href: '/nuzvid/departments', icon: Monitor },
  { name: 'Electrical & Electronics Engineering', href: '/nuzvid/departments', icon: Landmark },
  { name: 'Mechanical Engineering', href: '/nuzvid/departments', icon: FlaskConical },
  { name: 'Civil Engineering', href: '/nuzvid/departments', icon: Landmark },
  { name: 'Chemical Engineering', href: '/nuzvid/departments', icon: FlaskConical },
  { name: 'Metallurgical & Materials Engineering', href: '/nuzvid/departments', icon: Trophy },
];

const MTECH_PROGRAMS = [
  {
    name: 'M.Tech in Transportation Engineering',
    desc: 'Specialization under Civil Engineering — focuses on the planning, design, operation and management of transportation systems.',
  },
  {
    name: 'M.Tech in Engineering Analysis and Design',
    desc: 'Specialization under Mechanical Engineering — advanced engineering analysis, simulation, and design methodologies.',
  },
];

function SectionHeading({ eyebrow, title, copy, centered = false, id }: { eyebrow: string; title: string; copy?: string; centered?: boolean; id?: string }) {
  return (
    <div className={`nzac-section-heading${centered ? ' nzac-section-heading--centered' : ''}`}>
      <span className="nzac-eyebrow">{eyebrow}</span>
      <h2 id={id}>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  );
}

export default function NuzvidAcademics() {
  return (
    <div className="nzac">
      {/* ── Hero ── */}
      <section className="nzac-hero" aria-labelledby="academics-hero-title">
        <img
          className="nzac-hero-image"
          src="/campuses/academic-complex-nuzvid.jpg"
          alt="RGUKT Nuzvid academic complex"
          fetchPriority="high"
          decoding="async"
        />
        <div className="nzac-hero-glow" aria-hidden="true" />
        <div className="nzac-container nzac-hero-content">
          <div className="nzac-breadcrumb">
            <Link to="/nuzvid">Home</Link>
            <span>/</span>
            <span>Academics</span>
          </div>
          <h1 id="academics-hero-title">Excellence in Engineering Education.</h1>
          <p className="nzac-hero-copy">
            RGUKT Nuzvid provides a unique six-year integrated B.Tech program, focused on holistic, technology-driven education for the rural youth.
          </p>
        </div>
      </section>

      {/* ── Overview ── */}
      <section className="nzac-overview" aria-labelledby="overview-title">
        <div className="nzac-container nzac-overview-grid">
          <div>
            <SectionHeading
              eyebrow="Academic Philosophy"
              id="overview-title"
              title="A unique integrated approach."
              copy="Our learner-centric educational model integrates modern computer-assisted learning with rigorous academic instruction. The six-year integrated program is designed to transform talented students into capable engineers and global innovators."
            />
            <div className="nzac-value-list">
              <div>
                <span className="nzac-icon-wrap"><Monitor size={22} aria-hidden="true" /></span>
                <div>
                  <h3>Technology-driven Learning</h3>
                  <p>Every student is provided with a laptop, integrating digital learning into the core curriculum.</p>
                </div>
              </div>
              <div>
                <span className="nzac-icon-wrap"><Users size={22} aria-hidden="true" /></span>
                <div>
                  <h3>Learner-Centric Environment</h3>
                  <p>Moving away from traditional teaching to a highly interactive, problem-solving approach.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="nzac-overview-media">
            <img src="/campuses/nuzvid-campus-wide.jpg" alt="Students on campus" loading="lazy" decoding="async" />
          </div>
        </div>
      </section>

      {/* ── Structure / Journey ── */}
      <section className="nzac-structure" aria-labelledby="journey-title">
        <div className="nzac-container">
          <SectionHeading
            eyebrow="The Academic Journey"
            id="journey-title"
            title="The Six-Year Integrated B.Tech"
            copy="Admitted after Class X, students undergo a continuous six-year academic pathway at RGUKT Nuzvid."
            centered
          />
          <div className="nzac-journey">
            <div className="nzac-journey-card">
              <h3>Phase 1: Pre-University Course (PUC)</h3>
              <p>A rigorous two-year foundation program equivalent to Intermediate education. Focuses heavily on Mathematics, Physics, Chemistry, and Information Technology.</p>
              <div className="nzac-journey-stats">
                <div>
                  <strong>2 Years</strong>
                  <span>Duration</span>
                </div>
                <div>
                  <strong>4+</strong>
                  <span>Core Subjects</span>
                </div>
              </div>
            </div>
            <div className="nzac-journey-card secondary">
              <h3>Phase 2: Bachelor of Technology (B.Tech)</h3>
              <p>Following successful completion of the PUC, students automatically transition into the four-year B.Tech program in their allotted engineering discipline.</p>
              <div className="nzac-journey-stats">
                <div>
                  <strong>4 Years</strong>
                  <span>Duration</span>
                </div>
                <div>
                  <strong>7</strong>
                  <span>Engineering Branches</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Departments ── */}
      <section className="nzac-departments" aria-labelledby="depts-title">
        <div className="nzac-container">
          <SectionHeading
            eyebrow="Schools & Departments"
            id="depts-title"
            title="Engineering Disciplines"
            copy="RGUKT Nuzvid offers specialized B.Tech programs across seven core engineering departments."
          />
          <div className="nzac-dept-grid">
            {DEPARTMENTS.map((dept) => {
              const Icon = dept.icon;
              return (
                <Link key={dept.name} to={dept.href} className="nzac-dept-card">
                  <span className="nzac-icon-wrap">
                    <Icon size={24} aria-hidden="true" />
                  </span>
                  <h3>{dept.name}</h3>
                  <span className="nzac-arrow">
                    <ArrowRight size={16} aria-hidden="true" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Additional Programs ── */}
      <section className="nzac-programs" aria-labelledby="programs-title">
        <div className="nzac-container">
          <SectionHeading
            eyebrow="Postgraduate"
            id="programs-title"
            title="M.Tech Programs"
            copy="Advanced technical education for graduates looking to specialize."
            centered
          />
          <div className="nzac-programs-grid">
            {MTECH_PROGRAMS.map(prog => (
              <div key={prog.name} className="nzac-prog-card">
                <h3>{prog.name}</h3>
                <p>{prog.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Facilities ── */}
      <section className="nzac-facilities" aria-labelledby="facilities-title">
        <div className="nzac-container">
          <SectionHeading
            eyebrow="Academic Resources"
            id="facilities-title"
            title="Learning Beyond the Classroom"
            copy="State-of-the-art facilities designed to support practical learning and research."
            centered
          />
          <div className="nzac-facilities-grid">
            <div className="nzac-fac-card">
              <Library size={32} aria-hidden="true" />
              <h3>Central Library</h3>
              <p>Over 20,000 volumes, digital archives, and national/international journals.</p>
            </div>
            <div className="nzac-fac-card">
              <FlaskConical size={32} aria-hidden="true" />
              <h3>Departmental Labs</h3>
              <p>Well-equipped engineering and science laboratories for hands-on experimentation.</p>
            </div>
            <div className="nzac-fac-card">
              <Microscope size={32} aria-hidden="true" />
              <h3>Research Centers</h3>
              <p>Dedicated facilities for ongoing faculty and student research projects.</p>
            </div>
            <div className="nzac-fac-card">
              <Monitor size={32} aria-hidden="true" />
              <h3>Computing Facilities</h3>
              <p>High-speed campus network and advanced software tools available 24/7.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="nzac-final-cta" aria-labelledby="cta-title">
        <div className="nzac-container nzac-final-cta-inner">
          <div>
            <span className="nzac-eyebrow">Join RGUKT</span>
            <h2 id="cta-title">Begin your academic journey today.</h2>
            <p>Find out more about our admission process and eligibility.</p>
          </div>
          <div className="nzac-final-actions">
            <Link to="/nuzvid/admissions" className="nzac-button nzac-button--light">
              View Admissions <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <Link to="/nuzvid/departments" className="nzac-button nzac-button--quiet">
              Explore Departments <ChevronRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
