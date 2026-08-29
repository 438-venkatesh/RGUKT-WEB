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
import './AdministrationScrapedPage.css';
import './ResearchScrapedPage.css';
import '../pages/Research.css';
import '../pages/ResearchPages.css';

type Props = { pageKey: string };

function formatLineWithLinks(line: string, c: ReturnType<typeof useSectionTheme>) {
  const colonIdx = line.indexOf(':');
  let prefix = '';
  let rest = line;

  if (colonIdx > 0 && colonIdx < 40 && !line.slice(0, colonIdx).includes('http')) {
    prefix = line.slice(0, colonIdx + 1);
    rest = line.slice(colonIdx + 1);
  }

  const emailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi;
  const urlRegex = /(https?:\/\/[^\s]+)/gi;

  const renderTextWithLinks = (text: string) => {
    const parts = text.split(/(https?:\/\/[^\s]+|[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);
    return parts.map((part, i) => {
      if (part.match(emailRegex)) {
        return (
          <a
            key={i}
            href={`mailto:${part}`}
            style={{ color: c.accent, textDecoration: 'underline', fontWeight: 600 }}
          >
            {part}
          </a>
        );
      }
      if (part.match(urlRegex)) {
        return (
          <a
            key={i}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: c.accent, textDecoration: 'underline', fontWeight: 600 }}
          >
            {part}
          </a>
        );
      }
      return part;
    });
  };

  return (
    <>
      {prefix && (
        <strong style={{ color: c.text, fontWeight: 700 }}>
          {prefix}{' '}
        </strong>
      )}
      {renderTextWithLinks(rest)}
    </>
  );
}

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

function SectionBlock({
  section,
  index,
  c,
}: {
  section: ResearchSection;
  index: number;
  c: ReturnType<typeof useSectionTheme>;
}) {
  const skipEmpty = !section.content?.length && !section.items?.length;
  if (skipEmpty) return null;

  const hasImage = !!section.image?.src;
  const isImageLeft = index % 2 === 1;

  return (
    <section className={`acad-scraped-section ${hasImage ? 'res-section-with-media' : ''}`}>
      <h2 className="acad-page-h2">{section.heading}</h2>

      <div className={`${hasImage ? 'res-section-media-layout' : ''} ${hasImage && isImageLeft ? 'media-left' : ''}`}>
        <div className="res-section-text-col">
          {section.content?.map((para, i) => (
            <p key={i} className="acad-scraped-para" style={{ color: c.textMuted }}>
              {formatLineWithLinks(para, c)}
            </p>
          ))}
          {section.items && section.items.length > 0 && (
            <ul className="acad-scraped-list" style={{ color: c.textMuted }}>
              {section.items.map((item, i) => (
                <li key={i}>{formatLineWithLinks(item, c)}</li>
              ))}
            </ul>
          )}
        </div>

        {hasImage && section.image && (
          <figure
            className="res-section-media-figure"
            style={{ background: c.surface, border: `1px solid ${c.border}` }}
          >
            <div className="res-section-media-wrap">
              <img
                src={section.image.src}
                alt={section.image.alt || section.heading}
                className="res-section-media-img"
                loading="lazy"
              />
              {section.image.tag && (
                <span className="res-section-media-tag" style={{ background: c.accent, color: '#fff' }}>
                  {section.image.tag}
                </span>
              )}
            </div>
            {section.image.caption && (
              <figcaption className="res-section-media-caption" style={{ color: c.textMuted }}>
                {section.image.caption}
              </figcaption>
            )}
          </figure>
        )}
      </div>
    </section>
  );
}

export default function ResearchScrapedPage({ pageKey }: Props) {
  const c = useSectionTheme();
  const page = getResearchPage(pageKey);

  return (
    <SectionPageLayout>
      <div className={`acad-scraped-hero res-scrape-hero res-hero-${pageKey}`} style={{ border: `1px solid ${c.border}` }}>
        <img
          src={page.heroImage}
          alt=""
          className={`acad-scraped-hero-img res-hero-img res-hero-img-${pageKey}`}
        />
        <div className="acad-scraped-hero-overlay res-scrape-hero-overlay" />
        <div className="acad-scraped-hero-text">
          <span className="acad-scraped-eyebrow">{page.displayTitle}</span>
          <h1 className="acad-scraped-title">@RGUKT-AP</h1>
        </div>
      </div>

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
              <p key={i} className="acad-scraped-para" style={{ color: c.textMuted, marginTop: i === 0 ? 12 : 8 }}>
                {formatLineWithLinks(para, c)}
              </p>
            ))}
            {page.officer.officeAddress && (
              <p style={{ color: c.textMuted, marginTop: 12, fontSize: 14 }}>
                <strong style={{ color: c.text }}>Office Location:</strong> {page.officer.officeAddress}
              </p>
            )}
            <div className="res-scrape-actions">
              {page.officer.emails.map(email => (
                <a
                  key={email}
                  href={`mailto:${email}`}
                  className="res-scrape-btn"
                  style={{ background: c.accent, color: '#fff' }}
                >
                  ✉ Email: {email}
                </a>
              ))}
              {page.officer.phone && (
                <a
                  href={`tel:${page.officer.phone.split('/')[0].trim()}`}
                  className="res-scrape-btn"
                  style={{ background: c.surface2, color: c.text, border: `1px solid ${c.border}` }}
                >
                  ☎ Phone: {page.officer.phone}
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {page.intro && (
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

      {page.sections.map((section, index) => (
        <SectionBlock key={section.heading} section={section} index={index} c={c} />
      ))}

      {page.documents.length > 0 && (
        <section className="acad-scraped-section">
          <h2 className="acad-page-h2">Documents & Regulatory Guidelines</h2>
          <div className="acad-doc-grid">
            {page.documents.map(doc => (
              <DocCard key={doc.url} doc={doc} surface={c.surface} border={c.border} text={c.text} accent={c.accent} />
            ))}
          </div>
        </section>
      )}

      {page.rguktUrl && (
        <p className="acad-scraped-source" style={{ color: c.textMuted }}>
          Official Reference:{' '}
          <a href={page.rguktUrl} target="_blank" rel="noopener noreferrer" style={{ color: c.accent }}>
            rgukt.in — {page.displayTitle}
          </a>
        </p>
      )}

      {pageKey === 'overview' && (
        <NavHubLinks items={RESEARCH_NAV.filter(i => i.href !== '/research')} title="Research Resources & Links" />
      )}

      {pageKey === 'head' && (
        <div style={{ marginTop: 24 }}>
          <Link
            to="/administration/dean-rd"
            className="stu-scrape-cta"
            style={{ background: c.accent }}
          >
            View Central Administration Dean of R&D Profile →
          </Link>
        </div>
      )}

      {pageKey === 'overview' && (
        <div style={{ marginTop: 24 }}>
          <Link
            to="/academics/research-programmes"
            className="stu-scrape-cta"
            style={{ background: c.accent }}
          >
            Explore Ph.D. Academic Curricula & Research Programmes →
          </Link>
        </div>
      )}
    </SectionPageLayout>
  );
}

