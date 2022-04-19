import React, { useState } from "react";
import details from "../../../../../product/mock";

import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { AiFillStar } from "react-icons/ai";

import { container, starsContainer, header, heart } from "./header.module.css";

export const HeaderRight = () => {
const [favorite, setFavorite] = useState(false)

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
        {
          favorite ?
          <IoMdHeart onClick={()=>setFavorite(false)} size={"1.7rem"} color={"#3483fa"} className={heart} />
            :
          <IoMdHeartEmpty onClick={()=>setFavorite(true)} size={"1.7rem"} color={"#3483fa"} className={heart} />
        }
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
