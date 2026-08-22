import { useLocation } from 'react-router-dom';
import { useHeaderScroll } from '../hooks/useHeaderScroll';
import RGUKTLogo from './RGUKTLogo';
import './SiteHeader.css';

export default function SiteHeader() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const scrolled = useHeaderScroll(50);

  if (!isHome) return null;

  return (
    <div className={`sh-root overlay${scrolled ? ' hidden-brand' : ''}`}>

      {/* ── Branding bar ── */}
      <div className="sh-brand">
        <div className="sh-brand-inner">

          {/* Left: RGUKT logo + university text */}
          <div className="sh-brand-left">
            <div className="sh-logo" aria-hidden>
              <RGUKTLogo variant={isHome && !scrolled ? 'white' : 'default'} />
            </div>
            <div className="sh-brand-text">
              <div className="sh-brand-name">
                Rajiv Gandhi University of Knowledge Technologies - Andhra Pradesh
              </div>
              <div className="sh-brand-tagline">
                Catering to the Educational Needs of Gifted Rural Youth of Andhra Pradesh
              </div>
              <div className="sh-brand-estab">
                (Established by the Govt. of Andhra Pradesh and recognized as per Section 2(f), 12(B) of UGC Act, 1956)
              </div>
            </div>
          </div>

          {/* Right: Accreditation / govt logos + search */}
          <div className="sh-logos" role="list" aria-label="Accreditation logos">
            <div role="listitem" className="sh-badge-slot" title="NAAC Accredited">
              <img src="/badges/naac-accredited.png" alt="NAAC Accredited" className="sh-badge-img" />
            </div>
            <div role="listitem" className="sh-badge-slot sh-badge-slot-swarna" title="Swarna Andhra @2047">
              <img src="/badges/swarna-andhra.png" alt="Swarna Andhra @2047" className="sh-badge-img sh-badge-swarna" />
            </div>
            <div role="listitem" className="sh-badge-slot" title="Azadi Ka Amrit Mahotsav">
              <img src="/badges/azadi-mahotsav.png" alt="Azadi Ka Amrit Mahotsav" className="sh-badge-img" />
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
