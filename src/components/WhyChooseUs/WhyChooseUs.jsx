"use client";

import React from "react";
import { Link } from "next/link";
import "./WhyChooseUs.css";
import Carousel from "../Carrusel/Carrusel";

const WhyChooseUs = () => {
   return (
      <div className="WhyContent">
         <div className="WhyIntro">
            <h2 className="WhyIntroTitulo">¿Por qué elegir Mentalis?</h2>
            <p className="WhyInfoIntro">
               En Mentalis, entendemos que cada persona es única y merece una
               atención especializada. Más que un servicio, te ofrecemos una
               experiencia transformadora para fortalecer tu bienestar emocional
               y profesional.
            </p>
            <h3>🌟 Nuestro compromiso contigo:</h3>
            <ul className="custom-list">
               <li>
                  Equipo de expertos: Contamos con un colectivo de psicólogos y
                  especialistas en humanidades altamente capacitados.
               </li>
               <li>
                  Acompañamiento personalizado: Diseñamos cada sesión y taller
                  según tus necesidades.
               </li>
               <li>
                  Un espacio seguro y accesible: Donde puedes expresarte con
                  libertad y recibir apoyo.
               </li>
               <li>
                  Variedad de servicios: Psicoterapia individual, supervisión
                  clínica y talleres grupales.
               </li>
               <li>
                  Compromiso con tu bienestar: Te ayudamos a encontrar
                  equilibrio y superar desafíos.
               </li>
            </ul>
            <Carousel />
            <p className="textCarousel">
               💙 Elige Mentalis y da el primer paso hacia un cambio positivo.
               Estamos aquí para ti.
            </p>
         </div>
      </div>
   );
};

export default WhyChooseUs;
