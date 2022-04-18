import React from "react";
import { HeaderRight } from "./components/header/Header";
import { Price } from "./components/price/Price";
import { Shipping } from "./components/shipping/Shipping";
import { Devolution } from "./components/devolution/Devolution";
import { Select } from "./components/select/Select";

import { BiCheckShield } from "react-icons/bi";
import { IoTrophyOutline } from "react-icons/io5";

import { container, stockP, btnBuy, btnCart } from "./shortDescrip.module.css";

import { TrophyShield } from "./components/TrophyShield";

export const ScreenDescript = () => {
  return (
    <div className={container}>
      <HeaderRight />
      <Price />
      <Shipping />
      <Devolution />
      <p className={stockP}>Stock disponible</p>
      <Select />

      <button type="button" className={btnBuy}>
        Comprar ahora
      </button>
      <button type="button" className={btnCart}>
        Agregar al carrito
      </button>

      <TrophyShield
        anchorText="Compra Protegida"
        text="recibí el producto que esperabas o te devolvemos tu dinero."
      >
        <BiCheckShield />
      </TrophyShield>

      <TrophyShield anchorText="Mercado Puntos" text="Sumás 60 puntos.">
        <IoTrophyOutline />
      </TrophyShield>
    </div>
  );
};
