import { Routes, Route, Link } from "react-router-dom";
import ContenedorCategorias from "./Categorias/ContenedorCategorias/ContenedorCategorias";

const Redireccionar = () => {
  return <Link to={"/categorias"}>Ir a Categorias</Link>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Redireccionar />} />
      <Route path="categorias" element={<ContenedorCategorias />} />
    </Routes>
  );
};

export default App;
