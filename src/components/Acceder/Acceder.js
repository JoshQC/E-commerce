import FormularioRegistro from "./../FormularioRegistro/FormularioRegistro";
import FormularioAcceso from "../FormularioAcceso/FormularioAcceso";

const Acceder = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        marginTop: "10%",
      }}
    >
      <FormularioAcceso />
      <FormularioRegistro />
    </div>
  );
};

export default Acceder;
