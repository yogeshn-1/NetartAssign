import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  img {
    height: 110px;
    width: auto;
  }
  @media screen and (max-width: 768px) {
    img {
      height: 90px;
    }
  }
`;

const Header = () => {
  return (
    <Container>
      <img src={logo} alt="Logo" />
    </Container>
  );
};

export default Header;
