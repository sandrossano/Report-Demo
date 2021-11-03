import React from "react";
import styled from "styled-components";
import COLORS from "../../constants/colors";

import Title from "./Title";

const PageContainer = styled.div`
  padding: 0 40px;
`;

const Page = ({ children }) => {
  return <PageContainer>{children}</PageContainer>;
};

Page.Title = Title;

export default Page;
