import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { BlockIcon } from './Icons';
import { useCountUp, useReveal } from './useReveal';
import type { SectionBlock } from '../../data/sectionPage';
import './Blocks.css';

/* ── shared shell ─────────────────────────────────────────── */

function Reveal({
  children,
  className = '',
  delay = 0,
  as = 'div',
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: 'div' | 'section';
}) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  const Tag = as;
  return (
    <Tag
      ref={ref as never}
      className={`ac-reveal ${shown ? 'is-in' : ''} ${className}`}
      style={{ '--ac-delay': `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}

function BlockHead({ heading, caption }: { heading?: string; caption?: string }) {
  if (!heading && !caption) return null;
  return (
    <header className="ac-block-head">
      {heading && (
        <h2 className="ac-block-title">
          <span className="ac-block-rule" aria-hidden />
          {heading}
        </h2>
      )}
      {caption && <p className="ac-block-caption">{caption}</p>}
    </header>
  );
}

/* ── individual blocks ────────────────────────────────────── */

function LeadBlock({ text }: { text: string }) {
  return (
    <Reveal className="ac-lead">
      <p>{text}</p>
    </Reveal>
  );
}

function StatValue({ value, active }: { value: string; active: boolean }) {
  return <span className="ac-stat-value">{useCountUp(value, active)}</span>;
}

function StatsBlock({ items }: { items: { value: string; label: string; sub?: string }[] }) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`ac-stats ac-reveal ${shown ? 'is-in' : ''}`}>
      {items.map((s, i) => (
        <div key={s.label} className="ac-stat" style={{ '--ac-delay': `${i * 70}ms` } as React.CSSProperties}>
          <StatValue value={s.value} active={shown} />
          <span className="ac-stat-label">{s.label}</span>
          {s.sub && <span className="ac-stat-sub">{s.sub}</span>}
        </div>
      ))}
    </div>
  );
}

function CardsBlock({
  heading,
  caption,
  items,
  cols = 2,
}: {
  heading?: string;
  caption?: string;
  cols?: 2 | 3;
  items: { icon: Parameters<typeof BlockIcon>[0]['name']; title: string; body: string; tag?: string }[];
}) {
  return (
    <section className="ac-block">
      <BlockHead heading={heading} caption={caption} />
      <div className={`ac-cards ac-cards-${cols}`}>
        {items.map((card, i) => (
          <Reveal key={card.title} className="ac-card" delay={i * 60}>
            <span className="ac-card-icon" aria-hidden>
              <BlockIcon name={card.icon} />
            </span>
            <div className="ac-card-body">
              {card.tag && <span className="ac-card-tag">{card.tag}</span>}
              <h3 className="ac-card-title">{card.title}</h3>
              {card.body && <p className="ac-card-text">{card.body}</p>}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function FlowBlock({
  heading,
  caption,
  steps,
  variant = 'horizontal',
}: {
  heading?: string;
  caption?: string;
  variant?: 'horizontal' | 'vertical';
  steps: { label: string; sub?: string; detail?: string }[];
}) {
  return (
    <section className="ac-block">
      <BlockHead heading={heading} caption={caption} />
      <div className={`ac-flow ac-flow-${variant}`}>
        {steps.map((step, i) => (
          <Reveal key={step.label} className="ac-flow-item" delay={i * 110}>
            <div className="ac-flow-node">
              <span className="ac-flow-index">{i + 1}</span>
              <div className="ac-flow-copy">
                <strong className="ac-flow-label">{step.label}</strong>
                {step.sub && <span className="ac-flow-sub">{step.sub}</span>}
                {step.detail && <p className="ac-flow-detail">{step.detail}</p>}
              </div>
            </div>
            {i < steps.length - 1 && <span className="ac-flow-arrow" aria-hidden />}
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function RatioBlock({
  heading,
  caption,
  parts,
}: {
  heading?: string;
  caption?: string;
  parts: { label: string; value: number; note?: string }[];
}) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  const total = parts.reduce((a, p) => a + p.value, 0) || 1;
  return (
    <section className="ac-block">
      <BlockHead heading={heading} caption={caption} />
      <div ref={ref} className={`ac-ratio ac-reveal ${shown ? 'is-in' : ''}`}>
        <div className="ac-ratio-bar">
          {parts.map((p, i) => (
            <span
              key={p.label}
              className={`ac-ratio-seg ac-ratio-seg-${i}`}
              style={{ '--ac-w': shown ? `${(p.value / total) * 100}%` : '0%' } as React.CSSProperties}
            >
              <em>{p.value}</em>
            </span>
          ))}
        </div>
        <ul className="ac-ratio-legend">
          {parts.map((p, i) => (
            <li key={p.label}>
              <span className={`ac-ratio-dot ac-ratio-dot-${i}`} aria-hidden />
              <strong>{p.label}</strong>
              {p.note && <span>{p.note}</span>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function BranchesBlock({
  heading,
  caption,
  items,
}: {
  heading?: string;
  caption?: string;
  items: { code: string; name: string }[];
}) {
  return (
    <section className="ac-block">
      <BlockHead heading={heading} caption={caption} />
      <div className="ac-branches">
        {items.map((b, i) => (
          <Reveal key={b.code} className="ac-branch" delay={i * 55}>
            <span className="ac-branch-code">{b.code}</span>
            <span className="ac-branch-name">{b.name}</span>
            <span className="ac-branch-glow" aria-hidden />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function AccordionBlock({
  heading,
  caption,
  items,
  openFirst = true,
}: {
  heading?: string;
  caption?: string;
  openFirst?: boolean;
  items: { title: string; body: string[]; tag?: string }[];
}) {
  const [open, setOpen] = useState<number | null>(openFirst ? 0 : null);
  return (
    <section className="ac-block">
      <BlockHead heading={heading} caption={caption} />
      <div className="ac-accordion">
        {items.map((item, i) => {
          const isOpen = open === i;
          return (
            <Reveal key={item.title} className={`ac-acc-item ${isOpen ? 'is-open' : ''}`} delay={i * 50}>
              <button
                type="button"
                className="ac-acc-head"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                <span className="ac-acc-title">
                  {item.tag && <span className="ac-acc-tag">{item.tag}</span>}
                  {item.title}
                </span>
                <span className="ac-acc-chev" aria-hidden />
              </button>
              <div className="ac-acc-panel" hidden={!isOpen}>
                {item.body.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function TimelineBlock({
  heading,
  caption,
  items,
}: {
  heading?: string;
  caption?: string;
  items: { time: string; title: string; detail?: string }[];
}) {
  return (
    <section className="ac-block">
      <BlockHead heading={heading} caption={caption} />
      <ol className="ac-timeline">
        {items.map((item, i) => (
          <Reveal key={item.time + item.title} className="ac-tl-item" delay={i * 80}>
            <span className="ac-tl-dot" aria-hidden />
            <span className="ac-tl-time">{item.time}</span>
            <div className="ac-tl-copy">
              <strong>{item.title}</strong>
              {item.detail && <p>{item.detail}</p>}
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}

function ChipsBlock({
  heading,
  caption,
  items,
}: {
  heading?: string;
  caption?: string;
  items: { label: string; value?: string }[];
}) {
  return (
    <section className="ac-block">
      <BlockHead heading={heading} caption={caption} />
      <div className="ac-chips">
        {items.map((chip, i) => (
          <Reveal key={chip.label} className="ac-chip" delay={i * 45}>
            {chip.value && <strong>{chip.value}</strong>}
            <span>{chip.label}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function CalloutBlock({
  tone = 'accent',
  title,
  body,
  actions,
}: {
  tone?: 'accent' | 'info';
  title: string;
  body?: string;
  actions?: { label: string; to?: string; href?: string }[];
}) {
  return (
    <Reveal className={`ac-callout ac-callout-${tone}`}>
      <div className="ac-callout-copy">
        <strong>{title}</strong>
        {body && <p>{body}</p>}
      </div>
      {actions && actions.length > 0 && (
        <div className="ac-callout-actions">
          {actions.map(a =>
            a.to ? (
              <Link key={a.label} to={a.to} className="ac-btn">
                {a.label}<span aria-hidden>→</span>
              </Link>
            ) : (
              <a key={a.label} href={a.href} target="_blank" rel="noopener noreferrer" className="ac-btn">
                {a.label}<span aria-hidden>↗</span>
              </a>
            ),
          )}
        </div>
      )}
    </Reveal>
  );
}

function ProseBlock({
  heading,
  caption,
  paragraphs,
}: {
  heading?: string;
  caption?: string;
  paragraphs: string[];
}) {
  return (
    <section className="ac-block">
      <BlockHead heading={heading} caption={caption} />
      <div className="ac-prose">
        {paragraphs.map((p, i) => (
          <Reveal key={i} delay={i * 50}>
            <p>{p}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function isExternal(url: string) {
  return url.startsWith('http://') || url.startsWith('https://');
}

function DocList({ items }: { items: { title: string; url: string; size?: string; date?: string }[] }) {
  return (
    <div className="ac-docs">
      {items.map((doc, i) => {
        const ext = isExternal(doc.url);
        return (
          <Reveal key={doc.url + doc.title} delay={Math.min(i, 8) * 45}>
            <a
              href={doc.url}
              className="ac-doc"
              target={ext ? '_blank' : undefined}
              rel={ext ? 'noopener noreferrer' : undefined}
              download={ext ? undefined : true}
            >
              <span className="ac-doc-badge" aria-hidden>PDF</span>
              <span className="ac-doc-copy">
                <span className="ac-doc-title">{doc.title}</span>
                {(doc.date || doc.size) && (
                  <span className="ac-doc-meta">{[doc.date, doc.size].filter(Boolean).join(' · ')}</span>
                )}
              </span>
              <span className="ac-doc-arrow" aria-hidden>{ext ? '↗' : '↓'}</span>
            </a>
          </Reveal>
        );
      })}
    </div>
  );
}

function DocsBlock({
  heading,
  caption,
  items,
}: {
  heading?: string;
  caption?: string;
  items: { title: string; url: string; size?: string; date?: string }[];
}) {
  if (items.length === 0) return null;
  return (
    <section className="ac-block">
      <BlockHead heading={heading} caption={caption} />
      <DocList items={items} />
    </section>
  );
}

function DocFilterBlock({
  heading,
  caption,
  filters,
  items,
}: {
  heading?: string;
  caption?: string;
  filters: string[];
  items: { title: string; url: string; size?: string; date?: string; group: string }[];
}) {
  const [active, setActive] = useState(filters[0]);
  const shown = useMemo(() => items.filter(i => i.group === active), [items, active]);
  return (
    <section className="ac-block">
      <BlockHead heading={heading} caption={caption} />
      <div className="ac-tabs" role="tablist">
        {filters.map(f => (
          <button
            key={f}
            type="button"
            role="tab"
            aria-selected={f === active}
            className={`ac-tab ${f === active ? 'is-active' : ''}`}
            onClick={() => setActive(f)}
          >
            {f}
          </button>
        ))}
      </div>
      <div key={active} className="ac-tabpanel">
        <DocList items={shown} />
      </div>
    </section>
  );
}

function TableBlock({
  heading,
  caption,
  columns,
  rows,
}: {
  heading?: string;
  caption?: string;
  columns: string[];
  rows: string[][];
}) {
  return (
    <section className="ac-block">
      <BlockHead heading={heading} caption={caption} />
      <Reveal className="ac-table-wrap">
        <table className="ac-table">
          <thead>
            <tr>{columns.map(col => <th key={col}>{col}</th>)}</tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} style={{ '--ac-delay': `${i * 45}ms` } as React.CSSProperties}>
                {row.map((cell, j) => <td key={j}>{cell}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </Reveal>
    </section>
  );
}

function LinksBlock({
  heading,
  caption,
  items,
}: {
  heading?: string;
  caption?: string;
  items: { label: string; href?: string; to?: string; sub?: string }[];
}) {
  return (
    <section className="ac-block">
      <BlockHead heading={heading} caption={caption} />
      <div className="ac-links">
        {items.map((item, i) => {
          const inner = (
            <>
              <span className="ac-link-copy">
                <strong>{item.label}</strong>
                {item.sub && <span>{item.sub}</span>}
              </span>
              <span className="ac-link-arrow" aria-hidden>{item.to ? '→' : '↗'}</span>
            </>
          );
          return (
            <Reveal key={item.label} delay={i * 45}>
              {item.to ? (
                <Link to={item.to} className="ac-link-card">{inner}</Link>
              ) : (
                <a href={item.href} target="_blank" rel="noopener noreferrer" className="ac-link-card">{inner}</a>
              )}
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function MatrixBlock({
  heading,
  caption,
  groups,
}: {
  heading?: string;
  caption?: string;
  groups: { title: string; icon?: Parameters<typeof BlockIcon>[0]['name']; entries: { campus: string; body: string }[] }[];
}) {
  return (
    <section className="ac-block">
      <BlockHead heading={heading} caption={caption} />
      <div className="ac-matrix">
        {groups.map((g, i) => (
          <Reveal key={g.title} className="ac-matrix-group" delay={i * 70}>
            <div className="ac-matrix-head">
              <span className="ac-matrix-icon" aria-hidden><BlockIcon name={g.icon ?? 'flask'} /></span>
              <h3>{g.title}</h3>
            </div>
            <ul className="ac-matrix-list">
              {g.entries.map(e => (
                <li key={e.campus}>
                  <span className="ac-matrix-campus">{e.campus}</span>
                  <p>{e.body}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function BannerBlock({
  status,
  title,
  note,
  action,
}: {
  status: 'open' | 'closed' | 'info';
  title: string;
  note?: string;
  action?: { label: string; href?: string; to?: string };
}) {
  return (
    <Reveal className={`ac-banner ac-banner-${status}`}>
      <span className="ac-banner-pill">
        <span className="ac-banner-dot" aria-hidden />
        {status === 'open' ? 'Open' : status === 'closed' ? 'Closed' : 'Notice'}
      </span>
      <h2 className="ac-banner-title">{title}</h2>
      {note && <p className="ac-banner-note">{note}</p>}
      {action &&
        (action.to ? (
          <Link to={action.to} className="ac-btn ac-banner-btn">
            {action.label}<span aria-hidden>→</span>
          </Link>
        ) : (
          <a href={action.href} target="_blank" rel="noopener noreferrer" className="ac-btn ac-banner-btn">
            {action.label}<span aria-hidden>↗</span>
          </a>
        ))}
    </Reveal>
  );
}

function HelplineBlock({
  heading,
  caption,
  panels,
}: {
  heading?: string;
  caption?: string;
  panels: {
    title: string;
    subtitle?: string;
    emailIntro?: string;
    email?: string;
    fieldsIntro?: string;
    fields?: { label: string; placeholder: string }[];
    phonesIntro?: string;
    phones?: string[];
    timings?: string;
  }[];
}) {
  return (
    <section className="ac-block">
      <BlockHead heading={heading} caption={caption} />
      <div className="ac-helplines">
        {panels.map((p, i) => (
          <Reveal key={p.title} className="ac-helpline" delay={i * 90}>
            <header className="ac-helpline-head">
              <span className="ac-helpline-icon" aria-hidden><BlockIcon name={i === 0 ? 'users' : 'rupee'} /></span>
              <div>
                <h3>{p.title}</h3>
                {p.subtitle && <p>{p.subtitle}</p>}
              </div>
            </header>

            {p.email && (
              <a className="ac-helpline-mail" href={`mailto:${p.email}`}>
                <span className="ac-helpline-mail-label">{p.emailIntro ?? 'Write to'}</span>
                <strong>{p.email}</strong>
              </a>
            )}

            {p.fields && p.fields.length > 0 && (
              <>
                {p.fieldsIntro && <p className="ac-helpline-sub">{p.fieldsIntro}</p>}
                <ul className="ac-helpline-fields">
                  {p.fields.map(f => (
                    <li key={f.label}>
                      <strong>{f.label}</strong>
                      <span>{f.placeholder}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}

            {p.phones && p.phones.length > 0 && (
              <>
                {p.phonesIntro && <p className="ac-helpline-sub">{p.phonesIntro}</p>}
                <div className="ac-helpline-phones">
                  {p.phones.map(ph => (
                    <a key={ph} href={`tel:${ph.replace(/\s+/g, '')}`} className="ac-helpline-phone">
                      <span aria-hidden>☎</span>{ph}
                    </a>
                  ))}
                </div>
              </>
            )}

            {p.timings && (
              <p className="ac-helpline-timings">
                <span aria-hidden>🕘</span>{p.timings}
              </p>
            )}
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ── dispatcher ───────────────────────────────────────────── */

export default function BlockRenderer({ block }: { block: SectionBlock }) {
  switch (block.kind) {
    case 'lead':       return <LeadBlock {...block} />;
    case 'stats':      return <StatsBlock {...block} />;
    case 'cards':      return <CardsBlock {...block} />;
    case 'flow':       return <FlowBlock {...block} />;
    case 'ratio':      return <RatioBlock {...block} />;
    case 'branches':   return <BranchesBlock {...block} />;
    case 'accordion':  return <AccordionBlock {...block} />;
    case 'timeline':   return <TimelineBlock {...block} />;
    case 'chips':      return <ChipsBlock {...block} />;
    case 'callout':    return <CalloutBlock {...block} />;
    case 'prose':      return <ProseBlock {...block} />;
    case 'docs':       return <DocsBlock {...block} />;
    case 'docFilter':  return <DocFilterBlock {...block} />;
    case 'table':      return <TableBlock {...block} />;
    case 'links':      return <LinksBlock {...block} />;
    case 'matrix':     return <MatrixBlock {...block} />;
    case 'banner':     return <BannerBlock {...block} />;
    case 'helpline':   return <HelplineBlock {...block} />;
    default:           return null;
  }
}
