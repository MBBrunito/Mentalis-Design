"use client";
import { useEffect, useState } from "react";
import "./FacebookCarousel.css";

export default function FacebookCarousel() {
   const [facebookPosts, setFacebookPosts] = useState([]);

   useEffect(() => {
      async function fetchPosts() {
         const res = await fetch("/api/facebook");
         const data = await res.json();
         setFacebookPosts(data);
      }
      fetchPosts();
   }, []);

   return (
      <div className="fcarousel-container">
         <h2>Últimos Posts de Facebook</h2>
         <div className="fcarousel">
            {facebookPosts.length === 0 ? (
               <p>No hay posts disponibles</p>
            ) : (
               facebookPosts.map((post, index) => (
                  <div
                     key={index}
                     className="fcarousel-item"
                     dangerouslySetInnerHTML={{ __html: post.iframe }}
                  />
               ))
            )}
         </div>
      </div>
   );
}
