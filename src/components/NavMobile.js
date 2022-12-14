import React, { useState } from "react";
import { navigation } from "./data/navigation";
import { IoCloseSharp, IoMdClose, IoMdMenu, IoMenuSharp } from "react-icons/io";
import Socials from "./Socials";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const circleVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 180,
      transition: {
        type: "spring",
        stiffness: 160,
        damping: 60,
      },
    },
  };

  const ulVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
      },
    },
  };

  return (
    <nav className="relative">
      {/*Menu Icon*/}
      <div
        onClick={() => setIsOpen(true)}
        className="cursor-pointer text-white"
      >
        <IoMdMenu className="w-8 h-8 " />
      </div>

      <motion.div
        variants={circleVariants}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        className="w-7 h-12 rounded-full bg-indigo-300 fixed top-0 right-0"
      ></motion.div>

      <motion.ul
        variants={ulVariants}
        initial="hidden"
        animate={isOpen ? "visible" : ""}
        className={`${
          isOpen ? "right-0" : "-right-full"
        } fixed top-0 bottom-0 w-full flex flex-col justify-center items-center transition-all duration-300 overflow-hidden`}
      >
        <div
          onClick={() => setIsOpen(false)}
          className="cursor-pointer absolute top-8 right-8"
        >
          <IoMdClose className="w-8 h-10 " />
        </div>
        {navigation.map((item, index) => {
          return (
            <li key={index} className="mb-8">
              <Link
                to={item.href}
                smooth={true}
                duration={500}
                offset={-70}
                className="text-xl cursor-pointer capitalize group text-white transition-all duration-300 ease-in-out"
              >
                <span
                  onClick={() => setIsOpen(false)}
                  className="bg-left-bottom bg-gradient-to-r from-violet-600 to-indigo-300 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_4px] transition-all duration-500 ease-out"
                >
                  {item.name}
                </span>
              </Link>
            </li>
          );
        })}
      </motion.ul>
    </nav>
  );
};

export default NavMobile;
