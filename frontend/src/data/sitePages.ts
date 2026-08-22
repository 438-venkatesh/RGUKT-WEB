export type SitePageSection = {
  heading?: string;
  body?: string;
  bullets?: string[];
  links?: { label: string; href: string }[];
};

export type SitePageData = {
  path: string;
  heroTitle: string;
  title: string;
  intro?: string;
  sections: SitePageSection[];
};

/** All former ContentPage stubs have been replaced with dedicated pages. */
export const SITE_PAGES: SitePageData[] = [];

const SITE_PAGE_MAP = new Map(SITE_PAGES.map(p => [p.path, p]));

export function getSitePage(path: string): SitePageData | undefined {
  return SITE_PAGE_MAP.get(path);
}

export const SITE_PAGE_PATHS = SITE_PAGES.map(p => p.path);

export function heroTitleForPath(path: string, fallbackTitle: string): string {
  const page = getSitePage(path);
  if (page) return page.heroTitle;
  const slug = fallbackTitle.replace(/\s+/g, '');
  return `${slug}@RGUKT-AP`;
}
