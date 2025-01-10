import React, { useEffect, useState } from "react";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";

const ClientPage = observer(() => {
  
  return (
    <div>
   <section id="clients" className="wow fadeInUp py-5 bg-light">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-4 my-3 d-flex client-card11">
      <Link to="/outreach-web-subpage" className="w-100 text-decoration-none">
        <div className="text-center p-4 shadow-sm bg-white w-100 client-box1">
          <h6 className="fs-4 mb-3 font-weight-bold client-name10">Outreach</h6>
          <img
            src="./assets/img/out.jpg"
            alt="Outreach Logo"
            className="img-fluid mb-3"
            style={{ maxWidth: "150px" }}
          />
          <p className="text-muted">A leading platform in crypto trading.</p>
        </div>
        </Link>
      </div>
      <div className="col-md-4 my-3 d-flex client-card11">
        <Link to="/abvv-subpage" className="w-100 text-decoration-none">
        <div className="text-center p-4 shadow-sm bg-white w-100 client-box1" >
          <h6 className="fs-4 mb-3 font-weight-bold client-name10">ABVV, Bilaspur</h6>
          <img
            src="https://abvv.ac.in/image/ABVV-NewLogo.png"
            alt="Abvv Logo"
            className="img-fluid mb-3"
            style={{ maxWidth: "150px" }}
          />
          <p className="text-muted">Empowering the next generation of leaders.</p>
        </div>
        </Link>
      </div>
      <div className="col-md-4 my-3 d-flex client-card11">
      <Link to="/railway-subpage" className="w-100 text-decoration-none">
        <div className="text-center p-4 shadow-sm bg-white w-100 client-box1" >
          <h6 className="fs-4 mb-3 font-weight-bold client-name10">Bilaspur Railway</h6>
          <img
            src="https://logos-download.com/wp-content/uploads/2019/11/Indian_Railway_Logo_2.png"
            alt="Bilaspur Railway Logo"
            className="img-fluid mb-3"
            style={{ maxWidth: "150px" }}
          />
          <p className="text-muted">Connecting people, places, and progress.</p>
        </div>
        </Link>
      </div>
    </div>
  </div>
</section>




    </div>
  );
});

export default ClientPage;
