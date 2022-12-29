import { useState } from "react";
import "./App.css";
import Home from "./containers/Home";
import ProductGrid from "./containers/ProductGrid";
//import ProductPage from "./containers/ProductPage"
//import Cart from "./containers/Cart"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<ProductGrid />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// <Route path="cart" element={<Cart />} />
// <Route path="products/:productId" element={<ProductPage />} />
// <Route path="favourites" element={<ProductGrid fav={true} />} />
export default App;
