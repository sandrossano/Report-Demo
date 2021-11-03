import React, { useRef } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Nav, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faShoppingBasket,
  faCalendar,
  faClipboardCheck
} from "@fortawesome/free-solid-svg-icons";
import CollapseSubMenu from "./CollapseSubMenu";

export let SideBar = () => {
  return (
    <Nav className="sidebar-sticky flex-column text-left">
      <Nav.Item>
        <Nav.Link tag={Link} to={"/"}>
          <FontAwesomeIcon icon="home" className="mr-2" />
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <CollapseSubMenu
          mainIcon="calendar"
          title="Order Capturing"
          data={["Option1", "Option2", "Option3"]}
        />
      </Nav.Item>
      <Nav.Item>
        <CollapseSubMenu
          mainIcon="coffee"
          title="Order Capturing1"
          data={["Option1", "Option2"]}
        />
      </Nav.Item>
      <Nav.Item>
        <Nav.Link tag={Link} to={"/"}>
          <FontAwesomeIcon icon="shopping-basket" className="mr-2" />
          Flow Planning
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link tag={Link} to={"/"}>
          <FontAwesomeIcon icon="clipboard-check" className="mr-2" />
          Order Well
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link tag={Link} to={"/"}>
          <FontAwesomeIcon icon="calendar" className="mr-2" />
          AIS
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};
