import React from "react";
import { returnContainer, box, green } from "../../shortDescrip.module.css";

import { BsArrowReturnLeft } from "react-icons/bs";
import { Anchor } from "../../../../Anchor";

export const Devolution = () => {
  return (
    <div className={returnContainer}>
      <BsArrowReturnLeft color="#00a650" size={"1.3rem"} />
      <div className={box}>
        <p className={green}>Devolución gratis</p>
        <p>Tenés 30 días desde que lo recibís</p>
        <Anchor url="/">Conocer más</Anchor>
      </div>
    </div>
  );
};
