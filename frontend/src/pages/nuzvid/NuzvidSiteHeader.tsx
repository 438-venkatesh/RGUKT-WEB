import { useLocation } from 'react-router-dom';
import { useHeaderScroll } from '../../hooks/useHeaderScroll';
import RGUKTLogo from '../../components/RGUKTLogo';
import '../../components/SiteHeader.css';

export default function NuzvidSiteHeader() {
  const { pathname } = useLocation();
  const isHome = pathname === '/nuzvid' || pathname === '/nuzvid/';
  const scrolled = useHeaderScroll(50);

  if (!isHome) return null;

  return (
    <div className={`sh-root overlay${scrolled ? ' hidden-brand' : ''}`}>
      <div className="sh-brand">
        <div className="sh-brand-inner">
          <div className="sh-brand-left">
            <div className="sh-logo" aria-hidden>
              <RGUKTLogo variant={!scrolled ? 'white' : 'default'} />
            </div>
            <div className="sh-brand-text">
              <div className="sh-brand-name">
                Rajiv Gandhi University of Knowledge Technologies — Nuzvid
              </div>
              <div className="sh-brand-tagline">
                Catering to the Educational Needs of Gifted Rural Youth of Andhra Pradesh
              </div>
              <div className="sh-brand-estab">
                Nuzvid Campus, Krishna District — Established by the Govt. of Andhra Pradesh
              </div>
            </div>
          </div>

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
