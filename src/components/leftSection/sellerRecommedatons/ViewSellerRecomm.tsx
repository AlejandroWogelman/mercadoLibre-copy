import React from "react";
import { Carousel } from "../../Carousel/Carousel";

import data from "../../../product/mock";
import { container, link } from "./styles.module.css";
import { Anchor } from "../../Anchor";

export const SellerRecomendation = () => {
  const { sellerRecomendations } = data.product;

  return (
    <div className={container}>
      <h2>Publicaciones del vendedor</h2>
      <Carousel imagesArray={sellerRecomendations} vistas={3} />
      <div className={link}>
        <Anchor url="/">Ver más publicaciones del vendedor</Anchor>
      </div>
    </div>
  );
};
