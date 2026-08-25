import { useSectionTheme } from '../SectionPageLayout';

interface CareersHeroProps {
  onScrollToOpenings: () => void;
  onScrollToDocuments: () => void;
  onSelectCategory: (category: string) => void;
}

export default function CareersHero({
  onScrollToOpenings,
  onScrollToDocuments,
  onSelectCategory,
}: CareersHeroProps) {
  const c = useSectionTheme();

  return (
    <section className="careers-hero-container">
      {/* 1. SEPARATE 16:9 IMAGE BANNER WITH NEW CAREER & FACULTY RESEARCH IMAGE */}
      <div className="careers-hero-banner" style={{ border: `1px solid ${c.border}` }}>
        <img
          src="/gallery/global-collab-1.jpeg"
          alt="RGUKT-AP Faculty & Leadership Collaboration"
          className="careers-hero-banner-img"
        />
        <div className="careers-hero-banner-overlay">
          <span className="careers-hero-banner-tag">
            Rajiv Gandhi University of Knowledge Technologies – Andhra Pradesh
          </span>
        </div>
      </div>

      {/* 2. REFINED CAREERS INSTITUTIONAL GRADIENT CARD (CYAN -> BLUE -> FUCHSIA/PURPLE) */}
      <div className="careers-hero-card" style={{ border: `1px solid ${c.border}` }}>
        <div className="careers-hero-badge-row">
          <span className="careers-badge">CAREERS &amp; RECRUITMENT PORTAL</span>
          <span className="careers-sub-badge">4 CONSTITUENT CAMPUSES • AP STATE UNIVERSITY</span>
        </div>

        <h1 className="careers-hero-title">Build Your Career at RGUKT</h1>

        <p className="careers-hero-tagline">
          Academic Excellence • Cutting-Edge Research • Empowering Rural Youth
        </p>

        <p className="careers-hero-desc">
          Rajiv Gandhi University of Knowledge Technologies - Andhra Pradesh (RGUKT-AP) offers
          rewarding employment opportunities for distinguished faculty educators, research mentors,
          administrative executives, technical engineers, and campus support staff across our four
          fully residential constituent campuses: <strong>Nuzvid</strong>, <strong>RK Valley</strong>,{' '}
          <strong>Srikakulam</strong>, and <strong>Ongole</strong>. All recruitment follows transparent,
          merit-based statutory selection in accordance with UGC, AICTE, and Government of Andhra
          Pradesh norms.
        </p>

        {/* CTAs */}
        <div className="careers-hero-actions">
          <button
            type="button"
            className="careers-btn-primary"
            onClick={onScrollToOpenings}
            aria-label="View Current Openings"
          >
            <span>📋 View Current Openings</span>
          </button>
          <button
            type="button"
            className="careers-btn-secondary"
            onClick={onScrollToDocuments}
            aria-label="Official Recruitment Documents"
          >
            <span>📄 Official Recruitment Documents</span>
          </button>
        </div>

        {/* Quick Category Jump Chips */}
        <div className="careers-hero-quick-links">
          <span className="careers-hero-quick-label">Explore Sectors:</span>
          <div className="careers-hero-quick-chips">
            {[
              'Faculty Positions',
              'Guest & Visiting Faculty',
              'Non-Teaching & Administrative',
              'Technical & Laboratory',
              'Healthcare & Campus Services',
            ].map((cat) => (
              <button
                key={cat}
                type="button"
                className="careers-hero-chip"
                onClick={() => onSelectCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
