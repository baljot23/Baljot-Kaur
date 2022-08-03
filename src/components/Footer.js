import React from "react";

import { social } from "./data/social";
import BK from "../images/BK.png";

const Footer = () => {
  return (
    <footer className="bg-tertiary p-12">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between">
          <div className="flex space-x-6 items-center justify-center">
            {social.map((item, index) => {
              const { href, icon } = item;
              return (
                <a className="text-accent text-base" href={href} key={index}>
                  {icon}
                </a>
              );
            })}
          </div>
          <div>
            <img src={BK} alt="" className="w-24" />
          </div>
          <p>&copy; 2022 Baljot Kaur. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
