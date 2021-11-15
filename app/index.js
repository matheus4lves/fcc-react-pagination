import React from "react";
import ReactDOM from "react-dom";
import "./styles/styles.scss";
import "./styles/pagination.scss";

import Main from "./Main";

ReactDOM.render(<Main />, document.getElementById("app"));

if (module.hot) {
  module.hot.accept("./Main", () => {
    const UpdatedApp = require("./Main").default;
    ReactDOM.render(<UpdatedApp />, document.getElementById("app"));
  });
}
