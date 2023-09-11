import React, { useContext } from "react";
import { useState } from "react";
import { ShopContext } from "../Contexts/shop-context";
import CartItemCard from "../components/CartItemCard";
import products from "../assets/products";

const Cart = () => {
  const { cartItems } = useContext(ShopContext);
  if (cartItems) {
    return (
      <div>
        <h2>Shopping Cart</h2>
        <div>
          {products.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItemCard data={product} />;
            }
          })}
        </div>
      </div>
    );
  } else {
    return <h1>YOur cart is Empty!!!!</h1>;
  }
};

export default Cart;
