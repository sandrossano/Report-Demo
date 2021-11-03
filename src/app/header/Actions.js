import React, { useState } from "react";
import styled from "styled-components";

import COLORS from "../../constants/colors";
import Search from "../../components/Search";
import Icon from "../../components/Icon";
import Notification from "../../components/Notification";
import Avatar from "../../components/Avatar";

const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 10px;
  align-items: center;
`;

const AvatarText = styled.div`
  font-size: 13px;
  margin-left: -5px;
  color: ${COLORS.black};
`;

const Actions = () => {
  const [searchText, setSearchText] = useState("");
  const [isNotificationVisible, setIsNotificationVisible] = useState(true);

  return (
    <Container>
      <Search value={searchText} onChange={text => setSearchText(text)} />
      <Notification
        isVisible={isNotificationVisible}
        onClick={() => setIsNotificationVisible(!isNotificationVisible)}
      >
        <Icon
          icon="appointment-reminders"
          type="ios-filled"
          size={20}
          color={COLORS.grayLight}
        />
      </Notification>
      <Avatar
        size={40}
        url="https://www.pinclipart.com/picdir/middle/379-3797946_software-developer-computer-servers-web-others-web-developer.png"
      />
      <AvatarText>Jack Ruswell</AvatarText>
    </Container>
  );
};

export default Actions;
