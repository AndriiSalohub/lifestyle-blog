import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./Articles.css";

export const Articles = () => {
    const dispatch = useDispatch();

    const addRoute = (id, path) => {
        dispatch({
            type: "ADD_PATH",
            id,
            path,
        });
    };

    const detectCategory = (category) => {
        dispatch({
            type: "CATEGORY",
            category,
        });
    };

    const currentCategory = "hot-articles";

    return (
        <section className="articles">
            <div className="articles-first article">
                <div className="articles-first-description description">
                    <Link
                        onClick={() => {
                            addRoute(
                                4,
                                "aenean-ligula-molstie-viverra-fermentum"
                            );
                            detectCategory(currentCategory);
                        }}
                        to="/hot-articles/aenean-ligula-molstie-viverra-fermentum"
                    >
                        Aenean ligula molstie viverra fermentum
                    </Link>
                </div>
            </div>
            <div className="articles-second article">
                <div className="articles-first-description description">
                    <Link
                        onClick={() => {
                            addRoute(
                                3,
                                "vitae-adipiscing-turpis-aenean-rutrum-leo-aliquet"
                            );
                            detectCategory(currentCategory);
                        }}
                        to="/hot-articles/vitae-adipiscing-turpis-aenean-rutrum-leo-aliquet"
                    >
                        Vitae adipiscing turpis aenean rutrum leo aliquet
                    </Link>
                </div>
            </div>
            <div className="articles-third article">
                <div className="articles-first-description description">
                    <Link
                        onClick={() => {
                            addRoute(
                                2,
                                "suspen-disse-pellen-tesque-dui-proin-cursus-magna"
                            );
                            detectCategory(currentCategory);
                        }}
                        to="/hot-articles/suspen-disse-pellen-tesque-dui-proin-cursus-magna"
                    >
                        Suspen disse pellen tesque dui proin cursus magna
                    </Link>
                </div>
            </div>
            <div className="articles-fourth article">
                <div className="articles-first-description description">
                    <Link
                        onClick={() => {
                            addRoute(
                                1,
                                "proin-dui-sodales-imperdiet-sit-sapien-fames-ac-luctus"
                            );
                            detectCategory(currentCategory);
                        }}
                        to="/hot-articles/proin-dui-sodales-imperdiet-sit-sapien-fames-ac-luctus"
                    >
                        Proin dui sodales imperdiet sit sapien fames ac luctus
                    </Link>
                </div>
            </div>
        </section>
    );
};
