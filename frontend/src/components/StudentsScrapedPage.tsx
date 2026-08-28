import { Link } from 'react-router-dom';
import SectionPageLayout, { useSectionTheme } from './SectionPageLayout';
import NavHubLinks from './NavHubLinks';
import {
  getStudentsPage,
  type StudentsDocument,
  type StudentsSection,
} from '../data/studentsScrapedData';
import { STUDENTS_NAV } from '../data/studentsContent';
import './AcademicsScrapedPage.css';
import './AdministrationScrapedPage.css';
import './StudentsScrapedPage.css';
import '../pages/StudentsPages.css';

type Props = { pageKey: string };

function DocCard({
  doc,
  surface,
  border,
  text,
  accent,
}: {
  doc: StudentsDocument;
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

function formatLineWithLinks(line: string, c: ReturnType<typeof useSectionTheme>) {
  const colonIndex = line.indexOf(': ');
  let prefix = '';
  let rest = line;
  if (colonIndex !== -1 && colonIndex < 45 && !line.startsWith('http')) {
    prefix = line.slice(0, colonIndex + 1);
    rest = line.slice(colonIndex + 1);
  }

  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const emailRegex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;

  return (
    <>
      {prefix && <strong style={{ color: c.text, marginRight: 6 }}>{prefix}</strong>}
      {rest.split(urlRegex).map((chunk, i) => {
        if (chunk.startsWith('http://') || chunk.startsWith('https://')) {
          return (
            <a
              key={i}
              href={chunk}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: c.accent, wordBreak: 'break-all', fontWeight: 600 }}
            >
              {chunk}
            </a>
          );
        }
        return chunk.split(emailRegex).map((subChunk, j) => {
          if (subChunk.includes('@') && subChunk.includes('.')) {
            return (
              <a
                key={j}
                href={`mailto:${subChunk}`}
                style={{ color: c.primary, fontWeight: 600 }}
              >
                {subChunk}
              </a>
            );
          }
          return subChunk;
        });
      })}
    </>
  );
}

function SectionBlock({
  section,
  index,
  c,
}: {
  section: StudentsSection;
  index: number;
  c: ReturnType<typeof useSectionTheme>;
}) {
  const hasImage = !!section.image?.src;
  const isImageLeft = index % 2 === 1;

  return (
    <section className={`acad-scraped-section ${hasImage ? 'stu-section-with-media' : ''}`}>
      <h2 className="acad-page-h2">{section.heading}</h2>

      <div className={`${hasImage ? 'stu-section-media-layout' : ''} ${hasImage && isImageLeft ? 'media-left' : ''}`}>
        <div className="stu-section-text-col">
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
            className="stu-section-media-figure"
            style={{ background: c.surface, border: `1px solid ${c.border}` }}
          >
            <div className="stu-section-media-wrap">
              <img
                src={section.image.src}
                alt={section.image.alt || section.heading}
                className="stu-section-media-img"
                loading="lazy"
              />
              {section.image.tag && (
                <span className="stu-section-media-tag" style={{ background: c.accent, color: '#fff' }}>
                  {section.image.tag}
                </span>
              )}
            </div>
            {section.image.caption && (
              <figcaption className="stu-section-media-caption" style={{ color: c.textMuted }}>
                {section.image.caption}
              </figcaption>
            )}
          </figure>
        )}
      </div>
    </section>
  );
}

export default function StudentsScrapedPage({ pageKey }: Props) {
  const c = useSectionTheme();
  const page = getStudentsPage(pageKey);

  return (
    <SectionPageLayout>
      {page.pageStatus === 'fallback' && page.sourceNote && (
        <p className="acad-scraped-note" style={{ background: c.surface2, color: c.textMuted, border: `1px solid ${c.border}` }}>
          {page.sourceNote}
        </p>
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
          <h2 className="acad-page-h2">Documents & Downloads</h2>
          <div className="acad-doc-grid">
            {page.documents.map(doc => (
              <DocCard key={doc.url} doc={doc} surface={c.surface} border={c.border} text={c.text} accent={c.accent} />
            ))}
          </div>
        </section>
      )}

      {page.contacts && page.contacts.length > 0 && (
        <section className="acad-scraped-section">
          <h2 className="acad-page-h2">Contact for Queries</h2>
          <div className="stu-queries-grid">
            {page.contacts.map((contact, i) => (
              <div
                key={i}
                className="stu-query-card"
                style={{ background: c.surface, border: `1px solid ${c.border}` }}
              >
                <strong className="stu-query-name" style={{ color: c.text }}>{contact.name}</strong>
                {contact.role && (
                  <p className="stu-query-role" style={{ color: c.textMuted }}>{contact.role}</p>
                )}
                {contact.email && (
                  <p className="stu-query-email" style={{ margin: '4px 0 0' }}>
                    <a href={`mailto:${contact.email}`} style={{ color: c.accent, fontWeight: 600 }}>
                      {contact.email}
                    </a>
                  </p>
                )}
                {contact.phone && (
                  <p className="stu-query-phone" style={{ color: c.textMuted, margin: '4px 0 0', fontSize: 14 }}>
                    <strong>Phone:</strong> <a href={`tel:${contact.phone.replace(/\D/g, '')}`} style={{ color: c.text }}>{contact.phone}</a>
                  </p>
                )}
                {contact.phones && contact.phones.length > 0 && (
                  <p className="stu-query-phones" style={{ color: c.textMuted, margin: '4px 0 0', fontSize: 14 }}>
                    <strong>Helpline:</strong>{' '}
                    {contact.phones.map((p, idx) => (
                      <span key={p}>
                        {idx > 0 && ', '}
                        <a href={`tel:${p.replace(/\D/g, '')}`} style={{ color: c.accent, fontWeight: 600 }}>{p}</a>
                      </span>
                    ))}
                  </p>
                )}
                {contact.note && (
                  <p className="stu-query-note" style={{ color: c.textMuted, margin: '4px 0 0', fontSize: 13 }}>
                    {contact.note}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {page.externalUrl && (
        <div className="stu-scrape-external" style={{ background: c.surface2, border: `1px solid ${c.border}` }}>
          <p style={{ color: c.text, margin: 0, fontWeight: 600 }}>Official Portal</p>
          <p style={{ color: c.textMuted, margin: '6px 0 12px', fontSize: 14 }}>
            Visit the dedicated portal for programmes, events and resources.
          </p>
          <a href={page.externalUrl} target="_blank" rel="noopener noreferrer" className="stu-scrape-cta" style={{ background: c.accent }}>
            Open Portal →
          </a>
        </div>
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
        <NavHubLinks items={STUDENTS_NAV} title="Student Resources & Activities" />
      )}

      {pageKey === 'scholarships' && (
        <Link to="/academics/scholarships" className="stu-link" style={{ color: c.accent, display: 'inline-block', marginTop: 16 }}>
          Academics — Scholarships →
        </Link>
      )}

      {pageKey === 'quantum-lab' && (
        <Link to="/nuzvid" className="stu-link" style={{ color: c.accent, display: 'inline-block', marginTop: 16 }}>
          RGUKT Nuzvid Campus →
        </Link>
      )}

      {pageKey === 'sports' && (
        <Link to="/administration/sports-board" className="stu-link" style={{ color: c.accent, display: 'inline-block', marginTop: 16 }}>
          Sports Board →
        </Link>
      )}

      {pageKey === 'alumni-engagement' && (
        <Link to="/alumni" className="stu-link" style={{ color: c.accent, display: 'inline-block', marginTop: 16 }}>
          Alumni Portal →
        </Link>
      )}
    </SectionPageLayout>
  );
}
