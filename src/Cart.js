import React from "react";

function Cart({ cart, removeFromCart }) {
  return (
    <>
      <h2>Cart</h2>
      <div className="products">
        {cart.map((product, index) => (
          <div className="product_detail" key={index}>
            <h3>{product.name}</h3>
            <img src={product.img} alt={product.name} />
            <h4>{product.cost}</h4>
            <button onClick={() => removeFromCart(product)}>
              Remove From Cart
            </button>
            <button>Buy Now</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Cart;
