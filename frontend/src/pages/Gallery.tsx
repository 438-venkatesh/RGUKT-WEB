import GallerySection from '../components/GallerySection';
import '../components/GallerySection.css';
import './Gallery.css';

export default function Gallery() {
  return (
    <div className="iit-gallery-page">
      <GallerySection showViewAll={false} />
    </div>
  );
}
