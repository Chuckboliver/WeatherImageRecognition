import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-ligh">
      <a className="text_nav " href="#">
        Home
      </a>
      {/* <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>
        
      </ul> */}
      <a className="text_nav" href="https://medium.com/p/ab7a556fc4ec/edit">
        Medium
      </a>
      <a className="text_nav" href="#">
        About
      </a>
    </nav>
  );
};

export default Navbar;
