import React from "react";

import { brands } from "./data/brands";

const Brands = () => {
  return (
    <section className="min-h-[14px] lg:h-32  bg-indigo-300 flex items-center">
      <div className="mx-auto flex md:justify-between items-center flex-wrap justify-evenly space-x-10">
        {brands.map((brand, index) => {
          return (
            <div key={index}>
              <a href={brand.href}>
                <img src={brand.img} alt="" className="w-60 cursor-pointer" />
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Brands;
