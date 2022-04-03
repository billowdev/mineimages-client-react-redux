import React from "react";
import Content from "./Content";
import Footer from "../admin/components/Footer";
import Header from "../admin/components/Header";
import Menu from "../admin/components/Menu";

// import Dashboard from "./components/Dashboard";

export default function Users() {
  return (
    <>
      <Header />
      <Menu />
      <Content />
      <Footer />
    </>
  );
}
