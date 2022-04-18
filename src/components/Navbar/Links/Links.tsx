import React, { useReducer } from "react";
import { Link } from "react-router-dom";

import { MdKeyboardArrowDown } from "react-icons/md";
import {
  Actions,
  initialState,
  reducerHover,
} from "../../../Reducers/ReducerHeaderHov";

import { ul, container, ulCategories, active } from "./links.module.css";
import { Prop } from "../../../interfaces/nav";

export const Links = ({ state, dispatch }: Prop) => {
  const { categories } = state;

  const handleMouseEvent = (e: React.MouseEvent) => {
    if (e.type === "mouseenter") {
      dispatch({ type: Actions.CATEGORIES_TRUE });
    } else if (e.type === "mouseleave") {
      dispatch({ type: Actions.CATEGORIES_FALSE });
    }
  };

  const links = [
    "Ofertas",
    "Historial",
    "Supermercado",
    "Moda",
    "Vender",
    "Ayuda",
  ];

  const categoryLinks = [
    "Vehículos",
    "Inmuebles",
    "Supermercado",
    "Tecnologia",
    "Hogar y Muebles",
    "Electrodomésticos",
    "Herraminetas",
    "Construccion",
    "Deportes y Fitness",
    "Accesorios para Vehículos",
    "Moda",
    "Juegos y Juguetes",
    "Bebés",
    "Belleza y Cuidado Personal",
    "Salud y Equipamiento Médico",
    "Industrias y Oficinas",
    "Agro",
    "Productos Sustentables",
    "Servicios",
    "Más vendidos",
    "Tiendas oficiales",
    "Ver más categorías",
  ];

  const verifique = () => {
    state.user === true ? dispatch({ type: Actions.CLEAR }) : null;
  };

  return (
    <div className={container} onMouseEnter={verifique}>
      <ul className={ul}>
        <li>
          <Link onMouseEnter={handleMouseEvent} to={"#"}>
            Categorías
            <MdKeyboardArrowDown />
          </Link>
        </li>

        {links.map((name) => (
          <li key={name}>
            <Link
              onMouseEnter={() =>
                categories === true
                  ? dispatch({ type: Actions.CATEGORIES_FALSE })
                  : null
              }
              to={name}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>

      <ul
        className={`${ulCategories} ${categories ? active : ""}`}
        onMouseLeave={handleMouseEvent}
      >
        {categoryLinks.map((name) => (
          <li key={name}>
            <Link to={name}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
