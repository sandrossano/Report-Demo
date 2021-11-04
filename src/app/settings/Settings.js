import React from "react";
import styled from "styled-components";

import COLORS from "../../constants/colors";
import Page from "../../components/Page";
import Setting from "../../components/Settings";

const Container = styled.div`
  height: 105vh;
  padding-bottom: 250px;
`;

const Settings = () => {
  return (
    <Container>
      <Page>
        {/*<Page.Title>Settings</Page.Title>*/}
        <Setting />
      </Page>
    </Container>
  );
};

export default Settings;
