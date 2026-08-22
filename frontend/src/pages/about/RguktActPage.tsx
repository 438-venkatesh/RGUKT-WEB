import AboutSubLayout, { useAboutTheme } from '../../components/AboutSubLayout';
import AboutDocLink from '../../components/AboutDocLink';
import { ABOUT_DOCUMENTS, RGUKT_ACT_SUMMARY } from '../../data/aboutContent';
import '../../components/AboutSubLayout.css';

export default function RguktActPage() {
  const c = useAboutTheme();
  const doc = ABOUT_DOCUMENTS.rguktAct;

  return (
    <AboutSubLayout>
      <h1 className="about-sub-h1">RGUKT Act, 2008</h1>
      <p className="about-sub-intro" style={{ color: c.textMuted }}>
        The RGUKT Act of 2008 is the founding legislation of the university, enacted by the Andhra Pradesh State Legislature. It defines the university's mandate, governance structure, campus jurisdictions, fee-free education guarantee, and reserved-seat policy for rural students.
      </p>

      <section style={{ marginBottom: 32 }}>
        <h2 className="about-sub-h2">Key Provisions</h2>
        <ul style={{ color: c.textMuted, lineHeight: 1.75, fontSize: 15, paddingLeft: '1.25rem' }}>
          {RGUKT_ACT_SUMMARY.map(item => <li key={item}>{item}</li>)}
        </ul>
      </section>

      <section>
        <h2 className="about-sub-h2">Download Full Act</h2>
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
      </section>
    </AboutSubLayout>
  );
}
