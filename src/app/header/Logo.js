import React from "react";
import styled from "styled-components";

const Image = styled.img`
  height: 80%;
`;

const Logo = () => {
  const url =
    "https://www.mastercard.sk/content/dam/mccom/global/logos/logo-mastercard-mobile.svg";
  return <Image src={url} />;
};

export default Logo;
