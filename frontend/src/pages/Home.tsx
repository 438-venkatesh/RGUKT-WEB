import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import GallerySection from '../components/GallerySection';
import AdmissionsModal from '../components/AdmissionsModal';
import '../components/GallerySection.css';
import {
  HERO_SLIDES, CAMPUS_QUICK_LINKS, ANNOUNCEMENTS,
  ACADEMIC_UNITS, UPCOMING_EVENTS, LATEST_NEWS, FAQS,
} from '../data/homeSlides';
import { CHANCELLOR_MESSAGE, OFFICER_PROFILES } from '../data/officers';
import { CAMPUSES } from '../data/aboutContent';
import './Home.css';

const CHANCELLOR = OFFICER_PROFILES[0];
const CHANCELLOR_PREVIEW = CHANCELLOR_MESSAGE.split('\n\n').slice(0, 3).join('\n\n');

const STAT_TARGETS = [4, 800, 600, 15000];
const STAT_LABELS  = ['Campuses', 'Faculty', 'Staff', 'Students'];
const STAT_SUFFIX  = ['', '+', '+', '+'];

function useAnimatedCount(target: number, trigger: boolean, duration = 1500) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    const start = performance.now();
    const step = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      setVal(Math.round(target * p));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [trigger, target, duration]);
  return val;
}

export default function Home() {
  const [slide, setSlide] = useState(0);
  const [statsTriggered, setStatsTriggered] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [newsIdx, setNewsIdx] = useState(0);
  const statsRef = useRef<HTMLElement>(null);

  const nextSlide = useCallback(() => setSlide(s => (s + 1) % HERO_SLIDES.length), []);
  const prevSlide = useCallback(() => setSlide(s => (s + HERO_SLIDES.length - 1) % HERO_SLIDES.length), []);

  useEffect(() => {
    const t = setInterval(nextSlide, 6000);
    return () => clearInterval(t);
  }, [nextSlide]);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setStatsTriggered(true); obs.disconnect(); }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const current = HERO_SLIDES[slide];

  return (
    <div className="iit-home">
      <AdmissionsModal />

      {/* ── HERO CAROUSEL ── */}
      <section aria-label="Hero" className="hero-section">
        {HERO_SLIDES.map((s, i) => (
          <img
            key={s.id}
            src={s.image}
            alt=""
            className={`hero-bg-img${i === slide ? ' active' : ''}`}
            fetchPriority={i === 0 ? 'high' : 'low'}
            decoding="async"
          />
        ))}
        <div className="hero-overlay" />

        <div className="hero-stage">
          <div className="hero-caption">
            <h1 className="hero-title">{current.caption}</h1>
          </div>

          <button type="button" className="hero-arrow hero-arrow-left" aria-label="Previous slide" onClick={prevSlide}>
            <ChevronLeft />
          </button>
          <button type="button" className="hero-arrow hero-arrow-right" aria-label="Next slide" onClick={nextSlide}>
            <ChevronRight />
          </button>
        </div>

        {/* 4 campus quick cards — centered, inset from edges */}
        <div className="campus-quick-bar">
          <div className="campus-quick-inner">
          {CAMPUS_QUICK_LINKS.map(c => {
            const inner = (
              <>
                <span className="cqb-label">{c.name.toUpperCase()}</span>
                <span className="cqb-icon-wrap">
                  <CampusIcon variant={c.variant} />
                </span>
              </>
            );
            const cls = `cqb-card cqb-${c.variant}`;
            return c.href.startsWith('/')
              ? <Link key={c.name} to={c.href} className={cls}>{inner}</Link>
              : <a key={c.name} href={c.href} target="_blank" rel="noopener noreferrer" className={cls}>{inner}</a>;
          })}
          </div>
        </div>
      </section>

      {/* ── IMPORTANT ANNOUNCEMENTS ── */}
      <section aria-label="Important announcements" className="iit-announcements">
        <div className="section-wrap">
          <h2 className="iit-section-title center">
            <span className="iit-title-red">IMPORTANT</span>{' '}
            <span className="iit-title-dark">ANNOUNCEMENTS</span>
          </h2>
          <div className="double-line-bottom-theme-colored-2 is-wide" aria-hidden />

          <div className="ann-list">
            {ANNOUNCEMENTS.map((a, i) => (
              <Link key={i} to={a.href} className={`ann-item${a.featured ? ' ann-featured' : ''}`}>
                {a.featured && a.image && (
                  <img src={a.image} alt="" className="ann-featured-img" />
                )}
                <span className="ann-text">{a.title}</span>
                {a.badge && <span className="ann-badge">{a.badge}</span>}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CHANCELLOR MESSAGE ── */}
      <section aria-label="Message from the Chancellor" className="iit-chancellor">
        <div className="section-wrap chancellor-grid">
          <div className="chancellor-photo-wrap">
            <img src={CHANCELLOR.photo} alt={CHANCELLOR.name} className="chancellor-photo" />
          </div>
          <div className="chancellor-body">
            <h2 className="iit-section-title chancellor-title">
              <span className="iit-title-red">MESSAGE FROM THE</span>{' '}
              <span className="iit-title-dark">CHANCELLOR</span>
            </h2>
            <div className="double-line-bottom-theme-colored-2" aria-hidden />
            <p className="chancellor-name">{CHANCELLOR.name}</p>
            <p className="chancellor-role">{CHANCELLOR.role}</p>
            {CHANCELLOR.subtitle && (
              <p className="chancellor-subtitle">{CHANCELLOR.subtitle}</p>
            )}
            <div className="chancellor-message">
              {CHANCELLOR_PREVIEW.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
            <Link to="/administration/chancellor" className="chancellor-readmore">
              Read more →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CAMPUS MAP ── */}
      <section id="campus-map" aria-label="RGUKT campuses map" className="iit-campus-map">
        <div className="section-wrap">
          <h2 className="iit-section-title center campus-map-title">
            <span className="iit-title-red">RGUKT</span>{' '}
            <span className="iit-title-dark">CAMPUSES — ANDHRA PRADESH</span>
          </h2>
          <div className="double-line-bottom-theme-colored-2 is-wide" aria-hidden />

          <div className="campus-map-grid">
            <div className="campus-map-content">
              <p className="campus-map-lead">
                Four fully residential campuses across Andhra Pradesh — from the north coastal belt to
                Rayalaseema — delivering free, IIT-level education to gifted rural youth.
              </p>
              <ul className="campus-map-list">
                {CAMPUSES.map(campus => (
                  <li key={campus.slug}>
                    <Link to={campus.path} className="campus-map-item">
                      <span className="campus-map-item-name">{campus.shortName}</span>
                      <span className="campus-map-item-meta">
                        {campus.district} · Est. {campus.established}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              <Link to="/about" className="campus-map-readmore">
                Explore all campuses →
              </Link>
            </div>
            <figure className="campuses-map-wrap">
              <img
                src="/maps/rgukt-ap-campus-map.png"
                alt="Map of Andhra Pradesh showing RGUKT campus locations — Nuzvid, RK Valley, Srikakulam, and Ongole"
                className="campuses-map-img"
              />
            </figure>
          </div>
        </div>
      </section>

      {/* ── ACADEMIC UNITS ── */}
      <section aria-label="Academic units" className="iit-units">
        <div className="section-wrap">
          <h2 className="iit-section-title center">
            <span className="iit-title-red">ACADEMIC</span>{' '}
            <span className="iit-title-dark">UNITS</span>
          </h2>
          <div className="double-line-bottom-theme-colored-2" aria-hidden />

          <div className="units-grid">
            {ACADEMIC_UNITS.map(u => (
              <Link key={u.label} to={u.href} className="unit-card">
                <UnitIcon type={u.icon} />
                <span className="unit-label">{u.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── LATEST NEWS + UPCOMING EVENTS ── */}
      <section aria-label="News and events" className="iit-news-events">
        <div className="section-wrap ne-grid">

          <div className="ne-col">
            <div className="ne-head">
              <h2 className="ne-title">
                <span className="iit-title-dark">LATEST</span>{' '}
                <span className="iit-title-red">NEWS</span>
                <NewsIcon />
              </h2>
              <Link to="/news" className="iit-viewall-btn">VIEW ALL</Link>
            </div>
            <p className="ne-kicker">STAY UPDATED WITH RGUKT-AP</p>

            <div className="news-carousel">
              <button type="button" className="carousel-btn carousel-prev" aria-label="Previous" onClick={() => setNewsIdx(i => (i + LATEST_NEWS.length - 1) % LATEST_NEWS.length)}>
                <ChevronLeft />
              </button>
              <div className="news-cards-row">
                {LATEST_NEWS.map((n, i) => {
                  const visible = i === newsIdx || i === (newsIdx + 1) % LATEST_NEWS.length;
                  return (
                    <Link key={i} to={n.href} className={`news-iit-card${visible ? ' active' : ''}`}>
                      <img src={n.image} alt="" className="news-iit-img" />
                      <div className="news-iit-body">
                        <p className="news-iit-title">{n.title}</p>
                        <span className="news-iit-read">Read more</span>
                      </div>
                    </Link>
                  );
                })}
              </div>
              <button type="button" className="carousel-btn carousel-next" aria-label="Next" onClick={() => setNewsIdx(i => (i + 1) % LATEST_NEWS.length)}>
                <ChevronRight />
              </button>
            </div>
          </div>

          <div className="ne-col ne-events">
            <div className="ne-head">
              <h2 className="ne-title">
                <span className="iit-title-dark">UPCOMING</span>{' '}
                <span className="iit-title-red">EVENTS</span>
                <EventsIcon />
              </h2>
              <Link to="/news" className="iit-viewall-btn">VIEW ALL</Link>
            </div>
            <p className="ne-kicker">MARK YOUR CALENDAR</p>

            <ul className="events-list">
              {UPCOMING_EVENTS.map((e, i) => (
                <li key={i} className="events-item">
                  <Link to="/news" className="events-link">{e.title}</Link>
                  <span className="events-date"><CalIcon /> {e.date}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── STATS OVER IMAGE ── */}
      <section ref={statsRef} aria-label="University statistics" className="iit-stats">
        <img src="/hero/hero-convocation.jpg" alt="" className="iit-stats-bg" />
        <div className="iit-stats-overlay" />
        <div className="section-wrap iit-stats-grid">
          {STAT_TARGETS.map((target, i) => (
            <StatTile key={i} target={target} label={STAT_LABELS[i]} suffix={STAT_SUFFIX[i]} trigger={statsTriggered} />
          ))}
        </div>
      </section>

      {/* ── FOUR CAMPUSES (detailed cards) ── */}
      <section id="campuses" aria-label="Our campuses" className="campuses-section">
        <div className="section-wrap">
          <h2 className="iit-section-title center">
            <span className="iit-title-red">OUR</span>{' '}
            <span className="iit-title-dark">CAMPUSES</span>
          </h2>
          <div className="double-line-bottom-theme-colored-2" aria-hidden />
          <p className="campuses-sub">Four campuses across Andhra Pradesh — one mission of rural excellence.</p>

          <div className="campuses-grid">
            {[
              { name: 'Nuzvid',     region: 'Krishna District',    stats: ['7 Depts','3,500+ Students','Est. 2008'], url: '/nuzvid',                 img: '/campuses/nuzvid.jpg' },
              { name: 'RK Valley',  region: 'Kadapa District',     stats: ['6 Depts','3,200+ Students','Est. 2008'], url: 'https://rguktrkv.ac.in',  img: '/campuses/rk-valley.jpg' },
              { name: 'Ongole',     region: 'Prakasam District',   stats: ['5 Depts','2,400+ Students','Est. 2009'], url: 'https://rguktong.ac.in',  img: '/campuses/ongole.jpg' },
              { name: 'Srikakulam', region: 'Srikakulam District', stats: ['5 Depts','2,800+ Students','Est. 2009'], url: 'https://rguktsklm.ac.in', img: '/campuses/srikakulam.jpg' },
            ].map(cm => {
              const card = (
                <>
                  <div className="campus-overlay" />
                  <div className="campus-body">
                    <div className="campus-name">{cm.name}</div>
                    <div className="campus-region">{cm.region}</div>
                    <div className="campus-stats">
                      {cm.stats.map(s => <span key={s} className="campus-stat">{s}</span>)}
                    </div>
                  </div>
                </>
              );
              const style = { backgroundImage: `url(${cm.img})` };
              return cm.url.startsWith('/')
                ? <Link key={cm.name} to={cm.url} className="campus-card" style={style}>{card}</Link>
                : <a key={cm.name} href={cm.url} target="_blank" rel="noopener noreferrer" className="campus-card" style={style}>{card}</a>;
            })}
          </div>
        </div>
      </section>

      {/* ── FAQs + GALLERY ── */}
      <section aria-label="FAQs and gallery" className="iit-faq-gallery">
        <div className="section-wrap fg-grid">

          <div className="faq-col">
            <div className="ne-head">
              <h2 className="ne-title">
                <span className="iit-title-red">FAQs</span>
                <FaqIcon />
              </h2>
              <Link to="/admissions" className="iit-viewall-btn">VIEW ALL</Link>
            </div>
            <p className="ne-kicker">FREQUENTLY ASKED QUESTIONS</p>

            <div className="faq-list">
              {FAQS.map((f, i) => (
                <div key={i} className={`faq-item${openFaq === i ? ' open' : ''}`}>
                  <button type="button" className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                    <span className="faq-icon">{openFaq === i ? '−' : '+'}</span>
                    {f.q}
                  </button>
                  {openFaq === i && <div className="faq-a">{f.a}</div>}
                </div>
              ))}
            </div>
          </div>

          <div className="gallery-col">
            <GallerySection limit={8} />
          </div>
        </div>
      </section>

      {/* ── SCROLL TO TOP ── */}
      <ScrollTopBtn />

    </div>
  );
}

function StatTile({ target, label, suffix, trigger }: {
  target: number; label: string; suffix: string; trigger: boolean;
}) {
  const val = useAnimatedCount(target, trigger);
  return (
    <div className="iit-stat">
      <div className="iit-stat-value">{val.toLocaleString()}{suffix}</div>
      <div className="iit-stat-rule" />
      <div className="iit-stat-label">{label.toUpperCase()}</div>
    </div>
  );
}

function ScrollTopBtn() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  if (!show) return null;
  return (
    <button type="button" className="scroll-top" aria-label="Scroll to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
      ↑
    </button>
  );
}

function ChevronLeft() {
  return <svg width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round"><polyline points="15 18 9 12 15 6" /></svg>;
}
function ChevronRight() {
  return <svg width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round"><polyline points="9 18 15 12 9 6" /></svg>;
}
function CampusIcon({ variant }: { variant: 'light' | 'red' }) {
  const stroke = variant === 'red' ? '#fff' : '#1a1a1a';
  return (
    <svg width={72} height={72} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={1.3} strokeLinecap="round" aria-hidden>
      <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6M9 9h.01M15 9h.01M9 13h.01M15 13h.01" />
    </svg>
  );
}
function UnitIcon({ type }: { type: string }) {
  const s = { fill: 'none', stroke: '#222', strokeWidth: 1.5, strokeLinecap: 'round' as const };
  if (type === 'atom') return <svg width={40} height={40} viewBox="0 0 24 24" {...s}><circle cx={12} cy={12} r={2} /><ellipse cx={12} cy={12} rx={10} ry={4} /><ellipse cx={12} cy={12} rx={10} ry={4} transform="rotate(60 12 12)" /><ellipse cx={12} cy={12} rx={10} ry={4} transform="rotate(120 12 12)" /></svg>;
  if (type === 'school') return <svg width={40} height={40} viewBox="0 0 24 24" {...s}><path d="M22 10L12 5 2 10l10 5 10-5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>;
  return <svg width={40} height={40} viewBox="0 0 24 24" {...s}><path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" /></svg>;
}
function NewsIcon() {
  return <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="#C8102E" strokeWidth={1.8}><path d="M4 22h16a2 2 0 002-2V4a2 2 0 00-2-2H8a2 2 0 00-2 2v16a2 2 0 01-2 2zm0 0a2 2 0 01-2-2v-9c0-1.1.9-2 2-2h2" /><path d="M18 14h-8M18 18h-8M18 10h-8M8 6h8v4H8V6z" /></svg>;
}
function EventsIcon() {
  return <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="#C8102E" strokeWidth={1.8}><rect x={3} y={4} width={18} height={18} rx={2} /><line x1={16} y1={2} x2={16} y2={6} /><line x1={8} y1={2} x2={8} y2={6} /><line x1={3} y1={10} x2={21} y2={10} /></svg>;
}
function CalIcon() {
  return <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><rect x={3} y={4} width={18} height={18} rx={2} /><line x1={16} y1={2} x2={16} y2={6} /><line x1={8} y1={2} x2={8} y2={6} /><line x1={3} y1={10} x2={21} y2={10} /></svg>;
}
function FaqIcon() {
  return <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="#C8102E" strokeWidth={1.8}><circle cx={12} cy={12} r={10} /><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3M12 17h.01" /></svg>;
}
