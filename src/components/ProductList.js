import React from "react";
import ProductCard from "./ProductCard";
import { Container, Row, Col } from "react-bootstrap";
import SideBar from "./SideBar";

const ProductList = ({ products }) => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col sm={2}>
            <SideBar></SideBar>
          </Col>
          <Col sm={10}>
            <Container>
              <Row>
                {products.map((product, index) => (
                  <Col key={index} sm={12} md={6} lg={4}>
                    <ProductCard product={product} />
                  </Col>
                ))}
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductList;
