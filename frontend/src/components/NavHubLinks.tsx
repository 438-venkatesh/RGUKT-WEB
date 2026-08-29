import { Link } from 'react-router-dom';
import { useSectionTheme } from './SectionPageLayout';
import './SectionPageLayout.css';

type NavItem = { label: string; href: string };

export default function NavHubLinks({
  items,
  title,
}: {
  items: NavItem[];
  title?: string;
}) {
  const c = useSectionTheme();

  return (
    <section className="section-hub">
      {title && <h2 className="section-page-h2">{title}</h2>}
      <div className="nav-hub-links">
        {items.map(item => (
          <Link
            key={item.href}
            to={item.href}
            className="nav-hub-link"
            style={{
              background: c.surface,
              border: `1px solid ${c.border}`,
              color: c.text
            }}
          >
            {item.label}
            <span aria-hidden style={{ color: c.accent }}>→</span>
          </Link>
        ))}
      </div>
    </section>
  );
}