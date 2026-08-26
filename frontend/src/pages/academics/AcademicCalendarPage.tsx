import SectionPageLayout from '../../components/SectionPageLayout';
import {
  CalendarTable,
  ContentSection,
  DocGrid,
  SourceLink,
} from '../../components/AcademicsContentHelpers';
import { ACADEMICS_DOCUMENTS, CALENDAR_DATES } from '../../data/academicsContent';
import '../../components/AcademicsContentPage.css';
import '../../components/SectionPageLayout.css';

export default function AcademicCalendarPage() {
  const docs = ACADEMICS_DOCUMENTS.calendar.map(d => ({
    title: d.title,
    url: d.file,
    size: d.size,
  }));

  return (
    <SectionPageLayout>
      <h1 className="section-page-h1">Academic Calendar</h1>
      <p className="section-page-intro">
        Key academic dates for the current and upcoming semesters across all RGUKT-AP campuses.
      </p>

      <ContentSection heading="Important Dates">
        <CalendarTable rows={CALENDAR_DATES} />
      </ContentSection>

      <ContentSection heading="Download Calendar">
        <DocGrid docs={docs} />
      </ContentSection>

      <SourceLink url="https://www.rgukt.in/academics/calendar/" label="rgukt.in — Academic Calendar" />
    </SectionPageLayout>
  );
}
