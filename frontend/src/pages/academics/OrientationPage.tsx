import SectionPageLayout from '../../components/SectionPageLayout';
import {
  ContentSection,
  ServiceList,
  SourceLink,
} from '../../components/AcademicsContentHelpers';
import { ORIENTATION_COMPONENTS } from '../../data/academicsContent';
import '../../components/AcademicsContentPage.css';
import '../../components/SectionPageLayout.css';

export default function OrientationPage() {
  return (
    <SectionPageLayout>
      <h1 className="section-page-h1">Orientation Programme</h1>
      <p className="section-page-intro">
        The orientation programme welcomes newly admitted students to campus life and academic expectations at RGUKT-AP.
      </p>

      <ContentSection heading="Orientation Components">
        <ServiceList items={ORIENTATION_COMPONENTS} />
      </ContentSection>

      <SourceLink url="https://www.rgukt.in/academics/orientation/" label="rgukt.in — Orientation Programme" />
    </SectionPageLayout>
  );
}
