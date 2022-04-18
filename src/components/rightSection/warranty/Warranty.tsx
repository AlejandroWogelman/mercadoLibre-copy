import React from "react";
import { Anchor } from "../../Anchor";

import { container } from "./styles.module.css";

export const Warranty = () => {
  return (
    <div className={container}>
      <h2>Garantía</h2>
      <p>Compra Protegida con Mercado Pago</p>
      <small>Recibí el producto que esperabas o te devolvemos tu dinero</small>
      <p>Garantía del vendedor</p>
      <small>Sin garantía</small>
      <Anchor url="/">Conocer más sobre garantía</Anchor>
    </div>
  );
};
