import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTopButtom from "./components/BackToTopButton";

const App = () => {
  return (
    <div className="bg-white relative">
      <div style={{ height: "2000px" }}>
        <Header />
        <Hero />
        <Skills />
        <About />
        <Portfolio />
        <Services />
        {/* <Testimonials /> */}
        <Contact />
        <Footer />
        <BackToTopButtom />
      </div>
    </div>
  );
};

export default App;
