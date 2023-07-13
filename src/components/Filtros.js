import React from "react";
import "../styles/styles-components/Filtros.css";

function Filtros({ category }) {
  return (
    <div className="filtros">
      {category.map((cate) => {
        return <span>{cate} &gt;</span>;
      })}
    </div>
  );
}

export default Filtros;
