import BlockPageView from './blocks/BlockPageView';
import { ADMISSIONS_GROUPS, ADMISSIONS_PAGES, getAdmissionsPage } from '../data/admissionsPages';

export default function AdmissionsPageView({ slug }: { slug: string }) {
  const page = getAdmissionsPage(slug) ?? ADMISSIONS_PAGES[0];
  return (
    <BlockPageView
      page={page}
      pages={ADMISSIONS_PAGES}
      groups={ADMISSIONS_GROUPS}
      navTitle="Admissions"
    />
  );
}
