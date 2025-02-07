"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import "./MainBanner.css";
import { slides } from "@/app/shared/enums";

export default function MainBanner() {
   const [index, setIndex] = useState(0);

   useEffect(() => {
      const interval = setInterval(() => {
         setIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }, 5000);
      return () => clearInterval(interval);
   }, []);

   return (
      <div className="banner-container">
         <div className="relative w-screen h-[300px] md:h-[600px] lg:h-[700px] overflow-hidden">
            <AnimatePresence>
               {slides.map((slide, i) => (
                  <motion.div
                     key={slide.image}
                     className="absolute top-0 left-0 w-screen h-full"
                     initial={{ opacity: 0 }}
                     animate={{ opacity: i === index ? 1 : 0 }}
                     exit={{ opacity: 0 }}
                     transition={{ duration: 1 }}
                     style={{ display: i === index ? "block" : "none" }} // Oculta los otros slides
                  >
                     <Image
                        src={slide.image}
                        alt="Banner"
                        fill
                        className="banner-image"
                        priority
                     />
                  </motion.div>
               ))}
            </AnimatePresence>

            {/* Overlay oscuro */}
            <div className="banner-overlay"></div>

            {/* Texto animado */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-15">
               <motion.h1
                  key={slides[index].text}
                  className="banner-text"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 1 }}
               >
                  {slides[index].text.split("\n").map((line, i) => (
                     <div key={i}>{line}</div>
                  ))}
               </motion.h1>

               {/* Botones CTA */}
               <div className="ctaMain">
                  <p className="acento">
                     Impulsamos tu bienestar y crecimiento profesional con
                     psicoterapia, talleres y formación especializada
                  </p>
                  <div className="cta-buttons">
                     <a href="#contacto" className="cta-button acento">
                        Contáctanos
                     </a>
                     <a href="/" className="cta-button secondary acento">
                        Ver Servicios
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
