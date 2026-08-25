import { useSectionTheme } from '../SectionPageLayout';
import { WHY_RGUKT_CAREER } from '../../data/careersContent';

export default function CareerWhyRgukt() {
  const c = useSectionTheme();

  return (
    <section className="careers-section" id="why-rgukt">
      <div className="careers-section-header">
        <div className="careers-why-header-row">
          <div>
            <span className="careers-subheading">Institutional Advantages</span>
            <h2 className="careers-heading" style={{ color: c.text }}>
              Why Build an Academic Career at RGUKT?
            </h2>
          </div>
          <span className="careers-scroll-hint" style={{ color: c.textMuted }}>
            Swipe / Scroll horizontally ➔
          </span>
        </div>
        <p className="careers-intro" style={{ color: c.textMuted }}>
          Joining the faculty or staff at RGUKT offers a unique opportunity to shape the future of
          gifted youth while advancing your research and professional leadership within a supportive
          residential ecosystem:
        </p>
      </div>

      {/* ONE HORIZONTAL ROW WITH HORIZONTAL SCROLLING */}
      <div className="careers-why-scroll-container">
        <div className="careers-why-scroll-track">
          {WHY_RGUKT_CAREER.map((item, index) => (
            <div
              key={item.title}
              className="careers-why-compact-card"
              style={{
                border: `1px solid ${c.border}`,
              }}
            >
              <div className="careers-why-card-top">
                <div
                  className="careers-card-icon"
                  style={{ background: 'rgba(200,16,46,0.1)', color: c.accent }}
                >
                  {item.icon}
                </div>
                <span className="careers-why-index" style={{ color: c.accent }}>
                  0{index + 1}
                </span>
              </div>

              <h3 className="careers-card-title" style={{ color: c.text }}>
                {item.title}
              </h3>

              <p className="careers-card-text" style={{ color: c.textMuted }}>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
