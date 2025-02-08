"use client";
import { useState } from "react";
import Image from "next/image";

export default function UploadImage({ setImageFile }) {
   const [imagePreview, setImagePreview] = useState(null);

   const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
         setImageFile(file); // Guardamos el archivo en el estado del formulario
         const reader = new FileReader();
         reader.onloadend = () => setImagePreview(reader.result);
         reader.readAsDataURL(file);
      }
   };

   return (
      <div className="image">
         <input type="file" accept="image/*" onChange={handleImageChange} />
         <br />
         {imagePreview && (
            <Image
               src={imagePreview}
               alt="Vista previa"
               width={300}
               height={200}
               style={{ objectFit: "contain", borderRadius: "8px" }}
            />
         )}
      </div>
   );
}
