import React from "react";
import styled from "styled-components";
import COLORS from "../../constants/colors";

import CenteredCard from "./CenteredCard";
import InfoCard from "./InfoCard";

const CardContainer = styled.div`
  background-color: ${COLORS.white};
  height: 100%;
  box-sizing: border-box;
  padding: 10px;
  margin-top: 20px;
`;

const Card = ({ children, ...props }) => {
  return <CardContainer {...props}>{children}</CardContainer>;
};

Card.Centered = CenteredCard;
Card.Info = InfoCard;

export default Card;
