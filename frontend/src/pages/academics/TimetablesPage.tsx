import SectionPageLayout from '../../components/SectionPageLayout';
import {
  ContentSection,
  DocGrid,
  SourceLink,
} from '../../components/AcademicsContentHelpers';
import { TIMETABLES } from '../../data/academicsContent';
import '../../components/AcademicsContentPage.css';
import '../../components/SectionPageLayout.css';

export default function TimetablesPage() {
  const docs = TIMETABLES.map(t => ({
    title: t.title,
    url: t.file,
    size: t.size,
  }));

  return (
    <SectionPageLayout>
      <h1 className="section-page-h1">Timetables</h1>
      <p className="section-page-intro">
        Class timetables for each campus, published at the start of every semester. Download the PDF for your campus below.
      </p>

      <ContentSection heading="Campus Timetables">
        <DocGrid docs={docs} />
      </ContentSection>

      <SourceLink url="https://www.rgukt.in/academics/timetables/" label="rgukt.in — Timetables" />
    </SectionPageLayout>
  );
}
