import { Link } from "react-router-dom"
import { routes } from "../../components/constants/routes";
import "./HomePage.css"

const HomePage = () => {
    return (
      <div className="container">
        <header className="heading">My react router project</header>
        <Link to={routes.productsPage} className="products-link">Products Page</Link>
      </div>
    );
}

export default HomePage