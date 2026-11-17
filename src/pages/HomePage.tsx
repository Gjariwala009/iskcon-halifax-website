import { Link } from 'react-router-dom';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { DonateButton } from '../components/DonateButton';
import { MantraTicker } from '../components/MantraTicker';
import { SectionHeader } from '../components/SectionHeader';
import {
  HOME_ACTIVITIES,
  HOME_FESTIVAL_CARDS,
  HOME_STATS,
  HOME_WELCOME_FEATURES,
} from '../data/siteData';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export function HomePage() {
  useDocumentTitle('ISKCON Halifax — Your Temple, Your Community');

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div
          className="hero__bg"
          style={{
            backgroundImage: "url('/images/Sri%20Sri%20Radha%20Shyamsundar.jpeg')",
            backgroundPosition: 'center 30%',
          }}
        />
        <div className="hero__overlay" />
        <div className="hero__content">
          <p className="hero__subtitle">🙏 Hare Krishna</p>
          <h1 className="hero__title">A Gift For Generations</h1>
          <p className="hero__description">
            Your Temple. Your Community.
            <br />
            Together We Can Build It.
          </p>
          <div className="hero__buttons">
            <Link to="/new-temple" className="btn btn--primary btn--large">
              <i className="fas fa-gopuram" /> Explore the New Temple
            </Link>
            <Link to="/visit-us" className="btn btn--outline-light btn--large">
              <i className="fas fa-map-marker-alt" /> Visit Us
            </Link>
          </div>
        </div>
      </section>

      <MantraTicker />

      {/* Welcome Section */}
      <section className="section section--cream">
        <div className="container">
          <SectionHeader
            subtitle="Welcome"
            title="Welcome to ISKCON Halifax"
            description="A Vedic Culture Centre dedicated to sharing the timeless wisdom of the Bhagavad-Gita and fostering a community of devotion, compassion, and spiritual growth in Halifax, Nova Scotia."
          />

          <div className="grid grid--3">
            {HOME_WELCOME_FEATURES.map((item) => (
              <div key={item.title} className="feature-card fade-in">
                <div className="feature-card__icon">
                  <i className={item.icon} />
                </div>
                <h3 className="feature-card__title">{item.title}</h3>
                <p className="feature-card__text">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spiritual Merits Section */}
      <section className="section section--maroon">
        <div className="container">
          <div className="grid split-grid" style={{ gap: '4rem' }}>
            <div className="fade-in-left">
              <p className="section-header__subtitle" style={{ textAlign: 'left', color: 'var(--saffron-light)' }}>
                Sacred Purpose
              </p>
              <h2 style={{ color: 'var(--saffron-light)', marginBottom: '1.5rem' }}>
                Incalculable Spiritual Merits of Building a Temple
              </h2>
              <div className="ornament" style={{ justifyContent: 'flex-start' }}>
                <span className="ornament__line" />
                <span className="ornament__icon">✦</span>
                <span className="ornament__line" />
              </div>
              <p style={{ color: 'var(--sand)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                The Bhagavata Purana states that one who offers gifts to facilitate the worship of Lord Krishna&apos;s
                deity within a temple will receive an opulence equal to the Lord himself.
              </p>
              <p style={{ color: 'var(--sand)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                Invest in your eternal spiritual future by participating in this auspicious undertaking to build a temple
                of Lord Krishna in Halifax.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/new-temple" className="btn btn--primary">
                  <i className="fas fa-gopuram" /> New Temple Details
                </Link>
                <DonateButton className="btn btn--outline-light">
                  <i className="fas fa-heart" /> Make a Donation
                </DonateButton>
              </div>
            </div>

            <div className="fade-in-right" style={{ textAlign: 'center' }}>
              <img
                src="/images/Deities.jpeg"
                alt="Sri Sri Gaura Nitai deities at ISKCON Halifax"
                style={{
                  borderRadius: 'var(--radius-lg)',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
                  maxHeight: '520px',
                  width: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center 25%',
                  margin: '0 auto',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Current Facility Section */}
      <section className="section section--warm">
        <div className="container">
          <SectionHeader subtitle="Our Journey" title="Current Facility" />

          <div className="grid split-grid" style={{ gap: '3rem' }}>
            <div className="fade-in-left">
              <img
                src="/images/Iskcon%20Property.jpeg"
                alt="Current ISKCON Halifax Temple Facility"
                style={{
                  borderRadius: 'var(--radius-lg)',
                  boxShadow: 'var(--shadow-elevated)',
                  width: '100%',
                  height: '380px',
                  objectFit: 'cover',
                }}
              />
            </div>
            <div className="fade-in-right">
              <p>
                Halifax International Society for Krishna Consciousness is a registered charity organization since 2007.
                Currently, we organize our weekly programs in a rental space at Centennial Arena, 27 Vimy Ave.
              </p>
              <p>
                Over the past 3 years alone, our cultural festivals have attracted over 12,000 visitors from the
                Maritimes, reflecting the community&apos;s growth and enthusiasm.
              </p>
              <p>
                However, the existing rental space increasingly limits functionality and regular programs, creating a
                dire need for a bigger and permanent facility. A permanent temple is essential for providing a dedicated
                space for daily worship, festivals, community outreach, and educational programs.
              </p>
              <Link to="/new-temple" className="btn btn--maroon" style={{ marginTop: '1rem' }}>
                <i className="fas fa-arrow-right" /> See the New Temple Plan
              </Link>
            </div>
          </div>

          <div
            className="stats"
            style={{
              marginTop: '4rem',
              padding: '3rem',
              background: 'var(--white)',
              borderRadius: 'var(--radius-lg)',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            {HOME_STATS.map((stat) => (
              <div key={stat.label} className="fade-in">
                <AnimatedCounter target={stat.count} suffix={stat.suffix} />
                <div className="stat__label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events / Celebrations Section */}
      <section className="section section--white">
        <div className="container">
          <SectionHeader
            subtitle="Celebrations"
            title="Our Festivals & Events"
            description="Experience the joy and spiritual bliss of Vedic festivals celebrated with devotion, kirtan, and community."
          />

          <div className="grid grid--3">
            {HOME_FESTIVAL_CARDS.map((card) => (
              <div key={card.title} className="card fade-in">
                <img
                  src={card.image}
                  alt={card.imageAlt}
                  className="card__image"
                  style={{ height: '280px', objectFit: 'cover' }}
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

      {/* Activities Section */}
      <section className="section section--cream">
        <div className="container">
          <SectionHeader subtitle="What We Do" title="Our Activities" />

          <div className="grid grid--4">
            {HOME_ACTIVITIES.map((activity) => (
              <div key={activity.title} className="feature-card fade-in">
                <div className="feature-card__icon">
                  <i className={activity.icon} />
                </div>
                <h3 className="feature-card__title">{activity.title}</h3>
                <p className="feature-card__text">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="section section--saffron text-center">
        <div className="container fade-in">
          <h2 style={{ color: 'var(--maroon-deep)', marginBottom: '1rem' }}>
            Join Us in Building Something Sacred
          </h2>
          <p
            style={{
              color: 'var(--brown-text)',
              maxWidth: '600px',
              margin: '0 auto 2rem',
              fontSize: '1.1rem',
              fontWeight: 500,
            }}
          >
            Be part of this historic endeavor to establish a permanent ISKCON temple in Halifax. Every contribution
            brings us closer to a spiritual home for generations.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <DonateButton className="btn btn--maroon btn--large">
              <i className="fas fa-heart" /> Donate Now
            </DonateButton>
            <Link
              to="/visit-us"
              className="btn btn--outline-light btn--large"
              style={{ borderColor: 'var(--maroon)', color: 'var(--maroon)' }}
            >
              <i className="fas fa-map-marker-alt" /> Visit Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
