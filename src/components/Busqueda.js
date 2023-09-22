import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/styles-components/Busqueda.css";
import logo from "../img/logo2.png";
import lupa from "../img/lupa2.png";
import { CartContext } from "../context/CartContext";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GoBell } from "react-icons/go";

function Busqueda() {
  const [busqueda, setBusqueda] = useState("");
  const [cart, setCart] = useContext(CartContext);

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to={`/`}>
          <img src={logo} alt="MercadoLibreLogo" className="logo" />
        </Link>
        <p>tu direccion</p>
      </div>
      <div className="navbar-buscador">
        <div className="navbar-buscador-nav">
          <input
            placeholder="Nunca dejes de buscar"
            className="navbar-buscador-input"
            onChange={(e) => setBusqueda(e.target.value)}
          />
          <Link to={busqueda === "" ? `/` : `/items?search=${busqueda}`}>
            <img src={lupa} alt="Lupa" className="lupa" />
          </Link>
        </div>
        <div className="navbar-buscador-opciones">
          <p>Categorias</p>
          <p>Ofertas</p>
          <p>Historial</p>
          <p>Supermercado</p>
          <p>Moda</p>
          <p>Vender</p>
          <p>Ayuda / PQR</p>
        </div>
      </div>
      <div className="navbar-usuario">
        <img
          src="img/mercadoclon-disney.webp"
          alt="disney"
          className="disney"
        />

        <div className="navbar-usuario-opciones">
          <p>Usuario</p>
          <p>Mis compras</p>
          <p>Favoritos</p>
          <Link>
            <GoBell />
          </Link>
          <Link to={`/cart`}>
            <AiOutlineShoppingCart /> {quantity}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Busqueda;
