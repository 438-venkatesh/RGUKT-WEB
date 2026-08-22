import { Link } from 'react-router-dom';
import AcademicsSubLayout, { useAcademicsTheme } from './AcademicsSubLayout';
import NavHubLinks from './NavHubLinks';
import {
  getAcademicsPage,
  isShortLine,
  type AcademicsDocument,
  type AcademicsSection,
} from '../data/academicsScrapedData';
import { ACADEMICS_NAV } from '../data/academicsContent';
import './AcademicsScrapedPage.css';
import './AcademicsSubLayout.css';
import '../pages/AcademicSubpage.css';

type Props = {
  pageKey: string;
};

function isExternalUrl(url: string) {
  return url.startsWith('http://') || url.startsWith('https://');
}

function DocCard({
  doc,
  surface,
  border,
  text,
  textMuted,
  accent,
}: {
  doc: AcademicsDocument;
  surface: string;
  border: string;
  text: string;
  textMuted: string;
  accent: string;
}) {
  const href = doc.url;
  const external = isExternalUrl(href);

  const inner = (
    <>
      <span className="acad-doc-icon" aria-hidden>PDF</span>
      <span className="acad-doc-body">
        <span className="acad-doc-title" style={{ color: text }}>{doc.title}</span>
        {(doc.date || doc.size) && (
          <span className="acad-doc-meta" style={{ color: textMuted }}>
            {[doc.date, doc.size].filter(Boolean).join(' · ')}
          </span>
        )}
      </span>
      <span className="acad-doc-arrow" style={{ color: accent }}>↓</span>
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="acad-doc-card"
        style={{ background: surface, border: `1px solid ${border}` }}
      >
        {inner}
      </a>
    );
  }

  return (
    <a
      href={href}
      download
      className="acad-doc-card"
      style={{ background: surface, border: `1px solid ${border}` }}
    >
      {inner}
    </a>
  );
}

function SectionBlock({
  section,
  c,
}: {
  section: AcademicsSection;
  c: ReturnType<typeof useAcademicsTheme>;
}) {
  const paragraphs = (section.content ?? []).filter(p => !isShortLine(p) || p.length > 40);
  const subheads = (section.content ?? []).filter(p => isShortLine(p) && p.length <= 40);
  const listItems = (section.items ?? []).map(item =>
    typeof item === 'string' ? item : item.title,
  );

  const linkItems = (section.items ?? []).filter(
    (item): item is { title: string; url?: string; date?: string } =>
      typeof item === 'object' && 'title' in item && Boolean(item.url) && !item.url!.includes('.pdf'),
  );

  return (
    <section className="acad-scraped-section">
      <h2 className="acad-page-h2">{section.heading}</h2>

      {paragraphs.map((para, i) => {
        if (para.includes('click here') || para.includes('Announcements Page')) {
          return (
            <p key={i} className="acad-scraped-para" style={{ color: c.textMuted }}>
              {para.includes('curricula') ? (
                <>
                  To view academic curricula, visit the{' '}
                  <Link to="/academics/curriculum" style={{ color: c.accent }}>Academic Curriculum</Link> page.
                </>
              ) : (
                <>
                  For latest updates, visit the{' '}
                  <Link to="/announcements" style={{ color: c.accent }}>Announcements</Link> page.
                </>
              )}
            </p>
          );
        }
        return (
          <p key={i} className="acad-scraped-para" style={{ color: c.textMuted }}>{para}</p>
        );
      })}

      {subheads.length > 0 && (
        <div className="acad-scraped-subheads">
          {subheads.map((h, i) => (
            <h3 key={i} className="acad-scraped-h3" style={{ color: c.text }}>{h}</h3>
          ))}
        </div>
      )}

      {listItems.length > 0 && (
        <ul className="acad-scraped-list" style={{ color: c.textMuted }}>
          {listItems.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}

      {linkItems.length > 0 && (
        <div className="acad-scraped-portals">
          {linkItems.map(item => (
            <a
              key={item.title}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="acad-scraped-portal"
              style={{ background: c.surface, border: `1px solid ${c.border}`, color: c.accent }}
            >
              {item.title} →
            </a>
          ))}
        </div>
      )}
    </section>
  );
}

export default function AcademicsScrapedPage({ pageKey }: Props) {
  const c = useAcademicsTheme();
  const page = getAcademicsPage(pageKey);

  const sectionDocs = page.sections.flatMap(s => s.documents ?? []);
  const allDocs = [...page.documents, ...sectionDocs];

  return (
    <AcademicsSubLayout>
      <div className="acad-scraped-hero" style={{ border: `1px solid ${c.border}` }}>
        <img src={page.heroImage} alt="" className="acad-scraped-hero-img" />
        <div className="acad-scraped-hero-overlay" />
        <div className="acad-scraped-hero-text">
          <span className="acad-scraped-eyebrow">Academics</span>
          <h1 className="acad-scraped-title">{page.displayTitle}</h1>
        </div>
      </div>

      {page.pageStatus === 'fallback' && page.sourceNote && (
        <p className="acad-scraped-note" style={{ background: c.surface2, color: c.textMuted, border: `1px solid ${c.border}` }}>
          Content supplemented from university records — the corresponding page on{' '}
          <a href={page.rguktUrl} target="_blank" rel="noopener noreferrer" style={{ color: c.accent }}>
            rgukt.in
          </a>{' '}
          is currently unavailable.
        </p>
      )}

      {page.intro && (
        <p className="acad-page-intro acad-scraped-intro" style={{ color: c.textMuted }}>{page.intro}</p>
      )}

      {page.highlights.length > 0 && (
        <div className="acad-sub-stats acad-scraped-stats">
          {page.highlights.map(h => (
            <div
              key={h.label}
              className="acad-sub-stat"
              style={{ background: c.surface, border: `1px solid ${c.border}` }}
            >
              <div className="acad-sub-stat-value" style={{ color: c.accent }}>{h.value}</div>
              <div className="acad-sub-stat-label" style={{ color: c.textMuted }}>{h.label}</div>
            </div>
          ))}
        </div>
      )}

      {page.sections.map(section => (
        <SectionBlock key={section.heading} section={section} c={c} />
      ))}

      {allDocs.length > 0 && (
        <section className="acad-scraped-section">
          <h2 className="acad-page-h2">Documents & Downloads</h2>
          <div className="acad-doc-grid">
            {allDocs.map(doc => (
              <DocCard
                key={doc.url + doc.title}
                doc={doc}
                surface={c.surface}
                border={c.border}
                text={c.text}
                textMuted={c.textMuted}
                accent={c.accent}
              />
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
        <NavHubLinks
          items={ACADEMICS_NAV.filter(item => item.href !== '/academics')}
          title="Programmes & Resources"
        />
      )}
    </AcademicsSubLayout>
  );
}
