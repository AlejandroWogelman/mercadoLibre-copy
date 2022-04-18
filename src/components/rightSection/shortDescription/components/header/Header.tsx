import React from "react";
import details from "../../../../../product/mock";

import { IoMdHeartEmpty } from "react-icons/io";
import { AiFillStar } from "react-icons/ai";

import { container, starsContainer, header, heart } from "./header.module.css";

export const HeaderRight = () => {
  const {
    title,
    sold_quantity: sales,
    price,
    initial_quantity: stock,
  } = details.product;

  return (
    <div className={container}>
      <span>Nuevo | {sales} vendidos</span>
      <div className={header}>
        <h1>{title}</h1>
        <IoMdHeartEmpty size={"1.7rem"} color={"#3483fa"} className={heart} />
      </div>
      <div className={starsContainer}>
        <AiFillStar color="#3483fa" />
        <AiFillStar color="#3483fa" />
        <AiFillStar color="#3483fa" />
        <AiFillStar color="#3483fa" />
        <AiFillStar color="#3483fa" />
        <span> 4 opiniones</span>
      </div>
    </div>
  );
};
