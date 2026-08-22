import { Link } from 'react-router-dom';
import './NuzvidPlaceholder.css';

type Props = {
  title: string;
  sourceUrl?: string;
};

export default function NuzvidPlaceholder({ title, sourceUrl }: Props) {
  return (
    <div className="nzp">
      <div className="nzp-inner">
        <p className="nzp-kicker">RGUKT Nuzvid</p>
        <h1 className="nzp-title">{title}</h1>
        <p className="nzp-desc">
          Content for this page will be loaded from the official Nuzvid campus website.
        </p>
        {sourceUrl && (
          <a href={sourceUrl} target="_blank" rel="noopener noreferrer" className="nzp-source">
            View on rguktn.ac.in →
          </a>
        )}
        <Link to="/nuzvid" className="nzp-back">← Back to Nuzvid Home</Link>
      </div>
    </div>
  );
}
