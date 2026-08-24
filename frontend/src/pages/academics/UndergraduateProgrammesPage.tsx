import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Code,
  Radio,
  Zap,
  Settings,
  Building,
  FlaskRound,
  Atom,
  Laptop,
  Cpu,
  HeartHandshake,
  Home,
  MapPin,
  ExternalLink,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import AcademicsSubLayout from '../../components/AcademicsSubLayout';
import {
  UG_PROGRAMS,
  UG_JOURNEY_STEPS,
  UG_PEDAGOGICAL_PILLARS,
  type UGProgram,
} from '../../data/undergraduatePrograms';
import { VERIFIED_CAMPUSES } from '../../data/campuses';
import { ACADEMIC_PROGRAM_DOCUMENTS } from '../../data/academicDocuments';
import { DocumentSection } from '../../components/DocumentCard';
import { UGJourneyTimeline } from '../../components/JourneyTimeline';
import { ProgramDetailModal } from '../../components/ProgramDetailModal';
import './ProgrammesPage.css';

export default function UndergraduateProgrammesPage() {
  const [selectedProgram, setSelectedProgram] = useState<UGProgram | null>(null);

  const getBranchIcon = (code: string) => {
    switch (code) {
      case 'CSE':
        return <Code size={18} />;
      case 'ECE':
        return <Radio size={18} />;
      case 'EEE':
        return <Zap size={18} />;
      case 'MECH':
        return <Settings size={18} />;
      case 'CIVIL':
        return <Building size={18} />;
      case 'CHEM':
        return <FlaskRound size={18} />;
      case 'MME':
        return <Atom size={18} />;
      default:
        return <Cpu size={18} />;
    }
  };

  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'Laptop':
        return <Laptop size={20} />;
      case 'Cpu':
        return <Cpu size={20} />;
      case 'HeartHandshake':
        return <HeartHandshake size={20} />;
      case 'Home':
        return <Home size={20} />;
      default:
        return <Sparkles size={20} />;
    }
  };

  const ugDocs = ACADEMIC_PROGRAM_DOCUMENTS.filter((d) => d.category === 'UG');

  return (
    <AcademicsSubLayout>
      <div className="prog-page-container">
        {/* 1. HERO SECTION (MATCHING ACADEMICS OVERVIEW BACKGROUND & STYLE) */}
        <section className="prog-split-hero">
          <div className="prog-hero-left">
            <span className="prog-hero-badge">ACADEMICS OF RGUKT-AP</span>
            <h1 className="prog-hero-main-title">
              Undergraduate Programmes
            </h1>
            <p className="prog-hero-tagline">
              Six-Year Integrated B.Tech Degree • 2-Year PUC + 4-Year Engineering
            </p>
            <p className="prog-hero-description">
              RGUKT-AP offers a unique, fully residential 6-year integrated engineering education
              model for high-achieving rural youth following Class 10 / SSC. Combining deep
              foundational sciences, ICT learning-by-doing, and rigorous engineering mastery across
              seven specialized disciplines.
            </p>
          </div>

          <div className="prog-hero-right">
            <img
              src="/gallery/nuzvid-campus-hero.jpg"
              alt="RGUKT Academic and Campus Infrastructure"
              className="prog-hero-media-img"
            />
            <div className="prog-hero-media-overlay">
              <div className="prog-hero-stats-row">
                <div className="prog-hero-stat-pill">
                  <span className="prog-stat-val">6-Year</span>
                  <span className="prog-stat-lbl">Integrated</span>
                </div>
                <div className="prog-hero-stat-pill">
                  <span className="prog-stat-val">7</span>
                  <span className="prog-stat-lbl">Branches</span>
                </div>
                <div className="prog-hero-stat-pill">
                  <span className="prog-stat-val">4</span>
                  <span className="prog-stat-lbl">Campuses</span>
                </div>
                <div className="prog-hero-stat-pill">
                  <span className="prog-stat-val">100%</span>
                  <span className="prog-stat-lbl">Laptops</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. THE SIX-YEAR INTEGRATED EDUCATION MODEL */}
        <section className="prog-section">
          <div className="prog-section-header">
            <span className="prog-section-kicker">Educational Model</span>
            <h2 className="prog-section-title">The RGUKT Six-Year Integrated Pathway</h2>
            <p className="prog-section-subtitle">
              Admitting talented youth directly after Class 10, RGUKT provides a seamless continuum
              from foundational pre-university mathematics and sciences into professional engineering
              disciplines without requiring external coaching or intermediate entrance examinations.
            </p>
          </div>

          {/* 3. VISUAL TIMELINE STEPPER: HOW THE 6-YEAR JOURNEY WORKS */}
          <div>
            <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '13px', fontWeight: 800, color: '#0A2744', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                How the 6-Year Journey Works (Timeline)
              </span>
              <span style={{ fontSize: '11.5px', color: '#64748B', fontWeight: 600 }}>
                Scroll horizontally to explore all phases →
              </span>
            </div>
            <UGJourneyTimeline steps={UG_JOURNEY_STEPS} />
          </div>
        </section>

        {/* 4. B.TECH DISCIPLINES (WITH LINEAR GRADIENT CARDS) */}
        <section className="prog-section">
          <div className="prog-section-header">
            <span className="prog-section-kicker">Engineering Specialisations</span>
            <h2 className="prog-section-title">B.Tech Engineering Programmes</h2>
            <p className="prog-section-subtitle">
              Seven core engineering disciplines offered across RGUKT constituent campuses with
              standardized curricula, modern laboratories, and expert faculty mentorship.
            </p>
          </div>

          <div className="prog-card-grid">
            {UG_PROGRAMS.map((prog) => (
              <div key={prog.id} className="prog-discipline-card">
                <div className="prog-card-image-wrap">
                  <img
                    src={prog.image}
                    alt={`${prog.name} laboratory and equipment at RGUKT`}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/disciplines/cse.jpg';
                    }}
                  />
                  <span className="prog-card-code-badge">{prog.code}</span>
                </div>

                <div className="prog-card-body">
                  <div className="prog-card-header-row">
                    <div className="prog-card-icon">{getBranchIcon(prog.code)}</div>
                    <h3 className="prog-card-name">{prog.name}</h3>
                  </div>

                  <p className="prog-card-short-desc">{prog.shortDescription}</p>

                  <div className="prog-card-key-areas">
                    {prog.keyAreas.slice(0, 3).map((area, idx) => (
                      <span key={idx} className="prog-key-area-tag">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="prog-card-footer">
                  <span className="prog-card-intake">
                    Intake: <strong>{prog.intakePerCampus} / campus</strong>
                  </span>
                  <button
                    className="prog-card-btn"
                    onClick={() => setSelectedProgram(prog)}
                  >
                    <span>View Programme</span>
                    <ChevronRight size={13} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. FOUR-CAMPUS SECTION: RGUKT ACROSS FOUR CAMPUSES */}
        <section className="prog-section">
          <div className="prog-section-header">
            <span className="prog-section-kicker">State-Wide Presence</span>
            <h2 className="prog-section-title">RGUKT Across Four Campuses</h2>
            <p className="prog-section-subtitle">
              Four residential constituent campuses across Andhra Pradesh providing uniform quality,
              shared academic council ordinances, and world-class educational opportunities.
            </p>
          </div>

          <div className="prog-campus-grid">
            {VERIFIED_CAMPUSES.map((campus) => (
              <div key={campus.id} className="prog-campus-card">
                <div className="prog-campus-media">
                  <img
                    src={campus.image}
                    alt={`${campus.name} official campus view`}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/campuses/nuzvid.jpg';
                    }}
                  />
                  <span className="prog-campus-badge-overlay">Est. {campus.established}</span>
                </div>

                <div className="prog-campus-body">
                  <h3 className="prog-campus-name">{campus.name}</h3>
                  <span className="prog-campus-district">
                    <MapPin size={12} />
                    <span>{campus.district}</span>
                  </span>
                  <p className="prog-campus-desc">{campus.overview}</p>

                  <div className="prog-campus-branches">
                    {campus.verifiedBranches.map((br) => (
                      <span key={br} className="prog-campus-branch-tag">
                        {br}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="prog-campus-footer">
                  <Link to={campus.campusUrl} className="prog-campus-link-btn">
                    <span>Visit {campus.shortName} Campus</span>
                    <ExternalLink size={12} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. LEARNING MODEL & PEDAGOGICAL PILLARS (3 CARDS) */}
        <section className="prog-section">
          <div className="prog-section-header">
            <span className="prog-section-kicker">Pedagogical Framework</span>
            <h2 className="prog-section-title">The Learning-By-Doing Model</h2>
            <p className="prog-section-subtitle">
              Designed to nurture critical problem solvers rather than rote learners through deep
              ICT integration, personalized mentorship, and holistic living.
            </p>
          </div>

          <div className="prog-pedagogy-grid">
            {UG_PEDAGOGICAL_PILLARS.map((p) => (
              <div key={p.title} className="prog-pedagogy-card">
                <div className="prog-pedagogy-icon">{getPillarIcon(p.icon)}</div>
                <h3 className="prog-pedagogy-title">{p.title}</h3>
                <p className="prog-pedagogy-desc">{p.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 7. VERIFIED OFFICIAL UG DOCUMENTS (LINE-BY-LINE) */}
        <section className="prog-section">
          <div className="prog-section-header">
            <span className="prog-section-kicker">Official Regulations &amp; Syllabi</span>
            <h2 className="prog-section-title">Verified Undergraduate Documents (PDFs)</h2>
            <p className="prog-section-subtitle">
              Download the authoritative academic regulations, branch-wise syllabi, curriculum
              frameworks, and promotion policies published by RGUKT-AP.
            </p>
          </div>

          <DocumentSection documents={ugDocs} defaultFilter="UG" />
        </section>

        {/* 8. ADMISSIONS CALL TO ACTION */}
        <section className="prog-cta-banner">
          <div className="prog-cta-content">
            <span className="prog-cta-kicker">Admissions 2026</span>
            <h2 className="prog-cta-title">Aspiring to Join the 6-Year Integrated B.Tech?</h2>
            <p className="prog-cta-desc">
              Applications for Class 10 / SSC graduates are processed through the centralized state
              admissions portal. Explore eligibility criteria, seat reservation matrix, and counselling schedules.
            </p>
          </div>

          <div className="prog-cta-btn-group">
            <Link to="/admissions/2026" className="prog-cta-btn-primary">
              UG Admissions 2026 →
            </Link>
            <Link to="/admissions/eligibility" className="prog-cta-btn-outline">
              Check Eligibility
            </Link>
          </div>
        </section>
      </div>

      {/* Program Detail Modal */}
      <ProgramDetailModal
        program={selectedProgram}
        type="UG"
        onClose={() => setSelectedProgram(null)}
      />
    </AcademicsSubLayout>
  );
}
