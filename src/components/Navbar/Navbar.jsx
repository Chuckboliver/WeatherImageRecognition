import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navigation = () => {
  return (
    <nav className="navbar-container ">
      <h1 className="project-name">Weather Image Recognition</h1>

      <div className="link-container">
        <div className="font_navbar">
          <Link className="text_nav" to="/">
            Home
          </Link>
          <a
            className="text_nav"
            target="_blank"
            rel="noopener noreferrer"
            href="https://medium.com/@tumzazazaza123/ab7a556fc4ec"
          >
            Medium
          </a>
          <Link className="text_nav" to="/about">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
