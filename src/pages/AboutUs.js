import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";

function AboutUs() {
    return (
        <div>
            {/* Header Section */}
            <Header />

            {/* About Section */}
            <section id="about" className="py-5 bg-light">
                <div className="Edigibaba">
                    <div className="container text-center">
                        <h2 className="about fw-bold">About Us</h2>
                        <p className=" mt-3 fw-bold">
                            "We pursue relationships based on transparency, persistence,
                            mutual trust, and integrity with our employees, customers and other business partners."</p>
                        <img
                            src="assets/img/EdigitalbabaLOGO.webp"
                            alt="Team Member"
                            className="edigibabaimg"
                            style={{ borderColor: "#28c3b4" }}
                        />

                        <p className="about01-text">
                            Our team of specialists consistently delivers outstanding results combining creative ideas with our vast experience.
                            We can help you build a sustainable, meaningful relationship with your clients by engaging them with your brand using social media.
                            We work in areas as diverse as search engine optimization, social media marketing, email marketing and digital marketing.
                            <br />
                            Our team develops effective content strategies for forward thinking companies.
                            We have a proven track record in increasing search engine rankings.
                            Our digital marketing, Mobile Application Development, Website Development work speaks for itself.
                            We deliver an outstanding service custom-tailored to each and every one of our clients.</p>
                    </div>
                </div>
            </section>

            {/* Mission and Vision Section */}
            {/* <section id="mission" className="py-5">
                <div className="container text-center">
                    <h2>Our Mission & Vision</h2>
                    <p className="mt-3">
                        <strong>Mission:</strong> To provide top-notch solutions that create
                        value and make a difference in the lives of our customers.
                    </p>
                    <p>
                        <strong>Vision:</strong> To be a global leader recognized for
                        innovation, excellence, and sustainability.
                    </p>
                </div>
            </section> */}

            {/* Team Section */}
            <section id="team" className="py-5 bg-light">
                <div className="container">
                    <h2 className="text-center">Testimonials</h2>
                    <div className="row mt-4">
                        <div className="col-md-4 text-center">
                            <img
                                src="https://via.placeholder.com/150"
                                alt="Team Member"
                                className="rounded-circle mb-3"
                            />
                            <h5>John Doe</h5>
                            <p>CEO</p>
                        </div>
                        <div className="col-md-4 text-center">
                            <img
                                src="https://via.placeholder.com/150"
                                alt="Team Member"
                                className="rounded-circle mb-3"
                            />
                            <h5>Jane Smith</h5>
                            <p>CTO</p>
                        </div>
                        <div className="col-md-4 text-center">
                            <img
                                src="https://via.placeholder.com/150"
                                alt="Team Member"
                                className="rounded-circle mb-3"
                            />
                            <h5>Michael Brown</h5>
                            <p>COO</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            {/* <section id="contact" className="py-5">
                <div className="container text-center">
                    <h2>Contact Us</h2>
                    <p className="mt-3">
                        Have questions or want to work with us? Reach out at{" "}
                        <strong>contact@ourcompany.com</strong>.
                    </p>
                </div>
            </section> */}
            <section id="team" className=" Ourskils py-5 bg-light">
                <div className="container">
                    <h2 className="text-center">Our Skils</h2>
                    <div className="row mt-4">
   
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default AboutUs;
