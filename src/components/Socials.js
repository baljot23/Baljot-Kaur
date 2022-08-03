import React from "react";
import { social } from "./data/socials";
import { FiDownload } from "react-icons/fi";
import cv from "../images/cv.pdf";

const Socials = () => {
  return (
    <div>
      <ul className="flex space-x-6 ">
        {social.map((item, index) => {
          return (
            <li
              className="flex justify-center items-center text-indigo-400 hover:scale-[2] ease-out duration-500"
              key={index}
            >
              <a className="text-base" href={item.href}>
                {item.icon}
              </a>
            </li>
          );
        })}
        <a href={cv} download>
          <FiDownload className="flex justify-center items-center text-indigo-400 hover:scale-[2] ease-out duration-500" />
        </a>
      </ul>
    </div>
  );
};

export default Socials;
