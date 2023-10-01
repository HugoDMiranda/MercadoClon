import React from "react";
import "../styles/NoAvailable.css";
import { PiSmileySadBold } from "react-icons/pi";

function NoAvailable() {
  return (
    <div className="noavailable-container">
      <div className="noavailable-container-inf">
        <PiSmileySadBold size={50} />
        <h2>No Disponible</h2>
        <p>Estamos trabajando para cumplir las expectativas</p>
      </div>
    </div>
  );
}

export default NoAvailable;
