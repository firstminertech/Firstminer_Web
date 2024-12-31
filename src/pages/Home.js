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
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

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
                <p className="client-para">At FirstMiner, we are proud to collaborate with a diverse range of clients across industries like [list industries]. Our tailored solutions help them achieve success and exceed their goals. We value long-lasting partnerships and work closely with each client to deliver impactful results.</p>
                <ClientPage />
                <h2 className="client-title">Testimonials</h2>
                <p className="client-para">At FirstMiner, we believe that our success is built on the trust and satisfaction of our clients. Our portfolio showcases a wide range of successful projects, but nothing speaks louder than the voices of those we have worked with. Here are just a few of the testimonials from our valued clients, who share their experiences with our services, expertise, and commitment to excellence. We are proud of the lasting relationships we have built and the impact we've made in helping our clients achieve their goals.

</p>

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
                        <div className="d-flex justify-content-between align-items-center gap-5">
                            <div className="col-lg-6 team-home">
                                <div className="title-z">ALL<br/>TEAMS</div>
                                <div class="button-z">
                                    <Link to={"/our-teams"}>Browse All</Link>
                                </div>
                                <div class="navigation">
                                    <i class="fas fa-arrow-left"></i>
                                    <i class="fas fa-arrow-right"></i>
                                </div>
                            </div>

                            <Swiper
                                modules={[Pagination, Autoplay]}
                                spaceBetween={10}
                                loop={true}
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                }}
                                pagination={{ clickable: true }}
                                slidesPerView={1}
                                speed={800}
                                style={{ paddingBottom: "40px" }}
                               >

                               
                                <SwiperSlide>

                                    <div className="team-member">
                                        <div className="member-image">
                                            <img
                                                src="assets/img/logo-final.png"
                                                alt="Team Member"
                                                style={{width:"200px"}}
                                            />
                                        </div>
                                        <div className="member-details">
                                            <h4>Anik Ranjan</h4>
                                            <span>Software Developer</span>
                                            <p>Anik is a skilled software developer with expertise in building innovative and scalable web applications. With a passion for clean, efficient code, he thrives in collaborative environments where technology meets creativity. Always eager to learn and grow, Anik contributes to developing cutting-edge solutions and improving user experiences.</p>
                                            <div className="social-links">
                                                <a href="" target="_blank" rel="noopener noreferrer">
                                                    <i className="fa-brands fa-instagram"></i>
                                                </a>
                                                <a href="" target="_blank" rel="noopener noreferrer">
                                                    <i className="fa-brands fa-facebook"></i>
                                                </a>
                                                <a href="" target="_blank" rel="noopener noreferrer">
                                                    <i className="fa-brands fa-whatsapp"></i>
                                                </a> <a href="" target="_blank" rel="noopener noreferrer">
                                                    <i className="fa-brands fa-linkedin"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="team-member">
                                        <div className="member-image">
                                            <img
                                                src="assets/img/logo-final.png"
                                                alt="Team Member"
                                                style={{width:"200px"}}
                                            />
                                        </div>
                                        <div className="member-details">
                                            <h4>Sudhanshu Kanwar</h4>
                                            <span>Software Developer</span>
                                            <p>Sudhanshu is a dedicated software developer with a passion for creating innovative software solutions. Focused on clean, maintainable code, he has a keen interest in developing robust applications that provide excellent user experiences. With a constant drive for learning and improving, Sudhanshu is always exploring new technologies and methodologies to solve complex problems.</p>
                                            <div className="social-links">
                                                <a href="" target="_blank" rel="noopener noreferrer">
                                                    <i className="fa-brands fa-instagram"></i>
                                                </a>
                                                <a href="" target="_blank" rel="noopener noreferrer">
                                                    <i className="fa-brands fa-facebook"></i>
                                                </a>
                                                <a href="" target="_blank" rel="noopener noreferrer">
                                                    <i className="fa-brands fa-whatsapp"></i>
                                                </a> <a href="" target="_blank" rel="noopener noreferrer">
                                                    <i className="fa-brands fa-linkedin"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="team-member">
                                        <div className="member-image">
                                            <img
                                                src="assets/img/logo-final.png"
                                                alt="Team Member"
                                                style={{width:"200px"}}
                                            />
                                        </div>
                                        <div className="member-details">
                                            <h4>Dharmesh Darshan</h4>
                                            <span>Software Developer</span>
                                            <p>Dharmesh is a passionate software developer who thrives on building innovative and efficient digital solutions. With a focus on continuous learning and improving his technical skills, Dharmesh specializes in developing user-friendly and high-performance applications. His approach combines creativity with technical expertise to solve complex problems and enhance user experiences.</p>
                                            <div className="social-links">
                                                <a href="" target="_blank" rel="noopener noreferrer">
                                                    <i className="fa-brands fa-instagram"></i>
                                                </a>
                                                <a href="" target="_blank" rel="noopener noreferrer">
                                                    <i className="fa-brands fa-facebook"></i>
                                                </a>
                                                <a href="" target="_blank" rel="noopener noreferrer">
                                                    <i className="fa-brands fa-whatsapp"></i>
                                                </a> <a href="" target="_blank" rel="noopener noreferrer">
                                                    <i className="fa-brands fa-linkedin"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="team-member">
                                        <div className="member-image">
                                            <img
                                                src="assets/img/logo-final.png"
                                                alt="Team Member"
                                                style={{width:"200px"}}
                                            />
                                        </div>
                                        <div className="member-details">
                                            <h4>Sakshi Rathor</h4>
                                            <span>App Developer</span>
                                            <p>Sakshi is an enthusiastic app developer who specializes in creating mobile applications that deliver seamless user experiences. With a passion for both Android and iOS development, she focuses on crafting intuitive and high-performing apps that cater to diverse user needs. Sakshi’s attention to detail and commitment to improving app functionality make her a reliable contributor in the tech world.</p>
                                            <div className="social-links">
                                                <a href="" target="_blank" rel="noopener noreferrer">
                                                    <i className="fa-brands fa-instagram"></i>
                                                </a>
                                                <a href="" target="_blank" rel="noopener noreferrer">
                                                    <i className="fa-brands fa-facebook"></i>
                                                </a>
                                                <a href="" target="_blank" rel="noopener noreferrer">
                                                    <i className="fa-brands fa-whatsapp"></i>
                                                </a> <a href="" target="_blank" rel="noopener noreferrer">
                                                    <i className="fa-brands fa-linkedin"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="team-member">
                                        <div className="member-image">
                                            <img
                                                src="assets/img/logo-final.png"
                                                alt="Team Member"
                                                style={{width:"200px"}}
                                            />
                                        </div>
                                        <div className="member-details">
                                            <h4>Shivam Gupta</h4>
                                            <span>Software Developer</span>
                                            <p>Shivam is a dedicated software developer with a strong foundation in building efficient and scalable applications. With a passion for coding and problem-solving, he is driven by the challenge of developing innovative solutions that meet both user needs and business objectives. Shivam consistently seeks to expand his knowledge and refine his skills, embracing new technologies to stay ahead in the fast-evolving tech landscape.</p>
                                            <div className="social-links">
                                                <a href="" target="_blank" rel="noopener noreferrer">
                                                    <i className="fa-brands fa-instagram"></i>
                                                </a>
                                                <a href="" target="_blank" rel="noopener noreferrer">
                                                    <i className="fa-brands fa-facebook"></i>
                                                </a>
                                                <a href="" target="_blank" rel="noopener noreferrer">
                                                    <i className="fa-brands fa-whatsapp"></i>
                                                </a> <a href="" target="_blank" rel="noopener noreferrer">
                                                    <i className="fa-brands fa-linkedin"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="team-member">
                                        <div className="member-image">
                                            <img
                                                src="assets/img/logo-final.png"
                                                alt="Team Member"
                                                style={{width:"200px"}}
                                            />
                                        </div>
                                        <div className="member-details">
                                            <h4>Pallavi Rathor </h4>
                                            <span>Tester & UI/UX Developer</span>
                                            <p>Pallavi is a skilled tester and UI/UX developer with a passion for delivering intuitive and visually appealing digital experiences. She excels in ensuring that applications are not only functional but also user-friendly, creating seamless interactions through meticulous testing and thoughtful design. With a keen eye for detail and user-centered design principles, Pallavi works to improve both the usability and aesthetics of every project she touches</p>
                                            <div className="social-links">
                                                <a href="" target="_blank" rel="noopener noreferrer">
                                                    <i className="fa-brands fa-instagram"></i>
                                                </a>
                                                <a href="" target="_blank" rel="noopener noreferrer">
                                                    <i className="fa-brands fa-facebook"></i>
                                                </a>
                                                <a href="" target="_blank" rel="noopener noreferrer">
                                                    <i className="fa-brands fa-whatsapp"></i>
                                                </a> <a href="" target="_blank" rel="noopener noreferrer">
                                                    <i className="fa-brands fa-linkedin"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="team-member">
                                        <div className="member-image">
                                            <img
                                                src="assets/img/logo-final.png"
                                                alt="Team Member"
                                                style={{width:"200px"}}
                                            />
                                        </div>
                                        <div className="member-details">
                                            <h4>Sandeep bhatt</h4>
                                            <span>Designer</span>
                                            <p>A Sandeep is a creative professional with a versatile skill set that includes graphic design, video editing, and multimedia content creation. With a deep understanding of visual aesthetics and storytelling, he brings concepts to life through his designs and videos. Sandeep is passionate about creating compelling and impactful visuals that engage and inspire audiences. Whether it's crafting dynamic graphics or editing seamless videos, he combines technical expertise with artistic flair to deliver high-quality results.</p>
                                            <div className="social-links">
                                                <a href="" target="_blank" rel="noopener noreferrer">
                                                    <i className="fa-brands fa-instagram"></i>
                                                </a>
                                                <a href="" target="_blank" rel="noopener noreferrer">
                                                    <i className="fa-brands fa-facebook"></i>
                                                </a>
                                                <a href="" target="_blank" rel="noopener noreferrer">
                                                    <i className="fa-brands fa-whatsapp"></i>
                                                </a> <a href="" target="_blank" rel="noopener noreferrer">
                                                    <i className="fa-brands fa-linkedin"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="team-member">
                                        <div className="member-image">
                                            <img
                                                src="assets/img/logo-final.png"
                                                alt="Team Member"
                                                style={{width:"200px"}}
                                            />
                                        </div>
                                        <div className="member-details">
                                            <h4>Hritwik Ujjaini</h4>
                                            <span>Software Developer</span>
                                            <p>Hritwik is a creative designer and skilled video editor, with a passion for producing visually compelling content. Whether it's crafting striking designs or editing videos that tell a story, Hritwik focuses on creating engaging and high-quality multimedia experiences. His eye for detail and innovative approach allows him to transform concepts into captivating visuals, making him a valuable asset in any creative project</p>
                                            <div className="social-links">
                                                <a href="" target="_blank" rel="noopener noreferrer">
                                                    <i className="fa-brands fa-instagram"></i>
                                                </a>
                                                <a href="" target="_blank" rel="noopener noreferrer">
                                                    <i className="fa-brands fa-facebook"></i>
                                                </a>
                                                <a href="" target="_blank" rel="noopener noreferrer">
                                                    <i className="fa-brands fa-whatsapp"></i>
                                                </a> <a href="" target="_blank" rel="noopener noreferrer">
                                                    <i className="fa-brands fa-linkedin"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>


                            </Swiper>
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