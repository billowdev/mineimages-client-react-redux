import React from "react";
import ReactDOM from "react-dom";
import "./views/assets/css/index.css";
import App from "./views";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter as Router } from "react-router-dom";

import { Provider } from "react-redux";
import { configureStore } from "./application/store";
import services from "./infrastructure/services";
import { PersistGate } from "redux-persist/lib/integration/react";
import { persistStore } from "redux-persist";
const persistor = persistStore(configureStore(services));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore(services)}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <App />
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
