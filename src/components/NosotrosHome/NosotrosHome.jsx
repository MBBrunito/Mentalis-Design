"use client";

import "./NosotrosHome.css";
import Image from "next/image";
import { dataAboutUs } from "@/app/shared/enums"; // Asegúrate de que la ruta es correcta

const NosotrosHome = () => {
   return (
      <div className="team">
         {dataAboutUs.map((member, index) => (
            <div key={index} className="team-member">
               <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={200}
                  priority
               />
               <div className="overlay">
                  <div className="texto">
                     <h3 className="name">{member.name}</h3>
                     <p className="profesion">{member.Profession}</p>
                     <p className="role">{member.Puesto}</p>
                     <a href="#" className="btn">
                        CONÓCEME
                     </a>
                  </div>
               </div>
            </div>
         ))}
      </div>
   );
};

export default NosotrosHome;
