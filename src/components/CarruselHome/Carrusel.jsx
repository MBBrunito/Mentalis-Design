"use client";
/* eslint-disable @next/next/no-img-element */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../app/page.css";
import { imagesHome } from "@/app/shared/enums";

export default function Carousel() {
   const settings = {
      dots: true,
      infinite: true,
      speed: 50,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
   };

   return (
      <div>
         <div>
            <Slider {...settings}>
               {imagesHome.map((image, index) => (
                  <div key={index} className="carrusel">
                     {/* <h3>{image.alt}</h3> */}
                     <img
                        src={image.url}
                        alt={image.alt || ""}
                        className="imageHome"
                     />
                  </div>
               ))}
            </Slider>
         </div>
      </div>
   );
}
