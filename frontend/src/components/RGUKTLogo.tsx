import logoSrc from '../assets/rgukt-logo.png';
import './RGUKTLogo.css';

type Props = {
  variant?: 'default' | 'white';
  width?: number;
  height?: number;
  className?: string;
};

export default function RGUKTLogo({
  variant = 'default',
  width = 48,
  height = 68,
  className = '',
}: Props) {
  return (
    <img
      src={logoSrc}
      alt=""
      aria-hidden="true"
      width={width}
      height={height}
      className={`rgukt-logo${variant === 'white' ? ' rgukt-logo-white' : ''} ${className}`.trim()}
    />
  );
}
