import React from "react";
import reset from "common/reset.css";
import "./Articles.css";

export const Activities = () => {
  return (
    <>
      <main className="main">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-3">
            <div className="main-beach article">
              <div className="main-beach-description description">
                Aenean ligula molstie viverra fermentum
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3">
            <div className="main-smoking article">
              <div className="main-smoking-description description">
                Vitae adipiscing turpis aenean rutrum leo aliquet
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3">
            <div className="main-river article">
              <div className="main-river-description description">
                Suspen disse pellen tesque dui proin cursus magna
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3">
            <div className="main-desert-home article">
              <div className="main-desert-home-description description">
                Proin dui sodales imperdiet sit sapien fames ac luctus
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
