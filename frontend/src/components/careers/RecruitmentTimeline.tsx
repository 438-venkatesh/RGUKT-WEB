import { useSectionTheme } from '../SectionPageLayout';
import { RECRUITMENT_PROCESS_STEPS } from '../../data/careersContent';

export default function RecruitmentTimeline() {
  const c = useSectionTheme();

  return (
    <section className="careers-section" id="process">
      <div className="careers-section-header">
        <span className="careers-subheading">Institutional Methodology</span>
        <h2 className="careers-heading" style={{ color: c.text }}>
          How Recruitment Works at RGUKT
        </h2>
        <p className="careers-intro" style={{ color: c.textMuted }}>
          RGUKT follows an autonomous, transparent, and merit-centered selection process in accordance
          with the RGUKT Act 18 of 2008, UGC Regulations, AICTE guidelines, and Government of Andhra
          Pradesh reservation policies:
        </p>
      </div>

      <div className="careers-timeline-grid">
        {RECRUITMENT_PROCESS_STEPS.map((step) => (
          <div
            key={step.step}
            className="careers-timeline-card"
            style={{
              border: `1px solid ${c.border}`,
            }}
          >
            <div className="careers-timeline-header">
              <span
                className="careers-timeline-step"
                style={{
                  background: 'rgba(200,16,46,0.12)',
                  color: c.accent,
                }}
              >
                STEP {step.step}
              </span>
              <span className="careers-timeline-icon">{step.icon}</span>
            </div>

            <h3 className="careers-timeline-title" style={{ color: c.text }}>
              {step.title}
            </h3>

            <span className="careers-timeline-subtitle" style={{ color: c.accent }}>
              {step.subtitle}
            </span>

            <p className="careers-timeline-desc" style={{ color: c.textMuted }}>
              {step.description}
            </p>
          </div>
        ))}
      </div>

      <div
        className="careers-process-notice"
        style={{
          background: c.surface2,
          border: `1px solid ${c.border}`,
          borderLeft: `4px solid ${c.accent}`,
        }}
      >
        <span className="careers-notice-icon">ℹ️</span>
        <p className="careers-notice-text" style={{ color: c.textMuted }}>
          <strong style={{ color: c.text }}>Statutory Notice: </strong>
          The precise recruitment methodology, weightages for screening tests, API criteria, and
          interview procedures are defined separately in each official recruitment notification issued
          by the University and the AP Higher Education Department.
        </p>
      </div>
    </section>
  );
}
