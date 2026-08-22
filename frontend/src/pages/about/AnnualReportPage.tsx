import AboutSubLayout, { useAboutTheme } from '../../components/AboutSubLayout';
import AboutDocLink from '../../components/AboutDocLink';
import { ABOUT_DOCUMENTS } from '../../data/aboutContent';
import '../../components/AboutSubLayout.css';

export default function AnnualReportPage() {
  const c = useAboutTheme();

  return (
    <AboutSubLayout>
      <h1 className="about-sub-h1">Annual Report</h1>
      <p className="about-sub-intro" style={{ color: c.textMuted }}>
        Official annual reports documenting RGUKT-AP's academic, administrative and financial performance submitted to the Government of Andhra Pradesh and regulatory bodies.
      </p>

      <section>
        <h2 className="about-sub-h2">Download Reports</h2>
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
      </section>

      <section style={{ marginTop: 32 }}>
        <h2 className="about-sub-h2">Report Contents</h2>
        <ul style={{ color: c.textMuted, lineHeight: 1.75, fontSize: 15, paddingLeft: '1.25rem' }}>
          <li>Vice Chancellor's report and campus highlights</li>
          <li>Academic programmes, admissions and examination statistics</li>
          <li>Research publications, MoUs and funded projects</li>
          <li>Financial statements and audit summary</li>
          <li>IQAC and NAAC quality assurance activities</li>
        </ul>
      </section>
    </AboutSubLayout>
  );
}
