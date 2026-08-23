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
  const inner = (
    <>
      <span className="acad-doc-icon" aria-hidden>PDF</span>
      <span className="acad-doc-body">
        <span className="acad-doc-title" style={{ color: text }}>
          {doc.title}
        </span>
        {doc.size && (
          <span className="acad-doc-meta" style={{ color: textMuted }}>
            {doc.size}
          </span>
        )}
      </span>
      <span className="acad-doc-arrow" style={{ color: accent }}>
        ↓
      </span>
    </>
  );

  if (isExternal(doc.url)) {
    return (
      <a
        href={doc.url}
        target="_blank"
        rel="noopener noreferrer"
        className="acad-doc-card"
        style={{
          background: surface,
          border: `1px solid ${border}`,
        }}
      >
        {inner}
      </a>
    );
  }

  return (
    <a
      href={doc.url}
      download
      className="acad-doc-card"
      style={{
        background: surface,
        border: `1px solid ${border}`,
      }}
    >
      {inner}
    </a>
  );
}

function DirectorCard({
  director,
  c,
}: {
  director: AdminDirector;
  c: ReturnType<typeof useSectionTheme>;
}) {
  return (
    <div
      className="admin-card admin-director-card"
      style={{
        background: c.surface,
        border: `1px solid ${c.border}`,
      }}
    >
      <div className="admin-director-photo-wrap">
        {director.photo ? (
          <img
            src={director.photo}
            alt={director.name}
            className="admin-director-photo"
          />
        ) : (
          <div
            className="admin-avatar"
            style={{ background: c.surface2 }}
            aria-hidden
          />
        )}
      </div>

      <div className="admin-name" style={{ color: c.text }}>
        {director.name}
      </div>

      <div className="admin-role" style={{ color: c.textMuted }}>
        Director, {director.campus} Campus
      </div>

      <a
        href={`mailto:${director.email}`}
        className="admin-email"
        style={{ color: c.primary }}
      >
        {director.email}
      </a>

      <Link
        to={director.campusHref}
        className="admin-profile-link"
        style={{ color: c.accent }}
      >
        Visit campus →
      </Link>
    </div>
  );
}

function SectionBlock({
  section,
  c,
}: {
  section: AdminSection;
  c: ReturnType<typeof useSectionTheme>;
}) {
  return (
    <section className="acad-scraped-section">
      <h2 className="acad-page-h2">{section.heading}</h2>

      {section.content?.map((para, i) => (
        <p
          key={i}
          className="acad-scraped-para"
          style={{ color: c.textMuted }}
        >
          {para}
        </p>
      ))}

      {section.items && section.items.length > 0 && (
        <ul
          className="acad-scraped-list"
          style={{ color: c.textMuted }}
        >
          {section.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default function AdministrationScrapedPage({
  pageKey,
}: Props) {
  const c = useSectionTheme();
  const page = getAdministrationPage(pageKey);

  return (
    <SectionPageLayout>

      {/* Administration Hero */}
      <div
        className="acad-scraped-hero admin-scraped-hero"
        style={{ border: `1px solid ${c.border}` }}
      >
        <img
          src={page.heroImage}
          alt=""
          className="acad-scraped-hero-img"
        />

        <div className="acad-scraped-hero-overlay admin-scraped-hero-overlay" />

        <div className="acad-scraped-hero-text">

          {/* Main section name */}
          <span className="acad-scraped-eyebrow">
            Administration
          </span>

          {/* Current module name */}
          <h1 className="acad-scraped-title">
            {page.displayTitle}
          </h1>

          {/* Common label for every Administration module */}
          <div
            className="admin-rgukt-label"
            style={{ color: '#ffffff' }}
          >
            @RGUKT-AP
          </div>

        </div>
      </div>

      {page.pageStatus === 'fallback' && page.sourceNote && (
        <p
          className="acad-scraped-note"
          style={{
            background: c.surface2,
            color: c.textMuted,
            border: `1px solid ${c.border}`,
          }}
        >
          {page.sourceNote}
        </p>
      )}

      {page.officer && (
        <div
          className="admin-officer-card"
          style={{
            background: c.surface,
            border: `1px solid ${c.border}`,
          }}
        >
          {page.officer.photo && (
            <img
              src={page.officer.photo}
              alt={page.officer.name}
              className="admin-officer-photo"
            />
          )}

          <div className="admin-officer-meta">
            <h2
              className="admin-officer-name"
              style={{ color: c.text }}
            >
              {page.officer.name}
            </h2>

            {page.officer.role && (
              <p
                className="admin-officer-role"
                style={{ color: c.accent }}
              >
                {page.displayTitle}
              </p>
            )}

            {page.officer.emails.length > 0 && (
              <div className="admin-officer-contacts">
                {page.officer.emails.map(email => (
                  <a
                    key={email}
                    href={`mailto:${email}`}
                    style={{ color: c.primary }}
                  >
                    {email}
                  </a>
                ))}
              </div>
            )}

            {page.officer.officeAddress && (
              <p
                className="admin-officer-address"
                style={{ color: c.textMuted }}
              >
                {page.officer.officeAddress}
              </p>
            )}
          </div>
        </div>
      )}

      {page.intro && !page.officer && (
        <p
          className="section-page-intro acad-scraped-intro"
          style={{ color: c.textMuted }}
        >
          {page.intro}
        </p>
      )}

      {page.highlights.length > 0 && (
        <div className="acad-sub-stats acad-scraped-stats">
          {page.highlights.map(h => (
            <div
              key={h.label}
              className="acad-sub-stat"
              style={{
                background: c.surface,
                border: `1px solid ${c.border}`,
              }}
            >
              <div
                className="acad-sub-stat-value"
                style={{ color: c.accent }}
              >
                {h.value}
              </div>

              <div
                className="acad-sub-stat-label"
                style={{ color: c.textMuted }}
              >
                {h.label}
              </div>
            </div>
          ))}
        </div>
      )}

      {page.directors && page.directors.length > 0 && (
        <section className="acad-scraped-section">
          <h2 className="acad-page-h2">
            Campus Directors
          </h2>

          {page.intro && (
            <p
              className="acad-scraped-para"
              style={{ color: c.textMuted }}
            >
              {page.intro}
            </p>
          )}

          <div className="admin-grid">
            {page.directors.map(d => (
              <DirectorCard
                key={d.campus}
                director={d}
                c={c}
              />
            ))}
          </div>
        </section>
      )}

      {page.sections.map(section => (
        <SectionBlock
          key={section.heading}
          section={section}
          c={c}
        />
      ))}

      {page.documents.length > 0 && (
        <section className="acad-scraped-section">
          <h2 className="acad-page-h2">
            Documents & Downloads
          </h2>

          <div className="acad-doc-grid">
            {page.documents.map(doc => (
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
        <p
          className="acad-scraped-source"
          style={{ color: c.textMuted }}
        >
          Source:{' '}
          <a
            href={page.rguktUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: c.accent }}
          >
            rgukt.in — {page.displayTitle}
          </a>
        </p>
      )}

      {/* Administration module cards */}
      {pageKey === 'overview' && (
        <NavHubLinks
          items={ADMIN_NAV.filter(
            i => i.href !== '/administration'
          )}
          title="Administration & Leadership"
        />
      )}

    </SectionPageLayout>
  );
}