import React from "react";
import { container } from "./styles.module.css";

import mercadoCredito from "../../../assets/payments/mercadoCredito.png";
import visa from "../../../assets/payments/visa.png";
import express from "../../../assets/payments/express.png";
import mastercard from "../../../assets/payments/mastercard.png";
import naranja from "../../../assets/payments/naranja.png";
import visaDeb from "../../../assets/payments/visaDeb.png";
import mastercardDeb from "../../../assets/payments/mastercardDeb.png";
import cabal from "../../../assets/payments/cabal.png";
import maestro from "../../../assets/payments/maestro.png";
import rapipago from "../../../assets/payments/rapipago.png";
import pagoFacil from "../../../assets/payments/pagoFacil.png";
import { IteratorImg } from "./IteratorImg";
import { Anchor } from "../../Anchor";

export const Payments = () => {
  const credit: string[] = [visa, express, mastercard, naranja];
  const debit: string[] = [visaDeb, mastercardDeb, cabal, maestro];
  const cash: string[] = [rapipago, pagoFacil];

  return (
    <div className={container}>
      <h2>Medios de pago</h2>
      <div>
        <p>Hasta 12 cuotas sin tarjeta</p>
        <IteratorImg imgs={[mercadoCredito]} />
      </div>
      <div>
        <p>Tarjetas de crédito</p>
        <IteratorImg imgs={credit} />
      </div>
      <div>
        <p>Tarjetas de débito</p>
        <IteratorImg imgs={debit} />
      </div>
      <div>
        <p>Efectivo</p>
        <IteratorImg imgs={cash} />
      </div>
      <br />
      <Anchor url="/">Conocé otros medios de pago</Anchor>
    </div>
  );
};
