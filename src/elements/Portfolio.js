import React from 'react';
import Header from '../component/Header';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  return (
    <div>
      <Header/>
      <section id="home" className="intro-section">
        <div className="container">
          <h1 className="heading">Welcome to Our Portfolio</h1>
          <p className="subheading">
            We offer a wide range of professional services tailored to your
            needs. Explore what we can do for you!
          </p>
        </div>
      </section>
      <div className="portfolio-container mt-3">
      <div className="buttons">
        <button className="portfolio-btn">Show All</button>
        <button className="portfolio-btn">UI/UX Design</button>
        <button className="portfolio-btn">Web App</button>
        <button className="portfolio-btn">Mobile App</button>
        <button className="portfolio-btn">Govt. Projects</button>
      </div>

      <div className="portfolio">
        <div className="portfolio-item">
          <img
            alt="Major Kalshi Classes app interface"
            src="https://storage.googleapis.com/a1aa/image/feL0e5qySnXheQTyloJV4jPfxFtMkFuKZsOFZbdl8wAesBwfJA.jpg"
          />
          <div className="portfolio-description">
            <p>Major Kalshi Classes App: Interface design for an educational platform.</p>
          </div>
        </div>

        <div className="portfolio-item">
          <img
            alt="Social media app interface"
            src="https://storage.googleapis.com/a1aa/image/BL4MI2hlMk5RKVYcfvK0uaZkvUYlnXQxz5vECgwWk2TbDgfTA.jpg"
          />
          <div className="portfolio-description">
            <p>Social Media App: A clean, user-friendly interface for social networking.</p>
          </div>
        </div>

        <div className="portfolio-item">
          <img
            alt="Veda learning app interface"
            src="https://storage.googleapis.com/a1aa/image/kFzCnlShMWagDtCeRRaiVBy7NdQ5oOLT42J1dJf3dsA4GAfnA.jpg"
          />
          <div className="portfolio-description">
            <p>Veda Learning App: Intuitive design for a learning management system.</p>
          </div>
        </div>

        <div className="portfolio-item">
          <img
            alt="Major Kalshi Classes app interface"
            src="https://storage.googleapis.com/a1aa/image/pxLCAsfDVBwVJqXtbZ1JpsWPp1UeuyPcAvVdkNtcacgbFBAUA.jpg"
          />
          <div className="portfolio-description">
            <p>Major Kalshi Classes App: Interface design for an educational platform.</p>
          </div>
        </div>

        <div className="portfolio-item">
          <img
            alt="Social media app interface"
            src="https://storage.googleapis.com/a1aa/image/YrebfyuSSghzuEKBb3VCx5JT969NjtUufrKIZUmcijbyKCAoA.jpg"
          />
          <div className="portfolio-description">
            <p>Social Media App: A clean, user-friendly interface for social networking.</p>
          </div>
        </div>

        <div className="portfolio-item">
          <img
            alt="Veda learning app interface"
            src="https://storage.googleapis.com/a1aa/image/jLBDyT9eTA2Abq5wIT3j0aPvcx7oixMp1fS08oTpopPdFBAUA.jpg"
          />
          <div className="portfolio-description">
            <p>Veda Learning App: Intuitive design for a learning management system.</p>
          </div>
        </div>

        <div className="portfolio-item">
          <img
            alt="Major Kalshi Classes app interface"
            src="https://storage.googleapis.com/a1aa/image/8mZIBvibqGI0DtBOt5kiO9OvIlvlofNDlhBfWSsbyLDAfBAoA.jpg"
          />
          <div className="portfolio-description">
            <p>Major Kalshi Classes App: Interface design for an educational platform.</p>
          </div>
        </div>

        <div className="portfolio-item">
          <img
            alt="Social media app interface"
            src="https://storage.googleapis.com/a1aa/image/3fddt9rA0M3mGyXVvIQcvMM2ExYYJ2DYY1iNyTCPevVDfBAoA.jpg"
          />
          <div className="portfolio-description">
            <p>Social Media App: A clean, user-friendly interface for social networking.</p>
          </div>
        </div>

        <div className="portfolio-item">
          <img
            alt="Veda learning app interface"
            src="https://storage.googleapis.com/a1aa/image/L0PAvcucUF6WEdendox7nAw5jvay1Sk4g0NMetPE0BZBfBAoA.jpg"
          />
          <div className="portfolio-description">
            <p>Veda Learning App: Intuitive design for a learning management system.</p>
          </div>
        </div>

      </div>

      <Link to='/contact'><div className="online-button">Contact</div></Link>
    </div>
    </div>

  );
};

export default Portfolio;
