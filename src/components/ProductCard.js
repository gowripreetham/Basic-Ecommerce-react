import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import image from "../assets/images/white-shirt.jpeg";
import ProductDetails from "../pages/ProductDetails";
import products from "../assets/products";
import { ShopContext } from "../Contexts/shop-context";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  function view() {
    // navigate("/product/:productId");
    navigate("/product/${product.id}");
  }

  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[product.id];

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={product.image}
          style={{ height: "200px" }}
        />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text>Price: ${product.price}</Card.Text>
          <Button variant="primary" onClick={view}>
            View
          </Button>
          <Button variant="primary " onClick={() => addToCart(product.id)}>
            {/* onClick={() => addTocart(product)} */}
            Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
