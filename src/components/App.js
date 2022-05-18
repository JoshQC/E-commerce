import { Routes, Route } from "react-router-dom";
import Inicio from "./routes/Inicio";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
    </Routes>
  );
};

export default App;
