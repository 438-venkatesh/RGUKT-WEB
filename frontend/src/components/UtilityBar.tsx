import { Link } from 'react-router-dom';
import { useHeaderScroll } from '../hooks/useHeaderScroll';
import { useDarkMode } from '../context/DarkModeContext';
import { UTILITY_LEFT_LINKS } from '../data/siteNav';
import './UtilityBar.css';

export default function UtilityBar() {
  const scrolled = useHeaderScroll(50);
  const hidden = scrolled;
  const { dark, toggle } = useDarkMode();

  return (
    <div className={`util-bar${hidden ? ' util-bar-hidden' : ''}`} role="navigation" aria-label="Utility links">
      <div className="util-bar-inner">
        <div className="util-bar-left">
          {UTILITY_LEFT_LINKS.map(link => (
            <Link key={link.href} to={link.href}>{link.label}</Link>
          ))}
        </div>
        <div className="util-bar-right">
          <button
            type="button"
            className="util-theme-btn"
            onClick={toggle}
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {dark ? <SunIcon /> : <MoonIcon />}
            <span>{dark ? 'Light' : 'Dark'}</span>
          </button>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FbIcon /></a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><YtIcon /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><TwIcon /></a>
        </div>
      </div>
    </div>
  );
}

function MoonIcon() {
  return <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" /></svg>;
}
function SunIcon() {
  return <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round"><circle cx={12} cy={12} r={5} /><line x1={12} y1={1} x2={12} y2={3} /><line x1={12} y1={21} x2={12} y2={23} /><line x1={4.22} y1={4.22} x2={5.64} y2={5.64} /><line x1={18.36} y1={18.36} x2={19.78} y2={19.78} /><line x1={1} y1={12} x2={3} y2={12} /><line x1={21} y1={12} x2={23} y2={12} /><line x1={4.22} y1={19.78} x2={5.64} y2={18.36} /><line x1={18.36} y1={5.64} x2={19.78} y2={4.22} /></svg>;
}
function FbIcon() {
  return <svg width={14} height={14} viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 10-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.5.3v2.7h-1.7c-1.3 0-1.6.7-1.6 1.6V12h2.9l-.5 2.9h-2.4v7A10 10 0 0022 12z" /></svg>;
}
function YtIcon() {
  return <svg width={15} height={15} viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 00.5 6.2 31.6 31.6 0 000 12a31.6 31.6 0 00.5 5.8 3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1A31.6 31.6 0 0024 12a31.6 31.6 0 00-.5-5.8zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" /></svg>;
}
function TwIcon() {
  return <svg width={14} height={14} viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>;
}
