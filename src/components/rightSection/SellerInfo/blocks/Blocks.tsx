import React from "react";

import {
  containerBlocks,
  box,
  box1,
  box2,
  box3,
  box4,
  box5,
} from "./style.module.css";
export const Blocks = () => {
  return (
    <ul className={containerBlocks}>
      <li className={`${box} ${box1}`}></li>
      <li className={`${box} ${box2}`}></li>
      <li className={`${box} ${box3}`}></li>
      <li className={`${box} ${box4}`}></li>
      <li className={`${box} ${box5}`}></li>
    </ul>
  );
};
