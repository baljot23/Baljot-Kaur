import React from "react";
import { skills } from "./data/skills";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../swiper.css";

// import required modules
import { Autoplay, Pagination, EffectCoverflow } from "swiper";

const SkillsSlider = () => {
  return (
    <>
      <Swiper
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        className="mySwiper "
        min={0}
        max={4}
        slidesPerView={5}
        spaceBetween={30}
        effect={"coverflow"}
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 50,
          modifier: 1,
          slideShadows: false,
        }}
        modules={[Autoplay, Pagination, EffectCoverflow]}
      >
        {skills.map((item, index) => {
          const { image } = item;
          return (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center justify-center lg:flex-row gap-1 lg:gap-2 ">
                <div className="w-42 h-36 lg:w-[330px] lg:h-[320px]">
                  <img className="rounded-2xl bg-black " src={image} alt="" />
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
