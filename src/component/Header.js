import React, { useState, useEffect } from "react";
import PrimaryHeader from "./PrimaryHeader";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // This effect will trigger when the page is scrolled
  useEffect(() => {
    const handleScroll = () => {
      // Add or remove 'fixed' class based on scroll position
      if (window.scrollY > 0) {
        setIsFixed(true);  // Make the header fixed
      } else {
        setIsFixed(false); // Remove fixed positioning when at top
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <PrimaryHeader />
      <header id="header" className={isFixed ? "fixed" : ""}>
        <div className="container d-flex justify-content-between">
          <div id="logo" className="pull-left d-flex gap-2">
          <img src="assets/img/logo-final.png" width={50}/>

            <h1>
              <Link to={"/" }className="scrollto">
                First<span>miner</span>
              </Link>
            </h1>
          </div>

          <nav id="nav-menu-container" className={isMenuOpen ? "open" : ""}>
            <ul className="nav-menu">
              <li className="menu-active">
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/careers"}>Careers</Link>
              </li>
              <li>
                <Link to="#about">About Us</Link>
              </li>
              <li>
                <Link to="#services">Services</Link>
              </li>
              <li>
                <Link to="#portfolio">Portfolio</Link>
              </li>
              <li>
                <Link to="#team">Team</Link>
              </li>
              <li className="menu-has-children">
                <Link to="#">Drop Down</Link>
                <ul>
                  <li><Link to="#">Drop Down 1</Link></li>
                  <li><Link to="#">Drop Down 2</Link></li>
                  <li><Link to="#">Drop Down 3</Link></li>
                  <li><Link to="#">Drop Down 4</Link></li>
                </ul>
              </li>
              <li>
                <Link to={"/contact"}>Contact</Link>
              </li>
            </ul>
          </nav>

          <button
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
