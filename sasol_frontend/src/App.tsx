import React from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

import ProductsPage from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="products" element={<ProductsPage />} />
        <Route path="products/:productId" element={<ProductDetail />} />
        <Route path="*" element={<Navigate to="/products" replace />} />
      </Routes>
    </div>
  );
}

export default App;
