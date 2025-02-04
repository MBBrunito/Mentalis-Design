"use client";

import React from "react";
import { Link } from "next/link";
import "./HeroHome.css";

const HeroHome = () => {
   return (
      <div className="heroContent">
         <div className="heroIntro">
            <h2 className="heroIntroTitulo">
               Consulta con un psicólogo y transforma tu bienestar
            </h2>
            <p className="heroInfoIntro">
               En Mentalis, tu bienestar emocional es nuestra prioridad. Nuestro
               equipo de psicólogos especializados te acompaña en un entorno
               seguro y de confianza para que puedas superar desafíos,
               fortalecer tu salud mental y alcanzar tus metas personales y
               profesionales.
            </p>
            <p className="heroInfoIntro">
               Ofrecemos psicoterapia individual y grupal, talleres y formación
               especializada para brindarte herramientas que impulsen tu
               crecimiento. Agenda tu consulta con un psicólogo de Mentalis hoy
               mismo y encuentra el equilibrio que mereces.
            </p>
            {/* Botones CTA */}
            <div className="ctaHero">
               <div className="ctaHero-buttons">
                  <a href="/" className="ctaHero-button acento">
                     Contáctanos
                  </a>
                  <a href="/" className="ctaHero-button secondary acento">
                     Ver Servicios
                  </a>
               </div>
            </div>
         </div>
      </div>
   );
};

export default HeroHome;
