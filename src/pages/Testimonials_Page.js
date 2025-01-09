import React from 'react';
import Testimonials from '../elements/Testimonials';
import Header from '../component/Header';

const TestimonialPage = () => {

    return (
        <div className="main-container">
            <Header />
            <section id="home" className="intro-section">
                <div className="container text-center">
                    <h1 className="heading">Welcome to Testimonial</h1>
                    <p className="subheading">
                        We offer a wide range of professional services tailored to your
                        needs. Explore what we can do for you!
                    </p>
                </div>
            </section>
            <div className="testimonial-box">
                <section id="services" className="services-section py-4">
                    <div className="container">
                        <div className="row">
                            {/* Left Section */}
                            <div className="col-md-3 text-center d-flex flex-column align-items-center justify-content-center">
                                <h1 className="testimonial-title">Testimonial</h1>
                                <img
                                    src="assets/img/testimonial.png"
                                    alt="Team Member"
                                    className="testimonial-img"
                                />
                                {/* Swiper Navigation Arrows */}
                                <div className="arrow-container mt-4">
                                    <div
                                        className="arrow arrow-left"
                                        onClick={() => console.log("Left arrow clicked!")}
                                    >
                                        <span>←</span>
                                    </div>
                                    <div
                                        className="arrow arrow-right"
                                        onClick={() => console.log("Right arrow clicked!")}
                                    >
                                        →
                                    </div>
                                </div>
                            </div>

                            {/* Right Section */}
                            <div className="col-md-9">
                                <div className="testimonials-border bg-light p-4">
                                   
                                       <Testimonials/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default TestimonialPage;
