"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { dataNavbar } from "@/app/shared/enums";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faSquareFacebook,
   faInstagram,
   faWhatsapp,
   faGoogle, // ✅ Ícono de Google
} from "@fortawesome/free-brands-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons"; // ✅ Ícono de estrella

import Image from "next/image";
import "./NavBar.css";

const NavBar = () => {
   const pathname = usePathname();
   const [menuOpen, setMenuOpen] = useState(false);
   const [scrolled, setScrolled] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         if (window.scrollY > 50) {
            setScrolled(true);
         } else {
            setScrolled(false);
         }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   return (
      <header className="header">
         {/* Barra superior con redes */}
         <div className="topBar">
            <p className="acento texto">
               Insurgentes 317 (Planta Alta), Zona Centro, Metehuala, S.L.P.
            </p>
            <div className="redes">
               <div className="red">
                  <a
                     href="https://www.facebook.com/mentalispyh"
                     target="_blank"
                     rel="noopener noreferrer"
                     title="Síguenos en Facebook"
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
                     title="Síguenos en Instagram"
                  >
                     <FontAwesomeIcon className="icons" icon={faInstagram} />
                  </a>
                  <a
                     href="https://wa.me/+524881241263"
                     target="_blank"
                     rel="noopener noreferrer"
                     title="Habla con uno de nuestros especialistas"
                  >
                     <FontAwesomeIcon className="icons" icon={faWhatsapp} />
                  </a>
                  {/* <a
                     href="https://search.google.com/local/writereview?placeid=TU_PLACE_ID"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="google-review-link"
                  >
                     <FontAwesomeIcon className="icons" icon={faGoogle} />
                  </a> */}
                  <a
                     href="https://g.page/r/CUZX2Rhn91XIEAI/review"
                     target="_blank"
                     rel="noopener noreferrer"
                     title="Déjanos una reseña en Google"
                  >
                     <FontAwesomeIcon
                        className="icons icon-star"
                        icon={faStar}
                     />
                  </a>
               </div>
            </div>
         </div>

         {/* Navbar principal */}
         <div className={`contNav ${scrolled ? "scrolled" : ""}`}>
            <nav className="navBar">
               {/* Logo */}
               <Link href="/" className="contLogoNav">
                  <Image
                     src="https://res.cloudinary.com/daoavxvau/image/upload/v1703634000/Mentalis/logo_uwvdw0.png"
                     width={110}
                     height={80}
                     alt="Mentalis Logo"
                     className="logoInicio"
                  />
               </Link>

               {/* Botón de menú móvil */}
               <button
                  className="menuToggle"
                  onClick={() => setMenuOpen(!menuOpen)}
               >
                  ☰
               </button>

               <div className={`menus ${menuOpen ? "open" : ""}`}>
                  {dataNavbar.map((item, index) => (
                     <Link
                        className={`boton acento ${
                           pathname === item.url ? "activo" : ""
                        }`}
                        key={index}
                        href={item.url}
                     >
                        {item.name}
                     </Link>
                  ))}
               </div>
            </nav>
         </div>
      </header>
   );
};

export default NavBar;
