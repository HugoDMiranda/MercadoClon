import React from "react";
import "../styles/styles-components/Stores.css";
import { Link } from "react-router-dom";

function Stores({ img, store }) {
  return (
    <li className="store-container">
      <Link
        to={`/items?search=${store}`}
        className="uk-card uk-card-default store-container-link"
      >
        <img
          src={img}
          width="1800"
          height="1200"
          alt={store}
          className="store-container-link-img"
        />
      </Link>
    </li>
  );
}

export default Stores;
