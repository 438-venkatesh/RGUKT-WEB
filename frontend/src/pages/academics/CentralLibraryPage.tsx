import SectionPageLayout from '../../components/SectionPageLayout';
import {
  ContentSection,
  ServiceList,
  SourceLink,
  StatsGrid,
} from '../../components/AcademicsContentHelpers';
import { LIBRARY_SERVICES, LIBRARY_STATS } from '../../data/academicsContent';
import '../../components/AcademicsContentPage.css';
import '../../components/SectionPageLayout.css';

export default function CentralLibraryPage() {
  return (
    <SectionPageLayout>
      <h1 className="section-page-h1">Central Library</h1>
      <p className="section-page-intro">
        The Central Library system supports teaching, learning and research with print and digital collections across all RGUKT-AP campuses.
      </p>

      <StatsGrid stats={LIBRARY_STATS} />

      <ContentSection heading="Library Services">
        <ServiceList items={LIBRARY_SERVICES} />
      </ContentSection>

      <SourceLink url="https://www.rgukt.in/academics/central-library/" label="rgukt.in — Central Library" />
    </SectionPageLayout>
  );
}
