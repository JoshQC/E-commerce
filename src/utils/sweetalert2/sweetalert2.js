import Swal from "sweetalert2";

export const mostrarToast = (mensaje, posicion) => {
  Swal.fire({
    text: mensaje,
    target: ".toast",
    customClass: {
      container: "position-absolute",
    },
    toast: true,
    position: posicion,
  });
};

export const mostrarAlerta = (titulo, mensaje, tipo) => {
  Swal.fire(titulo, mensaje, tipo);
};

export const errorAutenticacion = (codigo) => {
  switch (codigo) {
    case "auth/weak-password":
      Swal.fire(
        "Error",
        "La contraseña debe tener mas de 6 digitos",
        "warning"
      );
      break;
    case "contrasena-no-coincide":
      Swal.fire("Error", "Las contraseñas no coinciden", "warning");
      break;
    case "auth/user-not-found":
      Swal.fire("Error", "El usuario no existe", "error");
      break;
    case "auth/invalid-email":
      Swal.fire("Error", "El correo es invalido", "warning");
      break;
    default:
      Swal.fire("Error", "Hubo un error al registrar al usuario", "error");
  }
};
//
