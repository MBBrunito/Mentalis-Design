"use client";

import ReCAPTCHA from "react-google-recaptcha";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Mailer.css";
import Swal from "sweetalert2";

export const Mailer = () => {
   const [formData, setFormData] = useState({
      user_name: "",
      user_phone: "",
      user_email: "",
      user_message: "",
   });

   const [errors, setErrors] = useState({});
   const [recaptchaToken, setRecaptchaToken] = useState(""); // Estado para guardar el token
   const [recaptchaError, setRecaptchaError] = useState(false); // Estado para manejar el error de reCAPTCHA

   // Validación de campos
   const validate = () => {
      let newErrors = {};

      if (!formData.user_name.trim()) {
         newErrors.user_name = "El nombre es obligatorio";
      } else if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(formData.user_name)) {
         newErrors.user_name = "Solo se permiten letras";
      } else if (formData.user_name.length < 3) {
         newErrors.user_name = "Debe tener al menos 3 caracteres";
      }

      if (!formData.user_phone.trim()) {
         newErrors.user_phone = "El teléfono es obligatorio";
      } else if (!/^\d+$/.test(formData.user_phone)) {
         newErrors.user_phone = "Solo se permiten números";
      } else if (formData.user_phone.length < 8) {
         newErrors.user_phone = "Debe tener al menos 8 dígitos";
      }

      if (!formData.user_email.trim()) {
         newErrors.user_email = "El correo es obligatorio";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.user_email)) {
         newErrors.user_email = "Formato de correo inválido";
      }

      if (!formData.user_message.trim()) {
         newErrors.user_message = "El mensaje es obligatorio";
      } else if (formData.user_message.length < 10) {
         newErrors.user_message =
            "El mensaje debe tener al menos 10 caracteres";
      }

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
   };

   const handleChange = (e) => {
      setFormData({
         ...formData,
         [e.target.name]: e.target.value,
      });
   };

   const sendEmail = (event) => {
      event.preventDefault();
      console.log("Service ID:", process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID);
      console.log("Template ID:", process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID);
      console.log("User ID:", process.env.NEXT_PUBLIC_EMAILJS_USER_ID);

      if (!recaptchaToken) {
         setRecaptchaError(true); // Muestra el error si el usuario no ha completado el reCAPTCHA
         // console.error("Error: reCAPTCHA no verificado");
         return;
      } else {
         setRecaptchaError(false); // Oculta el error si el reCAPTCHA está validado
      }

      if (!validate()) {
         return; // Si hay errores, no se envía el formulario
      }

      emailjs
         .sendForm(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
            event.target,
            process.env.NEXT_PUBLIC_EMAILJS_USER_ID
         )
         .then((response) => {
            Swal.fire({
               icon: "success",
               title: "Mensaje enviado",
               text: "Nos pondremos en contacto contigo pronto.",
               confirmButtonText: "OK",
            });
            console.log(response);
         })
         .catch((error) => {
            Swal.fire({
               icon: "error",
               title: "Error",
               text: "Hubo un problema al enviar el mensaje. Inténtalo nuevamente.",
            });
            console.log(error);
         });

      // Limpiar formulario después del envío
      setFormData({
         user_name: "",
         user_phone: "",
         user_email: "",
         user_message: "",
      });
      setErrors({});
      setRecaptchaToken(""); // ✅ Limpia el token después del envío
   };

   return (
      <div id="contacto" className="div-form">
         <form className="form-mail" onSubmit={sendEmail}>
            <input
               type="text"
               name="user_name"
               placeholder="Nombre Completo"
               value={formData.user_name}
               onChange={handleChange}
               onBlur={validate}
            />
            {errors.user_name && <p className="error">{errors.user_name}</p>}

            <input
               type="tel"
               name="user_phone"
               placeholder="Número de Teléfono"
               value={formData.user_phone}
               onChange={handleChange}
               onBlur={validate}
            />
            {errors.user_phone && <p className="error">{errors.user_phone}</p>}

            <input
               type="email"
               name="user_email"
               placeholder="Correo Electrónico"
               value={formData.user_email}
               onChange={handleChange}
               onBlur={validate}
            />
            {errors.user_email && <p className="error">{errors.user_email}</p>}

            <textarea
               name="user_message"
               cols="30"
               rows="5"
               placeholder="Su Mensaje o Sugerencia"
               value={formData.user_message}
               onChange={handleChange}
               onBlur={validate}
            ></textarea>
            {errors.user_message && (
               <p className="error">{errors.user_message}</p>
            )}

            {/* reCAPTCHA */}
            <div className="recaptcha-container">
               <ReCAPTCHA
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                  onChange={(token) => setRecaptchaToken(token)}
                  className={recaptchaError ? "recaptcha-error" : ""}
               />
            </div>

            {/* Mensaje de error de reCAPTCHA */}
            {recaptchaError && (
               <p className="error">⚠️ Debes completar el reCAPTCHA ⚠️</p>
            )}

            <button className="acento" type="submit">
               Enviar
            </button>
         </form>
      </div>
   );
};
