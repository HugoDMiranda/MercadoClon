import React from "react";
import "../styles/styles-components/Benefits.css";
import { Link } from "react-router-dom";

function Benefits() {
  return (
    <>
      <Link to={`/noAvailable`}>
        <img src="img/benefits/benefit1.png" alt="benefit1" />
      </Link>
    </>
  );
}

export default Benefits;
