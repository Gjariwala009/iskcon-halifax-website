import { useState, type FormEvent } from 'react';
import { DonateButton } from '../components/DonateButton';
import { MantraTicker } from '../components/MantraTicker';
import { PageBanner } from '../components/PageBanner';
import { SectionHeader } from '../components/SectionHeader';
import {
  DARSHAN_SCHEDULE,
  SITE_INFO,
  VISIT_EXPECT_CARDS,
} from '../data/siteData';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export function VisitUsPage() {
  useDocumentTitle('Visit Us - ISKCON Halifax');

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setFormState({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <>
      <PageBanner title="Visit Us" backgroundImage="/images/Prayer%20hall.jpeg" />
      <MantraTicker />

      {/* Contact Information & Map */}
      <section className="section section--cream">
        <div className="container">
          <SectionHeader
            title="Get in Touch"
            description="We'd love to hear from you. Visit our temple or reach out to us."
            dividerIconClass="fa-solid fa-star-of-david"
          />

          <div className="grid grid--2">
            <div className="contact-info grid" style={{ gap: '1.5rem' }}>
              <div className="feature-card">
                <i className="fa-solid fa-location-dot feature-card__icon" />
                <h3 className="feature-card__title">Visit Our Temple</h3>
                <p className="feature-card__text">
                  29 Westwood Blvd
                  <br />
                  Upper Tantallon, Nova Scotia
                </p>
              </div>
              <div className="feature-card">
                <i className="fa-solid fa-envelope feature-card__icon" />
                <h3 className="feature-card__title">Email Us</h3>
                <p className="feature-card__text">
                  <a href={`mailto:${SITE_INFO.email}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                    {SITE_INFO.email}
                  </a>
                </p>
              </div>
              <div className="feature-card">
                <i className="fa-solid fa-phone feature-card__icon" />
                <h3 className="feature-card__title">Call Us</h3>
                <p className="feature-card__text">
                  <a href={SITE_INFO.phoneHref} style={{ color: 'inherit', textDecoration: 'none' }}>
                    +1 (902) 580-1786
                  </a>
                </p>
              </div>
              <div className="feature-card">
                <i className="fa-solid fa-users feature-card__icon" />
                <h3 className="feature-card__title">Connect</h3>
                <p className="feature-card__text">
                  <a
                    href={SITE_INFO.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    style={{ marginRight: '10px', fontSize: '1.5rem', color: '#7B1F2E' }}
                  >
                    <i className="fa-brands fa-facebook" />
                  </a>
                  <a
                    href={SITE_INFO.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    style={{ marginRight: '10px', fontSize: '1.5rem', color: '#7B1F2E' }}
                  >
                    <i className="fa-brands fa-youtube" />
                  </a>
                  <a
                    href={SITE_INFO.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    style={{ fontSize: '1.5rem', color: '#7B1F2E' }}
                  >
                    <i className="fa-brands fa-instagram" />
                  </a>
                </p>
              </div>
            </div>

            <div
              className="map-container"
              style={{
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                height: '100%',
                minHeight: '400px',
              }}
            >
              <iframe
                title="ISKCON Halifax Temple Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2836.7214691763787!2d-63.88219498424268!3d44.683050979099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b5a2663959bc2df%3A0x6b6c4598d1a3c631!2s29%20Westwood%20Blvd%2C%20Upper%20Tantallon%2C%20NS%20B3Z%201H4%2C%20Canada!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Location Details Section */}
      <section className="section section--white">
        <div className="container">
          <div className="grid grid--2 align-center">
            <div className="fade-in-left">
              <img
                src="/images/Iskcon%20Property.jpeg"
                alt="Temple Property"
                style={{ width: '100%', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}
              />
            </div>
            <div className="fade-in-right">
              <h2 className="section-header__title" style={{ textAlign: 'left', marginBottom: '20px' }}>
                Our Beautiful Location
              </h2>
              <p style={{ marginBottom: '20px', lineHeight: 1.8 }}>
                Our vibrant spiritual community is centered around a spacious 7,700 sqft facility set on 9 acres of
                beautiful, serene land. It provides a peaceful retreat from the hustle and bustle of city life, creating
                the perfect atmosphere for meditation, spiritual learning, and community gatherings.
              </p>
              <p style={{ lineHeight: 1.8 }}>
                Despite the tranquil setting, we are conveniently accessible, located just a 20-25 minute drive from
                downtown Halifax. Ample parking is available on site for all our guests and congregation members.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule and Form Section */}
      <section className="section section--warm">
        <div className="container">
          <div className="grid grid--2">
            {/* Temple Darshan Schedule */}
            <div>
              <h2 className="section-header__title" style={{ textAlign: 'left', marginBottom: '10px' }}>
                Temple Darshan Schedule
              </h2>
              <p style={{ color: 'var(--color-maroon)', fontSize: '1rem', marginBottom: '20px', fontWeight: 500 }}>
                Come • Pray • Be Inspired ✨
              </p>
              <div
                style={{
                  background: 'white',
                  borderRadius: '8px',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                  overflow: 'hidden',
                }}
              >
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <tbody>
                    {DARSHAN_SCHEDULE.map((row, index) => (
                      <tr
                        key={row.days}
                        style={index < DARSHAN_SCHEDULE.length - 1 ? { borderBottom: '1px solid #eee' } : undefined}
                      >
                        <td
                          style={{
                            padding: '18px 20px',
                            fontWeight: 'bold',
                            color: '#7B1F2E',
                            width: '40%',
                            verticalAlign: 'top',
                          }}
                        >
                          {row.days}
                        </td>
                        <td style={{ padding: '18px 20px' }}>
                          <strong style={{ color: '#333', display: 'block', marginBottom: '4px' }}>
                            {row.periodTitle}
                          </strong>
                          {row.times.map((time, idx) => (
                            <div
                              key={time.value}
                              style={{
                                color: '#555',
                                fontSize: '0.95rem',
                                marginBottom: idx < row.times.length - 1 ? '6px' : 0,
                              }}
                            >
                              <i className={time.icon} style={{ color: time.iconColor, marginRight: '6px' }} />
                              {time.label}
                              {time.label ? <strong>{time.value}</strong> : time.value}
                            </div>
                          ))}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="section-header__title" style={{ textAlign: 'left', marginBottom: '30px' }}>
                Send Us a Message
              </h2>
              <form
                onSubmit={handleSubmit}
                style={{
                  background: 'white',
                  padding: '30px',
                  borderRadius: '8px',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                }}
              >
                {submitted && (
                  <div
                    role="status"
                    style={{
                      marginBottom: '20px',
                      padding: '12px 16px',
                      borderRadius: '6px',
                      backgroundColor: '#f0f9f4',
                      border: '1px solid #4A7C59',
                      color: '#2d5a3b',
                      fontWeight: 500,
                    }}
                  >
                    Thank you for your message! Hare Krishna — our team will get back to you soon.
                  </div>
                )}
                <div style={{ marginBottom: '20px' }}>
                  <label htmlFor="name" style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formState.name}
                    onChange={(e) => setFormState((prev) => ({ ...prev, name: e.target.value }))}
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid #ccc',
                      borderRadius: '4px',
                      fontFamily: 'inherit',
                    }}
                    required
                  />
                </div>
                <div style={{ marginBottom: '20px' }}>
                  <label htmlFor="email" style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formState.email}
                    onChange={(e) => setFormState((prev) => ({ ...prev, email: e.target.value }))}
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid #ccc',
                      borderRadius: '4px',
                      fontFamily: 'inherit',
                    }}
                    required
                  />
                </div>
                <div style={{ marginBottom: '20px' }}>
                  <label htmlFor="subject" style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formState.subject}
                    onChange={(e) => setFormState((prev) => ({ ...prev, subject: e.target.value }))}
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid #ccc',
                      borderRadius: '4px',
                      fontFamily: 'inherit',
                    }}
                    required
                  />
                </div>
                <div style={{ marginBottom: '20px' }}>
                  <label htmlFor="message" style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState((prev) => ({ ...prev, message: e.target.value }))}
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid #ccc',
                      borderRadius: '4px',
                      fontFamily: 'inherit',
                      resize: 'vertical',
                    }}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn--primary"
                  style={{ width: '100%', justifyContent: 'center', border: 'none', cursor: 'pointer' }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Temple Tour for Visitors */}
      <section className="section section--white">
        <div className="container">
          <SectionHeader
            subtitle="Your Visit Experience"
            title="What to Expect When You Visit"
            description="Whether you are attending a Sunday Feast, coming for kirtan, or visiting for the first time, our temple is open to all seekers of spiritual peace."
          />

          <div className="grid grid--3">
            {VISIT_EXPECT_CARDS.map((card) => (
              <div key={card.title} className="card fade-in">
                <img
                  src={card.image}
                  alt={card.imageAlt}
                  className="card__image"
                  style={{ height: '250px', objectFit: 'cover', ...card.imageStyle }}
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

      {/* Support Section CTA */}
      <section className="section section--saffron text-center">
        <div className="container">
          <h2 className="section-header__title" style={{ color: '#7B1F2E' }}>
            Support Our Temple
          </h2>
          <p style={{ maxWidth: '700px', margin: '0 auto 30px', fontSize: '1.1rem', lineHeight: 1.8 }}>
            Your generous contributions help us maintain the temple, organize spiritual programs, and serve the
            community. Every donation makes a difference.
          </p>
          <DonateButton className="btn btn--maroon btn--large">
            <i className="fas fa-heart" /> Donate Now
          </DonateButton>
        </div>
      </section>
    </>
  );
}
