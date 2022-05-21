import React from "react";
import Home from "./Home";
import Product_Cart from "./ProductCart";
import { cartProvider } from "react-use-cart";

function App_sec() {
  return (
    <>
      <cartProvider>
        <Home />
        <Product_Cart />
      </cartProvider>
    </>
  );
}

export default App_sec;
