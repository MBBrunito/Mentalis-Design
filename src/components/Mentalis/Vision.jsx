import { dataVision } from "@/app/shared/enums";
import Image from "next/image";
import "./Vision.css";

const VisionCard = () => {
   return (
      <div className="vision">
         {dataVision.map((card, index) => (
            <div key={index}>
               <h3>{card.title}</h3>
               <p>{card.description}</p>
               <Image
                  src={card.image}
                  width={250}
                  height={250}
                  alt="Vision Mentalis"
                  className="visionImage"
               />
            </div>
         ))}
      </div>
   );
};
export default VisionCard;
