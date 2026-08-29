import type { ReactNode } from 'react';
import { useSectionTheme } from './SectionPageLayout';
import { IconEducation, IconTech } from './AboutIcons';
import './AcademicsScrapedPage.css';
import './AcademicsContentPage.css';

export type ContentDoc = {
  title: string;
  url: string;
  size?: string;
  date?: string;
};

export type ContentStat = {
  value: string;
  label: string;
};

function isExternal(url: string) {
  return url.startsWith('http://') || url.startsWith('https://');
}

export function DocCard({
  doc,
}: {
  doc: ContentDoc;
}) {
  const c = useSectionTheme();
  const external = isExternal(doc.url);

  return (
    <a
      href={doc.url}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      download={external ? undefined : true}
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
      <span className="acad-doc-arrow" style={{ color: c.accent }}>{external ? '↗' : '↓'}</span>
    </a>
  );
}

export function DocGrid({ docs }: { docs: ContentDoc[] }) {
  if (docs.length === 0) return null;
  return (
    <div className="acad-doc-grid">
      {docs.map(doc => (
        <DocCard key={doc.url + doc.title} doc={doc} />
      ))}
    </div>
  );
}

export function StatsGrid({ stats }: { stats: ContentStat[] }) {
  const c = useSectionTheme();
  if (stats.length === 0) return null;

  return (
    <div className="acad-content-stats">
      {stats.map(stat => (
        <div
          key={stat.label}
          className="acad-content-stat"
          style={{ background: c.surface, border: `1px solid ${c.border}` }}
        >
          <div className="acad-content-stat-value" style={{ color: c.accent }}>{stat.value}</div>
          <div className="acad-content-stat-label" style={{ color: c.textMuted }}>{stat.label}</div>
        </div>
      ))}
    </div>
  );
}

export function ContentSection({
  heading,
  icon,
  children,
}: {
  heading: string;
  icon?: ReactNode;
  children: ReactNode;
}) {
  const c = useSectionTheme();

  return (
    <section className="acad-content-section">
      <div className="acad-content-section-head">
        <span
          className="acad-content-section-icon"
          style={{ background: `${c.accent}14`, color: c.accent }}
        >
          {icon ?? <IconEducation color={c.accent} />}
        </span>
        <h2 className="acad-content-section-title" style={{ color: c.text }}>{heading}</h2>
      </div>
      {children}
    </section>
  );
}

export function SourceLink({ url, label }: { url: string; label: string }) {
  const c = useSectionTheme();
  return (
    <p className="acad-content-source" style={{ color: c.textMuted }}>
      Source:{' '}
      <a href={url} target="_blank" rel="noopener noreferrer" style={{ color: c.accent }}>
        {label}
      </a>
    </p>
  );
}

export function CalendarTable({
  rows,
}: {
  rows: { period: string; start: string; end: string }[];
}) {
  const c = useSectionTheme();

  return (
    <div className="acad-calendar-table-wrap" style={{ borderColor: c.border }}>
      <table className="acad-calendar-table">
        <thead>
          <tr>
            <th style={{ color: c.textMuted }}>Period</th>
            <th style={{ color: c.textMuted }}>Start</th>
            <th style={{ color: c.textMuted }}>End</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(row => (
            <tr key={row.period}>
              <td style={{ color: c.text, fontWeight: 600 }}>{row.period}</td>
              <td style={{ color: c.textMuted }}>{row.start}</td>
              <td style={{ color: c.textMuted }}>{row.end}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function BranchGrid({
  branches,
}: {
  branches: { code: string; name: string; seats: number }[];
}) {
  const c = useSectionTheme();

  return (
    <div className="acad-branch-grid">
      {branches.map(branch => (
        <div
          key={branch.code}
          className="acad-branch-card"
          style={{ background: c.surface, border: `1px solid ${c.border}` }}
        >
          <div className="acad-branch-code" style={{ color: c.accent }}>{branch.code}</div>
          <div className="acad-branch-name" style={{ color: c.text }}>{branch.name}</div>
          <div className="acad-branch-seats" style={{ color: c.textMuted }}>{branch.seats} seats per campus</div>
        </div>
      ))}
    </div>
  );
}

export function ScholarshipGrid({
  scholarships,
}: {
  scholarships: { name: string; desc: string }[];
}) {
  const c = useSectionTheme();

  return (
    <div className="acad-scholarship-grid">
      {scholarships.map(s => (
        <article
          key={s.name}
          className="acad-scholarship-card"
          style={{ background: c.surface, border: `1px solid ${c.border}` }}
        >
          <div className="acad-scholarship-name" style={{ color: c.text }}>{s.name}</div>
          <p className="acad-scholarship-desc" style={{ color: c.textMuted }}>{s.desc}</p>
        </article>
      ))}
    </div>
  );
}

export function PortalGrid({
  portals,
}: {
  portals: { label: string; href: string }[];
}) {
  const c = useSectionTheme();

  return (
    <div className="acad-portal-grid">
      {portals.map(portal => (
        <a
          key={portal.href}
          href={portal.href}
          target="_blank"
          rel="noopener noreferrer"
          className="acad-portal-card"
          style={{ background: c.surface, border: `1px solid ${c.border}`, color: c.accent }}
        >
          {portal.label}
          <span aria-hidden>↗</span>
        </a>
      ))}
    </div>
  );
}

export function ServiceList({ items }: { items: string[] }) {
  const c = useSectionTheme();
  return (
    <ul className="acad-service-list" style={{ color: c.textMuted }}>
      {items.map(item => <li key={item}>{item}</li>)}
    </ul>
  );
}

export { IconTech };
