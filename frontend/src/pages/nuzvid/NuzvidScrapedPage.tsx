import { Link } from 'react-router-dom';
import {
  getNuzvidPage,
  type NuzvidDocument,
  type NuzvidSection,
  type NuzvidTable,
} from '../../data/nuzvidScrapedData';
import {
  NUZVID_ENGINEERING_DEPTS,
  NUZVID_SCIENCE_DEPTS,
  NUZVID_HUMANITIES_DEPTS,
} from '../../data/nuzvidNav';
import './NuzvidScrapedPage.css';

type Props = { pagePath: string };

function SectionBlock({ section }: { section: NuzvidSection }) {
  const empty = !section.content?.length && !section.items?.length;
  if (empty) return null;
  return (
    <section className="nzs-section">
      <h2 className="nzs-h2">{section.heading}</h2>
      {section.content?.map((para, i) => (
        <p key={i} className="nzs-para">{para}</p>
      ))}
      {section.items && section.items.length > 0 && (
        <ul className="nzs-list">
          {section.items.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      )}
    </section>
  );
}

function DocCard({ doc }: { doc: NuzvidDocument }) {
  return (
    <a href={doc.url} target="_blank" rel="noopener noreferrer" className="nzs-doc">
      <span className="nzs-doc-icon">PDF</span>
      <span className="nzs-doc-title">{doc.title}</span>
      <span className="nzs-doc-arrow">↓</span>
    </a>
  );
}

function DataTable({ table }: { table: NuzvidTable }) {
  if (!table.rows.length) return null;
  const [head, ...body] = table.rows;
  const hasHeader = head.every(c => c.length < 40);
  return (
    <div className="nzs-table-wrap">
      <table className="nzs-table">
        {hasHeader && (
          <thead>
            <tr>{head.map((cell, i) => <th key={i}>{cell}</th>)}</tr>
          </thead>
        )}
        <tbody>
          {(hasHeader ? body : table.rows).map((row, ri) => (
            <tr key={ri}>{row.map((cell, ci) => <td key={ci}>{cell}</td>)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function DeptHub() {
  return (
    <section className="nzs-section">
      <h2 className="nzs-h2">Browse Departments</h2>
      <div className="nzs-dept-grid">
        {[...NUZVID_ENGINEERING_DEPTS, ...NUZVID_SCIENCE_DEPTS, ...NUZVID_HUMANITIES_DEPTS].map(d => (
          <Link key={d.href} to={d.href} className="nzs-dept-link">{d.label}</Link>
        ))}
      </div>
    </section>
  );
}

export default function NuzvidScrapedPage({ pagePath }: Props) {
  const page = getNuzvidPage(pagePath);

  return (
    <article className="nzs-page">
      <header className="nzs-hero">
        <img src={page.heroImage} alt="" className="nzs-hero-img" />
        <div className="nzs-hero-overlay" />
        <div className="nzs-hero-text">
          <p className="nzs-kicker">RGUKT Nuzvid</p>
          <h1 className="nzs-title">{page.displayTitle}</h1>
        </div>
      </header>

      <div className="nzs-body">
        {page.pageStatus === 'fallback' && page.sourceNote && (
          <p className="nzs-note">{page.sourceNote}</p>
        )}

        {page.officer && (
          <div className="nzs-officer">
            {page.officer.photo && (
              <img src={page.officer.photo} alt={page.officer.name} className="nzs-officer-photo" />
            )}
            <div>
              <h2 className="nzs-officer-name">{page.officer.name}</h2>
              {page.officer.role && <p className="nzs-officer-role">{page.officer.role}</p>}
              {page.officer.bio.map((para, i) => (
                <p key={i} className="nzs-para">{para}</p>
              ))}
              {page.officer.emails.map(email => (
                <p key={email} className="nzs-email">
                  <a href={`mailto:${email}`}>{email}</a>
                </p>
              ))}
            </div>
          </div>
        )}

        {page.intro && <p className="nzs-intro">{page.intro}</p>}

        {pagePath === 'departments' && <DeptHub />}

        {page.sections.map(section => (
          <SectionBlock key={section.heading} section={section} />
        ))}

        {page.tables.map((table, i) => (
          <section key={i} className="nzs-section">
            {table.caption !== 'Details' && table.caption !== 'Table' && (
              <h2 className="nzs-h2">{table.caption}</h2>
            )}
            <DataTable table={table} />
          </section>
        ))}

        {page.images.length > 1 && (
          <section className="nzs-section">
            <h2 className="nzs-h2">{pagePath === 'gallery' ? 'Photo Gallery' : 'Images'}</h2>
            <div className="nzs-gallery">
              {page.images.map(src => (
                <a key={src} href={src} target="_blank" rel="noopener noreferrer" className="nzs-gallery-item">
                  <img src={src} alt="" loading="lazy" />
                </a>
              ))}
            </div>
          </section>
        )}

        {page.documents.length > 0 && (
          <section className="nzs-section">
            <h2 className="nzs-h2">Documents & Downloads</h2>
            <div className="nzs-docs">
              {page.documents.map(doc => <DocCard key={doc.url} doc={doc} />)}
            </div>
          </section>
        )}



        <Link to="/nuzvid" className="nzs-back">← Back to Nuzvid Home</Link>
      </div>
    </article>
  );
}
