import Product from "./components/Product/Product";
import products from "../../components/productsData/productsData.json";
import "../ProductsPage/ProductsPage.css";

const data = JSON.parse(JSON.stringify(products));

const ProductsPage = ({productCategory}) => {
  console.log(`product category ${productCategory}`);

  const filteredData = data.filter(() => {
    return true;
  });

  return (
    <div className="product-data">
      {filteredData.map((product) => {
        return (
          <Product
            className="product"
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
