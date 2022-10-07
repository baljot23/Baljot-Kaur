import React from "react";
import { Link } from "react-scroll";
import { navigation } from "./data/navigation";

const Nav = () => {
  return (
    <nav>
      <ul className="flex space-x-8 capitalize text-[15px]">
        {navigation.map((item, index) => {
          return (
            <li
              className="text-white hover:text-indigo-500 cursor-pointer"
              key={index}
            >
              <Link
                to={item.href}
                activeClass="active"
                smooth={true}
                duration={500}
                offset={-70}
                className="transition-all duration-300"
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
