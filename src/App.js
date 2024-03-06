import { Component } from 'react';
import './App.css';
import ProductsPage from './components/products';
import ProductAddPage from './components/productsAdd';
import {BrowserRouter, Routes, Route} from "react-router-dom";


class App extends Component{

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductsPage />} />
          <Route path="addproduct" element={<ProductAddPage />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
