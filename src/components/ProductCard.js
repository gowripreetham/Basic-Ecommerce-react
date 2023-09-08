import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import image from "../assets/images/white-shirt.jpeg";
import ProductDetails from "../pages/ProductDetails";
import products from "../assets/products";

const ProductCard = () => {
  const navigate = useNavigate();

  function view() {
    navigate("/product/:productId");
    // navigate('/product/${product.id}');
  }

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>White Shirt</Card.Title>
          <Card.Text>This is a White Shirt.</Card.Text>
          <Button variant="primary" onClick={view}>
            View
          </Button>
          <Button variant="primary">Add to Cart</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
