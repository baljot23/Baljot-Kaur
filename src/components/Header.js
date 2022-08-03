import React, { useState, useEffect } from "react";
import BK from "../images/BK.png";
import Nav from "../components/Nav";
import NavMobile from "../components/NavMobile";
import Socials from "../components/Socials";

const Header = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  }, []);

  return (
    //When you scroll up the header turns black
    <header
      className={`${
        bg ? "bg-indigo-300 h-20" : "h-24"
      } flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300`}
    >
      <div className="container mx-auto h-full flex items-center justify-between">
        {/*Logo*/}
        <a href="/home">
          <img
            src={BK}
            alt=""
            className="w-24 hover:scale-[1.3] ease-out duration-500"
          />
        </a>

        {/* Nav*/}
        <div className="hidden lg:block">
          <Nav />
        </div>

        {/* Socials*/}
        <div className="hidden lg:block">
          <Socials />
        </div>

        {/* NavMobile*/}
        <div className="lg:hidden">
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
