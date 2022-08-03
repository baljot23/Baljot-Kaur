import React from "react";
import { services } from "./data/services";

const Services = () => {
  return (
    <section id="services" className="section bg-tertiary items-center">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-services relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-28 before:hidden before:lg:block">
            Services
          </h2>
          <p className="subtitle">
            I help create all types of web-based software and ensure great
            experience for web users.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-4 ">
          {services.map((service, index) => {
            const { icon, name, description } = service;
            return (
              <div className="bg-secondary p-6 rounded-2xl" key={index}>
                <div className="text-accent rounded-sm w-12 h-12 flex justify-center items-center mb-10 text-[28px]">
                  {icon}
                </div>
                <h4 className="textxl font-medium mb-3">{name}</h4>
                <p>{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
