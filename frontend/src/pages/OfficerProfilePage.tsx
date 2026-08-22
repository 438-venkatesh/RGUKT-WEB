import { useLocation, Link } from 'react-router-dom';
import AdministrationScrapedPage from '../components/AdministrationScrapedPage';
import { ADMIN_PAGE_KEYS, getAdministrationPageByPath } from '../data/administrationScrapedData';

const PATH_TO_KEY = Object.fromEntries(
  Object.entries(ADMIN_PAGE_KEYS).map(([key, slug]) => [
    slug === 'overview' ? '/administration' : `/administration/${slug}`,
    key,
  ]),
);

export default function OfficerProfilePage() {
  const { pathname } = useLocation();
  const pageKey = PATH_TO_KEY[pathname];
  const page = getAdministrationPageByPath(pathname);

  if (pageKey && page) {
    return <AdministrationScrapedPage pageKey={pageKey} />;
  }

  return (
    <div style={{ padding: '80px 24px', textAlign: 'center' }}>
      <p>Officer profile not found.</p>
      <Link to="/administration">Back to Administration</Link>
    </div>
  );
}
