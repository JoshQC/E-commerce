import PropTypes from "prop-types";

import Button from "../../../layouts/Button/Button";

import "./TarjetaProducto.scss";

const TarjetaProducto = ({ producto }) => {
  const { nombre, imagenUrl, precio } = producto;

  return (
    <div className="contenedor-producto">
      <img src={imagenUrl} alt={nombre} />
      <div className="footer-producto">
        <span>{nombre}</span>
        <span>${precio}</span>
      </div>
      <Button type="button" text="Agregar al carrito" />
    </div>
  );
};

TarjetaProducto.propTypes = {
  producto: PropTypes.object,
};

export default TarjetaProducto;
