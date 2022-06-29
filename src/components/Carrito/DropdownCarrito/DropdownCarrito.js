import { useContext } from "react";

import Button from "./../../../layouts/Button/Button";
import { CarritoContext } from "../../../contexts/carrito";

import "./DropdownCarrito.scss";

const DropdownCarrito = () => {
  const { itemsCarrito } = useContext(CarritoContext);

  return (
    <div className="contenedor-dropdown">
      <div className="items-carrito">
        {itemsCarrito ? (
          itemsCarrito.map((item) => {
            return <h2>{item.nombre}</h2>;
          })
        ) : (
          <p>No hay items</p>
        )}
      </div>
      <Button type="button" text="Pagar" />
    </div>
  );
};

export default DropdownCarrito;
