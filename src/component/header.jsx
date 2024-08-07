import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  console.log("Header component is rendered");

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blogs">Compare</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
