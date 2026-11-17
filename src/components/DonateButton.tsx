import type { CSSProperties, ReactNode } from 'react';
import { ZEFFY_DONATION_URL } from '../data/siteData';

interface DonateButtonProps {
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

export function DonateButton({ className = 'btn btn--maroon', style, children }: DonateButtonProps) {
  return (
    <a
      className={className}
      style={{ cursor: 'pointer', ...style }}
      zeffy-form-link={ZEFFY_DONATION_URL}
      role="button"
      tabIndex={0}
    >
      {children}
    </a>
  );
}
