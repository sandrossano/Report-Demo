import React from "react";
import styled from "styled-components";

import COLORS from "../../constants/colors";
import ButtonGrid from "../../components/ButtonGrid";
import CenteredTile from "../../components/CenteredTile";
import Icon from "../../components/Icon";
import { useHistory } from "react-router";

const Container = styled.div`
  display: flex;
  padding: 0 40px;
  height: 72px;
  background-color: #fff;
  align-items: stretch;
`;

const NavigationItem = styled.div`
  flex: 1;
  font-size: 10px;
  color: ${COLORS.black};
  cursor: pointer;

  :hover {
    background-color: ${COLORS.main};
    color: ${COLORS.white};
  }

  ${({ isSelected }) =>
    /*isSelected
      ? `background-color: ${COLORS.main}; color: ${COLORS.white}`
  : ""};*/
    isSelected ? `` : ""};
`;

const items = [
  { title: "Dashboard", icon: "dashboard", link: "/" },
  { title: "Pdf", icon: "pdf", link: "/pdf" },
  //{ title: "Pdf", icon: "shopping-cart-loaded", link: "/pdf" },
  { title: "Product", icon: "bullish", link: "/product" },
  { title: "Sales", icon: "briefcase", link: "/sales" },
  { title: "Reports", icon: "presentation", link: "/reports" },
  { title: "Settings", icon: "settings", link: "/settings" }
];

const Navigation = () => {
  const history = useHistory();

  return (
    <Container>
      <ButtonGrid
        items={items}
        renderItem={({ item, isSelected, select }) => {
          return (
            <NavigationItem
              isSelected={isSelected}
              onClick={() => {
                select();
                history.push(item.link);
              }}
            >
              <CenteredTile style={{ flexDirection: "column" }}>
                <Icon
                  size={32}
                  icon={item.icon}
                  style={{ marginBottom: "5px" }}
                  color={isSelected ? COLORS.white : COLORS.black}
                  type="color"
                />
                {item.title.toUpperCase()}
              </CenteredTile>
            </NavigationItem>
          );
        }}
      />
    </Container>
  );
};

export default Navigation;
