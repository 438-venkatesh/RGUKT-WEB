import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { DarkModeProvider } from './context/DarkModeContext';
import UtilityBar from './components/UtilityBar';
import SiteHeader from './components/SiteHeader';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import OrgChart from './pages/OrgChart';
import Administration from './pages/Administration';
import Academics from './pages/Academics';
import Research from './pages/Research';
import Placements from './pages/Placements';
import Alumni from './pages/Alumni';
import Admissions from './pages/Admissions';
import Contact from './pages/Contact';
/* Nuzvid campus sub-app */
import NuzvidLayout from './pages/nuzvid/NuzvidLayout';
import NuzvidHome from './pages/nuzvid/NuzvidHome';
import NuzvidAbout from './pages/nuzvid/NuzvidAbout';
import NuzvidAcademics from './pages/nuzvid/NuzvidAcademics';
import NuzvidExaminations from './pages/nuzvid/NuzvidExaminations';
import NuzvidLibrary from './pages/nuzvid/NuzvidLibrary';
import NuzvidPlacements from './pages/nuzvid/NuzvidPlacements';
import NuzvidContact from './pages/nuzvid/NuzvidContact';
import NuzvidScrapedPage from './pages/nuzvid/NuzvidScrapedPage';
import { NUZVID_CONTENT_ROUTES } from './data/nuzvidNav';
import Tenders from './pages/Tenders';
import Careers from './pages/Careers';
import Announcements from './pages/Announcements';
import NewsEvents from './pages/NewsEvents';
import Gallery from './pages/Gallery';
import IQAC from './pages/IQAC';
import ContentPage from './pages/ContentPage';
import OfficerProfilePage from './pages/OfficerProfilePage';
import Admissions2026Page from './pages/Admissions2026Page';
import UndergraduateProgrammesPage from './pages/academics/UndergraduateProgrammesPage';
import AcademicCalendarPage from './pages/academics/AcademicCalendarPage';
import CentralLibraryPage from './pages/academics/CentralLibraryPage';
import PostgraduateProgrammesPage from './pages/academics/PostgraduateProgrammesPage';
import ResearchProgrammesPage from './pages/academics/ResearchProgrammesPage';
import SummerProgrammesPage from './pages/academics/SummerProgrammesPage';
import AcademicRegulationsPage from './pages/academics/AcademicRegulationsPage';
import AcademicCurriculumPage from './pages/academics/AcademicCurriculumPage';
import ExaminationProceduresPage from './pages/academics/ExaminationProceduresPage';
import ExaminationSchedulesPage from './pages/academics/ExaminationSchedulesPage';
import LmsPage from './pages/academics/LmsPage';
import TimetablesPage from './pages/academics/TimetablesPage';
import AcademicsScholarshipsPage from './pages/academics/ScholarshipsPage';
import OrientationPage from './pages/academics/OrientationPage';
import CouncilMinutesPage from './pages/academics/CouncilMinutesPage';
import GoverningCouncilPage from './pages/administration/GoverningCouncilPage';
import AcademicCouncilPage from './pages/administration/AcademicCouncilPage';
import DirectorsPage from './pages/administration/DirectorsPage';
import CaoPage from './pages/administration/CaoPage';
import FinanceOfficerPage from './pages/administration/FinanceOfficerPage';
import SportsBoardPage from './pages/administration/SportsBoardPage';
import EligibilityPage from './pages/admissions/EligibilityPage';
import ApplicationProcessPage from './pages/admissions/ApplicationProcessPage';
import FeeStructurePage from './pages/admissions/FeeStructurePage';
import Admissions2025Page from './pages/admissions/Admissions2025Page';
import PostgraduateAdmissionsPage from './pages/admissions/PostgraduateAdmissionsPage';
import DoctoralAdmissionsPage from './pages/admissions/DoctoralAdmissionsPage';
import Students from './pages/Students';
import StudentScholarshipsPage from './pages/students/ScholarshipsPage';
import MedalsPage from './pages/students/MedalsPage';
import CareerGrowthPage from './pages/students/CareerGrowthPage';
import QuantumLabPage from './pages/students/QuantumLabPage';
import AntiRaggingPage from './pages/students/AntiRaggingPage';
import IccPage from './pages/students/IccPage';
import WomenEmpowermentPage from './pages/students/WomenEmpowermentPage';
import CulturalPage from './pages/students/CulturalPage';
import SportsPage from './pages/students/SportsPage';
import CommunityPage from './pages/students/CommunityPage';
import AlumniEngagementPage from './pages/students/AlumniEngagementPage';
import ResearchHeadPage from './pages/research/ResearchHeadPage';
import ResearchEthicsPage from './pages/research/ResearchEthicsPage';
import ThrustAreasPage from './pages/research/ThrustAreasPage';
import ResearchGuidelinesPage from './pages/research/ResearchGuidelinesPage';
import ResearchMousPage from './pages/research/ResearchMousPage';
import AdvisoryCommitteePage from './pages/research/AdvisoryCommitteePage';
import VisionMissionPage from './pages/about/VisionMissionPage';
import BestPracticesPage from './pages/about/BestPracticesPage';
import StrategicPlanPage from './pages/about/StrategicPlanPage';
import RguktActPage from './pages/about/RguktActPage';
import AnnualReportPage from './pages/about/AnnualReportPage';
import CampusPage from './pages/about/CampusPage';
import { SITE_PAGE_PATHS } from './data/sitePages';
import { OFFICER_PATHS } from './data/officers';
import PageHeroFromRoute from './components/PageHeroFromRoute';
import { isInnerPageRoute } from './data/pageHeroConfig';
import './App.css';
import './components/SectionDivider.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

/* Inner component — needs access to useLocation (must be inside BrowserRouter) */
function AppContent() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const isNuzvid = pathname.startsWith('/nuzvid');
  const isInnerPage = isInnerPageRoute(pathname);

  return (
    <>
      {!isNuzvid && <UtilityBar />}
      {isHome && <SiteHeader />}
      {!isNuzvid && <Navbar />}

      <main
        id="main"
        className={
          isHome ? 'home-layout'
          : isNuzvid ? 'nuzvid-layout'
          : isInnerPage ? 'inner-page-layout'
          : undefined
        }
      >
        <PageHeroFromRoute />
        <Routes>
          {/* ── RGUKT-AP base site ── */}
          <Route path="/"                  element={<Home />} />
          <Route path="/about"                  element={<About />} />
          <Route path="/about/vision-mission"   element={<VisionMissionPage />} />
          <Route path="/about/best-practices"  element={<BestPracticesPage />} />
          <Route path="/about/orgchart"        element={<OrgChart />} />
          <Route path="/about/strategic-plan"  element={<StrategicPlanPage />} />
          <Route path="/about/annual-report"   element={<AnnualReportPage />} />
          <Route path="/about/rgukt-act"       element={<RguktActPage />} />
          <Route path="/campus/rk-valley"      element={<CampusPage />} />
          <Route path="/campus/srikakulam"     element={<CampusPage />} />
          <Route path="/campus/ongole"         element={<CampusPage />} />
          <Route path="/academics"                     element={<Academics />} />
          <Route path="/academics/undergraduate"       element={<UndergraduateProgrammesPage />} />
          <Route path="/academics/postgraduate"        element={<PostgraduateProgrammesPage />} />
          <Route path="/academics/research-programmes" element={<ResearchProgrammesPage />} />
          <Route path="/academics/summer"              element={<SummerProgrammesPage />} />
          <Route path="/academics/regulations"         element={<AcademicRegulationsPage />} />
          <Route path="/academics/calendar"            element={<AcademicCalendarPage />} />
          <Route path="/academics/curriculum"          element={<AcademicCurriculumPage />} />
          <Route path="/academics/examinations"        element={<ExaminationProceduresPage />} />
          <Route path="/academics/exam-schedules"      element={<ExaminationSchedulesPage />} />
          <Route path="/academics/central-library"     element={<CentralLibraryPage />} />
          <Route path="/academics/lms"                  element={<LmsPage />} />
          <Route path="/academics/timetables"          element={<TimetablesPage />} />
          <Route path="/academics/scholarships"        element={<AcademicsScholarshipsPage />} />
          <Route path="/academics/orientation"         element={<OrientationPage />} />
          <Route path="/academics/council-minutes"     element={<CouncilMinutesPage />} />
          <Route path="/administration"                  element={<Administration />} />
          <Route path="/administration/governing-council" element={<GoverningCouncilPage />} />
          <Route path="/administration/academic-council"  element={<AcademicCouncilPage />} />
          <Route path="/administration/directors"         element={<DirectorsPage />} />
          <Route path="/administration/cao"               element={<CaoPage />} />
          <Route path="/administration/finance-officer"   element={<FinanceOfficerPage />} />
          <Route path="/administration/iqac"              element={<IQAC />} />
          <Route path="/administration/sports-board"      element={<SportsBoardPage />} />
          <Route path="/admissions"              element={<Admissions />} />
          <Route path="/admissions/2025"         element={<Admissions2025Page />} />
          <Route path="/admissions/2026"         element={<Admissions2026Page />} />
          <Route path="/admissions/postgraduate" element={<PostgraduateAdmissionsPage />} />
          <Route path="/admissions/doctoral"     element={<DoctoralAdmissionsPage />} />
          <Route path="/admissions/eligibility"  element={<EligibilityPage />} />
          <Route path="/admissions/process"      element={<ApplicationProcessPage />} />
          <Route path="/admissions/fees"         element={<FeeStructurePage />} />
          <Route path="/students"                        element={<Students />} />
          <Route path="/students/scholarships"           element={<StudentScholarshipsPage />} />
          <Route path="/students/medals"                element={<MedalsPage />} />
          <Route path="/students/career-growth"         element={<CareerGrowthPage />} />
          <Route path="/students/quantum-lab"           element={<QuantumLabPage />} />
          <Route path="/students/anti-ragging"          element={<AntiRaggingPage />} />
          <Route path="/students/icc"                   element={<IccPage />} />
          <Route path="/students/women-empowerment"     element={<WomenEmpowermentPage />} />
          <Route path="/students/cultural"              element={<CulturalPage />} />
          <Route path="/students/sports"                element={<SportsPage />} />
          <Route path="/students/community"             element={<CommunityPage />} />
          <Route path="/students/alumni-engagement"     element={<AlumniEngagementPage />} />
          <Route path="/research"                  element={<Research />} />
          <Route path="/research/head"              element={<ResearchHeadPage />} />
          <Route path="/research/ethics"           element={<ResearchEthicsPage />} />
          <Route path="/research/thrust-areas"     element={<ThrustAreasPage />} />
          <Route path="/research/guidelines"       element={<ResearchGuidelinesPage />} />
          <Route path="/research/mous"             element={<ResearchMousPage />} />
          <Route path="/research/advisory-committee" element={<AdvisoryCommitteePage />} />
          <Route path="/placements"        element={<Placements />} />
          <Route path="/alumni"            element={<Alumni />} />
          <Route path="/news"              element={<NewsEvents />} />
          <Route path="/tenders"          element={<Tenders />} />
          <Route path="/careers"          element={<Careers />} />
          <Route path="/announcements"    element={<Announcements />} />
          <Route path="/gallery"          element={<Gallery />} />
          <Route path="/iqac"             element={<IQAC />} />
          <Route path="/contact"           element={<Contact />} />
          {OFFICER_PATHS.map(path => (
            <Route key={path} path={path} element={<OfficerProfilePage />} />
          ))}
          {SITE_PAGE_PATHS.map(path => (
            <Route key={path} path={path} element={<ContentPage />} />
          ))}

          {/* ── Nuzvid campus sub-site ── */}
          <Route path="/nuzvid" element={<NuzvidLayout />}>
            <Route index                        element={<NuzvidHome />} />
            <Route path="about"                 element={<NuzvidAbout />} />
            <Route path="academics"             element={<NuzvidAcademics />} />
            <Route path="examinations"          element={<NuzvidExaminations />} />
            <Route path="library"               element={<NuzvidLibrary />} />
            <Route path="placements"            element={<NuzvidPlacements />} />
            <Route path="contact"               element={<NuzvidContact />} />
            {NUZVID_CONTENT_ROUTES.map(({ path }) => (
              <Route
                key={path}
                path={path}
                element={<NuzvidScrapedPage pagePath={path} />}
              />
            ))}
          </Route>
        </Routes>
      </main>

      {!isNuzvid && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <DarkModeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <AppContent />
      </BrowserRouter>
    </DarkModeProvider>
  );
}
