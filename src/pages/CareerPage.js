import React, { useState } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Loader from "../elements/loader";
import { Link } from "react-router-dom";

function CareerPage() {

    const [loader, setLoader] = useState(true);
    setTimeout(() => {
        setLoader(false);
    }, 500)
    return (
        <div>
            {loader ? <Loader /> :
                <div>  <Header />

                    {/* Hero Section */}
                    <section className="hero-section">
                        <div className="container">
                            <h1 className="hero-title">Join Firstminer Team</h1>
                            <p className="hero-description paratext">
                                Be part of a global company where your skills and passion matter.
                            </p>
                            <Link
                                to="#"
                                className="btn-cta"
                                onClick={() => {
                                    document.getElementById("job-listings")?.scrollIntoView({ behavior: "smooth" });
                                }}
                            >
                                Explore Jobs
                            </Link>

                        </div>
                    </section>



                    {/* Benefits Section */}
                    <section id="benefits" className="benefits-section">
                        <div className="container text-center">
                            <h2 className="benefits-title">Why Work With Us?</h2>
                            <div className="benefits-cards">
                                <div className="benefit-card">
                                    <i className="bi bi-people-fill benefit-icon"></i>
                                    <h5 className="benefit-title">Collaborative Culture</h5>
                                    <p className="benefit-description">
                                        Work in a team-oriented environment where innovation thrives.
                                    </p>
                                </div>
                                <div className="benefit-card">
                                    <i className="bi bi-bar-chart-line benefit-icon"></i>
                                    <h5 className="benefit-title">Growth Opportunities</h5>
                                    <p className="benefit-description">
                                        Enhance your career with training and development programs.
                                    </p>
                                </div>
                                <div className="benefit-card">
                                    <i className="bi bi-heart-fill benefit-icon"></i>
                                    <h5 className="benefit-title">Work-Life Balance</h5>
                                    <p className="benefit-description">
                                        Enjoy flexible working hours and employee wellness programs.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Job Listings Section */}
                    <section id="job-listings" className="job-listings-section">
                        <div className="container">
                            <h2 className="job-listings-title d-flex justify-content-center">Current Openings</h2>
                            <div className="job-cards">
                                {/* Job 1 */}
                                <div className="job-card">
                                    <div className="job-card-body">
                                        <h5 className="job-card-title">Software Developer</h5>
                                        <p className="job-card-location">Bilaspur | Open Till: 27 Feb 2025</p>
                                        <p className="job-card-description">
                                            Develop infotainment products for the automotive domain.
                                        </p>
                                        <Link to={"/contactform"} className="btn-apply">
                                            Apply Now
                                        </Link>
                                    </div>
                                </div>
                                {/* Job 2 */}
                                <div className="job-card">
                                    <div className="job-card-body">
                                        <h5 className="job-card-title">Full-Stack Web Developer</h5>
                                        <p className="job-card-location">Bilaspur | Open Till: 27 Feb 2025</p>
                                        <p className="job-card-description">
                                            Work on web platforms and deliver seamless user experiences.
                                        </p>
                                        <Link to={"/contactform"} className="btn-apply">
                                            Apply Now
                                        </Link>
                                    </div>
                                </div>
                                {/* Job 3 */}
                                <div className="job-card">
                                    <div className="job-card-body">
                                        <h5 className="job-card-title">UI/UX Designer</h5>
                                        <p className="job-card-location">Bilaspur | Open Till: 27 Feb 2025</p>
                                        <p className="job-card-description">
                                            Design user-friendly and visually appealing interfaces.
                                        </p>
                                        <Link to={"/contactform"} className="btn-apply">
                                            Apply Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    {/* Call to Action Section */}
                    <section id="apply" className="apply-section">
                        <div className="container">
                            <h2 className="apply-title">Ready to Join?</h2>
                            <p className="apply-description paratext">Take the next step in your career with us.</p>
                            <Link to="#" className="btn-cta">
                                Apply Now
                            </Link>
                        </div>
                    </section>


                </div>}
        </div>
    );
}

export default CareerPage;
