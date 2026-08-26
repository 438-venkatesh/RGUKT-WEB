import SectionPageLayout from '../../components/SectionPageLayout';
import {
  ContentSection,
  ScholarshipGrid,
  SourceLink,
} from '../../components/AcademicsContentHelpers';
import { SCHOLARSHIPS } from '../../data/academicsContent';
import '../../components/AcademicsContentPage.css';
import '../../components/SectionPageLayout.css';

export default function ScholarshipsPage() {
  return (
    <SectionPageLayout>
      <h1 className="section-page-h1">Scholarships & Financial Assistance</h1>
      <p className="section-page-intro">
        Financial assistance schemes for eligible students at RGUKT-AP, including government scholarships and institutional support.
      </p>

      <ContentSection heading="Available Schemes">
        <ScholarshipGrid scholarships={SCHOLARSHIPS} />
      </ContentSection>

      <SourceLink url="https://www.rgukt.in/academics/scholarships/" label="rgukt.in — Scholarships" />
    </SectionPageLayout>
  );
}
