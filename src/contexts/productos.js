import { createContext, useState } from "react";
import PRODUCTOS from "./../data.json";

export const ProductoContext = createContext({
  productos: [],
});

export const ProductosProvider = ({ children }) => {
  const [productos, setProductos] = useState(PRODUCTOS);
  const value = { productos };

  return (
    <ProductosProvider.Provider value={value}>
      {children}
    </ProductosProvider.Provider>
  );
};
