import "./NavBar.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Squeeze as Hamburger } from "hamburger-react";
import "./NavBar.css";

export const NavBar = () => {
  const [isOpen, setOpen] = useState(false);

  const closeMobileMenu = () => setOpen(false);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo"></Link>
        <div className="menu-icon">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
        <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/hot-articles"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Hot articles
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/people" className="nav-links" onClick={closeMobileMenu}>
              People
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/places" className="nav-links" onClick={closeMobileMenu}>
              Places
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/stories" className="nav-links" onClick={closeMobileMenu}>
              Stories
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about-us"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              About us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
