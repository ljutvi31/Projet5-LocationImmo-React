import React from "react";
import Header from "../Header/index";
import Footer from "../Footer/index";

function MainLayout({ children }) {
  return (
    <div className="layout">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default MainLayout;
