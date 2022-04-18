import React from "react";
import { Link } from "react-router-dom";
import { AnchorComp } from "./anchor.module.css";

interface Prop {
  url: string;
  children: React.ReactNode;
}

export const Anchor: React.FC<Prop> = ({ children, url }) => {
  return (
    <Link className={AnchorComp} to={url}>
      {children}
    </Link>
  );
};
