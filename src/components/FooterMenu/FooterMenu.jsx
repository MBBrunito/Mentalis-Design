"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { dataFooterMenu } from "@/app/shared/enums";
import "./FooterMenu.css";

const FooterMenu = () => {
   const pathname = usePathname();
   const [menuOpen, setMenuOpen] = useState(false);

   return (
      <div className="footer-menu">
         <div className={`menuFoot ${menuOpen ? "open" : ""}`}>
            {dataFooterMenu.map((item, index) => (
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
      </div>
   );
};

export default FooterMenu;
