import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Header = () => {
  const navbarItems = [
    { name: "Início", id: "inicio", href: "" },
    { name: "Serviços", id: "servicos", href: "servicos" },
    { name: "Obras", id: "obras", href: "obras" },
    { name: "Sobre", id: "sobre", href: "sobre" },
  ];

  return (
    <header className="header">
      <div className="logo_div">
        <Image
          src="/logo.png"
          alt="logo"
          width={200}
          height={200}
          className="logo"
        />
        <h1 className="logo_title">Unilock Pisos</h1>
      </div>
      <nav className="navbar">
        {navbarItems.map((item, index) => (
          <Link href={item.href} className="navItem">
            {item.name}
          </Link>
        ))}
      </nav>
      <Link href="/contato" className="contactButton">
        Contato
      </Link>
    </header>
  );
};
