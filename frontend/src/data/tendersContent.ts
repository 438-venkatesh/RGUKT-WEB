/**
 * RGUKT-AP Tenders Content — Single Source of Truth: https://rgukt.in
 *
 * Strictly derived from official RGUKT procurement notices.
 * Contains no external internet tenders, speculative entries, or broken external links.
 */

export interface TenderItem {
  id: string;
  referenceNo: string;
  title: string;
  campus: 'Central Office' | 'Nuzvid' | 'RK Valley' | 'Ongole' | 'Srikakulam';
  category: 'Goods & Equipment' | 'Civil Works & Maintenance' | 'Services & Operations' | 'IT & Laboratory Supplies';
  postedDate: string;
  closingDate: string;
  status: 'Archived';
}

export interface BidderGuideline {
  title: string;
  tagline: string;
  description: string;
}

export const TENDERS_INTRO = {
  title: 'Tenders & Procurement at RGUKT',
  lead:
    'Rajiv Gandhi University of Knowledge Technologies – Andhra Pradesh invites competitive tenders, Notice Inviting Quotations (NIQ), and Expression of Interest (EOI) from registered manufacturers, contractors, and authorized suppliers for laboratory equipment, civil works, campus services, and consumable supplies across constituent campuses.',
  eprocurementNote:
    'Major open competitive bids, facility management, and high-value institutional tenders are processed through the official Government of Andhra Pradesh e-Procurement Platform (tender.apeprocurement.gov.in) and Government e-Marketplace (GeM) adhering to AP Public Procurement guidelines.',
  rguktUrl: 'https://www.rgukt.in/tenders/',
};

export const BIDDER_GUIDELINES: BidderGuideline[] = [
  {
    title: 'Notice Inviting Quotations (NIQ)',
    tagline: 'Standard Procurement Procedures',
    description:
      'Quotations must be submitted in sealed envelopes or through authorized institutional channels in accordance with the specifications, terms, and deadlines outlined in the tender notice.',
  },
  {
    title: 'Two-Cover Bidding System',
    tagline: 'Technical & Financial Evaluation',
    description:
      'Major tenders follow a two-cover evaluation: Cover-1 for technical compliance, firm credentials, GST/PAN verification, and Cover-2 for financial/price bid evaluation.',
  },
  {
    title: 'EMD & Statutory Compliance',
    tagline: 'Security Deposit & Guidelines',
    description:
      'Earnest Money Deposit (EMD) and tender processing fees must be submitted as specified in the tender document favoring the competent financial authority.',
  },
  {
    title: 'Corrigenda & Timeline Updates',
    tagline: 'Amendments & Extensions',
    description:
      'Any pre-bid clarifications, technical amendments, or bid submission deadline extensions are officially published on the university website.',
  },
];

export const OFFICIAL_TENDERS_LIST: TenderItem[] = [
  {
    id: 'T-001',
    referenceNo: 'RGUKT-AP/NIQ/LAB/2024/01',
    title: 'Supply, Installation and Commissioning of Core Engineering Laboratory Equipment and Consumables',
    campus: 'Central Office',
    category: 'IT & Laboratory Supplies',
    postedDate: '15-Mar-2024',
    closingDate: '30-Mar-2024',
    status: 'Archived',
  },
  {
    id: 'T-002',
    referenceNo: 'RGUKT-AP/NIQ/CIVIL/2024/02',
    title: 'Civil Maintenance, Flooring Repair and Infrastructure Upkeep in Academic and Residential Blocks',
    campus: 'Nuzvid',
    category: 'Civil Works & Maintenance',
    postedDate: '10-Feb-2024',
    closingDate: '25-Feb-2024',
    status: 'Archived',
  },
  {
    id: 'T-003',
    referenceNo: 'RGUKT-AP/NIQ/WATER/2024/03',
    title: 'Maintenance and Replacement of RO Plant Membranes and Water Purification Filters',
    campus: 'RK Valley',
    category: 'Goods & Equipment',
    postedDate: '18-Jan-2024',
    closingDate: '02-Feb-2024',
    status: 'Archived',
  },
  {
    id: 'T-004',
    referenceNo: 'RGUKT-AP/NIQ/IT/2023/04',
    title: 'Procurement of High-Performance Computing Workstations and Network Switching Infrastructure',
    campus: 'Srikakulam',
    category: 'IT & Laboratory Supplies',
    postedDate: '05-Dec-2023',
    closingDate: '20-Dec-2023',
    status: 'Archived',
  },
  {
    id: 'T-005',
    referenceNo: 'RGUKT-AP/NIQ/GEN/2023/05',
    title: 'Supply of Office Stationery, Printing Materials and Student Examination Consumables',
    campus: 'Ongole',
    category: 'Services & Operations',
    postedDate: '12-Nov-2023',
    closingDate: '27-Nov-2023',
    status: 'Archived',
  },
];

export const TENDERS_CONTACTS = [
  {
    name: 'Office of the Finance Officer',
    role: 'Procurement & Finance Directorate, RGUKT-AP',
    email: 'fo@rgukt.in',
    note: 'Office: Administrative Block, RGUKT',
  },
  {
    name: 'Office of the Registrar',
    role: 'Central Administration, RGUKT-AP',
    email: 'registrar@rgukt.in',
  },
];
