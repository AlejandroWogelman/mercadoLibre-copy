import React, { useState } from "react";
import details from "../../../../../product/mock";

import { MdKeyboardArrowDown } from "react-icons/md";

import {
  container,
  span,
  rotate,
  borderLeft,
  arrow,
} from "./select.module.css";
import { InputNum } from "./InputNum";

export const Select = () => {
  const [election, setElection] = useState(1);
  const [showUl, SetShowUl] = useState(false);
  const [moreSix, setMoreSix] = useState(false);

  const { initial_quantity } = details.product;

  const stock = [];

  for (let index = 1; index <= initial_quantity; index++) {
    stock.push(index);
  }
  const handleElection = (num: number) => {
    setElection(num);
    SetShowUl(false);
  };

  return (
    <div className={container}>
      <p onClick={() => SetShowUl(!showUl)}>
        Cantidad:{" "}
        <span>{`${election} ${election > 1 ? "unidades" : "unidad"}`}</span>
        <MdKeyboardArrowDown className={showUl ? rotate : arrow} />
      </p>
      {showUl && (
        <ul>
          {stock.map((el, i) => {
            if (el <= 6) {
              return (
                <li key={el} onClick={() => handleElection(el)}>
                  <span className={el === election ? borderLeft : ""}></span>{" "}
                  {`${el} ${el > 1 ? "unidades" : "unidad"}  `}
                </li>
              );
            } else {
              if (i === 6) {
                return (
                  <li key={el} onClick={() => setMoreSix(true)}>
                    {moreSix === false ? (
                      "Más de 6 unidades"
                    ) : (
                      <InputNum
                        setElection={setElection}
                        SetShowUl={SetShowUl}
                        setMoreSix={setMoreSix}
                        stock={initial_quantity}
                      />
                    )}
                  </li>
                );
              }
            }
          })}
        </ul>
      )}
      <span className={span}>({initial_quantity} disponibles)</span>
    </div>
  );
};
