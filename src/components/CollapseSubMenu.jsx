import React, { useState } from "react";
import { Collapse } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
export default function CollapseSubMenu(props) {
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <Nav.Link
        onClick={() => setOpen(!open)}
        aria-controls="nav-dropdown"
        aria-expanded={open}
      >
        <FontAwesomeIcon icon={props.mainIcon} className="mr-2" />
        {props.title}
        <FontAwesomeIcon
          icon={open ? faCaretUp : faCaretDown}
          className="ml-2"
        />
      </Nav.Link>
      <Nav
        className={open ? "flex-column" : "flex-column d-none"}
        id="nav-dropdown"
      >
        {props.data.map((option, index) => (
          <Nav.Item key={`${props.title}${index}`} className="ml-3">
            <Nav.Link>{option}</Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
    </React.Fragment>
  );
}
