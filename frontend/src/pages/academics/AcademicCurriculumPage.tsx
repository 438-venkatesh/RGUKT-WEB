import SectionPageLayout from '../../components/SectionPageLayout';
import {
  ContentSection,
  DocGrid,
  SourceLink,
} from '../../components/AcademicsContentHelpers';
import { ACADEMICS_DOCUMENTS } from '../../data/academicsContent';
import '../../components/AcademicsContentPage.css';
import '../../components/SectionPageLayout.css';

export default function AcademicCurriculumPage() {
  const docs = ACADEMICS_DOCUMENTS.curriculum.map(d => ({
    title: d.title,
    url: d.file,
    size: d.size,
  }));

  return (
    <SectionPageLayout>
      <h1 className="section-page-h1">Academic Curriculum</h1>
      <p className="section-page-intro">
        Syllabus booklets and curriculum frameworks for PUC, B.Tech and M.Tech programmes at RGUKT-AP.
      </p>

      <ContentSection heading="Curriculum Documents">
        <DocGrid docs={docs} />
      </ContentSection>

      <SourceLink url="https://www.rgukt.in/academics/curriculum/" label="rgukt.in — Academic Curriculum" />
    </SectionPageLayout>
  );
}
