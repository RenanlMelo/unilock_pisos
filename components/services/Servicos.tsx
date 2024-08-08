"use client";

import Image from "next/image";

export const Servicos = () => {
  const var_dictTipos = [
    { modelo: "Pisos Intertravados" },
    { modelo: "Pisos Grama" },
    { modelo: "Guias e Sarjetas" },
    { modelo: "Pisos Drenante" },
  ];

  const var_dictModelos = [
    {
      modelo: "Pisos Intertravados",
      imagens: [
        {
          imagem1: "/intertravado1.jpg",
          imagem2: "/intertravado2.jpg",
          imagem3: "/intertravado2.jpg",
        },
      ],
      nomes: [
        {
          nome1: "10x20",
          nome2: "16 faces",
          nome3: "20x20",
        },
      ],
      cores: [{
        cor1: "bg-red-600",
        cor2: "bg-green-600",
        cor3: "bg-blue-600",
      }]
    },
    {
      modelo: "Pisos Grama",
      imagens: [{ imagem1: "/pisoGrama.jpg" }],
      nomes: [
        {
          nome1: "Piso Grama",
        },
      ],
      cores: [{
        cor1: "bg-red-600",
        cor2: "bg-green-600",
        cor3: "bg-blue-600",
      }]
    },
    {
      modelo: "Guias e Sarjetas",
      imagens: [{ imagem1: "/intertravado1.jpg", imagem2: "/intertravado1.jpg" }],
      nomes: [{ nome1: "Guias", nome2: "Sarjeta" }],
      cores: [{
        cor1: "bg-red-600",
        cor2: "bg-green-600",
        cor3: "bg-blue-600",
      }]
    },
    {
      modelo: "Pisos Drenante",
      imagens: [{ imagem1: "/intertravado1.jpg" }],
      nomes: [{ nome1: "Piso Drenante" }],
      cores: [{
        cor1: "bg-red-600",
        cor2: "bg-green-600",
        cor3: "bg-blue-600",
      }]
    },
  ];

  return (
    <>
      <section className="servicos_section">
        <div className="servicos_title_div">
          <h3>Serviços Oferecidos</h3>
          <h4>Conheça mais sobre nossos modelos</h4>
        </div>
        <div className="servicos_introduction">
          <Image
            className="servicos_logo"
            src="/image_dark_logo.png"
            alt="Logo"
            width={1200}
            height={1200}
            priority={true}
          />
          <div className="servicos_div">
            {var_dictTipos.map((tipo, index) => (
              <div key={index} className="servicos_div_tipo">
                <span className="servicos_span" key={index}>
                  <p>{tipo.modelo}</p>
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="servicos_content">
          {var_dictModelos.map((item, index) => (
            <div
              key={index}
              className="servicos_modelo"
              style={{ gridRowStart: `${index + 1}` }}
            >
              <div>
                <h4>{item.modelo}</h4>
                <span>
                  Cores Disponíveis
                  {item.cores.map((colour, colourIndex) =>
                    Object.values(colour).map((colourStr) =>
                      colourStr ? (
                        <div key={`${colourStr}`} className={`servicos_availableColour ${colourStr}`} />

                      ) : null
                    ))}
                </span>
              </div>
              <div className="servicos_modelo_images">
                <div>

                  {item.imagens.map((image, imgIndex) =>
                    Object.values(image).map((imgSrc, subImgIndex) =>
                      imgSrc ? (

                        <Image
                          key={`${imgIndex}-${subImgIndex}`}
                          src={imgSrc}
                          alt={`${item.modelo} image ${subImgIndex + 1}`}
                          width={500}
                          height={500}
                        />
                      ) : null
                    )
                  )}
                </div>
                <div>

                  {item.nomes.map((nome, nomeIndex) =>
                    Object.values(nome).map((nomeSrc) =>
                      nomeSrc ? (

                        <p>{nomeSrc}</p>
                      ) : null
                    ))}
                </div>
              </div>
              <span className="servicos_division" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
