"use client";
import { useState } from "react";
import "./UploadForm.css";

const UploadForm = () => {
   const [files, setFiles] = useState([]);
   const [uploadSuccess, setUploadSuccess] = useState(false);
   const [loading, setLoading] = useState(false);

   const handleFileChange = (event) => {
      setFiles(event.target.files);
      setUploadSuccess(false); // Reinicia el estado de éxito al cambiar archivos
   };

   const handleUpload = async () => {
      //const cloudName = "dy3be98kn"; // Reemplaza con tu Cloudinary cloud name
      //const uploadPreset = "FotosWeb"; // Reemplaza con tu Upload Preset

      if (files.length === 0) {
         alert("Selecciona al menos un archivo para subir.");
         return;
      }

      setLoading(true);
      setUploadSuccess(false);

      const uploadPromises = [];

      for (const file of files) {
         const formData = new FormData();
         formData.append("file", file);
         formData.append(
            "upload_preset",
            process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
         );

         const uploadPromise = fetch(
            `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
            {
               method: "POST",
               body: formData,
            }
         )
            .then((response) => response.json())
            .then((data) => {
               console.log("Imagen subida:", data.secure_url);
            })
            .catch((error) => {
               console.error("Error al subir la imagen:", error);
            });

         uploadPromises.push(uploadPromise);
      }

      try {
         await Promise.all(uploadPromises);
         setUploadSuccess(true); // Muestra mensaje de éxito
         setFiles([]); // Resetea la selección de archivos
         document.getElementById("fileInput").value = ""; // Limpia el input file
      } catch (error) {
         console.error("Error en la subida:", error);
      }

      setLoading(false);
   };

   return (
      <div className="uploadContent">
         <h2>Subir Imágenes</h2>
         <input
            id="fileInput"
            type="file"
            multiple
            onChange={handleFileChange}
         />
         <button onClick={handleUpload} disabled={loading}>
            {loading ? "Subiendo..." : "Subir Imágenes"}
         </button>

         {/* Mensaje de éxito */}
         {uploadSuccess && (
            <p
               style={{ color: "green", fontWeight: "bold", marginTop: "10px" }}
            >
               ✅ Imágenes subidas con éxito.
            </p>
         )}
      </div>
   );
};

export default UploadForm;
