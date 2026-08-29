/**
 * RGUKT-AP Contact Directory & Information — Single Source of Truth: https://rgukt.in
 *
 * Strictly derived from official RGUKT contact records.
 * Contains no external addresses, fake phone numbers, or unverified emails.
 */

export interface CampusContactInfo {
  campus: string;
  badge: string;
  location: string;
  email: string;
}

export interface OfficerEmailContact {
  office: string;
  role: string;
  email: string;
}

export const CENTRAL_OFFICE_INFO = {
  name: 'Rajiv Gandhi University of Knowledge Technologies – Andhra Pradesh',
  headOfficeTitle: 'Head Office Address',
  headOfficeAddress: 'RGUKT - RK Valley Campus, Idupulapaya, Vempalli, Kadapa District, Andhra Pradesh, Pin: 516330',
  campOfficeTitle: 'Camp Office Address',
  campOfficeAddress: 'RGUKT - Nuzvid Campus, Nuzvid, Krishna District, Andhra Pradesh, Pin: 521202',
  campOfficePhone: '7670905558',
  rguktUrl: 'https://www.rgukt.in/contact-us/',
};

export const APEX_OFFICER_EMAILS: OfficerEmailContact[] = [
  { office: 'Office of the Chancellor', role: 'Chancellor, RGUKT-AP', email: 'chancellor@rgukt.in' },
  { office: 'Office of the Vice-Chancellor', role: 'Vice-Chancellor, RGUKT-AP', email: 'vc@rgukt.in' },
  { office: 'Office of the Registrar', role: 'Registrar, RGUKT-AP', email: 'registrar@rgukt.in' },
  { office: 'Office of the Finance Officer', role: 'Finance Officer, RGUKT-AP', email: 'fo@rgukt.in' },
  { office: 'Dean of Academic Affairs', role: 'Academic Governance, RGUKT-AP', email: 'dean.academics@rgukt.in' },
  { office: 'Dean of Examinations & Evaluation', role: 'Examinations Directorate, RGUKT-AP', email: 'dean.evaluation@rgukt.in' },
  { office: 'Dean of Research & Development', role: 'R&D Directorate, RGUKT-AP', email: 'dean.rd@rgukt.in' },
  { office: 'Dean of Entrepreneurship, Incubation, Training & Placements', role: 'EITP & Placements, RGUKT-AP', email: 'dean.eitp@rgukt.in' },
  { office: 'Dean of Internal Quality Assurance Cell', role: 'IQAC Directorate, RGUKT-AP', email: 'dean.iqac@rgukt.in' },
];

export const FOUR_CAMPUSES_CONTACTS: CampusContactInfo[] = [
  {
    campus: 'RGUKT Nuzvid Campus',
    badge: 'Nuzvid, Krishna District',
    location: 'Mylavaram Road, Nuzvid, Krishna District, Andhra Pradesh - 521202',
    email: 'ao@rguktn.ac.in',
  },
  {
    campus: 'RGUKT RK Valley Campus',
    badge: 'Idupulapaya, Kadapa District',
    location: 'Idupulapaya, Vempalli (M), YSR Kadapa District, Andhra Pradesh - 516330',
    email: 'ao@rguktrkv.ac.in',
  },
  {
    campus: 'RGUKT Ongole Campus',
    badge: 'Ongole, Prakasam District',
    location: 'Santhanuthalapadu (V&M), Prakasam District, Andhra Pradesh - 523225',
    email: 'ao@rguktong.ac.in',
  },
  {
    campus: 'RGUKT Srikakulam Campus',
    badge: 'S.M. Puram, Srikakulam District',
    location: 'S.M. Puram, Etcherla Mandal, Srikakulam District, Andhra Pradesh - 532410',
    email: 'ao@rguktsklm.ac.in',
  },
];

export const CONTACT_QUERIES = [
  {
    name: 'General University Inquiries',
    role: 'Central Administration, RGUKT-AP',
    email: 'registrar@rgukt.in',
    phone: '7670905558',
    note: 'Camp Office: RGUKT Nuzvid Campus',
  },
  {
    name: 'Training & Placements Desk',
    role: 'Directorate of EITP',
    email: 'placements@rgukt.in',
  },
  {
    name: 'Alumni Engagement Desk',
    role: 'Alumni Relations Network',
    email: 'alumni@rgukt.in',
  },
];
