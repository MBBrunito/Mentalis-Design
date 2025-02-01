"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const slides = [
   {
      image: "https://res.cloudinary.com/daoavxvau/image/upload/v1707184930/Mentalis/Carrusel/Imagen_de_WhatsApp_2024-02-05_a_las_20.47.52_d6f69b22_qzl33e.jpg",
      text: "Terapia psicológica en línea y presencial",
   },
   {
      image: "https://res.cloudinary.com/daoavxvau/image/upload/v1704738922/Mentalis/WhatsApp_Image_2024-01-08_at_15.12.32_3_bhiuob.jpg",
      text: "Psicólogos profesionales en Mentalis",
   },
   {
      image: "https://res.cloudinary.com/daoavxvau/image/upload/v1704738921/Mentalis/WhatsApp_Image_2024-01-08_at_15.12.32_4_wxsxgr.jpg",
      text: "Bienestar emocional con expertos en salud mental",
   },
];

export default function MainBanner() {
   const [index, setIndex] = useState(0);

   useEffect(() => {
      const interval = setInterval(() => {
         setIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }, 5000);
      return () => clearInterval(interval);
   }, []);

   return (
      <div className="relative w-screen h-[400px] md:h-[600px] lg:h-[700px] overflow-hidden">
         <AnimatePresence>
            <motion.div
               key={slides[index].image}
               className="absolute top-0 left-0 w-screen h-full"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               transition={{ duration: 1 }}
            >
               <Image
                  src={slides[index].image}
                  alt="Banner"
                  fill
                  className="banner-image"
                  priority
               />
            </motion.div>
         </AnimatePresence>

         {/* Overlay oscuro */}
         <div className="banner-overlay"></div>

         {/* Texto animado */}
         <div className="absolute inset-0 flex items-center justify-center text-center">
            <motion.h1
               key={slides[index].text}
               className="banner-text text-3xl md:text-5xl font-bold"
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -20 }}
               transition={{ duration: 1 }}
            >
               {slides[index].text}
            </motion.h1>
         </div>
      </div>
   );
}
