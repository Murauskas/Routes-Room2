import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import ProductsPage from './pages/ProductsPage/ProductsPage';

function App() {
  return (
    <Layout>
      <HomePage />
      <ProductsPage />
    </Layout>
  );
}

export default App;
