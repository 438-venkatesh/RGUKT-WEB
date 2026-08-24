import {
  Award,
  Briefcase,
  BookOpen,
} from 'lucide-react';
import AcademicsSubLayout from '../../components/AcademicsSubLayout';
import { ACADEMIC_PROGRAM_DOCUMENTS } from '../../data/academicDocuments';
import { DocumentSection } from '../../components/DocumentCard';
import './ProgrammesPage.css';

export default function SummerProgrammesPage() {
  const summerDocs = ACADEMIC_PROGRAM_DOCUMENTS.filter(
    (d) => d.category === 'Summer'
  );

  const summerTracks = [
    {
      id: 'nptel-track',
      title: 'NPTEL & SWAYAM Online Certifications',
      domain: 'National Online MOOCs',
      description: 'Students complete 4-week, 8-week, or 12-week proctored online courses from IITs/IISc with automatic credit transfer into their degree.',
      skills: ['Cloud Computing', 'Deep Learning', 'VLSI Architectures', 'Data Analytics'],
      duration: '4 – 12 Weeks',
      icon: <Award size={20} />,
    },
    {
      id: 'internship-track',
      title: 'Industrial & Corporate Internships',
      domain: 'Industry Exposure',
      description: 'Summer internships with leading corporate partners, tech multinationals, and state public sector undertakings arranged via the T&P Cell.',
      skills: ['Software Engineering', 'Automotive Systems', 'Telecom Networks', 'Civil Project Site Work'],
      duration: '6 – 8 Weeks',
      icon: <Briefcase size={20} />,
    },
    
    {
      id: 'remedial-track',
      title: 'Academic Remedial & Skill Bridge Program',
      domain: 'Curriculum Reinforcement',
      description: 'Intensive summer bridge modules for students requiring extra academic reinforcement in engineering mathematics and core sciences.',
      skills: ['Calculus & Linear Algebra', 'Physics for Engineers', 'Data Structures', 'Circuit Theory'],
      duration: '4 Weeks',
      icon: <BookOpen size={20} />,
    },
  ];

  const summerSteps = [
    {
      step: '01',
      title: 'Portal Application',
      timeline: 'March 15 – 30',
      desc: 'Students submit summer internship offers or NPTEL course registration receipts on the campus portal.',
    },
    {
      step: '02',
      title: 'Departmental Approval',
      timeline: 'April 1 – 10',
      desc: 'Head of Department (HoD) and faculty advisors verify course rigor and issue official No Objection Certificates (NOC).',
    },
    {
      step: '03',
      title: 'Summer Term Execution',
      timeline: 'May 1 – 31',
      desc: 'Active immersion in corporate internships, laboratory research projects, or proctored NPTEL examination preparation.',
    },
    {
      step: '04',
      title: 'Evaluation & Viva',
      timeline: 'June 1 – 10',
      desc: 'Submission of formal internship reports, employer feedback appraisals, and department presentation viva-voce.',
    },
    {
      step: '05',
      title: 'Credit Transfer',
      timeline: 'June 15',
      desc: 'Grades and credits transferred directly to the student academic grade sheet under open/elective credit slots.',
    },
  ];

  return (
    <AcademicsSubLayout>
      <div className="prog-page-container">
        {/* 1. HERO SECTION (MATCHING ACADEMICS OVERVIEW BACKGROUND & STYLE) */}
        <section className="prog-split-hero">
          <div className="prog-hero-left">
            <span className="prog-hero-badge">ACADEMICS OF RGUKT-AP</span>
            <h1 className="prog-hero-main-title">
              Summer Academic Initiatives
            </h1>
            <p className="prog-hero-tagline">
              NPTEL Certifications • Industry Internships • Research Immersion
            </p>
            <p className="prog-hero-description">
              RGUKT-AP utilizes the annual summer period (May 1 – May 31) for structured academic
              enrichment, certification drives, industry internships, and remedial programmes to ensure
              continuous student growth and career readiness.
            </p>
          </div>

          <div className="prog-hero-right">
            <img
              src="/gallery/summer-programmes-hero.jpg"
              alt="Students collaborating in Summer Technical Workshops and Internship Projects"
              className="prog-hero-media-img"
            />
            <div className="prog-hero-media-overlay">
              <div className="prog-hero-stats-row">
                <div className="prog-hero-stat-pill">
                  <span className="prog-stat-val">May 1–31</span>
                  <span className="prog-stat-lbl">Summer Term</span>
                </div>
                <div className="prog-hero-stat-pill">
                  <span className="prog-stat-val">NPTEL</span>
                  <span className="prog-stat-lbl">Credit Transfer</span>
                </div>
                <div className="prog-hero-stat-pill">
                  <span className="prog-stat-val">100+</span>
                  <span className="prog-stat-lbl">Industry Links</span>
                </div>
                <div className="prog-hero-stat-pill">
                  <span className="prog-stat-val">4</span>
                  <span className="prog-stat-lbl">AP Campuses</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. SUMMER ENRICHMENT OBJECTIVES */}
        <section className="prog-section">
          <div className="prog-section-header">
            <span className="prog-section-kicker">Vacation Enrichment</span>
            <h2 className="prog-section-title">Summer Enrichment Objectives</h2>
            <p className="prog-section-subtitle">
              Maximizing student potential during the vacation period through targeted learning
              programmes, national online certifications, and industrial research testbeds.
            </p>
          </div>

          <div className="prog-pedagogy-grid">
            <div className="prog-pedagogy-card">
              <div className="prog-pedagogy-icon"><Award size={20} /></div>
              <h3 className="prog-pedagogy-title">NPTEL &amp; SWAYAM Certifications</h3>
              <p className="prog-pedagogy-desc">
                Proctored national examinations in emerging areas like Cloud Computing, AI/ML, VLSI,
                and Data Science with formal university credit equivalence.
              </p>
            </div>

            <div className="prog-pedagogy-card">
              <div className="prog-pedagogy-icon"><Briefcase size={20} /></div>
              <h3 className="prog-pedagogy-title">Industry &amp; Research Internships</h3>
              <p className="prog-pedagogy-desc">
                Coordinated by the Placement Cell to place students in leading corporate R&amp;D
                divisions, tech startups, and national research institutes.
              </p>
            </div>

            <div className="prog-pedagogy-card">
              <div className="prog-pedagogy-icon"><BookOpen size={20} /></div>
              <h3 className="prog-pedagogy-title">Remedial &amp; Backlog Reinforcement</h3>
              <p className="prog-pedagogy-desc">
                Dedicated coaching and tutorial sessions for students needing academic reinforcement in
                Mathematics, Programming, and core engineering subjects.
              </p>
            </div>
          </div>
        </section>

        {/* 3. FOUR SUMMER TRACKS (LINEAR GRADIENT CARDS) */}
        <section className="prog-section">
          <div className="prog-section-header">
            <span className="prog-section-kicker">Program Pathways</span>
            <h2 className="prog-section-title">Summer Academic Pathways &amp; Tracks</h2>
            <p className="prog-section-subtitle">
              Choose from four approved summer enrichment pathways tailored for career acceleration
              and academic progression.
            </p>
          </div>

          <div className="prog-card-grid">
            {summerTracks.map((track) => (
              <div key={track.id} className="prog-discipline-card">
                <div className="prog-card-body" style={{ paddingTop: '20px' }}>
                  <div className="prog-card-header-row">
                    <div className="prog-card-icon">{track.icon}</div>
                    <div>
                      <span style={{ fontSize: '11px', fontWeight: 800, color: '#64748B', textTransform: 'uppercase' }}>
                        {track.domain}
                      </span>
                      <h3 className="prog-card-name" style={{ fontSize: '15px' }}>{track.title}</h3>
                    </div>
                  </div>

                  <p className="prog-card-short-desc">{track.description}</p>

                  <div>
                    <span style={{ fontSize: '11px', fontWeight: 800, color: '#0A2744', display: 'block', marginBottom: '4px' }}>
                      FOCUS DOMAINS &amp; SKILLS:
                    </span>
                    <div className="prog-card-key-areas">
                      {track.skills.map((skill, idx) => (
                        <span key={idx} className="prog-key-area-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="prog-card-footer">
                  <span className="prog-card-intake">
                    Duration: <strong>{track.duration}</strong>
                  </span>
                  <span style={{ fontSize: '11.5px', fontWeight: 800, color: '#C8102E' }}>
                    Credit Transferable ✓
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. SUMMER INTERNSHIP TIMELINE STEPPER */}
        <section className="prog-section">
          <div className="prog-section-header">
            <span className="prog-section-kicker">Process Lifecycle</span>
            <h2 className="prog-section-title">Summer Term Operational Stepper</h2>
            <p className="prog-section-subtitle">
              A transparent step-by-step roadmap from initial portal registration through faculty
              review to final credit transfer on the university grade sheet.
            </p>
          </div>

          <div className="timeline-wrap">
            <div className="timeline-stepper timeline-stepper-5">
              {summerSteps.map((s) => (
                <div key={s.step} className="timeline-card">
                  <div className="timeline-step-badge">
                    <span className="timeline-number">{s.step}</span>
                    <span className="timeline-duration">{s.timeline}</span>
                  </div>
                  <h4 className="timeline-title">{s.title}</h4>
                  <p className="timeline-desc">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. VERIFIED SUMMER DOCUMENTS (LINE-BY-LINE) */}
        <section className="prog-section">
          <div className="prog-section-header">
            <span className="prog-section-kicker">Official Guidelines &amp; Policies</span>
            <h2 className="prog-section-title">Verified Summer Programme Documents (PDFs)</h2>
            <p className="prog-section-subtitle">
              Download the official internship guidelines, NPTEL credit transfer equivalence matrix,
              and academic council notifications published by RGUKT-AP.
            </p>
          </div>

          <DocumentSection documents={summerDocs} defaultFilter="Summer" />
        </section>

        {/* 6. SUMMER ENROLLMENT CTA */}
        <section className="prog-cta-banner">
          <div className="prog-cta-content">
            <span className="prog-cta-kicker">Training &amp; Placement Cell</span>
            <h2 className="prog-cta-title">Apply for Summer Internships &amp; Certifications</h2>
            <p className="prog-cta-desc">
              Connect with your campus Training and Placement Cell and departmental coordinator to
              register approved internship offers before the summer deadline.
            </p>
          </div>

          <div className="prog-cta-btn-group">
            <a
              href="https://nptel.ac.in"
              target="_blank"
              rel="noopener noreferrer"
              className="prog-cta-btn-primary"
            >
              NPTEL Course Portal ↗
            </a>
            <a
              href="/docs/academics/summer-internship-guidelines-2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="prog-cta-btn-outline"
            >
              Internship Guidelines PDF
            </a>
          </div>
        </section>
      </div>
    </AcademicsSubLayout>
  );
}
