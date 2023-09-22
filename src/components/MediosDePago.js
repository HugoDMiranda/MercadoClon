import React from "react";
import { Link } from "react-router-dom";
import { GoBell } from "react-icons/go";
import "../styles/styles-components/MediosDePago.css";

function MediosDePago() {
  return (
    <>
      <div className="payment">
        <Link>
          <GoBell />
        </Link>
        <div>
          <h3>Hasta 48 horas</h3>
          <Link>Ver mas</Link>
        </div>
      </div>
    </>
  );
}

export default MediosDePago;
