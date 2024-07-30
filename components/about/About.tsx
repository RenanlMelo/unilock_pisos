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
          className="sobre_background_image"
        />
        <span className="sobre_filter" />

        <h3>Sobre Nós</h3>
        <div className="sobre_div">
          <p>
            A Unilock Pisos está a 23 anos no mercado de instalações de pisos
            intertravados, 10 anos no Sul da Florida (EUA) e agora 13 anos no
            Brasil se tornando a maior e mais importante deste setor, agora
            localizada em Sorocaba e atendendo toda região, pretendemos manter a
            mesma qualidade nas instalações de pisos intertravados.
          </p>
          <div>
            <p>
              Se você está pensando em construir ou reformar, não deixe de nos
              consultar.
            </p>
            <ul>
              <li>
                Nossos profissionais são altamente qualificados para realizar
                projetos de todos os tamanhos.{" "}
              </li>
              <li>
                Possuímos vasta experiência na realização de projetos
                residenciais e comerciais, atendendo todos os mais altos padrões
                de qualidade exigidos pelo mercado.{" "}
              </li>
              <li>
                A Unilock possui equipamentos de ultima geração, garantido desta
                forma a qualidade e o prazo de execução de seu projeto,
                superando as expectativas de nossos clientes.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
