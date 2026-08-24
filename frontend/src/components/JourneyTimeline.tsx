import type { FC } from 'react';
import type { UGJourneyStep } from '../data/undergraduatePrograms';
import type { ResearchMilestone } from '../data/researchPrograms';
import './JourneyTimeline.css';

interface UGTimelineProps {
  steps: UGJourneyStep[];
}

export const UGJourneyTimeline: FC<UGTimelineProps> = ({ steps }) => {
  return (
    <div className="timeline-wrap">
      <div className="timeline-stepper">
        {steps.map((s, idx) => (
          <div
            key={s.step}
            className={`timeline-card ${idx === 0 || idx === steps.length - 1 ? 'active-phase' : ''}`}
          >
            <div className="timeline-step-badge">
              <span className="timeline-number">{s.step}</span>
              <span className="timeline-duration">{s.duration}</span>
            </div>

            <p className="timeline-phase">{s.phase}</p>
            <h4 className="timeline-title">{s.title}</h4>
            <p className="timeline-desc">{s.description}</p>

            <div className="timeline-highlights">
              {s.highlights.map((h, i) => (
                <span key={i} className="timeline-highlight-item">
                  {h}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

interface ResearchTimelineProps {
  milestones: ResearchMilestone[];
}

export const ResearchMilestoneTimeline: FC<ResearchTimelineProps> = ({ milestones }) => {
  return (
    <div className="timeline-wrap">
      <div className="timeline-stepper timeline-stepper-5">
        {milestones.map((m: ResearchMilestone) => (
          <div key={m.stage} className="timeline-card">
            <div className="timeline-step-badge">
              <span className="timeline-number">STAGE {m.stage}</span>
              <span className="timeline-duration">{m.timeline}</span>
            </div>

            <h4 className="timeline-title">{m.title}</h4>
            <p className="timeline-desc">{m.description}</p>

            <div className="timeline-highlights">
              {m.keyRequirements.map((req: string, i: number) => (
                <span key={i} className="timeline-highlight-item">
                  {req}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UGJourneyTimeline;
