import { dataObjective } from "@/app/shared/enums";
import Image from "next/image";

const ObjetiveCard = () => {
   return (
      <div className="vision">
         {dataObjective.map((card, index) => (
            <div key={index}>
               <h3>{card.title}</h3>
               <p>{card.description}</p>
               <Image
                  src={card.image}
                  width={250}
                  height={250}
                  alt="Objetivos Mentalis"
                  className="visionImage"
               />
            </div>
         ))}
      </div>
   );
};

export default ObjetiveCard;
