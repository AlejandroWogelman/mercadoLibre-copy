import React from "react";
import { Anchor } from "../../Anchor";

import { container } from "./styles.module.css";

export const Returns = () => {
  return (
    <div className={container}>
      <h2>Devolución gratis</h2>
      <p>
        Tenés 30 días desde que recibís el producto para devolverlo. ¡No importa
        el motivo!
      </p>
      <Anchor url="/">Conocer más sobre devoluciones</Anchor>
    </div>
  );
};
