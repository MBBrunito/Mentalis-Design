import { dataMission } from "@/app/shared/enums";
import Image from "next/image";
import "./Mision.css";

const MissionCard = () => {
   return (
      <div className="vision">
         {dataMission.map((card, index) => (
            <div key={index}>
               <h3>{card.title}</h3>
               <p>{card.description}</p>
               <Image
                  src={card.image}
                  width={250}
                  height={250}
                  alt="Mision Mentalis"
                  className="visionImage"
               />
            </div>
         ))}
      </div>
   );
};

export default MissionCard;
