import React from "react";
import styled from "styled-components";
import COLORS from "../../constants/colors";

const Title = styled.h3`
  color: ${COLORS.black};
  font-weight: 400;
`;

export default ({ children, ...props }) => {
  return <Title {...props}>{children.toUpperCase()}</Title>;
};
