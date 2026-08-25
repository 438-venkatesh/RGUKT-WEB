import { useState, useMemo } from 'react';
import SectionPageLayout, { useSectionTheme } from '../components/SectionPageLayout';
import CareersHero from '../components/careers/CareersHero';
import CareerCategories from '../components/careers/CareerCategories';
import CareerFilters from '../components/careers/CareerFilters';
import CareerOpeningCard from '../components/careers/CareerOpeningCard';
import CampusCareers from '../components/careers/CampusCareers';
import RecruitmentTimeline from '../components/careers/RecruitmentTimeline';
import RecruitmentDocuments from '../components/careers/RecruitmentDocuments';
import ArchivedRecruitment from '../components/careers/ArchivedRecruitment';
import CareerWhyRgukt from '../components/careers/CareerWhyRgukt';
import CareerContact from '../components/careers/CareerContact';
import {
  CAREER_OPENINGS,
} from '../data/careersContent';
import type { CareerCategoryType } from '../data/careersContent';
import './Careers.css';

export default function Careers() {
  const c = useSectionTheme();

  // Filter States
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedCampus, setSelectedCampus] = useState('All Campuses');
  const [selectedStatus, setSelectedStatus] = useState('All Statuses');

  // Filter Logic
  const filteredOpenings = useMemo(() => {
    return CAREER_OPENINGS.filter((item) => {
      // 1. Search Query
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase().trim();
        const matchesTitle = item.title.toLowerCase().includes(q);
        const matchesAdvt = item.advtNo.toLowerCase().includes(q);
        const matchesDept = item.dept.toLowerCase().includes(q);
        const matchesDesc = item.description.toLowerCase().includes(q);
        const matchesCampus = item.campus.toLowerCase().includes(q);
        const matchesCat = item.category.toLowerCase().includes(q);
        if (!matchesTitle && !matchesAdvt && !matchesDept && !matchesDesc && !matchesCampus && !matchesCat) {
          return false;
        }
      }

      // 2. Category Filter
      if (selectedCategory !== 'All Categories' && item.category !== selectedCategory) {
        return false;
      }

      // 3. Campus Filter
      if (selectedCampus !== 'All Campuses') {
        if (item.campus !== 'All Campuses' && item.campus !== selectedCampus) {
          return false;
        }
      }

      // 4. Status Filter
      if (selectedStatus !== 'All Statuses' && item.status !== selectedStatus) {
        return false;
      }

      return true;
    });
  }, [searchQuery, selectedCategory, selectedCampus, selectedStatus]);

  // Handler helpers
  const handleScrollToOpenings = () => {
    const el = document.getElementById('current-openings');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToDocuments = () => {
    const el = document.getElementById('documents');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCategoryFromHero = (category: string) => {
    setSelectedCategory(category);
    handleScrollToOpenings();
  };

  const handleSelectCategoryFromCards = (category: CareerCategoryType) => {
    setSelectedCategory(category);
    handleScrollToOpenings();
  };

  const handleSelectCampusFromCards = (campus: string) => {
    setSelectedCampus(campus);
    handleScrollToOpenings();
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All Categories');
    setSelectedCampus('All Campuses');
    setSelectedStatus('All Statuses');
  };

  return (
    <SectionPageLayout>
      <div className="careers-container">
        {/* 1. HERO SECTION */}
        <CareersHero
          onScrollToOpenings={handleScrollToOpenings}
          onScrollToDocuments={handleScrollToDocuments}
          onSelectCategory={handleSelectCategoryFromHero}
        />

        {/* 2. EXPLORE CAREER OPPORTUNITIES (3+3 GRID) */}
        <CareerCategories onSelectCategory={handleSelectCategoryFromCards} />

        {/* 3. CURRENT OPENINGS & RECRUITMENT NOTIFICATIONS */}
        <section className="careers-section" id="current-openings">
          <div className="careers-section-header">
            <span className="careers-subheading">Recruitment Desk</span>
            <h2 className="careers-heading" style={{ color: c.text }}>
              Current &amp; Active Recruitment Openings
            </h2>
            <p className="careers-intro" style={{ color: c.textMuted }}>
              Official employment notifications across RGUKT-AP. Every recruitment listing includes
              verified advertisement references, eligibility norms, downloadable notification PDFs,
              and official application links:
            </p>
          </div>

          {/* Filter Bar */}
          <CareerFilters
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            selectedCampus={selectedCampus}
            onCampusChange={setSelectedCampus}
            selectedStatus={selectedStatus}
            onStatusChange={setSelectedStatus}
            onReset={handleResetFilters}
            activeMatchesCount={filteredOpenings.length}
          />

          {/* Openings Card Listing */}
          <div className="careers-openings-list">
            {filteredOpenings.map((opening) => (
              <CareerOpeningCard key={opening.id} opening={opening} />
            ))}

            {filteredOpenings.length === 0 && (
              <div
                className="careers-empty-state"
                style={{
                  background: c.surface,
                  border: `1px solid ${c.border}`,
                }}
              >
                <span className="careers-empty-icon">📂</span>
                <h3 className="careers-empty-title" style={{ color: c.text }}>
                  No current recruitment openings match your selected filters.
                </h3>
                <p className="careers-empty-desc" style={{ color: c.textMuted }}>
                  Check the official recruitment documents below or try resetting your filters.
                </p>
                <button
                  type="button"
                  className="careers-btn-primary"
                  onClick={handleResetFilters}
                  style={{ marginTop: 8 }}
                >
                  <span>Reset All Filters ↺</span>
                </button>
              </div>
            )}
          </div>
        </section>

        {/* 4. FOUR-CAMPUS CAREER OPPORTUNITIES */}
        <CampusCareers onSelectCampus={handleSelectCampusFromCards} />

        {/* 5. RECRUITMENT PROCESS (6-STEP TIMELINE) */}
        <RecruitmentTimeline />

        {/* 6. IMPORTANT RECRUITMENT DOCUMENTS (OFFICIAL PDFS) */}
        <RecruitmentDocuments />

        {/* 7. ARCHIVED RECRUITMENTS */}
        <ArchivedRecruitment />

        {/* 8. WHY BUILD A CAREER AT RGUKT */}
        <CareerWhyRgukt />

        {/* 9. RECRUITMENT CONTACT & HELPDESK */}
        <CareerContact />
      </div>
    </SectionPageLayout>
  );
}
