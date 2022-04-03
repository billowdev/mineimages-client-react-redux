import React from "react";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Menu from "./components/Menu";

// import Dashboard from "./components/Dashboard";

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
