import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useHeaderScroll } from '../hooks/useHeaderScroll';
import RGUKTLogo from './RGUKTLogo';
import {
  NAV_MENUS,
  NAV_FLAT_LINKS,
  getMobileNavLinks,
  isNavLinkActive,
  type NavLink,
} from '../data/siteNav';
import './Navbar.css';

function NavHref({ item, className, role, onClick }: {
  item: NavLink;
  className?: string;
  role?: string;
  onClick?: () => void;
}) {
  if (item.external || item.href.startsWith('http')) {
    return (
      <a href={item.href} className={className} role={role} target="_blank" rel="noopener noreferrer" onClick={onClick}>
        {item.label}
      </a>
    );
  }
  return <Link to={item.href} className={className} role={role} onClick={onClick}>{item.label}</Link>;
}

export default function Navbar() {
  const scrolled = useHeaderScroll(50);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const solidNav = !isHome || scrolled;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => { setMobileOpen(false); setOpenMenu(null); }, [location]);

  const linkActive = (href: string) =>
    isNavLinkActive(location.pathname, location.hash, href);

  const menuActive = (href: string) => {
    if (linkActive(href)) return true;
    const [path] = href.split('#');
    return path !== '/' && location.pathname.startsWith(path + '/');
  };

  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>

      <header className={`ap-header${isHome ? ' overlay' : ''}${solidNav ? ' solid' : ''}${scrolled ? ' compact' : ''}`}>
        <nav className={`ap-nav${solidNav ? ' ap-nav-solid' : ''}`} aria-label="Main navigation">
          <div className={`ap-nav-inner${solidNav ? ' has-bulge' : ''}`}>

            {solidNav && (
              <Link to="/" className="ap-nav-bulge" aria-label="RGUKT-AP Home">
                <span className="ap-nav-bulge-circle">
                  <RGUKTLogo width={38} height={54} />
                </span>
              </Link>
            )}

            <ul className="ap-nav-links" role="menubar">
              <li role="none" className="ap-nav-item">
                <Link
                  to="/"
                  className="ap-nav-link ap-nav-home-icon"
                  role="menuitem"
                  aria-label="Home"
                >
                  <HomeIcon />
                </Link>
              </li>

              {NAV_MENUS.map(menu => (
                <li
                  key={menu.key}
                  role="none"
                  className={`ap-nav-item ap-nav-has-mega${openMenu === menu.key ? ' is-open' : ''}`}
                  onMouseEnter={() => setOpenMenu(menu.key)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <Link
                    to={menu.href}
                    className={`ap-nav-link${openMenu === menu.key || menuActive(menu.href) ? ' is-active' : ''}`}
                    role="menuitem"
                    aria-haspopup="true"
                    aria-expanded={openMenu === menu.key}
                  >
                    {menu.label} <ChevronIcon />
                  </Link>
                  {openMenu === menu.key && (
                    <div className="ap-mega" role="menu">
                      {menu.items.map(item => (
                        <NavHref
                          key={item.label + item.href}
                          item={item}
                          className="ap-mega-link"
                          role="menuitem"
                        />
                      ))}
                    </div>
                  )}
                </li>
              ))}

              {NAV_FLAT_LINKS.map(item => (
                <li key={item.href} role="none" className="ap-nav-item">
                  <NavHref
                    item={item}
                    className={`ap-nav-link${linkActive(item.href) ? ' is-active' : ''}`}
                    role="menuitem"
                  />
                </li>
              ))}
            </ul>

            <button className="ap-search-btn" aria-label="Search" type="button">
              <SearchIcon />
            </button>

            <button
              className="ap-mobile-btn"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(true)}
            >
              <HamburgerIcon />
            </button>
          </div>
        </nav>
      </header>

      {mobileOpen && (
        <div className="ap-mobile-overlay" role="dialog" aria-modal="true" aria-label="Mobile navigation">
          <button className="ap-mobile-close" aria-label="Close menu" onClick={() => setMobileOpen(false)}>✕</button>
          <nav className="ap-mobile-nav">
            {getMobileNavLinks().map(item => (
              <NavHref
                key={item.label + item.href}
                item={item}
                className="ap-mobile-link"
                onClick={() => setMobileOpen(false)}
              />
            ))}
          </nav>
        </div>
      )}
    </>
  );
}

function HomeIcon() {
  return <svg width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round"><path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1h-5v-7H9v7H4a1 1 0 01-1-1V9.5z" /></svg>;
}
function ChevronIcon() {
  return <svg width={9} height={9} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round"><polyline points="6 9 12 15 18 9" /></svg>;
}
function SearchIcon() {
  return <svg width={17} height={17} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round"><circle cx={11} cy={11} r={8} /><line x1={21} y1={21} x2={16.65} y2={16.65} /></svg>;
}
function HamburgerIcon() {
  return <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round"><line x1={3} y1={6} x2={21} y2={6} /><line x1={3} y1={12} x2={21} y2={12} /><line x1={3} y1={18} x2={21} y2={18} /></svg>;
}
