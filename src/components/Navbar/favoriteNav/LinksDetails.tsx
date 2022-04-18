import React from "react";
import { Link } from "react-router-dom";

import { linksDetailsContainer, hr } from "./favorite.module.css";

export const LinksDetails = () => {
  const links: string[] = [
    "Compras",
    "Preguntas",
    "Mercado Crédito",
    "Películas y series",
    "Vender",
    "Resumen",
    "Novedades",
    "Publicaciones",
    "Ventas",
    "Facturación",
    "Mercado Shops",
    "Mis datos",
    "Seguridad",
    "Privacidad",
    "Salir",
  ];
  const lines: number[] = [1, 3, 10, 13];

  const breakLine = (id: number) => {
    return lines.includes(id);
  };
  return (
    <div className={linksDetailsContainer}>
      {links.map((link, id) => {
        if (breakLine(id)) {
          return (
            <div
              key={id + 200}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <Link to={link}>{link}</Link>
              <span className={hr}></span>
            </div>
          );
        } else {
          return (
            <Link key={link + id} to={link}>
              {link}
            </Link>
          );
        }
      })}
    </div>
  );
};
