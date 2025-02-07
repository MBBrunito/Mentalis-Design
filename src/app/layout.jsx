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

const generalFont = Montserrat({
   weight: ["400", "500", "600", "700"],
   styles: ["normal", "italic"],
   subsets: ["latin"],
   variable: "--fuente-general",
});

const playfair = Playfair_Display({
   weight: ["400", "500", "600", "700", "800", "900"],
   styles: ["normal", "italic"],
   subsets: ["latin"],
   variable: "--fuente-principal",
});

const roboto = Roboto({
   weight: ["400"],
   styles: ["normal"],
   subsets: ["latin"],
   variable: "--fuente-texto",
});

const poppins = Poppins({
   weight: ["400"],
   styles: ["normal"],
   subsets: ["latin"],
   variable: "--fuente-acento",
});

const isProduction = process.env.NEXT_PUBLIC_ENVIRONMENT === "production";

export const metadata = {
   title: "Terapia psicológica y bienestar emocional | Mentalis",
   description:
      "Encuentra apoyo profesional con nuestros psicólogos especializados. Psicoterapia y formación para tu bienestar emocional",
};

export default function RootLayout({ children }) {
   return (
      <html
         lang="es"
         className={`${generalFont.variable} ${playfair.variable} ${roboto.variable} ${poppins.variable}`}
      >
         <head>
            {/* Google Analytics */}
            {isProduction && (
               <>
                  <Script
                     strategy="afterInteractive"
                     src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
                  />
                  <Script
                     id="google-analytics"
                     strategy="afterInteractive"
                     dangerouslySetInnerHTML={{
                        __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                           page_path: window.location.pathname,
                        });
                        `,
                     }}
                  />
               </>
            )}
         </head>

         <body>
            <noscript>
               <iframe
                  src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GA_ID}`}
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
