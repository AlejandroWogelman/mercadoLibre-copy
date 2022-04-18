import React, { useRef } from "react";
import { form } from "./styles.module.css";

interface Prop {
  change: (text: string) => void;
}

export const InputQuestion = ({ change }: Prop) => {
  const ref = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = ref.current?.value;
    const condition = value !== undefined;

    if (condition) {
      if (value.trim().length > 2) {
        change(value);
        ref.current!.value = "";
      }
    }
  };

  return (
    <form className={form} onSubmit={handleSubmit}>
      <textarea
        ref={ref}
        rows={1}
        maxLength={2000}
        placeholder="Escribí tu preginta..."
      ></textarea>
      <button type="submit">Preguntar</button>
    </form>
  );
};
