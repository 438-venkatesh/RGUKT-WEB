import type { KeyboardEvent, MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import SectionPageLayout, { useSectionTheme } from './SectionPageLayout';
import NavHubLinks from './NavHubLinks';
import {
  getAdministrationPage,
  type AdminDirector,
  type AdminDocument,
  type AdminSection,
} from '../data/administrationScrapedData';
import { ADMIN_NAV } from '../data/administrationContent';
import './AcademicsScrapedPage.css';
import './AdministrationScrapedPage.css';
import './SectionPageLayout.css';
import '../pages/Administration.css';

type Props = { pageKey: string };

function isExternal(url: string) {
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
  doc: AdminDocument;
  surface: string;
  border: string;
  text: string;
  textMuted: string;
  accent: string;
}) {
  const external = isExternal(doc.url);
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
        {doc.size && <span className="acad-doc-meta" style={{ color: textMuted }}>{doc.size}</span>}
      </span>
      <span className="acad-doc-arrow" style={{ color: accent }}>{external ? '↗' : '↓'}</span>
    </a>
  );
}

function stopLinkNavigation(e: MouseEvent | KeyboardEvent) {
  e.preventDefault();
  e.stopPropagation();
}

function DirectorCard({ director }: { director: AdminDirector }) {
  return (
    <Link to={director.campusHref} className="admin-person-card">
      {director.photo ? (
        <img src={director.photo} alt={director.name} className="admin-person-photo" loading="lazy" />
      ) : (
        <div className="admin-person-photo admin-person-photo-fallback" aria-hidden />
      )}
      <div className="admin-person-overlay" aria-hidden />
      <div className="admin-person-caption">
        <div className="admin-person-label">{director.campus}</div>
        <div className="admin-person-name">{director.name}</div>
        {director.email && (
          <span
            role="link"
            tabIndex={0}
            className="admin-person-email"
            onClick={e => {
              stopLinkNavigation(e);
              window.location.href = `mailto:${director.email}`;
            }}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                stopLinkNavigation(e);
                window.location.href = `mailto:${director.email}`;
              }
            }}
          >
            {director.email}
          </span>
        )}
        <span className="admin-person-visit">Visit campus →</span>
      </div>
    </Link>
  );
}

function renderParagraphWithLinks(text: string, c: ReturnType<typeof useSectionTheme>) {
  if (text.includes('Official Contact:')) {
    const parts = text.split(/(Official Contact:\s*)([^\s|]+)(\s*\|\s*Phone:\s*)([^\n]+)/);
    if (parts.length >= 5) {
      return (
        <p className="acad-scraped-para admin-director-contacts-line" style={{ color: c.textMuted }}>
          <strong style={{ color: c.text }}>Official Contact: </strong>
          <a href={`mailto:${parts[2]}`} style={{ color: c.primary, fontWeight: 600 }}>{parts[2]}</a>
          <span style={{ margin: '0 8px', color: c.border }}>|</span>
          <strong style={{ color: c.text }}>Phone: </strong>
          <a href={`tel:${parts[4].replace(/[^0-9+]/g, '')}`} style={{ color: c.accent, fontWeight: 600 }}>{parts[4]}</a>
        </p>
      );
    }
  }
  return <p className="acad-scraped-para" style={{ color: c.textMuted }}>{text}</p>;
}

function SectionBlock({
  section,
  index,
  c,
}: {
  section: AdminSection;
  index: number;
  c: ReturnType<typeof useSectionTheme>;
}) {
  const hasImage = !!section.image?.src;
  const isImageLeft = index % 2 === 1;

  return (
    <section className={`acad-scraped-section ${hasImage ? 'admin-section-with-media' : ''}`}>
      <h2 className="acad-page-h2">{section.heading}</h2>

      <div className={`${hasImage ? 'admin-section-media-layout' : ''} ${hasImage && isImageLeft ? 'media-left' : ''}`}>
        <div className="admin-section-text-col">
          {section.content?.map((para, i) => (
            <div key={i}>{renderParagraphWithLinks(para, c)}</div>
          ))}
          {section.items && section.items.length > 0 && (
            <ul className="acad-scraped-list" style={{ color: c.textMuted }}>
              {section.items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          )}
        </div>

        {hasImage && section.image && (() => {
          const isLandscape = section.image.src.includes('gallery') || section.image.src.includes('campuses');
          return (
            <figure className={`admin-section-media-figure ${isLandscape ? 'is-landscape' : 'is-portrait'}`} style={{ background: c.surface, border: `1px solid ${c.border}` }}>
              <div className={`admin-section-media-wrap ${isLandscape ? 'wrap-landscape' : 'wrap-portrait'}`}>
                <img
                  src={section.image.src}
                  alt={section.image.alt || section.heading}
                  className="admin-section-media-img"
                  loading="lazy"
                />
                {section.image.tag && (
                  <span className="admin-section-media-tag" style={{ background: c.accent, color: '#fff' }}>
                    {section.image.tag}
                  </span>
                )}
              </div>
              {section.image.caption && (
                <figcaption className="admin-section-media-caption" style={{ color: c.textMuted }}>
                  {section.image.caption}
                </figcaption>
              )}
            </figure>
          );
        })()}
      </div>
    </section>
  );
}

export default function AdministrationScrapedPage({ pageKey }: Props) {
  const c = useSectionTheme();
  const page = getAdministrationPage(pageKey);

  return (
    <SectionPageLayout>
      <h1 className="section-page-h1">{page.displayTitle}</h1>

      {page.pageStatus === 'fallback' && page.sourceNote && (
        <p className="acad-scraped-note" style={{ background: c.surface2, color: c.textMuted, border: `1px solid ${c.border}` }}>
          {page.sourceNote}
        </p>
      )}

      {page.officer && (
        <div className="admin-officer-profile" style={{ border: `1px solid ${c.border}`, background: c.surface }}>
          {page.officer.photo && (
            <div className="admin-officer-portrait-frame">
              <img src={page.officer.photo} alt={page.officer.name} className="admin-officer-portrait-photo" loading="lazy" />
            </div>
          )}
          <div className="admin-officer-portrait-body">
            <h2 className="admin-officer-name" style={{ color: c.text }}>{page.officer.name}</h2>
            {page.officer.role && (
              <p className="admin-officer-role" style={{ color: c.accent }}>{page.officer.role}</p>
            )}
            {page.officer.emails.length > 0 && (
              <div className="admin-officer-contacts">
                {page.officer.emails.map(email => (
                  <a key={email} href={`mailto:${email}`} style={{ color: c.primary }}>{email}</a>
                ))}
              </div>
            )}
            {page.officer.officeAddress && (
              <p className="admin-officer-address" style={{ color: c.textMuted }}>{page.officer.officeAddress}</p>
            )}
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

      {page.directors && page.directors.length > 0 && (
        <section className="acad-scraped-section">
          <h2 className="acad-page-h2">Campus Directors</h2>
          <div className="admin-directors-grid">
            {page.directors.map(d => <DirectorCard key={d.campus} director={d} />)}
          </div>
        </section>
      )}

      {page.sections.map((section, idx) => (
        <SectionBlock key={section.heading} section={section} index={idx} c={c} />
      ))}

      {page.documents.length > 0 && (
        <section className="acad-scraped-section">
          <h2 className="acad-page-h2">Documents & Downloads</h2>
          <div className="acad-doc-grid">
            {page.documents.map(doc => (
              <DocCard key={doc.url + doc.title} doc={doc} surface={c.surface} border={c.border} text={c.text} textMuted={c.textMuted} accent={c.accent} />
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
        <NavHubLinks items={ADMIN_NAV.filter(i => i.href !== '/administration')} title="Administration & Leadership" />
      )}
    </SectionPageLayout>
  );
}
