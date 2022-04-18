import React from "react";

import data from "../../../../../product/mock";
import {
  container,
  priceContainer,
  priceCont,
  dollar,
  mLeft,
} from "./price.module.css";
import { BsCurrencyDollar } from "react-icons/bs";
import { Anchor } from "../../../../Anchor";

export const Price = () => {
  const { price } = data.product;
  const newPrice = price
    .toLocaleString()
    .split("")
    .map((el) => (el === "," ? (el = ".") : el))
    .join("");

  return (
    <div className={container}>
      <div className={priceContainer}>
        <div>
          <span className={dollar}>
            <BsCurrencyDollar />
          </span>
          <span className={priceCont}>{newPrice}</span>
        </div>
        <span className={mLeft}>en 1x ${newPrice}</span>
      </div>
      <Anchor url="/">Ver los medios de pago</Anchor>
    </div>
  );
};
