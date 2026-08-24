import { Link } from 'react-router-dom';
import {
  Atom,
  Cpu,
  Microscope,
  Zap,
  Building2,
  Radio,
  GraduationCap,
  BookOpen,
  MapPin,
  ExternalLink,
  Award,
  Sparkles,
} from 'lucide-react';
import AcademicsSubLayout from '../../components/AcademicsSubLayout';
import {
  PHD_REGISTRATION_MODES,
  RESEARCH_THRUST_AREAS,
  FOUR_CAMPUS_RESEARCH,
  RESEARCH_MILESTONES,
} from '../../data/researchPrograms';
import { ACADEMIC_PROGRAM_DOCUMENTS } from '../../data/academicDocuments';
import { DocumentSection } from '../../components/DocumentCard';
import { ResearchMilestoneTimeline } from '../../components/JourneyTimeline';
import './ProgrammesPage.css';

export default function ResearchProgrammesPage() {
  const getThrustIcon = (iconName: string) => {
    switch (iconName) {
      case 'Atom':
        return <Atom size={22} />;
      case 'Cpu':
        return <Cpu size={22} />;
      case 'Microscope':
        return <Microscope size={22} />;
      case 'Zap':
        return <Zap size={22} />;
      case 'Building2':
        return <Building2 size={22} />;
      case 'Radio':
        return <Radio size={22} />;
      default:
        return <Sparkles size={22} />;
    }
  };

  const getModeIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap size={22} />;
      case 'BookOpen':
        return <BookOpen size={22} />;
      case 'Building2':
        return <Building2 size={22} />;
      default:
        return <Award size={22} />;
    }
  };

  const researchDocs = ACADEMIC_PROGRAM_DOCUMENTS.filter(
    (d) => d.category === 'Research'
  );

  return (
    <AcademicsSubLayout>
      <div className="prog-page-container">
        {/* 1. HERO SECTION (MATCHING ACADEMICS OVERVIEW BACKGROUND & STYLE) */}
        <section className="prog-split-hero">
          <div className="prog-hero-left">
            <span className="prog-hero-badge">ACADEMICS OF RGUKT-AP</span>
            <h1 className="prog-hero-main-title">
              Research &amp; Doctoral Programmes
            </h1>
            <p className="prog-hero-tagline">
              Advancing knowledge through interdisciplinary research, innovation and real-world problem solving.
            </p>
            <p className="prog-hero-description">
              RGUKT-AP fosters a vibrant, peer-reviewed doctoral research ecosystem. Offering Ph.D.
              programmes across engineering, basic sciences, and humanities, our scholars collaborate
              with premier national laboratories, state research clusters, and global institutions
              to solve societal challenges.
            </p>
          </div>

          <div className="prog-hero-right">
            <img
              src="/gallery/research-lab-14.jpg"
              alt="RGUKT Central Advanced Research Characterization Facility"
              className="prog-hero-media-img"
            />
            <div className="prog-hero-media-overlay">
              <div className="prog-hero-stats-row">
                <div className="prog-hero-stat-pill">
                  <span className="prog-stat-val">Ph.D.</span>
                  <span className="prog-stat-lbl">Doctoral Degree</span>
                </div>
                <div className="prog-hero-stat-pill">
                  <span className="prog-stat-val">3 Modes</span>
                  <span className="prog-stat-lbl">Full / Part / Ext</span>
                </div>
                <div className="prog-hero-stat-pill">
                  <span className="prog-stat-val">6+</span>
                  <span className="prog-stat-lbl">Thrust Domains</span>
                </div>
               
              </div>
            </div>
          </div>
        </section>

        {/* 2. PH.D. REGISTRATION CATEGORIES */}
        <section className="prog-section">
          <div className="prog-section-header">
            <span className="prog-section-kicker">Doctoral Structure</span>
            <h2 className="prog-section-title">Ph.D. Registration Pathways</h2>
            <p className="prog-section-subtitle">
              Doctoral candidates can enroll under three officially recognized registration
              categories governed by the RGUKT Ph.D. Regulations.
            </p>
          </div>

          <div className="prog-pedagogy-grid">
            {PHD_REGISTRATION_MODES.map((mode) => (
              <div key={mode.id} className="prog-pedagogy-card">
                <div className="prog-pedagogy-icon">{getModeIcon(mode.icon)}</div>
                <h3 className="prog-pedagogy-title">{mode.title}</h3>
                <p style={{ fontSize: '12px', fontWeight: 700, color: '#C8102E', margin: 0 }}>
                  {mode.targetAudience}
                </p>
                <p className="prog-pedagogy-desc">{mode.description}</p>
                <div style={{ background: '#F8FAFC', padding: '10px 12px', borderRadius: '8px', border: '1px solid #E2E8F0', marginTop: 'auto' }}>
                  <span style={{ fontSize: '11px', fontWeight: 800, color: '#0A2744' }}>
                    FINANCIAL SUPPORT &amp; AID:
                  </span>
                  <p style={{ fontSize: '12px', color: '#475569', margin: '3px 0 0' }}>
                    {mode.financialSupport}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. VERIFIED RESEARCH THRUST AREAS */}
        <section className="prog-section">
          <div className="prog-section-header">
            <span className="prog-section-kicker">Interdisciplinary Research</span>
            <h2 className="prog-section-title">Core Research Thrust Areas</h2>
            <p className="prog-section-subtitle">
              Interdisciplinary domains actively pursued across RGUKT constituent campuses with
              dedicated laboratory facilities, extramural grants, and faculty publications.
            </p>
          </div>

          <div className="prog-thrust-grid">
            {RESEARCH_THRUST_AREAS.map((thrust) => (
              <div key={thrust.id} className="prog-thrust-card">
                <div className="prog-thrust-media">
                  <img
                    src={thrust.image}
                    alt={`${thrust.title} laboratory setup`}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/disciplines/cse.jpg';
                    }}
                  />
                </div>

                <div className="prog-thrust-body">
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span className="prog-thrust-depts">
                      {thrust.departments.join(' • ')}
                    </span>
                    <div style={{ color: '#C8102E' }}>{getThrustIcon(thrust.icon)}</div>
                  </div>

                  <h3 className="prog-thrust-title">{thrust.title}</h3>
                  <p className="prog-thrust-desc">{thrust.description}</p>

                  <div>
                    <span style={{ fontSize: '11.5px', fontWeight: 800, color: '#0A2744', display: 'block', marginBottom: '6px' }}>
                      KEY INITIATIVES &amp; TESTBEDS:
                    </span>
                    <ul className="prog-thrust-initiatives">
                      {thrust.keyInitiatives.map((item, idx) => (
                        <li key={idx} className="prog-thrust-item">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. FOUR-CAMPUS RESEARCH SECTION */}
        <section className="prog-section">
          <div className="prog-section-header">
            <span className="prog-section-kicker">Campus-Wise Ecosystem</span>
            <h2 className="prog-section-title">Research Strengths Across Four Campuses</h2>
            <p className="prog-section-subtitle">
              Verified departmental laboratories, experimental facilities, and research centers
              operating across all four constituent campuses in Andhra Pradesh.
            </p>
          </div>

          <div className="prog-campus-grid">
            {FOUR_CAMPUS_RESEARCH.map((cProfile) => (
              <div key={cProfile.campus} className="prog-campus-card">
                <div className="prog-campus-media">
                  <img
                    src={cProfile.image}
                    alt={`${cProfile.campus} research facilities`}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/campuses/nuzvid.jpg';
                    }}
                  />
                  <span className="prog-campus-badge-overlay">{cProfile.campus}</span>
                </div>

                <div className="prog-campus-body">
                  <span className="prog-campus-district">
                    <MapPin size={13} />
                    <span>{cProfile.district}</span>
                  </span>

                  <p className="prog-campus-desc">{cProfile.researchHighlights}</p>

                  <div>
                    <span style={{ fontSize: '11px', fontWeight: 800, color: '#0A2744', display: 'block', marginBottom: '6px' }}>
                      VERIFIED STRENGTHS &amp; LABS:
                    </span>
                    <ul className="prog-thrust-initiatives">
                      {cProfile.verifiedStrengths.slice(0, 3).map((str, idx) => (
                        <li key={idx} className="prog-thrust-item" style={{ fontSize: '12px' }}>
                          {str}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="prog-campus-footer">
                  <Link to={cProfile.campusLink} className="prog-campus-link-btn">
                    <span>Explore Campus Research</span>
                    <ExternalLink size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. DOCTORAL SCHOLAR RESEARCH JOURNEY */}
        <section className="prog-section">
          <div className="prog-section-header">
            <span className="prog-section-kicker">Milestone Stepper</span>
            <h2 className="prog-section-title">Doctoral Journey: From Coursework to Ph.D. Defense</h2>
            <p className="prog-section-subtitle">
              A structured, transparent doctoral milestone framework ensuring quality research,
              ethical publications, and timely completion governed by DRC guidelines.
            </p>
          </div>

          <ResearchMilestoneTimeline milestones={RESEARCH_MILESTONES} />
        </section>

        {/* 6. PH.D. REGULATIONS & DOCUMENTS (LINE-BY-LINE) */}
        <section className="prog-section">
          <div className="prog-section-header">
            <span className="prog-section-kicker">Statutory Ordinances &amp; Guidelines</span>
            <h2 className="prog-section-title">Ph.D. Regulations &amp; Research Documents (PDFs)</h2>
            <p className="prog-section-subtitle">
              Download official Ph.D. coursework guidelines, research ethics policy, thesis
              submission procedures, and Academic Council resolutions published by RGUKT-AP.
            </p>
          </div>

          <DocumentSection documents={researchDocs} defaultFilter="Research" />
        </section>

        {/* 7. DOCTORAL ADMISSIONS CTA */}
        <section className="prog-cta-banner">
          <div className="prog-cta-content">
            <span className="prog-cta-kicker">Doctoral Admissions</span>
            <h2 className="prog-cta-title">Pursue Your Ph.D. at RGUKT-AP</h2>
            <p className="prog-cta-desc">
              Applications for full-time, part-time, and external Ph.D. scholars are invited
              periodically through university notifications. Check research vacancies, supervisor
              profiles, and admission timelines.
            </p>
          </div>

          <div className="prog-cta-btn-group">
            <Link to="/admissions/doctoral" className="prog-cta-btn-primary">
              Doctoral Admissions Guidelines →
            </Link>
            <Link to="/research/thrust-areas" className="prog-cta-btn-outline">
              Research Thrust Areas
            </Link>
          </div>
        </section>
      </div>
    </AcademicsSubLayout>
  );
}
