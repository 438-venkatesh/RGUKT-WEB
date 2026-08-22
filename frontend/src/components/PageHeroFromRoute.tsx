import { useLocation } from 'react-router-dom';
import PageHero from './PageHero';
import { getPageHeroConfig } from '../data/pageHeroConfig';

/** Renders IIT Delhi–style page hero on inner routes (not home / nuzvid). */
export default function PageHeroFromRoute() {
  const { pathname } = useLocation();

  if (pathname === '/' || pathname.startsWith('/nuzvid')) return null;

  const config = getPageHeroConfig(pathname);
  if (!config) return null;

  return <PageHero {...config} />;
}
