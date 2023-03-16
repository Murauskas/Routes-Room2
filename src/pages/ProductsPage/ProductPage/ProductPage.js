import { useParams } from "react-router-dom";
import { data } from "../ProductsPage";

const ProductPage = () => {
  const { id } = useParams();
  const product = data.find((product) => product.id === Number.parseInt(id));

    console.log(product);

  return (
    <div className="product">
      <h3>{product.label}</h3>
      <img src={product.img} alt={product.label}/>
      <p>{product.category}</p>
      <p>{product.about}</p>
      <p>{product.price} eur</p>
    </div>
  );
};

export default ProductPage;
