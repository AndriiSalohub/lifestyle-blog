import React from "react";
import reset from "common/reset.css";
import "./Menu.css";
import { Navigation } from "./Navigation";
import { MobileNavigation } from "./MobileNavigation";

export const Menu = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-3">
              <div className="header-logo"></div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-9">
              <Navigation />
              <MobileNavigation />
            </div>
            <div className="col-xs-12">
              <div className="header-photo"></div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
