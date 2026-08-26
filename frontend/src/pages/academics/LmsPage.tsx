import SectionPageLayout from '../../components/SectionPageLayout';
import {
  ContentSection,
  PortalGrid,
  ServiceList,
  SourceLink,
  IconTech,
} from '../../components/AcademicsContentHelpers';
import { LMS_FEATURES, LMS_PORTALS } from '../../data/academicsContent';
import '../../components/AcademicsContentPage.css';
import '../../components/SectionPageLayout.css';

export default function LmsPage() {
  return (
    <SectionPageLayout>
      <h1 className="section-page-h1">Learning Management System</h1>
      <p className="section-page-intro">
        Campus learning management systems provide course materials, assignments, discussion forums and grade tracking for students and faculty.
      </p>

      <ContentSection heading="LMS Features" icon={<IconTech size={20} />}>
        <ServiceList items={LMS_FEATURES} />
      </ContentSection>

      <ContentSection heading="Campus LMS Portals">
        <PortalGrid portals={LMS_PORTALS} />
      </ContentSection>

      <SourceLink url="https://www.rgukt.in/academics/lms/" label="rgukt.in — Learning Management System" />
    </SectionPageLayout>
  );
}
