import React from "react";
import ReactDOM from "react-dom";
import "./views/assets/css/index.css";
import { Provider } from "react-redux";
import { configureStore } from "./application/store";
import services from "./infrastructure/services";
import App from "./views";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";


ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore(services)}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
