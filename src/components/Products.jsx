import React from "react";
import { styled } from "styled-components";
import { popularProducts } from "../data";
import Product from "../components/Product";
import { mobile } from "../responsive";

const Container = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;

  ${mobile({
    padding: "20px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  })}
`;

const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
