"use client";

import Link from "next/link";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { register } from "swiper/element/bundle";
register();
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";


export const Carousel = () => {

  return (
    <>
      <Swiper
      className="h-[100vh] flex justify-center items-center"
        slidesPerView={1}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        spaceBetween={50}
        loop={true}
        breakpoints={{
          1280: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2,
          }
        }}
      >
        <SwiperSlide className="bg-[#101010] w-full h-full">1
        </SwiperSlide>
        <SwiperSlide className="bg-[#202020] w-full h-full">2
        </SwiperSlide>
        <SwiperSlide className="bg-[#303030] w-full h-full">3
        </SwiperSlide>
        <SwiperSlide className="bg-[#404040] w-full h-full">4
        </SwiperSlide>
        <SwiperSlide className="bg-[#505050] w-full h-full">5
        </SwiperSlide>

      </Swiper >
    </>
  );
}