import React from "react";
import styled from "styled-components";

const Image = styled.img`
  ${({ size }) => `
    width: ${size}px;
    height: ${size}px;
  `}
`;

const Icon = ({
  size = 24,
  color = "#000000",
  icon,
  type = "ios",
  style = {},
  iconSize = 100
}) => {
  const url = `https://img.icons8.com/${type}/${iconSize}/${color.replace(
    "#",
    ""
  )}/${icon}.png`;

  return <Image size={size} src={url} style={style} />;
};

export default Icon;
