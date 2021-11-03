import React from "react";
import styled from "styled-components";
import COLORS from "../../constants/colors";
import Page from "../../components/Page";
import Pdf2 from "../../components/Pdf";

const Container = styled.div``;

const Pdf = () => {
  return (
    <Container fluid style={{ overflow: "scroll" }}>
      <Page>
        <Page.Title>Pdf</Page.Title>
        <Pdf2 />
      </Page>
    </Container>
  );
};

export default Pdf;
