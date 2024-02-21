import React from "react";
import "../styles/styles-components/Benefits.css";
import { Link } from "react-router-dom";

function Benefits() {
  return (
    <>
      <Link to={`/noAvailable`} className="benefits-container">
        <img
          src="img/benefits/benefit1.png"
          alt="benefit1"
          className="benefits-img"
        />
      </Link>
    </>
  );
}

export default Benefits;
