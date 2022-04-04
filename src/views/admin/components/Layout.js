import React from "react";
import Footer from "./Footer";
import Menu from "./Menu";
import "../adminlte.min.css";
import Header from "./Header";
export default function Layout({ children }) {
  return (
    <div className="hold-transition sidebar-mini">
      <div className="body">
        <header>
          <Header />
          <Menu />
        </header>
        <div className="wrapper">
          <div className="content-wrapper">
            <main className="body">{children}</main>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
