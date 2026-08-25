import { useSectionTheme } from '../SectionPageLayout';
import { CAREER_CATEGORIES } from '../../data/careersContent';
import type { CareerCategoryType } from '../../data/careersContent';

interface CareerCategoriesProps {
  onSelectCategory: (category: CareerCategoryType) => void;
}

export default function CareerCategories({ onSelectCategory }: CareerCategoriesProps) {
  const c = useSectionTheme();

  return (
    <section className="careers-section" id="categories">
      <div className="careers-section-header">
        <span className="careers-subheading">Opportunities by Discipline</span>
        <h2 className="careers-heading" style={{ color: c.text }}>
          Explore Career Opportunities
        </h2>
        <p className="careers-intro" style={{ color: c.textMuted }}>
          RGUKT-AP provides structured academic and operational positions across its four campuses.
          Explore employment streams tailored to your academic qualifications and professional expertise:
        </p>
      </div>

      <div className="careers-grid-3">
        {CAREER_CATEGORIES.map((cat) => (
          <div
            key={cat.id}
            className="careers-category-card"
            style={{ border: `1px solid ${c.border}` }}
          >
            <div className="careers-category-top">
              <div
                className="careers-card-icon"
                style={{ background: 'rgba(200,16,46,0.1)', color: c.accent }}
              >
                {cat.icon}
              </div>
              <span
                className="careers-category-status"
                style={{ background: c.surface2, color: c.primary }}
              >
                {cat.activeCountText}
              </span>
            </div>

            <h3 className="careers-card-title" style={{ color: c.text }}>
              {cat.title}
            </h3>

            <p className="careers-card-text" style={{ color: c.textMuted }}>
              {cat.description}
            </p>

            <div className="careers-category-roles" style={{ borderTop: `1px solid ${c.border}` }}>
              <span className="careers-roles-label" style={{ color: c.accent }}>
                Typical Cadres:
              </span>
              <p className="careers-roles-text" style={{ color: c.textMuted }}>
                {cat.rolesSnippet}
              </p>
            </div>

            <button
              type="button"
              className="careers-card-action-btn"
              onClick={() => onSelectCategory(cat.title)}
            >
              <span>View {cat.title} →</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
