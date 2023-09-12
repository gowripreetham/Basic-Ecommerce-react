import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import { ShopContext } from "../Contexts/shop-context";
import Button from "react-bootstrap/Button";

const CartItemCard = (props) => {
  const { id, image, name, description, price } = props.data;
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} style={{ height: "200px" }} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>Price: ${price}</Card.Text>
          <Card.Text>Quantity: {cartItems[id]}</Card.Text>
          <Button variant="primary" onClick={() => addToCart(id)}>
            +
          </Button>
          <Button variant="danger" onClick={() => removeFromCart(id)}>
            -
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CartItemCard;
