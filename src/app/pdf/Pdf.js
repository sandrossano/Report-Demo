import React from "react";
import styled from "styled-components";
import COLORS from "../../constants/colors";
import Page from "../../components/Page";
import Pdf from "../../components/Pdf";

const Container = styled.div``;

const Shops = () => {
  return (
    <Container>
      <Page>
        <Page.Title>Pdf</Page.Title>
        <Pdf />
      </Page>
    </Container>
  );
};

export default Shops;
