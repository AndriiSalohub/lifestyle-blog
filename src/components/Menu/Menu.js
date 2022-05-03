import React from "react";

import "./Menu.css";
import { Navigation } from "./Navigation";
import { MobileNavigation } from "./MobileNavigation";

export const Menu = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
              <div className="header-logo"></div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-9">
              <nav className="header-menu">
                <Navigation />
                <MobileNavigation />
              </nav>
            </div>
            <div className="col-xs-12">
              <div className="header-img"></div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
