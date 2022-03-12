import Product from "../prodcut/product";
import products from "../../db/products.json";
const Products = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
};
export default Products;
