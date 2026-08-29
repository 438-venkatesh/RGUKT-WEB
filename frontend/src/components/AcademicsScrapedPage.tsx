import { Link } from 'react-router-dom';
import SectionPageLayout, { useSectionTheme } from './SectionPageLayout';
import NavHubLinks from './NavHubLinks';
import {
  BranchGrid,
  DocGrid,
  StatsGrid,
} from './AcademicsContentHelpers';
import {
  getAcademicsPage,
  isShortLine,
  type AcademicsDocument,
  type AcademicsSection,
} from '../data/academicsScrapedData';
import {
  ACADEMICS_NAV,
  PG_PROGRAMMES,
  RESEARCH_AREAS,
  UG_BRANCHES,
} from '../data/academicsContent';
import './AcademicsScrapedPage.css';
import './AcademicsContentPage.css';
import './SectionPageLayout.css';
import '../pages/AcademicSubpage.css';

type Props = {
  pageKey: string;
};

function SectionBlock({
  section,
  c,
}: {
  section: AcademicsSection;
  c: ReturnType<typeof useSectionTheme>;
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

  const sectionDocs: AcademicsDocument[] = (section.documents ?? []).map(d => ({
    title: d.title,
    url: d.url,
    size: d.size,
    date: d.date,
  }));

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

      {sectionDocs.length > 0 && <DocGrid docs={sectionDocs} />}
    </section>
  );
}

export default function AcademicsScrapedPage({ pageKey }: Props) {
  const c = useSectionTheme();
  const page = getAcademicsPage(pageKey);

  const sectionDocs = page.sections.flatMap(s => s.documents ?? []);
  const allDocs = [...page.documents, ...sectionDocs];

  return (
    <SectionPageLayout>
      <h1 className="section-page-h1">{page.displayTitle}</h1>



      {page.intro && (
        <p className="section-page-intro acad-scraped-intro" style={{ color: c.textMuted }}>{page.intro}</p>
      )}

      {page.highlights.length > 0 && <StatsGrid stats={page.highlights} />}

      {pageKey === 'undergraduate' && (
        <section className="acad-scraped-section">
          <h2 className="acad-page-h2">B.Tech Branches</h2>
          <BranchGrid branches={UG_BRANCHES} />
        </section>
      )}

      {pageKey === 'postgraduate' && (
        <section className="acad-scraped-section">
          <h2 className="acad-page-h2">M.Tech Programmes</h2>
          <div className="acad-sub-cards">
            {PG_PROGRAMMES.map(pg => (
              <div
                key={pg.branch}
                className="acad-sub-card"
                style={{ background: c.surface, border: `1px solid ${c.border}` }}
              >
                <span className="acad-sub-card-label" style={{ color: c.accent }}>M.Tech</span>
                <strong style={{ color: c.text }}>{pg.branch}</strong>
                <p style={{ color: c.textMuted }}>{pg.focus}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {pageKey === 'research-programmes' && (
        <section className="acad-scraped-section">
          <h2 className="acad-page-h2">Research Areas</h2>
          <ul className="acad-scraped-list" style={{ color: c.textMuted }}>
            {RESEARCH_AREAS.map(area => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </section>
      )}

      {page.sections.map(section => (
        <SectionBlock key={section.heading} section={section} c={c} />
      ))}

      {allDocs.length > 0 && (
        <section className="acad-scraped-section">
          <h2 className="acad-page-h2">Documents & Downloads</h2>
          <DocGrid docs={allDocs.map(d => ({ title: d.title, url: d.url, size: d.size, date: d.date }))} />
        </section>
      )}



      {pageKey === 'overview' && (
        <NavHubLinks
          items={ACADEMICS_NAV.filter(item => item.href !== '/academics')}
          title="Programmes & Resources"
        />
      )}
    </SectionPageLayout>
  );
}
