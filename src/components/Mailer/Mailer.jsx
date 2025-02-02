"use client";

import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Mailer.css";

export const Mailer = () => {
   const [isClient, setIsClient] = useState(false);

   // Asegurar que el componente solo se renderiza en el cliente
   useEffect(() => {
      setIsClient(true);
   }, []);

   // Inicializar EmailJS solo en el cliente
   useEffect(() => {
      if (typeof window !== "undefined") {
         emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_USER_ID);
      }
   }, []);

   const sendEmail = (event) => {
      event.preventDefault();

      if (!isClient) return; // Evita que se ejecute antes de que Next.js lo hidrate

      emailjs
         .sendForm(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
            event.target,
            process.env.NEXT_PUBLIC_EMAILJS_USER_ID
         )
         .then((response) => console.log(response))
         .catch((error) => console.log(error));
   };

   return (
      <div className="div-form">
         <form className="form-mail" onSubmit={sendEmail}>
            <input
               type="text"
               name="user_name"
               placeholder="Nombre Completo"
               required
            />
            <input
               type="tel"
               name="user_phone"
               placeholder="Número de Teléfono"
               required
            />
            <input
               type="email"
               name="user_email"
               placeholder="Correo Electrónico"
               required
            />
            <textarea
               name="user_message"
               cols="30"
               rows="5"
               placeholder="Su Mensaje o Sugerencia"
               required
            ></textarea>
            <button className="acento">Enviar</button>
         </form>
      </div>
   );
};
