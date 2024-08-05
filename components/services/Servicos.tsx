import Image from "next/image";
import React from "react";

export const Servicos = () => {
  const var_dictModelos = [
    { modelo: "Modelo 1", imagem: "/image1.png" },
    { modelo: "Modelo 2", imagem: "/image2.png" },
    { modelo: "Modelo 3", imagem: "/image3.png" },
    { modelo: "Modelo 4", imagem: "/image4.png" },
    { modelo: "Modelo 5", imagem: "/image5.png" },
    { modelo: "Modelo 6", imagem: "/image6.png" },
  ];

  return (
    <>
      <section className="servicos_section">
        <h3>Serviços Oferecidos</h3>

        <div className="servicos_introduction">
          <Image
            className="servicos_logo"
            src="/logo_servicos.png"
            alt="Logo"
            width={1200}
            height={1200}
          />
          <div className="servicos_div">
            {/* <div className="servicos_div_item">
              <span className="servicos_span_white"></span>
            </div> */}
            <div className="servicos_div_item">
              <span className="servicos_span">
                <p>Modelo 1</p>
              </span>
            </div>
            <div className="servicos_div_item">
              <span className="servicos_span">
                <p>Modelo 2</p>
              </span>
            </div>
            <div className="servicos_div_item">
              <span className="servicos_span">
                <p>Modelo 3</p>
              </span>
            </div>
            <div className="servicos_div_item">
              <span className="servicos_span">
                <p>Modelo 4</p>
              </span>
            </div>
            {/* <div className="servicos_div_item">
              <span className="servicos_span_white"></span>
            </div> */}
          </div>
        </div>

        <div className="servicos_content">
          {var_dictModelos.map((item, index) => (
            <div
              key={index}
              className="servicos_modelo"
              style={{ gridRowStart: `${index + 1}` }}
            >
              <span className="servicos_separador" />
              <h4 className="servicos_modelo_title">{item.modelo}</h4>
              {/* <Image className="servicos_modelo_image"></Image> */}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
