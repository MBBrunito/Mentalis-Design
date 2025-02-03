"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import "./FooterMentalis.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faSquareFacebook,
   faInstagram,
   faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const FooterMentalis = () => {
   useEffect(() => {
      if (typeof window !== "undefined") {
         // Obtiene el día y hora actual
         const now = new Date();
         const currentDay = now.getDay(); // 0 = Domingo, 1 = Lunes, etc.
         const currentHour = now.getHours();
         const currentMinute = now.getMinutes();

         // Convierte un rango de horas (ej: "09:00 am – 10:00 pm") a un formato manejable
         function parseTimeRange(timeRange) {
            if (!timeRange || typeof timeRange !== "string") {
               console.error(
                  "Error: timeRange es undefined o no es una string",
                  timeRange
               );
               return {
                  start: { hour: 0, minute: 0 },
                  end: { hour: 0, minute: 0 },
               }; // Valor por defecto
            }

            const [start, end] = timeRange
               .split("–")
               .map((time) => time.trim());
            return {
               start: convertTo24Hour(start),
               end: convertTo24Hour(end),
            };
         }

         // Convierte una hora en formato "hh:mm am/pm" a 24 horas
         function convertTo24Hour(time) {
            const [hourMinute, period] = time.split(" ");
            let [hour, minute] = hourMinute.split(":").map(Number);
            if (period.toLowerCase() === "pm" && hour !== 12) hour += 12;
            if (period.toLowerCase() === "am" && hour === 12) hour = 0;
            return { hour, minute };
         }

         // Comprueba si la hora actual está dentro del rango
         function isWithinTimeRange(currentHour, currentMinute, timeRange) {
            const currentTotalMinutes = currentHour * 60 + currentMinute;
            const startTotalMinutes =
               timeRange.start.hour * 60 + timeRange.start.minute;
            const endTotalMinutes =
               timeRange.end.hour * 60 + timeRange.end.minute;
            return (
               currentTotalMinutes >= startTotalMinutes &&
               currentTotalMinutes < endTotalMinutes
            );
         }

         // Resalta el día actual en la tabla
         const rows = document.querySelectorAll("#horario tbody tr");
         rows.forEach((row) => {
            const day = parseInt(row.dataset.day, 10);
            if (day === currentDay) {
               const timeRangeText = row.cells[1].textContent;
               const timeRange = parseTimeRange(timeRangeText);
               if (isWithinTimeRange(currentHour, currentMinute, timeRange)) {
                  row.classList.add("highlight"); // 🔹 Agrega la clase para resaltar
               }
            }
         });
      }
   }, []); // Se ejecuta solo una vez al montar el componente

   return (
      <footer className="footer">
         <div className="footer__container">
            <div className="footer__logo">
               <Link href="/" className="contLogoFoot">
                  <Image
                     src="https://res.cloudinary.com/daoavxvau/image/upload/v1703634000/Mentalis/logo_uwvdw0.png"
                     width={200}
                     height={140}
                     alt="Mentalis Logo"
                     className="logoFooter"
                  />
               </Link>
               <p className="footer__slogan">
                  Acompañamos tu bienestar con psicoterapia y formación
                  especializada.
               </p>
            </div>
            <div className="footer__social">
               <div className="footer-contacto">
                  <div className="contact-info">
                     <h3>VISÍTANOS</h3>
                     <a
                        href="https://maps.app.goo.gl/pbouo7fuRMYZnBfr9"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        <p>📍Matehuala, S.L.P</p>
                     </a>
                     <h3>HÁBLANOS</h3>
                     <a
                        href="tel:4881241263"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        <p>📞 (488) 124-1263</p>
                     </a>
                     <h3>SÍGUENOS</h3>
                     <div className="redFooter">
                        <a
                           href="https://www.facebook.com/mentalispyh"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           <FontAwesomeIcon
                              className="icons"
                              icon={faSquareFacebook}
                           />
                        </a>
                        <a
                           href="https://www.instagram.com/mentalispyh/"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           <FontAwesomeIcon
                              className="icons"
                              icon={faInstagram}
                           />
                        </a>
                        <a
                           href="https://wa.me/+524881241263"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           <FontAwesomeIcon
                              className="icons"
                              icon={faWhatsapp}
                           />
                        </a>
                     </div>
                  </div>
               </div>
            </div>
            <div className="footer__hours">
               <h3>Horarios de Atención</h3>
               <table id="horario">
                  <tbody>
                     <tr data-day="0">
                        <td>Domingo</td>
                        <td>11:00 am – 02:00 pm</td>
                     </tr>
                     <tr data-day="1">
                        <td>Lunes</td>
                        <td>09:00 am – 10:00 pm</td>
                     </tr>
                     <tr data-day="2">
                        <td>Martes</td>
                        <td>09:00 am – 10:00 pm</td>
                     </tr>
                     <tr data-day="3">
                        <td>Miércoles</td>
                        <td>09:00 am – 10:00 pm</td>
                     </tr>
                     <tr data-day="4">
                        <td>Jueves</td>
                        <td>09:00 am – 10:00 pm</td>
                     </tr>
                     <tr data-day="5">
                        <td>Viernes</td>
                        <td>09:00 am – 10:00 pm</td>
                     </tr>
                     <tr data-day="6">
                        <td>Sábado</td>
                        <td>09:00 am – 10:00 pm</td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
      </footer>
   );
};

export default FooterMentalis;
