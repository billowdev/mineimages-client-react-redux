import React from "react";
import ReactDOM from "react-dom";
import "./views/assets/css/index.css";
import { Provider } from "react-redux";
import { configureStore } from "./application/store";
import services from "./infrastructure/services";
import App from "./views";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Signin from "./views/components/Signin";
import Signup from "./views/components/Signup";
import Profile from "./views/components/Profile";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore(services)}>
      <Router>
        <Routes>
          <Route path="/" exact element={<App />}></Route>
          <Route path="/register" element={<Signup />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/profile" element={<Profile />} exact />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
