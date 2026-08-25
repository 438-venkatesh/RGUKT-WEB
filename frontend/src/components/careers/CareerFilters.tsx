import { useSectionTheme } from '../SectionPageLayout';
import type { CampusType, CareerCategoryType, CareerStatus } from '../../data/careersContent';

interface CareerFiltersProps {
  searchQuery: string;
  onSearchChange: (val: string) => void;
  selectedCategory: string;
  onCategoryChange: (val: string) => void;
  selectedCampus: string;
  onCampusChange: (val: string) => void;
  selectedStatus: string;
  onStatusChange: (val: string) => void;
  onReset: () => void;
  activeMatchesCount: number;
}

const CATEGORY_OPTIONS: (string | CareerCategoryType)[] = [
  'All Categories',
  'Faculty Positions',
  'Guest & Visiting Faculty',
  'Non-Teaching & Administrative',
  'Technical & Laboratory',
  'Healthcare & Campus Services',
  'Statutory Leadership',
];

const CAMPUS_OPTIONS: (string | CampusType)[] = [
  'All Campuses',
  'Nuzvid',
  'RK Valley',
  'Srikakulam',
  'Ongole',
];

const STATUS_OPTIONS: (string | CareerStatus)[] = [
  'All Statuses',
  'OPEN',
  'CLOSING SOON',
  'CLOSED',
  'UPCOMING',
];

export default function CareerFilters({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedCampus,
  onCampusChange,
  selectedStatus,
  onStatusChange,
  onReset,
  activeMatchesCount,
}: CareerFiltersProps) {
  const c = useSectionTheme();

  const isFiltered =
    searchQuery.trim() !== '' ||
    selectedCategory !== 'All Categories' ||
    selectedCampus !== 'All Campuses' ||
    selectedStatus !== 'All Statuses';

  return (
    <div className="careers-filter-wrapper" style={{ background: c.surface, border: `1px solid ${c.border}` }}>
      <div className="careers-filter-top">
        <div className="careers-filter-title-box">
          <span className="careers-filter-icon">🔍</span>
          <span className="careers-filter-label" style={{ color: c.text }}>
            Filter Recruitment Listings
          </span>
        </div>

        <div className="careers-filter-stats">
          <span className="careers-results-count" style={{ color: c.textMuted }}>
            Showing <strong>{activeMatchesCount}</strong> verified notification{activeMatchesCount === 1 ? '' : 's'}
          </span>
          {isFiltered && (
            <button
              type="button"
              className="careers-reset-btn"
              onClick={onReset}
              title="Reset all filters"
            >
              Reset Filters ↺
            </button>
          )}
        </div>
      </div>

      <div className="careers-filter-grid">
        {/* Search Input */}
        <div className="careers-input-group">
          <label htmlFor="careers-search" className="careers-input-label" style={{ color: c.textMuted }}>
            Search Keyword
          </label>
          <div className="careers-input-with-icon">
            <span className="careers-input-inner-icon">🔎</span>
            <input
              id="careers-search"
              type="text"
              className="careers-text-input"
              placeholder="Search by title, discipline, ref no..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              style={{
                background: c.surface2,
                color: c.text,
                border: `1px solid ${c.border}`,
              }}
            />
          </div>
        </div>

        {/* Category Select */}
        <div className="careers-input-group">
          <label htmlFor="careers-cat-select" className="careers-input-label" style={{ color: c.textMuted }}>
            Position Type
          </label>
          <select
            id="careers-cat-select"
            className="careers-select"
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            style={{
              background: c.surface2,
              color: c.text,
              border: `1px solid ${c.border}`,
            }}
          >
            {CATEGORY_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        {/* Campus Select */}
        <div className="careers-input-group">
          <label htmlFor="careers-campus-select" className="careers-input-label" style={{ color: c.textMuted }}>
            Constituent Campus
          </label>
          <select
            id="careers-campus-select"
            className="careers-select"
            value={selectedCampus}
            onChange={(e) => onCampusChange(e.target.value)}
            style={{
              background: c.surface2,
              color: c.text,
              border: `1px solid ${c.border}`,
            }}
          >
            {CAMPUS_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        {/* Status Select */}
        <div className="careers-input-group">
          <label htmlFor="careers-status-select" className="careers-input-label" style={{ color: c.textMuted }}>
            Status
          </label>
          <select
            id="careers-status-select"
            className="careers-select"
            value={selectedStatus}
            onChange={(e) => onStatusChange(e.target.value)}
            style={{
              background: c.surface2,
              color: c.text,
              border: `1px solid ${c.border}`,
            }}
          >
            {STATUS_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
