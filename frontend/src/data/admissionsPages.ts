/**
 * Admissions section — mirrors the Admissions menu on rgukt.in exactly.
 *
 * Menu on rgukt.in:
 *   UG Admissions  →  Admissions 2025  (/admissions/ug-admissions/2025/)
 *                     Admissions 2026  (/admissions/ug-admissions/2026/)
 *   PG Admissions        (/admissions/pg-admissions/)
 *   Doctorial Admissions (/admissions/doctorial-admissions/)
 *
 * Verified 2026-08-26: the 2025 and 2026 pages are live and their text is
 * reproduced verbatim below. /admissions/pg-admissions/ and
 * /admissions/doctorial-admissions/ both return 404 on rgukt.in, so those two
 * carry no content — only the source note and a link to the official portal.
 */

import type { SectionNavGroup, SectionPage } from './sectionPage';

export const ADMISSIONS_PORTAL_URL = 'https://admissions.rgukt.in/';

/** The Help Line Details block is identical on the 2025 and 2026 pages. */
const helplineBlock = {
  kind: 'helpline' as const,
  heading: 'Help Line Details',
  panels: [
    {
      title: 'For queries related to UG Admissions at RGUKT',
      subtitle: 'Helpline Numbers for queries other than online application payment',
      emailIntro: 'Please write an email to',
      email: 'admissions@rgukt.in',
      fieldsIntro: 'Please provide the following details in email :',
      fields: [
        { label: 'RGUKT Application Number:', placeholder: '[Your Application Number]' },
        { label: 'Name:', placeholder: '[Your Full Name]' },
        { label: 'SSC Hall Ticket Number:', placeholder: '[Your SSC Hall Ticket Number]' },
        { label: 'Mobile Number:', placeholder: '[Your Mobile Number]' },
        {
          label: 'Problem Description:',
          placeholder: '[Briefly describe your problem here, e.g., Issue in application form, login issues, missing documents, etc.]',
        },
      ],
      phonesIntro: 'For Admission Related Queries, You Can Also Contact:',
      phones: ['97035 42597', '97054 72597'],
      timings: 'Timings: 10:00 AM to 1:00 PM and 2:00 PM to 5:00 PM (On Working Days Only)',
    },
    {
      title: 'For Queries Related to Online Payments',
      subtitle: 'Helpline Numbers for Online Application Payment Related Queries',
      emailIntro: 'Please write an email to',
      email: 'payment_grievances@rgukt.in',
      fieldsIntro: 'Please provide the following details in email:',
      fields: [
        { label: 'RGUKT Application Number:', placeholder: '[Your Application Number]' },
        { label: 'Name:', placeholder: '[Your Full Name]' },
        { label: 'SSC Hall Ticket Number:', placeholder: '[Your SSC Hall Ticket Number]' },
        { label: 'Mobile Number:', placeholder: '[Your Mobile Number]' },
        {
          label: 'Problem Description:',
          placeholder: '[Briefly describe your problem here, e.g., Payment failure, amount debited but not updated, transaction issue, etc.]',
        },
      ],
      phonesIntro: 'For Payment Related Queries, You Can Also Contact:',
      phones: ['90007 55895', '90007 54253'],
      timings: 'Timings: 10:00 AM to 1:00 PM and 2:00 PM to 5:00 PM (On Working Days Only)',
    },
  ],
};

/* ── UG Admissions (landing) ──────────────────────────────── */

const ugAdmissions: SectionPage = {
  slug: 'ug',
  route: '/admissions',
  title: 'UG Admissions',
  eyebrow: 'Admissions',
  navLabel: 'UG Admissions',
  icon: 'cap',
  sourceUrl: 'https://www.rgukt.in/admissions/ug-admissions/',
  sourceStatus: 'live',
  blocks: [
    {
      kind: 'banner',
      status: 'open',
      title: 'Registrations are Open for admissions 2026',
      action: { label: 'Apply Now', href: ADMISSIONS_PORTAL_URL },
    },
    {
      kind: 'links',
      heading: 'Admission cycles',
      items: [
        { label: 'Admissions 2026', to: '/admissions/2026', sub: 'Registrations are Open' },
        { label: 'Admissions 2025', to: '/admissions/2025', sub: 'Registrations are Closed' },
      ],
    },
  ],
};

/* ── Admissions 2026 (live) ───────────────────────────────── */

const admissions2026: SectionPage = {
  slug: '2026',
  route: '/admissions/2026',
  title: 'Admissions 2026',
  eyebrow: 'UG Admissions',
  navLabel: 'Admissions 2026',
  icon: 'calendar',
  sourceUrl: 'https://www.rgukt.in/admissions/ug-admissions/2026/',
  sourceStatus: 'live',
  blocks: [
    {
      kind: 'banner',
      status: 'open',
      title: 'Registrations are Open for admissions 2026',
      action: { label: 'Apply Now', href: ADMISSIONS_PORTAL_URL },
    },
    helplineBlock,
  ],
};

/* ── Admissions 2025 (live) ───────────────────────────────── */

const admissions2025: SectionPage = {
  slug: '2025',
  route: '/admissions/2025',
  title: 'Admissions 2025',
  eyebrow: 'UG Admissions',
  navLabel: 'Admissions 2025',
  icon: 'calendar',
  sourceUrl: 'https://www.rgukt.in/admissions/ug-admissions/2025/',
  sourceStatus: 'live',
  blocks: [
    {
      kind: 'banner',
      status: 'closed',
      title: 'Registrations are Closed',
    },
    helplineBlock,
  ],
};

/* ── PG Admissions (404 on source) ────────────────────────── */

const pgAdmissions: SectionPage = {
  slug: 'pg',
  route: '/admissions/postgraduate',
  title: 'PG Admissions',
  eyebrow: 'Admissions',
  navLabel: 'PG Admissions',
  icon: 'book',
  sourceUrl: 'https://www.rgukt.in/admissions/pg-admissions/',
  sourceStatus: 'unavailable',
  blocks: [
    {
      kind: 'callout',
      tone: 'accent',
      title: 'Check the official admissions portal',
      body: 'Admission notifications for postgraduate programmes are published on the RGUKT admissions portal.',
      actions: [
        { label: 'admissions.rgukt.in', href: ADMISSIONS_PORTAL_URL },
        { label: 'Postgraduate Programmes', to: '/academics/postgraduate' },
      ],
    },
  ],
};

/* ── Doctorial Admissions (404 on source) ─────────────────── */

const doctoralAdmissions: SectionPage = {
  slug: 'doctoral',
  route: '/admissions/doctoral',
  title: 'Doctorial Admissions',
  eyebrow: 'Admissions',
  navLabel: 'Doctorial Admissions',
  icon: 'flask',
  sourceUrl: 'https://www.rgukt.in/admissions/doctorial-admissions/',
  sourceStatus: 'unavailable',
  blocks: [
    {
      kind: 'callout',
      tone: 'accent',
      title: 'Check the official admissions portal',
      body: 'Admission notifications for doctoral programmes are published on the RGUKT admissions portal.',
      actions: [
        { label: 'admissions.rgukt.in', href: ADMISSIONS_PORTAL_URL },
        { label: 'Research Programmes', to: '/academics/research-programmes' },
      ],
    },
  ],
};

export const ADMISSIONS_PAGES: SectionPage[] = [
  ugAdmissions,
  admissions2026,
  admissions2025,
  pgAdmissions,
  doctoralAdmissions,
];

/** Mirrors the Admissions dropdown grouping on rgukt.in. */
export const ADMISSIONS_GROUPS: SectionNavGroup[] = [
  { label: 'UG Admissions', slugs: ['ug', '2025', '2026'] },
  { label: '', slugs: ['pg', 'doctoral'] },
];

export function getAdmissionsPage(slug: string): SectionPage | undefined {
  return ADMISSIONS_PAGES.find(p => p.slug === slug);
}
