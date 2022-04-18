import React from "react";

import detail from "../../../product/mock";
import { BiMap } from "react-icons/bi";
import { IoMedalOutline } from "react-icons/io5";

import { container, box1, box2 } from "./styles.module.css";
import { Blocks } from "./blocks/Blocks";
import { Stats } from "./stats/Stats";
import { Anchor } from "../../Anchor";

export const SellerInfo = () => {
  const { seller_address: address } = detail.product;
  const { city, state } = address;

  return (
    <section className={container}>
      <h2>Información sobre el vendedor</h2>
      <article className={box1}>
        <div>
          <BiMap />
        </div>
        <div>
          <p>Ubicación</p>
          <p>
            {state.name}, {city.name}
          </p>
        </div>
      </article>

      <article className={box2}>
        <div>
          <IoMedalOutline />
        </div>
        <div>
          <p>MercadoLíder Platinum</p>
          <p>¡Es uno de los mejores del sitio!</p>
        </div>
      </article>
      <Blocks />
      <Stats />
    </section>
  );
};
