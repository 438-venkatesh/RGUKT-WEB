import SectionPageLayout, { useSectionTheme } from '../../components/SectionPageLayout';
import CouncilMemberGrid from '../../components/CouncilMemberGrid';
import {
  GOVERNING_COUNCIL,
  GOVERNING_COUNCIL_GROUPS,
} from '../../data/administrationContent';
import '../../components/AcademicsScrapedPage.css';
import '../../components/SectionPageLayout.css';
import '../../pages/About.css';
import './GoverningCouncilPage.css';

export default function GoverningCouncilPage() {
  const c = useSectionTheme();

  return (
    <SectionPageLayout>
      <h1 className="section-page-h1">Governing Council</h1>
      <p className="section-page-intro" style={{ color: c.textMuted }}>{GOVERNING_COUNCIL.intro}</p>

      {GOVERNING_COUNCIL_GROUPS.map(group => (
        <CouncilMemberGrid key={group.id} group={group} c={c} />
      ))}

      {GOVERNING_COUNCIL.documents.length > 0 && (
        <section className="acad-scraped-section">
          <h2 className="acad-page-h2">Documents & Downloads</h2>
          <div className="acad-doc-grid">
            {GOVERNING_COUNCIL.documents.map(doc => (
              <a
                key={doc.url + doc.title}
                href={doc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="acad-doc-card"
                style={{ background: c.surface, border: `1px solid ${c.border}` }}
              >
                <span className="acad-doc-icon" aria-hidden>PDF</span>
                <span className="acad-doc-body">
                  <span className="acad-doc-title" style={{ color: c.text }}>{doc.title}</span>
                  {doc.size && (
                    <span className="acad-doc-meta" style={{ color: c.textMuted }}>{doc.size}</span>
                  )}
                </span>
                <span className="acad-doc-arrow" style={{ color: c.accent }}>↓</span>
              </a>
            ))}
          </div>
        </section>
      )}

      <p className="acad-scraped-source" style={{ color: c.textMuted }}>
        Source:{' '}
        <a
          href="https://www.rgukt.in/administration/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: c.accent }}
        >
          rgukt.in — Governing Council
        </a>
      </p>
    </SectionPageLayout>
  );
}
