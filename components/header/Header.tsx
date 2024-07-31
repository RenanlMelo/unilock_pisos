"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export const Header = () => {
  const [path, setPath] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPath(window.location.pathname);
      if (path === "/sobre") {
        const headerColor = document.getElementsByClassName("header");

        if (headerColor !== null) {
        }
      }
    }
  }, []);

  const navbarItems = [
    { name: "Início", id: "inicio", href: "/" },
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
          <Link key={index} href={item.href} className="navItem">
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
