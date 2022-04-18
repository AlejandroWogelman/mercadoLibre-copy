import React, { useRef, useState } from 'react'
import { on } from 'stream'

import {imgCard, imgSmall, border} from './styles.module.css'

interface Prop{
    img:string,
    changeSelect:(name:string)=>void
}


export const CardImg = ({img, changeSelect}:Prop) => {
 
   const refImg= useRef<HTMLImageElement>(null)

    const handlerClick= ()=>{
        changeSelect(img) 
    }

  return (
    <figure className={`${imgCard} ${border}` }  >
       
         <img  src={img} alt="lilo y stitch" ref={refImg}  className={imgSmall}  onClick={handlerClick}/>
     
    </figure>
  )
}
