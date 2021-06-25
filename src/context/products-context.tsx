import React from "react";
import { useState } from "react";

const ProductsContext = React.createContext();

const ProductsProvider = ({ defaultProducts, children }) => {
  const [products, setProducts] = useState(defaultProducts);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};

const useProducts = () => {
  const { products, setProducts } = React.useContext(ProductsContext);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const removeProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return { products, setProducts, addProduct, removeProduct };
};

export { ProductsProvider, useProducts };
