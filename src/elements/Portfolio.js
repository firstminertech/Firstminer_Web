import React, { useEffect, useRef } from 'react';
import Swipe from 'swipejs'; // Import Swipe.js
import Header from '../component/Header';

const Portfolio = () => {
  // Create a reference for the swipe container
  const swipeRef = useRef(null);

  useEffect(() => {
    // Initialize Swipe.js after the component mounts
    const swipe = new Swipe(swipeRef.current, {
      startSlide: 0, // Start on the first slide
      speed: 400, // Slide transition speed
      auto: 3000, // Autoplay every 3 seconds
      continuous: true, // Infinite loop
      disableScroll: true, // Allow scroll
      stopPropagation: true, // Prevent swipe propagation
    });

    // Cleanup on component unmount
    return () => {
      swipe.kill(); // Cleanup Swipe.js when component unmounts
    };
  }, []);

  return (
    <div>
      <Header />
      <div className="custom-container">
        <div className="portfolio-wrapper custom-bg-screen">
          <div className="icon-wrapper custom-padding">
            <img src="assets/img/logo-final.png" className="custom-icon-circle" width={80} alt="Logo" />
          </div>

          <div className="custom-text-center">
            <h1 className="custom-title">Firstminer Portfolio</h1>
            <p className="custom-subtitle">Web Development | Design | Photography</p>
          </div>

          {/* Swipe.js carousel container */}
          <div className="custom-carousel" ref={swipeRef}>
            <div className="swipe-wrap">
              {/* Project 1 */}
              <div className="custom-card">
                <img src="https://graphicdesigneye.com/images/banner-design-52.jpg" className="custom-card-img" alt="Project 1" />
                <div className="custom-card-body">
                  <h3 className="custom-card-title">Project 1</h3>
                  <p className="custom-card-text">Description of Project 1. This project focuses on web development using React and Node.js.</p>
                </div>
              </div>

              {/* Project 2 */}
              <div className="custom-card">
                <img src="https://graphicdesigneye.com/images/banner-design-52.jpg" className="custom-card-img" alt="Project 2" />
                <div className="custom-card-body">
                  <h3 className="custom-card-title">Project 2</h3>
                  <p className="custom-card-text">Description of Project 2. This design-focused project includes UI/UX principles.</p>
                </div>
              </div>

              {/* Project 3 */}
              <div className="custom-card">
                <img src="https://graphicdesigneye.com/images/banner-design-52.jpg" className="custom-card-img" alt="Project 2" />
                <div className="custom-card-body">
                  <h3 className="custom-card-title">Project 2</h3>
                  <p className="custom-card-text">Description of Project 2. This design-focused project includes UI/UX principles.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
