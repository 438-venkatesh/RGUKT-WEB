import { useState, useMemo } from 'react';
import { useDarkMode } from '../context/DarkModeContext';
import {
  CAREERS_INTRO,
  EMPLOYMENT_VERTICALS,
  SELECTION_LIFECYCLE,
  OFFICIAL_CAREERS_LIST,
  CAMPUS_CAREERS_CONTACTS,
} from '../data/careersContent';
import type { CareerOpening } from '../data/careersContent';
import './Careers.css';

type CampusFilter = 'All' | 'Central Admin' | 'Nuzvid' | 'RK Valley' | 'Ongole' | 'Srikakulam';
type CategoryFilter =
  | 'All'
  | 'Faculty (Regular)'
  | 'Guest & Contract Faculty'
  | 'Technical & Lab Staff'
  | 'Medical & Admin';
type StatusFilter = 'All' | 'Open' | 'In Progress' | 'Archived';

const CAMPUS_FILTERS: CampusFilter[] = [
  'All',
  'Central Admin',
  'Nuzvid',
  'RK Valley',
  'Ongole',
  'Srikakulam',
];

const CATEGORY_FILTERS: CategoryFilter[] = [
  'All',
  'Faculty (Regular)',
  'Guest & Contract Faculty',
  'Technical & Lab Staff',
  'Medical & Admin',
];

const STATUS_FILTERS: StatusFilter[] = ['All', 'Open', 'In Progress', 'Archived'];

export default function Careers() {
  const { dark } = useDarkMode();
  const [selectedCampus, setSelectedCampus] = useState<CampusFilter>('All');
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('All');
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
        pillBg: 'rgba(255, 255, 255, 0.08)',
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
        pillBg: '#F1F5F9',
        statusOpen: '#059669',
        statusProgress: '#D97706',
        statusArchived: '#64748B',
      };

  const filteredOpenings: CareerOpening[] = useMemo(() => {
    return OFFICIAL_CAREERS_LIST.filter((job) => {
      const matchCampus = selectedCampus === 'All' || job.campus === selectedCampus;
      const matchCategory = selectedCategory === 'All' || job.category === selectedCategory;
      const matchStatus = selectedStatus === 'All' || job.status === selectedStatus;
      const matchSearch =
        searchQuery.trim() === '' ||
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.advertisementNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.qualifications.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCampus && matchCategory && matchStatus && matchSearch;
    });
  }, [selectedCampus, selectedCategory, selectedStatus, searchQuery]);

  const getStatusColor = (status: CareerOpening['status']) => {
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
    <main className="careers-page" style={{ background: c.bg, color: c.text }}>
      <div className="careers-wrap">
        {/* ── 1. Two-Line Hero Banner ── */}
        <div className="careers-hero" style={{ border: `1px solid ${c.border}` }}>
          <img
            src="/research/che_workshop.jpg"
            alt="RGUKT Faculty & Academic Recruitment"
            className="careers-hero-img"
          />
          <div className="careers-hero-overlay" />
          <div className="careers-hero-text">
            <span className="careers-hero-eyebrow">Academic & Staff Opportunities</span>
            <h1 className="careers-hero-title">
              Careers
              <br />
              @RGUKT-AP
            </h1>
          </div>
        </div>

        {/* ── 2. Introduction & Academic Culture ── */}
        <section
          className="careers-intro-card"
          style={{ background: c.surface, border: `1px solid ${c.border}` }}
        >
          <p className="careers-intro-lead" style={{ color: c.text }}>
            {CAREERS_INTRO.lead}
          </p>
          <div
            className="careers-perks-banner"
            style={{
              background: c.bannerBg,
              borderColor: c.accent,
              color: c.text,
            }}
          >
            <strong>Academic Growth & Research Ecosystem:</strong> {CAREERS_INTRO.academicPerksNote}
          </div>
        </section>

        {/* ── 3. Core Employment Verticals (Pillars) ── */}
        <section className="careers-section">
          <div className="careers-section-header">
            <h2 className="careers-h2" style={{ color: c.text }}>
              Employment Verticals & Cadres
            </h2>
            <p className="careers-section-sub" style={{ color: c.textMuted }}>
              Structured career tracks spanning regular faculty, guest academicians, technical engineers, and campus residential officers.
            </p>
          </div>

          <div className="careers-verticals-grid">
            {EMPLOYMENT_VERTICALS.map((v, idx) => (
              <div
                key={idx}
                className="careers-vertical-card"
                style={{ background: c.surface, border: `1px solid ${c.border}` }}
              >
                <span className="careers-vertical-tagline" style={{ color: c.accent }}>
                  {v.tagline}
                </span>
                <h3 className="careers-vertical-title" style={{ color: c.text }}>
                  {v.title}
                </h3>
                <p className="careers-vertical-desc" style={{ color: c.textMuted }}>
                  {v.description}
                </p>

                <div className="careers-vertical-meta" style={{ borderColor: c.border }}>
                  <p style={{ color: c.text }}>
                    <strong>Eligibility:</strong> {v.eligibilitySummary}
                  </p>
                  <p style={{ color: c.textMuted }}>
                    <strong>Pay/Remuneration:</strong> {v.payScaleOrCompensation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 4. Step-by-Step Application & Selection Lifecycle ── */}
        <section className="careers-section">
          <div className="careers-section-header">
            <h2 className="careers-h2" style={{ color: c.text }}>
              5-Step Recruitment & Selection Lifecycle
            </h2>
            <p className="careers-section-sub" style={{ color: c.textMuted }}>
              A transparent, merit-based selection process strictly compliant with UGC, AICTE, and State Government statutory norms.
            </p>
          </div>

          <div className="careers-process-flow">
            {SELECTION_LIFECYCLE.map((step) => (
              <div
                key={step.stepNumber}
                className="careers-step-card"
                style={{ background: c.surface, border: `1px solid ${c.border}` }}
              >
                <div
                  className="careers-step-badge"
                  style={{ background: c.accent, color: '#ffffff' }}
                >
                  {step.stepNumber}
                </div>
                <h3 className="careers-step-title" style={{ color: c.text }}>
                  {step.title}
                </h3>
                <span className="careers-step-tagline" style={{ color: c.accent }}>
                  {step.tagline}
                </span>
                <p className="careers-step-desc" style={{ color: c.textMuted }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 5. Interactive Recruitment Notifications Database ── */}
        <section className="careers-section">
          <div className="careers-section-header">
            <h2 className="careers-h2" style={{ color: c.text }}>
              Active & Recent Recruitment Notifications
            </h2>
            <p className="careers-section-sub" style={{ color: c.textMuted }}>
              Explore employment opportunities across Central Administration, Nuzvid, RK Valley, Ongole, and Srikakulam campuses.
            </p>
          </div>

          {/* Filter Controls & Search */}
          <div className="careers-controls">
            {/* Campus Filter */}
            <div className="careers-filter-row">
              <span className="careers-filter-label" style={{ color: c.textMuted }}>
                Campus:
              </span>
              <div className="careers-filter-chips">
                {CAMPUS_FILTERS.map((camp) => {
                  const isActive = selectedCampus === camp;
                  return (
                    <button
                      key={camp}
                      className="careers-chip"
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

            {/* Category Filter */}
            <div className="careers-filter-row">
              <span className="careers-filter-label" style={{ color: c.textMuted }}>
                Category:
              </span>
              <div className="careers-filter-chips">
                {CATEGORY_FILTERS.map((cat) => {
                  const isActive = selectedCategory === cat;
                  return (
                    <button
                      key={cat}
                      className="careers-chip"
                      onClick={() => setSelectedCategory(cat)}
                      style={{
                        border: `1px solid ${isActive ? c.accent : c.border}`,
                        background: isActive ? c.primary : c.surface,
                        color: isActive ? '#ffffff' : c.text,
                      }}
                    >
                      {cat === 'All' ? 'All Categories' : cat}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Status Filter */}
            <div className="careers-filter-row">
              <span className="careers-filter-label" style={{ color: c.textMuted }}>
                Status:
              </span>
              <div className="careers-filter-chips">
                {STATUS_FILTERS.map((stat) => {
                  const isActive = selectedStatus === stat;
                  return (
                    <button
                      key={stat}
                      className="careers-chip"
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

            {/* Search Bar */}
            <div className="careers-search-wrap">
              <span className="careers-search-icon" style={{ color: c.textMuted }}>
                🔍
              </span>
              <input
                type="text"
                placeholder="Search by job title, department, advertisement no., or qualification..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="careers-search-input"
                style={{
                  border: `1px solid ${c.border}`,
                  background: c.surface,
                  color: c.text,
                }}
              />
            </div>
          </div>

          {/* Openings Grid */}
          <div className="careers-openings-grid">
            {filteredOpenings.map((job) => {
              const statColor = getStatusColor(job.status);
              return (
                <div
                  key={job.id}
                  className="careers-opening-card"
                  style={{ background: c.surface, border: `1px solid ${c.border}` }}
                >
                  <div className="careers-card-top">
                    <span className="careers-advt-no" style={{ color: c.accent }}>
                      {job.advertisementNo}
                    </span>
                    <span
                      className="careers-status-badge"
                      style={{
                        color: statColor,
                        border: `1px solid ${statColor}`,
                        background: dark ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.7)',
                      }}
                    >
                      {job.status}
                    </span>
                  </div>

                  <h3 className="careers-card-title" style={{ color: c.text }}>
                    {job.title}
                  </h3>

                  <div className="careers-card-pills">
                    <span
                      className="careers-card-pill"
                      style={{ background: c.cardBadgeBg, color: c.cardBadgeColor }}
                    >
                      {job.campus} Campus
                    </span>
                    <span
                      className="careers-card-pill"
                      style={{ background: c.pillBg, color: c.text }}
                    >
                      {job.department}
                    </span>
                    <span
                      className="careers-card-pill"
                      style={{ background: c.tagBg, color: c.tagColor }}
                    >
                      {job.category}
                    </span>
                  </div>

                  <p className="careers-card-qual" style={{ color: c.textMuted }}>
                    <strong>Qualifications:</strong> {job.qualifications}
                  </p>

                  <div className="careers-card-footer" style={{ borderColor: c.border }}>
                    <div className="careers-dates-row">
                      <span style={{ color: c.textMuted }}>
                        <strong>Posted:</strong> {job.postedDate}
                      </span>
                      <span style={{ color: c.text }}>
                        <strong>Last Date:</strong> {job.lastDate}
                      </span>
                    </div>

                    <div className="careers-actions">
                      {job.detailedPdfUrl && (
                        <a
                          href={job.detailedPdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="careers-action-btn"
                          style={{ background: c.primary, color: '#ffffff' }}
                        >
                          Detailed Advt. ↗
                        </a>
                      )}
                      {job.applicationFormUrl && (
                        <a
                          href={job.applicationFormUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="careers-action-btn"
                          style={{ background: c.accent, color: '#ffffff' }}
                        >
                          Application Form 📄
                        </a>
                      )}
                      <span
                        style={{
                          fontSize: 11,
                          color: c.textMuted,
                          alignSelf: 'center',
                          marginLeft: 'auto',
                        }}
                      >
                        Mode: {job.submissionMode}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}

            {filteredOpenings.length === 0 && (
              <div
                className="careers-empty-state"
                style={{ background: c.surface, border: `1px solid ${c.border}`, color: c.textMuted }}
              >
                No recruitment openings match your selected campus, category, status, or search query.
              </div>
            )}
          </div>
        </section>

        {/* ── 6. Multi-Campus Recruitment Desks & Submission Addresses ── */}
        <section className="careers-section">
          <div className="careers-section-header">
            <h2 className="careers-h2" style={{ color: c.text }}>
              Recruitment & Establishment Desks Across Campuses
            </h2>
            <p className="careers-section-sub" style={{ color: c.textMuted }}>
              Official postal addresses and communication desks for application dispatch and candidate queries.
            </p>
          </div>

          <div className="careers-contacts-grid">
            {CAMPUS_CAREERS_CONTACTS.map((desk, idx) => (
              <div
                key={idx}
                className="careers-contact-card"
                style={{ background: c.surface, border: `1px solid ${c.border}` }}
              >
                <span
                  className="careers-contact-badge"
                  style={{ background: c.cardBadgeBg, color: c.cardBadgeColor }}
                >
                  {desk.deskType}
                </span>
                <h3 className="careers-contact-title" style={{ color: c.text }}>
                  {desk.campus}
                </h3>
                <p className="careers-contact-office" style={{ color: c.text }}>
                  {desk.office}
                </p>
                <p className="careers-contact-postal" style={{ color: c.textMuted }}>
                  <strong>Postal Address:</strong> {desk.postalAddress}
                </p>
                <a
                  href={`mailto:${desk.email}`}
                  className="careers-contact-email"
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

