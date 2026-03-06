import { Link, NavLink } from 'react-router-dom'
import { FiGithub, FiTwitter, FiInstagram, FiLinkedin, FiArrowUp, FiFacebook, FiYoutube, FiPhone, FiMapPin } from 'react-icons/fi'
import { navLinks, socialLinks, contactNumbers, locationData } from '../config/links'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <button 
        className="scroll-top-btn" 
        onClick={handleScrollToTop}
        aria-label="Ir arriba"
      >
        <FiArrowUp />
      </button>

      <div className="footer-top">
        {/* Sección 1: Logo */}
        <div className="footer-section">
          <Link to="/" className="footer-logo">
            🚀 MyApp
          </Link>
          <p className="footer-description">
            Construyendo soluciones rápidas, modernas y responsivas con React y Vite.
          </p>
        </div>

        {/* Sección 2: Enlaces Rápidos */}
        <div className="footer-section">
          <h3 className="footer-title">Enlaces Rápidos</h3>
          <ul className="footer-links">
            {navLinks.map((link) => (
              <li key={link.id}>
                <NavLink 
                  to={link.path} 
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  {link.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Sección 3: Contacto y Redes */}
        <div className="footer-section">
          <h3 className="footer-title">Síguenos</h3>
          
          {socialLinks && socialLinks.length > 0 && (
            <div className="social-links">
              {socialLinks.map((social) => {
                const iconMap = {
                  facebook: <FiFacebook />,
                  instagram: <FiInstagram />,
                  linkedin: <FiLinkedin />,
                  github: <FiGithub />,
                  twitter: <FiTwitter />,
                  youtube: <FiYoutube />
                };
                return (
                  <a 
                    key={social.id} 
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label={social.id}
                  >
                    {iconMap[social.icon]}
                  </a>
                )
              })}
            </div>
          )}

          <div className="footer-contact-info">
            {contactNumbers && contactNumbers.map((number, index) => (
              <a 
                key={index} 
                href={`tel:${number.replace(/[^\d+]/g, '')}`} 
                className="footer-contact-item"
              >
                <FiPhone />
                <span>{number}</span>
              </a>
            ))}
            {locationData && locationData.mapUrl && (
              <div className="social-links map-single-icon">
                <a 
                  href={locationData.mapUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Ver en Google Maps"
                >
                  <FiMapPin />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Sección Inferior: Copyright */}
      <div className="footer-bottom">
        {locationData && locationData.address && (
          <p className="footer-address">{locationData.address}</p>
        )}
        <p>&copy; {currentYear} MyApp. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer
