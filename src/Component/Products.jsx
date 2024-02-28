import React from "react";
import styled from "styled-components";
import product from "../assets/3.png";
const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin: 2rem auto;
  align-items: center;
`;
const ProductImage = styled.img`
  width: 80%;
  height: auto;
`;
const Caption = styled.figcaption`
  text-align: center;
  margin-top: 5px;
  font-size: small;
  @media screen and (max-width: 768px) {
    font-size: x-small;
  }
  @media screen and (min-width: 1280px) {
    font-size: medium;
  }
`;
const ProdTitle = styled.h4`
  text-align: center;
  @media screen and (max-width: 680px) {
    font-size: small;
  }
`;
const Products = () => {
  return (
    <Container>
      <ProdTitle>
        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING
        IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE
        NATION.
      </ProdTitle>
      <ProductImage src={product} alt="products" />
      <Caption>
        Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
        Solar Systems - Motors
      </Caption>
    </Container>
  );
};

export default Products;
