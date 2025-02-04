import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import NavBar from "@/components/NavBar/NavBar";
import {
   Playfair_Display,
   Roboto,
   Poppins,
   Montserrat,
} from "next/font/google";
import Footer from "@/components/Footer/Footer";
import MainBanner from "@/components/MainBanner/MainBanner";
config.autoAddCss = false;

// Fuente general (Montserrat)
const generalFont = Montserrat({
   weight: ["400", "500", "600", "700"],
   styles: ["normal", "italic"],
   subsets: ["latin"],
   variable: "--fuente-general",
});

// Fuente principal (Playfair Display)
const playfair = Playfair_Display({
   weight: ["400", "500", "600", "700", "800", "900"],
   styles: ["normal", "italic"],
   subsets: ["latin"],
   variable: "--fuente-principal",
});

// Fuente de texto (Roboto)
const roboto = Roboto({
   weight: ["400"],
   styles: ["normal"],
   subsets: ["latin"],
   variable: "--fuente-texto",
});

// Fuente de acento (Poppins)
const poppins = Poppins({
   weight: ["400"],
   styles: ["normal"],
   subsets: ["latin"],
   variable: "--fuente-acento",
});

// Metadata
export const metadata = {
   // title: "Terapia psicológica y bienestar emocional | Mentalis",  // Activar al indexar
   title: "Mentalis",
   // description:
   //    "Encuentra apoyo profesional con nuestros psicólogos especializados. Psicoterapia y formación para tu bienestar emocional",
   description: "Página en desarrollo",
   robots: "noindex, nofollow",
};

export default function RootLayout({ children }) {
   return (
      <html
         lang="en"
         className={`${generalFont.variable} ${playfair.variable} ${roboto.variable} ${poppins.variable}`}
      >
         <body>
            <NavBar />
            <div className="children">{children}</div>
            <Footer />
         </body>
      </html>
   );
}
