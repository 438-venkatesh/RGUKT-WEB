import { Link } from 'react-router-dom';
import { useDarkMode } from '../context/DarkModeContext';
import SectionPageLayout, { useSectionTheme } from './SectionPageLayout';
import NavHubLinks from './NavHubLinks';
import {
  getAdmissionsPage,
  type AdmissionsCampus,
  type AdmissionsDocument,
  type AdmissionsHelpline,
  type AdmissionsScheduleItem,
  type AdmissionsSection,
  type AdmissionsStep,
} from '../data/admissionsScrapedData';
import { ADMISSIONS_NAV, OFFICIAL_PORTAL_URL } from '../data/admissionsContent';
import './AcademicsScrapedPage.css';
import './AdministrationScrapedPage.css';
import './AdmissionsScrapedPage.css';

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
  doc: AdmissionsDocument;
  surface: string;
  border: string;
  text: string;
  textMuted: string;
  accent: string;
}) {
  const isImg = doc.url.endsWith('.jpg') || doc.url.endsWith('.png');
  const inner = (
    <>
      <span className="acad-doc-icon" aria-hidden style={{ background: isImg ? '#0284C7' : '#C8102E' }}>
        {isImg ? 'IMG' : 'PDF'}
      </span>
      <span className="acad-doc-body">
        <span className="acad-doc-title" style={{ color: text }}>
          {doc.title}
        </span>
        {doc.badge && (
          <span className="acad-doc-meta" style={{ color: textMuted }}>
            {doc.badge}
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
        style={{ background: surface, border: `1px solid ${border}` }}
      >
        {inner}
      </a>
    );
  }

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

function SectionBlock({
  section,
  c,
}: {
  section: AdmissionsSection;
  c: ReturnType<typeof useSectionTheme>;
}) {
  return (
    <section className="acad-scraped-section">
      <h2 className="acad-page-h2">{section.heading}</h2>

      {section.content?.map((para, i) => (
        <p key={i} className="acad-scraped-para" style={{ color: c.textMuted }}>
          {para}
        </p>
      ))}

      {section.subsections && (
        <div className="adm-spec-grid" style={{ marginTop: 14 }}>
          {section.subsections.map((sub, i) => (
            <div
              key={i}
              className="adm-spec-card"
              style={{ background: c.surface, border: `1px solid ${c.border}` }}
            >
              <h3 className="adm-spec-name" style={{ color: c.text, fontSize: '1rem' }}>
                {sub.title}
              </h3>
              <p className="adm-spec-detail" style={{ color: c.textMuted }}>
                {sub.description}
              </p>
            </div>
          ))}
        </div>
      )}

      {section.items && section.items.length > 0 && (
        <ul className="acad-scraped-list" style={{ color: c.textMuted, marginTop: 12 }}>
          {section.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
    </section>
  );
}

function StatusBannerBox({
  banner,
  c,
  dark,
}: {
  banner: NonNullable<ReturnType<typeof getAdmissionsPage>['banner']>;
  c: ReturnType<typeof useSectionTheme>;
  dark: boolean;
}) {
  const isClosedSports = banner.status === 'closed-sports-open';
  const isArchive = banner.status === 'archive';

  return (
    <div
      className={`adm-status-banner ${isClosedSports ? 'status-closed-sports' : ''} ${isArchive ? 'status-archive' : ''}`}
      style={{
        background: isClosedSports ? (dark ? 'rgba(232, 32, 60, 0.12)' : '#FFF1F2') : c.surface,
        border: `1px solid ${isClosedSports ? (dark ? '#E8203C' : '#FDA4AF') : c.border}`,
      }}
    >
      <div className="adm-banner-header">
        <span
          className={`adm-banner-badge ${isClosedSports ? 'badge-urgent' : 'badge-archive'}`}
        >
          {banner.badge || (isClosedSports ? 'Official Status' : 'Archive Notice')}
        </span>
        <h2 className="adm-banner-title" style={{ color: isClosedSports ? (dark ? '#FFA4B0' : '#9F1239') : c.text }}>
          {banner.headline}
        </h2>
      </div>

      {banner.description && (
        <p className="adm-banner-desc" style={{ color: isClosedSports ? (dark ? '#E2E8F0' : '#881337') : c.textMuted }}>
          {banner.description}
        </p>
      )}

      {banner.sportsNotice && (
        <div
          className="adm-banner-sports-box"
          style={{
            background: dark ? 'rgba(255, 255, 255, 0.05)' : '#FFFFFF',
            border: `1px dashed ${isClosedSports ? (dark ? 'rgba(232, 32, 60, 0.4)' : '#F43F5E') : c.border}`,
            color: c.text,
          }}
        >
          <strong>Sports Quota Candidates:</strong> {banner.sportsNotice}
        </div>
      )}

      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 4 }}>
        {banner.applyUrl && isExternal(banner.applyUrl) && (
          <a
            href={banner.applyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="adm-banner-action"
            style={{
              background: isClosedSports ? '#E8203C' : c.accent,
              color: '#FFFFFF',
            }}
          >
            Visit Official Admissions Portal →
          </a>
        )}
        {banner.applyUrl && !isExternal(banner.applyUrl) && (
          <Link
            to={banner.applyUrl}
            className="adm-banner-action"
            style={{
              background: c.accent,
              color: '#FFFFFF',
            }}
          >
            View Current Admissions 2026 →
          </Link>
        )}
      </div>
    </div>
  );
}

function StepsTracker({
  steps,
  c,
}: {
  steps: AdmissionsStep[];
  c: ReturnType<typeof useSectionTheme>;
}) {
  return (
    <section className="acad-scraped-section">
      <h2 className="acad-page-h2">Application Workflow (Step-by-Step)</h2>
      <div className="adm-steps-grid">
        {steps.map(s => (
          <div
            key={s.step}
            className="adm-step-card"
            style={{ background: c.surface, border: `1px solid ${c.border}` }}
          >
            <div className="adm-step-top">
              <span
                className="adm-step-badge"
                style={{
                  background: s.step === 1 ? '#E0E7FF' : s.step === 2 ? '#DCFCE7' : s.step === 3 ? '#FEF3C7' : '#F3E8FF',
                  color: s.step === 1 ? '#3730A3' : s.step === 2 ? '#166534' : s.step === 3 ? '#92400E' : '#6B21A8',
                }}
              >
                {s.badge}
              </span>
              <span className="adm-step-num" style={{ color: c.accent }}>
                0{s.step}
              </span>
            </div>
            <h3 className="adm-step-title" style={{ color: c.text }}>
              {s.title}
            </h3>
            <p className="adm-step-desc" style={{ color: c.textMuted }}>
              {s.description}
            </p>
            {s.actionNote && (
              <div
                className="adm-step-action-note"
                style={{ background: c.surface2, color: c.text }}
              >
                ℹ {s.actionNote}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function CampusesGrid({
  campuses,
  c,
}: {
  campuses: AdmissionsCampus[];
  c: ReturnType<typeof useSectionTheme>;
}) {
  return (
    <section className="acad-scraped-section">
      <h2 className="acad-page-h2">Constituent Campuses & Engineering Disciplines</h2>
      <div className="adm-campuses-grid">
        {campuses.map(camp => (
          <div
            key={camp.name}
            className="adm-campus-card"
            style={{ background: c.surface, border: `1px solid ${c.border}` }}
          >
            <div className="adm-campus-header">
              <h3 className="adm-campus-title" style={{ color: c.text }}>
                {camp.name}
              </h3>
              <span
                className="adm-campus-district"
                style={{ background: c.surface2, color: c.accent }}
              >
                {camp.district}
              </span>
            </div>
            <p className="adm-campus-loc" style={{ color: c.textMuted }}>
              📍 {camp.location}
            </p>
            <p className="adm-campus-desc" style={{ color: c.textMuted }}>
              {camp.overview}
            </p>
            <div className="adm-campus-branches-title" style={{ color: c.text }}>
              Engineering Disciplines:
            </div>
            <div className="adm-branch-tags">
              {camp.branches.map(b => (
                <span
                  key={b}
                  className="adm-branch-tag"
                  style={{ background: c.surface2, color: c.text }}
                >
                  {b}
                </span>
              ))}
            </div>
            <Link to={camp.href} className="adm-campus-link" style={{ color: c.accent }}>
              Explore Campus Profile →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

function ScheduleTable({
  schedule,
  c,
}: {
  schedule: AdmissionsScheduleItem[];
  c: ReturnType<typeof useSectionTheme>;
}) {
  return (
    <section className="acad-scraped-section">
      <h2 className="acad-page-h2">Official Admissions Schedule (AY 2026–27)</h2>
      <div
        className="adm-table-wrapper"
        style={{ background: c.surface, border: `1px solid ${c.border}` }}
      >
        <table className="adm-table">
          <thead>
            <tr style={{ background: c.surface2, color: c.text }}>
              <th style={{ width: '8%' }}>S.No</th>
              <th style={{ width: '52%' }}>Description of Event</th>
              <th style={{ width: '25%' }}>Date(s)</th>
              <th style={{ width: '15%' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {schedule.map(item => (
              <tr key={item.sNo}>
                <td style={{ color: c.textMuted, fontWeight: 700 }}>{item.sNo}</td>
                <td style={{ color: c.text, fontWeight: 600 }}>{item.event}</td>
                <td style={{ color: c.accent, fontWeight: 700 }}>{item.date}</td>
                <td>
                  <span
                    className={`adm-status-pill ${item.status === 'Completed' ? 'pill-completed' : 'pill-progress'}`}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function HelpdeskCard({
  helpline,
  c,
}: {
  helpline: AdmissionsHelpline;
  c: ReturnType<typeof useSectionTheme>;
}) {
  return (
    <section className="acad-scraped-section">
      <div
        className="adm-helpdesk-card"
        style={{
          background: c.surface,
          border: `1px solid ${c.border}`,
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
        }}
      >
        <h2 className="adm-helpdesk-title" style={{ color: c.text }}>
          📞 Central Admissions Helpdesk & Support
        </h2>
        <div className="adm-helpdesk-grid">
          <div>
            <div className="adm-helpdesk-item-title" style={{ color: c.textMuted }}>
              Email Helpdesk
            </div>
            <a
              href={`mailto:${helpline.email}`}
              className="adm-helpdesk-value"
              style={{ color: c.accent }}
            >
              {helpline.email}
            </a>
          </div>
          <div>
            <div className="adm-helpdesk-item-title" style={{ color: c.textMuted }}>
              Helpline Phone Numbers
            </div>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              {helpline.phones.map(phone => (
                <a
                  key={phone}
                  href={`tel:${phone.replace(/\D/g, '')}`}
                  className="adm-helpdesk-value"
                  style={{ color: c.text }}
                >
                  📞 {phone}
                </a>
              ))}
            </div>
          </div>
          <div>
            <div className="adm-helpdesk-item-title" style={{ color: c.textMuted }}>
              Operational Hours
            </div>
            <div className="adm-helpdesk-value" style={{ color: c.text }}>
              ⏰ {helpline.timings}
            </div>
          </div>
        </div>

        {helpline.emailFormatNotice && (
          <p
            className="adm-helpdesk-note"
            style={{ background: c.surface2, color: c.textMuted }}
          >
            <strong>Mandatory Email Format:</strong> {helpline.emailFormatNotice}
          </p>
        )}
      </div>
    </section>
  );
}

export default function AdmissionsScrapedPage({ pageKey }: Props) {
  const c = useSectionTheme();
  const { dark } = useDarkMode();
  const page = getAdmissionsPage(pageKey);

  return (
    <SectionPageLayout>
      {/* Hero Banner with established RGUKT typography */}
      <div className="adm-hero" style={{ border: `1px solid ${c.border}` }}>
        <img src={page.heroImage} alt="" className="adm-hero-img" />
        <div className="adm-hero-overlay" />
        <div className="adm-hero-text">
          <span className="adm-eyebrow">Admissions</span>
          <h1 className="adm-title">{page.displayTitle}</h1>
          <div className="adm-rgukt-label">@RGUKT-AP</div>
        </div>
      </div>

      {/* Prominent Status Banner (Live 2026 status / Archive notice) */}
      {page.banner && <StatusBannerBox banner={page.banner} c={c} dark={dark} />}

      {/* Intro text */}
      {page.intro && (
        <p className="section-page-intro acad-scraped-intro" style={{ color: c.textMuted }}>
          {page.intro}
        </p>
      )}

      {/* Highlights / Stats Grid */}
      {page.highlights.length > 0 && (
        <div className="acad-sub-stats acad-scraped-stats">
          {page.highlights.map(h => (
            <div
              key={h.label}
              className="acad-sub-stat"
              style={{ background: c.surface, border: `1px solid ${c.border}` }}
            >
              <div className="acad-sub-stat-value" style={{ color: c.accent }}>
                {h.value}
              </div>
              <div className="acad-sub-stat-label" style={{ color: c.textMuted }}>
                {h.label}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Application Steps Tracker */}
      {page.steps && page.steps.length > 0 && <StepsTracker steps={page.steps} c={c} />}

      {/* Application Fees Table (for 2026 and Fees pages) */}
      {page.applicationFees && page.applicationFees.length > 0 && (
        <section className="acad-scraped-section">
          <h2 className="acad-page-h2">Application Fee Structure</h2>
          <div
            className="adm-table-wrapper"
            style={{ background: c.surface, border: `1px solid ${c.border}` }}
          >
            <table className="adm-table">
              <thead>
                <tr style={{ background: c.surface2, color: c.text }}>
                  <th>Candidate Category</th>
                  <th>Application Fee</th>
                  <th>Payment Mode</th>
                </tr>
              </thead>
              <tbody>
                {page.applicationFees.map((fee, i) => (
                  <tr key={i}>
                    <td style={{ color: c.text, fontWeight: 700 }}>
                      {fee.category || fee.type}
                    </td>
                    <td style={{ color: c.accent, fontWeight: 800, fontSize: '1.05rem' }}>
                      {fee.fee || fee.amount}
                    </td>
                    <td style={{ color: c.textMuted }}>
                      {fee.mode || fee.recurrence || 'Online via Payment Gateway'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* 7-Point Cross-Verification Checklist */}
      {page.criticalChecklist && page.criticalChecklist.length > 0 && (
        <section className="acad-scraped-section">
          <div
            className="adm-checklist-card"
            style={{ background: c.surface, border: `1px solid ${c.border}` }}
          >
            <h2 className="adm-checklist-title" style={{ color: c.text }}>
              ✅ Before You Submit: Mandatory Verification Checklist
            </h2>
            <p style={{ color: c.textMuted, fontSize: '0.88rem', margin: '0 0 14px 0' }}>
              Candidates are strongly advised to cross-verify the following 7 key fields before finalizing their online submission:
            </p>
            <ul className="adm-checklist-grid">
              {page.criticalChecklist.map((item, i) => (
                <li key={i} className="adm-checklist-item" style={{ color: c.text }}>
                  <span className="adm-check-icon">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Official 2026 Schedule Table */}
      {page.schedule && page.schedule.length > 0 && (
        <ScheduleTable schedule={page.schedule} c={c} />
      )}

      {/* Campuses Grid (for UG Admissions overview) */}
      {page.campuses && page.campuses.length > 0 && (
        <CampusesGrid campuses={page.campuses} c={c} />
      )}

      {/* PG Specializations Grid (for PG Admissions) */}
      {page.specializations && page.specializations.length > 0 && (
        <section className="acad-scraped-section">
          <h2 className="acad-page-h2">M.Tech Specializations & Engineering Departments</h2>
          <div className="adm-spec-grid">
            {page.specializations.map(spec => (
              <div
                key={spec.name}
                className="adm-spec-card"
                style={{ background: c.surface, border: `1px solid ${c.border}` }}
              >
                <h3 className="adm-spec-name" style={{ color: c.text }}>
                  {spec.name}
                </h3>
                <div className="adm-spec-dept" style={{ color: c.accent }}>
                  {spec.department} ({spec.campus})
                </div>
                <p className="adm-spec-detail" style={{ color: c.textMuted }}>
                  <strong>Curriculum Focus:</strong> {spec.focus}
                </p>
                <p className="adm-spec-detail" style={{ color: c.textMuted }}>
                  <strong>Eligibility:</strong> {spec.eligibility}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Tuition Fees Table (for Fee Structure) */}
      {page.tuitionFees && page.tuitionFees.length > 0 && (
        <section className="acad-scraped-section">
          <h2 className="acad-page-h2">Annual Tuition Fees by Programme</h2>
          <div
            className="adm-table-wrapper"
            style={{ background: c.surface, border: `1px solid ${c.border}` }}
          >
            <table className="adm-table">
              <thead>
                <tr style={{ background: c.surface2, color: c.text }}>
                  <th>Programme Stage</th>
                  <th>AP & Telangana Students</th>
                  <th>Other States / Supernumerary</th>
                  <th>Scholarship / Reimbursement Support</th>
                </tr>
              </thead>
              <tbody>
                {page.tuitionFees.map((t, i) => (
                  <tr key={i}>
                    <td style={{ color: c.text, fontWeight: 700 }}>{t.programme}</td>
                    <td style={{ color: c.accent, fontWeight: 700 }}>{t.forAP}</td>
                    <td style={{ color: c.textMuted }}>{t.forOtherStates}</td>
                    <td style={{ color: c.textMuted, fontSize: '0.82rem' }}>{t.reimbursement}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* One-Time & Institutional Fees Table */}
      {page.oneTimeFees && page.oneTimeFees.length > 0 && (
        <section className="acad-scraped-section">
          <h2 className="acad-page-h2">One-Time & Institutional Charges at Admission</h2>
          <div
            className="adm-table-wrapper"
            style={{ background: c.surface, border: `1px solid ${c.border}` }}
          >
            <table className="adm-table">
              <thead>
                <tr style={{ background: c.surface2, color: c.text }}>
                  <th>Fee Component</th>
                  <th>Prescribed Amount</th>
                  <th>Description / Terms</th>
                </tr>
              </thead>
              <tbody>
                {page.oneTimeFees.map((o, i) => (
                  <tr key={i}>
                    <td style={{ color: c.text, fontWeight: 700 }}>{o.feeHead}</td>
                    <td style={{ color: c.accent, fontWeight: 700 }}>{o.amount}</td>
                    <td style={{ color: c.textMuted }}>{o.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* Tie-Breaking Protocol Box */}
      {page.tieBreakingRules && page.tieBreakingRules.length > 0 && (
        <section className="acad-scraped-section">
          <div
            className="adm-tie-box"
            style={{ background: c.surface, border: `1px solid ${c.border}` }}
          >
            <h2 className="adm-tie-title" style={{ color: c.text }}>
              ⚖ Order of Priority for Resolving Ties in Marks
            </h2>
            <p style={{ color: c.textMuted, fontSize: '0.88rem', margin: '0 0 10px 0' }}>
              When two or more candidates secure the same total marks in the 10th Class (SSC or equivalent), rank order is determined sequentially:
            </p>
            <ol className="adm-tie-list">
              {page.tieBreakingRules.map((rule, i) => (
                <li key={i} className="adm-tie-item" style={{ color: c.text }}>
                  {rule}
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* Custom Sections */}
      {page.sections.map(section => (
        <SectionBlock key={section.heading} section={section} c={c} />
      ))}

      {/* Documents & Downloads */}
      {page.documents.length > 0 && (
        <section className="acad-scraped-section">
          <h2 className="acad-page-h2">Official Documents & Downloads</h2>
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

      {/* Admissions Helpdesk Box */}
      {page.helpline && <HelpdeskCard helpline={page.helpline} c={c} />}

      {/* Frequently Asked Questions */}
      {page.faq && page.faq.length > 0 && (
        <section className="acad-scraped-section">
          <h2 className="acad-page-h2">Frequently Asked Questions (FAQ)</h2>
          <div className="adm-faq-list">
            {page.faq.map((item, i) => (
              <div
                key={i}
                className="adm-faq-card"
                style={{ background: c.surface, border: `1px solid ${c.border}` }}
              >
                <h3 className="adm-faq-q" style={{ color: c.text }}>
                  Q: {item.q}
                </h3>
                <p className="adm-faq-a" style={{ color: c.textMuted }}>
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Official Portal Footer CTA */}
      <div
        style={{
          margin: '28px 0 16px 0',
          padding: '16px 20px',
          borderRadius: 10,
          background: c.surface2,
          border: `1px solid ${c.border}`,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 12,
        }}
      >
        <div>
          <strong style={{ color: c.text }}>RGUKT Central Admissions Portal:</strong>
          <span style={{ color: c.textMuted, marginLeft: 8 }}>
            For online login, application tracking, and official provisional selection lists.
          </span>
        </div>
        <a
          href={page.portalUrl || OFFICIAL_PORTAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: c.accent,
            color: '#FFFFFF',
            fontWeight: 700,
            padding: '8px 16px',
            borderRadius: 6,
            textDecoration: 'none',
            fontSize: '0.88rem',
          }}
        >
          Open Admissions Portal →
        </a>
      </div>

      {/* NavHubLinks: All 8 Admissions modules */}
      <NavHubLinks items={ADMISSIONS_NAV} title="Explore All Admissions Modules" />
    </SectionPageLayout>
  );
}