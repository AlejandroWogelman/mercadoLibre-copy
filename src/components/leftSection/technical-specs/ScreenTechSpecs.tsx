import React from "react";
import { Table } from "./Table";
import { filterAtributte } from "../../../helpers/filtersAtributtes";
import mock from "../../../product/mock";

import { container, table, dark, light, others } from "./style.module.css";

export const ScreenTechSpecs = () => {
  const { attributes } = mock.product;
  const { othersChars } = filterAtributte(attributes);

  
  return (
    <div className={container}>
      <h2>Características principales</h2>
      <table className={table}>
        <tbody>
          <Table color={dark} name="Marca" />

          <Table color={light} name="Modelo" />

          <Table color={dark} name="Franquicia" />

          <Table color={light} name="Animal" />

          <Table color={dark} name="Personaje" />
        </tbody>
      </table>
      <div className={others}>
        <h3>Otras características</h3>
        <div>
          {othersChars.map((el) => {
            return (
              <p key={el.name}>
                <span>{el.name}: </span>
                {el.value}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};
