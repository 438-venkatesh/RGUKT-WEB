import './AboutDocLink.css';

type Props = {
  title: string;
  file: string;
  size: string;
  surface?: string;
  border?: string;
  text?: string;
  textMuted?: string;
  accent?: string;
};

export default function AboutDocLink({
  title,
  file,
  size,
  surface = '#fff',
  border = '#C5D3E8',
  text = '#18243A',
  textMuted = '#526070',
  accent = '#0A2744',
}: Props) {
  return (
    <a
      href={file}
      download
      className="about-doc-link"
      style={{ background: surface, border: `1px solid ${border}`, color: text }}
    >
      <FileIcon stroke={accent} />
      <span className="about-doc-label">{title}</span>
      <span className="about-doc-size" style={{ color: textMuted }}>{size}</span>
      <DownloadIcon stroke={accent} />
    </a>
  );
}

function FileIcon({ stroke }: { stroke: string }) {
  return (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>
  );
}

function DownloadIcon({ stroke }: { stroke: string }) {
  return (
    <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1={12} y1={15} x2={12} y2={3} />
    </svg>
  );
}
