import React, { useContext, useState } from "react";
import "../styles/styles-components/Navbar.css";
import { Link } from "react-router-dom";
import logo from "../img/logo2.png";
import lupa from "../img/lupa2.png";
import { CartContext } from "../context/CartContext";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";

function Navbar() {
  const [busqueda, setBusqueda] = useState("");
  const [cart, setCart] = useContext(CartContext);

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  return (
    <nav className="navbar-container">
      <div className="navbar">
        <div className="navbar-search">
          <Link to={`/`} className="navbar-search-logo">
            <img src={logo} alt="MercadoLibreLogo" className="logo" />
            EcommerceClone
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
          <div className="navbar-info-shop">
            <Link to={`/noAvailable`} className="pin">
              <FaMapMarkerAlt size="20px" />
              <div>
                <p>Ingresa tu</p>
                <h6>ubicacion</h6>
              </div>
            </Link>
            <Link to={`/noAvailable`}>Categorias</Link>
            <Link to={`/noAvailable`}>Ofertas</Link>
            <Link to={`/noAvailable`}>Historial</Link>
            <Link to={`/noAvailable`}>Supermercado</Link>
            <Link to={`/noAvailable`}>Moda</Link>
            <Link to={`/noAvailable`}>Vender</Link>
            <Link to={`/noAvailable`}>Ayuda / PQR</Link>
          </div>
          <div className="navbar-info-user">
            <Link to={`/noAvailable`}>Usuario</Link>
            <Link to={`/noAvailable`}>Mis compras</Link>
            <Link to={`/noAvailable`}>Favoritos</Link>
            <Link to={`/cart`} className="navbar-info-user-cart">
              <AiOutlineShoppingCart size="20px" />
              {quantity ? <p>{quantity >= 9 ? "9+" : quantity}</p> : null}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
