import React from "react";
import styled from "styled-components";
import COLORS from "../../constants/colors";
import CenteredTile from "../CenteredTile";

import Card from "./index";
import Icon from "../Icon";
import InfoText from "../InfoText";

const InfoCard = ({ title, number, icon, color, ...props }) => {
  const style = {
    borderBottom: "4px solid" + color
  };
  return (
    <Card.Centered {...props} style={style}>
      <Icon size={40} icon={icon} color={color} type="ios-filled" />
      <InfoText style={{ marginLeft: "30px" }}>
        <InfoText.Info>{title}</InfoText.Info>
        <InfoText.Title>{number}</InfoText.Title>
      </InfoText>
    </Card.Centered>
  );
};

export default InfoCard;
