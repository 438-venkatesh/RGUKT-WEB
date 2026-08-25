import { useSectionTheme } from '../SectionPageLayout';
import type { CareerOpening, CareerStatus } from '../../data/careersContent';

interface CareerOpeningCardProps {
  opening: CareerOpening;
}

function getStatusBadgeStyle(status: CareerStatus) {
  switch (status) {
    case 'OPEN':
      return {
        background: '#E6F8F0',
        color: '#0E7044',
        border: '1px solid #A1E5C6',
        label: '● OPEN FOR APPLICATIONS',
      };
    case 'CLOSING SOON':
      return {
        background: '#FEF3C7',
        color: '#92400E',
        border: '1px solid #FCD34D',
        label: '⏳ CLOSING SOON',
      };
    case 'UPCOMING':
      return {
        background: '#EFF6FF',
        color: '#1E40AF',
        border: '1px solid #BFDBFE',
        label: '📅 UPCOMING NOTIFICATION',
      };
    case 'CLOSED':
    default:
      return {
        background: '#F1F5F9',
        color: '#475569',
        border: '1px solid #CBD5E1',
        label: '🔒 APPLICATION WINDOW CLOSED',
      };
  }
}

export default function CareerOpeningCard({ opening }: CareerOpeningCardProps) {
  const c = useSectionTheme();
  const badge = getStatusBadgeStyle(opening.status);

  return (
    <article
      className="careers-opening-card"
      style={{
        background: c.surface,
        border: `1px solid ${c.border}`,
      }}
    >
      {/* Header with Status Badge & Advt No */}
      <div className="careers-opening-header">
        <div className="careers-opening-badges-left">
          <span
            className="careers-status-pill"
            style={{
              background: badge.background,
              color: badge.color,
              border: badge.border,
            }}
          >
            {badge.label}
          </span>
          {opening.isImportant && (
            <span className="careers-important-pill">★ KEY STATE DRIVE</span>
          )}
        </div>
        <span className="careers-advt-no" style={{ color: c.textMuted }}>
          Ref: {opening.advtNo}
        </span>
      </div>

      {/* Position Title */}
      <h3 className="careers-opening-title" style={{ color: c.text }}>
        {opening.title}
      </h3>

      {/* Tags: Campus & Category */}
      <div className="careers-opening-tags">
        <span className="careers-tag-campus" style={{ background: c.surface2, color: c.primary }}>
          🏛️ {opening.campus}
        </span>
        <span className="careers-tag-category" style={{ background: 'rgba(200,16,46,0.08)', color: c.accent }}>
          📌 {opening.category}
        </span>
        {opening.vacanciesCount && (
          <span className="careers-tag-vacancies">
            {opening.vacanciesCount} Total Posts
          </span>
        )}
      </div>

      {/* Date Metas */}
      <div className="careers-opening-dates" style={{ background: c.surface2 }}>
        <div className="careers-date-item">
          <span className="careers-date-label" style={{ color: c.textMuted }}>
            Posted Date:
          </span>
          <span className="careers-date-val" style={{ color: c.text }}>
            {opening.postedDate}
          </span>
        </div>
        <div className="careers-date-divider" style={{ background: c.border }} />
        <div className="careers-date-item">
          <span className="careers-date-label" style={{ color: c.textMuted }}>
            Closing Date:
          </span>
          <span
            className="careers-date-val"
            style={{ color: opening.status === 'OPEN' ? '#0E7044' : c.text }}
          >
            {opening.closingDate}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="careers-opening-desc" style={{ color: c.textMuted }}>
        {opening.description}
      </p>

      {/* Department & Eligibility */}
      <div className="careers-opening-meta-box" style={{ borderLeft: `3px solid ${c.accent}` }}>
        <div className="careers-meta-line">
          <strong style={{ color: c.text }}>Disciplines / Departments: </strong>
          <span style={{ color: c.textMuted }}>{opening.dept}</span>
        </div>
        <div className="careers-meta-line" style={{ marginTop: 4 }}>
          <strong style={{ color: c.text }}>Minimum Eligibility: </strong>
          <span style={{ color: c.textMuted }}>{opening.eligibilitySnippet}</span>
        </div>
      </div>

      {/* Card Actions */}
      <div className="careers-opening-actions" style={{ borderTop: `1px solid ${c.border}` }}>
        <a
          href={opening.notificationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="careers-action-pdf-btn"
        >
          <span>📄 View Notification PDF</span>
        </a>

        {opening.applicationUrl ? (
          <a
            href={opening.applicationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`careers-action-apply-btn${opening.status === 'OPEN' ? ' careers-apply-active' : ' careers-apply-secondary'}`}
          >
            <span>
              {opening.status === 'OPEN'
                ? 'Apply Online (Official Portal) ↗'
                : 'Visit Official Portal ↗'}
            </span>
          </a>
        ) : (
          <span className="careers-no-link" style={{ color: c.textMuted }}>
            Official portal updates available in notification
          </span>
        )}
      </div>
    </article>
  );
}
