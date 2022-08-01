import React from "react";
import web from "../images/web.gif";

const About = () => {
  return (
    <section className="section bg-secondary id='about'">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24">
          <img
            className="object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl"
            src={web}
            alt=""
          />
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2 className=" text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before::opacity-40 before:-top-[2rem] before:hidden before:lg:block">
                Baljot Kaur
              </h2>
              <p className="mb-4 text-accent ">Freelance Web Developer</p>
              <hr className="mb-8 opacity-5" />
              <p className="mb-8 text-white">
                I'm a certified Web Developer and a self-taught Graphic
                Designer. Mainly a Front-End Developer whose open to obtaining
                Backend experience.
              </p>
            </div>
            <button class="mt-10 px-6 py-2 font-sans font-semibold text-white transition duration-300 ease-in-out delay-300 skew-x-6 bg-indigo-400 border-b-4 border-indigo-900 rounded shadow-lg hover:transform-none hover:border-indigo-300">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
