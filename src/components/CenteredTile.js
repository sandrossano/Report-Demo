import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const CenteredTile = ({ children, style }) => {
  return <Container style={style}>{children}</Container>;
};

export default CenteredTile;
