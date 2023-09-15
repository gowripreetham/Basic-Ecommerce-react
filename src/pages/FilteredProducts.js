import React from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ProductList from "../components/ProductList";

const FilteredProducts = () => {
  //   const { fproducts } = useParams();
  const location = useLocation();
  const filteredProducts = location.state.fproducts;
  console.log("location : ", location);
  return (
    <div>
      <h3>Results to the products searched for : </h3>
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default FilteredProducts;
