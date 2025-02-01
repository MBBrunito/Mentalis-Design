import ServiceCard from "../../components/service/serviceCard";
import "./servicios.css";

export const metadata = {
   title: "Servicios - Mentalis",
};

export default function Servicios() {
   return (
      <div className="contServ">
         <div className="contenido">
            <h2 className="titleH2">Servicios</h2>
            <p className="textoNormal">
               Aquí iría una breve descripción de los servicios que ofrece
               Mentalis
            </p>
            <hr />
            <ServiceCard />
         </div>
      </div>
   );
}
