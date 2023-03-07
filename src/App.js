import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import Dropdown from './components/Dropdown/Dropdown';
import { useState } from "react";

function App() {
  const [value, setValue] = useState("all");

  const changedValue = (value) => {
    const newValue = value;
    console.log(`value app ${value}`);
    setValue(newValue);
  };

  return (
    <Layout>
      <HomePage />
      <Dropdown onChange={changedValue}/>
      <ProductsPage productCategory={value} />
    </Layout>
  );
}

export default App;
