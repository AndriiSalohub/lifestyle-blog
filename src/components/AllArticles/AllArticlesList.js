import React, { useState } from "react";
import { articlesArray } from "components/ArticlesList/articlesArray";
import { Link } from "react-router-dom";
import { Pagination } from "./Pagination";
import { useDispatch, useSelector } from "react-redux";
import { ArticleListItem } from "components/ArticlesList/ArticlesListItem";

export const AllArticlesList = () => {
  const [value, setValue] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(4);
  const lastArticleIndex = currentPage * articlesPerPage;
  const firstArticleIndex = lastArticleIndex - articlesPerPage;
  const currentArticle = articlesArray.slice(
    firstArticleIndex,
    lastArticleIndex
  );

  const dispatch = useDispatch();
  const currentPageLink = useSelector((state) => state.category);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const filteredArticles = currentArticle.filter((searchText) => {
    return searchText.title.toLowerCase().includes(value.toLocaleLowerCase());
  });

  console.log(currentPageLink);

  return (
    <>
      <div className="articles-page-list">
        <div className="filter-bar">
          <div className="filter-bar-show-all">
            <div className="filter-bar-show-all-btn">
              <Link to={`/${currentPageLink[1]}`} className="show-all-btn">
                Back to {currentPageLink[1]}
              </Link>
            </div>
          </div>
        </div>
        <div className="article-list">
          {filteredArticles.map(
            ({ id, title, description, img, author, path }) => (
              <div key={id}>
                <ArticleListItem
                  id={id}
                  title={title}
                  description={description}
                  img={img}
                  author={author}
                  path={path}
                />
              </div>
            )
          )}
        </div>
        <Pagination
          articlesPerPage={articlesPerPage}
          totalArticles={articlesArray.length}
          paginate={paginate}
        />
        <div className="side-bar">
          <div className="side-bar-search">
            <h1 className="side-bar-search-title side-bar-title">Search</h1>
            <input
              type="text"
              placeholder="Enter your search"
              className="side-bar-search-input"
              onChange={(event) => setValue(event.target.value)}
            />
          </div>
          <div className="side-bar-bibendum-auctor">
            <h1 className="side-bar-bibendum-auctor-title side-bar-title">
              Bibendum auctor
            </h1>
            <div className="side-bar-bibendum-auctor-description">
              Mauris imperdiet, urna mi, gravida sod ales. Vivamus hendrerit
              nulla erat ornare tortor in vestibulum id.
            </div>
          </div>
          <div className="side-bar-categories">
            <h1 className="side-bar-categories-title side-bar-title">
              Categories
            </h1>
            <ul className="side-bar-categories-list">
              <li className="side-bar-categories-list-item">
                <Link
                  to="/hot-articles"
                  className="side-bar-categories-list-item-link"
                >
                  Hot articles
                </Link>
              </li>
              <li className="side-bar-categories-list-item">
                <Link
                  to="/people"
                  className="side-bar-categories-list-item-link"
                >
                  People
                </Link>
              </li>
              <li className="side-bar-categories-list-item">
                <Link
                  to="/places"
                  className="side-bar-categories-list-item-link"
                >
                  Places
                </Link>
              </li>
              <li className="side-bar-categories-list-item">
                <Link
                  to="/hot-articles"
                  className="side-bar-categories-list-item-link"
                >
                  Stories
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
