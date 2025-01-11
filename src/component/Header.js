import React, { useState, useEffect } from "react";
import PrimaryHeader from "./PrimaryHeader";
import { Link, NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  const location = useLocation();
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

      <header id="header" className={isFixed ? "fixed bg-light" : "header-relative"}>
        <div className="container d-flex justify-content-between">
          <div id="logo" className="pull-left d-flex gap-2">
            <img
              src={
                location.pathname === "/"
                  ? (isFixed ? "assets/img/firstminerlogo.png" : "assets/img/l-white.png")
                  : "assets/img/firstminerlogo.png"
              }
              width={220}
            />
            {/* <h1>
              <Link to={"/"} className="scrollto">
                First<span>Miner</span>
              </Link>
            </h1> */}
          </div>

          <nav id="nav-menu-container" className={isMenuOpen ? "open bg-light" : ""}>
            <ul className="nav-menu">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "menu-active" : "menu-inactive")}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/service"
                  className={({ isActive }) => (isActive ? "menu-active" : "menu-inactive")}
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/portfoliodata"
                  className={({ isActive }) => (isActive ? "menu-active" : "menu-inactive")}
                >
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/careers"
                  className={({ isActive }) => (isActive ? "menu-active" : "menu-inactive")}
                >
                  Careers
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) => (isActive ? "menu-active" : "menu-inactive")}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>

          <button
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <i className={`fas ${location.pathname=="/"?(isFixed?"text-dark":"text-light"):("text-dark")} ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </header>

    </div>
  );
};

export default Header;
