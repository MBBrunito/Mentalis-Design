import EmailTemplate from "@/components/Form/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_KEY);

export async function POST(request) {
   try {
      const formData = await request.json(); // Obtener los datos del request

      const data = await resend.emails.send({
         from: "MENTALIS <info@mentalis.com.mx>",
         to: [formData.email, "Mentalis2024@gmail.com"],
         subject: "Consulta General",
         react: EmailTemplate({
            firstName: formData.firstName,
            lastName: formData.lastName,
            phone: formData.phone,
            email: formData.email,
            description: formData.description,
         }),
      });

      console.log(data);
      return Response.json(data); // Responder con Response.json()
   } catch (error) {
      console.error("Error al enviar correo:", error);
      return Response.json(
         { error: "Error al enviar el correo" },
         { status: 400 }
      );
   }
}
