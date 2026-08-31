import React from 'react';
import type { SubsectionPageData, HighlightCard } from '../../../data/nuzvidAboutData';
import './NuzvidAboutPage.css';

interface NuzvidAboutPageLayoutProps {
  data: SubsectionPageData;
  children?: React.ReactNode;
}

function HighlightIcon({ icon }: { icon: HighlightCard['icon'] }) {
  switch (icon) {
    case 'academic':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      );
    case 'student':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case 'campus':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      );
    case 'achievement':
    case 'star':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      );
    case 'shield':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      );
    case 'doc':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      );
    case 'globe':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      );
    case 'users':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case 'building':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
          <line x1="9" y1="22" x2="9" y2="22.01" />
          <line x1="15" y1="22" x2="15" y2="22.01" />
          <line x1="9" y1="6" x2="9" y2="6.01" />
          <line x1="15" y1="6" x2="15" y2="6.01" />
          <line x1="9" y1="10" x2="9" y2="10.01" />
          <line x1="15" y1="10" x2="15" y2="10.01" />
          <line x1="9" y1="14" x2="9" y2="14.01" />
          <line x1="15" y1="14" x2="15" y2="14.01" />
          <line x1="9" y1="18" x2="9" y2="18.01" />
          <line x1="15" y1="18" x2="15" y2="18.01" />
        </svg>
      );
    default:
      return null;
  }
}

export default function NuzvidAboutPageLayout({ data, children }: NuzvidAboutPageLayoutProps) {
  const isOverview = data.id === 'about-rgukt';

  return (
    <div className="nzp-root">
      {/* ─────────────────────────────────────────────────────────
          1. INTRO / HERO SECTION
          ───────────────────────────────────────────────────────── */}
      {data.heroLayoutType === 'split-hero' ? (
        <div className="nzp-hero-wrapper nzp-hero-wrapper--split">
          <section className="nzp-hero-split" aria-label={data.title}>
            {/* Left Column: Complete Uncropped Intro Image */}
            <div className="nzp-split-media">
              <div className="nzp-split-img-frame">
                <img
                  src={data.heroImage}
                  alt={data.heroAlt}
                  className="nzp-split-img"
                  fetchPriority="high"
                  decoding="async"
                />
              </div>
            </div>

            {/* Right Column: Title, Subtitle, Verified Badge */}
            <div className="nzp-split-content">
              <div className="nzp-hero-eyebrow">{data.eyebrow}</div>
              <h1 className="nzp-hero-title nzp-hero-title--split">{data.title}</h1>
              <p className="nzp-hero-sub nzp-hero-sub--split">{data.heroSubtitle}</p>

              {data.verifiedBadge && (
                <div className="nzp-hero-badge nzp-hero-badge--split">
                  <span className="nzp-badge-dot" />
                  <span>{data.verifiedBadge}</span>
                </div>
              )}
            </div>
          </section>
        </div>
      ) : (
        <div className={`nzp-hero-wrapper ${isOverview ? 'nzp-hero-wrapper--overview' : ''}`}>
          <section
            className={`nzp-hero ${isOverview ? 'nzp-hero--overview' : 'nzp-hero--subsection'}`}
            aria-label={data.title}
          >
            <div className="nzp-hero-bg">
              <img
                src={data.heroImage}
                alt={data.heroAlt}
                className="nzp-hero-img"
                fetchPriority="high"
                decoding="async"
              />
              {/* Subtle, light gradient overlay keeping photograph clearly visible with strong text contrast */}
              <div className="nzp-hero-overlay nzp-hero-overlay--subtle" />
            </div>

            <div className="nzp-hero-container">
              <div className="nzp-hero-content">
                <div className="nzp-hero-eyebrow">{data.eyebrow}</div>
                <h1 className="nzp-hero-title">{data.title}</h1>
                <p className="nzp-hero-sub">{data.heroSubtitle}</p>

                {data.verifiedBadge && (
                  <div className="nzp-hero-badge">
                    <span className="nzp-badge-dot" />
                    <span>{data.verifiedBadge}</span>
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────
          2. MAIN CONTENT AREA (Centered max-width: 1200px)
          ───────────────────────────────────────────────────────── */}
      <main className="nzp-main">
        <div className="nzp-container">
          {/* Custom Section Children (e.g., Progression Timeline Banner, Gallery Filter) */}
          {children && <div className="nzp-children-slot">{children}</div>}

          {/* Alternating Major Content Blocks (Layout A & Layout B) */}
          {data.blocks && data.blocks.length > 0 && (
            <div className="nzp-blocks-stream">
              {data.blocks.map((block, idx) => {
                const isLayoutA = block.layout === 'layout-a';

                return (
                  <div
                    key={block.heading || idx}
                    className={`nzp-block-row ${isLayoutA ? 'nzp-block-row--layout-a' : 'nzp-block-row--layout-b'}`}
                  >
                    {/* Text Column */}
                    <div className="nzp-block-text">
                      <h2 className="nzp-block-heading">{block.heading}</h2>
                      {block.paragraph && (
                        <p className="nzp-block-p">{block.paragraph}</p>
                      )}
                      {block.bullets && block.bullets.length > 0 && (
                        <ul className="nzp-bullets-list">
                          {block.bullets.map((bullet, bIdx) => (
                            <li key={bIdx} className="nzp-bullet-item">
                              <span className="nzp-bullet-dot" aria-hidden="true" />
                              <span className="nzp-bullet-text">{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      {/* Optional Highlight Tags */}
                      {block.highlights && block.highlights.length > 0 && (
                        <div className="nzp-block-highlights">
                          {block.highlights.map((hl, hIdx) => (
                            <span key={hIdx} className="nzp-block-pill">
                              {hl}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Image Column (Equal height & consistent aspect ratio or stacked list) */}
                    <div className="nzp-block-media">
                      {block.images && block.images.length > 0 ? (
                        <div className="nzp-media-stacked-wrap" style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                          {block.images.map((imgSrc, imgIdx) => (
                            <div key={imgIdx} className="nzp-media-card">
                              <div className="nzp-media-frame" style={{ minHeight: '180px', maxHeight: '220px' }}>
                                <img
                                  src={imgSrc}
                                  alt={`${block.imageAlt} - Officer ${imgIdx + 1}`}
                                  className="nzp-media-img"
                                  loading="lazy"
                                />
                              </div>
                            </div>
                          ))}
                          {(block.imageCaption || block.attribution) && (
                            <div className="nzp-media-caption" style={{ borderRadius: '10px', border: '1px solid var(--nzp-border)' }}>
                              {block.imageCaption && <span>{block.imageCaption}</span>}
                              {block.attribution && (
                                <div className="nzp-media-attribution">{block.attribution}</div>
                              )}
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="nzp-media-card">
                          <div className="nzp-media-frame">
                            <img
                              src={block.image}
                              alt={block.imageAlt}
                              className="nzp-media-img"
                              loading="lazy"
                            />
                          </div>
                          {(block.imageCaption || block.attribution) && (
                            <div className="nzp-media-caption">
                              {block.imageCaption && <span>{block.imageCaption}</span>}
                              {block.attribution && (
                                <div className="nzp-media-attribution">{block.attribution}</div>
                              )}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Document / Action Card if available */}
          {data.documentAction && (
            <div className="nzp-doc-card">
              <div className="nzp-doc-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
              </div>
              <div className="nzp-doc-body">
                <h3 className="nzp-doc-title">Official Document Verification</h3>
                <p className="nzp-doc-desc">{data.documentAction.description}</p>
                <a
                  href={data.documentAction.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nzp-doc-btn"
                >
                  {data.documentAction.label} ↗
                </a>
              </div>
            </div>
          )}

          {/* ─────────────────────────────────────────────────────────
              3. VERIFIED INFORMATION CARDS (Linear Gradient Cards)
              ───────────────────────────────────────────────────────── */}
          {data.cards && data.cards.length > 0 && (
            <div className="nzp-cards-section">
              <div
                className="nzp-cards-grid"
                style={{
                  gridTemplateColumns: `repeat(${Math.min(data.cards.length, 4)}, 1fr)`,
                }}
              >
                {data.cards.map((card, idx) => (
                  <div
                    key={card.title}
                    className={`nzp-card-item nzp-card-item--${idx % 6}`}
                    style={
                      card.bgGradient
                        ? {
                            background: card.bgGradient,
                            borderColor: card.borderColor || 'rgba(148, 163, 184, 0.25)',
                          }
                        : undefined
                    }
                  >
                    <div className="nzp-card-icon-wrap">
                      <HighlightIcon icon={card.icon} />
                    </div>
                    <h3 className="nzp-card-title">{card.title}</h3>
                    <p className="nzp-card-desc">{card.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
