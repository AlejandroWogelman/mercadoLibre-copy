import React from "react";

import { footer } from "./styles.module.css";

import facebook from "../../assets/facebook.svg"
import linkedin from "../../assets/linkedin.svg"
import portfolio from "../../assets/portfolio.svg"
import github from "../../assets/github.svg"



export const Footer = () => {

    const social: {img:string, url:string}[]= [
        {
            img:facebook, url:'https://www.facebook.com/AlejandroWogel'
        },
        {
            img:linkedin, url:'https://www.linkedin.com/in/alejandrowogel/'
        },
        {
            img:github, url:'https://github.com/AlejandroWogelman'
        },
        {
            img:portfolio, url:'https://wogelman-alejandro.vercel.app/'
        },
    ]



  return (
    <div className={footer}>
     {
         social.map(({img,url}, i)=>{
             return(
                <a
                key={i}
                href={url}
                rel="noreferrer noopener"
                target="_blank"
              >
                <img src={img} alt="social-contact" />
              </a>
             )
         })
     }
    </div>
  );
};
