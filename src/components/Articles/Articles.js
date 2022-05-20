import React from "react";
import { Link } from "react-router-dom";

import "./Articles.css";

export const Articles = () => {
    return (
        <section className="articles">
            <div className="articles-first article">
                <div className="articles-first-description description">
                    <Link to="/hot-articles">
                        Aenean ligula molstie viverra fermentum
                    </Link>
                </div>
            </div>
            <div className="articles-second article">
                <div className="articles-first-description description">
                    <Link to="/hot-articles">
                        Vitae adipiscing turpis aenean rutrum leo aliquet
                    </Link>
                </div>
            </div>
            <div className="articles-third article">
                <div className="articles-first-description description">
                    <Link to="/hot-articles">
                        Suspen disse pellen tesque dui proin cursus magna
                    </Link>
                </div>
            </div>
            <div className="articles-fourth article">
                <div className="articles-first-description description">
                    <Link to="/hot-articles">
                        Proin dui sodales imperdiet sit sapien fames ac luctus
                    </Link>
                </div>
            </div>
        </section>
    );
};
