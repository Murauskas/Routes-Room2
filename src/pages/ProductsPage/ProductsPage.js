import Product from "./components/Product/Product";
import products from "../../components/productsData/productsData.json";

const data = JSON.parse(JSON.stringify(products));

const ProductsPage = () => {
  return (
    <div>
      {data.map((product) => {
        return (
          <Product
            id={product.id}
            label={product.label}
            key={product.id}
            category={product.category}
          />
        );
      })}
    </div>
  );
};

export default ProductsPage;
