import React from 'react';
import Testimonials from '../elements/Testimonials';
import Header from '../component/Header';

const TestimonialPage = () => {
    return (
        <div className="">
            <Header />
            <div className="testimonial-content ">
                <div className="testimonial-page-wrapper">
                    <div className="testimonial-title">
                        <h1>Testimonials</h1>
                    </div>
                    <div className="browse-button-wrapper">
                        <button className="browse-all-btn">Browse All</button>
                    </div>
                    <div>
                        <Testimonials />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialPage;
