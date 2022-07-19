import { useContext } from "react";

import { CarritoContext } from "../../contexts/carrito";
import { ReactComponent as CarritoLogo } from "./../../assets/carrito.svg";

import "./Carrito.scss";

const Carrito = () => {
  const { mostrarCarrito, setMostrarCarrito, contadorCarrito } =
    useContext(CarritoContext);

  const handleOnClick = () => {
    setMostrarCarrito(!mostrarCarrito);
  };

  return (
    <div className="contenedor-carrito" onClick={handleOnClick}>
      <CarritoLogo className="logo-carrito" />
      <span className="contador-carrito">{contadorCarrito}</span>
    </div>
  );
};

export default Carrito;
