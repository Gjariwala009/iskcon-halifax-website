import { DonateButton } from '../components/DonateButton';
import { MantraTicker } from '../components/MantraTicker';
import { PageBanner } from '../components/PageBanner';
import { SectionHeader } from '../components/SectionHeader';
import {
  DONATE_CURRENT_ACTIVITIES,
  DONATE_IMPACT_AREAS,
  DONATE_OPTIONS,
  DONATE_SHOWCASE_CARDS,
} from '../data/siteData';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export function DonatePage() {
  useDocumentTitle('Donate | ISKCON Halifax');

  return (
    <>
      <PageBanner title="Donate" backgroundImage="/images/DSC04118.jpg" />
      <MantraTicker />

      {/* Intro Section */}
      <section className="section section--cream">
        <div className="container">
          <div className="section-header fade-in">
            <span className="section-header__subtitle">Support Our Mission</span>
            <h2 className="section-header__title">Build a Home for Lord Krishna</h2>
            <div className="section-header__divider">
              <div className="ornament">
                <div className="ornament__line" />
                <i className="fa-solid fa-leaf ornament__icon" />
                <div className="ornament__line" />
              </div>
            </div>
            <p
              className="section-header__description"
              style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', lineHeight: 1.8 }}
            >
              Your generous contribution helps us build a permanent ISKCON temple in Halifax and sustain our daily
              spiritual and community programs. By offering a portion of your hard-earned wealth in the service of the
              Lord, you are making an eternal spiritual investment.
            </p>
            <div
              style={{
                marginTop: '2rem',
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '1.5rem',
                fontStyle: 'italic',
                color: 'var(--color-maroon)',
              }}
            >
              &ldquo;Charity given out of duty, without expectation of return, at the proper time and place, and to a
              worthy person is considered to be in the mode of goodness.&rdquo;
              <div
                style={{
                  fontSize: '1.1rem',
                  fontStyle: 'normal',
                  marginTop: '0.5rem',
                  fontFamily: "'Lato', sans-serif",
                }}
              >
                — Bhagavad Gita 17.20
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How You Can Help */}
      <section className="section section--white">
        <div className="container">
          <SectionHeader title="How You Can Help" dividerIconClass="fa-solid fa-hand-holding-heart" />

          <div className="grid grid--3 fade-in-up">
            {DONATE_OPTIONS.map((option) => (
              <div key={option.title} className="card">
                <div className="card__body" style={{ textAlign: 'center', padding: '2rem' }}>
                  <i
                    className={option.icon}
                    style={{ fontSize: '3rem', color: 'var(--color-saffron)', marginBottom: '1.5rem', display: 'block' }}
                  />
                  <h3 className="card__title">{option.title}</h3>
                  <p className="card__text">{option.description}</p>
                  <DonateButton
                    className="btn btn--primary"
                    style={{ marginTop: '1rem', width: '100%', justifyContent: 'center' }}
                  >
                    {option.ctaLabel}
                  </DonateButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where Your Donation Goes */}
      <section className="section section--saffron">
        <div className="container">
          <SectionHeader
            subtitle="Community Impact"
            title="Where Your Donation Goes"
            dividerIconClass="fa-solid fa-seedling"
            subtitleStyle={{ color: 'var(--maroon)', fontWeight: 700 }}
            titleStyle={{ color: 'var(--maroon-deep)' }}
          />

          <div className="grid grid--4 fade-in">
            {DONATE_IMPACT_AREAS.map((area) => (
              <div
                key={area.title}
                className="feature-card"
                style={{ background: 'var(--white)', boxShadow: 'var(--shadow-elevated)' }}
              >
                <div className="feature-card__icon">
                  <i className={area.icon} />
                </div>
                <h3 className="feature-card__title" style={{ color: 'var(--maroon-deep)' }}>
                  {area.title}
                </h3>
                <p className="feature-card__text" style={{ color: 'var(--brown-text)' }}>
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Activities Info Cards */}
      <section className="section section--warm">
        <div className="container">
          <SectionHeader
            subtitle="The Impact of Your Support"
            title="Our Current Activities"
            dividerIconClass="fa-solid fa-star-of-david"
          />

          <div className="grid grid--4 fade-in-up">
            {DONATE_CURRENT_ACTIVITIES.map((card) => (
              <div key={card.title} className="card">
                <div className="card__body">
                  <i
                    className={card.icon}
                    style={{ fontSize: '2rem', color: 'var(--color-maroon)', marginBottom: '1rem', display: 'block' }}
                  />
                  <h3 className="card__title">{card.title}</h3>
                  <p className="card__text">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation in Action Impact Showcase */}
      <section className="section section--white">
        <div className="container">
          <SectionHeader
            subtitle="Transparent & Meaningful"
            title="See Your Donations in Action"
            description="Every dollar contributed goes directly toward serving the community, distributing sanctified food, and sustaining a sanctuary of peace and devotion."
            dividerIconClass="fa-solid fa-heart"
          />

          <div className="grid grid--3">
            {DONATE_SHOWCASE_CARDS.map((card) => (
              <div key={card.title} className="card fade-in">
                <img
                  src={card.image}
                  alt={card.imageAlt}
                  className="card__image"
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <div className="card__body">
                  {card.tag && <span className="card__tag">{card.tag}</span>}
                  <h3 className="card__title">{card.title}</h3>
                  <p className="card__text">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notice / Contact Section */}
      <section className="section section--cream">
        <div className="container text-center">
          <div
            style={{
              backgroundColor: 'var(--color-white)',
              padding: '3rem',
              borderRadius: '8px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
              maxWidth: '800px',
              margin: '0 auto',
            }}
            className="fade-in"
          >
            <i
              className="fa-solid fa-envelope-open-text"
              style={{ fontSize: '3rem', color: 'var(--color-maroon)', marginBottom: '1.5rem', display: 'block' }}
            />
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '2rem',
                marginBottom: '1rem',
                color: 'var(--color-dark)',
              }}
            >
              Ready to Contribute?
            </h3>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '2rem', color: 'var(--color-text)' }}>
              Your generous donation directly supports the construction of our new temple and community programs. All
              donations are processed securely through Zeffy with zero platform fees — 100% of your contribution goes to
              ISKCON Halifax.
            </p>
            <DonateButton className="btn btn--maroon">
              <i className="fas fa-heart" /> Donate Now
            </DonateButton>
          </div>
        </div>
      </section>
    </>
  );
}
