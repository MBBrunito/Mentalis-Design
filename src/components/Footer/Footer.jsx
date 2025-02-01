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

const Footer = () => {
   return (
      <footer>
         <div className="footer">
            <div className="contLogoFoot">
               <Link href="/">
                  {/* {!isHome && ( */}
                  <Image
                     src="https://res.cloudinary.com/daoavxvau/image/upload/v1700765805/Mentalis/r2koo4vquo5rzxra57vq.png"
                     width={30}
                     height={30}
                     alt="foto del logo"
                     className="logoInicio"
                  />
                  {/* )} */}
               </Link>
            </div>
            <div>
               <h3>&copy; Mentalis Psicologia y Humanidades</h3>
               <span>
                  All rights Reserved • 2023-{new Date().getFullYear()}
               </span>
            </div>
            <div className="redez">
               <a
                  href="https://www.facebook.com/mentalispyh"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <FontAwesomeIcon className="icons" icon={faSquareFacebook} />
               </a>
               <a
                  href="https://www.instagram.com/mentalispyh/"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <FontAwesomeIcon className="icons" icon={faInstagram} />
               </a>
               <a
                  href="https://wa.me/+524881241263"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <FontAwesomeIcon className="icons" icon={faWhatsapp} />
               </a>
               <a
                  href="https://www.google.com/maps/place/Mentalis/@23.6429546,-100.6393629,20z/data=!4m15!1m8!3m7!1s0x8680a9c900ff3167:0x79309f41c9ad694c!2sInsurgentes+317,+Centro,+78700+Matehuala,+S.L.P.,+M%C3%A9xico!3b1!8m2!3d23.6428122!4d-100.6391991!16s%2Fg%2F11l72c5989!3m5!1s0x8680a964b0651455:0x958559e7f42b33f2!8m2!3d23.6428009!4d-100.6392379!16s%2Fg%2F11lcmdyp_b?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <FontAwesomeIcon className="icons" icon={faMapMarkerAlt} />
               </a>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
