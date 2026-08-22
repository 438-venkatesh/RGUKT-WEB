import AboutSubLayout, { useAboutTheme } from '../../components/AboutSubLayout';
import { BEST_PRACTICES } from '../../data/aboutContent';
import '../../components/AboutSubLayout.css';

export default function BestPracticesPage() {
  const c = useAboutTheme();

  return (
    <AboutSubLayout>
      <h1 className="about-sub-h1">Best Practices</h1>
      <p className="about-sub-intro" style={{ color: c.textMuted }}>
        RGUKT-AP's educational model goes beyond curriculum — it is built around practices that remove barriers and create conditions for every student to excel.
      </p>
      <div className="practices-about-list">
        {BEST_PRACTICES.map((p, i) => (
          <div key={p.title} className="practice-about-item" style={{ borderBottom: `1px solid ${c.border}` }}>
            <span className="practice-about-num" style={{ color: c.accent }}>{String(i + 1).padStart(2, '0')}</span>
            <div>
              <h2 className="about-sub-h2">{p.title}</h2>
              <p style={{ color: c.textMuted, fontSize: 15, lineHeight: 1.65, margin: 0 }}>{p.body}</p>
            </div>
          </div>
        ))}
      </div>
    </AboutSubLayout>
  );
}
