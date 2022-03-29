import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavbarComponent from "./components/NavbarComponent";
import { getStatus } from "../application/selectors/auth";
import { isAuthAction } from "../application/actions/auth";
import { Button } from "react-bootstrap";
import Signin from "./components/Signin";
import Home from "./components/Home";
import Footer from "./components/Footer";
import "./assets/css/style.css";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
function App() {
  // const authStatus = useSelector(getStatus);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(isAuthAction());
  // }, [dispatch]);

  return (
    <>
      <div>
        <Toaster />
      </div>

      <NavbarComponent />
      <Home />
      <Signin />
      <Footer />
    </>
  );
}

export default App;
