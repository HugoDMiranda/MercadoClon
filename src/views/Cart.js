import React, { useContext, useState, useEffect, Suspense } from "react";
import "../styles/Car.css";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const [car, setCar] = useState(true);
  const [totalPrice, setTotalPrice] = useState();
  const [cart, setCart] = useContext(CartContext);

  useEffect(() => {
    let prices = [];

    cart.map((cartItem) => prices.push(cartItem.price * cartItem.quantity));

    let suma = (ratio) => {
      let numero = 0;
      ratio.forEach((num) => {
        numero += num;
      });
      return numero;
    };

    let totalPrice = suma(prices).toFixed(1);

    setTotalPrice(totalPrice);
  }, [cart]);

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  const addCart = (itemid) => {
    setCart((currItems) => {
      const isItemsFound = currItems.find((item) => item.id === itemid);
      if (isItemsFound) {
        return currItems.map((item) => {
          if (item.id === itemid) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      } else {
        return [
          ...currItems,
          {
            id: itemid,
            quantity: 1,
            price: cart.price,
            img: cart.img,
            name: cart.name,
          },
        ];
      }
    });
  };

  const removeItem = (id) => {
    setCart((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  function separadorMiles(numero) {
    let partesNumero = numero.toString().split(".");
    partesNumero[0] = partesNumero[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return partesNumero.join(".");
  }

  return (
    <div className="cart">
      <div className="cart-container">
        <ul className="cart-container-options">
          <li>
            <button
              className={car ? "active" : null}
              onClick={() => setCar(true)}
            >
              Carrito ({quantity})
            </button>
          </li>
          <li>
            <button
              className={!car ? "active" : null}
              onClick={() => setCar(false)}
            >
              Guadados (0)
            </button>
          </li>
        </ul>
        <div className="cart-container-empty">
          {car ? (
            cart.length === 0 ? (
              <>
                <h4>Tu carrito está vacío</h4>
                <p>¿No sabes qué comprar? ¡Miles de productos te esperan!</p>
                <Link to={`/`}>Descubrir ofertas</Link>
              </>
            ) : (
              <>
                {cart.map((cartItem) => (
                  <div className="cart-container-empty-products">
                    <img src={cartItem.img} alt="producto" />
                    <p>{cartItem.name}</p>
                    <div className="cart-container-empty-products-buttons">
                      <button onClick={() => removeItem(cartItem.id)}>-</button>
                      <span>{cartItem.quantity}</span>
                      <button onClick={() => addCart(cartItem.id)}>+</button>
                    </div>
                    <h3>
                      ${separadorMiles(cartItem.price * cartItem.quantity)}{" "}
                    </h3>
                  </div>
                ))}
                <div className="cart-container-empty-info">
                  <p>Envio</p>
                  <span>$110.000</span>
                </div>
                <div className="cart-container-empty-info">
                  <p>Total con envio</p>
                  <span>${separadorMiles(Number(totalPrice))} </span>
                </div>
                <div className="cart-container-empty-info">
                  <button>comprar</button>
                </div>
              </>
            )
          ) : (
            <>
              <h4>No tienes productos guardados.</h4>
              <p>
                Si aún no te decidiste a comprar algún producto de tu carrito,
                puedes dejarlo aquí para no perderlo.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
