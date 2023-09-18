import React from "react";
import "../App.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import products from "../assets/products";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const lhFunc = () => {
    const fproducts = [...products];
    fproducts.sort((a, b) => a.price - b.price);
    navigate("/SearchedProducts", { state: { fproducts } });
  };

  const hlFunc = () => {
    const fproducts = [...products];
    fproducts.sort((a, b) => b.price - a.price);
    navigate("/SearchedProducts", { state: { fproducts } });
  };

  return (
    <div className="sidebar">
      <h2>Filters </h2>
      <DropdownButton id="dropdown-basic-button" title="Price Sort">
        <Dropdown.Item onClick={(e) => lhFunc(products)}>
          Low to High
        </Dropdown.Item>
        <Dropdown.Item onClick={(e) => hlFunc(products)}>
          High to Low
        </Dropdown.Item>
      </DropdownButton>
    </div>
  );
};

export default SideBar;
