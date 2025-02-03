"use client";

import React from "react";
import "./Copyright.css";
import Image from "next/image";

const Copyright = () => {
   return (
      <div className="copyright-container">
         <div className="copyright-content">
            <p>© 2021 Mentalis. Todos los derechos reservados.</p>
            <p>
               <a href="https://www.mentalis.com.mx/aviso-de-privacidad">
                  Aviso de privacidad
               </a>
            </p>
         </div>
         <div className="copyright-logo">
            <Image
               src="/images/logo-mentalis.svg"
               alt="Logo de Mentalis"
               width={100}
               height={100}
            />
         </div>
      </div>
   );
};

export default Copyright;
