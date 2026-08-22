import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import '../Home.css';
import './NuzvidHome.css';

/* ─────────── data ─────────── */
const HERO_SLIDES = [
  { title: 'Rajiv Gandhi University of Knowledge Technologies — Nuzvid', img: '/campuses/nuzvid.jpg' },
  { title: 'Prof. M L N Rao — Incharge Director, RGUKT Nuzvid',        img: '/hero/hero-convocation.jpg' },
  { title: 'CDPC Placements — Campus Recruitment 2025-26',             img: '/gallery/gallery-7.jpg' },
  { title: 'GATE 2026 Rank Holders — RGUKT Nuzvid',                    img: '/gallery/gallery-1.jpg' },
  { title: '75th Republic Day Celebrations',                           img: '/gallery/gallery-12.jpg' },
  { title: 'Campus Night View — RGUKT Nuzvid',                         img: '/gallery/gallery-8.jpg' },
];

const HERO_STATS = ['15,000+ Students', '7 Departments', '400+ Faculty', '68% Placement Rate', '30+ Years of Excellence'];

const TICKER_ITEMS = [
  'Circular to SC scholarship students to remit MTF and RTF — Apr 2026',
  'Fee payment notice for scholarship / non-scholarship students — Sep 2025',
  'JVD instalment circular Jun–Aug 2023 — Mar 2024',
  'APL student tuition fee circular — Jan 2024',
  'Academic calendar 2025-26 released',
];

const QUICK_ACCESS = [
  { label: 'Admissions',        href: 'https://admissions.rgukt.in/', external: true, icon: 'grad' as const },
  { label: 'Exam Results',      href: 'https://examcell.rguktn.ac.in/', external: true, icon: 'chart' as const },
  { label: 'Fee Payment',       href: 'https://www.onlinesbi.sbi/sbicollect/icollecthome.htm', external: true, icon: 'card' as const },
  { label: 'Library',           href: '/nuzvid/library', icon: 'book' as const },
  { label: 'Placements',        href: '/nuzvid/placements', icon: 'brief' as const },
  { label: 'Tenders',           href: '/nuzvid/tenders', icon: 'doc' as const },
  { label: 'Academic Calendar', href: '/nuzvid/academics/calendar', icon: 'cal' as const },
  { label: 'Alumni Portal',     href: 'https://alumni.rguktn.ac.in/', external: true, icon: 'users' as const },
];

const STATS = [
  { value: '15,000+', label: 'Students' },
  { value: '7',       label: 'Departments' },
  { value: '400+',    label: 'Faculty Members' },
  { value: '50+',     label: 'Research Labs' },
  { value: '300+',    label: 'Recruiting Companies' },
];

const DEPARTMENTS = [
  { id: 'cse',  name: 'Computer Science & Engineering', desc: 'Software systems, AI and computing fundamentals.',      icon: 'cse'  as const },
  { id: 'ece',  name: 'Electronics & Communication',    desc: 'Circuits, signal processing and communication systems.', icon: 'ece'  as const },
  { id: 'eee',  name: 'Electrical & Electronics',       desc: 'Power systems, control and electrical machines.',        icon: 'eee'  as const },
  { id: 'me',   name: 'Mechanical Engineering',         desc: 'Design, thermal systems and manufacturing.',            icon: 'mech' as const },
  { id: 'ce',   name: 'Civil Engineering',              desc: 'Structures, geotechnics and infrastructure.',           icon: 'civil' as const },
  { id: 'che',  name: 'Chemical Engineering',           desc: 'Process design and materials chemistry.',               icon: 'chem' as const },
  { id: 'mme',  name: 'Metallurgical & Materials',      desc: 'Materials science and metallurgical processes.',        icon: 'mme'  as const },
];

type Tab = 'News' | 'Events' | 'Announcements';
interface NewsItem { day: string; month: string; category: string; title: string; excerpt: string; img: string; }
const NEWS: Record<Tab, NewsItem[]> = {
  News: [
    { day:'14', month:'Jul', category:'Achievement', title:'GATE 2026 Rank Holders Announced',   excerpt:'RGUKT Nuzvid students secure top ranks in GATE 2026 across multiple engineering streams.', img:'/gallery/gallery-1.jpg' },
    { day:'02', month:'Jun', category:'Placement',   title:'CDPC Placements 2025-26 Kick Off',   excerpt:'Campus recruitment drive opens with 40+ companies registered for the season.',               img:'/gallery/gallery-7.jpg' },
    { day:'21', month:'Apr', category:'Academic',    title:'Prof M L N Rao Appointed VC',         excerpt:'Prof. M L N Rao takes charge as Vice Chancellor, RGUKT.',                                   img:'/hero/hero-convocation.jpg' },
  ],
  Events: [
    { day:'18', month:'Mar', category:'Event',  title:'Google Dev Fest RGUKT Nuzvid',      excerpt:'Student developers gather for a day of workshops and talks on modern web and AI.',       img:'/gallery/gallery-6.jpg' },
    { day:'05', month:'Feb', category:'Event',  title:'Amaravati Quantum Valley Workshop', excerpt:'A hands-on introduction to quantum computing hosted with AP Quantum Valley.',            img:'/gallery/gallery-8.jpg' },
    { day:'19', month:'Dec', category:'Event',  title:'Sitara Musical Night 2024',         excerpt:'The campus cultural fest closes with a spirited evening of music and dance.',            img:'/gallery/gallery-11.jpg' },
  ],
  Announcements: [
    { day:'11', month:'Jan', category:'Achievement', title:'National Basketball Champions',     excerpt:'RGUKT Nuzvid team wins the national inter-university basketball championship.',          img:'/gallery/gallery-6.jpg' },
    { day:'29', month:'Nov', category:'Academic',    title:'Ethics & Values Lecture',           excerpt:'A talk on ethics and values delivered by Chaganti Koteswara Rao.',                      img:'/gallery/gallery-3.jpg' },
    { day:'14', month:'Jul', category:'Achievement', title:'GATE 2026 Rank Holders Announced', excerpt:'RGUKT Nuzvid students secure top ranks in GATE 2026 across multiple engineering streams.', img:'/gallery/gallery-1.jpg' },
  ],
};

interface GItem { category: string; img: string; }
const GALLERY: GItem[] = [
  { category:'Campus',     img:'/campuses/nuzvid.jpg' },
  { category:'Labs',       img:'/gallery/gallery-8.jpg' },
  { category:'Sports',     img:'/gallery/gallery-6.jpg' },
  { category:'Cultural',   img:'/gallery/gallery-11.jpg' },
  { category:'Placements', img:'/gallery/gallery-7.jpg' },
  { category:'Campus',     img:'/gallery/gallery-1.jpg' },
  { category:'Labs',       img:'/gallery/gallery-7.jpg' },
  { category:'Sports',     img:'/gallery/gallery-12.jpg' },
];
const G_FILTERS = ['All', 'Campus', 'Labs', 'Sports', 'Cultural', 'Placements'];

const RECRUITERS = ['Infosys', 'TCS', 'Wipro', 'Tech Mahindra', 'Kusalava Intl.', 'HCL', 'Cognizant', 'L&T'];

interface Notice { date: string; type: string; title: string; }
const NOTICES: Notice[] = [
  { date:'Apr 2026', type:'Scholarship', title:'Circular to SC scholarship students to remit MTF and RTF' },
  { date:'Sep 2025', type:'Fee',         title:'Fee payment notice for scholarship / non-scholarship students' },
  { date:'Mar 2024', type:'Fee',         title:'JVD instalment circular Jun–Aug 2023' },
  { date:'Jan 2024', type:'Academic',    title:'APL student tuition fee circular' },
  { date:'Dec 2023', type:'Exam',        title:'B.Tech semester end examination schedule' },
  { date:'Nov 2023', type:'Scholarship', title:'Post-matric scholarship renewal notice for eligible students' },
];

/* ─────────── component ─────────── */
export default function NuzvidHome() {
  const [slide,        setSlide]        = useState(0);
  const [newsTab,      setNewsTab]      = useState<Tab>('News');
  const [galFilter,    setGalFilter]    = useState('All');
  const [lightboxIdx,  setLightboxIdx]  = useState<number | null>(null);
  const [noticesShown, setNoticesShown] = useState(4);

  /* Auto-advance slides every 6 s */
  useEffect(() => {
    const iv = setInterval(() => setSlide(s => (s + 1) % HERO_SLIDES.length), 6000);
    return () => clearInterval(iv);
  }, []);

  /* Close lightbox on Escape */
  useEffect(() => {
    const h = (e: KeyboardEvent) => { if (e.key === 'Escape') setLightboxIdx(null); };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, []);

  const filteredGallery = galFilter === 'All' ? GALLERY : GALLERY.filter(g => g.category === galFilter);
  const prevLB = useCallback(() => setLightboxIdx(i => i === null ? null : (i + filteredGallery.length - 1) % filteredGallery.length), [filteredGallery.length]);
  const nextLB = useCallback(() => setLightboxIdx(i => i === null ? null : (i + 1) % filteredGallery.length), [filteredGallery.length]);

  return (
    <div className="nzh">

      {/* ═══════════ HERO — matches RGUKT-AP bottom-left caption ═══════════ */}
      <section className="nzh-hero hero-section" aria-label="Hero carousel">
        {HERO_SLIDES.map((s, i) => (
          <img
            key={i}
            src={s.img}
            alt=""
            className={`hero-bg-img${slide === i ? ' active' : ''}`}
            fetchPriority={i === 0 ? 'high' : 'low'}
            decoding="async"
          />
        ))}
        <div className="hero-overlay" />

        <div className="hero-stage">
          <div className="nzh-hero-caption hero-caption">
            <h1 className="hero-title">{HERO_SLIDES[slide].title}</h1>
          </div>

          <button
            type="button"
            className="hero-arrow hero-arrow-left"
            aria-label="Previous slide"
            onClick={() => setSlide(s => (s + HERO_SLIDES.length - 1) % HERO_SLIDES.length)}
          >
            <CL />
          </button>
          <button
            type="button"
            className="hero-arrow hero-arrow-right"
            aria-label="Next slide"
            onClick={() => setSlide(s => (s + 1) % HERO_SLIDES.length)}
          >
            <CR />
          </button>
        </div>

        <div className="nzh-statsbar">
          {HERO_STATS.map(s => <span key={s} className="nzh-hstat">{s}</span>)}
        </div>
      </section>

      {/* ═══════════ TICKER ═══════════ */}
      <section className="nzh-ticker" aria-label="Announcements">
        <div className="nzh-ticker-label"><MegIcon /> LATEST NOTICES:</div>
        <div className="nzh-ticker-track">
          <div className="nzh-ticker-inner">
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((t, i) => (
              <a key={i} href="#" className="nzh-ticker-item">{t}</a>
            ))}
          </div>
        </div>
        <a href="#" className="nzh-ticker-all">View All →</a>
      </section>

      {/* ═══════════ QUICK ACCESS ═══════════ */}
      <section className="nzh-qa" aria-label="Quick access">
        <h2 className="nzh-center-h2">Quick Access</h2>
        <div className="nzh-qa-grid">
          {QUICK_ACCESS.map(q => (
            'external' in q && q.external ? (
              <a key={q.label} href={q.href} className="nzh-qa-card" target="_blank" rel="noopener noreferrer">
                <span className="nzh-qa-icon"><QAIco type={q.icon} /></span>
                <span className="nzh-qa-lbl">{q.label}</span>
              </a>
            ) : (
              <Link key={q.label} to={q.href} className="nzh-qa-card">
                <span className="nzh-qa-icon"><QAIco type={q.icon} /></span>
                <span className="nzh-qa-lbl">{q.label}</span>
              </Link>
            )
          ))}
        </div>
      </section>

      <div className="nzh-hr" />

      {/* ═══════════ ABOUT ═══════════ */}
      <section className="nzh-about" aria-label="About the university">
        <div className="nzh-about-inner">
          <div className="nzh-about-text">
            <div className="nzh-kicker">Our Institution</div>
            <h2 className="nzh-about-h2">Where Rural Talent Meets World-Class Education</h2>
            <p className="nzh-p">Established in 1956 by the Government of Andhra Pradesh, RGUKT was founded with a singular mission: to bring IIT-level technical education within reach of gifted students from rural backgrounds across the state.</p>
            <p className="nzh-p">The university identifies talented youth early and nurtures them through a rigorous six-year integrated program spanning pre-university and undergraduate engineering education, entirely free of cost for eligible students.</p>
            <p className="nzh-p">Today, RGUKT serves 15,000+ students across four campuses, offering B.Tech programs in seven engineering disciplines and M.Tech specializations, backed by a faculty of 400+.</p>
            <Link to="/nuzvid/about" className="nzh-btn-ghost">Learn More About RGUKT <Arr /></Link>
          </div>
          <div className="nzh-director">
            <img
              src="/hero/hero-convocation.jpg"
              alt="RGUKT Nuzvid convocation ceremony"
              className="nzh-dir-photo"
            />
            <div className="nzh-dir-name">Prof. M L N Rao</div>
            <div className="nzh-dir-role">Incharge Director</div>
            <p className="nzh-dir-quote">"Our purpose is simple — give every gifted rural student a fair shot at excellence."</p>
          </div>
        </div>
      </section>

      {/* ═══════════ STATS ═══════════ */}
      <section className="nzh-stats" aria-label="Key statistics">
        <div className="nzh-stats-inner">
          {STATS.map((s, i) => (
            <div key={s.label} className="nzh-stile" style={{ borderRight: i < STATS.length - 1 ? '1px solid #374151' : 'none' }}>
              <div className="nzh-stile-val">{s.value}</div>
              <div className="nzh-stile-lbl">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════ DEPARTMENTS ═══════════ */}
      <section className="nzh-depts" aria-label="Departments">
        <div className="nzh-depts-inner">
          <div className="nzh-center-wrap">
            <h2 className="nzh-center-h2">Departments</h2>
            <p className="nzh-center-sub">Seven Engineering Disciplines</p>
          </div>
          <div className="nzh-depts-grid">
            {DEPARTMENTS.map(d => (
              <div key={d.id} className="nzh-dept-card">
                <span className="nzh-dept-icon"><DIco type={d.icon} /></span>
                <div className="nzh-dept-name">{d.name}</div>
                <p className="nzh-dept-desc">{d.desc}</p>
                <Link to={`/nuzvid/departments/${d.id}`} className="nzh-link-btn">Explore →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ NEWS ═══════════ */}
      <section className="nzh-news" aria-label="News and events">
        <div className="nzh-news-inner">
          <div className="nzh-tabs">
            {(['News', 'Events', 'Announcements'] as Tab[]).map(t => (
              <button key={t} className={`nzh-tab${newsTab === t ? ' nzh-tab--on' : ''}`} onClick={() => setNewsTab(t)}>{t}</button>
            ))}
          </div>
          <div className="nzh-news-grid">
            {NEWS[newsTab].map((n, i) => (
              <div key={i} className="nzh-news-card">
                <div className="nzh-news-img-wrap">
                  <img src={n.img} alt={n.title} className="nzh-news-img" />
                  <div className="nzh-news-stamp">
                    <span className="nzh-stamp-day">{n.day}</span>
                    <span className="nzh-stamp-mon">{n.month}</span>
                  </div>
                </div>
                <div className="nzh-news-body">
                  <span className="nzh-tag">{n.category}</span>
                  <h3 className="nzh-news-title">{n.title}</h3>
                  <p className="nzh-news-exc">{n.excerpt}</p>
                  <a href="#" className="nzh-link-btn">Read More →</a>
                </div>
              </div>
            ))}
          </div>
          <div className="nzh-center-wrap nzh-mt36">
            <a href="#" className="nzh-btn-secondary">View All News →</a>
          </div>
        </div>
      </section>

      {/* ═══════════ GALLERY ═══════════ */}
      <section className="nzh-gallery" aria-label="Campus life gallery">
        <div className="nzh-gallery-hd">
          <h2 className="nzh-gallery-h2">Life at RGUKT Nuzvid</h2>
          <div className="nzh-gfilters">
            {G_FILTERS.map(f => (
              <button key={f}
                className={`nzh-gfilter${galFilter === f ? ' nzh-gfilter--on' : ''}`}
                onClick={() => { setGalFilter(f); setLightboxIdx(null); }}>
                {f}
              </button>
            ))}
          </div>
        </div>
        <div className="nzh-gallery-grid">
          {filteredGallery.map((g, i) => (
            <button key={i} className="nzh-gitem" onClick={() => setLightboxIdx(i)} aria-label={`View ${g.category} photo`}>
              <img src={g.img} alt={g.category} className="nzh-gimg" />
            </button>
          ))}
        </div>
      </section>

      {/* ═══════════ LIGHTBOX ═══════════ */}
      {lightboxIdx !== null && (
        <div className="nzh-lb" role="dialog" aria-modal="true"
          onClick={e => { if (e.target === e.currentTarget) setLightboxIdx(null); }}>
          <button className="nzh-lb-close" aria-label="Close" onClick={() => setLightboxIdx(null)}>×</button>
          <button className="nzh-lb-arrow nzh-lb-arrow--l" aria-label="Previous" onClick={prevLB}><CL /></button>
          <img src={filteredGallery[lightboxIdx]?.img} alt={filteredGallery[lightboxIdx]?.category} className="nzh-lb-img" />
          <button className="nzh-lb-arrow nzh-lb-arrow--r" aria-label="Next" onClick={nextLB}><CR /></button>
        </div>
      )}

      {/* ═══════════ PLACEMENTS ═══════════ */}
      <section className="nzh-place" aria-label="Placement highlights">
        <div className="nzh-place-inner">
          <div>
            <h2 className="nzh-place-h2">Career Launchpad</h2>
            <div className="nzh-place-stats">
              {[{v:'68%',l:'Placement Rate'},{v:'₹4.2 LPA',l:'Avg CTC'},{v:'300+',l:'Recruiting Companies'}].map(s => (
                <div key={s.l} className="nzh-pstat">
                  <div className="nzh-pstat-val">{s.v}</div>
                  <div className="nzh-pstat-lbl">{s.l}</div>
                </div>
              ))}
            </div>
            <p className="nzh-place-quote">"RGUKT gave me the foundation to land at Infosys." — Priya K, CSE 2023</p>
            <Link to="/nuzvid/placements" className="nzh-cta-primary">View All Placements →</Link>
          </div>
          <div className="nzh-recruiters">
            {RECRUITERS.map(r => <div key={r} className="nzh-rec">{r}</div>)}
          </div>
        </div>
      </section>

      {/* ═══════════ NOTICES ═══════════ */}
      <section className="nzh-notices" aria-label="Official notices">
        <div className="nzh-notices-inner">
          <h2 className="nzh-notices-h2">Official Notices</h2>
          <table className="nzh-ntable">
            <tbody>
              {NOTICES.slice(0, noticesShown).map((n, i) => (
                <tr key={i} className="nzh-nrow">
                  <td className="nzh-ndate">{n.date}</td>
                  <td className="nzh-ntype"><span className="nzh-tag">{n.type}</span></td>
                  <td className="nzh-ntitle">{n.title}</td>
                  <td className="nzh-ndl">
                    <a href="#" aria-label="Download" className="nzh-dl"><DlIco /></a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {noticesShown < NOTICES.length && (
            <div className="nzh-center-wrap nzh-mt24">
              <button className="nzh-btn-secondary" onClick={() => setNoticesShown(NOTICES.length)}>Load More</button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

/* ─────────── Inline SVG atoms ─────────── */
function Arr() {
  return <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>;
}
function CL() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><polyline points="15 18 9 12 15 6"/></svg>;
}
function CR() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><polyline points="9 18 15 12 9 6"/></svg>;
}
function MegIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M3 11l18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 11-5.8-1.6"/></svg>;
}
function DlIco() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>;
}

/* Quick-access icons */
type QAType = 'grad'|'chart'|'card'|'book'|'brief'|'doc'|'cal'|'users';
function QAIco({ type }: { type: QAType }) {
  const props = { width:26, height:26, viewBox:"0 0 24 24", fill:"none", stroke:"currentColor", strokeWidth:1.8, strokeLinecap:"round" as const, strokeLinejoin:"round" as const, 'aria-hidden':true };
  switch (type) {
    case 'grad':  return <svg {...props}><path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>;
    case 'chart': return <svg {...props}><path d="M3 3v18h18"/><path d="M7 15l4-5 3 3 5-7"/></svg>;
    case 'card':  return <svg {...props}><rect x="2" y="6" width="20" height="14" rx="1"/><line x1="2" y1="10" x2="22" y2="10"/></svg>;
    case 'book':  return <svg {...props}><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M4 4.5A2.5 2.5 0 016.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15z"/></svg>;
    case 'brief': return <svg {...props}><rect x="2" y="7" width="20" height="14" rx="1"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>;
    case 'doc':   return <svg {...props}><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="15" y2="17"/></svg>;
    case 'cal':   return <svg {...props}><rect x="3" y="4" width="18" height="18" rx="1"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>;
    case 'users': return <svg {...props}><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>;
  }
}

/* Department icons */
type DType = 'cse'|'ece'|'eee'|'mech'|'civil'|'chem'|'mme';
function DIco({ type }: { type: DType }) {
  const props = { width:22, height:22, viewBox:"0 0 24 24", fill:"none", stroke:"currentColor", strokeWidth:1.8, strokeLinecap:"round" as const, strokeLinejoin:"round" as const, 'aria-hidden':true };
  switch (type) {
    case 'cse':  return <svg {...props}><rect x="4" y="4" width="16" height="16" rx="1"/><rect x="9" y="9" width="6" height="6"/></svg>;
    case 'ece':  return <svg {...props}><path d="M4 12a8 8 0 0116 0"/><path d="M7.5 12a4.5 4.5 0 019 0"/><circle cx="12" cy="12" r="1.5"/></svg>;
    case 'eee':  return <svg {...props}><path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z"/></svg>;
    case 'mech': return <svg {...props}><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 11-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 110-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 114 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 110 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>;
    case 'civil': return <svg {...props}><path d="M3 21h18"/><path d="M5 21V10l7-6 7 6v11"/><line x1="9" y1="21" x2="9" y2="14"/><line x1="15" y1="21" x2="15" y2="14"/></svg>;
    case 'chem': return <svg {...props}><path d="M9 3h6"/><path d="M10 3v6.5L5.5 18a2 2 0 001.8 3h9.4a2 2 0 001.8-3L14 9.5V3"/><line x1="8.5" y1="14" x2="15.5" y2="14"/></svg>;
    case 'mme':  return <svg {...props}><path d="M6 3h12l3 6-9 12L3 9z"/></svg>;
  }
}
