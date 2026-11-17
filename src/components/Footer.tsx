import { Link } from 'react-router-dom';
import { SITE_INFO, ZEFFY_DONATION_URL } from '../data/siteData';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <h3 className="footer__heading">{SITE_INFO.name}</h3>
            <p className="footer__about-text">
              The International Society for Krishna Consciousness (ISKCON) in Halifax, Nova Scotia — dedicated to
              sharing the timeless wisdom of the Bhagavad-Gita and serving the community through devotion, education,
              and love.
            </p>
            <div className="footer__social">
              <a
                href={SITE_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f" />
              </a>
              <a
                href={SITE_INFO.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="YouTube"
              >
                <i className="fab fa-youtube" />
              </a>
              <a
                href={SITE_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="footer__heading">Quick Links</h3>
            <ul className="footer__links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/new-temple">New Temple</Link>
              </li>
              <li>
                <a zeffy-form-link={ZEFFY_DONATION_URL} style={{ cursor: 'pointer' }}>
                  Donate
                </a>
              </li>
              <li>
                <Link to="/visit-us">Visit Us</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="footer__heading">Programs</h3>
            <ul className="footer__links">
              <li>
                <Link to="/new-temple">Sunday Feast</Link>
              </li>
              <li>
                <Link to="/new-temple">Bhagavad-Gita Study</Link>
              </li>
              <li>
                <Link to="/new-temple">Kirtan Evenings</Link>
              </li>
              <li>
                <Link to="/new-temple">Food for Life</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="footer__heading">Contact</h3>
            <div className="footer__contact-item">
              <i className="fas fa-map-marker-alt footer__contact-icon" />
              <span>{SITE_INFO.address}</span>
            </div>
            <div className="footer__contact-item">
              <i className="fas fa-envelope footer__contact-icon" />
              <a href={`mailto:${SITE_INFO.email}`} style={{ color: 'var(--earth-light)' }}>
                {SITE_INFO.email}
              </a>
            </div>
            <div className="footer__contact-item">
              <i className="fas fa-phone footer__contact-icon" />
              <a href={SITE_INFO.phoneHref} style={{ color: 'var(--earth-light)' }}>
                {SITE_INFO.phoneDisplay}
              </a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            &copy; {new Date().getFullYear()} {SITE_INFO.name}. All rights reserved. | International Society for
            Krishna Consciousness
          </p>
        </div>
      </div>
    </footer>
  );
}
