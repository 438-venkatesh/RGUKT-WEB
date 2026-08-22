import { createContext, useContext, useEffect, useState } from 'react';

interface DarkModeCtx { dark: boolean; toggle: () => void; }
const Ctx = createContext<DarkModeCtx>({ dark: false, toggle: () => {} });

export function DarkModeProvider({ children }: { children: React.ReactNode }) {
  const [dark, setDark] = useState(() => {
    try { return localStorage.getItem('ap-dark') === '1'; } catch { return false; }
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    try { localStorage.setItem('ap-dark', dark ? '1' : '0'); } catch { /* */ }
  }, [dark]);

  return (
    <Ctx.Provider value={{ dark, toggle: () => setDark(v => !v) }}>
      {children}
    </Ctx.Provider>
  );
}

export const useDarkMode = () => useContext(Ctx);
