import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="navbar">
        <nav className="d-flex flex-row justify-content-center p-3 mx-auto">
          <NavLink to="/" exact className="text-primary">
            Home
          </NavLink>
          {" | "}
          <NavLink to="/groups" className="text-primary">
            Groups
          </NavLink>
          {" | "}
          <NavLink to="/about" className="text-primary">
            About
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Header;
