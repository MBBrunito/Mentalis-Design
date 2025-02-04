"use client";

import React from "react";
import { Link } from "next/link";
import "./AboutHome.css";

const AboutHome = () => {
   return (
      <div className="aboutContent">
         <div className="aboutIntro">
            <h2 className="aboutIntroTitulo">
               Descubre Mentalis: <br />
               Psicólogos comprometidos con tu bienestar
            </h2>
            <p className="aboutInfoIntro">
               En Mentalis, somos un colectivo de psicólogos y especialistas en
               humanidades dedicados a tu bienestar emocional y crecimiento
               profesional. A través de un enfoque basado en la experiencia
               clínica, la empatía y la atención personalizada, te brindamos el
               apoyo necesario para superar desafíos y alcanzar tus metas. Cada
               persona es única, y por eso diseñamos soluciones adaptadas a tus
               necesidades, acompañándote en cada paso de tu desarrollo
               personal.
            </p>
            {/* Botones CTA
            <div className="ctaAbout">
               <div className="ctaAbout-buttons">
                  <a href="/" className="ctaAbout-button acento">
                     Contáctanos
                  </a>
                  <a href="/" className="ctaAbout-button secondary acento">
                     Ver Servicios
                  </a>
               </div>
            </div> */}
         </div>
      </div>
   );
};

export default AboutHome;
