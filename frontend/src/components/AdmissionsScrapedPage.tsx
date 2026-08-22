import { Link } from 'react-router-dom';
import SectionPageLayout, { useSectionTheme } from './SectionPageLayout';
import NavHubLinks from './NavHubLinks';
import {
  getAdmissionsPage,
  type AdmissionsDocument,
  type AdmissionsSection,
} from '../data/admissionsScrapedData';
import { ADMISSIONS_NAV } from '../data/admissionsContent';
import './AcademicsScrapedPage.css';
import './AdmissionsScrapedPage.css';
import '../pages/Admissions.css';

type Props = { pageKey: string };

function isExternal(url: string) {
  return url.startsWith('http://') || url.startsWith('https://');
}

function DocCard({
  doc,
  surface,
  border,
  text,
  accent,
}: {
  doc: AdmissionsDocument;
  surface: string;
  border: string;
  text: string;
  accent: string;
}) {
  const inner = (
    <>
      <span className="acad-doc-icon" aria-hidden>PDF</span>
      <span className="acad-doc-body">
        <span className="acad-doc-title" style={{ color: text }}>{doc.title}</span>
      </span>
      <span className="acad-doc-arrow" style={{ color: accent }}>↓</span>
    </>
  );
  return (
    <a
      href={doc.url}
      target="_blank"
      rel="noopener noreferrer"
      className="acad-doc-card"
      style={{ background: surface, border: `1px solid ${border}` }}
    >
      {inner}
    </a>
  );
}

function SectionBlock({ section, c }: { section: AdmissionsSection; c: ReturnType<typeof useSectionTheme> }) {
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

export default function AdmissionsScrapedPage({ pageKey }: Props) {
  const c = useSectionTheme();
  const page = getAdmissionsPage(pageKey);

  return (
    <SectionPageLayout>
      {pageKey === 'overview' && (
        <div className="adm-apply-bar" style={{ background: c.primary, borderRadius: 8, marginBottom: 24 }}>
          <p className="adm-hero-sub">
            10th pass students from rural Andhra Pradesh — apply for the six-year integrated B.Tech programme
          </p>
          <Link to="/admissions/2026" className="adm-hero-btn" style={{ background: c.accent }}>
            Admissions 2026 →
          </Link>
        </div>
      )}

      {page.banner && (
        <div
          className={`adm-scrape-banner adm-scrape-banner--${page.banner.status}`}
          style={{ background: page.banner.status === 'open' ? c.primary : c.surface2, border: `1px solid ${c.border}` }}
        >
          <div>
            <p className="adm-scrape-banner-kicker">
              {pageKey === '2026' ? 'Academic Year 2026–27' : pageKey === '2025' ? 'Academic Year 2025–26' : 'RGUKT-AP Admissions'}
            </p>
            <h2 className="adm-scrape-banner-title" style={{ color: page.banner.status === 'open' ? '#fff' : c.text }}>
              {page.banner.headline}
            </h2>
            {page.banner.lastDate && (
              <p className="adm-scrape-banner-date" style={{ color: page.banner.status === 'open' ? 'rgba(255,255,255,0.9)' : c.textMuted }}>
                Last Date: {page.banner.lastDate} · 5:00 PM
              </p>
            )}
            {page.intro && page.banner.status === 'open' && (
              <p className="adm-scrape-banner-sub" style={{ color: 'rgba(255,255,255,0.88)' }}>{page.intro}</p>
            )}
          </div>
          {page.banner.status === 'open' && page.banner.applyUrl && (
            <a
              href={page.banner.applyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="adm-scrape-apply-btn"
              style={{ background: c.accent }}
            >
              Apply on Official Portal →
            </a>
          )}
        </div>
      )}

      <div className="acad-scraped-hero adm-scrape-hero" style={{ border: `1px solid ${c.border}` }}>
        <img src={page.heroImage} alt="" className="acad-scraped-hero-img" />
        <div className="acad-scraped-hero-overlay adm-scrape-hero-overlay" />
        <div className="acad-scraped-hero-text">
          <span className="acad-scraped-eyebrow">Admissions</span>
          <h1 className="acad-scraped-title">{page.displayTitle}</h1>
        </div>
      </div>

      {page.pageStatus === 'fallback' && page.sourceNote && (
        <p className="acad-scraped-note" style={{ background: c.surface2, color: c.textMuted, border: `1px solid ${c.border}` }}>
          {page.sourceNote}
        </p>
      )}

      {page.intro && !page.banner && (
        <p className="section-page-intro acad-scraped-intro" style={{ color: c.textMuted }}>{page.intro}</p>
      )}

      {page.intro && page.banner?.status === 'closed' && (
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

      {page.steps && page.steps.length > 0 && (
        <section className="acad-scraped-section">
          <h2 className="acad-page-h2">Application Steps</h2>
          <div className="adm-scrape-steps">
            {page.steps.map(step => (
              <div key={step.n} className="adm-scrape-step" style={{ background: c.surface, border: `1px solid ${c.border}` }}>
                <span className="adm-scrape-step-num" style={{ background: c.accent, color: '#fff' }}>{step.n}</span>
                <div>
                  <strong style={{ color: c.text }}>{step.label}</strong>
                  <p style={{ color: c.textMuted, margin: '6px 0 0', fontSize: 14, lineHeight: 1.55 }}>{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {page.timeline && page.timeline.length > 0 && (
        <section className="acad-scraped-section">
          <h2 className="acad-page-h2">{pageKey === '2025' ? 'Key Dates (2025–26)' : 'Admission Timeline'}</h2>
          <div className="adm-scrape-timeline">
            {page.timeline.map(item => (
              <div key={item.date + item.event} className="adm-scrape-timeline-item" style={{ background: c.surface, border: `1px solid ${c.border}` }}>
                <span className="adm-scrape-timeline-date" style={{ color: c.accent }}>{item.date}</span>
                <span className="adm-scrape-timeline-event" style={{ color: c.text }}>{item.event}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {page.feeRows && page.feeRows.length > 0 && (
        <section className="acad-scraped-section">
          <h2 className="acad-page-h2">Campus-wise Fee Structure</h2>
          <div className="adm-table-wrap" style={{ border: `1px solid ${c.border}` }}>
            <table className="adm-table">
              <thead>
                <tr style={{ background: c.surface2 }}>
                  <th className="adm-td adm-td--bold" style={{ color: c.text }}>Campus</th>
                  <th className="adm-td adm-td--bold" style={{ color: c.text }}>Tuition</th>
                  <th className="adm-td adm-td--bold" style={{ color: c.text }}>Hostel (approx.)</th>
                </tr>
              </thead>
              <tbody>
                {page.feeRows.map(row => (
                  <tr key={row.campus} style={{ borderTop: `1px solid ${c.border}` }}>
                    <td className="adm-td adm-td--bold" style={{ color: c.text }}>{row.campus}</td>
                    <td className="adm-td" style={{ color: c.textMuted }}>{row.tuition}</td>
                    <td className="adm-td" style={{ color: c.textMuted }}>{row.hostel}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {page.helpline && (
        <section className="acad-scraped-section">
          <h2 className="acad-page-h2">Admissions Help Line</h2>
          <div className="adm-scrape-helpline" style={{ background: c.surface, border: `1px solid ${c.border}` }}>
            <p style={{ color: c.textMuted, margin: '0 0 16px' }}>
              For queries related to UG admissions (other than online payment issues), contact:
            </p>
            <div className="adm-scrape-helpline-grid">
              {page.helpline.phones.map(phone => (
                <a key={phone} href={`tel:${phone}`} className="adm-scrape-phone" style={{ color: c.accent }}>
                  {phone.replace(/(\d{5})(\d{5})/, '$1 $2')}
                </a>
              ))}
            </div>
            <p style={{ color: c.textMuted, margin: '12px 0' }}>
              Email:{' '}
              <a href={`mailto:${page.helpline.email}`} style={{ color: c.accent }}>{page.helpline.email}</a>
            </p>
            <p style={{ color: c.textMuted, margin: '0 0 12px', fontSize: 14 }}>{page.helpline.timings}</p>
            <p style={{ color: c.textMuted, margin: 0, fontSize: 13 }}>
              Include in your email: {page.helpline.emailFields.join(', ')}.
            </p>
          </div>
        </section>
      )}

      {page.sections.map(section => (
        <SectionBlock key={section.heading} section={section} c={c} />
      ))}

      {page.faq && page.faq.length > 0 && (
        <section className="acad-scraped-section">
          <h2 className="acad-page-h2">Frequently Asked Questions</h2>
          <div className="adm-scrape-faq">
            {page.faq.map(item => (
              <details key={item.q} className="adm-scrape-faq-item" style={{ background: c.surface, border: `1px solid ${c.border}` }}>
                <summary style={{ color: c.text }}>{item.q}</summary>
                <p style={{ color: c.textMuted, margin: '10px 0 0', fontSize: 14, lineHeight: 1.6 }}>{item.a}</p>
              </details>
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

      <div className="adm-scrape-portal-cta" style={{ background: c.surface2, border: `1px solid ${c.border}` }}>
        <p style={{ color: c.text, margin: 0, fontWeight: 600 }}>Official Admissions Portal</p>
        <p style={{ color: c.textMuted, margin: '6px 0 12px', fontSize: 14 }}>
          Register, pay application fee, and track your application status online.
        </p>
        <a href={page.portalUrl} target="_blank" rel="noopener noreferrer" className="adm-scrape-apply-btn adm-scrape-apply-btn--inline" style={{ background: c.accent }}>
          {isExternal(page.portalUrl) ? 'Open Admissions Portal →' : 'Apply Now →'}
        </a>
      </div>

      {page.rguktUrl && page.pageStatus === 'ok' && (
        <p className="acad-scraped-source" style={{ color: c.textMuted }}>
          Source:{' '}
          <a href={page.rguktUrl} target="_blank" rel="noopener noreferrer" style={{ color: c.accent }}>
            rgukt.in — {page.displayTitle}
          </a>
        </p>
      )}

      {pageKey === 'overview' && (
        <NavHubLinks items={ADMISSIONS_NAV.filter(i => i.href !== '/admissions')} title="Admissions Information" />
      )}

      {pageKey === '2025' && (
        <Link to="/admissions/2026" className="adm-inline-link" style={{ color: c.accent, display: 'inline-block', marginTop: 16 }}>
          Current Admissions 2026 →
        </Link>
      )}

      {pageKey === '2026' && (
        <Link to="/admissions/process" className="adm-inline-link" style={{ color: c.accent, display: 'inline-block', marginTop: 16 }}>
          Full application process →
        </Link>
      )}

      {pageKey === 'postgraduate' && (
        <Link to="/academics/postgraduate" className="adm-inline-link" style={{ color: c.accent, display: 'inline-block', marginTop: 16 }}>
          Postgraduate Programmes →
        </Link>
      )}

      {pageKey === 'doctoral' && (
        <Link to="/academics/research-programmes" className="adm-inline-link" style={{ color: c.accent, display: 'inline-block', marginTop: 16 }}>
          Research Programmes →
        </Link>
      )}

      {pageKey === 'fees' && (
        <p className="adm-footnote" style={{ color: c.textMuted, marginTop: 16 }}>
          See also{' '}
          <Link to="/academics/scholarships" style={{ color: c.accent }}>Scholarships and Financial Assistance</Link>.
        </p>
      )}
    </SectionPageLayout>
  );
}
