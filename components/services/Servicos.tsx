import Image from "next/image";
import React from "react";

export const Servicos = () => {
  return (
    <>
      <section className="servicos_section">
        <h3>Serviços Oferecidos</h3>
        <Image
          className="servicos_logo"
          src="/logo_servicos.png"
          alt="Logo"
          width={1200}
          height={1200}
        />
        <div className="servicos_div">
          <div className="servicos_div_item">
            <span className="servicos_span_white"></span>
          </div>
          <div className="servicos_div_item">
            <span className="servicos_span"></span>
          </div>
          <div className="servicos_div_item">
            <span className="servicos_span"></span>
          </div>
          <div className="servicos_div_item">
            <span className="servicos_span_big"></span>
          </div>
          <div className="servicos_div_item">
            <span className="servicos_span_big"></span>
          </div>
          <div className="servicos_div_item">
            <span className="servicos_span"></span>
          </div>
          <div className="servicos_div_item">
            <span className="servicos_span"></span>
          </div>
          <div className="servicos_div_item">
            <span className="servicos_span_white"></span>
          </div>
        </div>
      </section>
    </>
  );
};
