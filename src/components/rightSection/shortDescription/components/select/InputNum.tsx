import React, { ChangeEvent, useRef, useState } from "react";

import { form, input, alert } from "./select.module.css";

interface Prop {
  setElection: React.Dispatch<React.SetStateAction<number>>;
  setMoreSix: React.Dispatch<React.SetStateAction<boolean>>;
  SetShowUl: React.Dispatch<React.SetStateAction<boolean>>;
  stock: number;
}

export const InputNum = ({
  SetShowUl,
  setMoreSix,
  setElection,
  stock,
}: Prop) => {
  const [inputChange, setinputChange] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const select = Number(e.target.value);

    if (Number(inputRef.current!.value) > stock) {
      inputRef.current?.classList.add(alert);
    } else {
      inputRef.current?.classList.remove(alert);
    }
    setinputChange(select);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   
    if (inputChange > 0 && inputChange <= stock) {
      setElection(inputChange);
      setMoreSix(false);
      SetShowUl(false);
    }
  };
  return (
    <form className={form} onSubmit={handleSubmit}>
      <div>
        <label htmlFor="number">Cantidad:</label>
        <input
          ref={inputRef}
          className={input}
          id="number"
          type="number"
          step="none"
          onChange={changeInput}
        />
      </div>
      <button type="submit">enviar</button>
    </form>
  );
};
