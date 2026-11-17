import { DonateButton } from '../components/DonateButton';
import { MantraTicker } from '../components/MantraTicker';
import { PageBanner } from '../components/PageBanner';
import { SectionHeader } from '../components/SectionHeader';
import {
  NEW_TEMPLE_FUTURE_ACTIVITIES,
  NEW_TEMPLE_HIGHLIGHTS,
  NEW_TEMPLE_SPACES,
} from '../data/siteData';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const LOCATION_FEATURES = [
  'Easily accessible with 20-25 min drive time',
  'Serene community environment',
  'Near shops and parks',
  'Serves growing Indian and multicultural population',
];

export function NewTemplePage() {
  useDocumentTitle('New Temple - ISKCON Halifax');

  return (
    <>
      <PageBanner title="New Temple" backgroundImage="/images/Iskcon%20Property.jpeg" />
      <MantraTicker />

      {/* Inspirational Quote */}
      <section className="section section--cream">
        <div className="container text-center" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <i className="fas fa-quote-left" style={{ color: 'var(--color-saffron)', fontSize: '2rem', marginBottom: '1rem' }} />
          <p
            style={{
              fontFamily: 'var(--font-accent)',
              fontSize: '1.5rem',
              color: 'var(--color-maroon)',
              fontStyle: 'italic',
              lineHeight: 1.6,
            }}
          >
            &ldquo;A person who builds a temple of Sri Vishnu will get the same results as performing the Rajasuya
            Yajna and Ashvamedha Yajna. Oh best of the brahmanas, as many atoms are there in the temple so built, for
            so many thousands of years will he be able to reside in the heavenly planets.&rdquo;
          </p>
          <p style={{ marginTop: '1rem', fontWeight: 'bold', color: 'var(--color-dark)' }}>
            — Vishnu Dharmottara Purana
          </p>
        </div>
      </section>

      {/* New Temple Location */}
      <section className="section section--white">
        <div className="container">
          <div className="grid grid--2 align-center">
            <div className="fade-in-left">
              <SectionHeader
                subtitle="Our Future Home"
                title="New Temple Location"
                dividerIconClass="fas fa-star-of-david"
                align="left"
              />
              <p style={{ marginBottom: '1rem' }}>
                After comprehensive research, our management has identified a 7,700 sqft property on 9 acres of land,
                located at <strong>29 Westwood Blvd, Upper Tantallon, Nova Scotia</strong>.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, lineHeight: 1.8 }}>
                {LOCATION_FEATURES.map((feature) => (
                  <li key={feature}>
                    <i className="fas fa-check-circle" style={{ color: '#E8A317', marginRight: '0.5rem' }} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="fade-in-right">
              <img
                src="/images/Iskcon%20Property%20-%202.jpeg"
                alt="ISKCON Halifax Temple Property at 29 Westwood Blvd, Upper Tantallon"
                style={{ width: '100%', borderRadius: '12px', boxShadow: '0 8px 30px rgba(0,0,0,0.12)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Temple Highlights */}
      <section className="section section--warm">
        <div className="container">
          <SectionHeader
            subtitle="Project Details"
            title="Temple Highlights"
            description="The new property will host a wide array of facilities designed to serve our diverse and growing community."
            dividerIconClass="fas fa-star-of-david"
          />

          <div className="grid grid--3">
            {NEW_TEMPLE_HIGHLIGHTS.map((item) => (
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

      {/* Gallery Section */}
      <section className="section section--white">
        <div className="container">
          <SectionHeader
            subtitle="Explore Our Sanctuary"
            title="Temple Spaces & Facilities"
            description="Take a glimpse inside our peaceful halls and devotional facilities dedicated to worship, kirtan, education, and community prasadam."
            dividerIconClass="fas fa-star-of-david"
          />

          <div className="grid grid--2">
            {NEW_TEMPLE_SPACES.map((space) => (
              <div key={space.title} className="card fade-in">
                <img
                  src={space.image}
                  alt={space.imageAlt}
                  className="card__image"
                  style={{ height: '300px', objectFit: 'cover', width: '100%', ...space.imageStyle }}
                />
                <div className="card__body">
                  {space.tag && <span className="card__tag">{space.tag}</span>}
                  <h3 className="card__title">{space.title}</h3>
                  <p className="card__text">{space.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Activities */}
      <section className="section section--maroon">
        <div className="container">
          <SectionHeader
            subtitle="Community Engagement"
            title="Future Activities"
            dividerIconClass="fas fa-star-of-david"
            light
          />

          <div className="grid grid--4">
            {NEW_TEMPLE_FUTURE_ACTIVITIES.map((activity) => (
              <div key={activity.title} className="feature-card feature-card--dark fade-in">
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
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', marginBottom: '1rem', color: 'white' }}>
            Help Us Build The Future
          </h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: 'white' }}>
            Your generous contribution will lay the foundation for a spiritual sanctuary in Halifax.
          </p>
          <DonateButton className="btn btn--maroon btn--large">
            <i className="fas fa-heart" /> Donate Now
          </DonateButton>
        </div>
      </section>
    </>
  );
}
