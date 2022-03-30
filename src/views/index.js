import "./assets/css/style.css";
import React, { useEffect } from "react";
import NavbarComponent from "./components/NavbarComponent";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";



function App() {
  return (
    <>
      <div>
        <Toaster />
      </div>
      <NavbarComponent />
      <Home />
      <Footer />

   
    </>
  );
}

export default App;
