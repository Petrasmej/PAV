import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/logo.svg';
import pavImg from '../assets/pav.png';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Sledování změn velikosti okna
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsOpen(false); // Zavřít menu při zvětšení obrazovky
      }
    };
    handleResize(); // Spustit ihned při načtení

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="nav-left">
          <a href="/en" className="nav-logo">
            <img src={logoImg} alt="Logo" height="60" className="logo" />
            <img src={pavImg} alt="páv" height="80" className="pav" />
          </a>
        </div>

        {!isMobile && (
          <nav className="nav-right">
            <Link to="/#">Our Services</Link>
            <Link to="/#">Our Experience</Link>
            <a href="#kontakt">Contact</a>
            <Link to="/">
              <img
                src="/flagCZ.png"
                width="35"
                height="30"
                alt="Čeština"
                className="flagCZ"
              />
            </Link>
          </nav>
        )}

        {/* Mobilní navigace - hamburger */}
        {isMobile && (
          <div className="nav-right">
            <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
              ☰
            </button>
          </div>
        )}
      </div>

      {/* Dropdown menu pro mobilní verzi */}
      {isOpen && isMobile && (
        <nav className="mobile-menu">
          <Link to="/#" onClick={() => setIsOpen(false)}>
            Our Services
          </Link>
          <Link to="/#" onClick={() => setIsOpen(false)}>
            Our Experience
          </Link>
          <a href="#kontakt" onClick={() => setIsOpen(false)}>
            Contact
          </a>
          <Link to="/">
            <img src="/public/flagCZ.png" alt="Čeština" className="flagCZ" />
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Navigation;
