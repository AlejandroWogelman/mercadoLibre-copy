import React from "react";
import { Anchor } from "../../../../Anchor";

import { BsTruck } from "react-icons/bs";
import { shippingContainer, box, green } from "../../shortDescrip.module.css";

export const Shipping = () => {
  return (
    <div className={shippingContainer}>
      <BsTruck size={"1.3rem"} color="#00a650" />
      <div className={box}>
        <p style={{ fontSize: "1rem" }}>
          <span className={green}>Llega</span>{" "}
          <span className={green}>hoy</span> por $800
        </p>
        <Anchor url="/">Ver más formas de entrega</Anchor>
      </div>
    </div>
  );
};
