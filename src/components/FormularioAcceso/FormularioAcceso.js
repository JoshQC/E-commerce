import { useState } from "react";

import {
  mostrarAlerta,
  errorAutenticacion,
} from "./../../utils/sweetalert2/sweetalert2";
import {
  crearDocumentoUsuarios,
  signInWithGooglePopup,
  signInWithTwitterPopup,
  signInWithEmailPasswordForFirestore,
} from "./../../utils/firebase/firebase";
import Input from "../../layouts/Input/Input";
import Button from "../../layouts/Button/Button";
import { ReactComponent as GoogleIcon } from "./../../assets/google.svg";
import { ReactComponent as TwitterIcon } from "./../../assets/twitter.svg";

const FormularioAcceso = () => {
  const datosFormulario = {
    correo: "",
    contrasena: "",
  };

  const [camposFormulario, setCamposFormulario] = useState(datosFormulario);
  const { correo, contrasena } = camposFormulario;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setCamposFormulario({ ...camposFormulario, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    try {
      const respuesta = await signInWithEmailPasswordForFirestore(
        correo,
        contrasena
      );
      console.log(respuesta);
      mostrarAlerta("OK", "Usuario Creado", "success");
      setCamposFormulario(datosFormulario);
    } catch (error) {
      errorAutenticacion("auth/user-not-found");
    }
  };
  const loguearConGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    crearDocumentoUsuarios(user);
  };

  const loguearConTwitter = async () => {
    const resp = await signInWithTwitterPopup();
    console.log(resp);
    //crearDocumentoUsuarios(user);
  };
  return (
    <div style={{ width: "30%" }}>
      <h2 style={{ marginBottom: "30px" }}>Acceder</h2>
      <form onSubmit={handleOnSubmit}>
        <Input
          label={"Correo: "}
          type={"text"}
          onChange={handleOnChange}
          name={"correo"}
          value={correo}
          required={true}
        />
        <Input
          label={"Contrasena: "}
          type={"password"}
          onChange={handleOnChange}
          name={"contrasena"}
          value={contrasena}
          required={true}
        />
        <div style={{ marginTop: "20px" }}>
          <Button type={"submit"} text={"Acceder"} />
          <p>Acceder con</p>
          <Button
            onClick={loguearConGoogle}
            icon={<GoogleIcon className="icon" />}
          />
          <Button
            onClick={loguearConTwitter}
            icon={<TwitterIcon className="icon" />}
          />
        </div>
      </form>
    </div>
  );
};

export default FormularioAcceso;
