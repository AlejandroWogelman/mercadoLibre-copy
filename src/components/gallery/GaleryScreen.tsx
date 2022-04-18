import React, { useEffect, useState} from "react";
import { CardImg } from "./CardImg";
import get from '../../product/mock'
import {container, principalImg, borderActive, border} from './styles.module.css'

import { check } from "../../helpers/checkBorder";

export const GaleryScreen = () => {
  const producto= get.product

  const defaultImg= producto.pictures[0].url
  const [selected, setSelected] = useState<string>(defaultImg)

  const changeSelect = (name:string)=>{
    setSelected(name)
  }
 
  useEffect(() => {
    console.log('entrada')
   check({selected, styles:{border, borderActive}})
  }, [selected])


  return (
    <section className={container}>
      <div id="imgContainer" >
        {
           producto.pictures.map(image =>{
           return <CardImg img={image.url} changeSelect={changeSelect} key={image.id}/> 
          })
         
        }
        
      </div>
      <figure className={principalImg}>
        <img src={selected} alt="lilo y stitch" />
      </figure>
    </section>
  );
};
