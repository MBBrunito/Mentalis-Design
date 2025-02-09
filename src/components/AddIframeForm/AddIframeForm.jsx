"use client";
import { useState } from "react";

export default function AddIframeForm({ apiEndpoint }) {
   const [iframe, setIframe] = useState("");
   const [loading, setLoading] = useState(false);
   const [message, setMessage] = useState("");

   const handleSubmit = async (e) => {
      e.preventDefault();
      if (!iframe.trim()) {
         setMessage("⚠️ Debes ingresar un iframe válido.");
         return;
      }

      setLoading(true);
      setMessage("");

      try {
         const res = await fetch(apiEndpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ iframe }),
         });

         if (!res.ok) {
            throw new Error("Error al guardar el iframe.");
         }

         setMessage("✅ Iframe agregado con éxito.");
         setIframe("");
      } catch (error) {
         setMessage(`❌ ${error.message}`);
      } finally {
         setLoading(false);
      }
   };

   return (
      <div className="iframe-form">
         <h2>Agregar Post</h2>
         {message && <p className="message">{message}</p>}
         <form onSubmit={handleSubmit}>
            <textarea
               placeholder="Pega aquí el iframe del post..."
               value={iframe}
               onChange={(e) => setIframe(e.target.value)}
               rows={3}
            />
            <button type="submit" disabled={loading}>
               {loading ? "Guardando..." : "Guardar Post"}
            </button>
         </form>
      </div>
   );
}
