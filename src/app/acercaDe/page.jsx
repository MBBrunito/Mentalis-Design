import MissionCard from "@/components/Mentalis/Mission";
import VisionCard from "@/components/Mentalis/Vision";
import ObjetiveCard from "@/components/Mentalis/Objetive";
import "./acercaDe.css";

export const metadata = {
   title: "AcercaDe - Mentalis",
};

export default function AcercaDe() {
   return (
      <div className="acercaDe">
         <div className="visiones">
            <div>
               <h2>Visión</h2>
               <p className="info">
                  Nos visualizamos como la organización líder de la sociedad
                  civil en el Altiplano Potosino, destacando por nuestra
                  excelencia en psicología y humanidades. Buscamos no solo ser
                  un referente, sino ser reconocidos a nivel nacional e
                  internacional por nuestro impacto positivo en el bienestar
                  emocional, el crecimiento personal y el desarrollo social.
               </p>
               {/* <VisionCard /> */}
            </div>
         </div>
         <hr />
         <div className="mision">
            <div>
               <h2>Misión</h2>
               <p className="info">
                  En Mentalis, nuestra misión es comprometernos con la
                  facilitación de procesos de cambio que conduzcan a
                  transformaciones positivas, mientras nos dedicamos
                  apasionadamente a lo que amamos
               </p>
               {/* <MissionCard /> */}
            </div>
         </div>
         <hr />
         <div className="objetivos">
            <div>
               <h2>Principios</h2>
               <p className="info">
                  Somos un colectivo de profesionistas, con miras a constituirse
                  legalmente, a quienes nos une: <br />
                  La certeza de que las personas tienen la capacidad para
                  transformar y transformarse. Por eso, apoyamos a nuestros
                  pacientes, clientes, socios y estudiantes a explotar lo mejor
                  de sí.
               </p>
               <p className="info">
                  El deseo de transmitir lo que sabemos. Por eso, organizamos
                  grupos de estudio, talleres, conferencias y otros eventos
                  académicos y culturales para psicólogos en formación y
                  profesiones afines. <br />
                  La convicción de que nunca terminamos de aprender. Para ello,
                  participamos en actividades de actualización y desarrollo
                  profesional. <br />
                  La voluntad de aportar nuestro granito de arena para atender
                  las necesidades psicosociales. <br />
                  El interés de vivir dignamente de nuestra profesión. Nos
                  distingue el prestigio y el profesionalismo. Nuestro trabajo
                  habla por nosotros.
               </p>
               {/* <ObjetiveCard /> */}
            </div>
         </div>
      </div>
   );
}
