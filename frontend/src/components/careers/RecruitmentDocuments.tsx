import { useSectionTheme } from '../SectionPageLayout';
import { RECRUITMENT_DOCUMENTS } from '../../data/careersContent';

export default function RecruitmentDocuments() {
  const c = useSectionTheme();

  return (
    <section className="careers-section" id="documents">
      <div className="careers-section-header">
        <span className="careers-subheading">Official Publications</span>
        <h2 className="careers-heading" style={{ color: c.text }}>
          Recruitment Documents &amp; Guidelines
        </h2>
        <p className="careers-intro" style={{ color: c.textMuted }}>
          Download verified official recruitment notifications, standard operating procedures,
          qualification criteria, and statutory service rules published by RGUKT-AP:
        </p>
      </div>

      {/* FULL-WIDTH ONE-BY-ONE ROW LAYOUT */}
      <div className="careers-docs-list-fullwidth">
        {RECRUITMENT_DOCUMENTS.map((doc) => (
          <div
            key={doc.id}
            className="careers-doc-row-card"
            style={{
              background: c.surface,
              border: `1px solid ${c.border}`,
            }}
          >
            {/* Left: PDF Icon Badge */}
            <div className="careers-doc-row-left">
              <div className="careers-pdf-icon-box">
                <span className="careers-pdf-icon">📄</span>
                <span className="careers-pdf-tag">PDF</span>
              </div>
            </div>

            {/* Center: Title, Metas, Description */}
            <div className="careers-doc-row-center">
              <div className="careers-doc-row-header-line">
                <h3 className="careers-doc-row-title" style={{ color: c.text }}>
                  {doc.title}
                </h3>
                <span
                  className="careers-doc-row-cat-pill"
                  style={{ background: c.surface2, color: c.primary }}
                >
                  {doc.category}
                </span>
              </div>

              <div className="careers-doc-row-meta" style={{ color: c.textMuted }}>
                <span className="careers-doc-meta-item">
                  <strong style={{ color: c.text }}>Ref:</strong> {doc.refNo}
                </span>
                <span className="careers-doc-meta-dot">•</span>
                <span className="careers-doc-meta-item">
                  <strong style={{ color: c.text }}>Effective:</strong> {doc.date}
                </span>
                <span className="careers-doc-meta-dot">•</span>
                <span className="careers-doc-meta-item">
                  <strong style={{ color: c.text }}>Size:</strong> {doc.fileSize}
                </span>
              </div>

              <p className="careers-doc-row-desc" style={{ color: c.textMuted }}>
                {doc.description}
              </p>
            </div>

            {/* Right: Actions */}
            <div className="careers-doc-row-right">
              <a
                href={doc.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="careers-doc-btn-view"
                title={`View ${doc.title} in new tab`}
              >
                <span>👁️ View PDF</span>
              </a>
              <a
                href={doc.pdfUrl}
                download
                className="careers-doc-btn-download"
                title={`Download ${doc.title}`}
              >
                <span>⬇️ Download</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
