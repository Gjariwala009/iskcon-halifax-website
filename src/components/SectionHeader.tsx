import type { CSSProperties } from 'react';

interface SectionHeaderProps {
  subtitle?: string;
  title: string;
  description?: string;
  dividerIconClass?: string;
  dividerSymbol?: string;
  light?: boolean;
  align?: 'center' | 'left';
  subtitleStyle?: CSSProperties;
  titleStyle?: CSSProperties;
  descriptionStyle?: CSSProperties;
}

export function SectionHeader({
  subtitle,
  title,
  description,
  dividerIconClass,
  dividerSymbol = '✦',
  light = false,
  align = 'center',
  subtitleStyle,
  titleStyle,
  descriptionStyle,
}: SectionHeaderProps) {
  return (
    <div
      className={`section-header fade-in ${light ? 'section-header--light' : ''}`}
      style={align === 'left' ? { textAlign: 'left', margin: '0 0 2rem' } : undefined}
    >
      {subtitle && (
        <p className="section-header__subtitle" style={subtitleStyle}>
          {subtitle}
        </p>
      )}
      <h2 className="section-header__title" style={titleStyle}>
        {title}
      </h2>
      <div
        className="section-header__divider"
        style={align === 'left' ? { justifyContent: 'flex-start' } : undefined}
      >
        {dividerIconClass ? (
          <i className={`${dividerIconClass} section-header__divider-icon`} />
        ) : (
          <span className="section-header__divider-icon">{dividerSymbol}</span>
        )}
      </div>
      {description && (
        <p className="section-header__description" style={descriptionStyle}>
          {description}
        </p>
      )}
    </div>
  );
}
