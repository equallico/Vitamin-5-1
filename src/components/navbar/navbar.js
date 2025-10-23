import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>My React App</h2>
      <div className="nav-links">
        <Link to="/home">Home</Link>
        <Link to="/nothome">NotHome</Link>
      </div>
    </nav>
  );
};

export default Navbar;
