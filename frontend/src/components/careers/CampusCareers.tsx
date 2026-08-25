import { useSectionTheme } from '../SectionPageLayout';
import { CAMPUS_CAREERS } from '../../data/careersContent';
import type { CampusCareerData } from '../../data/careersContent';

interface CampusCareersProps {
  onSelectCampus: (campus: string) => void;
}

export default function CampusCareers({ onSelectCampus }: CampusCareersProps) {
  const c = useSectionTheme();

  return (
    <section className="careers-section" id="campuses">
      <div className="careers-section-header">
        <span className="careers-subheading">Regional Opportunities</span>
        <h2 className="careers-heading" style={{ color: c.text }}>
          Opportunities Across RGUKT Campuses
        </h2>
        <p className="careers-intro" style={{ color: c.textMuted }}>
          RGUKT-AP comprises four autonomous constituent residential campuses located across Andhra
          Pradesh. Faculty and staff members enjoy dedicated campus residential housing, modern
          laboratories, and vibrant academic environments:
        </p>
      </div>

      <div className="careers-campuses-grid">
        {CAMPUS_CAREERS.map((item: CampusCareerData) => (
          <div
            key={item.campus}
            className="careers-campus-card"
            style={{
              background: c.surface,
              border: `1px solid ${c.border}`,
            }}
          >
            {/* 16:9 CAMPUS PHOTO */}
            <div className="careers-campus-img-wrap">
              <img
                src={item.image}
                alt={`Official photo of ${item.fullName}`}
                className="careers-campus-img"
              />
              <div className="careers-campus-badge">
                <span>{item.location}</span>
              </div>
            </div>

            {/* Campus Content */}
            <div className="careers-campus-body">
              <h3 className="careers-campus-title" style={{ color: c.text }}>
                {item.fullName}
              </h3>
              <p className="careers-campus-district" style={{ color: c.accent }}>
                📍 {item.district}
              </p>

              <p className="careers-campus-desc" style={{ color: c.textMuted }}>
                {item.description}
              </p>

              {/* Disciplines */}
              <div className="careers-campus-disciplines">
                <span className="careers-disc-title" style={{ color: c.text }}>
                  Key Departments:
                </span>
                <div className="careers-disc-chips">
                  {item.keyDisciplines.map((d) => (
                    <span
                      key={d}
                      className="careers-disc-chip"
                      style={{ background: c.surface2, color: c.primary }}
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="careers-campus-actions" style={{ borderTop: `1px solid ${c.border}` }}>
                <button
                  type="button"
                  className="careers-campus-filter-btn"
                  onClick={() => onSelectCampus(item.campus)}
                >
                  <span>Filter {item.campus} Posts</span>
                </button>
                <a
                  href={item.portalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="careers-campus-link-btn"
                  title={`Visit ${item.fullName} official portal`}
                >
                  <span>Campus Site ↗</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
