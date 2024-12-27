import React, { useEffect, useState } from "react";
import { observer } from 'mobx-react';
import Header from "../component/Header";
import Footer from "../component/Footer";
import Portfolio from "../elements/Portfolio";
import ClientPage from "../elements/ClientPage";
import websiteStore from "../store/WebsiteStore";
import Slider from "react-slick";
import Testimonials from "../elements/Testimonials";
import { useSpring, animated, useTransition } from '@react-spring/web';

const HomePage = observer(() => {
    useEffect(() => {
        websiteStore?.getTeams();
    }, [])

    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true); // Trigger the animation when the component mounts
    }, []);

    // Transition for the entire content
    const transitions = useTransition(show, {
        from: { opacity: 0, transform: 'translateY(50px)' },
        enter: { opacity: 1, transform: 'translateY(0)' },
        leave: { opacity: 0, transform: 'translateY(50px)' },
        config: { tension: 180, friction: 12 },
    });

    // Transition for the image with slight delay
    const imageTransition = useTransition(show, {
        from: { opacity: 0, transform: 'translateY(50px)' },
        enter: { opacity: 1, transform: 'translateY(0)' },
        leave: { opacity: 0, transform: 'translateY(50px)' },
        config: { tension: 180, friction: 12 },
        delay: 300, // Slight delay for image
    });
    return (
        <div>
            <Header />

            <section id="intro">
                {/* Background Video */}
                <video autoPlay muted loop id="intro-video">
                    <source src="assets/img/header-video.mp4" type="video/mp4" />
                </video>
            </section>

            {/* #intro */}

            <main id="main">
                <section id="about" className="wow fadeInUp">
                    <div className="container">
                        <div className="row">
                            {/* Animated Image */}
                            <div className="col-lg-6 about-img">
                                {imageTransition((style, item) =>
                                    item ? (
                                        <animated.img
                                            src="assets/img/about-img.jpg"
                                            alt=""
                                            style={style}
                                        />
                                    ) : null
                                )}
                            </div>

                            {/* Animated Content */}
                            <div className="col-lg-6 content">
                                {transitions((style, item) =>
                                    item ? (
                                        <>
                                            <animated.h2 style={style}>
                                            Firstminer Technology Solutions Pvt. Ltd .
                                            </animated.h2>
                                            <animated.h3 style={style}>
                                            Our team of specialists consistently delivers outstanding results combining creative ideas with our vast experience. We can help you build a sustainable, meaningful relationship with your clients by engaging them with your brand using social media.
                                            </animated.h3>
                                            <ul>
                                                <li>
                                                    <i className="ion-android-checkmark-circle" /> Our team develops effective content strategies for forward thinking companies. We have a proven track record in increasing search engine rankings.
                                                </li>
                                                <li>
                                                    <i className="ion-android-checkmark-circle" />Our digital marketing, Mobile Application Development, Website Development work speaks for itself. We deliver an outstanding service custom-tailored to each and every one of our clients.
                                                </li>
                                                
                                            </ul>
                                        </>
                                    ) : null
                                )}
                            </div>
                        </div>
                    </div>
                </section>
                {/* #about */}

                <section id="services">
                    <div className="container">
                        <div className="section-header">
                            <h2>Services</h2>

                            <p>
                                Sed tamen tempor magna labore dolore dolor sint tempor duis magna
                                elit veniam aliqua esse amet veniam enim export quid quid veniam
                                aliqua eram noster malis nulla duis fugiat culpa esse aute nulla
                                ipsum velit export irure minim illum fore
                            </p>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="box wow fadeInLeft">
                                    <div className="icon">
                                        <i className="fa fa-bar-chart" />
                                    </div>
                                    <h4 className="title">
                                        <a href="">Content Marketing strategy</a>
                                    </h4>
                                    <p className="description">
                                        Content Marketing is an effective way to encourage conversions and
                                        its main objective is to build a content
                                        strategy to meets the needs of your target audience.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="box wow fadeInRight">
                                    <div className="icon">
                                        {/* <i className="fa fa-picture-o" /> */}
                                    </div>
                                    <img src="assets/img/appdevelopment.webp"></img>
                                    <h4 className="title">
                                        <a href="">App Development</a>
                                    </h4>

                                    <p className="description">

                                        your unique ideas transforming into incredible apps for your business requirements.
                                        our app developers can build mobile app your requirement,
                                        in your budget, and as per your timeline.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="box wow fadeInLeft" data-wow-delay="0.2s">
                                    <div className="icon">
                                        <i className="fa fa-shopping-bag" />
                                    </div>
                                    <h4 className="title">
                                        <a href="">Web Development</a>
                                    </h4>

                                    <p className="description">
                                        A website should not just draw attention.
                                        The role of a website is to attract and engage the user,
                                        as well as communicate your brand and raise awareness about a product or service.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="box wow fadeInLeft" data-wow-delay="0.2s">
                                    <div className="icon">
                                        {/* <i className="fa fa-shopping-bag" /> */}
                                    </div>
                                    <img src="assets/img/project.webp"></img>
                                    <h4 className="title">
                                        <a href="">Project Explainatin & Video Creation</a>
                                    </h4>

                                    <p className="description">
                                        High-quality video ads can easily generate traffic of customers.
                                        Do not stick with traditional marketing,
                                        use digital tools to gather more and more customers at your point.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="box wow fadeInLeft" data-wow-delay="0.2s">
                                    <div className="icon">
                                        {/* <i className="fa fa-shopping-bag" /> */}
                                    </div>
                                    <img src="assets/img/govt.webp"></img>
                                    <h4 className="title">
                                        <a href="">Govt. Tender and (Material Supply)</a>
                                    </h4>
                                    <p className="description">
                                        we supply the material for structured procedure and
                                        different potential suppliers or contractors,
                                        business activity in works, supply, or service contracts.F
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="box wow fadeInLeft" data-wow-delay="0.2s">
                                    <div className="icon">
                                        <i className="fa fa-shopping-bag" />
                                    </div>
                                    <h4 className="title">
                                        <a href="">Comercial Video Creation</a>
                                    </h4>
                                    <p className="description">
                                        Understand how your video are performing,
                                        and the kind of target audience viewing and engaging with them.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="box wow fadeInRight" data-wow-delay="0.2s">
                                    {/* <div className="icon">
                                        <i className="fa fa-map" />
                                    </div> */}
                                    <h4 className="title">
                                        <a href="">Blockchain Consultant</a>
                                    </h4>
                                    <img src="assets/img/blockchain.webp"></img>
                                    <p className="description">
                                        Blockchain Lab we believe that Distributed Ledger Technologies carry
                                        the potential to introduce a new level of transparency, automation,
                                        and efficiency in businesses and nonprofits.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* #services */}
                <h2 className="client-title">Clients</h2>
                <p className="client-para">Sed tamen tempor magna labore dolore dolor sint tempor duis magna elit veniam aliqua esse amet veniam enim export quid quid veniam aliqua eram noster malis nulla duis fugiat culpa esse aute nulla ipsum velit export irure minim illum fore</p>
                <ClientPage />
                <h2 className="client-title">Testimonials</h2>
                <Testimonials />


                <section id="call-to-action" className="wow fadeInUp">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9 text-center text-lg-left">
                                <h3 className="cta-title">Call To Action</h3>
                                <p className="cta-text">
                                    {" "}
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse
                                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa qui officia deserunt mollit
                                    anim id est laborum.
                                </p>
                            </div>
                            <div className="col-lg-3 cta-btn-container text-center">
                                <a className="cta-btn align-middle" href="#">
                                    Call To Action
                                </a>
                            </div>
                        </div>
                    </div>
                </section>


                <section id="team" className="wow fadeInUp">
                    <div className="container">
                        <div className="section-header">
                            <h2>Our Team</h2>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="member">
                                    <div className="pic">
                                        <img src="assets/img/team-1.jpg" alt="" />
                                    </div>
                                    <div className="details">
                                        <h4>Walter White</h4>
                                        <span>Chief Executive Officer</span>
                                        <div className="social">
                                            <a href="">
                                                <i className="fa fa-twitter" />
                                            </a>
                                            <a href="">
                                                <i className="fa fa-facebook" />
                                            </a>
                                            <a href="">
                                                <i className="fa fa-google-plus" />
                                            </a>
                                            <a href="">
                                                <i className="fa fa-linkedin" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="member">
                                    <div className="pic">
                                        <img src="assets/img/team-2.jpg" alt="" />
                                    </div>
                                    <div className="details">
                                        <h4>Sarah Jhinson</h4>
                                        <span>Product Manager</span>
                                        <div className="social">
                                            <a href="">
                                                <i className="fa fa-twitter" />
                                            </a>
                                            <a href="">
                                                <i className="fa fa-facebook" />
                                            </a>
                                            <a href="">
                                                <i className="fa fa-google-plus" />
                                            </a>
                                            <a href="">
                                                <i className="fa fa-linkedin" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="member">
                                    <div className="pic">
                                        <img src="assets/img/team-3.jpg" alt="" />
                                    </div>
                                    <div className="details">
                                        <h4>William Anderson</h4>
                                        <span>CTO</span>
                                        <div className="social">
                                            <a href="">
                                                <i className="fa fa-twitter" />
                                            </a>
                                            <a href="">
                                                <i className="fa fa-facebook" />
                                            </a>
                                            <a href="">
                                                <i className="fa fa-google-plus" />
                                            </a>
                                            <a href="">
                                                <i className="fa fa-linkedin" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="member">
                                    <div className="pic">
                                        <img src="assets/img/team-4.jpg" alt="" />
                                    </div>
                                    <div className="details">
                                        <h4>Amanda Jepson</h4>
                                        <span>Accountant</span>
                                        <div className="social">
                                            <a href="">
                                                <i className="fa fa-twitter" />
                                            </a>
                                            <a href="">
                                                <i className="fa fa-facebook" />
                                            </a>
                                            <a href="">
                                                <i className="fa fa-google-plus" />
                                            </a>
                                            <a href="">
                                                <i className="fa fa-linkedin" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* #team */}

            </main>
            <Footer />

        </div>
    )
}
)
export default HomePage;