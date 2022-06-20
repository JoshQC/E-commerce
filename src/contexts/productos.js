import { createContext, useState } from "react";

import listOfProducts from "./../data.json";

export const ProductosContext = createContext({
  productos: [],
});

export const ProductosProvider = ({ children }) => {
  const [productos, setProductos] = useState(listOfProducts);
  const value = { productos };

  return (
    <ProductosProvider.Provider value={value}>
      {children}
    </ProductosProvider.Provider>
  );
};
