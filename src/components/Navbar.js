import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/Button";
import products from "../assets/products";

const NavigationBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [fproducts, setFproducts] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Reset the fproducts state when the location (route) changes
    setFproducts([]);
  }, [location]);

  useEffect(() => {
    if (fproducts.length > 0) {
      navigate("/SearchedProducts", { state: { fproducts } });
    }
  }, [fproducts, navigate]);

  const handleSearch = (searchQuery) => {
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    // Set the filtered products in your state or pass them to a child component for rendering
    setFproducts(filteredProducts);
    // navigate(`/SearchedProducts/${fproducts}`);
    // navigate("/SearchedProducts", { state: { fproducts } });
    setSearchQuery("");
  };

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">
        Shopping Website
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar" />
      <Navbar.Collapse id="navbar">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/home">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/men">
            Men
          </Nav.Link>
          <Nav.Link as={Link} to="/women">
            Women
          </Nav.Link>
          <Nav.Link as={Link} to="/kids">
            Kids
          </Nav.Link>
          <Nav.Link as={Link} to="/Cart">
            Cart
          </Nav.Link>
          <Nav.Link as={Link} to="/User">
            User
          </Nav.Link>
        </Nav>
        <InputGroup>
          <FormControl
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </InputGroup>
        <Button
          variant="outline-primary"
          onClick={(e) => handleSearch(searchQuery)}
        >
          Search
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
