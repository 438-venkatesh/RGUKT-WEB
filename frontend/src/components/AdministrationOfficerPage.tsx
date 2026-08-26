import type { ReactNode } from 'react';
import SectionPageLayout, { useSectionTheme } from './SectionPageLayout';
import { IconLeadership } from './AboutIcons';
import PersonSquareCard from './PersonSquareCard';
import './AcademicsScrapedPage.css';
import './SectionPageLayout.css';
import './AdministrationOfficerPage.css';
import '../pages/About.css';

export type AdminOfficerDocument = {
  title: string;
  url: string;
  date?: string;
  size?: string;
};

export type AdminOfficerSection = {
  heading: string;
  items?: string[];
  paragraphs?: string[];
};

export type AdminOfficerPageConfig = {
  title: string;
  intro: string;
  name: string;
  role: string;
  subtitle?: string;
  photo: string;
  emails?: string[];
  phone?: string;
  officeAddress?: string;
  sections: AdminOfficerSection[];
  documents?: AdminOfficerDocument[];
  sourceUrl: string;
  sourceLabel: string;
};

function SectionBlock({
  heading,
  children,
  c,
  icon,
}: {
  heading: string;
  children: ReactNode;
  c: ReturnType<typeof useSectionTheme>;
  icon?: ReactNode;
}) {
  return (
    <section className="officer-section">
      <div className="officer-section-head">
        <span className="officer-section-icon" style={{ background: `${c.accent}14`, color: c.accent }}>
          {icon ?? <IconLeadership color={c.accent} />}
        </span>
        <h2 className="officer-section-title" style={{ color: c.text }}>{heading}</h2>
      </div>
      {children}
    </section>
  );
}

export default function AdministrationOfficerPage({ config }: { config: AdminOfficerPageConfig }) {
  const c = useSectionTheme();

  return (
    <SectionPageLayout>
      <h1 className="section-page-h1">{config.title}</h1>
      <p className="section-page-intro" style={{ color: c.textMuted }}>{config.intro}</p>

      <div className="officer-profile-top">
        <div className="officer-profile-card-wrap">
          <PersonSquareCard
            photo={config.photo}
            name={config.name}
            label={config.role}
            note={config.subtitle}
            email={config.emails?.[0]}
          />
        </div>
        <div
          className="officer-profile-contact"
          style={{ background: c.surface, border: `1px solid ${c.border}` }}
        >
          <h2 className="officer-contact-heading" style={{ color: c.text }}>Contact Details</h2>
          {config.emails?.map(email => (
            <p key={email} className="officer-contact-line" style={{ color: c.textMuted }}>
              <strong style={{ color: c.text }}>Email: </strong>
              <a href={`mailto:${email}`} style={{ color: c.accent }}>{email}</a>
            </p>
          ))}
          {config.phone && (
            <p className="officer-contact-line" style={{ color: c.textMuted }}>
              <strong style={{ color: c.text }}>Phone: </strong>
              <a href={`tel:${config.phone.replace(/[^0-9+]/g, '')}`} style={{ color: c.accent }}>
                {config.phone}
              </a>
            </p>
          )}
          {config.officeAddress && (
            <p className="officer-contact-line" style={{ color: c.textMuted }}>
              <strong style={{ color: c.text }}>Office: </strong>
              {config.officeAddress}
            </p>
          )}
        </div>
      </div>

      {config.sections.map(section => (
        <SectionBlock key={section.heading} heading={section.heading} c={c}>
          {section.paragraphs?.map(para => (
            <p key={para.slice(0, 40)} className="officer-section-para" style={{ color: c.textMuted }}>
              {para}
            </p>
          ))}
          {section.items && section.items.length > 0 && (
            <ul className="about-bullet-list" style={{ color: c.textMuted }}>
              {section.items.map(item => <li key={item}>{item}</li>)}
            </ul>
          )}
        </SectionBlock>
      ))}

      {config.documents && config.documents.length > 0 && (
        <section className="acad-scraped-section">
          <h2 className="acad-page-h2">Documents & Downloads</h2>
          <div className="acad-doc-grid">
            {config.documents.map(doc => (
              <a
                key={doc.url + doc.title}
                href={doc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="acad-doc-card"
                style={{ background: c.surface, border: `1px solid ${c.border}` }}
              >
                <span className="acad-doc-icon" aria-hidden>PDF</span>
                <span className="acad-doc-body">
                  <span className="acad-doc-title" style={{ color: c.text }}>{doc.title}</span>
                  {(doc.date || doc.size) && (
                    <span className="acad-doc-meta" style={{ color: c.textMuted }}>
                      {[doc.date, doc.size].filter(Boolean).join(' · ')}
                    </span>
                  )}
                </span>
                <span className="acad-doc-arrow" style={{ color: c.accent }}>↓</span>
              </a>
            ))}
          </div>
        </section>
      )}

      <p className="acad-scraped-source" style={{ color: c.textMuted }}>
        Source:{' '}
        <a href={config.sourceUrl} target="_blank" rel="noopener noreferrer" style={{ color: c.accent }}>
          {config.sourceLabel}
        </a>
      </p>
    </SectionPageLayout>
  );
}
