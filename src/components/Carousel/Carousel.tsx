import React, { useEffect} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import "swiper/css";
import "swiper/css/navigation";
import {swipperBtn} from './styles.module.css'
import { Recomendations } from '../../interfaces';
import { CardCarousel } from '../leftSection/cardCrousel/CardCarousel';



interface Prop{
    imagesArray:Recomendations[]
    vistas:number
}

export const Carousel = ({imagesArray, vistas}:Prop) => {  

useEffect(() => {
 
    const prevBtn = document.querySelector(".swiper-button-prev");
    const nextBtn = document.querySelector(".swiper-button-next");
    prevBtn?.classList.add(swipperBtn)
    nextBtn?.classList.add(swipperBtn)
    
       }, [])
       
  return (
    <Swiper
      id={"Swipper"}
      
      spaceBetween={0}
      slidesPerView={vistas}
      slidesPerGroup={vistas}
      scrollbar={{ draggable: true }}
      navigation={true}
      loop={true}
      modules={[ Navigation]}
    >
        {
            imagesArray?.map(({image, text, price})=> <SwiperSlide key={image}><CardCarousel image={image} price={price} text={text}/></SwiperSlide>)
        }
     
    </Swiper>
  )
}
