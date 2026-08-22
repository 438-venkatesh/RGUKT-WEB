import { Outlet, useLocation } from 'react-router-dom';
import NuzvidUtilityBar from './NuzvidUtilityBar';
import NuzvidSiteHeader from './NuzvidSiteHeader';
import NuzvidNavbar from './NuzvidNavbar';
import NuzvidFooter from './NuzvidFooter';
import './NuzvidTheme.css';
import './NuzvidLayout.css';

export default function NuzvidLayout() {
  const { pathname } = useLocation();
  const isHome = pathname === '/nuzvid' || pathname === '/nuzvid/';

  return (
    <div className="nuzvid-root">
      <NuzvidUtilityBar />
      <NuzvidSiteHeader />
      <NuzvidNavbar />
      <div
        id="nuzvid-main"
        className={`nuzvid-main${isHome ? ' nuzvid-main--home' : ' nuzvid-main--inner'}`}
      >
        <Outlet />
      </div>
      <NuzvidFooter />
    </div>
  );
}
