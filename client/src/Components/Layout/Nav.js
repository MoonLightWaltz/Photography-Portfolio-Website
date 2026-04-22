import React from "react";
import { FaShareAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="navname">Josiah Darrel</div>

      <ul className="navlinks">
        <li className="navlink">About me</li>
        <li className="navlink">Contact</li>
        <li className="navlink">
          <FaInstagram />
        </li>
        <li className="navlink">
          <FaShareAlt />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
