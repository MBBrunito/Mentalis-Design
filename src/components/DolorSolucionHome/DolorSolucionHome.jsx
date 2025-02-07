"use client";
import "./DolorSolucionHome.css";

const DolorSolucionHome = () => {
   return (
      <div className="contenedorDolorSolucionHome">
         <div className="dolor">
            <div className="dolorText">
               <h2 className="titleDolor">
                  ¿Sientes que nada funciona <br />y no sabes por dónde empezar?
               </h2>
               <p>
                  A veces, la ansiedad, el estrés y la frustración se convierten
                  en parte de la rutina diaria. Las preocupaciones parecen no
                  tener fin, y puede ser difícil encontrar la claridad necesaria
                  para seguir adelante.
               </p>
               <p style={{ fontWeight: "bold" }}>Quizás te has sentido:</p>
               <ul>
                  <li>Abrumado por el estrés o la ansiedad constante.</li>
                  <li>
                     Con dificultades para manejar tus emociones y pensamientos.
                  </li>
                  <li>Perdido en una situación sin saber qué hacer.</li>
                  <li>Sintiéndote solo o sin apoyo emocional.</li>
               </ul>
               <a href="/" className="cta-buton acento">
                  Explora Nuestros Servicios
               </a>
            </div>
            <div className="background-container"></div>
         </div>
         <div className="dolor sec">
            <div className="background-solucion"></div>
            <div className="dolorText sol">
               <h2 className="titleSolucion">
                  En Mentalis, encuentras apoyo <br />y guía profesional
               </h2>
               <p>
                  Nuestro equipo de psicólogos especializados está aquí para
                  brindarte herramientas concretas que te ayuden a superar los
                  desafíos emocionales y avanzar en tu crecimiento personal y
                  profesional.
               </p>
               <ul>
                  <li>
                     Psicoterapia individual y grupal para gestionar la
                     ansiedad, el estrés y fortalecer tu bienestar emocional.
                  </li>
                  <li>
                     Supervisión clínica profesional para profesionales en
                     formación o en ejercicio que necesiten orientación.
                  </li>
                  <li>
                     Talleres y formación especializada para el desarrollo
                     personal y profesional.
                  </li>
               </ul>
               <p style={{ paddingBottom: "15px" }}>
                  Sea cual sea tu situación, te ofrecemos un espacio seguro y de
                  confianza donde trabajar en ti mismo con el acompañamiento
                  adecuado.
               </p>
               <a href="#contacto" className="cta-buton acento">
                  Contáctanos
               </a>
            </div>
         </div>
      </div>
   );
};

export default DolorSolucionHome;
