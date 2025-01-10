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
      <section id="services" className="services-section mt-2">
        <div className="container">
          {/* <h2 className="section-title">Our Services</h2> */}
          <div className="service-cards">
            {/* Service 1 */}
            <div className="service-card">
              <h5 className="service-title">Web Development</h5>
              <p className="service-description">
                A website should not just draw attention. The role of a website
                is to attract and engage the user, as well as communicate your
                brand and raise awareness about a product or service.
              </p>
            </div>
            {/* Service 2 */}
            <div className="service-card">
              <h5 className="service-title">App Development</h5>
              <p className="service-description">
                your unique ideas transforming into incredible apps for your
                business requirements. our app developers can build mobile app
                your requirement, in your budget, and as per your timeline.
              </p>
            </div>
            {/* Service 3 */}
            <div className="service-card">
              <h5 className="service-title">Digital Marketing</h5>
              <p className="service-description">
                Digital Marketing is an effective way to encourage conversions
                and its main objective is to build a strategy to meets the needs
                of your target audience.
              </p>
            </div>
          </div>
          <div className="service-cards">
            {/* Service 4 */}
            <div className="service-card">
              <h5 className="service-title">Govt. Tender(Material Supply)</h5>
              <p className="service-description">
                we supply the material for structured procedure and different
                potential suppliers or contractors, business activity in works,
                supply, or service contracts.
              </p>
            </div>
            {/* Service 5 */}
            <div className="service-card">
              <h5 className="service-title">
                Project Explaination & Vedio Creation
              </h5>
              <p className="service-description">
                High-quality video ads can easily generate traffic of customers.
                Do not stick with traditional marketing,use digital tools to
                gather more and more customers at your point.
              </p>
            </div>
            {/* Service 6 */}
            <div className="service-card">
              <h5 className="service-title">Commercial Video Creation</h5>
              <p className="service-description">
                Understand how your video are performing, and the kind of target
                audience viewing and engaging with them.
              </p>
            </div>
          </div>

          <div className="service-cards">
            {/* Service 4 */}
            <div className="service-card">
              <h5 className="service-title">Block Chain Consultant</h5>
              <p className="service-description">
                Blockchain Lab we believe that Distributed Ledger Technologies
                carry the potential to introduce a new level of transparency,
                automation, and efficiency in businesses and nonprofits.
              </p>
            </div>
            {/* Service 5 */}
            <div className="service-card">
              <h5 className="service-title">Pay Per Click (PPC) Management</h5>
              <p className="service-description">
                Pay Per Click has an instant impact and gives your brand a much
                larger reach and exposure as a result of first page exposure on
                major search engines.
              </p>
            </div>
            {/* Service 6 */}
            <div className="service-card">
              <h5 className="service-title">Digital Consultancy</h5>
              <p className="service-description">
                We’ve developed an approach to shaping digital strategies for
                our clients that result in defining prioritized, cost-effective
                solutions that deliver a measurable Return on Investment (ROI).
              </p>
            </div>
          </div>
          <div className="service-cards">
            {/* Service 4 */}
            <div className="service-card">
              <h5 className="service-title">Email Marketing</h5>
              <p className="service-description">
                We create tailored marketing campaigns for each segment of your
                audience to help advertise products and services in efforts to
                efficiently and effectively engage new customers.
              </p>
            </div>
            {/* Service 5 */}
            <div className="service-card">
              <h5 className="service-title">Affiliate Management</h5>
              <p className="service-description">
                Affiliate Marketing is the term used to describe a form of
                online advertising which consists of rewarding an affiliate for
                referring a visitor or rewarding a customer for performing a
                desired action.
              </p>
            </div>
            {/* Service 6 */}
            <div className="service-card">
              <h5 className="service-title">Conversion Rate Optimization</h5>
              <p className="service-description">
                Conversion rate results also influence ROI from every traffic
                source and campaign you run; so the higher your conversion rate,
                the better your ROI will be.
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
            <a href="mailto:firstminertech@gmail.com" className="e-mail10">
  firstminertech@gmail.com
</a>

          </p>
        </div>
      </section>
      {/* new section */}
      <section id="benefits" className="benefits-section">
        <div className="container text-center">
          <div className="benefits-cards">
            <div className="benefit-card">
              <i className="bi bi-people-fill benefit-icon"></i>
              <h5 className="benefit-title">Our Mission</h5>
              <p className="benefit-description">
                Our mission is to help enterprises accelerate adoption of new
                technologies, untangle complex issues that always emerge during
                digital evolution, and orchestrate ongoing innovation.
              </p>
            </div>
            <div className="benefit-card">
              <i className="bi bi-bar-chart-line benefit-icon"></i>
              <h5 className="benefit-title">Our Plan</h5>
              <p className="benefit-description">
                Whether it is a consumer-oriented app or a transformative
                enterprise-class solution, the company leads the process from
                ideation and concept to delivery.
              </p>
            </div>
            <div className="benefit-card">
              <i className="bi bi-heart-fill benefit-icon"></i>
              <h5 className="benefit-title">Our Vision</h5>
              <p className="benefit-description">
              We are the most respected Internet marketing agency.
Our mission is to revolutionize the way businesses connect with their audience online.
We strive to change how businesses speak

              </p>
            </div>
            <div className="benefit-card">
              <i className="bi bi-heart-fill benefit-icon"></i>
              <h5 className="benefit-title">Our Care</h5>
              <p className="benefit-description">
              Our digital marketing, Mobile Application
                  Development, Website Development work speaks for itself.
                  We deliver an outstanding service custom-tailored to each and every one of our clients.
                
              </p>
            </div>
            
          </div>

          
        </div>
      </section>


    </div>
  );
}

export default Service;
