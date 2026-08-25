import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDarkMode } from '../context/DarkModeContext';
import { useSectionTheme } from './SectionPageLayout';
import './CampusNetworkMap.css';

export type CampusNetworkNode = {
  id: string;
  name: string;
  shortName: string;
  tag: string;
  district: string;
  location: string;
  established: string;
  desc: string;
  route: string;
  image: string;
  x: number;
  y: number;
  labelOffset: {
    lineX: number;
    lineY: number;
    badgeX: number;
    badgeY: number;
    badgeWidth: number;
    badgeHeight: number;
  };
};

export const CAMPUS_NODES: CampusNetworkNode[] = [
  {
    id: 'srikakulam',
    name: 'RGUKT Srikakulam',
    shortName: 'SRIKAKULAM',
    tag: 'North Coast Campus',
    district: 'Srikakulam District',
    location: 'SM Puram, Etcherla Mandal, AP – 532410',
    established: '2016',
    desc: 'Empowering meritorious rural students across northern coastal Andhra Pradesh with cutting-edge engineering curriculum and modern infrastructure.',
    route: '/campus/srikakulam',
    image: '/campuses/srikakulam.jpg',
    x: 1047,
    y: 153,
    labelOffset: {
      lineX: 1105,
      lineY: 135,
      badgeX: 1105,
      badgeY: 115,
      badgeWidth: 170,
      badgeHeight: 40,
    },
  },
  {
    id: 'nuzvid',
    name: 'RGUKT Nuzvid',
    shortName: 'NUZVID',
    tag: 'Flagship Campus',
    district: 'Eluru / Krishna District',
    location: 'NH-9, Nuzvid, Eluru District, AP – 521202',
    established: '2008',
    desc: 'The 100+ acre founding flagship campus hosting premier computing labs, advanced material science centers, and the quantum computing research hub.',
    route: '/nuzvid',
    image: '/campuses/nuzvid.jpg',
    x: 616,
    y: 365,
    labelOffset: {
      lineX: 680,
      lineY: 345,
      badgeX: 680,
      badgeY: 325,
      badgeWidth: 165,
      badgeHeight: 40,
    },
  },
  {
    id: 'ongole',
    name: 'RGUKT Ongole',
    shortName: 'ONGOLE',
    tag: 'Central AP Campus',
    district: 'Prakasam District',
    location: 'Santhanuthalapadu, Ongole, AP – 523225',
    established: '2016',
    desc: 'Serving central Andhra Pradesh with modern engineering laboratories, smart digital classrooms, and active placement training programs.',
    route: '/campus/ongole',
    image: '/campuses/ongole.jpg',
    x: 504,
    y: 545,
    labelOffset: {
      lineX: 570,
      lineY: 525,
      badgeX: 570,
      badgeY: 505,
      badgeWidth: 165,
      badgeHeight: 40,
    },
  },
  {
    id: 'rk-valley',
    name: 'RGUKT RK Valley',
    shortName: 'RK VALLEY (Idupulapaya)',
    tag: 'Founding Valley Campus',
    district: 'YSR Kadapa District',
    location: 'Idupulapaya, Vempalli Mandal, AP – 516330',
    established: '2008',
    desc: 'The landmark founding campus in scenic Idupulapaya valley, offering comprehensive engineering departments and high-performance computing clusters.',
    route: '/campus/rk-valley',
    image: '/campuses/rk-valley.jpg',
    x: 325,
    y: 708,
    labelOffset: {
      lineX: 395,
      lineY: 690,
      badgeX: 395,
      badgeY: 670,
      badgeWidth: 205,
      badgeHeight: 40,
    },
  },
];

export default function CampusNetworkMap() {
  const c = useSectionTheme();
  const { dark } = useDarkMode();
  const [activeCampusId, setActiveCampusId] = useState<string>('nuzvid');

  const activeCampus = CAMPUS_NODES.find(n => n.id === activeCampusId) || CAMPUS_NODES[0];

  return (
    <section className={`campus-network-section ${dark ? 'dark-mode' : ''}`}>
      {/* Section Subtitle / Kicker */}
      <div className="cn-header-block">
        <p className="cn-kicker">University Network</p>
        <h2 className="cn-title" style={{ color: c.text }}>
          Four Campuses Across Andhra Pradesh
        </h2>
        <p className="cn-subtitle" style={{ color: c.textMuted }}>
          Click or hover on any campus marker to view location details, flagship attributes, and campus profiles.
        </p>
      </div>

      {/* Interactive Map Visual */}
      <div
        className="cn-map-container"
        style={{
          background: dark
            ? 'linear-gradient(135deg, #0f1c2c 0%, #152438 100%)'
            : 'linear-gradient(135deg, #F8FAFC 0%, #EFF6FF 100%)',
          border: `1px solid ${c.border}`,
        }}
      >
        <div className="cn-map-svg-wrap">
          <svg
            viewBox="0 0 1400 1000"
            className="cn-svg-map"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Interactive map of Andhra Pradesh highlighting RGUKT campus network: Srikakulam, Nuzvid, Ongole, and RK Valley"
          >
            <defs>
              {/* Subtle Drop Shadows */}
              <filter id="cnGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
              <filter id="badgeShadow" x="-10%" y="-10%" width="130%" height="140%">
                <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity={dark ? '0.5' : '0.15'} />
              </filter>
            </defs>

            {/* Base Andhra Pradesh Map Image Layer */}
            <image
              href="/maps/ap-base-map.png"
              x="0"
              y="0"
              width="1400"
              height="1000"
              className="cn-base-map-img"
              preserveAspectRatio="xMidYMid meet"
              opacity={dark ? 0.9 : 1}
            />

            {/* University Network Flow Curves */}
            <path
              d="M 1047 153 Q 830 250, 616 365 Q 555 455, 504 545 Q 410 625, 325 708"
              fill="none"
              className="cn-network-line-glow"
            />
            <path
              d="M 1047 153 Q 830 250, 616 365 Q 555 455, 504 545 Q 410 625, 325 708"
              fill="none"
              className="cn-network-line"
            />

            {/* 4 Interactive Campus Hub Nodes */}
            {CAMPUS_NODES.map(node => {
              const isActive = activeCampusId === node.id;
              const { badgeX, badgeY, badgeWidth, badgeHeight, lineX, lineY } = node.labelOffset;

              return (
                <g
                  key={node.id}
                  className={`cn-node-group ${isActive ? 'is-active' : ''}`}
                  onMouseEnter={() => setActiveCampusId(node.id)}
                  onClick={() => setActiveCampusId(node.id)}
                  tabIndex={0}
                  role="button"
                  aria-label={`${node.name}, ${node.district}`}
                  onKeyDown={e => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActiveCampusId(node.id);
                    }
                  }}
                >
                  {/* Leader Line */}
                  <line
                    x1={node.x}
                    y1={node.y}
                    x2={lineX}
                    y2={lineY}
                    className="cn-leader-line"
                    stroke={isActive ? (dark ? '#E8203C' : '#C8102E') : (dark ? '#64748B' : '#94A3B8')}
                    strokeWidth={isActive ? 2.5 : 1.6}
                  />

                  {/* Callout Badge Box */}
                  <g filter="url(#badgeShadow)">
                    <rect
                      x={badgeX}
                      y={badgeY}
                      width={badgeWidth}
                      height={badgeHeight}
                      rx="8"
                      className="cn-badge-bg"
                      fill={isActive ? (dark ? '#1E293B' : '#FFFFFF') : (dark ? 'rgba(30, 41, 59, 0.9)' : 'rgba(255, 255, 255, 0.92)')}
                      stroke={isActive ? (dark ? '#E8203C' : '#C8102E') : (dark ? 'rgba(148, 163, 184, 0.3)' : '#CBD5E1')}
                      strokeWidth={isActive ? 2 : 1}
                    />
                    <text
                      x={badgeX + 12}
                      y={badgeY + 18}
                      className="cn-badge-title"
                      fill={isActive ? (dark ? '#FFA4B0' : '#C8102E') : (dark ? '#F1F5F9' : '#0F172A')}
                    >
                      {node.shortName}
                    </text>
                    <text
                      x={badgeX + 12}
                      y={badgeY + 31}
                      className="cn-badge-sub"
                      fill={dark ? '#94A3B8' : '#64748B'}
                    >
                      {node.district}
                    </text>
                  </g>

                  {/* Pulsing Beacon Ring */}
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={isActive ? 22 : 16}
                    fill="none"
                    stroke={dark ? '#E8203C' : '#C8102E'}
                    className="cn-beacon-ring"
                    opacity={isActive ? 0.9 : 0.6}
                  />

                  {/* Solid Outer Ring */}
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={isActive ? 16 : 13}
                    fill={dark ? '#0F172A' : '#FFFFFF'}
                    stroke={dark ? '#E8203C' : '#C8102E'}
                    strokeWidth={isActive ? 3.5 : 2.5}
                    className="cn-pin-outer"
                  />

                  {/* Inner Core */}
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={isActive ? 8 : 6}
                    fill={dark ? '#E8203C' : '#C8102E'}
                    className="cn-pin-core"
                  />
                </g>
              );
            })}
          </svg>
        </div>

        {/* Floating Active Info Popover on Desktop / Responsive Bottom Box */}
        {activeCampus && (
          <div
            className="cn-popover-card"
            style={{
              background: dark ? 'rgba(15, 28, 44, 0.92)' : 'rgba(255, 255, 255, 0.94)',
              border: `1px solid ${dark ? 'rgba(232, 32, 60, 0.4)' : '#FDA4AF'}`,
            }}
          >
            <span className="cn-popover-tag">{activeCampus.tag}</span>
            <h3 className="cn-popover-title" style={{ color: c.text }}>
              {activeCampus.name}
            </h3>
            <p className="cn-popover-loc" style={{ color: c.accent }}>
              📍 {activeCampus.location}
            </p>
            <p className="cn-popover-desc" style={{ color: c.textMuted }}>
              {activeCampus.desc}
            </p>
            <Link to={activeCampus.route} className="cn-popover-btn" style={{ color: c.accent }}>
              Explore Campus Profile →
            </Link>
          </div>
        )}
      </div>

      {/* 4 Synchronized Campus Quick Cards */}
      <div className="cn-cards-grid">
        {CAMPUS_NODES.map(node => {
          const isActive = activeCampusId === node.id;
          return (
            <Link
              key={node.id}
              to={node.route}
              className={`cn-campus-card ${isActive ? 'is-active' : ''}`}
              style={{
                background: c.surface,
                border: `1px solid ${isActive ? c.accent : c.border}`,
              }}
              onMouseEnter={() => setActiveCampusId(node.id)}
            >
              <div className="cn-card-thumb-wrap">
                <img src={node.image} alt={node.name} className="cn-card-thumb" />
                <span className="cn-card-tag">{node.tag}</span>
              </div>
              <div className="cn-card-body">
                <h3 className="cn-card-title" style={{ color: c.text }}>
                  {node.name}
                </h3>
                <p className="cn-card-district" style={{ color: c.accent }}>
                  {node.district}
                </p>
                <p className="cn-card-desc" style={{ color: c.textMuted }}>
                  {node.desc}
                </p>
                <span className="cn-card-action">
                  Explore Campus →
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
