import React from "react";

const PrimaryHeader = () => {
  return (
    <div>
      <section id="topbar" className="d-none d-lg-block">
        <div className="container">
          <div className="row headertop">
            {/* Contact Info */}
            <div className="col-6">
              {/* Address */}
              <div className="d-flex align-items-center flex-wrap">
                <a
                  href="https://maps.app.goo.gl/tR8Nc4B1fDdpc6519"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginRight: "8px" }}
                >
                  <img
                    src="assets/img/locationfirstminer.png"
                    alt="Team Member"
                    style={{ height: "20px" }}
                  />
                </a>
                <span className="text-truncate">
                  Firstminertech 3rd Floor, RK Complex, Seepat Rd, Sarkanda, Bilaspur.
                </span>
              </div>
            </div>
            {/* <div className="col-1"></div> */}
            <div className="d-flex col-6 justify-content-end headertop">
              {/* Email */}
              <div className="col-3 ">
                <div className="d-flex align-items-center ">
                  <i className="fas fa-envelope envelop-icon me-2"></i>
                  <a href="mailto:firstminertech@gmail.com" className="text-truncate email-text text-decoration-none">
                  Info@firstminer.in
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="col-3 headertop">
                <div className="d-flex align-items-center phone-section">
                  <i className="fa-solid fa-phone phone-icon"></i>
                  <span className="phone-text">07752358727</span>
                </div>
              </div>
            </div>


          </div>
        </div>

      </section>
    </div>
  );
};
export default PrimaryHeader;
