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
      <section className="carouselSection">
        {/* <h1 className="lastClients">
          Últimos projetos
        </h1> */}
        <Swiper
          className="carousel"
          slidesPerView={1}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          spaceBetween={100}
          loop={true}
          breakpoints={{
            // 1280: {
            //   slidesPerView: 3,
            // },
            // 768: {
            //   slidesPerView: 2,
            // }
          }}
        >
          <SwiperSlide className="carouselItem">
          </SwiperSlide>
          <SwiperSlide className="carouselItem">
          </SwiperSlide>
          <SwiperSlide className="carouselItem">
          </SwiperSlide>
          <SwiperSlide className="carouselItem">
          </SwiperSlide>
          <SwiperSlide className="carouselItem">
          </SwiperSlide>

        </Swiper >
      </section>
    </>
  );
}