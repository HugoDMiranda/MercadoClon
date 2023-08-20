import React from "react";
import "../styles/styles-components/Pagination.css";

function Pagination({ totalPosts, postsPerPage, setCurrentPage, currentPage }) {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="pagination-container">
      <button
        className="buttons-next-back"
        onClick={() =>
          currentPage === 1
            ? setCurrentPage(1)
            : setCurrentPage(currentPage - 1)
        }
      >
        &lt; Anterior
      </button>
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => setCurrentPage(page)}
            className={page === currentPage ? " active" : "pagination-buttons "}
          >
            {page}
          </button>
        );
      })}
      <p className="pages">de {pages.length}</p>
      <button
        className="buttons-next-back"
        onClick={() =>
          currentPage === 3
            ? setCurrentPage(3)
            : setCurrentPage(currentPage + 1)
        }
      >
        Siguiente &gt;
      </button>
    </div>
  );
}

export default Pagination;
