import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { GALLERY_PHOTOS, GALLERY_KICKER } from '../data/galleryPhotos';
import './GallerySection.css';

type Props = {
  showViewAll?: boolean;
  limit?: number;
};

export default function GallerySection({ showViewAll = true, limit }: Props) {
  const photos = limit ? GALLERY_PHOTOS.slice(0, limit) : GALLERY_PHOTOS;
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const close = useCallback(() => setLightboxIdx(null), []);
  const prev = useCallback(() => {
    setLightboxIdx(i => i === null ? null : (i + photos.length - 1) % photos.length);
  }, [photos.length]);
  const next = useCallback(() => {
    setLightboxIdx(i => i === null ? null : (i + 1) % photos.length);
  }, [photos.length]);

  useEffect(() => {
    if (lightboxIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxIdx, close, prev, next]);

  return (
    <>
      <section className="iit-gallery" aria-label="Photo gallery">
        <div className="iit-gallery-head">
          <div>
            <div className="iit-gallery-kicker">{GALLERY_KICKER}</div>
            <h2 className="iit-gallery-title">Photo Gallery</h2>
          </div>
          {showViewAll && (
            <Link to="/gallery" className="iit-gallery-viewall">
              View all <span aria-hidden>→</span>
            </Link>
          )}
        </div>

        <div className="iit-gallery-grid">
          {photos.map((photo, i) => (
            <button
              key={photo.id}
              type="button"
              className="iit-gallery-item"
              aria-label={`Open ${photo.alt}`}
              onClick={() => setLightboxIdx(i)}
            >
              <img src={photo.thumb} alt={photo.alt} className="iit-gallery-img" loading="lazy" />
              <span className="iit-gallery-expand" aria-hidden>
                <ExpandIcon />
              </span>
            </button>
          ))}
        </div>
      </section>

      {lightboxIdx !== null && (
        <div
          className="iit-gallery-lb"
          role="dialog"
          aria-modal="true"
          aria-label={photos[lightboxIdx]?.alt}
          onClick={close}
        >
          <button type="button" className="iit-gallery-lb-close" aria-label="Close" onClick={close}>×</button>
          <button type="button" className="iit-gallery-lb-prev" aria-label="Previous" onClick={(e) => { e.stopPropagation(); prev(); }}>
            <ChevronLeft />
          </button>
          <img
            src={photos[lightboxIdx].full}
            alt={photos[lightboxIdx].alt}
            className="iit-gallery-lb-img"
            onClick={e => e.stopPropagation()}
          />
          <button type="button" className="iit-gallery-lb-next" aria-label="Next" onClick={(e) => { e.stopPropagation(); next(); }}>
            <ChevronRight />
          </button>
        </div>
      )}
    </>
  );
}

function ExpandIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <polyline points="15 3 21 3 21 9" /><polyline points="9 21 3 21 3 15" />
      <line x1="21" y1="3" x2="14" y2="10" /><line x1="3" y1="21" x2="10" y2="14" />
    </svg>
  );
}
function ChevronLeft() {
  return <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="15 18 9 12 15 6" /></svg>;
}
function ChevronRight() {
  return <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="9 18 15 12 9 6" /></svg>;
}
