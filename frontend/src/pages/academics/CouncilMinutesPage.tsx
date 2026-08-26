import SectionPageLayout from '../../components/SectionPageLayout';
import {
  ContentSection,
  DocGrid,
  SourceLink,
} from '../../components/AcademicsContentHelpers';
import { ACADEMICS_DOCUMENTS } from '../../data/academicsContent';
import '../../components/AcademicsContentPage.css';
import '../../components/SectionPageLayout.css';

export default function CouncilMinutesPage() {
  const docs = ACADEMICS_DOCUMENTS.councilMinutes.map(d => ({
    title: d.title,
    url: d.file,
    size: d.size,
  }));

  return (
    <SectionPageLayout>
      <h1 className="section-page-h1">Council Minutes</h1>
      <p className="section-page-intro">
        Minutes of Academic Council and Governing Council meetings of RGUKT-AP.
      </p>

      <ContentSection heading="Meeting Minutes">
        <DocGrid docs={docs} />
      </ContentSection>

      <SourceLink url="https://www.rgukt.in/academics/council-minutes/" label="rgukt.in — Council Minutes" />
    </SectionPageLayout>
  );
}
