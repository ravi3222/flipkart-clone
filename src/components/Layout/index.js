import React, { Children } from "react";
import Header from "../Header";
import MenuHeader from "../MenuHeader";

function Layout({ children }) {
  return (
    <>
      <Header />
      <MenuHeader />
      {children}
    </>
  );
}

export default Layout;
