import React from "react";
import ProductCard from "../components/ProductCard";
import ProductList from "../components/ProductList";
import products from "../assets/products";
import SideBar from "../components/SideBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = () => {
  return (
    <div>
      <h1>This is the home page</h1>
      <ProductList products={products} />
    </div>
  );
};

export default Home;
