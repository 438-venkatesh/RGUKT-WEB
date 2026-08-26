import SectionPageLayout from '../../components/SectionPageLayout';
import {
  ContentSection,
  SourceLink,
} from '../../components/AcademicsContentHelpers';
import { SUMMER_PROGRAMMES } from '../../data/academicsContent';
import '../../components/AcademicsContentPage.css';
import '../../components/SectionPageLayout.css';

export default function SummerProgrammesPage() {
  return (
    <SectionPageLayout>
      <h1 className="section-page-h1">Summer Programmes</h1>
      <p className="section-page-intro">
        Summer programmes at RGUKT-AP include certification drives, internships, remedial coaching and faculty development.
      </p>

      {SUMMER_PROGRAMMES.map(programme => (
        <ContentSection key={programme.title} heading={programme.title}>
          <p className="section-page-intro" style={{ marginBottom: 0 }}>{programme.body}</p>
        </ContentSection>
      ))}

      <SourceLink url="https://www.rgukt.in/academics/summer/" label="rgukt.in — Summer Programmes" />
    </SectionPageLayout>
  );
}
