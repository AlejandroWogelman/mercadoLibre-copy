import React, { useState } from "react";
import { Anchor } from "../../Anchor";
import { InputQuestion } from "./InputQuestion";

import { container, ul, li, p } from "./styles.module.css";

const initialState = [
  "Hola buen día, tenés en rosa gracias.",
  "Quiero el celeste, pero no esta la opción del color, como hago?",
  "Hola buenas tardes, te quedan en stock?",
];

export const Questions = () => {
  const [questions, setQuestions] = useState<string[]>(initialState);

  const fixedQuestions: string[] = [
    "Costo y tiempo de envío",
    "Devoluciones gratis",
    "Medios de pago y promociones",
    "Garantía",
    "Cuotas sin tarjeta",
  ];

  const changeState = (text: string) => {
    setQuestions([text, ...questions]);
  };

  return (
    <div className={container}>
      <h2>Preguntas y respuestas</h2>
      <h3>¿Qué querés saber?</h3>
      <ul className={ul}>
        {fixedQuestions.map((el) => {
          return (
            <li className={li} key={el}>
              <p>{el}</p>
            </li>
          );
        })}
      </ul>

      <div>
        <h3>Peguntale al vendedor</h3>
        <InputQuestion change={changeState} />
      </div>

      <h3>Últimas realizadas</h3>
      <br />

      {questions.map((el, i) => (
        <p key={i} className={p}>
          {el}
        </p>
      ))}
      <Anchor url="#">Ver todas las preguntas</Anchor>
    </div>
  );
};
