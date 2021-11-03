import React from "react";
import styled from "styled-components";

import COLORS from "../../constants/colors";
import Page from "../../components/Page";

const Container = styled.div``;

const Settings = () => {
  return (
    <Container>
      <Page>
        <Page.Title>Settings</Page.Title>
      </Page>
    </Container>
  );
};

export default Settings;
