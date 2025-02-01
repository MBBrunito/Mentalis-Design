//Esta es la plantilla que llegara al correo de mentalis.
const EmailTemplate = ({ firstName, lastName, phone, email, description }) => (
   <div>
      <h1>
         Interesado: {firstName} {lastName}
      </h1>
      <h4>Teléfono: {phone}</h4>
      <h4>Correo Electrónico: {email}</h4>
      <hr />
      <p>Descripcion de solicitud: {description}</p>
      <button>
         <a href="https://mentalis.com.mx/"> Ve a Mentalis</a>
      </button>
   </div>
);

export default EmailTemplate;
