import React, { useEffect, useState } from "react";
import "../styles/ProductoView.css";
import Filtros from "../components/Filtros";
import Axios from "axios";
import { useParams } from "react-router-dom";

function ProductoView() {
  let { id } = useParams();
  const [resultado, setResultado] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await Axios.get(`http://localhost:3001/api/items/${id}`);
        setResultado(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id]);

  function separadorMiles(numero) {
    let partesNumero = numero.toString().split(".");
    partesNumero[0] = partesNumero[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return partesNumero.join(".");
  }

  return (
    <>
      {resultado.length === 0 ? null : (
        <div className="productoView">
          <Filtros />
          <div className="productoView-container">
            <div className="productoView-container-informacion">
              <img src={resultado.item?.picture} alt="producto" />
              <div className="productoView-container-informacion-compra">
                <p>
                  {resultado.item?.condition[0].toUpperCase() +
                    resultado.item?.condition.slice(1)}{" "}
                  - {resultado.item?.sold_quantity} vendidos
                </p>
                <h2>{resultado.item?.title}</h2>
                <h1>$ {separadorMiles(resultado.item?.price.price)}</h1>
                <button>Comprar</button>
              </div>
            </div>
            <div className="productoView-container-descripcion">
              <h2>Descripcion del producto</h2>
              <p>{resultado.item?.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductoView;
