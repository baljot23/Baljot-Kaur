import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="lg:h-[85vh] flex items-center bg-black lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden"
    >
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full pt-8">
          <div className="flex-1 flex flex-col items-center lg:item-start ">
            <p className="text-2xl text-indigo-200 mb-[22px]">
              Hey, I'm Baljot
            </p>
            <h1
              className="text-6xl font-semibold 
            bg-gradient-to-r bg-clip-text  text-transparent 
            from-indigo-300 via-violet-400 to-indigo-300
            animate-text items-center text-center leading-[96px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[2] md:tracking-[-2px]"
            >
              I Build & Design Websites.
            </h1>
            <a className="mt-10 px-6 py-2 font-sans font-semibold text-white transition duration-300 ease-in-out delay-300 skew-x-6 bg-indigo-400 border-b-4 border-indigo-900 rounded shadow-lg hover:transform-none hover:border-indigo-300">
              Work With Me
            </a>

            {/*Creating websites that engage users.I build websites that build your business.*/}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
