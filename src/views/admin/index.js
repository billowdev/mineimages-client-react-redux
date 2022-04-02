import React from "react";
import "./index.css";

import Header from "./components/Header";
import Menu from "./components/Menu";
import Content from "./components/Content";
import Footer from "./components/Footer";
export default function Admin() {
  return (
    <>
      <Header />
      <Menu />
      <Content />
      <Footer />
    </>
  );
}
