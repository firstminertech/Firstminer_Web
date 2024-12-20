import React from "react";

const PrimaryHeader = () => {
  return (
    <div>
      <section id="topbar" className="d-none d-lg-block">
        <div className="container clearfix">
          <div className="row">
            {/* Contact Info */}
            <div className="col-md-6">
              <div className="contact-info gap-3 d-flex">
                {/* Updated to Font Awesome 6 icons */}
                <i className="fas fa-envelope" />
                <a href="mailto:contact@example.com">contact@example.com</a>
                <i className="fas fa-phone-alt" /> +1 5589 55488 55
              </div>
            </div>

            {/* Social Links */}
            <div className="col-md-6 text-md-right">
              <div className="social-links">
                <a href="#" className="twitter">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#" className="facebook">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#" className="instagram">
                  <i className="fab fa-instagram" />
                </a>
                <a href="#" className="google-plus">
                  <i className="fab fa-google" />
                </a>
                <a href="#" className="linkedin">
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrimaryHeader;
