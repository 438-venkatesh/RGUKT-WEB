import { Link } from 'react-router-dom';
import AboutSubLayout, { useAboutTheme } from '../components/AboutSubLayout';
import { ABOUT_CAMPUS_DIRECTORS } from '../data/aboutContent';
import './OrgChart.css';

export default function OrgChart() {
  const c = useAboutTheme();

  return (
    <AboutSubLayout>
      <h1 className="about-sub-h1">Organization Chart</h1>
      <p className="about-sub-intro" style={{ color: c.textMuted }}>
        Administrative hierarchy of Rajiv Gandhi University of Knowledge Technologies, Andhra Pradesh.
      </p>

      <div className="orgchart-wrap">
        <div className="orgchart-header">
          <button
            type="button"
            className="orgchart-print-btn no-print"
            style={{ border: `1px solid ${c.primary}`, color: c.primary }}
            onClick={() => window.print()}
          >
            Print
          </button>
        </div>

        <div className="orgchart-tree">
          <OrgTier
            people={[{ name: 'Prof. (Dr.) Kotha Madhu Murthy', role: 'Chancellor' }]}
            c={c}
            hasLine
          />
          <OrgTier
            people={[{ name: 'Prof. Maddali Lakshmi Narayana Rao', role: 'Vice-Chancellor' }]}
            c={c}
            hasLine
          />
          <OrgTier
            people={[{ name: 'Dr. Amarendra Kumar Sandra', role: 'Registrar' }]}
            c={c}
            hasLine
          />
          <OrgTier
            people={ABOUT_CAMPUS_DIRECTORS.map(d => ({
              name: d.name,
              role: d.roleLabel,
            }))}
            c={c}
            hasLine={false}
          />
        </div>
      </div>

      <p className="about-sub-intro" style={{ color: c.textMuted, marginTop: 24 }}>
        For detailed profiles, visit{' '}
        <Link to="/administration/chancellor" style={{ color: c.accent }}>Administration</Link>.
      </p>
    </AboutSubLayout>
  );
}

function OrgTier({
  people,
  c,
  hasLine,
}: {
  people: { name: string; role: string }[];
  c: ReturnType<typeof useAboutTheme>;
  hasLine: boolean;
}) {
  return (
    <div className="orgchart-tier-wrap">
      <div className="orgchart-row">
        {people.map(p => (
          <div key={p.role} className="person-card" style={{ background: c.surface, border: `1px solid ${c.border}` }}>
            <div className="person-name" style={{ color: c.text }}>{p.name}</div>
            <div className="person-role" style={{ color: c.textMuted }}>{p.role}</div>
          </div>
        ))}
      </div>
      {hasLine && (
        <div className="orgchart-connector">
          <div className="orgchart-stem" style={{ background: c.border }} />
        </div>
      )}
    </div>
  );
}
