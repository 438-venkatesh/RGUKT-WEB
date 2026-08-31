import { useState } from 'react';
import NuzvidAboutPageLayout from './NuzvidAboutPageLayout';
import { DATA_GALLERY, DATA_GALLERY_PHOTOS, type GalleryPhotoItem } from '../../../data/nuzvidAboutData';

export default function NuzvidGalleryPage() {
  const [filter, setFilter] = useState<'All' | GalleryPhotoItem['category']>('All');

  const filteredPhotos = DATA_GALLERY_PHOTOS.filter((p) => {
    if (filter === 'All') return true;
    return p.category === filter;
  });

  return (
    <NuzvidAboutPageLayout data={DATA_GALLERY}>
      <div className="nzp-gallery-filter-bar" role="tablist" aria-label="Filter gallery by category">
        {(['All', 'Campus', 'Events', 'Labs', 'Sports'] as const).map((cat) => (
          <button
            key={cat}
            type="button"
            role="tab"
            aria-selected={filter === cat}
            onClick={() => setFilter(cat)}
            className={`nzp-filter-pill${filter === cat ? ' nzp-filter-pill--active' : ''}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="nzp-gallery-grid">
        {filteredPhotos.map((photo) => (
          <div key={photo.id} className="nzp-gallery-card">
            <div className="nzp-gallery-img-wrap">
              <img
                src={photo.image}
                alt={photo.title}
                className="nzp-gallery-img"
                loading="lazy"
              />
            </div>
            <div className="nzp-gallery-meta">
              <h3 className="nzp-gallery-title">{photo.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </NuzvidAboutPageLayout>
  );
}
