import React from "react";
import styled from "styled-components";
import COLORS from "../../constants/colors";
import Page from "../../components/Page";
import Products from "../../components/Products";

const Container = styled.div`
  height: 105vh;
  padding-bottom: 250px;
`;

const Product = () => {
  return (
    <Container>
      <Page>
        <Page.Title>Scandenziario</Page.Title>
        <Products />
      </Page>
    </Container>
  );
};

export default Product;
