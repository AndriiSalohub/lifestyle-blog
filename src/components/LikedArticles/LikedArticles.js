import { articlesArray } from "components/ArticlesList/articlesArray";
import { ArticleListItem } from "components/ArticlesList/ArticlesListItem";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./LikedArticles.css";
import "../ArticlesList/ArticlesList.css";

export const LikedArticles = () => {
    const dispatch = useDispatch();
    const isLiked = useSelector((state) => state.articleLike);
    console.log(isLiked);
    const [value, setValue] = useState("");

    const filteredArticles = articlesArray.filter((searchText) => {
        return searchText.title
            .toLowerCase()
            .includes(value.toLocaleLowerCase());
    });

    return (
        <>
            <div className="liked-articles-container">
                {" "}
                <div className="liked-articles">
                    {filteredArticles.map(
                        ({
                            id,
                            title,
                            description,
                            img,
                            author,
                            path,
                            tag,
                        }) => {
                            if (isLiked[id] === true) {
                                return (
                                    <div key={id}>
                                        <ArticleListItem
                                            id={id}
                                            title={title}
                                            description={description}
                                            img={img}
                                            author={author}
                                            path={path}
                                            tag={tag}
                                        />
                                    </div>
                                );
                            }
                        }
                    )}
                </div>
                <div className="side-bar">
                    <div className="side-bar-search">
                        <h1 className="side-bar-search-title side-bar-title">
                            Search
                        </h1>
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
                            Mauris imperdiet, urna mi, gravida sod ales. Vivamus
                            hendrerit nulla erat ornare tortor in vestibulum id.
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
