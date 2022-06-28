import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; //ReactRouter

import App from "./components/App";
import { UsuarioProvider } from "./contexts/usuarios";
import { ProductosProvider } from "./contexts/productos";
import { CarritoProvider } from "./contexts/carrito";

import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <UsuarioProvider>
      <ProductosProvider>
        <CarritoProvider>
          <App />
        </CarritoProvider>
      </ProductosProvider>
    </UsuarioProvider>
  </BrowserRouter>
);
