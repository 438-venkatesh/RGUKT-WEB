import { useEffect, useRef, useState } from 'react';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

/**
 * Reveals an element once it scrolls into view.
 * Returns a ref to attach and a `shown` flag used to drive the CSS animation.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(rootMargin = '0px 0px -12% 0px') {
  const ref = useRef<T | null>(null);
  const [shown, setShown] = useState(() => prefersReducedMotion());

  useEffect(() => {
    if (shown) return;
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      entries => {
        if (entries.some(e => e.isIntersecting)) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin, threshold: 0.08 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [shown, rootMargin]);

  return { ref, shown };
}

/** Parses "3,40,000+" / "₹36K" / "40" into { prefix, number, suffix } for count-up. */
function splitNumeric(raw: string) {
  const m = raw.match(/^(\D*?)([\d][\d,.]*)(.*)$/s);
  if (!m) return null;
  const digits = m[2].replace(/,/g, '');
  const value = Number(digits);
  if (!Number.isFinite(value)) return null;
  return { prefix: m[1], value, suffix: m[3], grouped: m[2].includes(',') };
}

function formatIndian(n: number) {
  const s = String(n);
  if (s.length <= 3) return s;
  const last3 = s.slice(-3);
  const rest = s.slice(0, -3);
  return rest.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + ',' + last3;
}

/** Animated count-up for stat values; falls back to the literal string when non-numeric. */
export function useCountUp(raw: string, active: boolean, duration = 900) {
  const parts = splitNumeric(raw);
  const [display, setDisplay] = useState(() => (parts && !prefersReducedMotion() ? `${parts.prefix}0${parts.suffix}` : raw));

  useEffect(() => {
    if (!parts || !active || prefersReducedMotion()) {
      setDisplay(raw);
      return;
    }
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      const current = Math.round(parts.value * eased);
      setDisplay(`${parts.prefix}${parts.grouped ? formatIndian(current) : current}${parts.suffix}`);
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [raw, active, duration]);

  return display;
}
