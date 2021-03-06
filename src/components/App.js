import { Routes, Route } from "react-router-dom";

import NavBar from "./routes/NavBar/NavBar";
import Inicio from "./routes/Inicio/Inicio";
import Acceder from "./Acceder/Acceder";
import Tienda from "./Tienda/Tienda";
import Pagar from "../pages/Pagar/Pagar";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Inicio />} />
        <Route path="tienda" element={<Tienda />} />
        <Route path="acceder" element={<Acceder />} />
        <Route path="pagar" element={<Pagar />} />
      </Route>
    </Routes>
  );
};

export default App;
