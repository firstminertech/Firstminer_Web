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
            Sed tamen tempor magna labore dolore dolor sint tempor duis magna
              elit veniam aliqua esse amet veniam enim export quid quid veniam
              aliqua eram noster malis nulla duis fugiat culpa esse aute nulla
              ipsum velit export irure minim illum fore
            </p>
          </div>
        </section>
  
        {/* Services Section */}
        <section id="services" className="services-section">
          <div className="container">
           <ClientPage/>
          </div>
        </section>
  
        {/* Contact Section */}
   
  
        {/* Footer */}
        <Footer />
      </div>
    );
};

export default OurClient;
