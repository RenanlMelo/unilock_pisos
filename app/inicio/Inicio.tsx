import { Dados } from "@/components/about/Dados";
import Image from "next/image";
import React from "react";

export const Inicio = () => {
  return (
    <>
      <div className="inicio_div">
        <Image
          src="/image_bg.jpeg"
          alt="background image"
          width={1920}
          height={1080}
          className="inicio_background_image"
          loading="eager"
        />
        <span className="inicio_filter" />
        <div className="inicio_shadow" />
        <div className="inicio_shadow" />
        <section className="inicio_section">
          <div>
            <h1 className="inicio_title">Unilock Pisos</h1>
            <h2 className="inicio_subtitle">Intertravados</h2>
          </div>
          <div className="inicio_buttons_div">
            <button className="inicio_button1">Serviços</button>
            <button className="inicio_button2">Sobre nós</button>
          </div>
        </section>
      </div>
      
      <Dados />
    </>
  );
};
