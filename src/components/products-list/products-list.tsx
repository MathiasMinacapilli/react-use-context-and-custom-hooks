import React from "react";
import { useProducts } from "../../context/products-context";

const ProductsList = () => {
  const { products, removeProduct } = useProducts();

  const deleteProductHandler = (id) => {
    removeProduct(id);
  };

  return (
    <div>
      <h2>Products List</h2>
      {products
        ? products.map((product) => (
            <li>
              {product.name}{" "}
              <button onClick={() => deleteProductHandler(product.id)}>
                Eliminar
              </button>
            </li>
          ))
        : "There are no products available."}
    </div>
  );
};

export default ProductsList;
