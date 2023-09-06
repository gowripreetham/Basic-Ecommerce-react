import React from "react";
import ProductCard from "./ProductCard";
import { Container, Row, Col } from "react-bootstrap";

const ProductList = ({ products }) => {
  return (
    <div>
      <Container>
        <Row>
          {products.map((product, index) => (
            <Col key={index} sm={12} md={6} lg={4}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductList;
