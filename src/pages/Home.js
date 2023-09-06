import React from "react";
import ProductCard from "../components/ProductCard";
import ProductList from "../components/ProductList";
import products from "../assets/products";

const Home = () => {
  return (
    <div>
      <h1>This is the home page</h1>
      {/* <ProductCard /> */}
      <ProductList products={products} />
    </div>
  );
};

export default Home;
