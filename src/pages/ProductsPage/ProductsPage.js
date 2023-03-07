import Product from "./components/Product/Product";
import products from "../../components/productsData/productsData.json";
import "../ProductsPage/ProductsPage.css";
import Dropdown, { defaultValue } from "../../components/Dropdown/Dropdown";
import { useState } from "react";

export const data = JSON.parse(JSON.stringify(products));

const ProductsPage = () => {
  const [value, setValue] = useState(defaultValue);

  const changedValue = (value) => {
    const newValue = value;
    setValue(newValue);
  };

  const filteredData = data.filter((product) => {
    console.log({ product: product.category, value });
    if (product.category === value) {
      return true;
    } else if (value === defaultValue) {
      return true;
    }
  });

  console.log(`filtered data ${filteredData}`);

  return (
    <>
      <Dropdown onChange={changedValue} />
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
    </>
  );
};

export default ProductsPage;
