import { Link, useLocation } from 'react-router-dom';
import SectionPageLayout from '../SectionPageLayout';
import BlockRenderer from './Blocks';
import { BlockIcon } from './Icons';
import type { SectionNavGroup, SectionPage } from '../../data/sectionPage';
import './Blocks.css';
import '../SectionPageLayout.css';

type Props = {
  page: SectionPage;
  pages: SectionPage[];
  groups: SectionNavGroup[];
  navTitle: string;
};

function SiblingRail({ page, pages, groups, navTitle }: Props) {
  const { pathname } = useLocation();
  const bySlug = (slug: string) => pages.find(p => p.slug === slug);

  return (
    <nav className="ac-siblings" aria-label={navTitle}>
      <header className="ac-block-head">
        <h2 className="ac-block-title">
          <span className="ac-block-rule" aria-hidden />
          {navTitle}
        </h2>
      </header>
      {groups.map(group => {
        const items = group.slugs.map(bySlug).filter((p): p is SectionPage => Boolean(p));
        if (items.length === 0) return null;
        return (
          <div key={group.label} className="ac-siblings-group">
            {group.label && (
              <p className="ac-eyebrow" style={{ marginTop: 18 }}>{group.label}</p>
            )}
            <div className="ac-siblings-grid">
              {items.map(item => (
                <Link
                  key={item.slug}
                  to={item.route}
                  className={`ac-sibling ${item.slug === page.slug || item.route === pathname ? 'is-current' : ''}`}
                >
                  <span className="ac-sibling-icon" aria-hidden>
                    <BlockIcon name={item.icon} />
                  </span>
                  {item.navLabel}
                </Link>
              ))}
            </div>
          </div>
        );
      })}
    </nav>
  );
}

export default function BlockPageView(props: Props) {
  const { page } = props;

  return (
    <SectionPageLayout>
      <div className="ac-page">
        <header className="ac-page-header">
          <p className="ac-eyebrow">{page.eyebrow}</p>
          <h1 className="ac-page-title">{page.title}</h1>
        </header>



        {page.blocks.map((block, i) => (
          <BlockRenderer key={`${block.kind}-${i}`} block={block} />
        ))}



        <SiblingRail {...props} />
      </div>
    </SectionPageLayout>
  );
}
