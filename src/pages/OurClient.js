import React from 'react';
import Testimonials from '../elements/Testimonials';
import Header from '../component/Header';
import ClientPage from '../elements/ClientPage';
import Footer from '../component/Footer';

const OurClient = () => {
  return (
    <div>
      {/* Header Section */}
      <Header />

      {/* Introduction Section */}
      <section id="home" className="intro-section">
        <div className="container">
          <h1 className="heading">Welcome to Our Clients page</h1>
          <p className="subheading">
            At FirstMiner, we are proud to collaborate with a diverse range of clients across industries like [list industries]. Our tailored solutions help them achieve success and exceed their goals. We value long-lasting partnerships and work closely with each client to deliver impactful results.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <div className="container">
          <ClientPage />
        </div>
      </section>

      {/* Contact Section */}


      
    </div>
  );
};

export default OurClient;
