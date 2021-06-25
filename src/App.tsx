import "./styles.css";
import { ProductsProvider } from "./context/products-context";

// Components
import ProductsList from "./components/products-list/products-list";
import CreateProduct from "./components/product-creation/create-product";

export default function App() {
  return (
    <div className="App">
      <ProductsProvider defaultProducts={[{ id: 1, name: "Laptop Acer" }]}>
        <div>
          <h1>Welcome to products</h1>
          <ProductsList />
          <CreateProduct />
        </div>
      </ProductsProvider>
    </div>
  );
}
