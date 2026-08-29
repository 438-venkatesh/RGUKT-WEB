import AboutSubLayout, { useAboutTheme } from '../../components/AboutSubLayout';
import AboutDocLink from '../../components/AboutDocLink';
import { ABOUT_DOCUMENTS, RGUKT_ACT_SUMMARY } from '../../data/aboutContent';
import '../../components/AboutSubPages.css';

export default function RguktActPage() {
  const c = useAboutTheme();
  const doc = ABOUT_DOCUMENTS.rguktAct;

  return (
    <AboutSubLayout>
      <h1 className="about-sub-h1">RGUKT Act, 2008</h1>
      <p className="about-sub-intro" style={{ color: c.textMuted }}>
        The founding legislation enacted by the Andhra Pradesh State Legislature defining RGUKT&apos;s mandate, governance, and admission policies.
      </p>

      <section style={{ marginBottom: 32 }}>
        <h2 className="about-sub-h2">Key Provisions</h2>
        <ul className="about-bullet-list" style={{ color: c.textMuted }}>
          {RGUKT_ACT_SUMMARY.map(item => <li key={item}>{item}</li>)}
        </ul>
      </section>

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
