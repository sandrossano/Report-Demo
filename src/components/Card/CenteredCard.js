import React from "react";
import styled from "styled-components";
import COLORS from "../../constants/colors";
import CenteredTile from "../CenteredTile";

import Card from "./index";

const CenteredCard = ({ children, ...props }) => {
  return (
    <Card {...props}>
      <CenteredTile>{children}</CenteredTile>
    </Card>
  );
};

export default CenteredCard;
