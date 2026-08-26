import { useMemo, useState } from 'react';
import SectionPageLayout from '../../components/SectionPageLayout';
import {
  ContentSection,
  DocGrid,
  SourceLink,
} from '../../components/AcademicsContentHelpers';
import { CAMPUSES, EXAM_SCHEDULES } from '../../data/academicsContent';
import '../../components/AcademicsSubLayout.css';
import '../../components/AcademicsContentPage.css';
import '../../components/SectionPageLayout.css';

const SEMESTERS = ['1', '2', '3', '4', '5', '6', '7', '8'];

export default function ExaminationSchedulesPage() {
  const [campus, setCampus] = useState<string>('All');
  const [semester, setSemester] = useState<string>('All');

  const filtered = useMemo(() => {
    return EXAM_SCHEDULES.filter(entry => {
      const campusMatch = campus === 'All' || entry.campus === campus;
      const semMatch = semester === 'All' || entry.semester === semester;
      return campusMatch && semMatch;
    });
  }, [campus, semester]);

  const docs = filtered.map(entry => ({
    title: entry.title,
    url: entry.file,
    size: entry.size,
  }));

  return (
    <SectionPageLayout>
      <h1 className="section-page-h1">Examination Schedules</h1>
      <p className="section-page-intro">
        Campus-wise end-semester examination schedules published each semester across all four RGUKT-AP campuses.
      </p>

      <ContentSection heading="Filter Schedules">
        <div className="acad-exam-filters">
          <div className="acad-filter-group">
            <label htmlFor="exam-campus" className="acad-filter-label">Campus</label>
            <select
              id="exam-campus"
              className="acad-select acad-select--exam"
              value={campus}
              onChange={e => setCampus(e.target.value)}
            >
              <option value="All">All campuses</option>
              {CAMPUSES.map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
          <div className="acad-filter-group">
            <label htmlFor="exam-semester" className="acad-filter-label">Semester</label>
            <select
              id="exam-semester"
              className="acad-select acad-select--exam"
              value={semester}
              onChange={e => setSemester(e.target.value)}
            >
              <option value="All">All semesters</option>
              {SEMESTERS.map(s => (
                <option key={s} value={s}>Semester {s}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="acad-exam-result">
          {docs.length > 0 ? (
            <DocGrid docs={docs} />
          ) : (
            <p className="acad-exam-empty">No schedules match the selected filters.</p>
          )}
        </div>
      </ContentSection>

      <SourceLink url="https://www.rgukt.in/academics/examination-schedules/" label="rgukt.in — Examination Schedules" />
    </SectionPageLayout>
  );
}
