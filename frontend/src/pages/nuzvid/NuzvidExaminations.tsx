import { useState, useMemo, useRef } from 'react';
import {
  OFFICIAL_EXAM_RESULTS,
  QUICK_ACCESS_CARDS,
  OFFICIAL_DOWNLOADS,
  CERTIFICATE_SERVICES,
  EXAM_CELL_CONTACT,
  type Programme,
  type ResultType,
  type ExamResultItem,
} from '../../data/examResultsData';
import './NuzvidExaminations.css';

export default function NuzvidExaminations() {
  // Filter States
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProgramme, setSelectedProgramme] = useState<Programme>('All');
  const [selectedBatch, setSelectedBatch] = useState<string>('All');
  const [selectedSemester, setSelectedSemester] = useState<string>('All');
  const [selectedResultType, setSelectedResultType] = useState<string>('All');
  const [activeTab, setActiveTab] = useState<'All' | 'PUC' | 'Engineering' | 'M.Tech'>('All');

  // Ref to scroll to results section
  const resultsSectionRef = useRef<HTMLDivElement>(null);

  // Available Batch filter options derived dynamically
  const batchOptions = useMemo(() => {
    return ['All', '2025', '2024', '2023', '2022', '2021', '2020', '2018-2019'];
  }, []);

  // Filtered Results Calculation
  const filteredResults = useMemo(() => {
    return OFFICIAL_EXAM_RESULTS.filter((item: ExamResultItem) => {
      // Tab filter
      if (activeTab !== 'All' && item.programme !== activeTab) {
        return false;
      }

      // Programme filter
      if (selectedProgramme !== 'All' && item.programme !== selectedProgramme) {
        return false;
      }

      // Batch filter
      if (selectedBatch !== 'All') {
        if (selectedBatch === '2018-2019') {
          if (!item.batch.includes('2018') && !item.batch.includes('2019')) {
            return false;
          }
        } else if (!item.batch.includes(selectedBatch)) {
          return false;
        }
      }

      // Semester filter
      if (selectedSemester !== 'All') {
        if (!item.semester || !item.semester.toLowerCase().includes(selectedSemester.toLowerCase())) {
          return false;
        }
      }

      // Result Type filter
      if (selectedResultType !== 'All') {
        if (item.resultType !== selectedResultType) {
          return false;
        }
      }

      // Search Query filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchTitle = item.title.toLowerCase().includes(query);
        const matchProgramme = item.programme.toLowerCase().includes(query);
        const matchBatch = item.batch.toLowerCase().includes(query);
        const matchType = item.resultType.toLowerCase().includes(query);
        const matchYear = item.year?.toLowerCase().includes(query) ?? false;
        const matchSem = item.semester?.toLowerCase().includes(query) ?? false;

        if (!matchTitle && !matchProgramme && !matchBatch && !matchType && !matchYear && !matchSem) {
          return false;
        }
      }

      return true;
    });
  }, [activeTab, selectedProgramme, selectedBatch, selectedSemester, selectedResultType, searchQuery]);

  // Handler to clear all filters
  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedProgramme('All');
    setSelectedBatch('All');
    setSelectedSemester('All');
    setSelectedResultType('All');
    setActiveTab('All');
  };

  // Quick access card click handler
  const handleQuickAccessClick = (
    filterProg?: Programme,
    filterResType?: ResultType,
    extLink?: string
  ) => {
    if (extLink) {
      window.open(extLink, '_blank', 'noopener,noreferrer');
      return;
    }
    if (filterProg) {
      setSelectedProgramme(filterProg);
      setActiveTab(filterProg);
    }
    if (filterResType) {
      setSelectedResultType(filterResType);
    }
    // Scroll smoothly to the results section
    resultsSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const isFiltered =
    searchQuery.trim() !== '' ||
    selectedProgramme !== 'All' ||
    selectedBatch !== 'All' ||
    selectedSemester !== 'All' ||
    selectedResultType !== 'All' ||
    activeTab !== 'All';

  return (
    <div className="nze-page">
      {/* ─────────────────────────────────────────────────────────────
          SECTION 1 — HERO
      ────────────────────────────────────────────────────────────── */}
      <section className="nze-hero" aria-labelledby="nze-hero-title">
        <div className="nze-hero-backdrop" aria-hidden="true" />
        <div className="nze-container nze-hero-content">
          <div className="nze-hero-header">
            <div className="nze-live-badge">
              <span className="nze-pulse-dot" aria-hidden="true" />
              <span>Official University Examination Portal • RGUKT Nuzvid</span>
            </div>

            <h1 id="nze-hero-title" className="nze-hero-title">
              Examination Results
            </h1>
            <p className="nze-hero-subtitle">
              Official Examination Cell portal for RGUKT Nuzvid. Browse declared semester regular results,
              remedials, recounting, revaluation, grade sheets, and verified certificate guidelines.
            </p>

            <div className="nze-hero-actions">
              <button
                type="button"
                className="nze-btn-primary"
                onClick={() => resultsSectionRef.current?.scrollIntoView({ behavior: 'smooth' })}
              >
                <SearchIcon />
                <span>Search &amp; Filter Results</span>
              </button>

              <a
                href={EXAM_CELL_CONTACT.reExamPortal}
                target="_blank"
                rel="noopener noreferrer"
                className="nze-btn-secondary"
              >
                <ExternalLinkIcon />
                <span>Re-Exam &amp; Recounting Portal</span>
              </a>

              <a
                href={EXAM_CELL_CONTACT.officialServerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="nze-btn-ghost"
              >
                <span>Exam Cell Server</span>
                <ArrowRightIcon />
              </a>
            </div>
          </div>

          {/* Key Metrics Banner */}
          <div className="nze-stats-grid">
            <div className="nze-stat-card">
              <span className="nze-stat-num">PUC &amp; Engg</span>
              <span className="nze-stat-label">P1, P2 &amp; E1–E4 Streams</span>
            </div>
            <div className="nze-stat-card">
              <span className="nze-stat-num">100% Verified</span>
              <span className="nze-stat-label">Official CoE Records</span>
            </div>
            <div className="nze-stat-card">
              <span className="nze-stat-num">Online Services</span>
              <span className="nze-stat-label">Remedial, Recounting &amp; Reval</span>
            </div>
            <div className="nze-stat-card">
              <span className="nze-stat-num">M.Tech (PG)</span>
              <span className="nze-stat-label">Regular &amp; Project Results</span>
            </div>
          </div>
        </div>
      </section>

      <div className="nze-container nze-main-body">
        {/* ─────────────────────────────────────────────────────────────
            SECTION 2 — QUICK ACCESS CARDS
        ────────────────────────────────────────────────────────────── */}
        <section className="nze-section" aria-labelledby="nze-quick-access-heading">
          <div className="nze-section-header">
            <div>
              <span className="nze-section-kicker">Portal Services</span>
              <h2 id="nze-quick-access-heading" className="nze-section-title">
                Quick Access Services
              </h2>
            </div>
            <p className="nze-section-desc">
              Direct access to all major examination functions, results streams, and registration channels.
            </p>
          </div>

          <div className="nze-quick-grid">
            {QUICK_ACCESS_CARDS.map((card) => (
              <div
                key={card.id}
                className={`nze-quick-card nze-grad-${card.gradientType}`}
                onClick={() =>
                  handleQuickAccessClick(card.filterProgramme, card.filterResultType, card.externalLink)
                }
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleQuickAccessClick(card.filterProgramme, card.filterResultType, card.externalLink);
                  }
                }}
              >
                <div className="nze-quick-card-top">
                  <div className="nze-quick-icon-wrap">{getQuickIcon(card.iconType)}</div>
                  <span className="nze-quick-badge">{card.badge}</span>
                </div>
                <h3 className="nze-quick-title">{card.title}</h3>
                <p className="nze-quick-desc">{card.shortDesc}</p>
                <div className="nze-quick-action">
                  <span>{card.actionText}</span>
                  <ArrowRightIcon />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            SECTION 3 — LATEST RESULTS & UPDATES (STREAM)
        ────────────────────────────────────────────────────────────── */}
        <section className="nze-section" aria-labelledby="nze-latest-heading">
          <div className="nze-section-header nze-header-flex">
            <div>
              <div className="nze-badge-tag">
                <BellIcon />
                <span>Live Feed</span>
              </div>
              <h2 id="nze-latest-heading" className="nze-section-title">
                Latest Examination Results &amp; Updates
              </h2>
            </div>
            <a
              href={EXAM_CELL_CONTACT.archiveNoticesUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="nze-link-btn"
            >
              <span>Archived Notices</span>
              <ExternalLinkIcon />
            </a>
          </div>

          <div className="nze-latest-list">
            {OFFICIAL_EXAM_RESULTS.slice(0, 6).map((item) => (
              <article key={item.id} className="nze-latest-item">
                <div className="nze-latest-date-col">
                  <span className="nze-latest-date-badge">{item.date}</span>
                  {item.isNew && <span className="nze-new-pill">NEW</span>}
                </div>

                <div className="nze-latest-info-col">
                  <div className="nze-item-tags">
                    <span className={`nze-prog-tag nze-prog-${item.programme.toLowerCase()}`}>
                      {item.programme}
                    </span>
                    <span className="nze-type-tag">{item.resultType}</span>
                    <span className="nze-batch-tag">Batch: {item.batch}</span>
                  </div>
                  <h3 className="nze-latest-item-title">{item.title}</h3>
                </div>

                <div className="nze-latest-action-col">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nze-btn-view"
                    aria-label={`View result for ${item.title}`}
                  >
                    <span>VIEW RESULT</span>
                    <ArrowRightIcon />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            SECTION 4 & 5 — RESULT SEARCH / FILTER & PROGRAMME RESULT CARDS
        ────────────────────────────────────────────────────────────── */}
        <section ref={resultsSectionRef} className="nze-section" aria-labelledby="nze-filter-heading">
          <div className="nze-section-header">
            <div>
              <span className="nze-section-kicker">Archive &amp; Search</span>
              <h2 id="nze-filter-heading" className="nze-section-title">
                Browse Examination Results
              </h2>
            </div>
            <p className="nze-section-desc">
              Filter results by programme, batch, semester, or result type. All records match official
              Examination Cell releases.
            </p>
          </div>

          {/* Interactive Category Tabs */}
          <div className="nze-tabs-bar" role="tablist" aria-label="Programme Tabs">
            {(['All', 'PUC', 'Engineering', 'M.Tech'] as const).map((tab) => (
              <button
                key={tab}
                type="button"
                role="tab"
                aria-selected={activeTab === tab}
                className={`nze-tab-btn ${activeTab === tab ? 'active' : ''}`}
                onClick={() => {
                  setActiveTab(tab);
                  setSelectedProgramme(tab);
                }}
              >
                {tab === 'All' ? 'All Programmes' : tab}
              </button>
            ))}
          </div>

          {/* Filters Control Box */}
          <div className="nze-filter-box">
            <div className="nze-search-input-wrap">
              <SearchIcon />
              <input
                type="text"
                className="nze-search-input"
                placeholder="Search result by title, course, batch (e.g. 2024, E2S2, Remedial)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search examination results"
              />
              {searchQuery && (
                <button
                  type="button"
                  className="nze-search-clear"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>

            <div className="nze-filter-dropdowns">
              <div className="nze-filter-field">
                <label htmlFor="filter-prog" className="nze-filter-label">
                  Programme
                </label>
                <select
                  id="filter-prog"
                  className="nze-select"
                  value={selectedProgramme}
                  onChange={(e) => {
                    const val = e.target.value as Programme;
                    setSelectedProgramme(val);
                    setActiveTab(val);
                  }}
                >
                  <option value="All">All Programmes</option>
                  <option value="PUC">PUC (Pre-University)</option>
                  <option value="Engineering">Engineering (B.Tech)</option>
                  <option value="M.Tech">M.Tech (PG)</option>
                </select>
              </div>

              <div className="nze-filter-field">
                <label htmlFor="filter-batch" className="nze-filter-label">
                  Batch
                </label>
                <select
                  id="filter-batch"
                  className="nze-select"
                  value={selectedBatch}
                  onChange={(e) => setSelectedBatch(e.target.value)}
                >
                  {batchOptions.map((b) => (
                    <option key={b} value={b}>
                      {b === 'All' ? 'All Batches' : `${b} Batch`}
                    </option>
                  ))}
                </select>
              </div>

              <div className="nze-filter-field">
                <label htmlFor="filter-sem" className="nze-filter-label">
                  Semester
                </label>
                <select
                  id="filter-sem"
                  className="nze-select"
                  value={selectedSemester}
                  onChange={(e) => setSelectedSemester(e.target.value)}
                >
                  <option value="All">All Semesters</option>
                  <option value="Sem 1">Semester 1</option>
                  <option value="Sem 2">Semester 2</option>
                  <option value="Sem 3">Semester 3</option>
                  <option value="Sem 4">Semester 4</option>
                </select>
              </div>

              <div className="nze-filter-field">
                <label htmlFor="filter-type" className="nze-filter-label">
                  Result Type
                </label>
                <select
                  id="filter-type"
                  className="nze-select"
                  value={selectedResultType}
                  onChange={(e) => setSelectedResultType(e.target.value)}
                >
                  <option value="All">All Result Types</option>
                  <option value="Regular">Regular Examination</option>
                  <option value="Remedial">Remedial / Grand Remedial</option>
                  <option value="Recounting & Revaluation">Recounting &amp; Revaluation</option>
                  <option value="Fresh Mode">Fresh Mode</option>
                  <option value="Consolidated">Consolidated Grade Sheet</option>
                </select>
              </div>

              {isFiltered && (
                <button
                  type="button"
                  className="nze-btn-reset"
                  onClick={handleResetFilters}
                  title="Clear all active filters"
                >
                  <ResetIcon />
                  <span>Reset</span>
                </button>
              )}
            </div>

            {/* Results Count Bar */}
            <div className="nze-results-count-bar">
              <span className="nze-count-text">
                Showing <strong>{filteredResults.length}</strong> of{' '}
                <strong>{OFFICIAL_EXAM_RESULTS.length}</strong> official result releases
              </span>
              {isFiltered && (
                <span className="nze-filter-active-indicator">• Filters applied</span>
              )}
            </div>
          </div>

          {/* Result Cards Grid */}
          {filteredResults.length > 0 ? (
            <div className="nze-results-grid">
              {filteredResults.map((item) => (
                <div key={item.id} className="nze-result-card">
                  <div className="nze-card-header">
                    <div className="nze-card-tags">
                      <span className={`nze-prog-badge nze-prog-${item.programme.toLowerCase()}`}>
                        {item.programme}
                      </span>
                      <span className="nze-card-batch">{item.batch} Batch</span>
                    </div>
                    <span className="nze-card-type-chip">{item.resultType}</span>
                  </div>

                  <h3 className="nze-card-title">{item.title}</h3>

                  <div className="nze-card-meta">
                    <div className="nze-meta-row">
                      <CalendarIcon />
                      <span>Published: {item.date}</span>
                    </div>
                    {item.year && (
                      <div className="nze-meta-row">
                        <CapIcon />
                        <span>{item.year}</span>
                      </div>
                    )}
                  </div>

                  <div className="nze-card-footer">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="nze-card-btn"
                      aria-label={`View Result for ${item.title}`}
                    >
                      <span>VIEW RESULT</span>
                      <ArrowRightIcon />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="nze-empty-state">
              <div className="nze-empty-icon">
                <SearchIcon />
              </div>
              <h3 className="nze-empty-title">No results found for the selected filters.</h3>
              <p className="nze-empty-desc">
                Try clearing or adjusting your search term, batch, or result type filter.
              </p>
              <button type="button" className="nze-btn-primary" onClick={handleResetFilters}>
                <ResetIcon />
                <span>Reset All Filters</span>
              </button>
            </div>
          )}
        </section>

        {/* ─────────────────────────────────────────────────────────────
            SECTION 6 — RECOUNTING & REVALUATION
        ────────────────────────────────────────────────────────────── */}
        <section className="nze-section" aria-labelledby="nze-recounting-heading">
          <div className="nze-process-box nze-grad-purple">
            <div className="nze-process-content">
              <div className="nze-badge-tag">
                <ShieldIcon />
                <span>Evaluation Services</span>
              </div>
              <h2 id="nze-recounting-heading" className="nze-process-title">
                Recounting &amp; Revaluation
              </h2>
              <p className="nze-process-text">
                Students wishing to apply for recounting of marks or revaluation of answer scripts must
                register through the official SMS Examination Portal during the active window following
                result publication.
              </p>

              <div className="nze-steps-grid">
                <div className="nze-step-card">
                  <div className="nze-step-num">1</div>
                  <h3 className="nze-step-title">Check Result</h3>
                  <p className="nze-step-desc">
                    Review your declared grade in the latest regular or remedial result sheet.
                  </p>
                </div>
                <div className="nze-step-card">
                  <div className="nze-step-num">2</div>
                  <h3 className="nze-step-title">Online Registration</h3>
                  <p className="nze-step-desc">
                    Log in to the SMS Re-Exam Portal and select the eligible subject(s).
                  </p>
                </div>
                <div className="nze-step-card">
                  <div className="nze-step-num">3</div>
                  <h3 className="nze-step-title">Pay Fee Online</h3>
                  <p className="nze-step-desc">
                    Pay the prescribed fee (as specified per subject in official notice).
                  </p>
                </div>
                <div className="nze-step-card">
                  <div className="nze-step-num">4</div>
                  <h3 className="nze-step-title">Result Declaration</h3>
                  <p className="nze-step-desc">
                    Recounting and revaluation results are officially published on this portal.
                  </p>
                </div>
              </div>

              <div className="nze-process-actions">
                <a
                  href={EXAM_CELL_CONTACT.reExamPortal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nze-btn-primary"
                >
                  <ExternalLinkIcon />
                  <span>Register for Recounting / Revaluation</span>
                </a>

                <a
                  href="https://examcell.rguktn.ac.in/docs/General_Instructions_for_Recounting_Revaluation_Remedial_Grade-Improvement.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nze-btn-outline"
                >
                  <DocIcon />
                  <span>General Instructions (PDF)</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            SECTION 7 — REMEDIAL EXAMINATIONS & FRESH MODE
        ────────────────────────────────────────────────────────────── */}
        <section className="nze-section" aria-labelledby="nze-remedial-heading">
          <div className="nze-process-box nze-grad-blue">
            <div className="nze-process-content">
              <div className="nze-badge-tag">
                <CapIcon />
                <span>Backlog Clearance</span>
              </div>
              <h2 id="nze-remedial-heading" className="nze-process-title">
                Remedial Examinations &amp; Fresh Mode
              </h2>
              <p className="nze-process-text">
                RGUKT Nuzvid conducts Remedial and Grade Improvement examinations to provide students with
                backlog clearance opportunities. Fresh Mode registrations are offered for designated batches
                as per university academic guidelines.
              </p>

              <div className="nze-info-cards-row">
                <div className="nze-info-pill-card">
                  <h3 className="nze-info-card-title">Remedial Examinations</h3>
                  <ul className="nze-info-list">
                    <li>Available for PUC (P1, P2) and Engineering (E1, E2, E3, E4) courses.</li>
                    <li>Students must register online via the Re-Exam SMS portal within the notified deadline.</li>
                    <li>Timetables and lab schedules are issued separately by the CoE office.</li>
                  </ul>
                </div>

                <div className="nze-info-pill-card">
                  <h3 className="nze-info-card-title">Fresh Mode Provision</h3>
                  <ul className="nze-info-list">
                    <li>Applicable for eligible students seeking special attempt opportunities.</li>
                    <li>Registration requires confirmation of coursework prerequisites.</li>
                    <li>Results are declared along with the standard evaluation cycle.</li>
                  </ul>
                </div>
              </div>

              <div className="nze-process-actions">
                <a
                  href={EXAM_CELL_CONTACT.reExamPortal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nze-btn-primary"
                >
                  <ExternalLinkIcon />
                  <span>Remedial &amp; Fresh Mode Registration</span>
                </a>

                <a
                  href="http://rguktn.ac.in/examcell/docs/Remedail_registration_Instructions.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nze-btn-outline"
                >
                  <DocIcon />
                  <span>Remedial Instructions (PDF)</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            SECTION 8 — EDUCATIONAL DETAILS & CERTIFICATES
        ────────────────────────────────────────────────────────────── */}
        <section className="nze-section" aria-labelledby="nze-certificates-heading">
          <div className="nze-section-header">
            <div>
              <span className="nze-section-kicker">Academic Records</span>
              <h2 id="nze-certificates-heading" className="nze-section-title">
                Certificates &amp; Educational Verification
              </h2>
            </div>
            <p className="nze-section-desc">
              Official institutional guidelines on obtaining degree certificates, marks memos, and academic
              background verification.
            </p>
          </div>

          <div className="nze-cert-grid">
            {CERTIFICATE_SERVICES.map((serv) => (
              <div key={serv.title} className="nze-cert-card">
                <div className="nze-cert-top">
                  <span className="nze-cert-dept">{serv.category}</span>
                  <h3 className="nze-cert-title">{serv.title}</h3>
                </div>

                <div className="nze-cert-issuing">
                  <strong>Issuing Office:</strong> {serv.issuingOffice}
                </div>

                <div className="nze-cert-req">
                  <InfoIcon />
                  <span>{serv.requirement}</span>
                </div>

                <ul className="nze-cert-items">
                  {serv.items.map((it) => (
                    <li key={it}>
                      <CheckIcon />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>

                <div className="nze-cert-footer">
                  <span className="nze-cert-contact-lbl">Email for Queries:</span>
                  <a href={`mailto:${serv.contactEmail}`} className="nze-cert-email">
                    {serv.contactEmail}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Educational Details Verification Card */}
          <div className="nze-edu-verify-card">
            <div className="nze-edu-verify-icon">
              <ShieldIcon />
            </div>
            <div className="nze-edu-verify-text">
              <h3 className="nze-edu-verify-title">Third-Party &amp; Employer Educational Verification</h3>
              <p className="nze-edu-verify-desc">
                Organizations, verification agencies, and institutions seeking educational background
                verification of RGUKT Nuzvid alumni should follow the official instructions and direct their
                requests to the designated verification desk.
              </p>
              <div className="nze-edu-verify-links">
                <a
                  href="https://examcell.rguktn.ac.in/docs/Notice_for_Educational_Details_Verification_of_the_Student.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nze-btn-sm-primary"
                >
                  <DocIcon />
                  <span>Verification Instructions (PDF)</span>
                </a>
                <a href={`mailto:${EXAM_CELL_CONTACT.eduVerifyEmail}`} className="nze-btn-sm-ghost">
                  <MailIcon />
                  <span>{EXAM_CELL_CONTACT.eduVerifyEmail}</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            SECTION 9 — APPLICATIONS & DOWNLOADS
        ────────────────────────────────────────────────────────────── */}
        <section className="nze-section" aria-labelledby="nze-downloads-heading">
          <div className="nze-section-header">
            <div>
              <span className="nze-section-kicker">Resource Library</span>
              <h2 id="nze-downloads-heading" className="nze-section-title">
                Applications &amp; Official Downloads
              </h2>
            </div>
            <p className="nze-section-desc">
              Official institutional forms, disability guidelines, CGPA conversion formula, and academic
              regulations verified from the Examination Cell.
            </p>
          </div>

          <div className="nze-downloads-grid">
            {OFFICIAL_DOWNLOADS.map((doc) => (
              <a
                key={doc.id}
                href={doc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="nze-download-card"
              >
                <div className="nze-dl-icon-col">
                  <DocIcon />
                </div>
                <div className="nze-dl-info-col">
                  <div className="nze-dl-meta">
                    <span className="nze-dl-cat">{doc.category}</span>
                    {doc.isNew && <span className="nze-new-pill">NEW</span>}
                  </div>
                  <h3 className="nze-dl-title">{doc.title}</h3>
                  <p className="nze-dl-desc">{doc.description}</p>
                  <span className="nze-dl-tag">{doc.tag}</span>
                </div>
                <div className="nze-dl-action-col">
                  <DownloadIcon />
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            SECTION 10 — EXAMINATION CELL CONTACT
        ────────────────────────────────────────────────────────────── */}
        <section className="nze-section" aria-labelledby="nze-contact-heading">
          <div className="nze-contact-card">
            <div className="nze-contact-header">
              <div className="nze-badge-tag">
                <CapIcon />
                <span>Official Helpdesk</span>
              </div>
              <h2 id="nze-contact-heading" className="nze-contact-title">
                Examination Cell Contact &amp; Enquiries
              </h2>
              <p className="nze-contact-subtitle">
                For examination inquiries, educational verification, or certificate assistance, reach out
                through the official university channels below.
              </p>
            </div>

            <div className="nze-contact-grid">
              <div className="nze-contact-item">
                <div className="nze-ci-icon">
                  <MailIcon />
                </div>
                <div className="nze-ci-text">
                  <span className="nze-ci-label">Controller of Examinations (CoE)</span>
                  <a href={`mailto:${EXAM_CELL_CONTACT.coeEmail}`} className="nze-ci-val">
                    {EXAM_CELL_CONTACT.coeEmail}
                  </a>
                </div>
              </div>

              <div className="nze-contact-item">
                <div className="nze-ci-icon">
                  <PhoneIcon />
                </div>
                <div className="nze-ci-text">
                  <span className="nze-ci-label">Helpline / Mobile</span>
                  <a href={`tel:${EXAM_CELL_CONTACT.helplineMobile}`} className="nze-ci-val">
                    +91 {EXAM_CELL_CONTACT.helplineMobile}
                  </a>
                </div>
              </div>

              <div className="nze-contact-item">
                <div className="nze-ci-icon">
                  <MailIcon />
                </div>
                <div className="nze-ci-text">
                  <span className="nze-ci-label">General Examination Enquiries</span>
                  <a href={`mailto:${EXAM_CELL_CONTACT.enquiriesEmail}`} className="nze-ci-val">
                    {EXAM_CELL_CONTACT.enquiriesEmail}
                  </a>
                </div>
              </div>

              <div className="nze-contact-item">
                <div className="nze-ci-icon">
                  <ShieldIcon />
                </div>
                <div className="nze-ci-text">
                  <span className="nze-ci-label">Educational Details Verification</span>
                  <a href={`mailto:${EXAM_CELL_CONTACT.eduVerifyEmail}`} className="nze-ci-val">
                    {EXAM_CELL_CONTACT.eduVerifyEmail}
                  </a>
                </div>
              </div>

              <div className="nze-contact-item">
                <div className="nze-ci-icon">
                  <DocIcon />
                </div>
                <div className="nze-ci-text">
                  <span className="nze-ci-label">Certificates &amp; Transcripts</span>
                  <a href={`mailto:${EXAM_CELL_CONTACT.certificatesEmail}`} className="nze-ci-val">
                    {EXAM_CELL_CONTACT.certificatesEmail}
                  </a>
                </div>
              </div>

              <div className="nze-contact-item">
                <div className="nze-ci-icon">
                  <LocationIcon />
                </div>
                <div className="nze-ci-text">
                  <span className="nze-ci-label">Office Location</span>
                  <span className="nze-ci-val-static">
                    Academic Block-I, RGUKT Nuzvid Campus, Eluru Dist, AP — 521202
                  </span>
                </div>
              </div>
            </div>

            <div className="nze-contact-footer">
              <span className="nze-cf-text">Official Examination Cell Online Server:</span>
              <a
                href={EXAM_CELL_CONTACT.officialServerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="nze-cf-link"
              >
                https://examcell.rguktn.ac.in/
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   HELPER SVG ICONS
────────────────────────────────────────────────────────────── */

function getQuickIcon(type: string) {
  switch (type) {
    case 'regular':
      return <CapIcon />;
    case 'remedial':
      return <ResetIcon />;
    case 'recounting':
      return <SearchIcon />;
    case 'revaluation':
      return <ShieldIcon />;
    case 'freshmode':
      return <SparkIcon />;
    case 'puc':
      return <BookIcon />;
    case 'engineering':
      return <CpuIcon />;
    case 'mtech':
      return <DegreeIcon />;
    default:
      return <DocIcon />;
  }
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function ResetIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M23 4v6h-6" />
      <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
    </svg>
  );
}

function BellIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function CapIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  );
}

function DocIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function BookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  );
}

function CpuIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <line x1="9" y1="1" x2="9" y2="4" />
      <line x1="15" y1="1" x2="15" y2="4" />
      <line x1="9" y1="20" x2="9" y2="23" />
      <line x1="15" y1="20" x2="15" y2="23" />
      <line x1="20" y1="9" x2="23" y2="9" />
      <line x1="20" y1="14" x2="23" y2="14" />
      <line x1="1" y1="9" x2="4" y2="9" />
      <line x1="1" y1="14" x2="4" y2="14" />
    </svg>
  );
}

function DegreeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="8" r="6" />
      <path d="M15.48 13.92L17 22l-5-3-5 3 1.52-8.08" />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
