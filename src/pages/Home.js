import React, { useEffect } from "react";
import { observer } from 'mobx-react';
import Header from "../component/Header";
import Footer from "../component/Footer";
import Portfolio from "../elements/Portfolio";
import ClientPage from "../elements/ClientPage";
import websiteStore from "../store/WebsiteStore";

const HomePage = observer(() => {
    useEffect(() => {
        websiteStore?.getTeams();
    }, [])
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
                            <div className="col-lg-6 about-img">
                                <img src="assets/img/about-img.jpg" alt="" />
                            </div>
                            <div className="col-lg-6 content">
                                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing</h2>
                                <h3>
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                    officia deserunt mollit anim id est laborum.
                                </h3>
                                <ul>
                                    <li>
                                        <i className="ion-android-checkmark-circle" /> Ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat.
                                    </li>
                                    <li>
                                        <i className="ion-android-checkmark-circle" /> Duis aute irure
                                        dolor in reprehenderit in voluptate velit.
                                    </li>
                                    <li>
                                        <i className="ion-android-checkmark-circle" /> Ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                        in reprehenderit in voluptate trideta storacalaperda mastiro
                                        dolore eu fugiat nulla pariatur.
                                    </li>
                                </ul>
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

                <ClientPage />

                <Portfolio />


                <section id="testimonials" className="wow fadeInUp">
                    <div className="container">
                        <div className="section-header">
                            <h2>Testimonials</h2>
                            <p>
                                Sed tamen tempor magna labore dolore dolor sint tempor duis magna
                                elit veniam aliqua esse amet veniam enim export quid quid veniam
                                aliqua eram noster malis nulla duis fugiat culpa esse aute nulla
                                ipsum velit export irure minim illum fore
                            </p>
                        </div>
                        <div className="owl-carousel testimonials-carousel">
                            <div className="testimonial-item">
                                <p>
                                    <img
                                        src="assets/img/quote-sign-left.png"
                                        className="quote-sign-left"
                                        alt=""
                                    />
                                    Proin iaculis purus consequat sem cure digni ssim donec porttitora
                                    entum suscipit rhoncus. Accusantium quam, ultricies eget id,
                                    aliquam eget nibh et. Maecen aliquam, risus at semper.
                                    <img
                                        src="assets/img/quote-sign-right.png"
                                        className="quote-sign-right"
                                        alt=""
                                    />
                                </p>
                                <img
                                    src="assets/img/testimonial-1.jpg"
                                    className="testimonial-img"
                                    alt=""
                                />
                                <h3>Saul Goodman</h3>
                                <h4>Ceo &amp; Founder</h4>
                            </div>
                            <div className="testimonial-item">
                                <p>
                                    <img
                                        src="assets/img/quote-sign-left.png"
                                        className="quote-sign-left"
                                        alt=""
                                    />
                                    Export tempor illum tamen malis malis eram quae irure esse labore
                                    quem cillum quid cillum eram malis quorum velit fore eram velit
                                    sunt aliqua noster fugiat irure amet legam anim culpa.
                                    <img
                                        src="assets/img/quote-sign-right.png"
                                        className="quote-sign-right"
                                        alt=""
                                    />
                                </p>
                                <img
                                    src="assets/img/testimonial-2.jpg"
                                    className="testimonial-img"
                                    alt=""
                                />
                                <h3>Sara Wilsson</h3>
                                <h4>Designer</h4>
                            </div>
                            <div className="testimonial-item">
                                <p>
                                    <img
                                        src="assets/img/quote-sign-left.png"
                                        className="quote-sign-left"
                                        alt=""
                                    />
                                    Enim nisi quem export duis labore cillum quae magna enim sint
                                    quorum nulla quem veniam duis minim tempor labore quem eram duis
                                    noster aute amet eram fore quis sint minim.
                                    <img
                                        src="assets/img/quote-sign-right.png"
                                        className="quote-sign-right"
                                        alt=""
                                    />
                                </p>
                                <img
                                    src="assets/img/testimonial-3.jpg"
                                    className="testimonial-img"
                                    alt=""
                                />
                                <h3>Jena Karlis</h3>
                                <h4>Store Owner</h4>
                            </div>
                            <div className="testimonial-item">
                                <p>
                                    <img
                                        src="assets/img/quote-sign-left.png"
                                        className="quote-sign-left"
                                        alt=""
                                    />
                                    Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos
                                    export minim fugiat minim velit minim dolor enim duis veniam ipsum
                                    anim magna sunt elit fore quem dolore labore illum veniam.
                                    <img
                                        src="assets/img/quote-sign-right.png"
                                        className="quote-sign-right"
                                        alt=""
                                    />
                                </p>
                                <img
                                    src="assets/img/testimonial-4.jpg"
                                    className="testimonial-img"
                                    alt=""
                                />
                                <h3>Matt Brandon</h3>
                                <h4>Freelancer</h4>
                            </div>
                            <div className="testimonial-item">
                                <p>
                                    <img
                                        src="assets/img/quote-sign-left.png"
                                        className="quote-sign-left"
                                        alt=""
                                    />
                                    Quis quorum aliqua sint quem legam fore sunt eram irure aliqua
                                    veniam tempor noster veniam enim culpa labore duis sunt culpa
                                    nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum
                                    quid.
                                    <img
                                        src="assets/img/quote-sign-right.png"
                                        className="quote-sign-right"
                                        alt=""
                                    />
                                </p>
                                <img
                                    src="assets/img/testimonial-5.jpg"
                                    className="testimonial-img"
                                    alt=""
                                />
                                <h3>John Larson</h3>
                                <h4>Entrepreneur</h4>
                            </div>
                        </div>
                    </div>
                </section>


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