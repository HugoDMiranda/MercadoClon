import React, { useEffect, useState } from "react";
import Filtros from "../components/Filtros";
import ResultadosLista from "../components/ResultadosLista";
import "../styles/Resultados.css";
import { useLocation } from "react-router-dom";
import Axios from "axios";
import Pagination from "../components/Pagination";

function Resultados() {
  const [resultados, setResultados] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);

  const lastPostIndex = currentPage * postsPerPage;

  const firstPostIndex = lastPostIndex - postsPerPage;

  const currentPosts =
    resultados.message === "error"
      ? null
      : resultados.slice(firstPostIndex, lastPostIndex);

  const category = useLocation().search;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await Axios.get(
          `https://server-mercadoclon.vercel.app/api/items${category}`
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
      {resultados.message === "error" ? (
        <div className="resultados-container-error">
          <div className="resultados-container-error-inf">
            <h2>No encontramos publicaciones</h2>
            <p> Revisa que la palabra este bien escrita</p>
          </div>
        </div>
      ) : resultados[0] === undefined ? null : (
        <>
          <Filtros category={resultados[0].categories} />
          <div className="resultados-container">
            <>
              {currentPosts.map((resultado) => (
                <ResultadosLista
                  resultado={resultado}
                  key={resultado.id}
                  id={resultado.id}
                />
              ))}
            </>
          </div>
          <Pagination
            totalPosts={resultados.length}
            postsPerPage={postsPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </>
      )}
    </div>
  );
}

export default Resultados;
