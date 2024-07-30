import Image from "next/image";
import React from "react";

export const About = () => {
  return (
    <>
      <section className="sobre_section">
        <Image
          src="/sobre_image.png"
          alt="image de fundo"
          width={1920}
          height={1080}
        />
      </section>
    </>
  );
};
