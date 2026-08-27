import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Cpu,
  Atom,
  Building2,
  Settings,
  ChevronRight,
  FlaskConical,
  Award,
  Globe,
  Compass,
} from 'lucide-react';
import AcademicsSubLayout from '../../components/AcademicsSubLayout';
import {
  PG_PROGRAMS,
  PG_ACADEMIC_FRAMEWORK,
  type PGProgram,
} from '../../data/postgraduatePrograms';
import { ACADEMIC_PROGRAM_DOCUMENTS } from '../../data/academicDocuments';
import { DocumentSection } from '../../components/DocumentCard';
import { SpecializationMap } from '../../components/SpecializationMap';
import { ProgramDetailModal } from '../../components/ProgramDetailModal';
import './ProgrammesPage.css';

export default function PostgraduateProgrammesPage() {
  const [selectedProgram, setSelectedProgram] = useState<PGProgram | null>(null);

  const getPGIcon = (code: string) => {
    switch (code) {
      case 'MTECH-AIML':
        return <Cpu size={18} />;
      case 'MTECH-AMT':
        return <Atom size={18} />;
      case 'MTECH-TE':
        return <Building2 size={18} />;
      case 'MTECH-EAD':
        return <Settings size={18} />;
      default:
        return <Cpu size={18} />;
    }
  };

  const getFrameworkIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu size={20} />;
      case 'FlaskConical':
        return <FlaskConical size={20} />;
      case 'Award':
        return <Award size={20} />;
      case 'Globe':
        return <Globe size={20} />;
      default:
        return <Compass size={20} />;
    }
  };

  const pgDocs = ACADEMIC_PROGRAM_DOCUMENTS.filter((d) => d.category === 'PG');

  return (
    <AcademicsSubLayout>
      <div className="prog-page-container">
        {/* 1. HERO SECTION (MATCHING ACADEMICS OVERVIEW BACKGROUND & STYLE) */}
        <section className="prog-split-hero">
          <div className="prog-hero-left">
            <span className="prog-hero-badge">ACADEMICS OF RGUKT-AP</span>
            <h1 className="prog-hero-main-title">
              Postgraduate Programmes
            </h1>
            <p className="prog-hero-tagline">
              Master of Technology (M.Tech) • Advanced Computational Engineering &amp; Research
            </p>
            <p className="prog-hero-description">
              RGUKT-AP offers advanced Master of Technology (M.Tech) programmes designed to prepare
              engineers for leadership in high-end computational research, industry R&amp;D, and
              doctoral studies. The curricula incorporate state-of-the-art computational simulation
              tools competing with premier global university benchmarks.
            </p>
          </div>

          <div className="prog-hero-right">
            <img
              src="/gallery/postgraduate-programmes-hero.jpg"
              alt="Postgraduate Programmes & Advanced Research at RGUKT"
              className="prog-hero-media-img"
            />
            <div className="prog-hero-media-overlay">
              <div className="prog-hero-stats-row">
                <div className="prog-hero-stat-pill">
                  <span className="prog-stat-val">2-Year</span>
                  <span className="prog-stat-lbl">Full-Time M.Tech</span>
                </div>
                <div className="prog-hero-stat-pill">
                  <span className="prog-stat-val">4</span>
                  <span className="prog-stat-lbl">Specialisations</span>
                </div>

                
              </div>
            </div>
          </div>
        </section>

        {/* 2. POSTGRADUATE OVERVIEW */}
        <section className="prog-section">
          <div className="prog-section-header">
            <span className="prog-section-kicker">Advanced Academic Vision</span>
            <h2 className="prog-section-title">Computational Engineering Focus</h2>
            <p className="prog-section-subtitle">
              Unlike conventional postgraduate courses, RGUKT M.Tech degrees are structured with a
              deep emphasis on mathematical modeling, computational methods, machine learning, and
              high-performance computing across all engineering domains.
            </p>
          </div>

          <div className="prog-pedagogy-grid">
            {PG_ACADEMIC_FRAMEWORK.map((item) => (
              <div key={item.title} className="prog-pedagogy-card" style={{ padding: '14px' }}>
                <div className="prog-pedagogy-icon">{getFrameworkIcon(item.icon)}</div>
                <h3 className="prog-pedagogy-title" style={{ fontSize: '13.5px' }}>{item.title}</h3>
                <p className="prog-pedagogy-desc" style={{ fontSize: '12px' }}>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. M.TECH PROGRAMME CARDS (COMPACT HEIGHT) */}
        <section className="prog-section">
          <div className="prog-section-header">
            <span className="prog-section-kicker">Master of Technology Tracks</span>
            <h2 className="prog-section-title">Officially Listed M.Tech Specialisations</h2>
            <p className="prog-section-subtitle">
              Explore the officially established postgraduate degrees offered at RGUKT constituent
              campuses with verified industry alignments and research laboratory testbeds.
            </p>
          </div>

          <div className="prog-card-grid">
            {PG_PROGRAMS.map((prog) => (
              <div key={prog.id} className="prog-discipline-card">
                <div className="prog-card-image-wrap" style={{ maxHeight: '135px' }}>
                  <img
                    src={prog.image}
                    alt={`${prog.title} research at RGUKT`}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/disciplines/cse.jpg';
                    }}
                  />
                  <span className="prog-card-code-badge">{prog.degree}</span>
                </div>

                <div className="prog-card-body" style={{ padding: '12px 14px', gap: '8px' }}>
                  <div className="prog-card-header-row">
                    <div className="prog-card-icon" style={{ width: '30px', height: '30px' }}>{getPGIcon(prog.code)}</div>
                    <div>
                      <span style={{ fontSize: '10.5px', fontWeight: 800, color: '#64748B', textTransform: 'uppercase' }}>
                        {prog.parentDiscipline}
                      </span>
                      <h3 className="prog-card-name" style={{ fontSize: '14px' }}>{prog.title}</h3>
                    </div>
                  </div>

                  <p className="prog-card-short-desc" style={{ fontSize: '12px', lineHeight: 1.45 }}>{prog.shortDescription}</p>

                  <div style={{ background: 'rgba(255, 255, 255, 0.85)', padding: '6px 10px', borderRadius: '6px', border: '1px solid rgba(148, 163, 184, 0.25)' }}>
                    <span style={{ fontSize: '10px', fontWeight: 800, color: '#C8102E', textTransform: 'uppercase' }}>
                      RESEARCH FOCUS:
                    </span>
                    <p style={{ fontSize: '11.5px', color: '#334155', margin: '2px 0 0', lineHeight: 1.4 }}>
                      {prog.researchAndIndustryFocus}
                    </p>
                  </div>

                  <div className="prog-card-key-areas">
                    {prog.keySkillsDeveloped.slice(0, 3).map((skill, idx) => (
                      <span key={idx} className="prog-key-area-tag" style={{ fontSize: '10px', padding: '1px 6px' }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="prog-card-footer" style={{ padding: '10px 14px' }}>
                  <span className="prog-card-intake" style={{ fontSize: '11px' }}>
                    Duration: <strong>{prog.duration}</strong>
                  </span>
                  <button
                    className="prog-card-btn"
                    style={{ padding: '5px 11px', fontSize: '11.5px' }}
                    onClick={() => setSelectedProgram(prog)}
                  >
                    <span>View Details</span>
                    <ChevronRight size={13} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. VISUAL SPECIALIZATION MAP */}
        <section className="prog-section">
          <div className="prog-section-header">
            <span className="prog-section-kicker">Academic Pathway Progression</span>
            <h2 className="prog-section-title">Specialization Map: B.Tech to M.Tech</h2>
            <p className="prog-section-subtitle">
              Visualizing the seamless transition from foundational undergraduate engineering
              disciplines into advanced, computationally intensive master's research specializations.
            </p>
          </div>

          <SpecializationMap />
        </section>

        {/* 5. VERIFIED OFFICIAL PG DOCUMENTS (ONLY POSTGRADUATE DOCUMENTS) */}
        <section className="prog-section">
          <div className="prog-section-header">
            <span className="prog-section-kicker">Official PG Regulations &amp; Syllabi</span>
            <h2 className="prog-section-title">Verified Postgraduate Documents (PDFs)</h2>
            <p className="prog-section-subtitle">
              Authoritative Master of Technology ordinances, academic regulations, syllabus
              booklets, and admission criteria documents published by RGUKT-AP.
            </p>
          </div>

          <DocumentSection documents={pgDocs} />
        </section>

        {/* 6. ADMISSIONS CALL TO ACTION */}
        <section className="prog-cta-banner">
          <div className="prog-cta-content">
            <span className="prog-cta-kicker">PG Admissions Portal</span>
            <h2 className="prog-cta-title">Advance Your Career with RGUKT M.Tech</h2>
            <p className="prog-cta-desc">
              Admissions to M.Tech specializations are conducted based on valid GATE scores and
              institutional entrance merit. Explore eligibility criteria and syllabus requirements.
            </p>
          </div>

          <div className="prog-cta-btn-group">
            <Link to="/admissions/postgraduate" className="prog-cta-btn-primary">
              PG Admissions Guidelines →
            </Link>
            <a
              href="https://admissions.rgukt.in"
              target="_blank"
              rel="noopener noreferrer"
              className="prog-cta-btn-outline"
            >
              Admissions Portal ↗
            </a>
          </div>
        </section>
      </div>

      {/* Program Detail Modal */}
      <ProgramDetailModal
        program={selectedProgram}
        type="PG"
        onClose={() => setSelectedProgram(null)}
      />
    </AcademicsSubLayout>
  );
}
