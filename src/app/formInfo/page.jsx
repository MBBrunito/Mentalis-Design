import FormCard from "../../components/Form/Form";

export const metadata = {
   title: "FormInfo - Mentalis",
};

const FormInfo = () => {
   return (
      <div>
         <div>
            <h2 className="formTitle">Déjanos tu consulta</h2>
            <FormCard />
         </div>
      </div>
   );
};

export default FormInfo;
