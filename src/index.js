import React from "react";
import ReactDOM from "react-dom";
import { App } from "containers/App/App";
import { BrowserRouter } from "react-router-dom";

/*const el = (
  <div>
    <h1> Hello React.js </h1>
  </div>
);npm
*/

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
