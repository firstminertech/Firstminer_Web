import React from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";

function Service() {
  return (
    <div>
      {/* Header Section */}
      <Header />

      {/* Introduction Section */}
      <section id="home" className="intro-section">
        <div className="container">
          <h1 className="heading">Welcome to Our Services</h1>
          <p className="subheading">
            We offer a wide range of professional services tailored to your
            needs. Explore what we can do for you!
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className="service-cards">
            {/* Service 1 */}
            <div className="service-card">
              <h5 className="service-title">Web Development</h5>
              <p className="service-description">
                Build dynamic and responsive websites tailored to your
                business needs.
              </p>
            </div>
            {/* Service 2 */}
            <div className="service-card">
              <h5 className="service-title">Mobile App Development</h5>
              <p className="service-description">
                Create seamless and efficient mobile apps for iOS and
                Android platforms.
              </p>
            </div>
            {/* Service 3 */}
            <div className="service-card">
              <h5 className="service-title">Digital Marketing</h5>
              <p className="service-description">
                Enhance your online presence with our digital marketing
                strategies.
              </p>
            </div>
          </div>
          <div className="service-cards">
            {/* Service 4 */}
            <div className="service-card">
              <h5 className="service-title">UI/UX Design</h5>
              <p className="service-description">
                Design user-friendly and visually appealing interfaces.
              </p>
            </div>
            {/* Service 5 */}
            <div className="service-card">
              <h5 className="service-title">Cloud Solutions</h5>
              <p className="service-description">
                Leverage cloud technologies to improve scalability and
                efficiency.
              </p>
            </div>
            {/* Service 6 */}
            <div className="service-card">
              <h5 className="service-title">Consulting</h5>
              <p className="service-description">
                Get expert advice to overcome challenges and achieve your
                goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container text-center">
          <h2 className="contact-title">Contact Us</h2>
          <p className="contact-info">
            Have questions? Reach out to us at{" "}
            <strong>services@ourcompany.com</strong>.
          </p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Service;
