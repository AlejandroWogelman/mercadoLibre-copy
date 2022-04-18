import React, { useReducer } from "react";

import logo from "../../assets/logo.png";
import disneySub from "../../assets/disneySubs1.png";

import { Address } from "./address/Address";
import { InputNav } from "./input/InputNav";
import { Links } from "./Links/Links";
import { Link } from "react-router-dom";
import { FavoriteNav } from "./favoriteNav/FavoriteNav";
import {
  Actions,
  initialState,
  reducerHover,
} from "../../Reducers/ReducerHeaderHov";

import {
  box1Container,
  header,
  col,
  box2Container,
  imgLogo,
  container,
  subsContainer,
} from "./Nav.module.css";


export const Nav = () => {
  const [state, dispatch] = useReducer(reducerHover, initialState);

  const clear = () => {
    dispatch({ type: Actions.CLEAR });
  };

  return (
    <header className={header}>
      <div className={container}>
        <div className={box1Container}>
          <div className={col} onMouseEnter={clear}>
            <div className={imgLogo}>
              <img src={logo} alt="logo-meli" />
            </div>
            <InputNav />
          </div>
          <div className={col}>
            <Address clear={clear} />
            <Links state={state} dispatch={dispatch} />
          </div>
        </div>
        <div className={box2Container}>
          <div className={subsContainer} onMouseEnter={clear}>
            <Link to="/">
              <img src={disneySub} alt="disney-sub" />
            </Link>
          </div>
          <FavoriteNav state={state} dispatch={dispatch} />
        </div>
      </div>
    </header>
  );
};
