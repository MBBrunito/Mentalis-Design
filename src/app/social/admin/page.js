import AddIframeForm from "@/components/AddIframeForm/AddIframeForm";
import "./admin.css";

export default function AdminPage() {
   return (
      <div>
         <h1>Administrar Posts de Redes Sociales</h1>

         <section>
            <h2>Agregar Post de Facebook</h2>
            <AddIframeForm apiEndpoint="/api/facebook" />
         </section>

         <section>
            <h2>Agregar Post de Instagram</h2>
            <AddIframeForm apiEndpoint="/api/instagram" />
         </section>
      </div>
   );
}
