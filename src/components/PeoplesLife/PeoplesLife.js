import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./PeoplesLife.css";

export const PeoplesLife = () => {
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

    const currentCategory = "people";

    return (
        <section className="peoples-life">
            <h2 className="peoples-life-title">People and their life</h2>
            <div className="peoples-life-first-article life-article">
                <div className="peoples-life-first-description life-description">
                    <Link
                        onClick={() => {
                            addRoute(8, "vestibulum-commodo-volutpat-laoreet");
                            detectCategory(currentCategory);
                        }}
                        to="/people/vestibulum-commodo-volutpat-laoreet"
                    >
                        {" "}
                        Vestibulum commodo volutpat laoreet
                    </Link>
                </div>
                <div className="peoples-life-first-article-background article-background"></div>
            </div>
            <div className="peoples-life-second-article life-article">
                <div className="peoples-life-second-description life-description">
                    <Link
                        onClick={() => {
                            addRoute(7, "vestibulum-commodo-volutpat-laoreet");
                            detectCategory(currentCategory);
                        }}
                        to="/people/vestibulum-commodo-volutpat-laoreet"
                    >
                        {" "}
                        Quisque lorem tortor fringilla sed vesti bulum
                    </Link>
                </div>
                <div className="peoples-life-second-article-background article-background"></div>
            </div>
            <div className="peoples-life-third-article life-article">
                <div className="peoples-life-third-description life-description">
                    <Link
                        onClick={() => {
                            addRoute(6, "vivamus-sit-amet-metus-sem-imperdiet");
                            detectCategory(currentCategory);
                        }}
                        to="/people/vivamus-sit-amet-metus-sem-imperdiet"
                    >
                        {" "}
                        Vivamus sit amet metus sem imperdiet
                    </Link>
                </div>
                <div className="peoples-life-third-article-background article-background"></div>
            </div>
        </section>
    );
};
