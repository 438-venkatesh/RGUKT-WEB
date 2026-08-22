import { Link } from 'react-router-dom';
import { useHeaderScroll } from '../../hooks/useHeaderScroll';
import { NUZVID_UTILITY_LEFT, NUZVID_UTILITY_RIGHT } from '../../data/nuzvidNav';
import type { NavLink } from '../../data/siteNav';
import '../../components/UtilityBar.css';

function UtilHref({ link }: { link: NavLink }) {
  if (link.external || link.href.startsWith('http')) {
    return (
      <a href={link.href} target="_blank" rel="noopener noreferrer">
        {link.label}
      </a>
    );
  }
  return <Link to={link.href}>{link.label}</Link>;
}

export default function NuzvidUtilityBar() {
  const hidden = useHeaderScroll(50);

  return (
    <div className={`util-bar${hidden ? ' util-bar-hidden' : ''}`} role="navigation" aria-label="Nuzvid utility links">
      <div className="util-bar-inner">
        <div className="util-bar-left">
          {NUZVID_UTILITY_LEFT.map(link => (
            <UtilHref key={link.href + link.label} link={link} />
          ))}
        </div>
        <div className="util-bar-right">
          {NUZVID_UTILITY_RIGHT.map(link => (
            <UtilHref key={link.href + link.label} link={link} />
          ))}
        </div>
      </div>
    </div>
  );
}
