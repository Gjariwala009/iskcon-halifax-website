interface PageBannerProps {
  title: string;
  backgroundImage: string;
}

export function PageBanner({ title, backgroundImage }: PageBannerProps) {
  return (
    <header className="page-banner" style={{ backgroundImage: `url('${backgroundImage}')` }}>
      <div className="page-banner__overlay" />
      <div className="page-banner__content container">
        <h1 className="page-banner__title">{title}</h1>
      </div>
    </header>
  );
}
