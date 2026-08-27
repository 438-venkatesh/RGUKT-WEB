import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin, Phone } from 'lucide-react';
import RGUKTLogo from '../../components/RGUKTLogo';
import '../../components/RGUKTLogo.css';
import './NuzvidFooter.css';

type FooterLink = { label: string; href: string; external?: boolean };

const UNIVERSITY_LINKS: FooterLink[] = [
  { label: 'About RGUKT Nuzvid', href: '/nuzvid/about' },
  { label: 'Academics', href: '/nuzvid/academics' },
  { label: 'Administration', href: '/nuzvid/administration' },
  { label: 'Departments', href: '/nuzvid/departments' },
];

const STUDENT_LINKS: FooterLink[] = [
  { label: 'Admissions', href: '/nuzvid/admissions' },
  { label: 'Examinations & Results', href: '/nuzvid/examinations' },
  { label: 'Notifications', href: '/nuzvid#notifications' },
  { label: 'Central Library', href: '/nuzvid/library' },
];

const QUICK_LINKS: FooterLink[] = [
  { label: 'Placements', href: '/nuzvid/placements' },
  { label: 'Tenders', href: '/nuzvid/tenders' },
  { label: 'Academic Calendar', href: '/nuzvid/academics/calendar' },
  { label: 'Alumni portal', href: '/nuzvid/alumni' },
];

function FooterNavLink({ link }: { link: FooterLink }) {
  if (link.external) {
    return <a href={link.href} target="_blank" rel="noopener noreferrer" className="nzf-link">{link.label} <ArrowUpRight size={13} aria-hidden="true" /></a>;
  }
  return <Link to={link.href} className="nzf-link">{link.label}</Link>;
}

function FooterColumn({ title, links }: { title: string; links: FooterLink[] }) {
  return (
    <div className="nzf-col">
      <h2>{title}</h2>
      <nav className="nzf-links" aria-label={title}>
        {links.map((link) => <FooterNavLink key={link.label} link={link} />)}
      </nav>
    </div>
  );
}

export default function NuzvidFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="nzf">
      <div className="nzf-grid">
        <div className="nzf-brand-col">
          <Link to="/nuzvid" className="nzf-brand" aria-label="RGUKT Nuzvid home">
            <span className="nzf-logo" aria-hidden="true"><RGUKTLogo width={31} height={44} /></span>
            <span>RGUKT Nuzvid</span>
          </Link>
          <p>Rajiv Gandhi University of Knowledge Technologies, Nuzvid—catering to the educational needs of gifted rural youth of Andhra Pradesh.</p>
          <span className="nzf-act">Established under A.P. Act No. 18 of 2008</span>
        </div>

        <FooterColumn title="University" links={UNIVERSITY_LINKS} />
        <FooterColumn title="Students" links={STUDENT_LINKS} />
        <FooterColumn title="Quick links" links={QUICK_LINKS} />

        <div className="nzf-col nzf-contact">
          <h2>Contact</h2>
          <address>
            <span><MapPin size={16} aria-hidden="true" /> Mylavaram Road, Nuzvid,<br />Andhra Pradesh – 521 202</span>
            <a href="tel:+918656235147"><Phone size={15} aria-hidden="true" /> 08656 235147</a>
            <a href="mailto:director@rguktn.ac.in">director@rguktn.ac.in</a>
          </address>
          <Link to="/nuzvid/contact" className="nzf-contact-link">Address & directions <ArrowUpRight size={14} aria-hidden="true" /></Link>
        </div>
      </div>

      <div className="nzf-bottom">
        <span>© {year} Rajiv Gandhi University of Knowledge Technologies, Nuzvid.</span>
        <div>
          <Link to="/nuzvid/rti">Right to Information</Link>
          <Link to="/nuzvid/contact/directory">Communication directory</Link>
          <Link to="/">RGUKT-AP</Link>
        </div>
      </div>
    </footer>
  );
}
