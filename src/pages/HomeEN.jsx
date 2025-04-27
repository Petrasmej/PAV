import { Helmet } from 'react-helmet';
import { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Contact from '../components/Contact';
import './Home.css';
import LineImg from '../assets/line.svg';
import QuotesImg from '../assets/quotes.svg';
import chairImg from '../assets/chair.jpg';
import AVImg from '../assets/AV.jpg';
import speakerImg from '../assets/speaker.jpg';
import concertImg from '../assets/concert.jpg';
import meetingImg from '../assets/meeting.jpg';
import audienceImg from '../assets/audience.jpg';

const HomeEN = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.5 },
    );

    const el = document.getElementById('stack-trigger');
    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>PAV Group | International Conferences & Events</title>
        <meta
          name="description"
          content="Your reliable partner for organizing international conferences and events."
        />
        <link rel="canonical" href="https://www.pavgroup.cz/en" />
        <link rel="alternate" hreflang="cs" href="https://www.pavgroup.cz/" />
      </Helmet>
      <Navigation />
      <section className="hero">
        <div className="container">
          <div className="hero-text">
            <h1>
              Your Trusted Partner for International Conferences and Events
            </h1>
          </div>
        </div>
      </section>
      <section className="nabidka" id="services-id">
        <div className="container">
          <div className="uvod-wrap">
            <h2 className="uvod-h2">Our services</h2>
            <p className="uvod-text">
              With a focus on detail, a personalized approach, and over 10 years
              of experience, we take care of every aspect so that you can focus
              on what truly matters – the content and your guests.
            </p>
          </div>
          <div className="cards">
            <div className="card">
              <h3 className="card-h3">
                Comprehensive conference and event management
              </h3>
              <p className="card-text">
                Planning of your event from A to Z including budget, timeline
                proposal and full event management.
              </p>
            </div>
            <div className="card">
              <h3 className="card-h3">Tailored to your needs</h3>
              <p className="card-text">
                Every project is created in close collaboration with you – we
                listen, suggest, and adapt. With respect for your industry and
                audience.
              </p>
            </div>
            <div className="card">
              <h3 className="card-h3">The experience</h3>
              <p className="card-text">
                With over 10 years in the field, we organize the international
                conferences and cultural events both in Europe and beyond.
              </p>
            </div>
          </div>
          <div className="gridHP">
            <div className="grid-left">
              <div className="points">
                <div className="number">1.</div>
                <div className="point-flex">
                  <div className="line">
                    {' '}
                    <img src={LineImg} alt="Line" />
                  </div>
                  <p className="point-text">
                    Everything we do is tailored to you, with an eye for detail
                    and a focus on building strong relationships.
                  </p>
                </div>
              </div>
              <div className="points">
                <div className="number">2.</div>
                <div className="point-flex">
                  <div className="line">
                    {' '}
                    <img src={LineImg} alt="Line" />
                  </div>
                  <p className="point-text">
                    With us, you can trust that your event will run smoothly and
                    leave a lasting impression.
                  </p>
                </div>
              </div>
              <div className="points">
                <div className="number">3.</div>
                <div className="point-flex">
                  <div className="line">
                    {' '}
                    <img src={LineImg} alt="Line" />
                  </div>
                  <p className="point-text">
                    We handle every detail of your event, ensuring everything
                    you need is covered.
                  </p>
                </div>
              </div>
              <div className="points">
                <div className="number">4.</div>
                <div className="point-flex">
                  <div className="line">
                    {' '}
                    <img src={LineImg} alt="Line" />
                  </div>
                  <p className="point-text">
                    We take care of every detail, turning your vision into
                    flawless execution.
                  </p>
                </div>
              </div>
              <div className="points">
                <div className="number">5.</div>
                <div className="point-flex">
                  <div className="line">
                    <img src={LineImg} alt="Line" />
                  </div>
                  <p className="point-text">
                    Let’s turn your event into a story that speaks for itself.
                  </p>
                </div>
              </div>
              <div className="button-wrapper">
                <a href="#contact">
                  <button className="button-primary">
                    Book a consultation today
                  </button>
                </a>
              </div>
            </div>
            <div className="grid-right">
              <div className="pictures-wrapper" id="stack-trigger">
                <img className="picsHome pic1" src={chairImg} alt="chair"></img>
                <img className="picsHome pic2" src={AVImg} alt="AV"></img>
                <img
                  className="picsHome pic3"
                  src={speakerImg}
                  alt="speaker"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="zkusenosti" id="experience-id">
        <div className="container">
          <div className="uvod-wrap">
            <h2 className="uvod-h2">Our Experience</h2>
            <p className="uvod-text">
              Trusted by leading scientific institutions, universities, and
              global companies, we’ve spent over 10 years organizing world-class
              international conferences and events across Europe and beyond.
              With countless successful projects, thousands of participants, and
              hundreds of expert speakers, we deliver excellence every time.
            </p>
          </div>
          <div className="quote-wrap">
            <img className="quoteMarks" src={QuotesImg} alt="quotations"></img>
            <div className="qouteText-wrap">
              <p className="quotation">
                "Thanks to Páv Agency, we successfully organized our largest
                congress without a hitch. Their team was professional,
                proactive, and very kind."
              </p>
              <p className="quote-name">Martina Grigorova, MFC</p>
            </div>
          </div>
          <div className="gridHP">
            <div className="grid-centre">
              <img
                className="zkusenostiPic"
                src={concertImg}
                alt="concert"
              ></img>
              <h3 className="h3option">Concerts</h3>
            </div>
            <div className="grid-right">
              <img
                className="zkusenostiPic"
                src={meetingImg}
                alt="meeting"
              ></img>
              <h3 className="h3option">Conferences and Workshops</h3>
            </div>
          </div>
        </div>
      </section>
      <section className="CTA">
        <div className="gridCTA">
          <div className="grid-leftCTA">
            <img className="ctaPic" src={audienceImg} alt="audience"></img>
          </div>
          <div className="grid-rightCTA">
            <div className="cta-wrap">
              <h2 className="konference">Let’s plan your event together.</h2>
              <a href="#contact">
                <button className="button-primary">Contact us</button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Contact />
    </>
  );
};

export default HomeEN;
