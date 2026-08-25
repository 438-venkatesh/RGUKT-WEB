import AboutSubLayout, { useAboutTheme } from '../components/AboutSubLayout';
import NavHubLinks from '../components/NavHubLinks';
import CampusNetworkMap from '../components/CampusNetworkMap';
import { ABOUT_NAV } from '../data/aboutContent';
import '../components/SectionPageLayout.css';
import './About.css';

const QUICK_LINKS = ABOUT_NAV.filter(item => item.href !== '/about');

export default function About() {
  const c = useAboutTheme();

  return (
    <AboutSubLayout>
      <h1 className="section-page-h1">About RGUKT</h1>

      <figure className="history-img-wrap">
        <img
          src="/gallery/gallery-7.jpg"
          alt="RGUKT-AP convocation and campus life"
          className="history-img"
        />
        <figcaption className="history-img-caption" style={{ color: c.textMuted }}>
          RGUKT-AP — empowering rural youth through integrated engineering education
        </figcaption>
      </figure>

      <p className="about-body" style={{ color: c.textMuted }}>
        Rajiv Gandhi University of Knowledge Technologies was established in 2008 by the Government of Andhra Pradesh to bring IIT-level technical education within reach of gifted students from rural backgrounds — regardless of financial means. The university was created by a dedicated Act of the state legislature, with a mandate to identify and nurture engineering talent at the pre-university stage.
      </p>
      <p className="about-body" style={{ color: c.textMuted }}>
        Today RGUKT-AP operates four campuses — Nuzvid, RK Valley, Srikakulam and Ongole — serving over 15,000 students through a six-year integrated programme spanning pre-university and undergraduate engineering education. Graduates earn a B.Tech degree recognised by the UGC and are equipped for careers in industry, research, and entrepreneurship.
      </p>

      <div className="history-facts">
        {[
          { value: '2008', label: 'Established' },
          { value: '4', label: 'Campuses' },
          { value: '15K+', label: 'Students' },
          { value: '6 Yrs', label: 'Integrated B.Tech' },
        ].map(f => (
          <div key={f.label} className="fact-chip" style={{ background: c.surface, border: `1px solid ${c.border}` }}>
            <span className="fact-value" style={{ color: c.accent }}>{f.value}</span>
            <span className="fact-label" style={{ color: c.textMuted }}>{f.label}</span>
          </div>
        ))}
      </div>

      <NavHubLinks items={QUICK_LINKS} title="Explore About RGUKT" />

      {/* Enhanced Four-Campus Interactive Network Map */}
      <CampusNetworkMap />
    </AboutSubLayout>
  );
}
