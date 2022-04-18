import React from 'react'


import {container, article, ul} from './firstSection.module.css'
import { Link } from 'react-router-dom';

export const FirstSection = () => {

   
  return (
    <div className={container}>
        
        <ul className={ul}>
            <li>También puede interesarte:</li>
            <li><Link to={'/'}>peluches</Link></li>
        </ul>
      
        <article className={article}>
            <div>
                <Link to='/'>Volver al listado</Link> <span>|</span>
                <Link to='/'>Juegos y Juguetes</Link> <span>{'>'}</span>
                <Link to='/'>Peluches</Link> <span>{'>'}</span>
                <Link to='/'>Stitch</Link>
            </div>
            <div>
                <Link to='/'>Compartir</Link><span>|</span>
                <Link to='/'>Vender uno igual</Link>
            </div>
        </article>
    </div>
  )
}
