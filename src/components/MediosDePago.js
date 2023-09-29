import React from "react";
import { Link } from "react-router-dom";
import "../styles/styles-components/MediosDePago.css";

function MediosDePago({ paymentText, paymentIcon, paymentMore }) {
  return (
    <>
      <div className="payment">
        <Link className="payment-icon">{paymentIcon}</Link>
        <div>
          <h3>{paymentText}</h3>
          <Link>{paymentMore ? paymentMore : `Ver mas`}</Link>
        </div>
      </div>
    </>
  );
}

export default MediosDePago;
