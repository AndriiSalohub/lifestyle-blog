import React from "react";

import "./Articles.css";

export const Articles = () => {
  return (
    <section className="articles">
      <div className="articles-first article">
        <div className="articles-first-description description">
          Aenean ligula molstie viverra fermentum
        </div>
      </div>
      <div className="articles-second article">
        <div className="articles-first-description description">
          Vitae adipiscing turpis aenean rutrum leo aliquet
        </div>
      </div>
      <div className="articles-third article">
        <div className="articles-first-description description">
          Suspen disse pellen tesque dui proin cursus magna
        </div>
      </div>
      <div className="articles-fourth article">
        <div className="articles-first-description description">
          Proin dui sodales imperdiet sit sapien fames ac luctus
        </div>
      </div>
    </section>
  );
};
