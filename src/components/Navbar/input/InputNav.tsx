import React from "react";

import { inputContainer } from "./inputNav.module.css";

export const InputNav = () => {
  return (
    <div className={inputContainer}>
      <input type="text" placeholder="Buscar productos, marcas y más..." />
    </div>
  );
};
