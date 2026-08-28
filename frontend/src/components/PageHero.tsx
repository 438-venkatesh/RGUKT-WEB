import logoSrc from '../assets/rgukt-logo.png';
import './PageHero.css';

export type PageHeroProps = {
  title: string;
  subtitle?: string;
  quote?: string;
  quoteAuthor?: string;
  bgImage?: string;
  /** Image clipped inside the large title text (defaults to bgImage) */
  titleImage?: string;
  /** If true, removes only the background photo from the hero area */
  noHeroBg?: boolean;
};

export default function PageHero({
  title,
  subtitle = 'Rajiv Gandhi University of Knowledge Technologies — Andhra Pradesh',
  quote,
  quoteAuthor,
  bgImage = '/gallery/gallery-7.jpg',
  titleImage,
  noHeroBg = false,
}: PageHeroProps) {
  const clipImage = titleImage ?? bgImage;

  const atIndex = title.indexOf('@');
  const hasAt = atIndex !== -1;
  const mainPart = hasAt ? title.slice(0, atIndex).trim() : title.trim();
  const tagPart = hasAt ? title.slice(atIndex + 1).trim() : '';

  // Determine size tier based on the character length of the main module title
  const len = mainPart.length;
  const sizeClass = len >= 22
    ? 'title-size-long'      // e.g. "CHIEF ADMINISTRATIVE OFFICER" (28), "DEAN OF STUDENT AFFAIRS" (23)
    : len >= 13
      ? 'title-size-medium'  // e.g. "GOVERNING COUNCIL" (17), "ACADEMIC COUNCIL" (16), "VICE CHANCELLOR" (15), "DEAN OF EVALUATION" (18), "DEAN OF ACADEMICS" (17), "FINANCE OFFICER" (15), "ADMINISTRATION" (14)
      : 'title-size-short';   // e.g. "DIRECTORS" (9), "REGISTRAR" (9), "CHANCELLOR" (10), "SPORTS BOARD" (12), "DEAN OF EITP" (12), "DEAN OF R&D" (11)

  return (
    <section className="page-hero" aria-label={`${mainPart} page header`}>
      {!noHeroBg && (
        <>
          <div
            className="page-hero-bg"
            style={{ backgroundImage: `url(${bgImage})` }}
            aria-hidden
          />
          <div className="page-hero-wash" aria-hidden />
        </>
      )}

      <div className="page-hero-content">
        <img src={logoSrc} alt="" className="page-hero-logo" aria-hidden />
        <p className="page-hero-uni">{subtitle}</p>

        <h1
          className={`page-hero-title ${hasAt ? 'has-tag-split' : ''} ${sizeClass}`}
          style={{ backgroundImage: `url(${clipImage})` }}
        >
          {hasAt ? (
            <>
              <span className="page-hero-title-main">{mainPart}</span>
              <span className="page-hero-title-tag">@{tagPart}</span>
            </>
          ) : (
            title
          )}
        </h1>

        {quote && (
          <blockquote className="page-hero-quote">
            <p dangerouslySetInnerHTML={{ __html: quote }} />
            {quoteAuthor && <cite>— {quoteAuthor}</cite>}
          </blockquote>
        )}
      </div>
    </section>
  );
}
