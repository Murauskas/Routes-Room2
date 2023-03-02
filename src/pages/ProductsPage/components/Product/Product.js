import { Link } from "react-router-dom";
import "./Product.css"

const Product = ({ id, label, category}) => {
  return (
    <div className="product">
      <h3>{label}</h3>
      <p>{category}</p>
      <div>
        <Link to={id.toString()} className="more-details">
          More Details
        </Link>
      </div>
    </div>
  );
};

export default Product