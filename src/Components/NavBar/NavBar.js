import React from "react";
import "./NavBar.scss";

const NavBar = (props) => {
  return (
    <nav className={`navbar ${props.mobileNavbar}`}>
      <ul className="navlist">
        <li className="navlist-item">Home</li>
        <li className="navlist-item">About</li>
        <li className="navlist-item">Contact</li>
        <li className="navlist-item">Blog</li>
        <li className="navlist-item">Careers</li>
      </ul>
    </nav>
  );
};

export default NavBar;