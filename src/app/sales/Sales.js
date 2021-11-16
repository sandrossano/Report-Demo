import React from "react";
import styled from "styled-components";

import COLORS from "../../constants/colors";
import Page from "../../components/Page";
import Sales from "../../components/Sales";

const Container = styled.div`
  height: 105vh;
  padding-bottom: 250px;
`;

const Settings = () => {
  return (
    <Container>
      <Page>
        {/*<Page.Title>Settings</Page.Title>*/}
        <Sales />
      </Page>
    </Container>
  );
};

export default Settings;
