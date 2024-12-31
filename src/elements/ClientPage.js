import React, { useEffect, useState } from "react";
import { observer } from "mobx-react";

const ClientPage = observer(() => {
  
  return (
    <div>
      <section id="clients" className="wow fadeInUp">
        <div className="container">
          {/* <div className="clients-carousel owl-carousel">
            {clients.map((client, index) => (
              <ClientCard key={index} image={client.src} altText={client.alt} />
            ))}
          </div> */}
          <div className="d-flex justify-content-start flex-wrap">
            <div className="col-md-4 container my-4 ">
              <div className="text-center">
                <h6 className="fs-3 text-center ">Outreach</h6>
                <img
                  src="https://web.outreach.money/assets/images/outreach.jpg"
                  alt="Outreach Logo"
                  className="img-fluid fixed-img2"
                />
              </div>
            </div>
            <div className="col-md-4 container my-4 ">
              <div className="text-center">
                <h6 className="fs-3 text-center ">Atal Bihari Bajpayee University</h6>
                <img
                  src="https://abvv.ac.in/image/ABVV-NewLogo.png"
                  alt="Abvv Logo"
                  className="img-fluid fixed-img2"
                />
              </div>
            </div>
            <div className="col-md-4 container my-4 ">
              <div className="text-center">
                <h6 className="fs-3 text-center ">Bilaspur Railway</h6>
                <img
                  src="https://logos-download.com/wp-content/uploads/2019/11/Indian_Railway_Logo_2.png"
                  alt="Outreach Logo"
                  className="img-fluid fixed-img2"
                />
              </div>
            </div>
            {/* <div className="col-md-4 container my-4 ">
              <div className="text-center">
                <h6 className="fs-4 text-start username10"></h6>
                <img
                  src="assets/img/og.png"
                  alt="Outreach Logo"
                  className="img-fluid fixed-img1"
                />
              </div>
            </div>
            <div className="col-md-4 container my-4 ">
              <div className="text-center">
                <h6 className="fs-4 text-start username10">Outreach</h6>
                <img
                  src="assets/img/og.png"
                  alt="Outreach Logo"
                  className="img-fluid fixed-img1"
                />
              </div>
            </div>
            <div className="col-md-4 container my-4 ">
              <div className="text-center">
                <h6 className="fs-4 text-start username10">Outreach</h6>
                <img
                  src="assets/img/og.png"
                  alt="Outreach Logo"
                  className="img-fluid fixed-img1"
                />
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
});

export default ClientPage;
