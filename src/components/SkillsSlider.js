import React from "react";
import { skills } from "./data/skills";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../swiper.css";

// import required modules
import { Autoplay, Pagination } from "swiper";

const SkillsSlider = () => {
  return (
    <>
      <Swiper
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
        min={0}
        max={4}
      >
        {skills.map((item, index) => {
          const { image } = item;
          return (
            <SwiperSlide key={index} min={0} max={4}>
              <div className="flex flex-col items-center justify-center lg:flex-row gap-1 lg:gap-2">
                <div className="w-48 h-48 lg:w-[328px] lg:h-[328px]">
                  <img className="rounded-2xl" src={image} alt="" />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default SkillsSlider;
