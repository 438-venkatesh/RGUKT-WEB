import type { ReactElement } from 'react';
import type { GoverningCouncilGroupIcon } from '../data/administrationContent';

type IconProps = { size?: number; color?: string };

export function IconGovernance({ size = 22, color = 'currentColor' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 3v18M3 9h18M6 9v12M10 9v12M14 9v12M18 9v12" />
      <path d="M5 3h14l1 3H4l1-3z" />
    </svg>
  );
}

export function IconFinance({ size = 22, color = 'currentColor' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={1.8} strokeLinecap="round" aria-hidden>
      <rect x={2} y={6} width={20} height={12} rx={2} />
      <circle cx={12} cy={12} r={3} />
      <path d="M6 10h.01M18 14h.01" />
    </svg>
  );
}

export function IconCurriculum({ size = 22, color = 'currentColor' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={1.8} strokeLinecap="round" aria-hidden>
      <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
      <path d="M8 7h8M8 11h8M8 15h5" />
    </svg>
  );
}

export function IconPartnership({ size = 22, color = 'currentColor' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={1.8} strokeLinecap="round" aria-hidden>
      <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
      <circle cx={9} cy={7} r={4} />
      <path d="M22 21v-2a4 4 0 00-3-3.87" />
      <path d="M16 3.13a4 4 0 010 7.75" />
    </svg>
  );
}

export function IconExecutive({ size = 22, color = 'currentColor' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={1.8} strokeLinecap="round" aria-hidden>
      <path d="M12 2l2 5h5l-4 3 1.5 5L12 13l-4.5 2 1.5-5-4-3h5L12 2z" />
    </svg>
  );
}

export function IconGovernment({ size = 22, color = 'currentColor' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={1.8} strokeLinecap="round" aria-hidden>
      <path d="M3 21h18" />
      <path d="M5 21V7l7-4 7 4v14" />
      <path d="M9 21v-4h6v4" />
      <path d="M9 10h.01M12 10h.01M15 10h.01M9 14h.01M12 14h.01M15 14h.01" />
    </svg>
  );
}

export function IconNominated({ size = 22, color = 'currentColor' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={1.8} strokeLinecap="round" aria-hidden>
      <path d="M22 10L12 5 2 10l10 5 10-5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  );
}

export function IconCampusCouncil({ size = 22, color = 'currentColor' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={1.8} strokeLinecap="round" aria-hidden>
      <path d="M3 21h18M6 21V7l6-4 6 4v14M10 21v-6h4v6" />
    </svg>
  );
}

export function IconUniversity({ size = 22, color = 'currentColor' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={1.8} strokeLinecap="round" aria-hidden>
      <path d="M22 10L12 5 2 10l10 5 10-5z" />
      <path d="M6 12v4c3 2 9 2 12 0v-4" />
      <path d="M12 5v17" />
    </svg>
  );
}

export function IconSpecialInvitee({ size = 22, color = 'currentColor' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={1.8} strokeLinecap="round" aria-hidden>
      <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
      <circle cx={9} cy={7} r={4} />
      <path d="M19 8v6M22 11h-6" />
    </svg>
  );
}

const GROUP_ICONS: Record<GoverningCouncilGroupIcon, (props: IconProps) => ReactElement> = {
  executive: IconExecutive,
  government: IconGovernment,
  nominated: IconNominated,
  campus: IconCampusCouncil,
  special: IconSpecialInvitee,
  university: IconUniversity,
};

export function CouncilGroupIconDisplay({
  type,
  color,
  size = 22,
}: {
  type: GoverningCouncilGroupIcon;
  color?: string;
  size?: number;
}) {
  const Icon = GROUP_ICONS[type];
  return <Icon color={color} size={size} />;
}

export type ResponsibilityIcon = 'governance' | 'finance' | 'curriculum' | 'partnership';

const RESPONSIBILITY_ICONS: Record<ResponsibilityIcon, (props: IconProps) => ReactElement> = {
  governance: IconGovernance,
  finance: IconFinance,
  curriculum: IconCurriculum,
  partnership: IconPartnership,
};

export function ResponsibilityIconDisplay({
  type,
  color,
  size = 20,
}: {
  type: ResponsibilityIcon;
  color?: string;
  size?: number;
}) {
  const Icon = RESPONSIBILITY_ICONS[type];
  return <Icon color={color} size={size} />;
}
