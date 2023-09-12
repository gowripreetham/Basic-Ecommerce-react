import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import products from "../assets/products";
import { ShopContext } from "../Contexts/shop-context";

const ProductDetails = () => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId));
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[product.id];
  return (
    <div>
      <br></br>
      <h2>THe Complete Details of the Product :- </h2>
      <img src={product.image}></img>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <Button variant="primary " onClick={() => addToCart(product.id)}>
        Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
      </Button>
    </div>
  );
};

export default ProductDetails;
