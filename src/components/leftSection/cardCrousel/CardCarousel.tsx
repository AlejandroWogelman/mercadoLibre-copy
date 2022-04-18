import React from 'react'
import { Recomendations } from '../../../interfaces'

import {container, content} from './styles.module.css'

export const CardCarousel = ({image, text, price}:Recomendations) => {
  return (
    <div className={container}>
        <picture>
            <img src={image} alt={text} />
        </picture>
        <div className={content}>
            <span>$ {price}</span>
            <p>{text}</p>
        </div>
    </div>
  )
}
