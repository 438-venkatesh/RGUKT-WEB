/**
 * Official Examination Results & Examination Cell Data for RGUKT Nuzvid
 * Verified strictly against:
 * - https://rguktn.ac.in/examcell/
 * - https://examcell.rguktn.ac.in/
 */

export type Programme = 'PUC' | 'Engineering' | 'M.Tech' | 'All';
export type ResultType = 'Regular' | 'Remedial' | 'Recounting & Revaluation' | 'Fresh Mode' | 'Consolidated';

export interface ExamResultItem {
  id: string;
  title: string;
  date: string;
  isoDate: string;
  programme: 'PUC' | 'Engineering' | 'M.Tech';
  batch: string;
  year?: string;
  semester?: string;
  resultType: ResultType;
  link: string;
  isExternalDoc: boolean;
  isNew?: boolean;
  isArchived?: boolean;
  notes?: string;
}

export interface TimetableItem {
  id: string;
  title: string;
  programme: 'PUC' | 'Engineering' | 'M.Tech' | 'Integrated';
  session: string;
  academicYear: string;
  date: string;
  fileUrl: string;
  isCurrent?: boolean;
  isArchived?: boolean;
  tag: string;
}

export interface ExamProcedureStep {
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  points: string[];
  actionLink?: {
    label: string;
    url: string;
  };
}

export interface OfficialDownloadItem {
  id: string;
  title: string;
  description: string;
  url: string;
  category: 'Registration' | 'Certificates' | 'Guidelines' | 'Academic Rules';
  isNew?: boolean;
  tag: string;
}

export interface CertificateServiceInfo {
  category: string;
  title: string;
  issuingOffice: string;
  requirement: string;
  items: string[];
  contactEmail: string;
}

/** Official Examination Result Notices */
export const OFFICIAL_EXAM_RESULTS: ExamResultItem[] = [
  {
    id: 'res-2026-08-25-1',
    title: 'Results of the PUC remedial exam conducted during 19-22 Aug 2026',
    date: 'August 25, 2026',
    isoDate: '2026-08-25',
    programme: 'PUC',
    batch: '2022, 2023, 2024 (N22, N23, N24)',
    year: 'PUC 1st & 2nd Year',
    semester: 'Remedial',
    resultType: 'Remedial',
    link: 'https://examcell.rguktn.ac.in/docs/PUC_N24,N23,N22-Batches_Remedial-Exam_19-22_Aug_Results.pdf',
    isExternalDoc: true,
    isNew: true,
  },
  {
    id: 'res-2026-08-10-1',
    title: 'Update PUC Grade remedial (2020, 2022, 2023, 2024 Batch) Results-July-2026',
    date: 'August 10, 2026',
    isoDate: '2026-08-10',
    programme: 'PUC',
    batch: '2020, 2022, 2023, 2024',
    year: 'PUC',
    semester: 'Grade Remedial',
    resultType: 'Remedial',
    link: 'https://examcell.rguktn.ac.in/docs/PUC-Grade_Remedial_2020,2022,2023,2024-Batch_Results-July-2026.pdf',
    isExternalDoc: true,
    isNew: true,
  },
  {
    id: 'res-2026-08-04-1',
    title: 'E1S2, E2S2, E3S2, E4S2 (2020 batch) Remedial Results-June 2026',
    date: 'August 04, 2026',
    isoDate: '2026-08-04',
    programme: 'Engineering',
    batch: '2020',
    year: '1st, 2nd, 3rd, 4th Year',
    semester: 'Sem 2',
    resultType: 'Remedial',
    link: 'https://examcell.rguktn.ac.in/docs/E1S2,E2S2,E3S2,E4S2_2020 batch_Remedail_Results-June,2026.pdf',
    isExternalDoc: true,
    isNew: true,
  },
  {
    id: 'res-2026-07-30-1',
    title: 'E1S1 (20,21,22 Batches), E2S1 (20,21 Batches), E3S1 (20 Batch) December Remedial Lab Results-2025-26',
    date: 'July 30, 2026',
    isoDate: '2026-07-30',
    programme: 'Engineering',
    batch: '2020, 2021, 2022',
    year: '1st, 2nd, 3rd Year',
    semester: 'Sem 1',
    resultType: 'Remedial',
    link: 'https://examcell.rguktn.ac.in/docs/E1S1_20,21,22,E2S1_20,21,E3S1_20_December_Remedial_Lab_Resutl_2025-26.pdf',
    isExternalDoc: true,
  },
  {
    id: 'res-2026-07-21-1',
    title: 'M.Tech Year (2024-Batch-CE) Semester-4 Regular examination results for July, 2026',
    date: 'July 21, 2026',
    isoDate: '2026-07-21',
    programme: 'M.Tech',
    batch: '2024',
    year: '2nd Year',
    semester: 'Sem 4',
    resultType: 'Regular',
    link: 'https://examcell.rguktn.ac.in/docs/MTech _2024-Batch-CE_Sem-4_Regular_examination_results_July-2026.pdf',
    isExternalDoc: true,
  },
  {
    id: 'res-2026-07-15-1',
    title: 'M.Tech 1st Year (2025-Batch-ECE) Semester-1 Regular examination results for April, 2026',
    date: 'July 15, 2026',
    isoDate: '2026-07-15',
    programme: 'M.Tech',
    batch: '2025',
    year: '1st Year',
    semester: 'Sem 1',
    resultType: 'Regular',
    link: 'https://examcell.rguktn.ac.in/docs/MTech_1st-Year _2025-Batch-ECE_Sem-1_Regular_examination_results_April-2026.pdf',
    isExternalDoc: true,
  },
  {
    id: 'res-2026-07-15-2',
    title: 'PUC-1 (2025 Batch) Recounting & Revaluation Registration Results-April 2026',
    date: 'July 15, 2026',
    isoDate: '2026-07-15',
    programme: 'PUC',
    batch: '2025',
    year: 'PUC 1st Year',
    semester: 'Sem 1',
    resultType: 'Recounting & Revaluation',
    link: 'https://examcell.rguktn.ac.in/docs/PUC-1_2025-Batch_Recounting_Revaluation_Results_April-2026.pdf',
    isExternalDoc: true,
  },
  {
    id: 'res-2026-07-14-1',
    title: 'E2S2 (2022 Batch) Recounting & Revaluation Result-April 2026',
    date: 'July 14, 2026',
    isoDate: '2026-07-14',
    programme: 'Engineering',
    batch: '2022',
    year: '2nd Year',
    semester: 'Sem 2',
    resultType: 'Recounting & Revaluation',
    link: 'https://examcell.rguktn.ac.in/docs/E2S2-2022_Batch_ Recounting-Revaluation_Results-April 2026.pdf',
    isExternalDoc: true,
  },
  {
    id: 'res-2026-07-13-1',
    title: 'AY 2025-26 E1S2 (N23) & E3S2 (N21) Regular, Recounting & Revaluation Results',
    date: 'July 13, 2026',
    isoDate: '2026-07-13',
    programme: 'Engineering',
    batch: '2021, 2023',
    year: '1st, 3rd Year',
    semester: 'Sem 2',
    resultType: 'Recounting & Revaluation',
    link: 'https://examcell.rguktn.ac.in/docs/AY2025-26_E1S2-N23_E3S2-N21_Regular_Recounting-Revalutions_Results.pdf',
    isExternalDoc: true,
  },
  {
    id: 'res-2026-07-03-1',
    title: 'PUC P1S1, P1S2, P2S1, P2S2 (2024, 2023, 2022 batch) Remedial Results June, 2026',
    date: 'July 03, 2026',
    isoDate: '2026-07-03',
    programme: 'PUC',
    batch: '2022, 2023, 2024',
    year: 'PUC 1st & 2nd Year',
    semester: 'Sem 1 & 2',
    resultType: 'Remedial',
    link: 'https://examcell.rguktn.ac.in/results/202526_222324P1P2_S1S2_Rem',
    isExternalDoc: true,
  },
  {
    id: 'res-2026-07-03-2',
    title: 'E1S1 (2020, 2021, 2022) Remedial Recounting Revaluation Result Dec 2025',
    date: 'July 03, 2026',
    isoDate: '2026-07-03',
    programme: 'Engineering',
    batch: '2020, 2021, 2022',
    year: '1st Year',
    semester: 'Sem 1',
    resultType: 'Recounting & Revaluation',
    link: 'https://examcell.rguktn.ac.in/docs/E1S1_2020,2021,2022_Remedial_Recounting_Revaluation_Result_Dec_2025.pdf',
    isExternalDoc: true,
  },
  {
    id: 'res-2026-07-03-3',
    title: 'P1S1, P1S2 Remedial Recounting Revaluation results Dec-2025',
    date: 'July 03, 2026',
    isoDate: '2026-07-03',
    programme: 'PUC',
    batch: '2022, 2023, 2024',
    year: 'PUC 1st Year',
    semester: 'Sem 1 & 2',
    resultType: 'Recounting & Revaluation',
    link: 'https://examcell.rguktn.ac.in/docs/P1S1_P1S2_Remedial_Recounting_Revaluation_results_DEC-2025.pdf',
    isExternalDoc: true,
  },
  {
    id: 'res-2026-07-03-4',
    title: 'E2S1 (2020, 2021), E3S1 (2020) Remedial Recounting & Revaluation Results Dec-2025',
    date: 'July 03, 2026',
    isoDate: '2026-07-03',
    programme: 'Engineering',
    batch: '2020, 2021',
    year: '2nd, 3rd Year',
    semester: 'Sem 1',
    resultType: 'Recounting & Revaluation',
    link: 'https://examcell.rguktn.ac.in/docs/E2S1(2020,2021),E3(2020)_Remedial_Recounting_revaluation_Results.pdf',
    isExternalDoc: true,
  },
  {
    id: 'res-2026-07-03-5',
    title: 'E4S2, E3S2, E2S2, E1S2 (2020, 2021, 2022, 2023 Batch) Fresh Mode Results-May-2026',
    date: 'July 03, 2026',
    isoDate: '2026-07-03',
    programme: 'Engineering',
    batch: '2020, 2021, 2022, 2023',
    year: 'All Years',
    semester: 'Sem 2',
    resultType: 'Fresh Mode',
    link: 'https://examcell.rguktn.ac.in/docs/E4S2-E1S2(2020-23_Batch)_Fresh_Mode_Results.pdf',
    isExternalDoc: true,
  },
  {
    id: 'res-2026-07-01-1',
    title: 'M.Tech 1st Year (2025-Batch-CE) Semester-1 Regular examination results for April, 2026',
    date: 'July 01, 2026',
    isoDate: '2026-07-01',
    programme: 'M.Tech',
    batch: '2025',
    year: '1st Year',
    semester: 'Sem 1',
    resultType: 'Regular',
    link: 'https://examcell.rguktn.ac.in/docs/MTech_1st_Year_2025-Batch-CE_Sem-1_Reg_examination_results_April-2026.pdf',
    isExternalDoc: true,
  },
  {
    id: 'res-2026-07-01-2',
    title: 'M.Tech 1st Year (2025-Batch-ME) Semester-1 Regular examination results for April, 2026',
    date: 'July 01, 2026',
    isoDate: '2026-07-01',
    programme: 'M.Tech',
    batch: '2025',
    year: '1st Year',
    semester: 'Sem 1',
    resultType: 'Regular',
    link: 'https://examcell.rguktn.ac.in/docs/MTech_1st_Year_2025-Batch-ME_Sem-1_Reg_examination_results_April-2026.pdf',
    isExternalDoc: true,
  },
  {
    id: 'res-2026-06-19-1',
    title: '2018, 2019 (E1-E4) Sem-1 Remedial Recounting Results',
    date: 'June 19, 2026',
    isoDate: '2026-06-19',
    programme: 'Engineering',
    batch: '2018-2019',
    year: '1st-4th Year',
    semester: 'Sem 1',
    resultType: 'Recounting & Revaluation',
    link: 'https://examcell.rguktn.ac.in/docs/2018,2019_(E1-E4)Sem-1_Remedial_Recounting_Results.pdf',
    isExternalDoc: true,
  },
  {
    id: 'res-2026-06-19-2',
    title: 'P2S1(2024), E1S1(2023), E2S1(2022), E3S1(2021), E4S1(2020) Regular Remedial Recounting & Revaluation Registration Results Feb-2026',
    date: 'June 19, 2026',
    isoDate: '2026-06-19',
    programme: 'Engineering',
    batch: '2020, 2021, 2022, 2023, 2024',
    year: 'All Years',
    semester: 'Sem 1',
    resultType: 'Recounting & Revaluation',
    link: 'https://examcell.rguktn.ac.in/docs/P2S1(2024),E1S1(2023),E2S1(2022),E3S1(2021),E4S1(2020)_Regular_Remedial_Recounting_Revaluation_Registration_results_Feb-2026.pdf',
    isExternalDoc: true,
  },
  {
    id: 'res-2026-06-14-1',
    title: 'AY 2025-26 PUC-2 Sem-2 Regular Recounting/Revaluation results',
    date: 'June 14, 2026',
    isoDate: '2026-06-14',
    programme: 'PUC',
    batch: '2024',
    year: 'PUC 2nd Year',
    semester: 'Sem 2',
    resultType: 'Recounting & Revaluation',
    link: 'https://examcell.rguktn.ac.in/docs/AY2025-26_P2S2_Regular_Recounting-Revaluation_results.pdf',
    isExternalDoc: true,
  },
  {
    id: 'res-2026-06-09-1',
    title: 'A.Y.2025-26 Engineering 2nd Year (2022-Batch) Semester-2 regular examination results for May, 2026',
    date: 'June 09, 2026',
    isoDate: '2026-06-09',
    programme: 'Engineering',
    batch: '2022',
    year: '2nd Year',
    semester: 'Sem 2',
    resultType: 'Regular',
    link: 'https://examcell.rguktn.ac.in/results/202526_22E2_S2_Reg',
    isExternalDoc: true,
  },
  {
    id: 'res-2026-06-09-2',
    title: 'A.Y.2025-26 Engineering 3rd Year (2021-Batch) Semester-2 regular examination results for May, 2026',
    date: 'June 09, 2026',
    isoDate: '2026-06-09',
    programme: 'Engineering',
    batch: '2021',
    year: '3rd Year',
    semester: 'Sem 2',
    resultType: 'Regular',
    link: 'https://examcell.rguktn.ac.in/results/202526_21E3_S2_Reg/',
    isExternalDoc: true,
  },
  {
    id: 'res-2026-05-28-1',
    title: 'A.Y.2025-26 PUC 1st Year (2025-Batch) regular examination results',
    date: 'May 28, 2026',
    isoDate: '2026-05-28',
    programme: 'PUC',
    batch: '2025',
    year: 'PUC 1st Year',
    semester: 'Sem 1',
    resultType: 'Regular',
    link: 'https://examcell.rguktn.ac.in/results/202526_25P1_Reg',
    isExternalDoc: true,
  },
  {
    id: 'res-2026-05-28-2',
    title: 'A.Y.2025-26 Engineering 4th Year (2020-Batch) Semester-2 regular examination results',
    date: 'May 28, 2026',
    isoDate: '2026-05-28',
    programme: 'Engineering',
    batch: '2020',
    year: '4th Year',
    semester: 'Sem 2',
    resultType: 'Regular',
    link: 'https://examcell.rguktn.ac.in/results/202526_20E4_S2_Reg/',
    isExternalDoc: true,
  },
  {
    id: 'res-2026-04-22-1',
    title: 'P2S1 (2024), E1S1 (2023), E2S1 (2022), E3S1 (2021), E4S1 (2020) Regular Remedial Results Feb 2026',
    date: 'April 22, 2026',
    isoDate: '2026-04-22',
    programme: 'Engineering',
    batch: '2020, 2021, 2022, 2023, 2024',
    year: 'All Years',
    semester: 'Sem 1',
    resultType: 'Remedial',
    link: 'https://examcell.rguktn.ac.in/results/202526_2423222120P2E1E2E3E4_S1_Rem',
    isExternalDoc: true,
  },
  {
    id: 'res-2026-04-01-1',
    title: 'P1S1, P1S2 (2022, 2023, 2024) Remedial Results-Dec-2025',
    date: 'April 01, 2026',
    isoDate: '2026-04-01',
    programme: 'PUC',
    batch: '2022, 2023, 2024',
    year: 'PUC 1st Year',
    semester: 'Sem 1 & 2',
    resultType: 'Remedial',
    link: 'https://examcell.rguktn.ac.in/results/202526_222324P1_S1S2_Rem',
    isExternalDoc: true,
  },
  {
    id: 'res-2026-04-01-2',
    title: 'E1S1 (2020, 2021, 2022) Remedial Results-Dec-2025',
    date: 'April 01, 2026',
    isoDate: '2026-04-01',
    programme: 'Engineering',
    batch: '2020, 2021, 2022',
    year: '1st Year',
    semester: 'Sem 1',
    resultType: 'Remedial',
    link: 'https://examcell.rguktn.ac.in/results/202526_202122E1_S1_Rem',
    isExternalDoc: true,
  },
  {
    id: 'res-2026-01-23-1',
    title: 'A.Y.2025-26 PUC 2nd Year (2024-Batch) Semester-1 regular examination results',
    date: 'January 23, 2026',
    isoDate: '2026-01-23',
    programme: 'PUC',
    batch: '2024',
    year: 'PUC 2nd Year',
    semester: 'Sem 1',
    resultType: 'Regular',
    link: 'https://examcell.rguktn.ac.in/results/202526_24P2_S1_Reg',
    isExternalDoc: true,
  },
  {
    id: 'res-2026-01-19-1',
    title: 'A.Y.2025-26 Updated Engineering 4th Year (2020-Batch) Semester-1 regular examination results',
    date: 'January 19, 2026',
    isoDate: '2026-01-19',
    programme: 'Engineering',
    batch: '2020',
    year: '4th Year',
    semester: 'Sem 1',
    resultType: 'Regular',
    link: 'https://examcell.rguktn.ac.in/results/202526_20E4_S1_Reg',
    isExternalDoc: true,
  },
  {
    id: 'res-2026-01-14-1',
    title: 'A.Y.2025-26 Engineering 1st Year (2023-Batch) Semester-1 regular examination results',
    date: 'January 14, 2026',
    isoDate: '2026-01-14',
    programme: 'Engineering',
    batch: '2023',
    year: '1st Year',
    semester: 'Sem 1',
    resultType: 'Regular',
    link: 'https://examcell.rguktn.ac.in/results/202526_23E1_S1_Reg',
    isExternalDoc: true,
  },
  {
    id: 'res-2026-01-07-1',
    title: 'A.Y.2025-26 Engineering 3rd Year (2021-Batch) Semester-1 regular examination results for November, 2025',
    date: 'January 07, 2026',
    isoDate: '2026-01-07',
    programme: 'Engineering',
    batch: '2021',
    year: '3rd Year',
    semester: 'Sem 1',
    resultType: 'Regular',
    link: 'https://examcell.rguktn.ac.in/results/202526_21E3_S1_Reg',
    isExternalDoc: true,
  },
  {
    id: 'res-cons-puc-2022',
    title: 'PUC 2022 Batch Consolidated Grade Sheet',
    date: 'July 08, 2024',
    isoDate: '2024-07-08',
    programme: 'PUC',
    batch: '2022',
    year: 'PUC (Complete)',
    semester: 'Consolidated',
    resultType: 'Consolidated',
    link: 'http://examcell.rguktn.ac.in/ConsolidatedResults/2022_PUC',
    isExternalDoc: true,
  },
  {
    id: 'res-cons-puc-2021',
    title: 'PUC 2021 Batch Consolidated Grade Sheet',
    date: 'August 05, 2023',
    isoDate: '2023-08-05',
    programme: 'PUC',
    batch: '2021',
    year: 'PUC (Complete)',
    semester: 'Consolidated',
    resultType: 'Consolidated',
    link: 'http://examcell.rguktn.ac.in/ConsolidatedResults/2021_PUC',
    isExternalDoc: true,
  },
];

/** Official Examination Timetables & Schedules */
export const OFFICIAL_TIMETABLES: TimetableItem[] = [
  {
    id: 'tt-est-remedial-2017-19',
    title: 'Engineering 1st Year to 4th Year (2017, 2018 & 2019 Batches) Semester-II EST Remedial Examination Time Table',
    programme: 'Engineering',
    session: 'Semester-II EST Remedial',
    academicYear: 'A.Y. 2024-25',
    date: 'August 02, 2025',
    fileUrl: 'http://rguktn.ac.in/examcell/docs/2017,2018,2019_E4-E1_Sem-2_Time_Table.pdf',
    isCurrent: true,
    tag: 'EST Remedial',
  },
  {
    id: 'tt-sem-nuzvid-2025-26',
    title: 'RGUKT Nuzvid Campus — Semester Examination Schedules 2025-26',
    programme: 'Integrated',
    session: 'Semester End Examination (SEE)',
    academicYear: 'A.Y. 2025-26',
    date: 'Academic Year 2025-26',
    fileUrl: '/docs/academics/exam-schedule-nuzvid-sem1.pdf',
    isCurrent: true,
    tag: 'Semester Schedule',
  },
  {
    id: 'tt-puc-engg-est-sem2',
    title: 'A.Y. 2017-18 Engineering & PUC EST Examination Final Time Table of Semester-2',
    programme: 'Integrated',
    session: 'Semester-2 EST Final',
    academicYear: 'A.Y. 2017-18',
    date: 'April 18, 2018',
    fileUrl: 'http://rguktn.ac.in/examcell/Time Table/Final_A.Y-2017-18_Engineering_EST Examination_Time Table of Semester-2.pdf',
    isArchived: true,
    tag: 'Archived Schedule',
  },
  {
    id: 'tt-puc-sem1-remedial',
    title: 'A.Y. 2017-18 PUC Semester-1 End Semester Remedial & Grade Improvement Examination Timetable',
    programme: 'PUC',
    session: 'PUC Sem-1 Remedial & GI',
    academicYear: 'A.Y. 2017-18',
    date: 'June 20, 2018',
    fileUrl: 'http://examcell.rguktn.ac.in/docs/A.Y-17-18_ PUC_Semester-1_End Semester_Remedial_ & GI Examination Time Table.pdf',
    isArchived: true,
    tag: 'Archived Schedule',
  },
  {
    id: 'tt-engg-sem1-remedial',
    title: 'A.Y. 2017-18 Engineering Semester-1 End Semester Remedial & Grade Improvement Examination Timetable',
    programme: 'Engineering',
    session: 'Engineering Sem-1 Remedial & GI',
    academicYear: 'A.Y. 2017-18',
    date: 'June 20, 2018',
    fileUrl: 'http://examcell.rguktn.ac.in/docs/A.Y-17-18_Engineering _Semester-1_End Semester_Remedial_ & GI  ExaminationTime Table.pdf',
    isArchived: true,
    tag: 'Archived Schedule',
  },
];

/** Step-by-Step Examination Procedures */
export const EXAM_PROCEDURE_STEPS: ExamProcedureStep[] = [
  {
    stepNumber: '01',
    title: 'Online Examination Registration',
    subtitle: 'Course enrollment & confirmation',
    description: 'Students must register for regular semester examinations or supplementary/remedial drives via the university intranet SMS portal within the declared registration timeframe.',
    points: [
      'Regular semester end examination registration is facilitated through departmental academic coordinators.',
      'Remedial, Recounting, Revaluation & Fresh Mode registrations must be completed through the dedicated SMS Re-Exam portal.',
      'Students must verify course codes, subject credits, and ensure compliance with minimum attendance prerequisites (75%).',
    ],
    actionLink: {
      label: 'SMS Re-Exam Portal',
      url: 'https://tinyurl.com/rguktn-re-exam-registration',
    },
  },
  {
    stepNumber: '02',
    title: 'Hall Ticket Issuance & Verification',
    subtitle: 'Admit card generation & biometric desk',
    description: 'Eligible students generate and download official examination Hall Tickets containing session dates, assigned exam halls, and individual roll credentials.',
    points: [
      'Hall tickets are issued online through the Examination Cell portal prior to commencement of examinations.',
      'Candidates must carry the physical printed Hall Ticket along with their official RGUKT Student ID Card to every session.',
      'Entry is subject to invigilator verification and strict seating plan compliance.',
    ],
  },
  {
    stepNumber: '03',
    title: 'Conduct of Examinations & Code of Ethics',
    subtitle: 'Invigilation, confidentiality & PwD accommodations',
    description: 'Examinations are conducted across designated academic blocks under strict central surveillance, external observers, and institutional flying squads.',
    points: [
      'Students must report to the examination hall at least 15 minutes before scheduled start time.',
      'Strict adherence to university malpractice regulations; electronic gadgets, unauthorized chits, or smart wearables are strictly barred.',
      'Benchmark disability candidates receive scribe allocation and compensatory time as per statutory SCRIBE RULES.',
    ],
  },
  {
    stepNumber: '04',
    title: 'Central Evaluation & Result Declaration',
    subtitle: 'Anonymous coding, blind evaluation & grade computation',
    description: 'Answer scripts undergo double-blind evaluation, confidential mark entry, and rigorous academic council moderation before final grade sheets are published.',
    points: [
      'Grading is computed following the 10-point scale academic framework (O, A+, A, B+, B, C, D, F/Remedial).',
      'Continuous Internal Evaluation (CIE - 40%) is combined with Semester End Examination (SEE - 60%).',
      'Results are officially published online on the Examination Cell server (examcell.rguktn.ac.in).',
    ],
  },
  {
    stepNumber: '05',
    title: 'Recounting of Marks & Answer Script Revaluation',
    subtitle: 'Post-declaration scrutiny window',
    description: 'Students who seek verification of marks or re-evaluation of answer scripts can apply online within the stipulated notification window.',
    points: [
      'Online application window opens immediately after result declaration (typically 5 to 7 days).',
      'Prescribed fee per subject (as notified in official release) must be paid online.',
      'Recounting and revaluation results are officially published and revised grade memos are updated.',
    ],
  },
  {
    stepNumber: '06',
    title: 'Remedial Exams & Fresh Mode Clearances',
    subtitle: 'Backlog clearance & special attempt opportunities',
    description: 'Remedial and Grand Remedial drives are organized twice annually to facilitate seamless academic progression and degree completion.',
    points: [
      'Conducted for PUC (P1, P2) and Engineering (E1 to E4) across odd and even semesters.',
      'Students with backlogs can register for multiple subjects subject to schedule compatibility.',
      'Fresh Mode assessments are provided for eligible candidates as sanctioned by university regulations.',
    ],
  },
];

/** Official Downloadable Documents */
export const OFFICIAL_DOWNLOADS: OfficialDownloadItem[] = [
  {
    id: 'dl-remedial-inst',
    title: 'Remedial Registration Instructions',
    description: 'Official procedure, eligibility rules, and fee payment instructions for remedial examination registration.',
    url: 'http://rguktn.ac.in/examcell/docs/Remedail_registration_Instructions.pdf',
    category: 'Registration',
    isNew: true,
    tag: 'PDF Document',
  },
  {
    id: 'dl-advance-od',
    title: 'Issue of Advance Original Degree to Passed Out Students',
    description: 'Standard operating procedure and application guidelines for obtaining Advance Original Degree Certificate.',
    url: 'http://rguktn.ac.in/examcell/docs/Issue of Advance Original Degree to passed out students.pdf',
    category: 'Certificates',
    isNew: true,
    tag: 'Official Policy',
  },
  {
    id: 'dl-cgpa-conv',
    title: 'CGPA to Percentage Conversion Formula',
    description: 'Official institutional formula and certification guidelines for converting 10-point CGPA to equivalent percentage.',
    url: 'http://rguktn.ac.in/examcell/CGPA to Percentage Conversion formula.pdf',
    category: 'Academic Rules',
    tag: 'Conversion Formula',
  },
  {
    id: 'dl-scribe-rules',
    title: 'Guidelines for Written Examinations for Persons with Benchmark Disabilities',
    description: 'Statutory scribe allocation guidelines, compensatory time limits, and evaluation concessions for PwD candidates.',
    url: 'http://rguktn.ac.in/examcell/SCRIBE RULES.pdf',
    category: 'Guidelines',
    tag: 'Disability Guidelines',
  },
  {
    id: 'dl-fee-cert',
    title: 'Instructions & Fee Structure of Certificates (w.e.f. 01-11-2022)',
    description: 'Comprehensive fee chart and application requirements for grade sheets, CMM, Provisional, and Duplicate certificates.',
    url: 'http://rguktn.ac.in/examcell/docs/Instructions_Fee structure_of_Certificates.pdf',
    category: 'Certificates',
    isNew: true,
    tag: 'Fee Structure',
  },
  {
    id: 'dl-general-inst',
    title: 'General Instructions for Recounting, Revaluation, Remedial & Grade Improvement',
    description: 'Comprehensive instructions governing all post-result evaluation services and registration guidelines.',
    url: 'https://examcell.rguktn.ac.in/docs/General_Instructions_for_Recounting_Revaluation_Remedial_Grade-Improvement.pdf',
    category: 'Registration',
    isNew: true,
    tag: 'Official Manual',
  },
  {
    id: 'dl-equiv-bie',
    title: 'Equivalence to Board of Intermediate Education',
    description: 'Official government order and certification establishing equivalence of RGUKT 2-year PUC to AP Board of Intermediate.',
    url: 'https://examcell.rguktn.ac.in/docs/Equivalence_to_Board_of_Intermediate.pdf',
    category: 'Academic Rules',
    tag: 'Equivalence Order',
  },
];

/** Certificate Issuance & Verification Information */
export const CERTIFICATE_SERVICES: CertificateServiceInfo[] = [
  {
    category: 'Examination Cell (CoE Office)',
    title: 'Degrees & Academic Transcripts',
    issuingOffice: "Controller of Examination's Office",
    requirement: 'Submission of institutional No Due Certificate (NDC) is mandatory.',
    items: [
      'Semester Grade Sheets',
      'Consolidated Marks Memo (CMM)',
      'Provisional Certificate (PC)',
      'Original Degree Certificate (OD)',
      'Advance Original Degree (for urgent employment / higher studies)',
    ],
    contactEmail: 'ecell_certificates@rguktn.ac.in',
  },
  {
    category: "Assistant Registrar's Academic Section",
    title: 'Study, Conduct & Migration Certificates',
    issuingOffice: "Assistant Registrar's Academic Section",
    requirement: 'Study/Bonafide on regular application; Transfer & Migration require No Due Certificate.',
    items: [
      'Study Certificates & Bonafide Certificates',
      'Conduct & Character Certificates',
      'Course Completion Certificate (requires NDC)',
      'Transfer Certificate — TC (requires NDC)',
      'Migration Certificate (requires NDC)',
    ],
    contactEmail: 'ecell_certificates@rguktn.ac.in',
  },
];

/** Official Contact Information */
export const EXAM_CELL_CONTACT = {
  office: 'Office of the Controller of Examinations',
  institution: 'RGUKT Nuzvid Campus',
  building: 'Academic Block-I',
  location: 'Nuzvid, Eluru District, Andhra Pradesh — 521202',
  coeEmail: 'coe@rguktn.ac.in',
  helplineMobile: '8333981195',
  enquiriesEmail: 'ecell_enquiries@rguktn.ac.in',
  eduVerifyEmail: 'eduverify@rguktn.ac.in',
  certificatesEmail: 'ecell_certificates@rguktn.ac.in',
  reExamPortal: 'https://tinyurl.com/rguktn-re-exam-registration',
  smsPortal: 'http://intranet.rguktn.ac.in/SMS/?redirect=http://intranet.rguktn.ac.in/SMS/exam-registration',
  archiveNoticesUrl: 'http://examcell.rguktn.ac.in/notice-archive.php',
  officialPortalUrl: 'https://rguktn.ac.in/examcell/',
  officialServerUrl: 'https://examcell.rguktn.ac.in/',
};
