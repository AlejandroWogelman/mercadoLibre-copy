import React from "react";
import { filterAtributte } from "../../../helpers/filtersAtributtes";
import data from "../../../product/mock";

interface Prop {
  name: string;
  color: string;
}
export const Table = ({ name, color }: Prop) => {
  const { attributes } = data.product;
  const { principalChars } = filterAtributte(attributes);

  return (
    <>
      {principalChars.map((el) => {
        const condition = el.name === name;
        return condition ? (
          <tr key={el.name} className={color}>
            <th>{el.name}</th>
            <td>{el.value}</td>
          </tr>
        ) : null;
      })}
    </>
  );
};
