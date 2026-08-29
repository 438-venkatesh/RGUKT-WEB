import AboutSubLayout, { useAboutTheme } from '../../components/AboutSubLayout';
import AboutDocLink from '../../components/AboutDocLink';
import { ABOUT_DOCUMENTS } from '../../data/aboutContent';
import '../../components/AboutSubPages.css';

export default function StrategicPlanPage() {
  const c = useAboutTheme();
  const doc = ABOUT_DOCUMENTS.strategicPlan;

  return (
    <AboutSubLayout>
      <h1 className="about-sub-h1">Strategic Five Year Plan (2025–2029)</h1>
      <p className="about-sub-intro" style={{ color: c.textMuted }}>
        The Strategic Five Year Plan outlines RGUKT-AP&apos;s priorities for academic excellence, research, infrastructure, and student outcomes across all four campuses.
      </p>
      <AboutDocLink
        title={doc.title}
        file={doc.file}
        size={doc.size}
        surface={c.surface}
        border={c.border}
        text={c.text}
        textMuted={c.textMuted}
        accent={c.primary}
      />
    </AboutSubLayout>
  );
}
