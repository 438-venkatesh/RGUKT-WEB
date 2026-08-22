import AboutSubLayout, { useAboutTheme } from '../../components/AboutSubLayout';
import AboutDocLink from '../../components/AboutDocLink';
import { ABOUT_DOCUMENTS, STRATEGIC_PLAN_PRIORITIES } from '../../data/aboutContent';
import '../../components/AboutSubLayout.css';

export default function StrategicPlanPage() {
  const c = useAboutTheme();
  const doc = ABOUT_DOCUMENTS.strategicPlan;

  return (
    <AboutSubLayout>
      <h1 className="about-sub-h1">Strategic Five Year Plan (2025–2029)</h1>
      <p className="about-sub-intro" style={{ color: c.textMuted }}>
        The Strategic Plan 2025–2029 outlines RGUKT-AP's priorities for expanding research capacity, upgrading campus infrastructure, deepening industry partnerships, and strengthening student outcomes across all four campuses.
      </p>

      <section style={{ marginBottom: 32 }}>
        <h2 className="about-sub-h2">Strategic Priorities</h2>
        <div className="plan-priority-grid">
          {STRATEGIC_PLAN_PRIORITIES.map(p => (
            <div key={p.title} className="plan-priority-card" style={{ background: c.surface, border: `1px solid ${c.border}` }}>
              <h3 className="plan-priority-title" style={{ color: c.accent }}>{p.title}</h3>
              <p style={{ color: c.textMuted, fontSize: 14, lineHeight: 1.6, margin: 0 }}>{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="about-sub-h2">Download</h2>
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
