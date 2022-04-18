import React from "react";
import { Anchor } from "../../../Anchor";

import { shieldTrophy } from "../shortDescrip.module.css";
interface Prop {
  children: React.ReactNode;
  anchorText: string;
  text: string;
}

export const TrophyShield = ({ children, anchorText, text }: Prop) => {
  return (
    <div className={shieldTrophy}>
      <div>{children}</div>
      <div>
        <p>
          <Anchor url="/">{anchorText}</Anchor>,{" " + text}
        </p>
      </div>
    </div>
  );
};
