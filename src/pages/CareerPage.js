import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";

function CareerPage() {
    return (
        <div>
            {/* Header Section */}
            <Header />

            {/* Hero Section */}
            <section style={{ backgroundColor: "#0645ad", color: "white", textAlign: "center" }} className="py-5">
                <div className="container">
                    <h1 className="display-4 fw-bold">Join Firstminer Team</h1>
                    <p className="fs-5 mt-3">
                        Be part of a global company where your skills and passion matter.
                    </p>
                    <a href="#job-listings" className="btn" style={{ backgroundColor: "#28c3b4", color: "white", padding: "10px 30px" }}>
                        Explore Jobs
                    </a>
                </div>
            </section>

            {/* Job Listings Section */}
            <section id="job-listings" className="py-5" style={{ backgroundColor: "#f9f9f9" }}>
                <div className="container">
                    <h2 className="text-center fw-bold mb-4" style={{ color: "#0645ad" }}>Current Openings</h2>
                    <div className="row">
                        {/* Job 1 */}
                        <div className="col-md-4 mb-4">
                            <div className="card shadow-sm">
                                <div className="card-body">
                                    <h5 className="card-title" style={{ color: "#0645ad" }}>Autosar - Embedded Software Developer</h5>
                                    <p className="card-text">Georgia | Posted: 21 Dec 2024</p>
                                    <p className="text-muted small">
                                        Develop infotainment products for the automotive domain.
                                    </p>
                                    <a href="#apply" className="btn" style={{ backgroundColor: "#28c3b4", color: "white" }}>
                                        Apply Now
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Job 2 */}
                        <div className="col-md-4 mb-4">
                            <div className="card shadow-sm">
                                <div className="card-body">
                                    <h5 className="card-title" style={{ color: "#0645ad" }}>Full-Stack Web Developer</h5>
                                    <p className="card-text">Remote | Posted: 15 Dec 2024</p>
                                    <p className="text-muted small">
                                        Work on web platforms and deliver seamless user experiences.
                                    </p>
                                    <a href="#apply" className="btn" style={{ backgroundColor: "#28c3b4", color: "white" }}>
                                        Apply Now
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Job 3 */}
                        <div className="col-md-4 mb-4">
                            <div className="card shadow-sm">
                                <div className="card-body">
                                    <h5 className="card-title" style={{ color: "#0645ad" }}>UI/UX Designer</h5>
                                    <p className="card-text">New York | Posted: 10 Dec 2024</p>
                                    <p className="text-muted small">
                                        Design user-friendly and visually appealing interfaces.
                                    </p>
                                    <a href="#apply" className="btn" style={{ backgroundColor: "#28c3b4", color: "white" }}>
                                        Apply Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section id="benefits" className="py-5">
                <div className="container text-center">
                    <h2 className="fw-bold" style={{ color: "#0645ad" }}>Why Work With Us?</h2>
                    <div className="row mt-4">
                        <div className="col-md-4">
                            <i className="bi bi-people-fill fs-1" style={{ color: "#28c3b4" }}></i>
                            <h5 className="mt-3">Collaborative Culture</h5>
                            <p>Work in a team-oriented environment where innovation thrives.</p>
                        </div>
                        <div className="col-md-4">
                            <i className="bi bi-bar-chart-line fs-1" style={{ color: "#28c3b4" }}></i>
                            <h5 className="mt-3">Growth Opportunities</h5>
                            <p>Enhance your career with training and development programs.</p>
                        </div>
                        <div className="col-md-4">
                            <i className="bi bi-heart-fill fs-1" style={{ color: "#28c3b4" }}></i>
                            <h5 className="mt-3">Work-Life Balance</h5>
                            <p>Enjoy flexible working hours and employee wellness programs.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section id="apply" className="py-5" style={{ backgroundColor: "#0645ad", color: "white", textAlign: "center" }}>
                <div className="container">
                    <h2>Ready to Join?</h2>
                    <p className="fs-5 mt-3">Take the next step in your career with us.</p>
                    <a href="#" className="btn" style={{ backgroundColor: "#28c3b4", color: "white", padding: "10px 30px" }}>
                        Apply Now
                    </a>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default CareerPage;
