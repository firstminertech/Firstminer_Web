import React from 'react';
import Header from '../component/Header';

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
      <div className="portfolio-container">
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
      </div>

      <div className="online-button">Online</div>
    </div>
    </div>

  );
};

export default Portfolio;
