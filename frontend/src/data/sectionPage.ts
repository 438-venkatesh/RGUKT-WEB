/**
 * Shared block schema used by the section renderers (Academics, Admissions).
 * A page is a title plus an ordered list of blocks; `BlockPageView` renders it.
 */

import type { BlockIconName } from '../components/blocks/Icons';

export type SectionBlock =
  | { kind: 'lead'; text: string }
  | {
      kind: 'banner';
      status: 'open' | 'closed' | 'info';
      title: string;
      note?: string;
      action?: { label: string; href?: string; to?: string };
    }
  | { kind: 'stats'; items: { value: string; label: string; sub?: string }[] }
  | {
      kind: 'cards';
      heading?: string;
      caption?: string;
      cols?: 2 | 3;
      items: { icon: BlockIconName; title: string; body: string; tag?: string }[];
    }
  | {
      kind: 'flow';
      heading?: string;
      caption?: string;
      variant?: 'horizontal' | 'vertical';
      steps: { label: string; sub?: string; detail?: string }[];
    }
  | { kind: 'ratio'; heading?: string; caption?: string; parts: { label: string; value: number; note?: string }[] }
  | { kind: 'branches'; heading?: string; caption?: string; items: { code: string; name: string }[] }
  | {
      kind: 'accordion';
      heading?: string;
      caption?: string;
      openFirst?: boolean;
      items: { title: string; body: string[]; tag?: string }[];
    }
  | { kind: 'timeline'; heading?: string; caption?: string; items: { time: string; title: string; detail?: string }[] }
  | { kind: 'chips'; heading?: string; caption?: string; items: { label: string; value?: string }[] }
  | {
      kind: 'callout';
      tone?: 'accent' | 'info';
      title: string;
      body?: string;
      actions?: { label: string; to?: string; href?: string }[];
    }
  | { kind: 'prose'; heading?: string; caption?: string; paragraphs: string[] }
  | { kind: 'docs'; heading?: string; caption?: string; items: { title: string; url: string; size?: string; date?: string }[] }
  | {
      kind: 'docFilter';
      heading?: string;
      caption?: string;
      filters: string[];
      items: { title: string; url: string; size?: string; date?: string; group: string }[];
    }
  | { kind: 'table'; heading?: string; caption?: string; columns: string[]; rows: string[][] }
  | { kind: 'links'; heading?: string; caption?: string; items: { label: string; href?: string; to?: string; sub?: string }[] }
  | {
      kind: 'matrix';
      heading?: string;
      caption?: string;
      groups: { title: string; icon?: BlockIconName; entries: { campus: string; body: string }[] }[];
    }
  | {
      kind: 'helpline';
      heading?: string;
      caption?: string;
      panels: {
        title: string;
        subtitle?: string;
        emailIntro?: string;
        email?: string;
        fieldsIntro?: string;
        fields?: { label: string; placeholder: string }[];
        phonesIntro?: string;
        phones?: string[];
        timings?: string;
      }[];
    };

export type SectionPage = {
  slug: string;
  route: string;
  title: string;
  eyebrow: string;
  navLabel: string;
  icon: BlockIconName;
  sourceUrl: string;
  sourceStatus: 'live' | 'unavailable';
  blocks: SectionBlock[];
};

export type SectionNavGroup = { label: string; slugs: string[] };
