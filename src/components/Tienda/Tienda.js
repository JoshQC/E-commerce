import data from "./../../data.json";
import "./Tienda.scss";

const Tienda = () => {
  console.log(data);
  return (
    <div className="tienda">
      <h2>Tienda</h2>
      {data.map((producto) => {
        return <h3>{producto.nombre}</h3>;
      })}
    </div>
  );
};

export default Tienda;
