import React from "react";
import { Link } from "react-router-dom";

import "./PeoplesLife.css";

export const PeoplesLife = () => {
    return (
        <section className="peoples-life">
            <h2 className="peoples-life-title">People and their life</h2>
            <div className="peoples-life-first-article life-article">
                <div className="peoples-life-first-description life-description">
                    <Link to="/people">
                        {" "}
                        Vestibulum commodo volutpat laoreet
                    </Link>
                </div>
                <div className="peoples-life-first-article-background article-background"></div>
            </div>
            <div className="peoples-life-second-article life-article">
                <div className="peoples-life-second-description life-description">
                    <Link to="/people">
                        {" "}
                        Quisque lorem tortor fringilla sed vesti bulum
                    </Link>
                </div>
                <div className="peoples-life-second-article-background article-background"></div>
            </div>
            <div className="peoples-life-third-article life-article">
                <div className="peoples-life-third-description life-description">
                    <Link to="/people">
                        {" "}
                        Vivamus sit amet metus sem imperdiet
                    </Link>
                </div>
                <div className="peoples-life-third-article-background article-background"></div>
            </div>
        </section>
    );
};
