import AboutSubLayout, { useAboutTheme } from '../../components/AboutSubLayout';
import { VMQ_CARDS } from '../../data/aboutContent';
import '../../components/AboutSubLayout.css';

export default function VisionMissionPage() {
  const c = useAboutTheme();

  return (
    <AboutSubLayout>
      <h1 className="about-sub-h1">Vision, Mission &amp; Quality Policy</h1>
      <p className="about-sub-intro" style={{ color: c.textMuted }}>
        RGUKT-AP's guiding principles for empowering rural youth through excellence in technical education and governance.
      </p>
      <div className="vmq-grid-about">
        {VMQ_CARDS.map(card => (
          <div
            key={card.title}
            className="vmq-card-about"
            style={{ background: c.surface, border: `1px solid ${c.border}` }}
          >
            <div className="vmq-bar-about" style={{ background: c.accent }} />
            <h2 className="about-sub-h2">{card.title}</h2>
            <p style={{ color: c.textMuted, fontSize: 15, lineHeight: 1.65, margin: 0 }}>{card.body}</p>
          </div>
        ))}
      </div>
    </AboutSubLayout>
  );
}
