import React from "react";
import ProductCard from "../components/ProductCard";
import ProductList from "../components/ProductList";
import products from "../assets/products";

const Men = () => {
  return (
    <div>
      <h1>Mens Clothing</h1>
      <ProductList products={products} />
    </div>
  );
};

export default Men;
