import React from "react";
import styled from "styled-components";
import COLORS from "../constants/colors";

const Dot = styled.div`
  width: 10px;
  height: 10px;
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: ${COLORS.red};
  border-radius: 999px;
`;

const Container = styled.div`
  position: relative;
  cursor: pointer;
`;

const Notification = ({ children, isVisible, ...props }) => {
  return (
    <Container {...props}>
      {children}
      {isVisible ? <Dot /> : null}
    </Container>
  );
};

export default Notification;
