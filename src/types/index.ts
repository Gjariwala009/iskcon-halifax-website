export interface NavLinkItem {
  label: string;
  to: string;
  isCta?: boolean;
}

export interface FeatureItem {
  icon?: string;
  number?: string;
  title: string;
  description: string;
}

export interface CardItem {
  image?: string;
  imageAlt?: string;
  imageStyle?: React.CSSProperties;
  icon?: string;
  tag?: string;
  title: string;
  description: string;
}

export interface StatItem {
  count: number;
  suffix: string;
  label: string;
}

export interface DonationOptionItem {
  icon: string;
  title: string;
  description: string;
  ctaLabel: string;
}

export interface DarshanScheduleRow {
  days: string;
  periodTitle: string;
  times: {
    icon: string;
    iconColor: string;
    label?: string;
    value: string;
  }[];
}
