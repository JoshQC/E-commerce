import ItemCategoria from "./../ItemCategoria/ItemCategoria";
import "./ContenedorCategorias.scss";

const ContenedorCategorias = () => {
  const categorias = [
    {
      id: 1,
      nombre: "Camisas",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYmDbUbOgzo2-A5r-jXgYOQfimPaultoTl5A&usqp=CAU",
    },
    {
      id: 2,
      nombre: "Pantalones",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmGmDj1SYgiz3cJF9k0DsseppTMO1O8nvM_6YNpxcuG5rojUvwWlwVe8dPdwGpgGfpkkw&usqp=CAU",
    },
    {
      id: 3,
      nombre: "Zapatos",
      img: "https://www.podoactiva.com/wp-content/uploads/imagenes/calzado_1.jpg",
    },
    {
      id: 4,
      nombre: "Hombres",
      img: "https://i.ytimg.com/vi/SWYT7Cl-ZRk/maxresdefault.jpg",
    },
    {
      id: 5,
      nombre: "Mujeres",
      img: "https://mott.social/wp-content/uploads/2021/05/Estilos-de-ropa-para-mujer-que-esta%CC%81n-de-moda.png",
    },
  ];

  return (
    <div className="contenedor-categorias">
      {categorias.map((categoria) => {
        return <ItemCategoria key={categoria.id} categoria={categoria} />;
      })}
    </div>
  );
};

export default ContenedorCategorias;
