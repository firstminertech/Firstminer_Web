import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";

function CareerPage() {
  return (
    <div>
      {/* Header Section */}
  <Header/>

      {/* Main Section */}
      <section className="bg-primary text-white text-center py-5">
        <div className="container">
          <h2>Georgia</h2>
          <h1>Autosar - Embedded Software Developer</h1>
          <button className="btn btn-success btn-lg mt-4">Apply now</button>
        </div>
      </section>

      {/* Job Description Section */}
      <section className="py-5">
        <div className="container">
          <h3>Job description:</h3>
          <p>
            Capgemini Engineering is looking for an experienced Embedded
            Software Developer - AUTOSAR to join the Embedded Automotive
            Engineering team to develop the infotainment products within the
            Automotive domain.
          </p>
          <div className="mt-3">
            <p>
              <strong>Ref. code:</strong> 077889
            </p>
            <p>
              <strong>Posted on:</strong> 21 Dec 2024
            </p>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default CareerPage;
