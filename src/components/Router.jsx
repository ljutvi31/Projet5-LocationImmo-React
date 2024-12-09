import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import Housing from "../pages/housing";
import Error from "../pages/error";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/housing/:id" element={<Housing />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default Router;
