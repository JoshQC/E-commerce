import { Routes, Route } from "react-router-dom";

import NavBar from "./routes/NavBar/NavBar";
import Inicio from "./routes/Inicio/Inicio";
import Acceder from "./Acceder/Acceder";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Inicio />} />
        <Route path="tienda" element={<h1>tienda</h1>} />
        <Route path="acceder" element={<Acceder />} />
      </Route>
    </Routes>
  );
};

export default App;
