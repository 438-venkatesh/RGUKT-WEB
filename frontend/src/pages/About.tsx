import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import AboutSubLayout, { useAboutTheme } from '../components/AboutSubLayout';
import { IconLeadership, ObjectiveIconDisplay } from '../components/AboutIcons';
import PersonSquareCard from '../components/PersonSquareCard';
import NavHubLinks from '../components/NavHubLinks';
import {
  ABOUT_CAMPUS_DIRECTORS,
  ABOUT_FOUNDING,
  ABOUT_LEADERSHIP,
  ABOUT_NAV,
  ABOUT_OBJECTIVES,
  CAMPUSES,
} from '../data/aboutContent';
import '../components/SectionPageLayout.css';
import './About.css';

const QUICK_LINKS = ABOUT_NAV.filter(item => item.href !== '/about');

function SectionHeading({ icon, title, c }: { icon: ReactNode; title: string; c: ReturnType<typeof useAboutTheme> }) {
  return (
    <div className="about-section-head">
      <span className="about-section-icon" style={{ background: `${c.accent}14`, color: c.accent }}>{icon}</span>
      <h2 className="about-sub-h2 about-section-title">{title}</h2>
    </div>
  );
}

export default function About() {
  const c = useAboutTheme();

  return (
    <AboutSubLayout>
      <h1 className="section-page-h1">About RGUKT</h1>

      {ABOUT_FOUNDING.map((para, i) => (
        <p key={i} className="about-body" style={{ color: c.textMuted }}>{para}</p>
      ))}

      {/* Four campuses — circular ring */}
      <section className="about-campus-ring-section" aria-label="RGUKT campuses">
        <div className="about-campus-ring">
          {CAMPUSES.map(campus => (
            <Link key={campus.slug} to={campus.path} className="about-campus-orbit">
              <span className="about-campus-orbit-img-wrap" style={{ borderColor: c.accent }}>
                <img src={campus.image} alt={campus.shortName} className="about-campus-orbit-img" />
              </span>
              <span className="about-campus-orbit-name" style={{ color: c.text }}>{campus.shortName}</span>
              <span className="about-campus-orbit-meta" style={{ color: c.textMuted }}>Est. {campus.established}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Educational Objectives — icon cards */}
      <section className="about-hub-section">
        <SectionHeading icon={<ObjectiveIconDisplay type="education" color={c.accent} />} title="Educational Objectives" c={c} />
        <div className="about-objectives-grid">
          {ABOUT_OBJECTIVES.map(obj => (
            <div key={obj.text} className="about-objective-card" style={{ background: c.surface, border: `1px solid ${c.border}` }}>
              <span className="about-objective-icon" style={{ background: `${c.accent}12`, color: c.accent }}>
                <ObjectiveIconDisplay type={obj.icon} color={c.accent} />
              </span>
              <p className="about-objective-text" style={{ color: c.textMuted }}>{obj.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* University Leadership — square photo cards */}
      <section className="about-hub-section">
        <SectionHeading icon={<IconLeadership color={c.accent} />} title="University Leadership" c={c} />
        <div className="about-people-grid about-people-grid-leadership">
          {ABOUT_LEADERSHIP.map(person => (
            <PersonSquareCard
              key={person.role}
              href={person.href}
              photo={person.photo}
              name={person.name}
              label={person.role}
              note={person.note}
            />
          ))}
        </div>

        <h3 className="about-directors-heading" style={{ color: c.text }}>Campus Directors</h3>
        <div className="about-people-grid about-directors-grid">
          {ABOUT_CAMPUS_DIRECTORS.map(d => (
            <PersonSquareCard
              key={d.campus}
              href={d.href}
              photo={d.photo}
              name={d.name}
              label={d.roleLabel}
              note={d.note}
              email={d.email}
            />
          ))}
        </div>
      </section>

      <NavHubLinks items={QUICK_LINKS} title="Also Visit" />
    </AboutSubLayout>
  );
}
