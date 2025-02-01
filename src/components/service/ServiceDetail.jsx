"use client";

import "./serviceCard.css";
import Image from "next/image";
import Link from "next/link";
import { dataServices } from "@/app/shared/enums";
import { useParams } from "next/navigation";

const ServiceDetail = () => {
   const { id } = useParams();
   const serviceFind = dataServices.find(
      (service) => service.id === parseInt(id)
   );

   if (!serviceFind) {
      return <h1>Servicio no encontrado</h1>;
   }
   return (
      <div className="serviceCards">
         <Link href={"/servicios"}>X</Link>
         <div key={serviceFind.id} className="serviceCard">
            <Image
               src={serviceFind.image}
               width={100}
               height={100}
               alt="Img logo servicos"
            />
            <h3>{serviceFind.title}</h3>
            <p>{serviceFind.description}</p>
            <Link href={"/formInfo"}>consultar servicio</Link>
         </div>
      </div>
   );
};

export default ServiceDetail;
