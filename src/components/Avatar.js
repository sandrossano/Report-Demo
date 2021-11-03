import React from "react";
import styled from "styled-components";

const Image = styled.img`
  ${({ size }) => `
    width: ${size}px;
    height: ${size}px;
  `}
  border-radius: 999px;
`;

const Logo = ({ url, size }) => {
  return <Image src={url} size={size} />;
};

export default Logo;
