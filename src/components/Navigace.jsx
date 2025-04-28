import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/logo.svg';
import pavImg from '../assets/pav.png';

const Navigace = () => {
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
          <a href="/" className="nav-logo">
            <img src={logoImg} alt="Logo" height="80" className="logo" />
          </a>
          <img src={pavImg} alt="páv" height="80" className="pav" />
        </div>

        {!isMobile && (
          <nav className="nav-right">
            <a href="#nabidka-id">Co nabízíme</a>
            <a href="#zkusenosti-id">Naše zkušenosti</a>
            <a href="#kontakt">Kontakt</a>
            <Link to="/en">
              <img
                src="/flagEN.png"
                alt="English"
                height="22"
                className="flagEN"
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
          <a href="#nabidka-id" onClick={() => setIsOpen(false)}>
            Co nabízíme
          </a>
          <a href="#zkusenosti-id" onClick={() => setIsOpen(false)}>
            Naše zkušenosti
          </a>
          <a href="#kontakt" onClick={() => setIsOpen(false)}>
            Kontakt
          </a>
          <Link to="/en">
            <img src="/flagEN.png" alt="English" className="flagEN" />
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Navigace;
