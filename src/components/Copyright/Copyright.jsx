"use client";

import React, { useEffect, useState } from "react";
import "./Copyright.css";
import Image from "next/image";

const Copyright = () => {
   const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
   const startYear = 2021; // Cambia este valor al año de inicio del negocio

   return (
      <div className="copyright-container">
         <div className="copyright-content acento">
            <p>
               ©{" "}
               {startYear === currentYear
                  ? currentYear
                  : `${startYear} - ${currentYear}`}{" "}
               Mentalis <br />
               Todos los derechos reservados
            </p>
         </div>
         <div className="copyright-logo">
            <a
               href="https://brunito.vercel.app/"
               target="_blank"
               rel="noreferrer"
            >
               <div className="logoMBDev">
                  <p>
                     Desarrollado por
                     <br /> MarcosBrunoDev
                  </p>
                  <Image
                     src="https://res.cloudinary.com/daoavxvau/image/upload/v1697171874/MBDevFS_vt13er.png"
                     alt="MarcosBrunoDev"
                     width={40}
                     height={40}
                  />
               </div>
            </a>
         </div>
      </div>
   );
};

export default Copyright;
