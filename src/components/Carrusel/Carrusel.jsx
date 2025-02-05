"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { dataCarousel } from "@/app/shared/enums";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carrusel.css";

const Carousel = () => {
   const settings = {
      dots: true,
      infinite: true,
      speed: 1500,
      slidesToShow: 2, // Muestra dos imágenes a la vez
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed: 4000,
      arrows: true,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
            },
         },
      ],
   };

   return (
      <div className="carousel-container">
         <Slider {...settings}>
            {dataCarousel.map((item, index) => (
               <div key={index} className="slide">
                  <Image
                     src={item.image}
                     alt={item.title}
                     width={500}
                     height={300}
                     className="carousel-image"
                     priority
                  />
                  {/* <div className="slide-overlay">
                     <h3 className="slide-title">{item.title}</h3>
                     <Image
                        src="https://res.cloudinary.com/daoavxvau/image/upload/v1703634000/Mentalis/logo_uwvdw0.png"
                        alt="Mentalis Logo"
                        width={80}
                        height={80}
                        className="carousel-logo"
                     />
                  </div> */}
               </div>
            ))}
         </Slider>
      </div>
   );
};

export default Carousel;
