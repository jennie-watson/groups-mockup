import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="jumbotron">
    <h1>Neighbourly Groups</h1>
    <p>Neighbourly Groups mockup using React, Redux and React Router.</p>
    <Link to="about" className="btn btn-primary btn-lg" style={{ color: "white" }} >
      Learn more
    </Link>
  </div>
);

export default HomePage;
