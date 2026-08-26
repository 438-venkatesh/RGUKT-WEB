import type { KeyboardEvent, MouseEvent } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  href?: string;
  photo: string;
  name: string;
  label: string;
  note?: string;
  email?: string;
};

function stopLinkNavigation(e: MouseEvent | KeyboardEvent) {
  e.preventDefault();
  e.stopPropagation();
}

export default function PersonSquareCard({
  href,
  photo,
  name,
  label,
  note,
  email,
}: Props) {
  const inner = (
    <>
      <img src={photo} alt={name} className="about-person-photo" loading="lazy" />
      <div className="about-person-overlay" aria-hidden />
      <div className="about-person-caption">
        <div className="about-person-label">{label}</div>
        <div className="about-person-name">{name}</div>
        {note && <div className="about-person-note">{note}</div>}
        {email && (
          <span
            role="link"
            tabIndex={0}
            className="about-person-email"
            onClick={e => {
              stopLinkNavigation(e);
              window.location.href = `mailto:${email}`;
            }}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                stopLinkNavigation(e);
                window.location.href = `mailto:${email}`;
              }
            }}
          >
            {email}
          </span>
        )}
      </div>
    </>
  );

  if (href) {
    return (
      <Link to={href} className="about-person-card">
        {inner}
      </Link>
    );
  }

  return <div className="about-person-card">{inner}</div>;
}
