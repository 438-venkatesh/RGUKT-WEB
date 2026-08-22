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

function SectionBlock({ section, c }: { section: StudentsSection; c: ReturnType<typeof useSectionTheme> }) {
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

export default function StudentsScrapedPage({ pageKey }: Props) {
  const c = useSectionTheme();
  const page = getStudentsPage(pageKey);

  return (
    <SectionPageLayout>
      <div className="acad-scraped-hero stu-scrape-hero" style={{ border: `1px solid ${c.border}` }}>
        <img src={page.heroImage} alt="" className="acad-scraped-hero-img" />
        <div className="acad-scraped-hero-overlay stu-scrape-hero-overlay" />
        <div className="acad-scraped-hero-text">
          <span className="acad-scraped-eyebrow">Students</span>
          <h1 className="acad-scraped-title">{page.displayTitle}</h1>
        </div>
      </div>

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

      {page.helpline && (page.helpline.phones.length > 0 || page.helpline.emails.length > 0) && (
        <section className="acad-scraped-section">
          <h2 className="acad-page-h2">Helpline</h2>
          <div className="stu-scrape-helpline" style={{ background: c.surface, border: `1px solid ${c.border}` }}>
            {page.helpline.phones.map(phone => (
              <a key={phone} href={`tel:${phone.replace(/\D/g, '')}`} className="stu-scrape-phone" style={{ color: c.accent }}>
                {phone}
              </a>
            ))}
            {page.helpline.emails.map(email => (
              <p key={email} style={{ color: c.textMuted, margin: '8px 0 0' }}>
                Email: <a href={`mailto:${email}`} style={{ color: c.accent }}>{email}</a>
              </p>
            ))}
          </div>
        </section>
      )}

      {page.sections.map(section => (
        <SectionBlock key={section.heading} section={section} c={c} />
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
