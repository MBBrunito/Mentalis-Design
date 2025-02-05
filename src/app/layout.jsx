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
import Script from "next/script";
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

const isProduction = process.env.NEXT_PUBLIC_ENVIRONMENT === "production";

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
         lang="es"
         className={`${generalFont.variable} ${playfair.variable} ${roboto.variable} ${poppins.variable}`}
      >
         <head>
            {isProduction && (
               <Script
                  id="google-tag-manager"
                  strategy="afterInteractive"
                  dangerouslySetInnerHTML={{
                     __html: `
               (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
               new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
               j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
               'https://www.googletagmanager.com/gtm.js?id=' + i + dl;f.parentNode.insertBefore(j,f);
               })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');
               `,
                  }}
               />
            )}
         </head>

         <body>
            <noscript>
               <iframe
                  src="https://www.googletagmanager.com/ns.html?id='${process.env.NEXT_PUBLIC_GTM_ID}'"
                  height="0"
                  width="0"
                  style={{ display: "none", visibility: "hidden" }}
               ></iframe>
            </noscript>
            <NavBar />
            <div className="children">{children}</div>
            <Footer />
         </body>
      </html>
   );
}
