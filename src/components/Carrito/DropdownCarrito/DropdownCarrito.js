import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Button from "./../../../layouts/Button/Button";
import ItemsCarrito from "./ItemsCarrito/ItemsCarrito";
import { CarritoContext } from "../../../contexts/carrito";

import "./DropdownCarrito.scss";

const DropdownCarrito = () => {
  const { itemsCarrito, setMostrarCarrito, mostrarCarrito } =
    useContext(CarritoContext);
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/pagar");
    setMostrarCarrito(!mostrarCarrito);
  };
  return (
    <div className="contenedor-dropdown">
      <div className="items-carrito">
        {itemsCarrito.length > 0 ? (
          itemsCarrito.map((item) => {
            return <ItemsCarrito key={item.id} item={item} />;
          })
        ) : (
          <p>No hay items</p>
        )}
      </div>

      {itemsCarrito.length > 0 && (
        <Button type="button" text="Pagar" onClick={handleOnClick} />
      )}
    </div>
  );
};

export default DropdownCarrito;
