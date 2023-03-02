import { Link } from "react-router-dom"
import "./HomePage.css"

const HomePage = () => {
    return (
      <div className="container">
        <header className="heading">My react router project</header>
        <Link className="products-link">Products Page</Link>
      </div>
    );
}

export default HomePage