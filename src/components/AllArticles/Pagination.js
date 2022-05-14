import React from "react";

import "./Pagination.css";

export const Pagination = ({ articlesPerPage, totalArticles, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalArticles / articlesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div className="pagination-container">
        <ul className="pagination-list">
          {pageNumbers.map((number) => (
            <li key={number} className="pagination-list-item">
              <a
                href="#"
                onClick={() => paginate(number)}
                className="pagination-list-item-links"
              >
                {number}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
