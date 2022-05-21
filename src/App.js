import React, { useState } from "react";
import "./App.css";
import Cart from "./Cart";
import Product from "./Product";

const PAGE_PRODUCTS = "products";
const PAGE_CART = "cart";

function App() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS);

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  const addToCart = (product) => {
    setCart([...cart, { ...product }]);
  };

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
  };

  return (
    <div className="App">
      <div>
        <h1 className="heading">Shopping Cart</h1>
      </div>

      {page === PAGE_PRODUCTS && <Product addToCart={addToCart} />}
      {page === PAGE_CART && (
        <Cart cart={cart} removeFromCart={removeFromCart} />
      )}

      <footer>
        <button onClick={() => navigateTo(PAGE_CART)}>
          Go to Cart({cart.length})
        </button>
        <button onClick={() => navigateTo(PAGE_PRODUCTS)}>View Products</button>
      </footer>
    </div>
  );
}

export default App;
