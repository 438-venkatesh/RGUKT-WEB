import NuzvidAboutPageLayout from './NuzvidAboutPageLayout';
import { DATA_EDUCATION_SYSTEM } from '../../../data/nuzvidAboutData';

export default function NuzvidEducationSystemPage() {
  return (
    <NuzvidAboutPageLayout data={DATA_EDUCATION_SYSTEM}>
      {/* ─────────────────────────────────────────────────────────
          INTEGRATED 6-YEAR ACADEMIC PROGRESSION (4 Linear Gradient Cards)
          ───────────────────────────────────────────────────────── */}
      <div
        style={{
          background: 'linear-gradient(135deg, #0A2744 0%, #163B66 100%)',
          borderRadius: '20px',
          padding: '32px 28px',
          color: '#FFFFFF',
          marginBottom: '52px',
          boxShadow: '0 8px 24px rgba(10, 39, 68, 0.12)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <div
            style={{
              fontSize: '12px',
              fontWeight: 800,
              color: '#00F0FF',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              marginBottom: '6px',
            }}
          >
            Academic Journey
          </div>
          <h3
            style={{
              fontSize: '22px',
              fontWeight: 800,
              margin: 0,
              fontFamily: "'Playfair Display', Georgia, serif",
              color: '#FFFFFF',
              letterSpacing: '-0.01em',
            }}
          >
            The 6-Year Integrated Academic Progression
          </h3>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
            gap: '18px',
            alignItems: 'stretch',
          }}
        >
          {/* Card 1: Stage 01 */}
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.28) 0%, rgba(30, 58, 138, 0.6) 100%)',
              border: '1px solid rgba(56, 189, 248, 0.5)',
              borderRadius: '16px',
              padding: '22px 18px',
              boxShadow: '0 4px 14px rgba(0, 0, 0, 0.18)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: 'rgba(56, 189, 248, 0.25)',
                border: '1px solid rgba(56, 189, 248, 0.5)',
                borderRadius: '999px',
                padding: '3px 10px',
                fontSize: '11px',
                fontWeight: 800,
                color: '#7DD3FC',
                width: 'fit-content',
                marginBottom: '10px',
                letterSpacing: '0.05em',
              }}
            >
              STAGE 01
            </div>
            <div style={{ fontSize: '17px', fontWeight: 700, color: '#FFFFFF', marginBottom: '8px' }}>
              10th Class (SSC)
            </div>
            <div style={{ fontSize: '13px', color: '#E2E8F0', lineHeight: 1.55 }}>
              Statewide merit-based selection from rural schools across Andhra Pradesh.
            </div>
          </div>

          {/* Card 2: Stage 02 */}
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.28) 0%, rgba(88, 28, 135, 0.6) 100%)',
              border: '1px solid rgba(192, 132, 252, 0.5)',
              borderRadius: '16px',
              padding: '22px 18px',
              boxShadow: '0 4px 14px rgba(0, 0, 0, 0.18)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: 'rgba(192, 132, 252, 0.25)',
                border: '1px solid rgba(192, 132, 252, 0.5)',
                borderRadius: '999px',
                padding: '3px 10px',
                fontSize: '11px',
                fontWeight: 800,
                color: '#E9D5FF',
                width: 'fit-content',
                marginBottom: '10px',
                letterSpacing: '0.05em',
              }}
            >
              STAGE 02
            </div>
            <div style={{ fontSize: '17px', fontWeight: 700, color: '#FFFFFF', marginBottom: '8px' }}>
              2-Year PUC (+2)
            </div>
            <div style={{ fontSize: '13px', color: '#E2E8F0', lineHeight: 1.55 }}>
              Rigorous foundation in Mathematics, Physics, Chemistry, Life Sciences & IT.
            </div>
          </div>

          {/* Card 3: Stage 03 */}
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.28) 0%, rgba(131, 24, 67, 0.6) 100%)',
              border: '1px solid rgba(244, 114, 182, 0.5)',
              borderRadius: '16px',
              padding: '22px 18px',
              boxShadow: '0 4px 14px rgba(0, 0, 0, 0.18)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: 'rgba(244, 114, 182, 0.25)',
                border: '1px solid rgba(244, 114, 182, 0.5)',
                borderRadius: '999px',
                padding: '3px 10px',
                fontSize: '11px',
                fontWeight: 800,
                color: '#FBCFE8',
                width: 'fit-content',
                marginBottom: '10px',
                letterSpacing: '0.05em',
              }}
            >
              STAGE 03
            </div>
            <div style={{ fontSize: '17px', fontWeight: 700, color: '#FFFFFF', marginBottom: '8px' }}>
              4-Year Engineering
            </div>
            <div style={{ fontSize: '13px', color: '#E2E8F0', lineHeight: 1.55 }}>
              B.Tech specializations in 7 core engineering streams with laboratory training.
            </div>
          </div>

          {/* Card 4: Stage 04 */}
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(200, 16, 46, 0.45) 0%, rgba(220, 38, 38, 0.8) 100%)',
              border: '1px solid rgba(254, 202, 202, 0.6)',
              borderRadius: '16px',
              padding: '22px 18px',
              boxShadow: '0 4px 14px rgba(200, 16, 46, 0.3)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: 'rgba(255, 255, 255, 0.25)',
                border: '1px solid rgba(255, 255, 255, 0.5)',
                borderRadius: '999px',
                padding: '3px 10px',
                fontSize: '11px',
                fontWeight: 800,
                color: '#FEF08A',
                width: 'fit-content',
                marginBottom: '10px',
                letterSpacing: '0.05em',
              }}
            >
              STAGE 04
            </div>
            <div style={{ fontSize: '17px', fontWeight: 700, color: '#FFFFFF', marginBottom: '8px' }}>
              B.Tech Degree
            </div>
            <div style={{ fontSize: '13px', color: '#FFFFFF', lineHeight: 1.55 }}>
              Conferment of B.Tech Degree, campus placements, and research careers.
            </div>
          </div>
        </div>
      </div>
    </NuzvidAboutPageLayout>
  );
}
