import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/styles-components/Busqueda.css";
import logo from "../img/logo2.png";
import lupa from "../img/lupa2.png";

function Busqueda() {
  const [busqueda, setBusqueda] = useState("");

  // const navigate = useNavigate();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     navigate("/items");
  //   } catch (err) {
  //     setErr(err.response.data);
  //     console.log(err.response.data);
  //   }
  // };

  return (
    <div className="navbar">
      <div className="navbar-buscador">
        <Link to={`/`}>
          <img src={logo} alt="MercadoLibreLogo" className="logo" />
        </Link>
        <input
          placeholder="Nunca dejes de buscar"
          className="navbar-buscador-input"
          onChange={(e) => setBusqueda(e.target.value)}
        />
        <Link to={busqueda === "" ? `/` : `/items?search=${busqueda}`}>
          <img src={lupa} alt="Lupa" className="lupa" />
        </Link>
      </div>
    </div>
  );
}

export default Busqueda;
