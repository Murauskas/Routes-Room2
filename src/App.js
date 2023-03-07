import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import { routes } from "./components/constants/routes";
import ProductPage from "./pages/ProductsPage/ProductPage/ProductPage";


function App() {

  return (
    <Layout>
      <Routes>
        <Route path={routes.homePage} element={<HomePage/>} />
        <Route path={routes.productsPage} element={<ProductsPage />} />
        <Route path={routes.productPage} element={<ProductPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
