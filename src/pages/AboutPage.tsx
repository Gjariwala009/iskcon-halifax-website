import { Link } from 'react-router-dom';
import { DonateButton } from '../components/DonateButton';
import { MantraTicker } from '../components/MantraTicker';
import { PageBanner } from '../components/PageBanner';
import { SectionHeader } from '../components/SectionHeader';
import {
  ABOUT_COMMUNITY_CARDS,
  ABOUT_MISSION_ITEMS,
  ABOUT_VALUES,
  ABOUT_VISION_ITEMS,
} from '../data/siteData';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export function AboutPage() {
  useDocumentTitle('About Us - ISKCON Halifax');

  return (
    <>
      <PageBanner title="About Us" backgroundImage="/images/Prayer%20hall.jpeg" />
      <MantraTicker />

      {/* Intro Section */}
      <section className="section section--white">
        <div className="container">
          <div className="grid grid--2 align-center">
            <div className="fade-in-left">
              <SectionHeader
                subtitle="Welcome"
                title="Your Krishna Community"
                dividerIconClass="fa-solid fa-star-of-david"
              />
              <p>
                The International Society for Krishna Consciousness (ISKCON) has a 50-year history of sharing the
                glorious Vedic culture of India with people of all nations, races, and walks of life throughout the
                world. Founded in 1966 by His Divine Grace A.C. Bhaktivedanta Swami Prabhupada, ISKCON is a movement
                with a mission to promote the well-being of society by teaching the science of Krishna consciousness
                according to Bhagavad-Gita and other ancient scriptures. ISKCON has over 600 centers, rural communities,
                schools, and restaurants across the globe.
              </p>
              <p className="mt-4">
                Krishna Consciousness, also known as Bhakti Yoga, is the spiritual practice of reawakening our pure,
                original relationship with God (Krishna) through devotional service. It emphasizes chanting the holy
                names, studying authorized scriptures, and engaging in practical acts of love and devotion.
              </p>
            </div>
            <div className="fade-in-right">
              <img
                src="/images/Deities.jpeg"
                alt="Sri Sri Gaura Nitai Deities and Srila Prabhupada at ISKCON Halifax"
                style={{
                  width: '100%',
                  maxHeight: '480px',
                  objectFit: 'cover',
                  objectPosition: 'center 25%',
                  borderRadius: '12px',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section section--maroon text-center">
        <div className="container">
          <SectionHeader
            subtitle="Our Core Focus"
            title="Our Mission"
            description="Our mission is to help people uncover their spiritual potential by guiding them on the path of loving devotion to Lord Krishna."
            dividerIconClass="fa-solid fa-dharmachakra"
            light
            subtitleStyle={{ color: 'var(--saffron)' }}
            titleStyle={{ color: 'var(--white)' }}
            descriptionStyle={{ color: 'var(--cream)', maxWidth: '800px', margin: '0 auto' }}
          />

          <div className="grid grid--3 fade-in mt-5">
            {ABOUT_MISSION_ITEMS.map((item) => (
              <div key={item.title} className="feature-card feature-card--dark text-center">
                <div className="feature-card__icon" style={{ fontSize: '1.6rem', fontWeight: 700, color: 'var(--saffron)' }}>
                  {item.number}
                </div>
                <h3 className="feature-card__title">{item.title}</h3>
                <p className="feature-card__text">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="section section--cream">
        <div className="container">
          <SectionHeader
            subtitle="Looking Forward"
            title="Our Vision"
            dividerIconClass="fa-solid fa-eye"
          />

          <div className="grid grid--3 fade-in">
            {ABOUT_VISION_ITEMS.map((item) => (
              <div key={item.title} className="feature-card text-center">
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

      {/* Values Section */}
      <section className="section section--white">
        <div className="container">
          <SectionHeader
            subtitle="What We Stand For"
            title="Our Values"
            dividerIconClass="fa-solid fa-seedling"
          />

          <div className="grid grid--3 fade-in">
            {ABOUT_VALUES.map((val) => (
              <div key={val.title} className="card">
                <div className="card__body text-center">
                  <i
                    className={`${val.icon} mb-3`}
                    style={{ fontSize: '2rem', color: 'var(--color-maroon)', display: 'block' }}
                  />
                  <h3 className="card__title">{val.title}</h3>
                  <p className="card__text">{val.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community in Action Section */}
      <section className="section section--warm">
        <div className="container">
          <SectionHeader
            subtitle="Devotee Fellowship"
            title="Our Community in Action"
            description="The heart of ISKCON Halifax is our devoted congregation of families, youths, and volunteers working together with warmth, humility, and affection."
            dividerIconClass="fa-solid fa-people-group"
          />

          <div className="grid grid--3">
            {ABOUT_COMMUNITY_CARDS.map((card) => (
              <div key={card.title} className="card fade-in">
                <img
                  src={card.image}
                  alt={card.imageAlt}
                  className="card__image"
                  style={{ height: '240px', objectFit: 'cover' }}
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

      {/* CTA Section */}
      <section className="section section--saffron text-center">
        <div className="container fade-in">
          <h2 className="mb-4" style={{ color: 'var(--color-maroon)' }}>
            Be Part of Our Journey
          </h2>
          <p className="mb-5" style={{ maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto', color: 'var(--color-text)' }}>
            Experience the joy of Bhakti Yoga. Join us for our Sunday programs or support our efforts to build a new
            temple for the community.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/visit-us" className="btn btn--maroon">
              Visit Us
            </Link>
            <DonateButton className="btn btn--maroon btn--large">
              <i className="fas fa-heart" /> Donate Now
            </DonateButton>
          </div>
        </div>
      </section>
    </>
  );
}
