import React from "react";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
export default function Transactions() {
  return (
    <>
      <div className="body">
        <header>
          <Sidebar />
        </header>
        <section className="section">
          <h1>Transactions</h1>
        </section>
      </div>
      <Footer />
    </>
  );
}