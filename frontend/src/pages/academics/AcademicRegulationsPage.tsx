import SectionPageLayout from '../../components/SectionPageLayout';
import {
  ContentSection,
  DocGrid,
  SourceLink,
} from '../../components/AcademicsContentHelpers';
import { ACADEMICS_DOCUMENTS } from '../../data/academicsContent';
import '../../components/AcademicsContentPage.css';
import '../../components/SectionPageLayout.css';

export default function AcademicRegulationsPage() {
  const docs = ACADEMICS_DOCUMENTS.regulations.map(d => ({
    title: d.title,
    url: d.file,
    size: d.size,
  }));

  return (
    <SectionPageLayout>
      <h1 className="section-page-h1">Academic Regulations</h1>
      <p className="section-page-intro">
        Official academic regulations governing B.Tech, M.Tech and promotion policies at RGUKT-AP.
      </p>

      <ContentSection heading="Regulations & Policies">
        <DocGrid docs={docs} />
      </ContentSection>

      <SourceLink url="https://www.rgukt.in/academics/regulations/" label="rgukt.in — Academic Regulations" />
    </SectionPageLayout>
  );
}
