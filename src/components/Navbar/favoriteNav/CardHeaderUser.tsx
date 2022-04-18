import React, { HtmlHTMLAttributes, ImgHTMLAttributes } from "react";
import suscribe from "../../../assets/Suscribete.svg";

import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import {
  header,
  imgDetail,
  detailsUser,
  pDetail,
  hr,
} from "./favorite.module.css";

interface User {
  user: string;
}
export const CardHeaderUser = ({ user }: User) => {
  return (
    <>
      <div className={header}>
        <img className={imgDetail} src={user} alt="user-img" />
        <div className={detailsUser}>
          <p>Hola Goku</p>
          <p className={pDetail}>
            Nivel 3 - Mercado Puntos{" "}
            <MdOutlineKeyboardArrowRight size={"1.5rem"} />
          </p>
          <img src={suscribe} alt="subscription" width="100%" />
        </div>
      </div>
      <span className={hr}></span>
    </>
  );
};
