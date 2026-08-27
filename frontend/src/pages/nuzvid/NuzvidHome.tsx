import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BellRing,
  BookOpen,
  CalendarDays,
  ChevronRight,
  ExternalLink,
  FileText,
  FlaskConical,
  GraduationCap,
  Landmark,
  Library,
  MapPin,
  Monitor,
  Trophy,
  Users,
} from 'lucide-react';
import './NuzvidHome.css';

const NOTIFICATIONS = [
  {
    date: '02 Apr 2026',
    category: 'Scholarship',
    title: 'Circular to SC scholarship students regarding RTF and MTF for A.Y. 2025–26',
    description: 'The official circular gives instructions for remitting the released scholarship amount through SBI Collect.',
    href: '/nuzvid/notices/sc-scholarship-2026',
  },
  {
    date: '25 Sep 2025',
    category: 'Fees',
    title: 'Notice for scholarship and non-scholarship students to clear pending dues',
    description: 'The notice covers pending scholarship instalments, tuition fee and mess fee dues.',
    href: '/nuzvid/notices/fee-dues-2025',
  },
  {
    date: '05 Jun 2024',
    category: 'Student notice',
    title: 'Notice to scholarship students for payment of all pending fee dues',
    description: 'The institute extended the period for clearing pending dues and published payment instructions.',
    href: '/nuzvid/notices/pending-dues-2024',
  },
  {
    date: '05 Jan 2024',
    category: 'Fees',
    title: 'Circular for above poverty line students on college tuition fee',
    description: 'The circular provides tuition-fee instructions for students not eligible for government scholarships.',
    href: '/nuzvid/notices/tuition-fee-apl',
  },
];

const DEPARTMENTS = [
  { name: 'Computer Science & Engineering', href: '/nuzvid/departments/cse', icon: Monitor },
  { name: 'Electronics & Communication Engineering', href: '/nuzvid/departments/ece', icon: Monitor },
  { name: 'Electrical & Electronics Engineering', href: '/nuzvid/departments/eee', icon: Landmark },
  { name: 'Mechanical Engineering', href: '/nuzvid/departments/me', icon: FlaskConical },
  { name: 'Civil Engineering', href: '/nuzvid/departments/ce', icon: Landmark },
  { name: 'Chemical Engineering', href: '/nuzvid/departments/che', icon: FlaskConical },
  { name: 'Metallurgical & Materials Engineering', href: '/nuzvid/departments/mme', icon: Trophy },
];

const UPDATES = [
  {
    date: '08 Jul 2026',
    category: 'Administration',
    title: 'Prof. M L N Rao, Incharge Director, RGUKT Nuzvid Campus',
    image: '/hero/hero-convocation.jpg',
  },
  {
    date: '13 May 2026',
    category: 'University update',
    title: 'The Chancellor and Directors greeted newly appointed Vice-Chancellor, Prof. M L N Rao',
    image: '/gallery/gallery-12.jpg',
  },
  {
    date: 'Featured update',
    category: 'Student achievement',
    title: 'GATE 2026 Rank Holders',
    image: '/gallery/gallery-1.jpg',
  },
];

const QUICK_LINKS = [
  { label: 'Admissions', href: '/nuzvid/admissions', icon: GraduationCap },
  { label: 'Examinations & Results', href: '/nuzvid/examinations', icon: FileText },
  { label: 'Academic Calendar', href: '/nuzvid/academics/calendar', icon: CalendarDays },
  { label: 'Central Library', href: '/nuzvid/library', icon: Library },
  { label: 'Notifications', href: '#notifications', icon: BellRing },
  { label: 'Fee Payment', href: 'https://www.onlinesbi.sbi/sbicollect/icollecthome.htm', icon: Landmark, external: true },
  { label: 'Placements', href: '/nuzvid/placements', icon: Users },
  { label: 'Contact', href: '/nuzvid/contact', icon: MapPin },
];

function SectionHeading({ eyebrow, title, copy, centered = false, id }: { eyebrow: string; title: string; copy?: string; centered?: boolean; id?: string }) {
  return (
    <div className={`nzh-section-heading${centered ? ' nzh-section-heading--centered' : ''}`}>
      <span className="nzh-eyebrow">{eyebrow}</span>
      <h2 id={id}>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  );
}

export default function NuzvidHome() {
  return (
    <div className="nzh">
      <section className="nzh-hero" aria-labelledby="nuzvid-hero-title">
        <img
          className="nzh-hero-image"
          src="/campuses/nuzvid-campus-wide.jpg"
          alt="RGUKT Nuzvid academic campus at dusk"
          fetchPriority="high"
          decoding="async"
        />
        <div className="nzh-hero-glow" aria-hidden="true" />
        <div className="nzh-container nzh-hero-content">
          <p className="nzh-hero-kicker">RGUKT Nuzvid · Andhra Pradesh</p>
          <h1 id="nuzvid-hero-title">A place for rural talent to grow into global innovators.</h1>
          <p className="nzh-hero-copy">
            Rajiv Gandhi University of Knowledge Technologies, Nuzvid, advances quality technical education for meritorious rural youth through an inclusive, learner-centric environment.
          </p>
          <div className="nzh-hero-actions">
            <Link to="/nuzvid/about" className="nzh-button nzh-button--primary">
              Explore RGUKT <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <Link to="/nuzvid/admissions" className="nzh-button nzh-button--quiet">
              Admissions <ExternalLink size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>
        <div className="nzh-hero-bottom" aria-label="RGUKT Nuzvid highlights">
          <div className="nzh-container nzh-hero-highlights">
            <span>Established under A.P. Act No. 18 of 2008</span>
            <span>Six-year integrated B.Tech pathway</span>
            <span>UGC-recognized institution</span>
          </div>
        </div>
      </section>

      <section id="notifications" className="nzh-notifications" aria-labelledby="notifications-title">
        <div className="nzh-container">
          <div className="nzh-inline-heading">
            <SectionHeading id="notifications-title" eyebrow="Stay informed" title="Important notifications" copy="Official notices and circulars from RGUKT Nuzvid." />
            <Link to="/nuzvid/notices" className="nzh-text-link">
              View all notifications <ExternalLink size={15} aria-hidden="true" />
            </Link>
          </div>
          <div className="nzh-notification-grid">
            {NOTIFICATIONS.map((notice) => (
              <article key={notice.href} className="nzh-notification-card">
                <div className="nzh-notification-meta">
                  <span>{notice.date}</span>
                  <span>{notice.category}</span>
                </div>
                <h3>{notice.title}</h3>
                <p>{notice.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="nzh-about" aria-labelledby="about-title">
        <div className="nzh-container nzh-about-grid">
          <div className="nzh-about-media">
            <img src="/campuses/academic-complex-nuzvid.jpg" alt="Academic complex at RGUKT Nuzvid" loading="lazy" decoding="async" />
            <div className="nzh-about-badge">
              <span>Since</span>
              <strong>2008</strong>
              <small>University Act</small>
            </div>
          </div>
          <div className="nzh-about-copy">
            <SectionHeading
              eyebrow="About RGUKT"
              id="about-title"
              title="Technology education shaped around opportunity."
              copy="RGUKT was created to widen access to high-quality technical education for meritorious rural youth of Andhra Pradesh. Its educational model combines modern computer-assisted, learner-centric methods with rigorous teaching in a residential university setting."
            />
            <div className="nzh-value-list">
              <div><span>01</span><p>Broad-based education across engineering, sciences, humanities and other interdisciplinary areas.</p></div>
              <div><span>02</span><p>Learning to learn, think and live—alongside values of integrity, respect and environmental care.</p></div>
            </div>
            <Link to="/nuzvid/about" className="nzh-button nzh-button--outline">Read more about RGUKT <ArrowRight size={17} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <section className="nzh-academics" aria-labelledby="academics-title">
        <div className="nzh-container">
          <SectionHeading
            eyebrow="Academics"
            id="academics-title"
            title="A learning journey that starts early and reaches further."
            copy="RGUKT Nuzvid offers a six-year integrated route after Class X and postgraduate M.Tech programmes listed by the university."
            centered
          />
          <div className="nzh-academic-grid">
            <article className="nzh-academic-card">
              <span className="nzh-icon-wrap"><GraduationCap size={23} aria-hidden="true" /></span>
              <h3>Six-year integrated course</h3>
              <p>A two-year Pre University Course followed by a four-year Engineering Course leading to a B.Tech degree.</p>
              <Link to="/nuzvid/academics/programmes" className="nzh-card-link">Explore undergraduate programme <ChevronRight size={17} aria-hidden="true" /></Link>
            </article>
            <article className="nzh-academic-card">
              <span className="nzh-icon-wrap"><BookOpen size={23} aria-hidden="true" /></span>
              <h3>Postgraduate study</h3>
              <p>The official programme page lists M.Tech specialisations in Transportation Engineering and Engineering Analysis and Design.</p>
              <Link to="/nuzvid/academics/programmes" className="nzh-card-link">View postgraduate programmes <ChevronRight size={17} aria-hidden="true" /></Link>
            </article>
            <article className="nzh-academic-card">
              <span className="nzh-icon-wrap"><Monitor size={23} aria-hidden="true" /></span>
              <h3>Learner-centric education</h3>
              <p>Technology-enabled learning supports problem-solving, active learning and a broad educational experience.</p>
              <Link to="/nuzvid/about/education-system" className="nzh-card-link">Discover the education system <ChevronRight size={17} aria-hidden="true" /></Link>
            </article>
          </div>
        </div>
      </section>

      <section className="nzh-departments" aria-labelledby="departments-title">
        <div className="nzh-container">
          <div className="nzh-inline-heading">
            <SectionHeading id="departments-title" eyebrow="Schools & departments" title="Engineering disciplines at Nuzvid" copy="Explore the engineering departments listed by RGUKT Nuzvid." />
            <Link to="/nuzvid/departments" className="nzh-text-link">All departments <ArrowRight size={16} aria-hidden="true" /></Link>
          </div>
          <div className="nzh-department-grid">
            {DEPARTMENTS.map((department) => {
              const Icon = department.icon;
              return (
                <Link key={department.href} to={department.href} className="nzh-department-card">
                  <span className="nzh-department-icon"><Icon size={22} aria-hidden="true" /></span>
                  <span>{department.name}</span>
                  <ArrowRight size={17} aria-hidden="true" />
                </Link>
              );
            })}
          </div>
          <div className="nzh-department-note">
            <span>Also listed by the university</span>
            <Link to="/nuzvid/departments">Sciences and humanities departments <ArrowRight size={15} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <section className="nzh-campus" aria-labelledby="campus-title">
        <div className="nzh-container nzh-campus-grid">
          <div className="nzh-campus-copy">
            <SectionHeading
              eyebrow="Campus experience"
              id="campus-title"
              title="Spaces and support for learning beyond the classroom."
              copy="From academic resources to student activities, RGUKT Nuzvid brings study, collaboration and campus life together."
            />
            <Link to="/nuzvid/about/campus-life" className="nzh-button nzh-button--outline">Explore campus life <ArrowRight size={17} aria-hidden="true" /></Link>
          </div>
          <div className="nzh-campus-features">
            <article>
              <Library size={22} aria-hidden="true" />
              <h3>Central Library</h3>
              <p>The official site describes a library with more than 20,000 books and 10,000 periodicals.</p>
            </article>
            <article>
              <FlaskConical size={22} aria-hidden="true" />
              <h3>Academic laboratories</h3>
              <p>Departmental labs featured by the university support hands-on engineering learning.</p>
            </article>
            <article>
              <Users size={22} aria-hidden="true" />
              <h3>Student activities</h3>
              <p>NCC, NSS, sports, performing arts and yoga enrich the student experience.</p>
            </article>
            <article>
              <Trophy size={22} aria-hidden="true" />
              <h3>Career development</h3>
              <p>The dedicated CDPC organizes campus placement and internship opportunities.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="nzh-updates" aria-labelledby="updates-title">
        <div className="nzh-container">
          <div className="nzh-inline-heading">
            <SectionHeading id="updates-title" eyebrow="From the campus" title="Latest updates & events" copy="Highlights currently featured on the official RGUKT Nuzvid website." />
            <Link to="/nuzvid/events" className="nzh-text-link">View all <ExternalLink size={15} aria-hidden="true" /></Link>
          </div>
          <div className="nzh-update-grid">
            {UPDATES.map((update) => (
              <article key={update.title} className="nzh-update-card">
                <img src={update.image} alt="" loading="lazy" decoding="async" />
                <div>
                  <span>{update.category} · {update.date}</span>
                  <h3>{update.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="nzh-quick-links" aria-labelledby="quick-links-title">
        <div className="nzh-container">
          <SectionHeading id="quick-links-title" eyebrow="Useful destinations" title="Quick links" copy="Direct access to frequently used student and university services." centered />
          <div className="nzh-quick-grid">
            {QUICK_LINKS.map((item) => {
              const Icon = item.icon;
              const contents = <><Icon size={21} aria-hidden="true" /><span>{item.label}</span><ArrowRight size={16} aria-hidden="true" /></>;
              return item.external ? (
                <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="nzh-quick-card">{contents}</a>
              ) : item.href.startsWith('#') ? (
                <a key={item.label} href={item.href} className="nzh-quick-card">{contents}</a>
              ) : (
                <Link key={item.label} to={item.href} className="nzh-quick-card">{contents}</Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="nzh-final-cta" aria-labelledby="cta-title">
        <div className="nzh-container nzh-final-cta-inner">
          <div>
            <span className="nzh-eyebrow">Your next step</span>
            <h2 id="cta-title">Discover your future at RGUKT Nuzvid.</h2>
            <p>Explore academic pathways, campus resources and official admission information.</p>
          </div>
          <div className="nzh-final-actions">
            <Link to="/nuzvid/academics" className="nzh-button nzh-button--light">Explore academics <ArrowRight size={17} aria-hidden="true" /></Link>
            <Link to="/nuzvid/admissions" className="nzh-button nzh-button--quiet">Admissions <ExternalLink size={15} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
