import React, { useRef } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { ListGroup } from "react-bootstrap";

export let SideBar = () => {
  let ref = useRef();
  let handleDropdown = () => {
    let classList = ref.current.classList;
    if (classList.contains("d-none")) {
      ref.current.classList.toggle("d-none", false);
    } else {
      ref.current.classList.toggle("d-none", true);
    }
  };
  return (
    <Router>
      <ListGroup className="my-2" variant="flush">
        <ListGroup.Item className="text-left">
          <Link to="/">Home</Link>
        </ListGroup.Item>
        <ListGroup.Item
          action
          onClick={() => handleDropdown()}
          className="text-left"
        >
          Features
        </ListGroup.Item>
        <ListGroup variant="flush" ref={ref} className="d-none">
          <ListGroup.Item className="pl-1 text-center">Bottom</ListGroup.Item>
          <ListGroup.Item className="pl-1 text-center">top</ListGroup.Item>
          <ListGroup.Item className="pl-1 text-center">
            nnkndnkdf
          </ListGroup.Item>
          <ListGroup.Item className="pl-1 text-center">
            jbnffffwfo
          </ListGroup.Item>
        </ListGroup>
        <ListGroup.Item className="text-left">Morbi leo risus</ListGroup.Item>
        <ListGroup.Item className="text-left">
          Porta ac consectetur ac
        </ListGroup.Item>
        <ListGroup.Item className="text-left">
          Vestibulum at eros
        </ListGroup.Item>
      </ListGroup>
    </Router>
  );
};
