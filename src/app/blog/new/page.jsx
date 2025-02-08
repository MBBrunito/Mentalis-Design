"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import UploadImage from "@/components/UploadImage/UploadImage";
import "./newPost.css";

export default function NewPost() {
   const [title, setTitle] = useState("");
   const [content, setContent] = useState("");
   const [author, setAuthor] = useState("");
   const [imageFile, setImageFile] = useState(null);
   const [error, setError] = useState("");
   const router = useRouter();

   const handleSubmit = async (e) => {
      e.preventDefault();

      if (!title || !content || !author || !imageFile) {
         setError("Todos los campos son obligatorios, incluida la imagen");
         return;
      }

      try {
         // 1️⃣ Subimos la imagen a Cloudinary
         const formData = new FormData();
         formData.append("file", imageFile);
         formData.append(
            "upload_preset",
            process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
         );

         const resImage = await fetch(
            `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
            { method: "POST", body: formData }
         );

         if (!resImage.ok) {
            throw new Error("Error al subir la imagen. Intenta nuevamente.");
         }

         const imageData = await resImage.json();
         const imageUrl = imageData.secure_url;

         // 2️⃣ Guardamos el post en la base de datos
         const resPost = await fetch("/api/posts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
               title,
               content,
               author,
               image_url: imageUrl,
            }),
         });

         if (!resPost.ok) {
            const data = await resPost.json();
            throw new Error(
               data.error || "Error al guardar el post. Intenta nuevamente."
            );
         }

         // 3️⃣ Confirmación y redirección
         const goToBlog = confirm(
            "✅ Post publicado con éxito. ¿Quieres ir al blog?"
         );
         if (goToBlog) {
            router.push("/blog");
         } else {
            router.push("/");
         }

         // 4️⃣ Resetear formulario solo si todo salió bien
         setTitle("");
         setContent("");
         setAuthor("");
         setImageFile(null);
         setError("");
      } catch (error) {
         console.error(error);
         setError(error.message);
      }
   };

   return (
      <div className="generalCont">
         <h1>Nuevo Post</h1>
         {error && <p style={{ color: "red" }}>{error}</p>}
         <form className="postCont" onSubmit={handleSubmit}>
            <input
               className="formImg"
               type="text"
               placeholder="Título"
               value={title}
               onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
               className="textImg"
               placeholder="Contenido"
               value={content}
               onChange={(e) => setContent(e.target.value)}
            />
            <input
               className="formImg"
               type="text"
               placeholder="Autor"
               value={author}
               onChange={(e) => setAuthor(e.target.value)}
            />

            {/* Componente de subida de imagen */}
            <div className="upImgCont">
               <UploadImage setImageFile={setImageFile} />
            </div>
            <button type="submit">Publicar</button>
         </form>
      </div>
   );
}
