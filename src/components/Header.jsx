import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="navbar">
      <Link to="/home" className="">
        Logo
      </Link>
      <ul className="nav">
        <li className="nav-item">
          <NavLink to="/home" className="nav-link">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" className="nav-link">
            Contact
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
