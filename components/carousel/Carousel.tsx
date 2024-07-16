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
      <section className="flex justify-center items-center w-full h-full bg-[#3E475C]">

        <Swiper
          className="h-[70vh] w-[90vw] flex justify-center items-center"
          slidesPerView={1}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          spaceBetween={100}
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
          <SwiperSlide className="bg-[#101010] shadow-card_carousel">
          </SwiperSlide>
          <SwiperSlide className="bg-[#202020] shadow-card_carousel">
          </SwiperSlide>
          <SwiperSlide className="bg-[#303030] shadow-card_carousel">
          </SwiperSlide>
          <SwiperSlide className="bg-[#404040] shadow-card_carousel">
          </SwiperSlide>
          <SwiperSlide className="bg-[#505050] shadow-card_carousel">
          </SwiperSlide>

        </Swiper >
      </section>
    </>
  );
}