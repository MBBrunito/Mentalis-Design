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

      const imageData = await resImage.json();
      const imageUrl = imageData.secure_url; // URL de la imagen subida

      // 2️⃣ Guardamos el post en la base de datos
      const resPost = await fetch("/api/posts", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({ title, content, author, image_url: imageUrl }),
      });

      if (!resPost.ok) {
         const data = await resPost.json();
         setError(data.error);
         return;
      }

      // 3️⃣ Mostrar el alert antes de redirigir
      if (confirm("✅ Post publicado con éxito. ¿Quieres ir al blog?")) {
         router.push("/blog");
      }

      // 4️⃣ Resetear el formulario y redirigir
      setTitle("");
      setContent("");
      setAuthor("");
      setImageFile(null);
      setError("");
      router.push("/blog"); // Redirigir a la lista de posts
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
