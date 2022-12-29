import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Home from "./containers/Home";
import ProductPage from "./containers/ProductPage";
//import Cart from "./containers/Cart";
import ProductGrid from "./containers/ProductGrid";
import { BrowserRouter, Routes, Route } from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="products" element={<ProductGrid />} />
          <Route path="products/:productId" element={<ProductPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

        //<Route index element={<Cart />} />