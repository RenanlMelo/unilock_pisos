import Image from "next/image";
import React from "react";

export const Inicio = () => {
  return (
    <div className="inicioDiv">
      <Image
        src="/image_bg.jpeg"
        alt="background image"
        width={1920}
        height={1080}
        className="background_image"
        loading="eager"
      />
      <span className="filter" />
      <div className="shadow" />
      <div className="shadow" />
      <section className="inicioSection">
        <div className="leftSection">
          <div>
            <h1 className="title">Unilock Pisos</h1>
            <h2 className="subtitle">Intertravados</h2>
          </div>
          <div className="buttonsDiv">
            <button className="button1">Serviços</button>
            <button className="button2">Sobre nós</button>
          </div>
        </div>
      </section>
    </div>
  );
};
