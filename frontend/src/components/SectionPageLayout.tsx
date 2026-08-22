import { useDarkMode } from '../context/DarkModeContext';
import './SectionPageLayout.css';

export default function SectionPageLayout({ children }: { children: React.ReactNode }) {
  const { dark } = useDarkMode();
  const bg = dark ? '#0B141F' : '#F2F5FA';
  const text = dark ? '#C0D4EE' : '#18243A';

  return (
    <div className="section-page" style={{ background: bg, color: text }}>
      <div className="section-page-inner">{children}</div>
    </div>
  );
}

export function useSectionTheme() {
  const { dark } = useDarkMode();
  return dark ? {
    surface: '#112030', surface2: '#18293c', bg: '#0B141F', text: '#C0D4EE',
    textMuted: 'rgba(192,212,238,0.65)', border: 'rgba(192,212,238,0.18)',
    accent: '#E8203C', primary: '#C0D4EE',
  } : {
    surface: '#FFFFFF', surface2: '#E8EEF8', bg: '#F2F5FA', text: '#18243A',
    textMuted: '#526070', border: '#C5D3E8', accent: '#C8102E', primary: '#0A2744',
  };
}
