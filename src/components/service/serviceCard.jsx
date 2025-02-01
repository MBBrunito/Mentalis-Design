import "./serviceCard.css";
import "../service/Paleta.css";
import Image from "next/image";
import Link from "next/link";
import { dataServices } from "@/app/shared/enums";

const ServiceCard = () => {
   return (
      <div className="serviceCards">
         {dataServices.map((card, index) => (
            <div key={index} className="serviceCard">
               <div className="dataCard">
                  <Image
                     src={card.image}
                     width={150}
                     height={150}
                     alt="Img logo servicos"
                  />
                  <h4 className="cardTitle">
                     {card.title.length > 20
                        ? `${card.title.slice(0, 28)}...`
                        : card.title}
                  </h4>
                  <p className="textoNormal">
                     {card.summary.length > 100
                        ? `${card.summary.slice(0, 100)}...`
                        : card.summary}
                  </p>
               </div>
               <div>
                  <Link href={`/servicios/${card.id}`}>Leer mas</Link>
               </div>
            </div>
         ))}
      </div>
   );
};

export default ServiceCard;
