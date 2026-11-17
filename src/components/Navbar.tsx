import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { NAV_LINKS, SITE_INFO } from '../data/siteData';

const DEFAULT_LOGO = '/images/Iskcon%20Halifax%20Logo.png';
const SCROLLED_LOGO = '/images/Iskcon%20Halifax%20Logo%20-%20saffron.png';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();

  // Preload scrolled logo to prevent flicker on first scroll
  useEffect(() => {
    const img = new Image();
    img.src = SCROLLED_LOGO;
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav
        className={`navbar ${isScrolled ? 'navbar--solid' : 'navbar--transparent'}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="navbar__inner">
          <Link to="/" className="navbar__logo">
            <img
              src={isScrolled ? SCROLLED_LOGO : DEFAULT_LOGO}
              alt="ISKCON Halifax Logo"
              className="navbar__logo-img"
            />
            <div>
              <span className="navbar__logo-text">{SITE_INFO.name}</span>
              <span className="navbar__logo-sub">{SITE_INFO.subtitle}</span>
            </div>
          </Link>

          <ul className={`navbar__menu ${isMenuOpen ? 'navbar__menu--open' : ''}`}>
            {NAV_LINKS.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    [
                      'navbar__link',
                      isActive ? 'navbar__link--active' : '',
                      item.isCta ? 'btn btn--primary navbar__cta' : '',
                    ]
                      .filter(Boolean)
                      .join(' ')
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="navbar__toggle"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <span className="navbar__toggle-bar" />
            <span className="navbar__toggle-bar" />
            <span className="navbar__toggle-bar" />
          </button>
        </div>
      </nav>

      <div
        className={`mobile-overlay ${isMenuOpen ? 'mobile-overlay--open' : ''}`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      />
    </>
  );
}
