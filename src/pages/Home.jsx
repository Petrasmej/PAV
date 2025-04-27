import { Helmet } from 'react-helmet';
import { useEffect } from 'react';
import Navigace from '../components/Navigace';
import Kontakt from '../components/Kontakt';
import './Home.css';
import LineImg from '../assets/line.svg';
import QuotesImg from '../assets/quotes.svg';
import chairImg from '../assets/chair.jpg';
import AVImg from '../assets/AV.jpg';
import speakerImg from '../assets/speaker.jpg';
import concertImg from '../assets/concert.jpg';
import meetingImg from '../assets/meeting.jpg';
import audienceImg from '../assets/audience.jpg';

const Home = () => {
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
        <html lang="cs" />
        <title>PAV Group | Mezinárodní konference a eventy</title>
        <meta
          name="description"
          content="Váš partner pro mezinárodní konference a společenské události."
        />
        <link rel="canonical" href="https://www.pavgroup.cz/" />
        <link rel="alternate" hreflang="en" href="https://www.pavgroup.cz/en" />
      </Helmet>
      <Navigace />
      <section className="hero">
        <div className="container">
          <div className="hero-text">
            <h1>Váš partner pro mezinárodní konference a eventy</h1>
          </div>
        </div>
      </section>
      <section className="nabidka" id="nabidka-id">
        <div className="container">
          <div className="uvod-wrap">
            <h2 className="uvod-h2">Co nabízíme</h2>
            <p className="uvod-text">
              S důrazem na detail, osobním přístupem a více než 10 lety
              zkušeností se postaráme o každý detail, abyste se mohli soustředit
              na to podstatné – obsah a hosty.
            </p>
          </div>
          <div className="cards">
            <div className="card">
              <h3 className="card-h3">
                Komplexní organizace konferencí i eventů
              </h3>
              <p className="card-text">
                Projektové řízení od návrhu po realizaci.
                <br />O vše se postaráme.
              </p>
            </div>
            <div className="card">
              <h3 className="card-h3">Tvoříme na míru</h3>
              <p className="card-text">
                Každý projekt vzniká v úzké spolupráci <br />s Vámi –
                nasloucháme, navrhujeme a přizpůsobujeme. S respektem k Vašemu
                oboru i publiku.
              </p>
            </div>
            <div className="card">
              <h3 className="card-h3">Máme zkušenosti</h3>
              <p className="card-text">
                V oboru pracujeme více než 10 let a organizujeme špičkové
                mezinárodní kongresy i kulturní akce v Evropě i mimo ni.
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
                    Vše na míru, s důrazem na detail i vztahy.
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
                    S námi máte jistotu hladkého průběhu i silného dojmu.{' '}
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
                  <p className="point-text">Zajišťujeme vše, co potřebujete.</p>
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
                    Vaše vize, naše precizní realizace.
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
                    Vaši událost proměníme v příběh, který mluví za Vás.
                  </p>
                </div>
              </div>
              <div className="button-wrapper">
                <a href="#kontakt">
                  <button className="button-primary">
                    Domluvte si konzultaci
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
      <section className="zkusenosti" id="zkusenosti-id">
        <div className="container">
          <div className="uvod-wrap">
            <h2 className="uvod-h2">Naše zkušenosti</h2>
            <p className="uvod-text">
              Důvěřují nám vědecké instituce, univerzity i nadnárodní firmy.
              Více než 10 let organizujeme špičkové mezinárodní kongresy a
              odborné akce v Evropě i mimo ni. Máme za sebou desítky projektů,
              tisíce účastníků, stovky řečníků.
            </p>
          </div>
          <div className="quote-wrap">
            <img className="quoteMarks" src={QuotesImg} alt="quotations"></img>
            <div className="qouteText-wrap">
              <p className="quotation">
                „Díky agentuře Páv jsme zvládli organizaci našeho největšího
                kongresu bez jediného zádrhele. Jejich tým byl profesionální,
                proaktivní a přitom lidský.“
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
              <h3 className="h3option">Koncerty</h3>
            </div>
            <div className="grid-right">
              <img
                className="zkusenostiPic"
                src={meetingImg}
                alt="meeting"
              ></img>
              <h3 className="h3option">Konference a workshopy</h3>
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
              <h2 className="konference">
                Pojďme naplánovat Váš event společně.
              </h2>
              <a href="#kontakt">
                <button className="button-primary CTAbutton">
                  Kontaktujte nás
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Kontakt />
    </>
  );
};

export default Home;
