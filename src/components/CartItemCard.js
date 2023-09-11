import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import { ShopContext } from "../Contexts/shop-context";

const CartItemCard = (props) => {
  const { id, image, name, description, price } = props.data;
  const { cartItems } = useContext(ShopContext);
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} style={{ height: "200px" }} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>Price: ${price}</Card.Text>
          <Card.Text>Quantity: {cartItems[id]}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CartItemCard;
