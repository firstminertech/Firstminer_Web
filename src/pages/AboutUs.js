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


                        <section className="about aos-init aos-animate" data-aos="fade-up">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <h3
                                            style={{
                                                fontFamily: 'Georgia',
                                                fontSize: '20px',
                                                textAlign: 'center',
                                            }}
                                        >
                                            <b>
                                                "We pursue relationships based on transparency, persistence, mutual trust,
                                                and integrity with our employees, customers and other business partners."
                                            </b>
                                        </h3>
                                    </div>
                                </div>
                                <br />
                                <br />
                                <br />

                                <div className="row">
                                    <div className="col-lg-6">
                                        <img
                                            src="assets/img/EdigitalbabaLOGO.webp"
                                            alt="Team Member"
                                            className="edigibabaimg"
                                            style={{ borderColor: "#28c3b4" }}
                                        />
                                        <br />
                                        <h4 style={{ fontFamily: 'Georgia' }}>
                                            <b>Power By:-<br /> Firstminer Technology Solutions Pvt. Ltd.</b>
                                        </h4>
                                    </div>
                                    <div className="col-lg-6 pt-4 pt-lg-0">
                                        <p
                                            className="fst-italic"
                                            style={{
                                                fontFamily: 'Georgia',
                                                fontSize: '18px',
                                               
                                            }}
                                        >
                                            Our team of specialists consistently delivers outstanding results combining creative ideas with our vast
                                            experience. We can help you build a sustainable, meaningful relationship with your clients by engaging
                                            them with your brand using social media. We work in areas as diverse as search engine optimization,
                                            social media marketing, email marketing, and digital marketing.
                                        </p>
                                        <ul>
                                            <li
                                                style={{
                                                    fontFamily: 'Georgia',
                                                    fontSize: '18px',
                                                   
                                                }}
                                            >
                                                <i className="bi bi-check2-circle"></i> Our team develops effective content strategies for forward-thinking companies. We have a proven track record in increasing search engine rankings.
                                            </li>
                                            <li
                                                style={{
                                                    fontFamily: 'Georgia',
                                                    fontSize: '18px'
                                                }}
                                            >
                                                <i className="bi bi-check2-circle"></i> Our digital marketing, Mobile Application Development, Website Development work speaks for itself. We deliver an outstanding service custom-tailored to each and every one of our clients.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* 
                        <p className="about01-text">
                            Our team of specialists consistently delivers outstanding results combining creative ideas with our vast experience.
                            We can help you build a sustainable, meaningful relationship with your clients by engaging them with your brand using social media.
                            We work in areas as diverse as search engine optimization, social media marketing, email marketing and digital marketing.
                            <br />
                            Our team develops effective content strategies for forward thinking companies.
                            We have a proven track record in increasing search engine rankings.
                            Our digital marketing, Mobile Application Development, Website Development work speaks for itself.
                            We deliver an outstanding service custom-tailored to each and every one of our clients.</p> */}
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
