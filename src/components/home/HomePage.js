import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/logo1.png";

const HomePage = () => (
  <div className="banner">
    <div className="banner-text">
      <img src={Logo} alt="Neighbourly Logo" />
      <h1>Groups</h1>
      <br />
      <h6>Neighbourly Groups mockup using React, Redux and React Router.</h6>
      <br />
      <Link
        to="about"
        className="btn btn-primary btn-lg d-flex justify-content-center w-50 mx-auto"
        style={{ color: "white" }}
      >
        Learn more
      </Link>
    </div>
  </div>
);

export default HomePage;
