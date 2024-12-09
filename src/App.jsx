import React from "react";
import Router from "./components/Router";
import MainLayout from "./components/Layouts/MainLayout";

function App() {
  return (
    <MainLayout>
      <Router />
    </MainLayout>
  );
}

export default App;
