import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Error from "./pages/Error";
import SharedLayout from "./pages/SharedLayout";
import Form from "./pages/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Admin from "../src/Components/Admin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="cart" element={<Cart />} />
          <Route path="form" element={<Form />} />
          <Route path="1253" element={<Admin />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
