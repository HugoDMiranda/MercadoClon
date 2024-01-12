import React, { useContext, useState } from "react";
import "../styles/styles-components/Navbar.css";
import { Link } from "react-router-dom";
import logo from "../img/logo2.png";
import lupa from "../img/lupa2.png";
import { CartContext } from "../context/CartContext";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GoBell } from "react-icons/go";

function Navbar() {
  const [busqueda, setBusqueda] = useState("");
  const [cart, setCart] = useContext(CartContext);

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);
  return (
    <nav className="navbar">
      <div>
        <div className="navbar-search">
          <Link to={`/`}>
            <img src={logo} alt="MercadoLibreLogo" className="logo" />
          </Link>
          <div className="navbar-search-bar">
            <input
              placeholder="Nunca dejes de buscar"
              className="navbar-search-bar-input"
              onChange={(e) => setBusqueda(e.target.value)}
            />
            <Link to={busqueda === "" ? `/` : `/items?search=${busqueda}`}>
              <img src={lupa} alt="Lupa" className="lupa" />
            </Link>
          </div>
        </div>
        <div className="navbar-info">
          <p>Categorias</p>
          <p>Ofertas</p>
          <p>Historial</p>
          <p>Supermercado</p>
          <p>Moda</p>
          <p>Vender</p>
          <p>Ayuda / PQR</p>
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

export default Navbar;
