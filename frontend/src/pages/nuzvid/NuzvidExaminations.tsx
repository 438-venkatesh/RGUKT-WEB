import { useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import {
  GraduationCap,
  FileText,
  Calendar,
  Search,
  ExternalLink,
  Download,
  RotateCcw,
  Bell,
  Award,
  CheckCircle2,
  Clock,
  Shield,
  ShieldCheck,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  Sparkles,
  Info,
  Layers,
  UserCheck,
  ArrowRight,
} from 'lucide-react';
import {
  OFFICIAL_EXAM_RESULTS,
  OFFICIAL_TIMETABLES,
  EXAM_PROCEDURE_STEPS,
  OFFICIAL_DOWNLOADS,
  CERTIFICATE_SERVICES,
  EXAM_CELL_CONTACT,
  type Programme,
  type ExamResultItem,
} from '../../data/examResultsData';
import './NuzvidExaminations.css';

interface NuzvidExaminationsProps {
  section?: string;
}

export default function NuzvidExaminations({ section }: NuzvidExaminationsProps) {
  const location = useLocation();

  // Determine active subsection from prop or pathname
  let currentSection = section || 'overview';
  const path = location.pathname.toLowerCase();

  if (path.includes('notification')) currentSection = 'notifications';
  else if (path.includes('timetable') || path.includes('schedule')) currentSection = 'timetables';
  else if (path.includes('procedure') || path.includes('guideline')) currentSection = 'procedures';
  else if (path.includes('result')) currentSection = 'results';
  else if (path.includes('regulation') || path.includes('download')) currentSection = 'regulations';
  else if (path.includes('certificate') || path.includes('verification')) currentSection = 'certificates';
  else if (path.includes('contact')) currentSection = 'contact';
  else if (path === '/nuzvid/examinations' || path === '/nuzvid/examinations/' || path.includes('overview')) {
    currentSection = 'overview';
  }

  // Filter States for Results Subsection
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProgramme, setSelectedProgramme] = useState<Programme>('All');
  const [selectedBatch, setSelectedBatch] = useState<string>('All');
  const [selectedSemester, setSelectedSemester] = useState<string>('All');
  const [selectedResultType, setSelectedResultType] = useState<string>('All');

  // Filter States for Notifications Subsection
  const [notifFilter, setNotifFilter] = useState<'All' | 'Current' | 'Remedial' | 'Recounting'>('All');

  // Available Batch filter options
  const batchOptions = useMemo(() => {
    return ['All', '2025', '2024', '2023', '2022', '2021', '2020', '2018-2019'];
  }, []);

  // Filtered Results
  const filteredResults = useMemo(() => {
    return OFFICIAL_EXAM_RESULTS.filter((item: ExamResultItem) => {
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
  }, [selectedProgramme, selectedBatch, selectedSemester, selectedResultType, searchQuery]);

  // Filtered Notifications
  const filteredNotifications = useMemo(() => {
    return OFFICIAL_EXAM_RESULTS.filter((item) => {
      if (notifFilter === 'Current') return item.isNew || item.isoDate.startsWith('2026');
      if (notifFilter === 'Remedial') return item.resultType === 'Remedial';
      if (notifFilter === 'Recounting') return item.resultType === 'Recounting & Revaluation';
      return true;
    });
  }, [notifFilter]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedProgramme('All');
    setSelectedBatch('All');
    setSelectedSemester('All');
    setSelectedResultType('All');
  };

  const isFiltered =
    searchQuery.trim() !== '' ||
    selectedProgramme !== 'All' ||
    selectedBatch !== 'All' ||
    selectedSemester !== 'All' ||
    selectedResultType !== 'All';

  return (
    <div className="nzex-page">
      <div className="nzex-container">
        {/* ════════════════════════════════════════════════════════════
            1. EXAMINATION OVERVIEW SUBSECTION
            ════════════════════════════════════════════════════════════ */}
        {currentSection === 'overview' && (
          <div className="nzex-section-wrapper">
            {/* Breadcrumb */}
            <nav className="nzex-breadcrumb" aria-label="Breadcrumb">
              <span>RGUKT Nuzvid</span>
              <ChevronRight size={12} />
              <span>Examinations &amp; Results</span>
              <ChevronRight size={12} />
              <span className="current">Examination Overview</span>
            </nav>

            {/* Header Box */}
            <div className="nzex-header-box">
              <h1 className="nzex-sec-title">Examination Cell Overview</h1>
              <p className="nzex-sec-desc">
                The central evaluation, examination administration, and academic assessment authority of Rajiv
                Gandhi University of Knowledge Technologies, Nuzvid Campus.
              </p>
            </div>

            {/* Intro Section: Full-Width Clean Structured Cards */}
            <div className="nzex-intro-full-card">
              <div className="nzex-intro-header-block">
                <div className="nzex-intro-badge">
                  <Sparkles size={14} />
                  <span>Central Examination Authority</span>
                </div>
                <h2 className="nzex-intro-heading">Academic Evaluation &amp; Examination System</h2>
                <p className="nzex-intro-subheading">
                  The Examination Cell conducts, manages, and oversees all continuous assessments, semester examinations,
                  and certification workflows across the university in strict adherence to academic regulations.
                </p>
              </div>

              <div className="nzex-neat-points-grid">
                <div className="nzex-point-card grad-cyan-blue">
                  <div className="nzex-point-icon">
                    <ShieldCheck size={18} />
                  </div>
                  <div className="nzex-point-body">
                    <h4>Governance &amp; CoE Leadership</h4>
                    <p>
                      The Examination Cell operates under the direct stewardship of the{' '}
                      <strong>Controller of Examinations (CoE)</strong>, ensuring the integrity, security, and
                      confidentiality of all academic evaluations.
                    </p>
                  </div>
                </div>

                <div className="nzex-point-card grad-purple-cyan">
                  <div className="nzex-point-icon">
                    <GraduationCap size={18} />
                  </div>
                  <div className="nzex-point-body">
                    <h4>Comprehensive Curriculum Coverage</h4>
                    <p>
                      Conducts semester examinations across the 6-year integrated curriculum comprising the 2-year
                      Pre-University Course (PUC) and 4-year B.Tech across 7 engineering branches, as well as M.Tech programs.
                    </p>
                  </div>
                </div>

                <div className="nzex-point-card grad-green-cyan">
                  <div className="nzex-point-icon">
                    <Layers size={18} />
                  </div>
                  <div className="nzex-point-body">
                    <h4>Continuous Assessment Model</h4>
                    <p>
                      Governs Continuous Internal Evaluation (<strong>CIE - 40%</strong>) paired with Semester End Examinations
                      (<strong>SEE - 60%</strong>) to ensure rigorous and balanced academic assessment.
                    </p>
                  </div>
                </div>

                <div className="nzex-point-card grad-pink-purple">
                  <div className="nzex-point-icon">
                    <CheckCircle2 size={18} />
                  </div>
                  <div className="nzex-point-body">
                    <h4>Centralized Online Registrations</h4>
                    <p>
                      Provides centralized online registration for Regular, Remedial, Grand Remedial, Recounting,
                      Revaluation, and Fresh Mode examinations through the university SMS portal.
                    </p>
                  </div>
                </div>

                <div className="nzex-point-card grad-cyan-blue">
                  <div className="nzex-point-icon">
                    <Clock size={18} />
                  </div>
                  <div className="nzex-point-body">
                    <h4>Automated 10-Point Scale Grading</h4>
                    <p>
                      Automated grade computation following the 10-point scale academic framework with rapid result
                      publication on the official university servers.
                    </p>
                  </div>
                </div>

                <div className="nzex-point-card grad-purple-cyan">
                  <div className="nzex-point-icon">
                    <Award size={18} />
                  </div>
                  <div className="nzex-point-body">
                    <h4>Academic Records &amp; Transcripts</h4>
                    <p>
                      Coordinates the issuance of Grade Sheets, Consolidated Marks Memos (CMM), Provisional
                      Certificates (PC), and Original Degree Certificates (OD).
                    </p>
                  </div>
                </div>

                <div className="nzex-point-card grad-green-cyan nzex-point-full">
                  <div className="nzex-point-icon">
                    <UserCheck size={18} />
                  </div>
                  <div className="nzex-point-body">
                    <h4>Inclusive PwD Scribe Accommodations</h4>
                    <p>
                      Enforces statutory scribe allocation and compensatory time concessions for Persons with Benchmark
                      Disabilities in strict accordance with university guidelines.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Objectives / Evaluation Framework */}
            <div className="nzex-sec-block-header">
              <h3 className="nzex-sec-block-title">Evaluation Framework &amp; Core Functions</h3>
              <p className="nzex-sec-block-sub">
                Institutional mandates ensuring standardized, secure, and transparent academic evaluations across all campuses.
              </p>
            </div>

            <div className="nzex-obj-grid">
              <div className="nzex-obj-box grad-cyan-blue">
                <div className="nzex-obj-icon">
                  <ShieldCheck size={20} />
                </div>
                <h4>Integrity &amp; Confidentiality</h4>
                <p>
                  Confidential question paper moderation, anonymous barcode script masking, and external examiner scrutiny
                  guarantee unbiased evaluation standards.
                </p>
              </div>

              <div className="nzex-obj-box grad-purple-cyan">
                <div className="nzex-obj-icon">
                  <Layers size={20} />
                </div>
                <h4>Continuous Assessment Model</h4>
                <p>
                  Structured combination of weekly tests, mid-semester exams, laboratory practicals, and comprehensive
                  semester-end evaluations.
                </p>
              </div>

              <div className="nzex-obj-box grad-green-cyan">
                <div className="nzex-obj-icon">
                  <Clock size={20} />
                </div>
                <h4>Swift Result Declarations</h4>
                <p>
                  Automated computerized grade calculation and prompt publication of provisional grades, recounting outcomes,
                  and remedial sheets.
                </p>
              </div>

              <div className="nzex-obj-box grad-pink-purple">
                <div className="nzex-obj-icon">
                  <Award size={20} />
                </div>
                <h4>Academic Progression &amp; Certification</h4>
                <p>
                  End-to-end administration of semester grade sheets, credit audit verifications, No Due Certificate clearance,
                  and degree award scrolls.
                </p>
              </div>
            </div>

            {/* Academic Streams Covered */}
            <div className="nzex-sec-block-header">
              <h3 className="nzex-sec-block-title">Academic Streams Administered</h3>
              <p className="nzex-sec-block-sub">
                The Examination Cell manages assessments across all levels of the university's technical curriculum.
              </p>
            </div>

            <div className="nzex-streams-grid">
              <div className="nzex-stream-card">
                <div className="nzex-stream-badge">Pre-University</div>
                <h4>PUC Stream (P1 &amp; P2)</h4>
                <p>
                  2-Year Integrated Foundation covering Mathematics, Physics, Chemistry, English, Information Technology,
                  and Biology. Equivalence established with AP Board of Intermediate.
                </p>
                <div className="nzex-stream-meta">
                  <span>Semesters: Sem 1 &amp; Sem 2</span>
                  <span>Evaluation: CIE + EST</span>
                </div>
              </div>

              <div className="nzex-stream-card">
                <div className="nzex-stream-badge">Undergraduate</div>
                <h4>B.Tech Stream (E1 to E4)</h4>
                <p>
                  4-Year Bachelor of Technology across 7 Engineering disciplines: CSE, ECE, EEE, Mechanical, Civil, Chemical,
                  and Materials &amp; Metallurgical Engineering (MME).
                </p>
                <div className="nzex-stream-meta">
                  <span>8 Semesters Total</span>
                  <span>Credit System: AICTE Aligned</span>
                </div>
              </div>

              <div className="nzex-stream-card">
                <div className="nzex-stream-badge">Postgraduate</div>
                <h4>M.Tech Stream (PG)</h4>
                <p>
                  2-Year Master of Technology in Advanced Structural Engineering (CE), Thermal Engineering (ME), Electronics &amp;
                  Communication, and Computer Science specializations.
                </p>
                <div className="nzex-stream-meta">
                  <span>4 Semesters</span>
                  <span>Thesis &amp; Defense Track</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ════════════════════════════════════════════════════════════
            2. EXAMINATION NOTIFICATIONS SUBSECTION
            ════════════════════════════════════════════════════════════ */}
        {currentSection === 'notifications' && (
          <div className="nzex-section-wrapper">
            <nav className="nzex-breadcrumb" aria-label="Breadcrumb">
              <span>RGUKT Nuzvid</span>
              <ChevronRight size={12} />
              <span>Examinations &amp; Results</span>
              <ChevronRight size={12} />
              <span className="current">Examination Notifications</span>
            </nav>

            <div className="nzex-header-box">
              <h1 className="nzex-sec-title">Official Examination Notifications</h1>
              <p className="nzex-sec-desc">
                Current and archived notification circulars, registration announcements, and official evaluation releases
                verified directly from the RGUKT Nuzvid Examination Cell.
              </p>
            </div>

            {/* Quick Action Re-Exam Registration Banner */}
            <div className="nzex-banner-card grad-cyan-blue">
              <div className="nzex-banner-info">
                <div className="nzex-banner-tag">
                  <Bell size={14} />
                  <span>Online Examination Portal</span>
                </div>
                <h3>Remedial, Recounting, Revaluation &amp; Fresh Mode Registrations</h3>
                <p>
                  Eligible students must submit registrations and complete fee payments through the official intranet SMS
                  examination portal during the active registration window.
                </p>
              </div>
              <a
                href={EXAM_CELL_CONTACT.reExamPortal}
                target="_blank"
                rel="noopener noreferrer"
                className="nzex-btn-primary"
              >
                <span>Re-Exam Registration Portal</span>
                <ExternalLink size={14} />
              </a>
            </div>

            {/* Notification Filter Controls */}
            <div className="nzex-filter-pills-bar">
              <span className="nzex-filter-pills-label">Filter Notifications:</span>
              {(['All', 'Current', 'Remedial', 'Recounting'] as const).map((filter) => (
                <button
                  key={filter}
                  type="button"
                  className={`nzex-pill-btn ${notifFilter === filter ? 'active' : ''}`}
                  onClick={() => setNotifFilter(filter)}
                >
                  {filter === 'All' ? 'All Releases' : filter}
                </button>
              ))}
            </div>

            {/* Document Notification Rows */}
            <div className="nzex-doc-rows-list">
              {filteredNotifications.map((notif) => (
                <article key={notif.id} className="nzex-doc-row">
                  <div className="nzex-doc-row-icon">
                    <FileText size={20} />
                  </div>
                  <div className="nzex-doc-row-content">
                    <div className="nzex-doc-row-meta">
                      <span className="nzex-doc-date">
                        <Calendar size={12} />
                        {notif.date}
                      </span>
                      {notif.isNew ? (
                        <span className="nzex-status-pill current">CURRENT</span>
                      ) : (
                        <span className="nzex-status-pill archived">ARCHIVED</span>
                      )}
                      <span className={`nzex-prog-badge prog-${notif.programme.toLowerCase()}`}>
                        {notif.programme}
                      </span>
                      <span className="nzex-type-pill">{notif.resultType}</span>
                    </div>
                    <h3 className="nzex-doc-row-title">{notif.title}</h3>
                    <div className="nzex-doc-row-sub">
                      <span>Batch: {notif.batch}</span>
                      {notif.semester && <span>• {notif.semester}</span>}
                    </div>
                  </div>
                  <div className="nzex-doc-row-actions">
                    <a
                      href={notif.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="nzex-btn-view-doc"
                      aria-label={`View notification for ${notif.title}`}
                    >
                      <ExternalLink size={13} />
                      <span>View PDF</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>

            {/* Archived Notices Archive Link */}
            <div className="nzex-archive-footer-box">
              <span className="nzex-archive-text">Looking for older notification records?</span>
              <a
                href={EXAM_CELL_CONTACT.archiveNoticesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="nzex-link-pill"
              >
                <span>Browse Notice Archive</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </div>
        )}

        {/* ════════════════════════════════════════════════════════════
            3. EXAMINATION TIMETABLES SUBSECTION
            ════════════════════════════════════════════════════════════ */}
        {currentSection === 'timetables' && (
          <div className="nzex-section-wrapper">
            <nav className="nzex-breadcrumb" aria-label="Breadcrumb">
              <span>RGUKT Nuzvid</span>
              <ChevronRight size={12} />
              <span>Examinations &amp; Results</span>
              <ChevronRight size={12} />
              <span className="current">Examination Timetables</span>
            </nav>

            <div className="nzex-header-box">
              <h1 className="nzex-sec-title">Examination Timetables &amp; Schedules</h1>
              <p className="nzex-sec-desc">
                Official time tables for regular semester end examinations, remedial examination slots, grand remedial
                drives, and practical laboratory schedules.
              </p>
            </div>

            {/* Timetables Grid */}
            <div className="nzex-timetables-grid">
              {OFFICIAL_TIMETABLES.map((tt) => (
                <div key={tt.id} className="nzex-timetable-card">
                  <div className="nzex-tt-header">
                    <span className="nzex-tt-tag">{tt.tag}</span>
                    <span className={`nzex-status-pill ${tt.isCurrent ? 'current' : 'archived'}`}>
                      {tt.isCurrent ? 'ACTIVE' : 'ARCHIVED'}
                    </span>
                  </div>
                  <h3 className="nzex-tt-title">{tt.title}</h3>
                  <div className="nzex-tt-details">
                    <div className="nzex-tt-item">
                      <Clock size={14} />
                      <span>Session: {tt.session}</span>
                    </div>
                    <div className="nzex-tt-item">
                      <Calendar size={14} />
                      <span>Academic Year: {tt.academicYear}</span>
                    </div>
                  </div>
                  <div className="nzex-tt-footer">
                    <a
                      href={tt.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="nzex-btn-primary full-w"
                    >
                      <FileText size={14} />
                      <span>View Timetable (PDF)</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Laboratory & Practical Examination Notice */}
            <div className="nzex-info-note-box">
              <div className="nzex-note-icon">
                <Info size={20} />
              </div>
              <div className="nzex-note-content">
                <h4>Practical &amp; Laboratory Examination Schedules</h4>
                <p>
                  Laboratory examinations and project viva-voce schedules are prepared department-wise and posted on departmental
                  notice boards in coordination with the respective Heads of Departments (HoDs) and Chief Superintendent of
                  Examinations.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ════════════════════════════════════════════════════════════
            4. EXAMINATION PROCEDURES SUBSECTION
            ════════════════════════════════════════════════════════════ */}
        {currentSection === 'procedures' && (
          <div className="nzex-section-wrapper">
            <nav className="nzex-breadcrumb" aria-label="Breadcrumb">
              <span>RGUKT Nuzvid</span>
              <ChevronRight size={12} />
              <span>Examinations &amp; Results</span>
              <ChevronRight size={12} />
              <span className="current">Examination Procedures</span>
            </nav>

            <div className="nzex-header-box">
              <h1 className="nzex-sec-title">Examination Procedures &amp; Operating Guidelines</h1>
              <p className="nzex-sec-desc">
                Step-by-step official protocols governing examination registrations, admit card issuance, hall etiquette,
                central evaluation, recounting, and backlog remedial mechanisms.
              </p>
            </div>

            {/* Step-by-Step Procedure Cards */}
            <div className="nzex-steps-vertical-list">
              {EXAM_PROCEDURE_STEPS.map((step) => (
                <div key={step.stepNumber} className="nzex-step-row-card">
                  <div className="nzex-step-num-col">
                    <span className="nzex-step-circle">{step.stepNumber}</span>
                  </div>
                  <div className="nzex-step-body">
                    <div className="nzex-step-header">
                      <span className="nzex-step-sub">{step.subtitle}</span>
                      <h3 className="nzex-step-heading">{step.title}</h3>
                    </div>
                    <p className="nzex-step-text">{step.description}</p>
                    <ul className="nzex-step-points">
                      {step.points.map((pt, idx) => (
                        <li key={idx}>
                          <CheckCircle2 size={13} />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                    {step.actionLink && (
                      <div className="nzex-step-action">
                        <a
                          href={step.actionLink.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="nzex-btn-outline"
                        >
                          <span>{step.actionLink.label}</span>
                          <ExternalLink size={13} />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* PwD Scribe Rules and Malpractice Guidelines */}
            <div className="nzex-sec-block-header" style={{ marginTop: '48px' }}>
              <h3 className="nzex-sec-block-title">Special Provisions &amp; Disciplinary Code</h3>
              <p className="nzex-sec-block-sub">
                Official rules ensuring equal accessibility for disabled candidates and zero-tolerance toward unfair means.
              </p>
            </div>

            <div className="nzex-obj-grid">
              <div className="nzex-obj-box grad-purple-cyan">
                <div className="nzex-obj-icon">
                  <UserCheck size={20} />
                </div>
                <h4>Benchmark Disability Scribe Rules</h4>
                <p>
                  Candidates with benchmark disabilities (40%+ disability certificate) are eligible for an approved scribe
                  and compensatory time of 20 minutes per hour as per institutional disability guidelines.
                </p>
                <a
                  href="http://rguktn.ac.in/examcell/SCRIBE RULES.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nzex-inline-link"
                >
                  Download Scribe Rules PDF →
                </a>
              </div>

              <div className="nzex-obj-box grad-pink-purple">
                <div className="nzex-obj-icon">
                  <Shield size={20} />
                </div>
                <h4>Malpractice Prevention &amp; Penalties</h4>
                <p>
                  Possession of unauthorized electronic devices, copying, impersonation, or disruptive conduct entails
                  immediate cancellation of performance and disciplinary council enquiry under university act statutes.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ════════════════════════════════════════════════════════════
            5. RESULTS SUBSECTION (PRIMARY RESULTS PORTAL)
            ════════════════════════════════════════════════════════════ */}
        {currentSection === 'results' && (
          <div className="nzex-section-wrapper">
            <nav className="nzex-breadcrumb" aria-label="Breadcrumb">
              <span>RGUKT Nuzvid</span>
              <ChevronRight size={12} />
              <span>Examinations &amp; Results</span>
              <ChevronRight size={12} />
              <span className="current">Examination Results</span>
            </nav>

            <div className="nzex-header-box">
              <h1 className="nzex-sec-title">Official Examination Results Portal</h1>
              <p className="nzex-sec-desc">
                Search and view officially published semester end regular results, remedial results, recounting &amp; revaluation
                outcomes, and consolidated grade reports for RGUKT Nuzvid.
              </p>
            </div>

            {/* Results Filter & Search Control Panel */}
            <div className="nzex-results-control-panel">
              <div className="nzex-search-row">
                <div className="nzex-search-input-box">
                  <Search size={16} className="nzex-search-icon" />
                  <input
                    type="text"
                    className="nzex-search-field"
                    placeholder="Search result by programme, batch (e.g. 2024), course, or semester..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    aria-label="Search examination results"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      className="nzex-clear-search"
                      onClick={() => setSearchQuery('')}
                      aria-label="Clear search"
                    >
                      ✕
                    </button>
                  )}
                </div>
              </div>

              <div className="nzex-dropdowns-row">
                <div className="nzex-field-group">
                  <label htmlFor="res-prog" className="nzex-field-label">
                    Programme
                  </label>
                  <select
                    id="res-prog"
                    className="nzex-select-control"
                    value={selectedProgramme}
                    onChange={(e) => setSelectedProgramme(e.target.value as Programme)}
                  >
                    <option value="All">All Programmes</option>
                    <option value="PUC">PUC (Pre-University)</option>
                    <option value="Engineering">Engineering (B.Tech)</option>
                    <option value="M.Tech">M.Tech (Postgraduate)</option>
                  </select>
                </div>

                <div className="nzex-field-group">
                  <label htmlFor="res-batch" className="nzex-field-label">
                    Batch
                  </label>
                  <select
                    id="res-batch"
                    className="nzex-select-control"
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

                <div className="nzex-field-group">
                  <label htmlFor="res-sem" className="nzex-field-label">
                    Semester
                  </label>
                  <select
                    id="res-sem"
                    className="nzex-select-control"
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

                <div className="nzex-field-group">
                  <label htmlFor="res-type" className="nzex-field-label">
                    Result Type
                  </label>
                  <select
                    id="res-type"
                    className="nzex-select-control"
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
                    className="nzex-reset-btn"
                    onClick={handleResetFilters}
                    title="Reset all filters"
                  >
                    <RotateCcw size={14} />
                    <span>Reset</span>
                  </button>
                )}
              </div>

              {/* Count Indicator */}
              <div className="nzex-count-summary">
                <span>
                  Showing <strong>{filteredResults.length}</strong> of{' '}
                  <strong>{OFFICIAL_EXAM_RESULTS.length}</strong> official result releases
                </span>
                {isFiltered && <span className="nzex-applied-pill">• Filter active</span>}
              </div>
            </div>

            {/* Result Cards Grid */}
            {filteredResults.length > 0 ? (
              <div className="nzex-results-cards-grid">
                {filteredResults.map((item) => (
                  <div key={item.id} className="nzex-result-item-card">
                    <div className="nzex-ric-top">
                      <div className="nzex-ric-tags">
                        <span className={`nzex-prog-badge prog-${item.programme.toLowerCase()}`}>
                          {item.programme}
                        </span>
                        <span className="nzex-ric-batch">{item.batch} Batch</span>
                      </div>
                      <span className="nzex-ric-type">{item.resultType}</span>
                    </div>

                    <h3 className="nzex-ric-title">{item.title}</h3>

                    <div className="nzex-ric-meta">
                      <div className="nzex-ric-meta-row">
                        <Calendar size={13} />
                        <span>Published: {item.date}</span>
                      </div>
                      {item.year && (
                        <div className="nzex-ric-meta-row">
                          <GraduationCap size={13} />
                          <span>{item.year}</span>
                        </div>
                      )}
                    </div>

                    <div className="nzex-ric-action">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="nzex-btn-primary full-w"
                        aria-label={`View Result for ${item.title}`}
                      >
                        <span>VIEW RESULT</span>
                        <ArrowRight size={14} />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="nzex-empty-card">
                <div className="nzex-empty-icon-wrap">
                  <Search size={28} />
                </div>
                <h3>No results found for the selected filters.</h3>
                <p>Please clear or adjust your search term, batch, or result type filter.</p>
                <button type="button" className="nzex-btn-primary" onClick={handleResetFilters}>
                  <RotateCcw size={14} />
                  <span>Reset All Filters</span>
                </button>
              </div>
            )}
          </div>
        )}

        {/* ════════════════════════════════════════════════════════════
            6. REGULATIONS & DOWNLOADS SUBSECTION
            ════════════════════════════════════════════════════════════ */}
        {currentSection === 'regulations' && (
          <div className="nzex-section-wrapper">
            <nav className="nzex-breadcrumb" aria-label="Breadcrumb">
              <span>RGUKT Nuzvid</span>
              <ChevronRight size={12} />
              <span>Examinations &amp; Results</span>
              <ChevronRight size={12} />
              <span className="current">Regulations &amp; Downloads</span>
            </nav>

            <div className="nzex-header-box">
              <h1 className="nzex-sec-title">Academic Regulations &amp; Examination Downloads</h1>
              <p className="nzex-sec-desc">
                Official institutional regulations, CGPA conversion formula, disability guidelines, and verified downloadable
                forms issued by the Examination Cell.
              </p>
            </div>

            {/* Downloads Grid */}
            <div className="nzex-downloads-grid">
              {OFFICIAL_DOWNLOADS.map((doc) => (
                <div key={doc.id} className="nzex-download-card">
                  <div className="nzex-dlc-icon">
                    <FileText size={22} />
                  </div>
                  <div className="nzex-dlc-info">
                    <div className="nzex-dlc-header">
                      <span className="nzex-dlc-cat">{doc.category}</span>
                      {doc.isNew && <span className="nzex-status-pill current">NEW</span>}
                    </div>
                    <h3 className="nzex-dlc-title">{doc.title}</h3>
                    <p className="nzex-dlc-desc">{doc.description}</p>
                    <span className="nzex-dlc-tag">{doc.tag}</span>
                  </div>
                  <div className="nzex-dlc-action">
                    <a
                      href={doc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="nzex-btn-view-doc"
                      aria-label={`Download ${doc.title}`}
                    >
                      <Download size={14} />
                      <span>Download PDF</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ════════════════════════════════════════════════════════════
            7. CERTIFICATES & VERIFICATION SUBSECTION
            ════════════════════════════════════════════════════════════ */}
        {currentSection === 'certificates' && (
          <div className="nzex-section-wrapper">
            <nav className="nzex-breadcrumb" aria-label="Breadcrumb">
              <span>RGUKT Nuzvid</span>
              <ChevronRight size={12} />
              <span>Examinations &amp; Results</span>
              <ChevronRight size={12} />
              <span className="current">Certificates &amp; Verification</span>
            </nav>

            <div className="nzex-header-box">
              <h1 className="nzex-sec-title">Certificates &amp; Educational Verification</h1>
              <p className="nzex-sec-desc">
                Official procedure for obtaining grade sheets, Consolidated Marks Memos (CMM), degree certificates, and
                third-party employer background verification.
              </p>
            </div>

            {/* Certificate Issuance Section Cards */}
            <div className="nzex-cert-cards-grid">
              {CERTIFICATE_SERVICES.map((serv) => (
                <div key={serv.title} className="nzex-cert-card">
                  <div className="nzex-cert-header">
                    <span className="nzex-cert-cat">{serv.category}</span>
                    <h3 className="nzex-cert-title">{serv.title}</h3>
                  </div>

                  <div className="nzex-cert-office">
                    <strong>Issuing Office:</strong> {serv.issuingOffice}
                  </div>

                  <div className="nzex-cert-req-box">
                    <Info size={15} />
                    <span>{serv.requirement}</span>
                  </div>

                  <ul className="nzex-cert-list">
                    {serv.items.map((it) => (
                      <li key={it}>
                        <CheckCircle2 size={14} />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="nzex-cert-footer">
                    <span className="nzex-cert-contact-title">Inquiries Email:</span>
                    <a href={`mailto:${serv.contactEmail}`} className="nzex-cert-email-link">
                      <Mail size={13} />
                      <span>{serv.contactEmail}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Educational Details Verification for Employers/Agencies */}
            <div className="nzex-verify-card grad-cyan-blue">
              <div className="nzex-verify-icon">
                <ShieldCheck size={28} />
              </div>
              <div className="nzex-verify-content">
                <h3>Third-Party &amp; Employer Educational Verification</h3>
                <p>
                  Companies, background verification organizations, and government agencies seeking verification of student
                  degrees or mark sheets must follow the institutional verification notice and submit requests to the dedicated
                  verification desk.
                </p>
                <div className="nzex-verify-actions">
                  <a
                    href="https://examcell.rguktn.ac.in/docs/Notice_for_Educational_Details_Verification_of_the_Student.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nzex-btn-primary"
                  >
                    <FileText size={14} />
                    <span>Verification Instructions (PDF)</span>
                  </a>
                  <a
                    href={`mailto:${EXAM_CELL_CONTACT.eduVerifyEmail}`}
                    className="nzex-btn-outline"
                  >
                    <Mail size={14} />
                    <span>{EXAM_CELL_CONTACT.eduVerifyEmail}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ════════════════════════════════════════════════════════════
            8. CONTACT / EXAMINATION CELL SUBSECTION
            ════════════════════════════════════════════════════════════ */}
        {currentSection === 'contact' && (
          <div className="nzex-section-wrapper">
            <nav className="nzex-breadcrumb" aria-label="Breadcrumb">
              <span>RGUKT Nuzvid</span>
              <ChevronRight size={12} />
              <span>Examinations &amp; Results</span>
              <ChevronRight size={12} />
              <span className="current">Contact Information</span>
            </nav>

            <div className="nzex-header-box">
              <h1 className="nzex-sec-title">Examination Cell Contact &amp; Helpdesk</h1>
              <p className="nzex-sec-desc">
                Official directory of the Controller of Examinations, student helplines, educational verification, and
                certificate inquiry desks at RGUKT Nuzvid.
              </p>
            </div>

            {/* Contact Grid */}
            <div className="nzex-contact-grid">
              <div className="nzex-contact-card">
                <div className="nzex-cc-icon">
                  <Mail size={20} />
                </div>
                <div className="nzex-cc-info">
                  <span className="nzex-cc-label">Controller of Examinations (CoE)</span>
                  <a href={`mailto:${EXAM_CELL_CONTACT.coeEmail}`} className="nzex-cc-val">
                    {EXAM_CELL_CONTACT.coeEmail}
                  </a>
                </div>
              </div>

              <div className="nzex-contact-card">
                <div className="nzex-cc-icon">
                  <Phone size={20} />
                </div>
                <div className="nzex-cc-info">
                  <span className="nzex-cc-label">Helpline Mobile</span>
                  <a href={`tel:${EXAM_CELL_CONTACT.helplineMobile}`} className="nzex-cc-val">
                    +91 {EXAM_CELL_CONTACT.helplineMobile}
                  </a>
                </div>
              </div>

              <div className="nzex-contact-card">
                <div className="nzex-cc-icon">
                  <Mail size={20} />
                </div>
                <div className="nzex-cc-info">
                  <span className="nzex-cc-label">General Examination Inquiries</span>
                  <a href={`mailto:${EXAM_CELL_CONTACT.enquiriesEmail}`} className="nzex-cc-val">
                    {EXAM_CELL_CONTACT.enquiriesEmail}
                  </a>
                </div>
              </div>

              <div className="nzex-contact-card">
                <div className="nzex-cc-icon">
                  <ShieldCheck size={20} />
                </div>
                <div className="nzex-cc-info">
                  <span className="nzex-cc-label">Educational Details Verification</span>
                  <a href={`mailto:${EXAM_CELL_CONTACT.eduVerifyEmail}`} className="nzex-cc-val">
                    {EXAM_CELL_CONTACT.eduVerifyEmail}
                  </a>
                </div>
              </div>

              <div className="nzex-contact-card">
                <div className="nzex-cc-icon">
                  <Award size={20} />
                </div>
                <div className="nzex-cc-info">
                  <span className="nzex-cc-label">Certificates &amp; Transcripts</span>
                  <a href={`mailto:${EXAM_CELL_CONTACT.certificatesEmail}`} className="nzex-cc-val">
                    {EXAM_CELL_CONTACT.certificatesEmail}
                  </a>
                </div>
              </div>

              <div className="nzex-contact-card">
                <div className="nzex-cc-icon">
                  <MapPin size={20} />
                </div>
                <div className="nzex-cc-info">
                  <span className="nzex-cc-label">Office Location</span>
                  <span className="nzex-cc-val-static">
                    {EXAM_CELL_CONTACT.building}, {EXAM_CELL_CONTACT.institution}, {EXAM_CELL_CONTACT.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Official Online Portals Link */}
            <div className="nzex-server-footer-card">
              <div>
                <h4>Official Examination Cell Servers</h4>
                <p>
                  Examination Cell Main: <a href={EXAM_CELL_CONTACT.officialPortalUrl} target="_blank" rel="noopener noreferrer">{EXAM_CELL_CONTACT.officialPortalUrl}</a>
                </p>
                <p>
                  Direct Result Server: <a href={EXAM_CELL_CONTACT.officialServerUrl} target="_blank" rel="noopener noreferrer">{EXAM_CELL_CONTACT.officialServerUrl}</a>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
