"use client";

import React from "react";
import "./Copyright.css";
import Image from "next/image";

const Copyright = () => {
   return (
      <div className="copyright-container">
         <div className="copyright-content acento">
            <p>
               ©2024 Mentalis <br /> Todos los derechos reservados
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
