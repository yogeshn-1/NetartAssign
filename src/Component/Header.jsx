import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
`;

const Header = () => {
  return (
    <Container>
      <img src={logo} alt="Logo" style={{ height: "100px", width: "350px" }} />
    </Container>
  );
};

export default Header;
