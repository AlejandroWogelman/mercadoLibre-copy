import React from "react";
import { BiMessage, BiCheckCircle, BiTime } from "react-icons/bi";
import { Anchor } from "../../../Anchor";

import { container, box, check } from "./style.module.css";

export const Stats = () => {
  return (
    <>
      <div className={container}>
        <div className={box}>
          <strong>3000</strong>
          <p>Ventas en los últimos 60 días</p>
        </div>
        <div className={box}>
          <div>
            <BiMessage size={"1.5rem"} />
            <BiCheckCircle className={check} />
          </div>
          <p>Brinda buena atención</p>
        </div>
        <div className={box}>
          <div>
            <BiTime size={"1.5rem"} /> <BiCheckCircle className={check} />
          </div>
          <p>Despacha sus productos a tiempo</p>
        </div>
      </div>
      <Anchor url="/">
        <span> Ver más datos de este vendedor</span>
      </Anchor>
    </>
  );
};
