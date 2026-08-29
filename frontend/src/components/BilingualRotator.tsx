import './BilingualRotator.css';

type BilingualRotatorProps = {
  en: string;
  te: string;
  className?: string;
};

/** Vertical EN ↔ TE text rotation (IIT Delhi–style). */
export default function BilingualRotator({ en, te, className = '' }: BilingualRotatorProps) {
  return (
    <div className={`bilingual-rotator${className ? ` ${className}` : ''}`}>
      <span className="bilingual-line bilingual-en" lang="en">{en}</span>
      <span className="bilingual-line bilingual-te" lang="te">{te}</span>
    </div>
  );
}
