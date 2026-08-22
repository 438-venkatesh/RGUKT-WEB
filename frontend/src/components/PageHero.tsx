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
};

export default function PageHero({
  title,
  subtitle = 'Rajiv Gandhi University of Knowledge Technologies — Andhra Pradesh',
  quote,
  quoteAuthor,
  bgImage = '/gallery/gallery-7.jpg',
  titleImage,
}: PageHeroProps) {
  const clipImage = titleImage ?? bgImage;

  return (
    <section className="page-hero" aria-label={`${title} page header`}>
      <div
        className="page-hero-bg"
        style={{ backgroundImage: `url(${bgImage})` }}
        aria-hidden
      />
      <div className="page-hero-wash" aria-hidden />

      <div className="page-hero-content">
        <img src={logoSrc} alt="" className="page-hero-logo" aria-hidden />
        <p className="page-hero-uni">{subtitle}</p>

        <h1
          className="page-hero-title"
          style={{ backgroundImage: `url(${clipImage})` }}
        >
          {title}
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
