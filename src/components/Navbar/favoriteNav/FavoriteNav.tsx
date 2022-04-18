import React, { useReducer } from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsCart2 } from "react-icons/bs";

import user from "../../../assets/user.webp";
import { CardHeaderUser } from "./CardHeaderUser";
import { LinksDetails } from "./LinksDetails";

import { Actions } from "../../../Reducers/ReducerHeaderHov";

import {
  ul,
  svg,
  userImg,
  userConatin,
  cardUser,
  active,
} from "./favorite.module.css";
import { Prop } from "../../../interfaces/nav";

export const FavoriteNav = ({ state, dispatch }: Prop) => {
  const { user: hoverUser } = state;

  const handleHoverOn = () => {
    dispatch({ type: Actions.USER_TRUE });
  };
  const handleHoverOff = () => {
    dispatch({ type: Actions.USER_FALSE });
  };

  return (
    <ul className={ul}>
      <li>
        <div className={userConatin} onMouseEnter={handleHoverOn}>
          <img src={user} className={userImg} alt="user" />
          Goku <MdKeyboardArrowDown className={svg} />
          <div
            onMouseLeave={handleHoverOff}
            className={`${cardUser} ${hoverUser && active}`}
          >
            <CardHeaderUser user={user} />
            <LinksDetails />
          </div>
        </div>
      </li>
      <li onMouseEnter={handleHoverOff}>
        <p>Mis compras</p>
      </li>
      <li onMouseEnter={handleHoverOff}>
        <p>
          Favoritos
          <MdKeyboardArrowDown className={svg} />
        </p>
      </li>
      <li onMouseEnter={handleHoverOff}>
        <IoNotificationsOutline
          style={{ position: "relative", top: "2px" }}
          size={"18px"}
        />
      </li>
      <li onMouseEnter={handleHoverOff}>
        <BsCart2 size={"18px"} />
      </li>
    </ul>
  );
};
