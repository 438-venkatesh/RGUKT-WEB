import BlockPageView from './blocks/BlockPageView';
import { ACADEMICS_GROUPS, ACADEMICS_PAGES, getAcademicsPageBySlug } from '../data/academicsPages';

export default function AcademicsPageView({ slug }: { slug: string }) {
  const page = getAcademicsPageBySlug(slug) ?? ACADEMICS_PAGES[0];
  return (
    <BlockPageView
      page={page}
      pages={ACADEMICS_PAGES}
      groups={ACADEMICS_GROUPS}
      navTitle="Explore Academics"
    />
  );
}
