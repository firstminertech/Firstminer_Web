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
              A website should not just draw attention. The role of a website is to attract and engage the user, as well as communicate your brand and raise awareness about a product or service.
              </p>
            </div>
            {/* Service 2 */}
            <div className="service-card">
              <h5 className="service-title">App Development</h5>
              <p className="service-description">
              your unique ideas transforming into incredible apps for your business requirements. our app developers can build mobile app your requirement, in your budget, and as per your timeline.
              </p>
            </div>
            {/* Service 3 */}
            <div className="service-card">
              <h5 className="service-title">Digital Marketing</h5>
              <p className="service-description">
              Digital  Marketing is an effective way to encourage conversions and its main objective is to build a strategy to meets the needs of your target audience.
              </p>
            </div>
          </div>
          <div className="service-cards">
            {/* Service 4 */}
            <div className="service-card">
              <h5 className="service-title">Govt. Tender(Material Supply)</h5>
              <p className="service-description">
              we supply the material for structured procedure and different potential suppliers or contractors, business activity in works, supply, or service contracts.
              </p>
            </div>
            {/* Service 5 */}
            <div className="service-card">
              <h5 className="service-title">Project Explaination & Vedio Creation</h5>
              <p className="service-description">
              High-quality video ads can easily generate traffic of customers. Do not stick with traditional marketing,use digital tools to gather more and more customers at your point.
              </p>
            </div>
            {/* Service 6 */}
            <div className="service-card">
              <h5 className="service-title">Commercial Video Creation</h5>
              <p className="service-description">
              Understand how your video are performing, and the kind of target audience viewing and engaging with them.
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
            <strong className="e-mail10">services@ourcompany.com</strong>.
          </p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Service;
