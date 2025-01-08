import React from 'react';
import Testimonials from '../elements/Testimonials';
import Header from '../component/Header';

const TestimonialPage = () => {

    return (
        <div className="">
            <Header />
            <section id="home" className="intro-section">
                <div className="container">
                    <h1 className="heading">Welcome to Testimonial</h1>
                    <p className="subheading">
                        We offer a wide range of professional services tailored to your
                        needs. Explore what we can do for you!
                    </p>
                </div>
            </section>
            <div className="testimonial-box ">
                
                <section id="services" className="services-section py-4">

                    <div className="container">
                        <div className="row">
                            {/* Left Section - 1/3 Width */}
                            {/* <div className='testimonial-leftside'> */}
                            <div className=" col-md-3">

                                <div
                                    className="container d-flex flex-column align-items-center justify-content-center"
                                    style={{ minHeight: "100vh", textAlign: "left" }}
                                >
                                    {/* Title Section */}
                                    <h1
                                        style={{
                                            fontSize: "3rem",
                                            fontWeight: "bold",
                                            letterSpacing: "5px",

                                        }}
                                    >

                                        Testimonial

                                    </h1>
                                    <img
                                        src="assets/img/testimonial.png"
                                        alt="Team Member"
                                        style={{ width: "200px" }}
                                    />

                                    {/* Button Section */}
                                    <div className="mt-4">
                                        <button
                                            className="btn btn-primary"
                                            style={{
                                                background: "linear-gradient(to right, #007BFF, #00274D)",
                                                border: "none",
                                                borderRadius: "8px",
                                                padding: "10px 20px",
                                                fontSize: "1.2rem",
                                            }}
                                        >
                                            Browse All
                                        </button>
                                    </div>

                                    {/* Arrows Section */}
                                    <div
                                        className="mt-4 d-flex justify-content-center align-items-center"
                                        style={{ gap: "20px" }}
                                    >
                                        {/* Left Arrow */}
                                        <div
                                            className="d-flex justify-content-center align-items-center"
                                            style={{
                                                width: "50px",
                                                height: "50px",
                                                border: "2px solid #333",
                                                borderRadius: "50%",
                                                fontSize: "1.5rem",
                                                cursor: "pointer", // Makes it look clickable
                                            }}
                                            onClick={() => console.log("Left arrow clicked!")} // Replace with your desired functionality
                                        >
                                            <span style={{ transform: "rotate(180deg)" }}>→</span>
                                        </div>

                                        {/* Right Arrow */}
                                        <div
                                            className="d-flex justify-content-center align-items-center"
                                            style={{
                                                width: "50px",
                                                height: "50px",
                                                border: "2px solid #333",
                                                borderRadius: "50%",
                                                fontSize: "1.5rem",
                                                cursor: "pointer", // Makes it look clickable
                                            }}
                                            onClick={() => console.log("Right arrow clicked!")} // Replace with your desired functionality
                                        >
                                            →
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* </div> */}
                            {/* Right Section - 2/3 Width */}
                            <div className="col-md-9 p-6">
                                <div className=" testimonials-border p-3 border bg-light">
                                    <div className="flex-container">
                                        <div className="col-12">
                                            <Testimonials />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </div>
        </div >
    );
};

export default TestimonialPage;
