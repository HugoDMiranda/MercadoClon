import React, { useContext, useEffect, useState } from "react";
import "../styles/ProductoView.css";
import Filtros from "../components/Filtros";
import Axios from "axios";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function ProductoView() {
  let { id } = useParams();
  const [resultado, setResultado] = useState([]);
  const [cart, setCart] = useContext(CartContext);

  const addCart = () => {
    setCart((currItems) => {
      const isItemsFound = currItems.find((item) => item.id === id);
      if (isItemsFound) {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      } else {
        return [
          ...currItems,
          {
            id,
            quantity: 1,
            price: resultado.item?.price.price,
            img: resultado.item?.picture,
            name: resultado.item?.title,
          },
        ];
      }
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await Axios.get(
          `https://server-mercadoclon.vercel.app/api/items/${id}`
        );
        setResultado(res.data);
        console.log(resultado);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id, resultado, cart]);

  function separadorMiles(numero) {
    let partesNumero = numero.toString().split(".");
    partesNumero[0] = partesNumero[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return partesNumero.join(".");
  }

  return (
    <>
      {resultado.length === 0 ? null : (
        <div className="productoView">
          <Filtros category={resultado.categories} />
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
                <button className="productoView-container-informacion-compra-buttonBuy">
                  Comprar ahora
                </button>
                <button
                  className="productoView-container-informacion-compra-buttonAdd"
                  onClick={() => addCart()}
                >
                  Agregar al carrito
                </button>
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
