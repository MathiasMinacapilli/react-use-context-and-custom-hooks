import React from "react";
import { useProducts } from "../../context/products-context";

const CreateProduct = () => {
  const [name, setName] = React.useState("");
  const [error, setError] = React.useState("");

  const { addProduct } = useProducts();

  const handleConfirm = () => {
    if (name !== "") {
      addProduct({ id: name, name: name });
      setError("");
      setName("");
    } else {
      setError("El name no puede ser vacío!");
    }
  };

  return (
    <div>
      <h2>Create Product</h2>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleConfirm}>Agregar producto</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default CreateProduct;
