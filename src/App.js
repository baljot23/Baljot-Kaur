import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Brands from "./components/Brands";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Brands />
      <div style={{ height: "2000px" }}></div>
    </div>
  );
};

export default App;
