import AboutSubLayout, { useAboutTheme } from '../../components/AboutSubLayout';
import AboutDocLink from '../../components/AboutDocLink';
import { ABOUT_DOCUMENTS } from '../../data/aboutContent';
import '../../components/AboutSubPages.css';

export default function AnnualReportPage() {
  const c = useAboutTheme();

  return (
    <AboutSubLayout>
      <h1 className="about-sub-h1">Annual Report</h1>
      <p className="about-sub-intro" style={{ color: c.textMuted }}>
        Official annual reports documenting RGUKT-AP&apos;s academic, administrative and financial performance.
      </p>
      <ul className="about-doc-list">
        {ABOUT_DOCUMENTS.annualReports.map(doc => (
          <li key={doc.file}>
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
          </li>
        ))}
      </ul>
    </AboutSubLayout>
  );
}
