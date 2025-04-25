import { Helmet } from 'react-helmet';
import Navigation from '../components/Navigation';
import Contact from '../components/Contact';

const HomeEN = () => {
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
        <div className="hero-text">
          <h1>ahoj</h1>
        </div>
      </section>
      <Contact />
    </>
  );
};

export default HomeEN;
