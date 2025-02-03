/* eslint-disable @next/next/no-img-element */
import "./page.css";
import MainBanner from "@/components/MainBanner/MainBanner";

export default function LandigPage() {
   return (
      <div>
         <div className="contenedor">
            {/* <h1 className="titulo">MENTALIS</h1> */}
            <MainBanner />
            {/* <Carousel /> */}
            <div className="intro">
               <h2 className="introTitulo">
                  TRANSFORMADO VIDAS, NUTRIENDO MENTES.
               </h2>
               <p className="infoIntro">
                  Somos un colectivo de profesionistas, con miras a constituirse
                  legalmente, a quienes nos une:
                  <br />
                  La certeza de que las personas tienen la capacidad para
                  transformar y transformarse. Por eso, apoyamos a nuestros
                  pacientes, clientes, socios y estudiantes a explotar lo mejor
                  de sí.
                  <br />
                  El deseo de transmitir lo que sabemos. Por eso, organizamos
                  grupos de estudio, talleres, conferencias y otros eventos
                  académicos y culturales para psicólogos en formación y
                  profesiones afines.
                  <br />
                  La convicción de que nunca terminamos de aprender. Para ello,
                  participamos en actividades de actualización y desarrollo
                  profesional.
                  <br />
                  La voluntad de aportar nuestro granito de arena para atender
                  las necesidades psicosociales.
                  <br />
                  El interés de vivir dignamente de nuestra profesión. Nos
                  distingue el prestigio y el profesionalismo. Nuestro trabajo
                  habla por nosotros.
               </p>
            </div>
         </div>
      </div>
   );
}
