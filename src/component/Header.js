import React, { useState, useEffect } from "react";
import PrimaryHeader from "./PrimaryHeader";
import { Link, NavLink } from "react-router-dom";

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
            <img src="assets/img/logo-final.png" width={50} />

            <h1>
              <Link to={"/"} className="scrollto">
                First<span>Miner</span>
              </Link>
            </h1>
          </div>

          <nav id="nav-menu-container" className={isMenuOpen ? "open" : ""}>
            <ul className="nav-menu">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "menu-active" : "menu-inactive")}
                >
                  home
                </NavLink>
              </li>
              <li >
                <NavLink
                  to="/about"
                  className={({ isActive }) => (isActive ? "menu-active" : "menu-inactive")}
                >
                 about
                </NavLink>
              </li>
              <li>
              <NavLink
                  to="/services"
                  className={({ isActive }) => (isActive ? "menu-active" : "menu-inactive")}
                >
                 Services
                </NavLink>
              </li>
              <li>
                <Link to={"/portfolio"}>Portfolio</Link>
              </li>
              <li>
                <Link to={"/our-teams"}>Team</Link>
              </li>
              <li className="menu-has-children">
                <Link to="#">More</Link>
                <ul>
                  <li><Link to="/clients">Client</Link></li>
                  <li><Link to="/testimonial">Testimonial</Link></li>
                </ul>
              </li>
              <li>
                <Link to={"/careers"}>Careers</Link>
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
