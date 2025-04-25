import logoImg from '../assets/logo.svg';
import emailImg from '../assets/email.svg';
import phoneImg from '../assets/phone.svg';
import fbImg from '../assets/fb.svg';
import pavImg from '../assets/pav.png';

const Kontakt = () => {
  return (
    <>
      <div className="footer">
        <div className="gridHP">
          <div className="grid-left">
            <div className="footer-textwrap">
              <h2 className="footerh2">Kontakt</h2>
              <h3 className="footer-text">
                Chcete probrat váš kongres? Ozvěte se nám.
              </h3>
            </div>
            <div className="footer-detail">
              <img src={emailImg} alt="email" height="30" className="email" />
              <p>
                <a href="mailto:info@pavgroup.cz">info@pavconference.cz</a>
              </p>
            </div>
            <div className="footer-detail">
              <img src={phoneImg} alt="phone" height="30" className="phone" />
              <p>
                <a href="tel:+420123456789">+420 123 456 789</a>
              </p>
            </div>
            <div className="contact-icons">
              <img src={fbImg} alt="facebook" height="40" className="fb" />
            </div>
          </div>
          <div className="grid-right">
            <div className="footer-logos">
              <a href="/" className="footer-logo">
                <img src={logoImg} alt="Logo" height="60" className="logo" />
              </a>
              <img src={pavImg} alt="páv" height="120" className="pav" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Kontakt;
