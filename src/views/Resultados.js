import React, { useEffect, useState } from "react";
import Filtros from "../components/Filtros";
import ResultadosLista from "../components/ResultadosLista";
import "../styles/Resultados.css";
import { useLocation } from "react-router-dom";
import Axios from "axios";

function Resultados() {
  const [resultados, setResultados] = useState([]);

  const category = useLocation().search;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await Axios.get(
          `http://localhost:3001/api/items${category}`
        );
        setResultados(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [category]);

  return (
    <div className="resultados">
      {resultados[0] === null ? null : <Filtros />}

      <div className="resultados-container">
        {resultados.message === "error" ? (
          <>
            <h1>No encontramos publicaciones</h1>
            <p> Revisa que la palabra este bien escrita</p>
          </>
        ) : (
          resultados.map((resultado) => {
            return (
              <ResultadosLista
                resultado={resultado}
                key={resultado.id}
                id={resultado.id}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

export default Resultados;
