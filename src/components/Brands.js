import React from "react";

import { brands } from "./data/Brands";

const Brands = () => {
  return (
    <section className="min-h-[146px] bg-gray-800 flex items-center">
      <div className="mx-auto flex md:justify-between items-center flex-wrap justify-evenly space-x-10">
        {brands.map((brand, index) => {
          return (
            <div key={index}>
              <img src={brand.img} alt="" className="w-40" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Brands;
