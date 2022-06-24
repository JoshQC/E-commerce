import PropTypes from "prop-types";

import "./ItemCategoria.scss";

const ItemCategoria = ({ categoria }) => {
  return (
    <div className="categoria">
      <div
        className="imagen-categoria"
        style={{ backgroundImage: `url(${categoria.img})` }}
      />
      <div className="cuerpo-categoria">
        <h2>{categoria.nombre}</h2>
        <p>Comprar ahora</p>
      </div>
    </div>
  );
};

ItemCategoria.propTypes = {
  categoria: PropTypes.object,
};

export default ItemCategoria;
