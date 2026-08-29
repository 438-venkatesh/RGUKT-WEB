import AboutSubLayout, { useAboutTheme } from '../../components/AboutSubLayout';
import { BEST_PRACTICES } from '../../data/aboutContent';
import '../../components/AboutSubPages.css';

export default function BestPracticesPage() {
  const c = useAboutTheme();

  return (
    <AboutSubLayout>
      <h1 className="about-sub-h1">Best Practices</h1>
      <p className="about-sub-intro" style={{ color: c.textMuted }}>
        RGUKT has adopted best practices focused on innovation in pedagogy, technology-driven learning, student welfare, research, and industry collaboration.
      </p>
      <div className="practices-about-list">
        {BEST_PRACTICES.map((p, i) => (
          <article key={p.title} className="practice-about-item" style={{ borderBottom: `1px solid ${c.border}` }}>
            <span className="practice-about-num" style={{ color: c.accent }}>{String(i + 1).padStart(2, '0')}</span>
            <div>
              <h2 className="about-sub-h2">{p.title}</h2>
              <ul className="about-bullet-list" style={{ color: c.textMuted }}>
                {p.points.map(point => <li key={point}>{point}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </AboutSubLayout>
  );
}
