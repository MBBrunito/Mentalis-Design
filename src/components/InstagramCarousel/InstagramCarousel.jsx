"use client";
import { useEffect, useState } from "react";
import "./InstagramCarousel.css";

export default function InstagramCarousel() {
   const [instagramPosts, setInstagramPosts] = useState([]);
   const [loading, setLoading] = useState(true); // Estado para el loader

   useEffect(() => {
      async function fetchPosts() {
         try {
            const res = await fetch("/api/instagram");
            const data = await res.json();
            setInstagramPosts(data);
         } catch (error) {
            console.error("Error al obtener los posts de Instagram:", error);
         } finally {
            setLoading(false); // Ocultar loader después de la carga
         }
      }
      fetchPosts();
   }, []);

   useEffect(() => {
      if (instagramPosts.length > 0) {
         const script = document.createElement("script");
         script.async = true;
         script.src = "https://www.instagram.com/embed.js";
         document.body.appendChild(script);
      }
   }, [instagramPosts]);

   return (
      <div className="icarousel-container">
         <h2>Últimos Posts de Instagram</h2>

         {loading ? (
            <p className="iloading">⏳ Cargando posts de Instagram...</p>
         ) : (
            <div className="icarousel">
               {instagramPosts.length === 0 ? (
                  <p>No hay posts disponibles</p>
               ) : (
                  instagramPosts.map((post, index) => (
                     <div
                        key={index}
                        className="icarousel-item"
                        dangerouslySetInnerHTML={{ __html: post.iframe }}
                     />
                  ))
               )}
            </div>
         )}
      </div>
   );
}
