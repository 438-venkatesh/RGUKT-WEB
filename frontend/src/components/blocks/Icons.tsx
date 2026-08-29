/** Compact line-icon set for the Academics blocks. Inherits `currentColor`. */

const base = {
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
};

export const BLOCK_ICONS = {
  cap: (
    <svg {...base}><path d="M3 9l9-4 9 4-9 4-9-4z" /><path d="M7 11v4.5c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5V11" /><path d="M21 9v5" /></svg>
  ),
  flask: (
    <svg {...base}><path d="M10 3h4" /><path d="M11 3v6.2L5.6 18a2 2 0 0 0 1.7 3h9.4a2 2 0 0 0 1.7-3L13 9.2V3" /><path d="M7.5 15h9" /></svg>
  ),
  book: (
    <svg {...base}><path d="M4 5a2 2 0 0 1 2-2h12v18H6a2 2 0 0 1-2-2z" /><path d="M8 3v18" /></svg>
  ),
  globe: (
    <svg {...base}><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18z" /></svg>
  ),
  users: (
    <svg {...base}><circle cx="9" cy="8" r="3.2" /><path d="M3 20a6 6 0 0 1 12 0" /><path d="M16 5.3a3.2 3.2 0 0 1 0 5.4" /><path d="M17.5 20a5.6 5.6 0 0 0-2.2-4.4" /></svg>
  ),
  spark: (
    <svg {...base}><path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z" /><path d="M18 16l.8 2.2L21 19l-2.2.8L18 22l-.8-2.2L15 19l2.2-.8z" /></svg>
  ),
  building: (
    <svg {...base}><path d="M4 21V5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v16" /><path d="M15 21V9h3a2 2 0 0 1 2 2v10" /><path d="M2 21h20" /><path d="M8 7h3M8 11h3M8 15h3" /></svg>
  ),
  chart: (
    <svg {...base}><path d="M3 21h18" /><rect x="5" y="12" width="3.5" height="6" rx="1" /><rect x="10.5" y="7" width="3.5" height="11" rx="1" /><rect x="16" y="3.5" width="3.5" height="14.5" rx="1" /></svg>
  ),
  clock: (
    <svg {...base}><circle cx="12" cy="12" r="9" /><path d="M12 7v5.2l3.2 2" /></svg>
  ),
  rupee: (
    <svg {...base}><path d="M7 4h10" /><path d="M7 8.5h10" /><path d="M7 4c5 0 6.5 1.6 6.5 4.2S12 12.6 8.6 12.6H7l8 8.4" /></svg>
  ),
  home: (
    <svg {...base}><path d="M4 10.5 12 4l8 6.5V19a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" /><path d="M9.5 21v-6h5v6" /></svg>
  ),
  laptop: (
    <svg {...base}><rect x="4" y="5" width="16" height="10.5" rx="1.6" /><path d="M2.5 19h19" /></svg>
  ),
  shield: (
    <svg {...base}><path d="M12 3l7.5 3v6c0 4.4-3.1 7.6-7.5 9-4.4-1.4-7.5-4.6-7.5-9V6z" /><path d="m9 12 2.2 2.2L15.5 10" /></svg>
  ),
  calendar: (
    <svg {...base}><rect x="3.5" y="5" width="17" height="15.5" rx="2" /><path d="M3.5 10h17" /><path d="M8 3v4M16 3v4" /></svg>
  ),
  doc: (
    <svg {...base}><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" /><path d="M14 3v5h5" /><path d="M9 13h6M9 17h4" /></svg>
  ),
  link: (
    <svg {...base}><path d="M10.5 13.5a4 4 0 0 0 5.7 0l2.6-2.6a4 4 0 1 0-5.7-5.7L11.7 6.6" /><path d="M13.5 10.5a4 4 0 0 0-5.7 0l-2.6 2.6a4 4 0 1 0 5.7 5.7l1.4-1.4" /></svg>
  ),
  bulb: (
    <svg {...base}><path d="M9.5 18h5" /><path d="M10 21h4" /><path d="M12 3a6 6 0 0 1 3.6 10.8c-.6.5-.9 1.1-1 1.8l-.1.4h-5l-.1-.4c-.1-.7-.4-1.3-1-1.8A6 6 0 0 1 12 3z" /></svg>
  ),
  target: (
    <svg {...base}><circle cx="12" cy="12" r="8.5" /><circle cx="12" cy="12" r="4.5" /><circle cx="12" cy="12" r="1" /></svg>
  ),
  route: (
    <svg {...base}><circle cx="6" cy="6" r="2.6" /><circle cx="18" cy="18" r="2.6" /><path d="M8.6 6H14a3.5 3.5 0 0 1 0 7h-4a3.5 3.5 0 0 0 0 7h5.4" /></svg>
  ),
  handshake: (
    <svg {...base}><path d="m11 7-2.2 2.2a2 2 0 0 0 0 2.8l.4.4a2 2 0 0 0 2.8 0L13 11.2" /><path d="M3 8.5 6.5 5h4L14 8l3 3 4-3.5" /><path d="M13 11.2 16 14M11.5 12.8 14 15.3M10 14.4l2 2" /></svg>
  ),
} as const;

export type BlockIconName = keyof typeof BLOCK_ICONS;

export function BlockIcon({ name }: { name: BlockIconName }) {
  return BLOCK_ICONS[name] ?? BLOCK_ICONS.spark;
}
