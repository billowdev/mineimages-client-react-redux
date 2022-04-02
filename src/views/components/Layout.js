import React from "react";
import FooterComponent from "./FooterComponent";
import NavbarComponent from "./NavbarComponent";
export default function Layout({ children }) {
  return (
    <>
      <header>
        <NavbarComponent />
      </header>
      <main>{children}</main>
      <FooterComponent />
    </>
  );
}
