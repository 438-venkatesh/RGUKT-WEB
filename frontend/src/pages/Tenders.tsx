import { useState, useMemo } from 'react';
import { useDarkMode } from '../context/DarkModeContext';
import {
  TENDERS_INTRO,
  BIDDER_GUIDELINES,
  OFFICIAL_TENDERS_LIST,
  CAMPUS_PROCUREMENT_CONTACTS,
} from '../data/tendersContent';
import type { TenderItem } from '../data/tendersContent';
import './Tenders.css';

type CampusFilter = 'All' | 'Central Admin' | 'Nuzvid' | 'RK Valley' | 'Ongole' | 'Srikakulam';
type StatusFilter = 'All' | 'Open' | 'In Progress' | 'Archived';

const CAMPUS_FILTERS: CampusFilter[] = [
  'All',
  'Central Admin',
  'Nuzvid',
  'RK Valley',
  'Ongole',
  'Srikakulam',
];

const STATUS_FILTERS: StatusFilter[] = ['All', 'Open', 'In Progress', 'Archived'];

export default function Tenders() {
  const { dark } = useDarkMode();
  const [selectedCampus, setSelectedCampus] = useState<CampusFilter>('All');
  const [selectedStatus, setSelectedStatus] = useState<StatusFilter>('All');
  const [searchQuery, setSearchQuery] = useState('');

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
        bannerBg: 'rgba(30, 58, 138, 0.25)',
        statusOpen: '#34D399',
        statusProgress: '#FBBF24',
        statusArchived: '#94A3B8',
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
        bannerBg: '#EEF2FF',
        statusOpen: '#059669',
        statusProgress: '#D97706',
        statusArchived: '#64748B',
      };

  const filteredTenders: TenderItem[] = useMemo(() => {
    return OFFICIAL_TENDERS_LIST.filter((t) => {
      const matchCampus = selectedCampus === 'All' || t.campus === selectedCampus;
      const matchStatus = selectedStatus === 'All' || t.status === selectedStatus;
      const matchSearch =
        searchQuery.trim() === '' ||
        t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.referenceNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCampus && matchStatus && matchSearch;
    });
  }, [selectedCampus, selectedStatus, searchQuery]);

  const getStatusColor = (status: TenderItem['status']) => {
    switch (status) {
      case 'Open':
        return c.statusOpen;
      case 'In Progress':
        return c.statusProgress;
      case 'Archived':
        return c.statusArchived;
    }
  };

  return (
    <main className="tenders-page" style={{ background: c.bg, color: c.text }}>
      <div className="tenders-wrap">
        {/* ── 1. Two-Line Hero Banner ── */}
        <div className="tenders-hero" style={{ border: `1px solid ${c.border}` }}>
          <img
            src="/gallery/gallery-2.jpg"
            alt="RGUKT Institutional Procurement & Tenders"
            className="tenders-hero-img"
          />
          <div className="tenders-hero-overlay" />
          <div className="tenders-hero-text">
            <span className="tenders-hero-eyebrow">Procurement, Contracts & Notices</span>
            <h1 className="tenders-hero-title">
              Tenders
              <br />
              @RGUKT-AP
            </h1>
          </div>
        </div>

        {/* ── 2. Introduction & e-Procurement Portal Gateway ── */}
        <section
          className="tenders-intro-card"
          style={{ background: c.surface, border: `1px solid ${c.border}` }}
        >
          <p className="tenders-intro-lead" style={{ color: c.text }}>
            {TENDERS_INTRO.lead}
          </p>
          <div
            className="tenders-eproc-banner"
            style={{
              background: c.bannerBg,
              borderColor: c.accent,
              color: c.text,
            }}
          >
            <strong>e-Procurement & Statutory Compliance:</strong> {TENDERS_INTRO.eprocurementNote}
            <div className="tenders-eproc-links">
              <a
                href="https://tender.apeprocurement.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="tenders-eproc-btn"
                style={{ background: c.primary, color: '#ffffff' }}
              >
                AP e-Procurement Portal ↗
              </a>
              <a
                href="https://gem.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="tenders-eproc-btn"
                style={{ background: c.accent, color: '#ffffff' }}
              >
                Government e-Marketplace (GeM) ↗
              </a>
            </div>
          </div>
        </section>

        {/* ── 3. Bidder Guidelines & Submission Compliance ── */}
        <section className="tenders-section">
          <div className="tenders-section-header">
            <h2 className="tenders-h2" style={{ color: c.text }}>
              Bidder Guidelines & Procurement Compliance
            </h2>
            <p className="tenders-section-sub" style={{ color: c.textMuted }}>
              Key instructions regarding digital certificates, two-cover evaluations, EMD payment rules, and corrigenda.
            </p>
          </div>

          <div className="tenders-guidelines-grid">
            {BIDDER_GUIDELINES.map((g, idx) => (
              <div
                key={idx}
                className="tenders-guideline-card"
                style={{ background: c.surface, border: `1px solid ${c.border}` }}
              >
                <span className="tenders-guideline-tagline" style={{ color: c.accent }}>
                  {g.tagline}
                </span>
                <h3 className="tenders-guideline-title" style={{ color: c.text }}>
                  {g.title}
                </h3>
                <p className="tenders-guideline-desc" style={{ color: c.textMuted }}>
                  {g.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 4. Interactive Tender & NIQ Database ── */}
        <section className="tenders-section">
          <div className="tenders-section-header">
            <h2 className="tenders-h2" style={{ color: c.text }}>
              Active Tenders & Notices Inviting Quotations (NIQ)
            </h2>
            <p className="tenders-section-sub" style={{ color: c.textMuted }}>
              Browse and filter tenders across Central Administration and all constituent campuses.
            </p>
          </div>

          {/* Filter Controls & Search */}
          <div className="tenders-controls">
            {/* Campus Filter */}
            <div className="tenders-filter-row">
              <span className="tenders-filter-label" style={{ color: c.textMuted }}>
                Campus:
              </span>
              <div className="tenders-filter-chips">
                {CAMPUS_FILTERS.map((camp) => {
                  const isActive = selectedCampus === camp;
                  return (
                    <button
                      key={camp}
                      className="tenders-chip"
                      onClick={() => setSelectedCampus(camp)}
                      style={{
                        border: `1px solid ${isActive ? c.accent : c.border}`,
                        background: isActive ? c.primary : c.surface,
                        color: isActive ? '#ffffff' : c.text,
                      }}
                    >
                      {camp === 'All' ? 'All Campuses' : camp}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Status Filter */}
            <div className="tenders-filter-row">
              <span className="tenders-filter-label" style={{ color: c.textMuted }}>
                Status:
              </span>
              <div className="tenders-filter-chips">
                {STATUS_FILTERS.map((stat) => {
                  const isActive = selectedStatus === stat;
                  return (
                    <button
                      key={stat}
                      className="tenders-chip"
                      onClick={() => setSelectedStatus(stat)}
                      style={{
                        border: `1px solid ${isActive ? c.accent : c.border}`,
                        background: isActive ? c.primary : c.surface,
                        color: isActive ? '#ffffff' : c.text,
                      }}
                    >
                      {stat === 'All' ? 'All Statuses' : stat}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Search Input */}
            <div className="tenders-search-wrap">
              <span className="tenders-search-icon" style={{ color: c.textMuted }}>
                🔍
              </span>
              <input
                type="text"
                placeholder="Search by tender title, reference no. or category..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="tenders-search-input"
                style={{
                  border: `1px solid ${c.border}`,
                  background: c.surface,
                  color: c.text,
                }}
              />
            </div>
          </div>

          {/* Tenders Table */}
          <div className="tenders-table-wrap" style={{ border: `1px solid ${c.border}` }}>
            <table className="tenders-table">
              <thead>
                <tr style={{ background: c.surface2 }}>
                  <th className="tenders-th" style={{ color: c.text }}>
                    Ref. No.
                  </th>
                  <th className="tenders-th" style={{ color: c.text }}>
                    Tender Description
                  </th>
                  <th className="tenders-th" style={{ color: c.text }}>
                    Campus
                  </th>
                  <th className="tenders-th" style={{ color: c.text }}>
                    Posted Date
                  </th>
                  <th className="tenders-th" style={{ color: c.text }}>
                    Closing Date
                  </th>
                  <th className="tenders-th" style={{ color: c.text }}>
                    Status
                  </th>
                  <th className="tenders-th" style={{ color: c.text, textAlign: 'right' }}>
                    Document
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredTenders.map((t, idx) => {
                  const rowBg = idx % 2 === 0 ? c.surface : c.bg;
                  const statColor = getStatusColor(t.status);
                  return (
                    <tr
                      key={t.id}
                      style={{
                        borderTop: `1px solid ${c.border}`,
                        background: rowBg,
                      }}
                    >
                      <td className="tenders-td tenders-ref-no" style={{ color: c.accent }}>
                        {t.referenceNo}
                      </td>
                      <td className="tenders-td">
                        <div className="tenders-item-title" style={{ color: c.text }}>
                          {t.title}
                        </div>
                        <div className="tenders-item-meta">
                          <span
                            className="tenders-cat-badge"
                            style={{ background: c.cardBadgeBg, color: c.cardBadgeColor }}
                          >
                            {t.category}
                          </span>
                          {t.isEProcurement && (
                            <span className="tenders-eproc-tag" style={{ color: c.accent }}>
                              ⚡ e-Procurement
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="tenders-td tenders-campus-cell" style={{ color: c.text }}>
                        {t.campus}
                      </td>
                      <td
                        className="tenders-td tenders-date-cell"
                        style={{ color: c.textMuted }}
                      >
                        {t.postedDate}
                      </td>
                      <td
                        className="tenders-td tenders-date-cell"
                        style={{ color: c.text, fontWeight: 600 }}
                      >
                        {t.closingDate}
                      </td>
                      <td className="tenders-td">
                        <span
                          className="tenders-status-badge"
                          style={{
                            color: statColor,
                            border: `1px solid ${statColor}`,
                            background: dark ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.7)',
                          }}
                        >
                          {t.status}
                        </span>
                      </td>
                      <td className="tenders-td tenders-action-cell">
                        {t.documentUrl ? (
                          <a
                            href={t.documentUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="tenders-doc-btn"
                            style={{ background: c.primary, color: '#ffffff' }}
                          >
                            {t.isEProcurement ? 'Portal ↗' : 'PDF ↗'}
                          </a>
                        ) : (
                          <span style={{ color: c.textMuted, fontSize: 12 }}>At Office</span>
                        )}
                      </td>
                    </tr>
                  );
                })}

                {filteredTenders.length === 0 && (
                  <tr>
                    <td colSpan={7} className="tenders-empty-row" style={{ color: c.textMuted }}>
                      No tenders or quotations match your selected campus, status, or search query.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── 5. Multi-Campus Procurement Contacts ── */}
        <section className="tenders-section">
          <div className="tenders-section-header">
            <h2 className="tenders-h2" style={{ color: c.text }}>
              Procurement & Purchase Desks Across Campuses
            </h2>
            <p className="tenders-section-sub" style={{ color: c.textMuted }}>
              Official contact information for vendor queries, submission verification, and departmental purchase inquiries.
            </p>
          </div>

          <div className="tenders-contacts-grid">
            {CAMPUS_PROCUREMENT_CONTACTS.map((desk, idx) => (
              <div
                key={idx}
                className="tenders-contact-card"
                style={{ background: c.surface, border: `1px solid ${c.border}` }}
              >
                <span
                  className="tenders-contact-badge"
                  style={{ background: c.cardBadgeBg, color: c.cardBadgeColor }}
                >
                  {desk.deskType}
                </span>
                <h3 className="tenders-contact-title" style={{ color: c.text }}>
                  {desk.campus}
                </h3>
                <p className="tenders-contact-office" style={{ color: c.textMuted }}>
                  {desk.office}
                </p>
                <a
                  href={`mailto:${desk.email}`}
                  className="tenders-contact-email"
                  style={{ color: c.accent }}
                >
                  Email: {desk.email}
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

