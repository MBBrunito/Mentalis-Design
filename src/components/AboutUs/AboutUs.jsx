"use client";
import { useState } from "react";
import "./AboutUs.css";
import "../service/Paleta.css";
import { dataAboutUs } from "@/app/shared/enums";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faLinkedin,
   faTwitterSquare,
   faFacebookSquare,
   faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";

const AboutUs = () => {
   const [expandedCardIndex, setExpandedCardIndex] = useState(null);

   const toggleText = (index) => {
      setExpandedCardIndex(expandedCardIndex === index ? null : index);
   };

   return (
      <div className="aboutUs">
         {dataAboutUs.map((card, index) => (
            <div key={index} className="cadaUno">
               <Image
                  src={card.image}
                  width={200}
                  height={250}
                  alt="foto de perfil"
                  className="fotoNos"
               />
               <h2 className="titleH2">{card.name}</h2>
               <h3 className="titleH3">{card.Profession}</h3>
               <p
                  className={`presenta ${
                     expandedCardIndex === index ? "showFullText" : ""
                  }`}
               >
                  {card.Presentación1 || null}
                  {card.Presentación1 && <br />}
                  {card.Presentación2 || null}
                  {card.Presentación2 && <br />}
                  {card.Presentación3 || null}
                  {card.Presentación3 && <br />}
                  {card.Presentación4 || null}
                  {card.Presentación4 && <br />}
                  {card.Presentación5 || null}
               </p>
               <button
                  onClick={() => toggleText(index)}
                  className="readMoreBtn"
               >
                  {expandedCardIndex === index ? "Leer menos" : "Leer más..."}
               </button>
               <div className="red">
                  <a
                     href={card.URLLinkedIn}
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                  <a
                     href={card.URLInstagram}
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <FontAwesomeIcon icon={faInstagramSquare} />
                  </a>
                  <a
                     href={card.URLFacebook}
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <FontAwesomeIcon icon={faFacebookSquare} />
                  </a>
                  <a
                     href={card.URlTwitter}
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <FontAwesomeIcon icon={faTwitterSquare} />
                  </a>
               </div>
            </div>
         ))}
      </div>
   );
};

export default AboutUs;
