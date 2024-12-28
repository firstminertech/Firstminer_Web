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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});

export default ClientPage;
