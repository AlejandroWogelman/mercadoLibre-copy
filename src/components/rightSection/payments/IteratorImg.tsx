import React from "react";

import { img, picture } from "./styles.module.css";
interface Prop {
  imgs: string[];
}

export const IteratorImg = ({ imgs }: Prop) => {
  return (
    <picture className={picture}>
      {imgs.map((el) => (
        <img className={img} loading="lazy" key={el} src={el} alt="payment" />
      ))}
    </picture>
  );
};
