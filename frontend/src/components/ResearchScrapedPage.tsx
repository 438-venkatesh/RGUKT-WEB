import { Link } from 'react-router-dom';
import SectionPageLayout, { useSectionTheme } from './SectionPageLayout';
import NavHubLinks from './NavHubLinks';
import {
  getResearchPage,
  type ResearchDocument,
  type ResearchSection,
} from '../data/researchScrapedData';
import { RESEARCH_NAV } from '../data/researchContent';
import './AcademicsScrapedPage.css';
import './ResearchScrapedPage.css';
import '../pages/Research.css';
import '../pages/ResearchPages.css';

type Props = { pageKey: string };

function DocCard({
  doc,
  surface,
  border,
  text,
  accent,
}: {
  doc: ResearchDocument;
  surface: string;
  border: string;
  text: string;
  accent: string;
}) {
  return (
    <a
      href={doc.url}
      target="_blank"
      rel="noopener noreferrer"
      className="acad-doc-card"
      style={{ background: surface, border: `1px solid ${border}` }}
    >
      <span className="acad-doc-icon" aria-hidden>PDF</span>
      <span className="acad-doc-body">
        <span className="acad-doc-title" style={{ color: text }}>{doc.title}</span>
      </span>
      <span className="acad-doc-arrow" style={{ color: accent }}>↓</span>
    </a>
  );
}

function SectionBlock({ section, c }: { section: ResearchSection; c: ReturnType<typeof useSectionTheme> }) {
  const skipEmpty = !section.content?.length && !section.items?.length;
  if (skipEmpty) return null;

  return (
    <section className="acad-scraped-section">
      <h2 className="acad-page-h2">{section.heading}</h2>
      {section.content?.map((para, i) => (
        <p key={i} className="acad-scraped-para" style={{ color: c.textMuted }}>{para}</p>
      ))}
      {section.items && section.items.length > 0 && (
        <ul className="acad-scraped-list" style={{ color: c.textMuted }}>
          {section.items.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      )}
    </section>
  );
}

export default function ResearchScrapedPage({ pageKey }: Props) {
  const c = useSectionTheme();
  const page = getResearchPage(pageKey);

  const contentSections = pageKey === 'head' && page.officer
    ? page.sections
    : page.sections.filter(s => {
        if (pageKey !== 'head') return true;
        return !s.heading.includes('Dr.') && !s.heading.toLowerCase().includes('office address');
      });

  return (
    <SectionPageLayout>
      <div className="acad-scraped-hero res-scrape-hero" style={{ border: `1px solid ${c.border}` }}>
        <img src={page.heroImage} alt="" className="acad-scraped-hero-img" />
        <div className="acad-scraped-hero-overlay res-scrape-hero-overlay" />
        <div className="acad-scraped-hero-text">
          <span className="acad-scraped-eyebrow">Research</span>
          <h1 className="acad-scraped-title">{page.displayTitle}</h1>
        </div>
      </div>

      {page.pageStatus === 'fallback' && page.sourceNote && (
        <p className="acad-scraped-note" style={{ background: c.surface2, color: c.textMuted, border: `1px solid ${c.border}` }}>
          {page.sourceNote}
        </p>
      )}

      {page.officer && pageKey === 'head' && (
        <div className="res-scrape-officer" style={{ background: c.surface, border: `1px solid ${c.border}` }}>
          {page.officer.photo && (
            <img src={page.officer.photo} alt={page.officer.name} className="res-scrape-officer-photo" />
          )}
          <div>
            <h2 className="res-scrape-officer-name" style={{ color: c.text }}>{page.officer.name}</h2>
            {page.officer.role && (
              <p className="res-scrape-officer-role" style={{ color: c.accent }}>{page.officer.role}</p>
            )}
            {page.officer.bio.map((para, i) => (
              <p key={i} className="acad-scraped-para" style={{ color: c.textMuted, marginTop: i === 0 ? 12 : 8 }}>{para}</p>
            ))}
            {page.officer.officeAddress && (
              <p style={{ color: c.textMuted, marginTop: 12, fontSize: 14 }}>
                <strong style={{ color: c.text }}>Office:</strong> {page.officer.officeAddress}
              </p>
            )}
            {page.officer.emails.map(email => (
              <p key={email} style={{ color: c.textMuted, marginTop: 8, fontSize: 14 }}>
                <a href={`mailto:${email}`} style={{ color: c.accent }}>{email}</a>
              </p>
            ))}
          </div>
        </div>
      )}

      {page.intro && pageKey !== 'head' && (
        <p className="section-page-intro acad-scraped-intro" style={{ color: c.textMuted }}>{page.intro}</p>
      )}

      {page.highlights.length > 0 && (
        <div className="acad-sub-stats acad-scraped-stats">
          {page.highlights.map(h => (
            <div key={h.label} className="acad-sub-stat" style={{ background: c.surface, border: `1px solid ${c.border}` }}>
              <div className="acad-sub-stat-value" style={{ color: c.accent }}>{h.value}</div>
              <div className="acad-sub-stat-label" style={{ color: c.textMuted }}>{h.label}</div>
            </div>
          ))}
        </div>
      )}

      {page.featureCards.length > 0 && (
        <section className="research-section">
          <h2 className="acad-page-h2">Featured Highlights</h2>
          <div className="research-highlights-grid">
            {page.featureCards.map(h => (
              <div
                key={h.title}
                className="research-highlight-card"
                style={{ background: c.surface, border: `1px solid ${c.border}` }}
              >
                <div className="research-kicker" style={{ color: c.accent }}>{h.kicker}</div>
                <div className="research-card-title" style={{ color: c.text }}>{h.title}</div>
                <p className="research-card-desc" style={{ color: c.textMuted }}>{h.desc}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {contentSections.map(section => (
        <SectionBlock key={section.heading} section={section} c={c} />
      ))}

      {page.tagGroups.length > 0 && (
        <section className="acad-scraped-section">
          <h2 className="acad-page-h2">Cross-Campus Research Groups</h2>
          <div className="res-tag-grid">
            {page.tagGroups.map(g => (
              <div key={g.tag} className="res-tag-row" style={{ borderColor: c.border }}>
                <span className="res-tag" style={{ background: c.surface2, color: c.accent }}>{g.tag}</span>
                <span className="res-tag-desc" style={{ color: c.textMuted }}>{g.desc}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {page.documents.length > 0 && (
        <section className="acad-scraped-section">
          <h2 className="acad-page-h2">Documents & Downloads</h2>
          <div className="acad-doc-grid">
            {page.documents.map(doc => (
              <DocCard key={doc.url} doc={doc} surface={c.surface} border={c.border} text={c.text} accent={c.accent} />
            ))}
          </div>
        </section>
      )}

      {page.rguktUrl && page.pageStatus === 'ok' && (
        <p className="acad-scraped-source" style={{ color: c.textMuted }}>
          Source:{' '}
          <a href={page.rguktUrl} target="_blank" rel="noopener noreferrer" style={{ color: c.accent }}>
            rgukt.in — {page.displayTitle}
          </a>
        </p>
      )}

      {pageKey === 'overview' && (
        <NavHubLinks items={RESEARCH_NAV.filter(i => i.href !== '/research')} title="Research Resources" />
      )}

      {pageKey === 'head' && (
        <Link to="/administration/dean-rd" className="res-link" style={{ color: c.accent, display: 'inline-block', marginTop: 16 }}>
          Dean of R &amp; D Profile →
        </Link>
      )}

      {pageKey === 'overview' && (
        <Link to="/academics/research-programmes" className="res-link" style={{ color: c.accent, display: 'inline-block', marginTop: 16 }}>
          Research Programmes (Academics) →
        </Link>
      )}
    </SectionPageLayout>
  );
}
