import { useState } from 'react';
import { useSectionTheme } from '../SectionPageLayout';
import { ARCHIVED_RECRUITMENTS } from '../../data/careersContent';

export default function ArchivedRecruitment() {
  const c = useSectionTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="careers-section" id="archive">
      <div className="careers-archive-box" style={{ background: c.surface, border: `1px solid ${c.border}` }}>
        <button
          type="button"
          className="careers-archive-toggle-btn"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
        >
          <div className="careers-archive-toggle-left">
            <span className="careers-archive-icon">🗄️</span>
            <div className="careers-archive-text-box">
              <h3 className="careers-archive-heading" style={{ color: c.text }}>
                Previous &amp; Archived Recruitment Notifications
              </h3>
              <p className="careers-archive-sub" style={{ color: c.textMuted }}>
                Review past faculty drives, lecturer appointments, and guest recruitment notifications (2022 – 2024)
              </p>
            </div>
          </div>
          <span className="careers-archive-arrow" style={{ color: c.accent }}>
            {isOpen ? '▲ Collapse Archive' : '▼ Expand Archive (5 Past Drives)'}
          </span>
        </button>

        {isOpen && (
          <div className="careers-archive-content" style={{ borderTop: `1px solid ${c.border}` }}>
            <div className="careers-archive-table-wrap">
              <table className="careers-archive-table">
                <thead>
                  <tr style={{ background: c.surface2, borderBottom: `2px solid ${c.border}` }}>
                    <th style={{ color: c.text }}>Year</th>
                    <th style={{ color: c.text }}>Recruitment Title &amp; Advt No.</th>
                    <th style={{ color: c.text }}>Category</th>
                    <th style={{ color: c.text }}>Campuses</th>
                    <th style={{ color: c.text }}>Closed Date</th>
                    <th style={{ color: c.text }}>Notification</th>
                  </tr>
                </thead>
                <tbody>
                  {ARCHIVED_RECRUITMENTS.map((item) => (
                    <tr key={item.id} style={{ borderBottom: `1px solid ${c.border}` }}>
                      <td>
                        <span className="careers-arch-year-badge" style={{ background: c.surface2, color: c.primary }}>
                          {item.year}
                        </span>
                      </td>
                      <td>
                        <div className="careers-arch-title-box">
                          <strong style={{ color: c.text }}>{item.title}</strong>
                          <span className="careers-arch-advt" style={{ color: c.textMuted }}>
                            Ref: {item.advtNo}
                          </span>
                        </div>
                      </td>
                      <td>
                        <span className="careers-arch-cat-tag" style={{ color: c.accent }}>
                          {item.category}
                        </span>
                      </td>
                      <td style={{ color: c.textMuted }}>{item.campus}</td>
                      <td>
                        <span className="careers-arch-date" style={{ color: c.textMuted }}>
                          {item.closingDate}
                        </span>
                      </td>
                      <td>
                        <a
                          href={item.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="careers-arch-link"
                          style={{ color: c.accent }}
                        >
                          PDF ↗
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
