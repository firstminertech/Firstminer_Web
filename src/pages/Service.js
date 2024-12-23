import React from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";

function Service() {
  return (
    <div>
      {/* Header Section */}
    <Header/>

      {/* Introduction Section */}
      <section id="home" className="py-5 bg-primary text-white text-center">
        <div className="container">
          <h1>Welcome to Our Services</h1>
          <p className="mt-3">
            We offer a wide range of professional services tailored to your
            needs. Explore what we can do for you!
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-5">
        <div className="container">
          <h2 className="text-center">Our Services</h2>
          <div className="row mt-4">
            {/* Service 1 */}
            <div className="col-md-4 text-center">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Web Development</h5>
                  <p className="card-text">
                    Build dynamic and responsive websites tailored to your
                    business needs.
                  </p>
                </div>
              </div>
            </div>
            {/* Service 2 */}
            <div className="col-md-4 text-center">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Mobile App Development</h5>
                  <p className="card-text">
                    Create seamless and efficient mobile apps for iOS and
                    Android platforms.
                  </p>
                </div>
              </div>
            </div>
            {/* Service 3 */}
            <div className="col-md-4 text-center">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Digital Marketing</h5>
                  <p className="card-text">
                    Enhance your online presence with our digital marketing
                    strategies.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            {/* Service 4 */}
            <div className="col-md-4 text-center">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">UI/UX Design</h5>
                  <p className="card-text">
                    Design user-friendly and visually appealing interfaces.
                  </p>
                </div>
              </div>
            </div>
            {/* Service 5 */}
            <div className="col-md-4 text-center">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Cloud Solutions</h5>
                  <p className="card-text">
                    Leverage cloud technologies to improve scalability and
                    efficiency.
                  </p>
                </div>
              </div>
            </div>
            {/* Service 6 */}
            <div className="col-md-4 text-center">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Consulting</h5>
                  <p className="card-text">
                    Get expert advice to overcome challenges and achieve your
                    goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-5 bg-light">
        <div className="container text-center">
          <h2>Contact Us</h2>
          <p className="mt-3">
            Have questions? Reach out to us at{" "}
            <strong>services@ourcompany.com</strong>.
          </p>
        </div>
      </section>

      {/* Footer */}
     <Footer/>
    </div>
  );
}

export default Service;
