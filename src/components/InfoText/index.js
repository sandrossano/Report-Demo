import React from "react";
import styled from "styled-components";
import COLORS from "../../constants/colors";

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 15px;
`;

const Info = styled.div`
  color: ${COLORS.grayLight};
  font-size: 12px;
`;

const InfoText = ({ children, ...props }) => {
  return <TextContainer {...props}>{children}</TextContainer>;
};

InfoText.Title = Title;
InfoText.Info = Info;

export default InfoText;
