import { useState } from 'react';
import { useDarkMode } from '../context/DarkModeContext';
import {
  TENDERS_INTRO,
  BIDDER_GUIDELINES,
  OFFICIAL_TENDERS_LIST,
  TENDERS_CONTACTS,
} from '../data/tendersContent';
import './Tenders.css';

export default function Tenders() {
  const { dark } = useDarkMode();
  const [selectedCampus, setSelectedCampus] = useState<string>('All');

  const c = dark
    ? {
        primary: '#0B141F',
        accent: '#E8203C',
        surface: '#112030',
        surface2: '#18293c',
        bg: '#0B141F',
        text: '#C0D4EE',
        textMuted: 'rgba(192,212,238,0.70)',
        border: 'rgba(192,212,238,0.18)',
        tagBg: 'rgba(232, 32, 60, 0.15)',
        tagColor: '#FF6B81',
        cardBadgeBg: 'rgba(30, 58, 138, 0.4)',
        cardBadgeColor: '#93C5FD',
      }
    : {
        primary: '#0A2744',
        accent: '#C8102E',
        surface: '#FFFFFF',
        surface2: '#F1F5F9',
        bg: '#F8FAFC',
        text: '#18243A',
        textMuted: '#475569',
        border: '#E2E8F0',
        tagBg: 'rgba(200, 16, 46, 0.08)',
        tagColor: '#C8102E',
        cardBadgeBg: '#EEF2FF',
        cardBadgeColor: '#1E40AF',
      };

  const campuses = ['All', 'Central Office', 'Nuzvid', 'RK Valley', 'Ongole', 'Srikakulam'];

  const filteredTenders =
    selectedCampus === 'All'
      ? OFFICIAL_TENDERS_LIST
      : OFFICIAL_TENDERS_LIST.filter((t) => t.campus === selectedCampus);

  return (
    <main className="tenders-page" style={{ background: c.bg, color: c.text }}>
      <div className="tenders-wrap">
        {/* ── 1. Introduction & Guidelines Note ── */}
        <section
          className="tenders-intro-card"
          style={{ background: c.surface, border: `1px solid ${c.border}` }}
        >
          <span className="tenders-section-kicker" style={{ color: c.accent }}>
            Institutional Procurement
          </span>
          <h2 className="tenders-intro-title" style={{ color: c.text }}>
            Tenders & Notice Inviting Quotations (NIQ)
          </h2>
          <p className="tenders-intro-lead" style={{ color: c.text }}>
            {TENDERS_INTRO.lead}
          </p>
          <p className="tenders-intro-lead" style={{ color: c.textMuted }}>
            {TENDERS_INTRO.eprocurementNote}
          </p>
        </section>

        {/* ── 2. Bidder Guidelines ── */}
        <section className="tenders-section">
          <div className="tenders-section-header">
            <span className="tenders-section-kicker" style={{ color: c.accent }}>
              Procurement Process
            </span>
            <h2 className="tenders-h2" style={{ color: c.text }}>
              Bidding Guidelines & Terms
            </h2>
            <p className="tenders-section-sub" style={{ color: c.textMuted }}>
              Key statutory procedures and compliance requirements for tender submissions.
            </p>
          </div>

          <div className="tenders-guidelines-grid">
            {BIDDER_GUIDELINES.map((guide) => (
              <article
                key={guide.title}
                className="tenders-guide-card"
                style={{ background: c.surface, border: `1px solid ${c.border}` }}
              >
                <span
                  className="tenders-card-badge"
                  style={{ background: c.cardBadgeBg, color: c.cardBadgeColor }}
                >
                  {guide.tagline}
                </span>
                <h3 className="tenders-card-title" style={{ color: c.text }}>
                  {guide.title}
                </h3>
                <p className="tenders-card-desc" style={{ color: c.textMuted }}>
                  {guide.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* ── 3. Tender Notifications Archive Table ── */}
        <section className="tenders-section">
          <div className="tenders-section-header">
            <span className="tenders-section-kicker" style={{ color: c.accent }}>
              Notifications & Records
            </span>
            <h2 className="tenders-h2" style={{ color: c.text }}>
              Tender Notifications & Archive
            </h2>
            <p className="tenders-section-sub" style={{ color: c.textMuted }}>
              Official procurement and quotation notices issued across RGUKT campuses.
            </p>
          </div>

          {/* Campus Filter Tabs */}
          <div className="tenders-category-tabs">
            {campuses.map((campus) => (
              <button
                key={campus}
                onClick={() => setSelectedCampus(campus)}
                className={`tenders-tab-btn ${selectedCampus === campus ? 'active' : ''}`}
                style={{
                  background: selectedCampus === campus ? c.accent : c.surface,
                  color: selectedCampus === campus ? '#FFFFFF' : c.text,
                  border: `1px solid ${c.border}`,
                }}
              >
                {campus}
              </button>
            ))}
          </div>

          <div className="tenders-table-wrap" style={{ background: c.surface, border: `1px solid ${c.border}` }}>
            <table className="tenders-table">
              <thead>
                <tr style={{ borderBottom: `2px solid ${c.border}` }}>
                  <th style={{ color: c.text }}>Reference / Tender No</th>
                  <th style={{ color: c.text }}>Description</th>
                  <th style={{ color: c.text }}>Campus</th>
                  <th style={{ color: c.text }}>Posted Date</th>
                  <th style={{ color: c.text }}>Closing Date</th>
                  <th style={{ color: c.text }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredTenders.map((tender) => (
                  <tr key={tender.id} style={{ borderBottom: `1px solid ${c.border}` }}>
                    <td style={{ color: c.accent, fontWeight: 600 }}>{tender.referenceNo}</td>
                    <td style={{ color: c.text }}>
                      <strong>{tender.title}</strong>
                      <span className="tenders-table-category" style={{ color: c.textMuted }}>
                        {tender.category}
                      </span>
                    </td>
                    <td style={{ color: c.textMuted }}>{tender.campus}</td>
                    <td style={{ color: c.textMuted }}>{tender.postedDate}</td>
                    <td style={{ color: c.textMuted }}>{tender.closingDate}</td>
                    <td>
                      <span
                        className="tenders-status-badge"
                        style={{ background: c.surface2, color: c.textMuted, border: `1px solid ${c.border}` }}
                      >
                        {tender.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── 4. Contact for Queries ── */}
        <section className="tenders-section">
          <div className="tenders-section-header">
            <h2 className="tenders-h2" style={{ color: c.text }}>
              Contact for Queries
            </h2>
          </div>
          <div className="tenders-queries-grid">
            {TENDERS_CONTACTS.map((contact, i) => (
              <div
                key={i}
                className="tenders-query-card"
                style={{ background: c.surface, border: `1px solid ${c.border}` }}
              >
                <strong className="tenders-query-name" style={{ color: c.text }}>
                  {contact.name}
                </strong>
                {contact.role && (
                  <p className="tenders-query-role" style={{ color: c.textMuted }}>
                    {contact.role}
                  </p>
                )}
                {contact.email && (
                  <p className="tenders-query-email" style={{ margin: '6px 0 0' }}>
                    <a href={`mailto:${contact.email}`} style={{ color: c.accent, fontWeight: 600 }}>
                      {contact.email}
                    </a>
                  </p>
                )}
                {contact.note && (
                  <p className="tenders-query-note" style={{ color: c.textMuted, margin: '4px 0 0', fontSize: 13 }}>
                    {contact.note}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── 5. Source Reference ── */}
        <p className="tenders-source-ref" style={{ color: c.textMuted }}>
          Official Reference:{' '}
          <a
            href={TENDERS_INTRO.rguktUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: c.accent }}
          >
            rgukt.in — Tenders
          </a>
        </p>
      </div>
    </main>
  );
}
