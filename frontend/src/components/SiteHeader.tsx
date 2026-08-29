import { useLocation } from 'react-router-dom';
import { useHeaderScroll } from '../hooks/useHeaderScroll';
import { SITE_BRAND_ESTAB, SITE_BRAND_NAME, SITE_BRAND_TAGLINE } from '../data/siteBranding';
import BilingualRotator from './BilingualRotator';
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
              <BilingualRotator
                className="sh-brand-name"
                en={SITE_BRAND_NAME.en}
                te={SITE_BRAND_NAME.te}
              />
              <BilingualRotator
                className="sh-brand-tagline"
                en={SITE_BRAND_TAGLINE.en}
                te={SITE_BRAND_TAGLINE.te}
              />
              <BilingualRotator
                className="sh-brand-estab"
                en={SITE_BRAND_ESTAB.en}
                te={SITE_BRAND_ESTAB.te}
              />
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
