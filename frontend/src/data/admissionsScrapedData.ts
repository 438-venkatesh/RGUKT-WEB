import scraped from './admissionsScraped.json';
import {
  ADMISSIONS_2025_DATA,
  ADMISSIONS_2026_DATA,
  ADMISSIONS_FAQ,
  ADMISSIONS_HELPLINE,
  ADMISSIONS_NAV,
  APPLICATION_PROCESS_DATA,
  DOCTORAL_ADMISSIONS_DATA,
  ELIGIBILITY_MODULE_DATA,
  FEE_STRUCTURE_DATA,
  MAIN_SITE_URL,
  OFFICIAL_PORTAL_URL,
  PG_ADMISSIONS_DATA,
  RGUKT_CAMPUSES,
  UG_ADMISSIONS_DATA,
} from './admissionsContent';

export type AdmissionsDocument = {
  title: string;
  url: string;
  size?: string;
  badge?: string;
};

export type AdmissionsSection = {
  heading: string;
  content?: string[];
  items?: string[];
  subsections?: {
    title: string;
    description: string;
  }[];
};

export type AdmissionsHighlight = {
  value: string;
  label: string;
};

export type AdmissionsHelpline = {
  email: string;
  phones: string[];
  timings: string;
  emailFormatNotice?: string;
  emailFields: string[];
};

export type AdmissionsBanner = {
  status: 'open' | 'closed' | 'closed-sports-open' | 'archive';
  headline: string;
  badge?: string;
  description?: string;
  sportsNotice?: string;
  lastDate?: string;
  applyUrl?: string;
};

export type AdmissionsScheduleItem = {
  sNo: number;
  event: string;
  date: string;
  status: string;
};

export type AdmissionsStep = {
  step: number;
  title: string;
  badge: string;
  description: string;
  actionNote?: string;
};

export type AdmissionsCampus = {
  name: string;
  district: string;
  location: string;
  established: string;
  overview: string;
  branches: string[];
  href: string;
};

export type AdmissionsSpecialization = {
  name: string;
  department: string;
  focus: string;
  campus: string;
  eligibility: string;
};

export type AdmissionsFeeItem = {
  type: string;
  amount: string;
  recurrence: string;
};

export type AdmissionsTuitionItem = {
  programme: string;
  forAP: string;
  forOtherStates: string;
  reimbursement: string;
};

export type AdmissionsPageData = {
  slug: string;
  displayTitle: string;
  rguktUrl: string;
  heroImage: string;
  intro: string;
  highlights: AdmissionsHighlight[];
  sections: AdmissionsSection[];
  documents: AdmissionsDocument[];
  banner?: AdmissionsBanner;
  helpline?: AdmissionsHelpline;
  schedule?: AdmissionsScheduleItem[];
  steps?: AdmissionsStep[];
  campuses?: AdmissionsCampus[];
  specializations?: AdmissionsSpecialization[];
  applicationFees?: { category?: string; type?: string; fee?: string; amount?: string; mode?: string; recurrence?: string }[];
  tuitionFees?: AdmissionsTuitionItem[];
  oneTimeFees?: { feeHead: string; amount: string; note: string }[];
  criticalChecklist?: string[];
  tieBreakingRules?: string[];
  faq?: { q: string; a: string }[];
  portalUrl: string;
  pageStatus: 'ok' | 'not_found_on_source' | 'fallback';
  sourceNote?: string;
};

export const ADMISSIONS_PAGE_KEYS: Record<string, string> = {
  overview: 'overview',
  '2025': '2025',
  '2026': '2026',
  postgraduate: 'postgraduate',
  doctoral: 'doctoral',
  eligibility: 'eligibility',
  process: 'process',
  fees: 'fees',
};

const DISPLAY_TITLES: Record<string, string> = {
  overview: 'UG Admissions',
  '2025': 'Admissions 2025',
  '2026': 'Admissions 2026',
  postgraduate: 'PG Admissions',
  doctoral: 'Doctoral Admissions',
  eligibility: 'Eligibility Criteria',
  process: 'Application Process',
  fees: 'Fee Structure',
};

const HERO_IMAGES: Record<string, string> = {
  overview: '/admissions/admissions-banner.jpg',
  '2025': '/campuses/nuzvid.jpg',
  '2026': '/admissions/admissions-banner.jpg',
  postgraduate: '/gallery/gallery-1.jpg',
  doctoral: '/gallery/gallery-12.jpg',
  eligibility: '/gallery/gallery-7.jpg',
  process: '/gallery/gallery-3.jpg',
  fees: '/gallery/gallery-9.jpg',
};

export function getAdmissionsPage(pageKey: string): AdmissionsPageData {
  const slug = ADMISSIONS_PAGE_KEYS[pageKey] ?? pageKey;
  const raw = scraped.pages.find(p => p.slug === slug);
  const portalUrl = raw?.portalUrl ?? OFFICIAL_PORTAL_URL;
  const displayTitle = DISPLAY_TITLES[slug] ?? 'UG Admissions';
  const heroImage = HERO_IMAGES[slug] ?? '/admissions/admissions-banner.jpg';
  const rguktUrl = raw?.rguktUrl ?? (slug === '2026' ? 'https://admissions.rgukt.in/' : MAIN_SITE_URL);

  const helpline: AdmissionsHelpline = {
    email: ADMISSIONS_HELPLINE.email,
    phones: ADMISSIONS_HELPLINE.phones,
    timings: ADMISSIONS_HELPLINE.timings,
    emailFormatNotice: ADMISSIONS_HELPLINE.emailFormatNotice,
    emailFields: [
      'RGUKT Application Number',
      'Full Name',
      'SSC Hall Ticket Number',
      'Mobile Number',
      'Problem Description',
    ],
  };

  switch (slug) {
    case 'overview':
      return {
        slug: 'overview',
        displayTitle,
        rguktUrl,
        heroImage,
        intro: 'RGUKT-AP offers a prestigious 6-Year Integrated B.Tech Programme catering to meritorious rural talent across four constituent institutes (Nuzvid, RK Valley, Ongole, and Srikakulam). Admissions are purely merit-based on 10th Class (SSC) marks with a 4% deprivation score for non-residential government school students.',
        highlights: UG_ADMISSIONS_DATA.stats,
        banner: {
          status: 'closed-sports-open',
          headline: 'Admissions for AY 2026–27 are CLOSED EXCEPT SPORTS QUOTA',
          badge: 'AY 2026–27 Status',
          description: 'Regular admission phases and certificate verifications (Phases I–V) have concluded. Special Category (Sports) provisional lists will be published once verified lists are received from SAAP AP.',
          applyUrl: OFFICIAL_PORTAL_URL,
        },
        campuses: RGUKT_CAMPUSES,
        tieBreakingRules: UG_ADMISSIONS_DATA.tieBreakingRules,
        sections: [
          {
            heading: '6-Year Integrated B.Tech Academic Structure',
            content: [
              'The flagship undergraduate academic model at RGUKT integrates two years of Pre-University Course (PUC) and four years of Bachelor of Technology (B.Tech) into a seamless 6-year residential curriculum.',
            ],
            subsections: [
              {
                title: UG_ADMISSIONS_DATA.programmeStructure.puc.title,
                description: `${UG_ADMISSIONS_DATA.programmeStructure.puc.duration} — ${UG_ADMISSIONS_DATA.programmeStructure.puc.curriculum} ${UG_ADMISSIONS_DATA.programmeStructure.puc.details}`,
              },
              {
                title: UG_ADMISSIONS_DATA.programmeStructure.btech.title,
                description: `${UG_ADMISSIONS_DATA.programmeStructure.btech.duration} — ${UG_ADMISSIONS_DATA.programmeStructure.btech.curriculum} ${UG_ADMISSIONS_DATA.programmeStructure.btech.allocation}`,
              },
            ],
          },
          {
            heading: 'Admission Basis & 4% Deprivation Score',
            content: [
              UG_ADMISSIONS_DATA.selectionBasis.rule,
              UG_ADMISSIONS_DATA.selectionBasis.deprivationScore,
              UG_ADMISSIONS_DATA.selectionBasis.noEntrance,
            ],
          },
          {
            heading: 'Seat Reservation & State Allocation Matrix',
            content: [
              UG_ADMISSIONS_DATA.seatAllocation.localRatio,
              UG_ADMISSIONS_DATA.seatAllocation.unreservedRatio,
              UG_ADMISSIONS_DATA.seatAllocation.supernumerary,
            ],
            items: [
              'Scheduled Castes (SC): 15% Statutory Reservation',
              'Scheduled Tribes (ST): 6% Statutory Reservation',
              'Backward Classes (BC): BC-A (7%), BC-B (10%), BC-C (1%), BC-D (7%), BC-E (4%)',
              'Economically Weaker Sections (EWS): 10% as per AP State Government policy',
              'Differently Abled (PH / PwD): 5% Horizontal (Verified on SADAREM)',
              'Children of Armed Personnel (CAP): 2% Horizontal (Sainik Welfare Board)',
              'National Cadet Corps (NCC): 1% Horizontal (NCC Directorate AP & TS)',
              'Sports & Games: 0.5% Horizontal (Evaluated and certified by SAAP AP)',
              'Bharat Scouts & Guides: 0.5% Horizontal (Rashtrapati / Rajya Puraskar certified)',
            ],
          },
        ],
        documents: [
          {
            title: 'RGUKT Admissions 2026 Schedule & Notification',
            url: '/admissions/ImportantDates.jpg',
            badge: 'Official Schedule',
          },
        ],
        helpline,
        faq: ADMISSIONS_FAQ,
        portalUrl,
        pageStatus: 'ok',
      };

    case '2026':
      return {
        slug: '2026',
        displayTitle,
        rguktUrl,
        heroImage,
        intro: 'Official portal details, fee schedule, application guidelines, and calendar for the RGUKT-AP Undergraduate Admissions 2026–27 cycle.',
        highlights: [
          { value: 'Closed*', label: 'Regular Admissions (Phases I–V Done)' },
          { value: 'Active', label: 'Sports Quota Evaluation (via SAAP)' },
          { value: '₹400 / ₹250', label: 'AP Application Fee (OC/BC vs SC/ST)' },
          { value: '4 Steps', label: 'Centralized Online Application' },
        ],
        banner: {
          status: 'closed-sports-open',
          badge: ADMISSIONS_2026_DATA.statusBanner.badge,
          headline: ADMISSIONS_2026_DATA.statusBanner.headline,
          description: ADMISSIONS_2026_DATA.statusBanner.description,
          sportsNotice: ADMISSIONS_2026_DATA.statusBanner.sportsNotice,
          applyUrl: OFFICIAL_PORTAL_URL,
        },
        steps: ADMISSIONS_2026_DATA.applicationSteps,
        applicationFees: ADMISSIONS_2026_DATA.applicationFees,
        criticalChecklist: ADMISSIONS_2026_DATA.criticalChecklist,
        schedule: ADMISSIONS_2026_DATA.officialSchedule,
        sections: [
          {
            heading: 'Required Documents for Certificate Verification',
            items: ADMISSIONS_2026_DATA.requiredDocuments,
          },
        ],
        documents: [
          {
            title: 'RGUKT Admissions 2026 Important Dates & Schedule Notification',
            url: '/admissions/ImportantDates.jpg',
            badge: 'Official Schedule',
          },
        ],
        helpline,
        portalUrl: OFFICIAL_PORTAL_URL,
        pageStatus: 'ok',
      };

    case '2025':
      return {
        slug: '2025',
        displayTitle,
        rguktUrl,
        heroImage,
        intro: 'Archival records and historical admission data for the 2025–26 academic cycle. All admissions for this cycle have concluded.',
        highlights: [
          { value: 'Concluded', label: 'AY 2025–26 Status' },
          { value: '4 Campuses', label: 'Centralized Merit Counselling' },
          { value: 'Aug 2025', label: 'Classes Commenced' },
          { value: 'Archive', label: 'Reference Records Only' },
        ],
        banner: {
          status: 'archive',
          badge: ADMISSIONS_2025_DATA.archiveBanner.badge,
          headline: ADMISSIONS_2025_DATA.archiveBanner.headline,
          description: ADMISSIONS_2025_DATA.archiveBanner.subtext,
          applyUrl: '/admissions/2026',
        },
        sections: [
          {
            heading: 'AY 2025–26 Historical Admissions Summary',
            content: [
              ADMISSIONS_2025_DATA.summary.intake,
              ADMISSIONS_2025_DATA.summary.mode,
            ],
            items: [
              'Phase-I Certificate Verification held across constituent institutes in June–July 2025.',
              'Special Category certificate verifications conducted centrally at RGUKT Nuzvid campus.',
              'Full fee reimbursement disbursed under Jagananna Vidya Deevena for all eligible enrolled students.',
              'Academic session 2025–26 started across all four campuses in August 2025.',
            ],
          },
          {
            heading: 'Historical Admissions Timeline (2025)',
            items: ADMISSIONS_2025_DATA.summary.timeline.map(t => `${t.date}: ${t.event}`),
          },
        ],
        documents: [],
        helpline,
        portalUrl: OFFICIAL_PORTAL_URL,
        pageStatus: 'ok',
      };

    case 'postgraduate':
      return {
        slug: 'postgraduate',
        displayTitle,
        rguktUrl: 'https://www.rgukt.in/admissions/pg-admissions/',
        heroImage,
        intro: PG_ADMISSIONS_DATA.intro,
        highlights: [
          { value: '2 Years', label: 'M.Tech Degree Duration' },
          { value: '4 Areas', label: 'Advanced Engineering Disciplines' },
          { value: 'GATE / PGECET', label: 'Admission Routes' },
          { value: '₹12,400/mo', label: 'AICTE PG Scholarship for GATE Scholars' },
        ],
        specializations: PG_ADMISSIONS_DATA.specializations,
        sections: [
          {
            heading: 'Postgraduate Admission Procedure & Fellowship',
            content: [
              PG_ADMISSIONS_DATA.admissionProcess.criteria,
              PG_ADMISSIONS_DATA.admissionProcess.fellowship,
              PG_ADMISSIONS_DATA.admissionProcess.cycleNote,
            ],
            items: [
              'B.Tech / B.E. in the relevant discipline with a minimum of 60% marks (55% for SC/ST/PwD).',
              'Valid GATE score holders receive first priority during seat allocation.',
              'Non-GATE candidates are selected on the basis of AP PGECET rank and personal interview.',
              'Selected full-time scholars have access to modern research labs, computational clusters, and digital libraries.',
            ],
          },
        ],
        documents: [],
        helpline: {
          email: 'admissions@rgukt.in',
          phones: ['97035 42597', '97054 72597'],
          timings: '10:00 AM to 1:00 PM and 2:00 PM to 5:00 PM (Working days only)',
          emailFields: ['Full Name', 'GATE/PGECET Hall Ticket', 'B.Tech Specialization', 'Query Outline'],
        },
        portalUrl: MAIN_SITE_URL,
        pageStatus: 'ok',
      };

    case 'doctoral':
      return {
        slug: 'doctoral',
        displayTitle,
        rguktUrl: 'https://www.rgukt.in/admissions/doctorial-admissions/',
        heroImage,
        intro: DOCTORAL_ADMISSIONS_DATA.intro,
        highlights: [
          { value: 'Ph.D.', label: 'Full-Time & Part-Time Modes' },
          { value: '10+ Areas', label: 'Engineering & Interdisciplinary Sciences' },
          { value: 'NET / GATE', label: 'National Exam Exemption Route' },
          { value: 'DRC', label: 'Departmental Research Committee Viva' },
        ],
        sections: [
          {
            heading: 'Ph.D. Research Disciplines & Thrust Areas',
            subsections: DOCTORAL_ADMISSIONS_DATA.disciplines.map(d => ({
              title: d.school,
              description: d.areas,
            })),
          },
          {
            heading: 'Doctoral Eligibility & Selection Framework',
            items: DOCTORAL_ADMISSIONS_DATA.eligibility,
          },
          {
            heading: 'Research Regulations & Governance',
            items: DOCTORAL_ADMISSIONS_DATA.regulations,
          },
        ],
        documents: [],
        helpline: {
          email: DOCTORAL_ADMISSIONS_DATA.contact.email,
          phones: ['97035 42597'],
          timings: '10:00 AM to 5:00 PM (Working days)',
          emailFields: ['Full Name', 'Master\'s Degree', 'UGC-NET / GATE Roll No', 'Proposed Research Area', 'Query'],
        },
        portalUrl: MAIN_SITE_URL,
        pageStatus: 'ok',
      };

    case 'eligibility':
      return {
        slug: 'eligibility',
        displayTitle,
        rguktUrl,
        heroImage,
        intro: 'Comprehensive eligibility regulations, statutory reservations, age criteria, and document verification standards for UG, PG, and Doctoral admissions at RGUKT-AP.',
        highlights: [
          { value: '10th / SSC', label: 'UG Entry Qualification (First Attempt)' },
          { value: '4% Deprivation', label: 'Score for Non-Residential Govt Schools' },
          { value: '< 18 Yrs', label: 'UG Age Limit (<21 for SC/ST)' },
          { value: '85% : 15%', label: 'Local vs Unreserved Ratio' },
        ],
        sections: [
          {
            heading: ELIGIBILITY_MODULE_DATA.ugEligibility.title,
            items: ELIGIBILITY_MODULE_DATA.ugEligibility.points.map(p => `${p.heading}: ${p.text}`),
          },
          {
            heading: ELIGIBILITY_MODULE_DATA.pgEligibility.title,
            items: ELIGIBILITY_MODULE_DATA.pgEligibility.points.map(p => `${p.heading}: ${p.text}`),
          },
          {
            heading: ELIGIBILITY_MODULE_DATA.doctoralEligibility.title,
            items: ELIGIBILITY_MODULE_DATA.doctoralEligibility.points.map(p => `${p.heading}: ${p.text}`),
          },
          {
            heading: 'Special Reservation Categories & Certificate Standards',
            items: ELIGIBILITY_MODULE_DATA.specialCategories.map(
              s => `[${s.percentage}] ${s.name} (${s.code}): ${s.criteria}`
            ),
          },
        ],
        documents: [
          {
            title: 'RGUKT Admissions 2026 Detailed Schedule',
            url: '/admissions/ImportantDates.jpg',
            badge: 'Schedule Notification',
          },
        ],
        helpline,
        portalUrl: OFFICIAL_PORTAL_URL,
        pageStatus: 'ok',
      };

    case 'process':
      return {
        slug: 'process',
        displayTitle,
        rguktUrl: 'https://admissions.rgukt.in/application',
        heroImage,
        intro: APPLICATION_PROCESS_DATA.intro,
        highlights: [
          { value: 'Step 1', label: 'Online Registration' },
          { value: 'Step 2', label: 'Fee Payment' },
          { value: 'Step 3', label: 'Application Submission' },
          { value: 'Step 4', label: 'Download & Retain Copy' },
        ],
        steps: ADMISSIONS_2026_DATA.applicationSteps,
        criticalChecklist: ADMISSIONS_2026_DATA.criticalChecklist,
        sections: APPLICATION_PROCESS_DATA.stages.map(stage => ({
          heading: stage.phase,
          content: [stage.summary],
          items: stage.items,
        })),
        documents: [
          {
            title: 'RGUKT Admissions 2026 Verification Schedule',
            url: '/admissions/ImportantDates.jpg',
            badge: 'Official Schedule',
          },
        ],
        helpline,
        portalUrl: OFFICIAL_PORTAL_URL,
        pageStatus: 'ok',
      };

    case 'fees':
      return {
        slug: 'fees',
        displayTitle,
        rguktUrl,
        heroImage,
        intro: FEE_STRUCTURE_DATA.intro,
        highlights: [
          { value: '₹400 / ₹250', label: 'AP Application Fee (OC/BC vs SC/ST)' },
          { value: '₹45k / ₹50k', label: 'Annual Tuition (PUC / B.Tech)' },
          { value: '100%', label: 'Reimbursement for Eligible AP Students' },
          { value: 'Dividing', label: 'Non-Profit Student Mess System' },
        ],
        applicationFees: FEE_STRUCTURE_DATA.applicationFees,
        tuitionFees: FEE_STRUCTURE_DATA.tuitionFees,
        oneTimeFees: FEE_STRUCTURE_DATA.oneTimeAndInstitutionalFees,
        sections: [
          {
            heading: FEE_STRUCTURE_DATA.reimbursementScheme.title,
            content: [
              FEE_STRUCTURE_DATA.reimbursementScheme.eligibility,
              FEE_STRUCTURE_DATA.reimbursementScheme.benefits,
            ],
            items: [
              'Applicable to SC, ST, BC, EBC, Kapu, Minority, and Differently-Abled students.',
              'Annual family income must be below ₹2.50 Lakh.',
              'Requires active biometric attendance compliance in academic sessions.',
              'Living and boarding assistance supported under Vasathi Deevena.',
            ],
          },
          {
            heading: FEE_STRUCTURE_DATA.hostelAndMessDetails.title,
            content: [FEE_STRUCTURE_DATA.hostelAndMessDetails.description],
            items: [
              'Monthly mess expenses: Approx. ₹2,500 – ₹3,200/month on dividing system.',
              'Refundable caution deposit (₹1,000–₹2,000) payable at admission.',
              'Annual student health insurance premium (₹1,200/year).',
              'No commercial fee markups; managed on actual cost basis.',
            ],
          },
        ],
        documents: [
          {
            title: 'RGUKT Admissions 2026 Schedule Notification',
            url: '/admissions/ImportantDates.jpg',
            badge: 'Official Schedule',
          },
        ],
        helpline,
        portalUrl: OFFICIAL_PORTAL_URL,
        pageStatus: 'ok',
      };

    default:
      return {
        slug,
        displayTitle,
        rguktUrl,
        heroImage,
        intro: 'RGUKT-AP Admissions Information.',
        highlights: [],
        sections: [],
        documents: [],
        portalUrl: OFFICIAL_PORTAL_URL,
        pageStatus: 'ok',
      };
  }
}

export { ADMISSIONS_NAV };
