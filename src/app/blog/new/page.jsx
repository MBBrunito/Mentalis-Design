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
   const [facebookIframe, setFacebookIframe] = useState("");
   const [instagramIframe, setInstagramIframe] = useState("");
   const [error, setError] = useState("");
   const [loading, setLoading] = useState(false); // Estado para mostrar el mensaje de carga
   const router = useRouter();

   const handleSubmit = async (e) => {
      e.preventDefault();

      if (!title || !content || !author || !imageFile) {
         setError("Todos los campos son obligatorios, incluida la imagen");
         return;
      }

      setLoading(true); // ⏳ Mostrar indicador de carga

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
               facebook_iframe: facebookIframe || null,
               instagram_iframe: instagramIframe || null,
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
         setFacebookIframe("");
         setInstagramIframe("");
         setError("");
      } catch (error) {
         setError(error.message);
      } finally {
         setLoading(false); // 🔄 Ocultar indicador de carga
      }
   };

   return (
      <div className="generalCont">
         <h1>Nuevo Post</h1>
         {error && <p style={{ color: "red" }}>{error}</p>}
         {loading && (
            <p style={{ color: "blue" }}>⏳ Publicando post...</p>
         )}{" "}
         {/* Indicador de carga */}
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
            {/* Campos opcionales para iframes */}
            <textarea
               className="textImg"
               placeholder="Pega aquí el iframe de Facebook (opcional)..."
               value={facebookIframe}
               onChange={(e) => setFacebookIframe(e.target.value)}
               rows={3}
            />
            <textarea
               className="textImg"
               placeholder="Pega aquí el iframe de Instagram (opcional)..."
               value={instagramIframe}
               onChange={(e) => setInstagramIframe(e.target.value)}
               rows={3}
            />
            <button type="submit" disabled={loading}>
               {loading ? "Publicando..." : "Publicar"}
            </button>{" "}
            {loading && <p style={{ color: "blue" }}>⏳ Publicando post...</p>}{" "}
            {/* Indicador de carga */}
         </form>
      </div>
   );
}
