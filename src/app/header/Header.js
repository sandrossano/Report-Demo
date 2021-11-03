import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import Actions from "./Actions";

const Container = styled.div`
  padding: 0 40px;
  height: 58px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header = () => {
  return (
    <Container>
      <Logo />
      <Actions />
    </Container>
  );
};

export default Header;
