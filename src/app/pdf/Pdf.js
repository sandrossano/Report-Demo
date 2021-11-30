import React from "react";
import styled from "styled-components";
import COLORS from "../../constants/colors";
import Page from "../../components/Page";
import Pdf from "../../components/Pdf";

const Container2 = styled.div`
  height: 105vh;
  padding-bottom: 250px;
`;
const Shops = () => {
  return (
    <Container2 style={{ overflowY: "scroll" }}>
      <Pdf />
      {/*<Page>{/*<Page.Title>Pdf</Page.Title>*</Page>*/}
    </Container2>
  );
};

export default Shops;
