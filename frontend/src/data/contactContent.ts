/**
 * RGUKT-AP Contact Directory & Communication Information
 * Official addresses, apex administration, four constituent campuses, and functional desks.
 */

export interface CampusContactInfo {
  campus: string;
  badge: string;
  location: string;
  directorContact: {
    title: string;
    email: string;
    phone: string;
  };
  adminContact: {
    title: string;
    email: string;
    phone: string;
  };
  academicsEmail: string;
  websiteUrl: string;
  mapsUrl: string;
}

export interface FunctionalDeskContact {
  department: string;
  purpose: string;
  email: string;
  alternateEmail?: string;
  phone?: string;
  badge: string;
}

export const CENTRAL_OFFICE_INFO = {
  name: 'RGUKT-AP Central Administration',
  subtitle: 'University Headquarters & Apex Leadership',
  address: 'RGUKT-AP Central Office, RK Valley Campus, Idupulapaya, Vempalli (M), YSR Kadapa District, Andhra Pradesh - 516330',
  transitOffice: 'AP State Higher Education Council Building, Tadepalli, Guntur District, Andhra Pradesh',
  phone: '+91-863-2344700',
  generalEmail: 'info@rgukt.in',
  registrarEmail: 'registrar@rgukt.in',
  vcEmail: 'vc@rgukt.in',
  chancellorEmail: 'chancellor@rgukt.in',
  workingHours: 'Monday – Saturday: 9:00 AM – 5:00 PM (Second Saturday & Public Holidays Closed)',
};

export const FOUR_CAMPUSES_CONTACTS: CampusContactInfo[] = [
  {
    campus: 'RGUKT Nuzvid Campus',
    badge: 'Nuzvid, Eluru District',
    location: 'Mylavaram Road, Nuzvid, Eluru District, Andhra Pradesh - 521202',
    directorContact: {
      title: 'Director',
      email: 'director@rguktn.ac.in',
      phone: '+91-8656-235147',
    },
    adminContact: {
      title: 'Administrative Officer',
      email: 'ao@rguktn.ac.in',
      phone: '+91-8656-235092',
    },
    academicsEmail: 'dean.acad@rguktn.ac.in',
    websiteUrl: 'https://rguktn.ac.in',
    mapsUrl: 'https://maps.google.com/?q=RGUKT+Nuzvid',
  },
  {
    campus: 'RGUKT RK Valley Campus',
    badge: 'Idupulapaya, Kadapa District',
    location: 'Idupulapaya, Vempalli (M), YSR Kadapa District, Andhra Pradesh - 516330',
    directorContact: {
      title: 'Director',
      email: 'director@rguktrkv.ac.in',
      phone: '+91-8588-283603',
    },
    adminContact: {
      title: 'Administrative Officer',
      email: 'ao@rguktrkv.ac.in',
      phone: '+91-8565-249202',
    },
    academicsEmail: 'dean.acad@rguktrkv.ac.in',
    websiteUrl: 'https://www.rguktrkv.ac.in',
    mapsUrl: 'https://maps.google.com/?q=RGUKT+RK+Valley',
  },
  {
    campus: 'RGUKT Ongole Campus',
    badge: 'Ongole, Prakasam District',
    location: 'Santhanuthalapadu (V&M), Prakasam District, Andhra Pradesh - 523225',
    directorContact: {
      title: 'Director',
      email: 'director@rguktong.ac.in',
      phone: '+91-8592-223133',
    },
    adminContact: {
      title: 'Administrative Officer',
      email: 'ao@rguktong.ac.in',
      phone: '+91-8592-224302',
    },
    academicsEmail: 'dean.acad@rguktong.ac.in',
    websiteUrl: 'https://www.rguktong.ac.in',
    mapsUrl: 'https://maps.google.com/?q=RGUKT+Ongole',
  },
  {
    campus: 'RGUKT Srikakulam Campus',
    badge: 'S.M. Puram, Srikakulam District',
    location: 'Permanent Campus, S.M. Puram, Etcherla (M), Srikakulam District, Andhra Pradesh - 532410',
    directorContact: {
      title: 'Director',
      email: 'director@rguktsklm.ac.in',
      phone: '+91-8942-240700',
    },
    adminContact: {
      title: 'Administrative Officer',
      email: 'ao@rguktsklm.ac.in',
      phone: '+91-8942-244102',
    },
    academicsEmail: 'dean.acad@rguktsklm.ac.in',
    websiteUrl: 'https://www.rguktsklm.ac.in',
    mapsUrl: 'https://maps.google.com/?q=RGUKT+Srikakulam',
  },
];

export const FUNCTIONAL_DESKS: FunctionalDeskContact[] = [
  {
    department: 'Admissions & Entrance Cell',
    purpose: '6-Year Integrated B.Tech Admissions, Counseling & Verification Queries',
    email: 'admissions@rgukt.in',
    phone: '+91-863-2344700',
    badge: 'Admissions Desk',
  },
  {
    department: 'Examinations & Evaluation Branch',
    purpose: 'University Grade Sheets, Transcripts, Certificates & Convocation Verification',
    email: 'controllerofexaminations@rgukt.in',
    badge: 'Examinations Desk',
  },
  {
    department: 'Directorate of Placements (EITP)',
    purpose: 'Campus Recruitment Drives, Job Notification Forms & Corporate Liaison',
    email: 'dean.eitp@rgukt.in',
    alternateEmail: 'placement@rgukt.in',
    badge: 'Placements Desk',
  },
  {
    department: 'Directorate of Research & Development',
    purpose: 'Sponsored Projects, Ph.D. Scholar Affairs, Academic MoUs & Patents',
    email: 'dean.research@rgukt.in',
    badge: 'R&D Cell',
  },
  {
    department: 'Internal Complaints Committee & Anti-Ragging',
    purpose: 'Safe Campus Grievance Redressal, Student Support & Women Protection',
    email: 'icc@rgukt.in',
    alternateEmail: 'antiragging@rgukt.in',
    badge: 'Grievance Desk',
  },
  {
    department: 'Alumni Engagement Directorate',
    purpose: 'Alumni Network Membership, Chapters, Mentorship & Reunion Coordination',
    email: 'alumni@rgukt.in',
    badge: 'Alumni Relations',
  },
];
