import "./Footer.css";
import Image from "next/image";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faSquareFacebook,
   faInstagram,
   faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { Mailer } from "../Mailer/Mailer";
import GoogleReviewsWidget from "../ReviewsGoogle/GoogleReviewsWidget";
import FooterMentalis from "../FooterMentalis/FooterMentalis";
import Copyright from "../Copyright/Copyright";

const Footer = () => {
   return (
      <div>
         {/* Overlay oscuro */}
         <footer className="footer-container">
            <div className="footer-content">
               {/* Mensaje de invitación */}
               <div className="footer-message">
                  <h2>
                     ¿Listo para transformar <br />
                     tu bienestar?
                  </h2>
                  <p>
                     Contáctanos y agenda una consulta con nuestros
                     especialistas.
                  </p>
               </div>

               {/* Formulario de contacto */}
               <div className="footer-form">
                  <Mailer />
               </div>
            </div>
         </footer>
         <div className="footer-map-review">
            <div className="footer-map">
               <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.9265619498324!2d-100.6392379!3d23.642800899999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8680a964b0651455%3A0x958559e7f42b33f2!2sMentalis!5e0!3m2!1ses!2sar!4v1738517528188!5m2!1ses!2sar"
                  width="100%"
                  height="450px"
                  style={{ border: 0 }}
                  // allowfullscreen=""
                  loading="lazy"
                  // referrerpolicy="no-referrer-when-downgrade"
               ></iframe>
            </div>
            <GoogleReviewsWidget />
         </div>
         <FooterMentalis />
         <Copyright />
      </div>
   );
};

export default Footer;

// <footer>
//    <div className="footer">
//       <div className="contLogoFoot">
//          <Link href="/">
//             {/* {!isHome && ( */}
//             <Image
//                src="https://res.cloudinary.com/daoavxvau/image/upload/v1700765805/Mentalis/r2koo4vquo5rzxra57vq.png"
//                width={30}
//                height={30}
//                alt="foto del logo"
//                className="logoInicio"
//             />
//             {/* )} */}
//          </Link>
//       </div>
//       <div>
//          <h3>&copy; Mentalis Psicologia y Humanidades</h3>
//          <span>
//             All rights Reserved • 2023-{new Date().getFullYear()}
//          </span>
//       </div>
//       <div className="redez">
//          <a
//             href="https://www.facebook.com/mentalispyh"
//             target="_blank"
//             rel="noopener noreferrer"
//          >
//             <FontAwesomeIcon className="icons" icon={faSquareFacebook} />
//          </a>
//          <a
//             href="https://www.instagram.com/mentalispyh/"
//             target="_blank"
//             rel="noopener noreferrer"
//          >
//             <FontAwesomeIcon className="icons" icon={faInstagram} />
//          </a>
//          <a
//             href="https://wa.me/+524881241263"
//             target="_blank"
//             rel="noopener noreferrer"
//          >
//             <FontAwesomeIcon className="icons" icon={faWhatsapp} />
//          </a>
//          <a
//             href="https://www.google.com/maps/place/Mentalis/@23.6429546,-100.6393629,20z/data=!4m15!1m8!3m7!1s0x8680a9c900ff3167:0x79309f41c9ad694c!2sInsurgentes+317,+Centro,+78700+Matehuala,+S.L.P.,+M%C3%A9xico!3b1!8m2!3d23.6428122!4d-100.6391991!16s%2Fg%2F11l72c5989!3m5!1s0x8680a964b0651455:0x958559e7f42b33f2!8m2!3d23.6428009!4d-100.6392379!16s%2Fg%2F11lcmdyp_b?entry=ttu"
//             target="_blank"
//             rel="noopener noreferrer"
//          >
//             <FontAwesomeIcon className="icons" icon={faMapMarkerAlt} />
//          </a>
//       </div>
//    </div>
// </footer>
