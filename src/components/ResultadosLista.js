import React from "react";
import "../styles/styles-components/ResultadosLista.css";
import { Link } from "react-router-dom";
import shipping from "../img/shipping.png";

function ResultadosLista({ resultado, id }) {
  function separadorMiles(numero) {
    let partesNumero = numero.toString().split(".");
    partesNumero[0] = partesNumero[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return partesNumero.join(".");
  }

  return (
    <Link className="resultadoLista" to={`/items/${resultado.items[0]?.id}`}>
      <div className="resultadoLista-container">
        <img
          src={resultado.items[0]?.picture}
          alt="resultado"
          className="resultadoLista-img"
        />
        <div className="resultadoLista-container-informacion">
          <div className="resultadoLista-container-informacion-precio">
            <h2>$ {separadorMiles(resultado.items[0]?.price?.price)}</h2>
            {resultado.items[0]?.free_shipping === true ? (
              <img src={shipping} alt="shipping" />
            ) : null}
          </div>
          <div className="resultadoLista-container-informacion-nombre">
            <p>{resultado.items[0]?.title}</p>
            <p>Completo Unico!</p>
          </div>
        </div>
      </div>
      <p className="resultadoLista-lugar">{resultado.items[0]?.state_name}</p>
    </Link>
  );
}

export default ResultadosLista;
