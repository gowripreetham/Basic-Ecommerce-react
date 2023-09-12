import React, { useContext } from "react";
import { useState } from "react";
import { ShopContext } from "../Contexts/shop-context";
import CartItemCard from "../components/CartItemCard";
import products from "../assets/products";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

//Create seperate variable and store the total price
//in it by adding the product of quantites and prices.

const Cart = () => {
  const { cartItems, getTotalAmount } = useContext(ShopContext);
  const totalPrice = getTotalAmount();
  if (totalPrice > 0) {
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
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Text>Total Price: ${totalPrice}</Card.Text>
          </Card.Body>
        </Card>
        <br></br>
        <Button variant="success">Checkout</Button>
      </div>
    );
  } else {
    return <h1>YOur cart is Empty!!!!</h1>;
  }
};

export default Cart;
