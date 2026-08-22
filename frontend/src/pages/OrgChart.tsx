import { useDarkMode } from '../context/DarkModeContext';
import AboutSubLayout from '../components/AboutSubLayout';
import './OrgChart.css';

interface Person { name: string; role: string; }
interface Tier { people: Person[]; hasLine: boolean; }

const TIERS: Tier[] = [
  {
    people: [{ name: 'Governor of AP', role: 'Chancellor (Ex-Officio)' }],
    hasLine: true,
  },
  {
    people: [{ name: 'Prof. K. Madhu Murthy', role: 'Vice Chancellor' }],
    hasLine: true,
  },
  {
    people: [{ name: 'Dr. B. Narsimha', role: 'Registrar' }],
    hasLine: true,
  },
  {
    people: [
      { name: 'Nuzvid', role: 'Campus Director' },
      { name: 'RK Valley', role: 'Campus Director' },
      { name: 'Srikakulam', role: 'Campus Director' },
      { name: 'Ongole', role: 'Campus Director' },
    ],
    hasLine: false,
  },
];

export default function OrgChart() {
  const { dark } = useDarkMode();

  const c = dark
    ? {
        primary: '#0B141F',
        surface: '#112030',
        surface2: '#18293c',
        text: '#C0D4EE',
        textMuted: 'rgba(192,212,238,0.65)',
        border: 'rgba(192,212,238,0.18)',
      }
    : {
        primary: '#0A2744',
        surface: '#FFFFFF',
        surface2: '#E8EEF8',
        text: '#18243A',
        textMuted: '#526070',
        border: '#C5D3E8',
      };

  return (
    <AboutSubLayout>
      <h1 className="about-sub-h1">Organization Chart</h1>
      <p className="about-sub-intro" style={{ color: c.textMuted }}>
        Administrative hierarchy of Rajiv Gandhi University of Knowledge Technologies, Andhra Pradesh.
      </p>

      <div className="orgchart-wrap">
        <div className="orgchart-header">
          <button
            className="orgchart-print-btn no-print"
            style={{ border: `1px solid ${c.primary}`, color: c.primary }}
            onClick={() => window.print()}
          >
            <PrintIcon stroke={c.primary} />
            Print
          </button>
        </div>

        <div className="orgchart-tree">
          {TIERS.map((tier, ti) => (
            <div key={ti} className="orgchart-tier-wrap">
              <div className="orgchart-row">
                {tier.people.map((p, pi) => (
                  <PersonCard key={pi} person={p} c={c} />
                ))}
              </div>

              {tier.hasLine && (
                <div className="orgchart-connector">
                  <div className="orgchart-stem" style={{ background: c.border }} />
                  {TIERS[ti + 1] && TIERS[ti + 1].people.length > 1 && (
                    <div
                      className="orgchart-hbar"
                      style={{
                        background: c.border,
                        width: `calc(${TIERS[ti + 1].people.length} * 180px - 20px)`,
                      }}
                    />
                  )}
                  {TIERS[ti + 1] && TIERS[ti + 1].people.length > 1 && (
                    <div
                      className="orgchart-drops"
                      style={{ width: `calc(${TIERS[ti + 1].people.length} * 180px - 20px)` }}
                    >
                      {TIERS[ti + 1].people.map((_, i) => (
                        <div key={i} className="orgchart-drop" style={{ background: c.border }} />
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </AboutSubLayout>
  );
}

function PersonCard({
  person,
  c,
}: {
  person: Person;
  c: { surface: string; surface2: string; border: string; text: string; textMuted: string };
}) {
  return (
    <div className="person-card" style={{ background: c.surface, border: `1px solid ${c.border}` }}>
      <div className="person-avatar" style={{ background: c.surface2 }}>
        <UserIcon color={c.textMuted} />
      </div>
      <div className="person-name" style={{ color: c.text }}>{person.name}</div>
      <div className="person-role" style={{ color: c.textMuted }}>{person.role}</div>
    </div>
  );
}

function UserIcon({ color }: { color: string }) {
  return (
    <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
      <circle cx={12} cy={7} r={4} />
    </svg>
  );
}

function PrintIcon({ stroke }: { stroke: string }) {
  return (
    <svg width={15} height={15} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 6 2 18 2 18 9" />
      <path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2" />
      <rect x={6} y={14} width={12} height={8} />
    </svg>
  );
}
