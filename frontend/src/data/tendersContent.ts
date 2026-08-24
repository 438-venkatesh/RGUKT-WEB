/**
 * RGUKT-AP Tenders & e-Procurement Content (2025–2026)
 * Governed by the Finance & Procurement Directorate across Central Administration,
 * Nuzvid, RK Valley, Ongole, and Srikakulam campuses.
 */

export interface TenderItem {
  id: string;
  referenceNo: string;
  title: string;
  campus: 'Central Admin' | 'Nuzvid' | 'RK Valley' | 'Ongole' | 'Srikakulam';
  category: 'Goods & Consumables' | 'Civil & Infrastructure' | 'Services & Catering' | 'Lab & IT Equipment';
  postedDate: string;
  closingDate: string;
  status: 'Open' | 'In Progress' | 'Archived';
  documentUrl?: string;
  isEProcurement?: boolean;
}

export interface BidderGuideline {
  title: string;
  tagline: string;
  description: string;
  icon: string;
}

export interface CampusProcurementContact {
  campus: string;
  office: string;
  email: string;
  alternateEmail?: string;
  phone?: string;
  deskType: string;
}

export const TENDERS_INTRO = {
  title: 'Tenders & e-Procurement at RGUKT-AP',
  lead:
    'Rajiv Gandhi University of Knowledge Technologies – Andhra Pradesh invites competitive bids and quotations from registered, competent manufacturers, contractors, and authorized suppliers for goods, laboratory equipment, civil works, catering, and campus services across Central Administration, Nuzvid, RK Valley (Idupulapaya), Ongole, and Srikakulam campuses.',
  eprocurementNote:
    'Major Open Competitive Bids (OCB), campus security, catering services, and large civil tenders are processed through the official Government of Andhra Pradesh e-Procurement Platform (tender.apeprocurement.gov.in) and Government e-Marketplace (GeM) adhering to AP Public Procurement guidelines.',
};

export const BIDDER_GUIDELINES: BidderGuideline[] = [
  {
    title: 'AP e-Procurement Registration & DSC',
    tagline: 'Digital Bid Submission',
    description:
      'Bidders participating in Open Competitive Bids (OCB) must be registered on the AP e-Procurement portal and possess a valid Class-III Digital Signature Certificate (DSC) for online submission.',
    icon: 'dsc',
  },
  {
    title: 'Two-Cover Evaluation System',
    tagline: 'Technical & Commercial Segregation',
    description:
      'Tenders typically follow a two-cover evaluation: Cover-1 (Technical Qualification, GST, PAN, Turn-Over, Experience) and Cover-2 (Commercial Price Bid / BOQ).',
    icon: 'two-cover',
  },
  {
    title: 'EMD & Tender Fee Compliance',
    tagline: 'Security Deposit & Guidelines',
    description:
      'Earnest Money Deposit (EMD) and Tender Processing Fees must be submitted online via the payment gateway or through Demand Draft/Bank Guarantee favoring the respective Campus Finance Officer.',
    icon: 'emd',
  },
  {
    title: 'Corrigenda & Amendments Tracking',
    tagline: 'Timeline & Specification Updates',
    description:
      'Any pre-bid queries, specification modifications, or closing date extensions are officially published as Corrigenda/Addenda on the e-Procurement portal and university website.',
    icon: 'corrigenda',
  },
];

export const OFFICIAL_TENDERS_LIST: TenderItem[] = [
  {
    id: 'T-2026-001',
    referenceNo: 'NIQ-20260811-01',
    title: 'Supply and Delivery of RO Membranes and Consumable Spares for Campus Drinking Water RO Plant',
    campus: 'Nuzvid',
    category: 'Goods & Consumables',
    postedDate: '11-Aug-2026',
    closingDate: '17-Aug-2026',
    status: 'Open',
    documentUrl: 'https://rguktn.ac.in/tenders/docs/2026/08/NIQ-20260811-01.pdf',
  },
  {
    id: 'T-2026-002',
    referenceNo: 'NIQ-20260810-01',
    title: 'Replacement of Damaged Tiles Flooring with Cement Concrete in K-2 Girls Hostel Building',
    campus: 'Nuzvid',
    category: 'Civil & Infrastructure',
    postedDate: '10-Aug-2026',
    closingDate: '17-Aug-2026',
    status: 'Open',
    documentUrl: 'https://rguktn.ac.in/tenders/docs/2026/08/NIQ-20260810-01.pdf',
  },
  {
    id: 'T-2026-003',
    referenceNo: 'NIQ-20260806-01',
    title: 'Supply and Delivery of Sewage Treatment Plant (STP) Consumables and Specialized Bio-Enzymes for 6 Months',
    campus: 'Nuzvid',
    category: 'Goods & Consumables',
    postedDate: '06-Aug-2026',
    closingDate: '14-Aug-2026',
    status: 'In Progress',
    documentUrl: 'https://rguktn.ac.in/tenders/docs/2026/08/NIQ-20260806-01.pdf',
  },
  {
    id: 'T-2026-004',
    referenceNo: 'RGUKT-RKV/T/2026/012',
    title: 'Notice Inviting Tender for Annual Maintenance Contract (AMC) of Central Computational Server Infrastructure',
    campus: 'RK Valley',
    category: 'Lab & IT Equipment',
    postedDate: '04-Aug-2026',
    closingDate: '18-Aug-2026',
    status: 'Open',
    documentUrl: 'https://www.rguktrkv.ac.in/',
    isEProcurement: true,
  },
  {
    id: 'T-2026-005',
    referenceNo: 'NIQ-20260803-01',
    title: 'Supply, Delivery, Installation and Demonstration of Planetary Mortar Mixer for Concrete Technology Laboratory',
    campus: 'Nuzvid',
    category: 'Lab & IT Equipment',
    postedDate: '03-Aug-2026',
    closingDate: '12-Aug-2026',
    status: 'In Progress',
    documentUrl: 'https://rguktn.ac.in/tenders/docs/2026/08/NIQ-20260803-01.pdf',
  },
  {
    id: 'T-2026-006',
    referenceNo: 'NIQ-20260803-02',
    title: 'Supply and Delivery of 53-Grade Ordinary Portland Cement for Campus Maintenance and Civil Works',
    campus: 'Nuzvid',
    category: 'Civil & Infrastructure',
    postedDate: '03-Aug-2026',
    closingDate: '10-Aug-2026',
    status: 'Archived',
    documentUrl: 'https://rguktn.ac.in/tenders/docs/2026/08/NIQ-20260803-02.pdf',
  },
  {
    id: 'T-2026-007',
    referenceNo: 'RGUKT-AP/T/2026/008',
    title: 'Open Competitive Bid (e-Procurement) for Student Dining and Hostel Mess Catering Services across Campuses',
    campus: 'Central Admin',
    category: 'Services & Catering',
    postedDate: '28-Jul-2026',
    closingDate: '18-Aug-2026',
    status: 'Open',
    documentUrl: 'https://tender.apeprocurement.gov.in',
    isEProcurement: true,
  },
  {
    id: 'T-2026-008',
    referenceNo: 'RGUKT-SKLM/T/2026/005',
    title: 'Notice Inviting Quotation for Supply of Organic Chemistry and Physical Chemistry Analytical Grade Reagents',
    campus: 'Srikakulam',
    category: 'Goods & Consumables',
    postedDate: '25-Jul-2026',
    closingDate: '05-Aug-2026',
    status: 'Archived',
    documentUrl: 'https://www.rguktsklm.ac.in/',
  },
  {
    id: 'T-2026-009',
    referenceNo: 'RGUKT-ONG/T/2026/004',
    title: 'Supply, Testing and Commissioning of Digital Storage Oscilloscopes and Function Generators for ECE Labs',
    campus: 'Ongole',
    category: 'Lab & IT Equipment',
    postedDate: '20-Jul-2026',
    closingDate: '02-Aug-2026',
    status: 'Archived',
    documentUrl: 'https://www.rgukt.in/',
  },
  {
    id: 'T-2026-010',
    referenceNo: 'RGUKT-AP/T/2026/002',
    title: 'Open Competitive Bid (e-Procurement) for Providing Round-the-Clock Security and Watch & Ward Services',
    campus: 'Central Admin',
    category: 'Services & Catering',
    postedDate: '15-Jul-2026',
    closingDate: '30-Jul-2026',
    status: 'Archived',
    documentUrl: 'https://tender.apeprocurement.gov.in',
    isEProcurement: true,
  },
];

export const CAMPUS_PROCUREMENT_CONTACTS: CampusProcurementContact[] = [
  {
    campus: 'Central Administration',
    office: 'Office of the Finance Officer & Purchase Section, RGUKT-AP Central Office',
    email: 'fo@rgukt.in',
    alternateEmail: 'procurement@rgukt.in',
    deskType: 'University Apex Procurement',
  },
  {
    campus: 'RGUKT Nuzvid Campus',
    office: 'Stores & Purchase Section, Administrative Block, RGUKT Nuzvid Campus',
    email: 'procurement@rguktn.ac.in',
    alternateEmail: 'stores@rguktn.ac.in',
    deskType: 'Campus Stores & Tenders',
  },
  {
    campus: 'RGUKT RK Valley Campus',
    office: 'Purchase & Stores Department, Academic Block - 1, RGUKT RK Valley',
    email: 'procurement@rguktrkv.ac.in',
    alternateEmail: 'stores@rguktrkv.ac.in',
    deskType: 'Campus Stores & Tenders',
  },
  {
    campus: 'RGUKT Ongole Campus',
    office: 'Procurement Liaison Desk, Administrative Office, RGUKT Ongole',
    email: 'procurement@rguktong.ac.in',
    deskType: 'Campus Procurement Desk',
  },
  {
    campus: 'RGUKT Srikakulam Campus',
    office: 'Purchase Section, Permanent Campus, S.M. Puram, Etcherla',
    email: 'procurement@rguktsklm.ac.in',
    deskType: 'Campus Procurement Desk',
  },
];
