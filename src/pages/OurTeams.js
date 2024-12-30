import React, { useEffect, useState } from "react";
import websiteStore from "../store/WebsiteStore";
import { toJS } from "mobx";
import { observer } from "mobx-react";
import Header from "../component/Header";
import { BASE_FILE_URL } from "../api/config";

const OurTeams = observer(() => {
    

    return (
        <div>
            <Header />
            <section className="team-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Our Team</h2>
                    </div>
                    <div className="team-grid">
                    
                            <div className="team-member">
                                <div className="member-image">
                                    <img
                                        src="./assets/img/testy3-1.png"
                                        alt="Team Member"
                                    />
                                </div>
                                <div className="member-details">
                                    <h4>Anik Ranjan</h4>
                                    <span>Software Developer</span>
                                    <p>A developer</p>
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

                            <div className="team-member">
                                <div className="member-image">
                                    <img
                                        src="./assets/img/testy3-1.png"
                                        alt="Team Member"
                                    />
                                </div>
                                <div className="member-details">
                                    <h4>Sudhanshu Kanwar</h4>
                                    <span>Software Developer</span>
                                    <p>A developer</p>
                                    <div className="social-links logo1">
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

                            <div className="team-member">
                                <div className="member-image">
                                    <img
                                        src="/path/to/default-image.jpg"
                                        alt="Team Member"
                                    />
                                </div>
                                <div className="member-details">
                                    <h4>Dharmesh Darshan</h4>
                                    <span>Software Developer</span>
                                    <p>A developer</p>
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

                            <div className="team-member">
                                <div className="member-image">
                                    <img
                                        src="/path/to/default-image.jpg"
                                        alt="Team Member"
                                    />
                                </div>
                                <div className="member-details">
                                    <h4>Sakshi Rathor</h4>
                                    <span>Software Developer</span>
                                    <p>A developer</p>
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
                            <div className="team-member">
                                <div className="member-image">
                                    <img
                                        src="/path/to/default-image.jpg"
                                        alt="Team Member"
                                    />
                                </div>
                                <div className="member-details">
                                    <h4>Shivam Gupta</h4>
                                    <span>Software Developer</span>
                                    <p>A developer</p>
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
                            <div className="team-member">
                                <div className="member-image">
                                    <img
                                        src="/path/to/default-image.jpg"
                                        alt="Team Member"
                                    />
                                </div>
                                <div className="member-details">
                                    <h4>Pallavi Rathor </h4>
                                    <span>Designer</span>
                                    <p>A developer</p>
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
                            <div className="team-member">
                                <div className="member-image">
                                    <img
                                        src="/path/to/default-image.jpg"
                                        alt="Team Member"
                                    />
                                </div>
                                <div className="member-details">
                                    <h4>Sandeep </h4>
                                    <span>Designer</span>
                                    <p>A developer</p>
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
                            <div className="team-member">
                                <div className="member-image">
                                    <img
                                        src="/path/to/default-image.jpg"
                                        alt="Team Member"
                                    />
                                </div>
                                <div className="member-details">
                                    <h4>Hritwik</h4>
                                    <span>Software Developer</span>
                                    <p>A developer</p>
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
                            
                    </div>
                </div>
            </section>
        </div>
    );
});

export default OurTeams;
