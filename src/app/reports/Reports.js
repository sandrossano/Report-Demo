import React from "react";
import styled from "styled-components";
import COLORS from "../../constants/colors";
import Page from "../../components/Page";
import { Container, Row, Col } from "react-bootstrap";
import MainSection from "../../components/MainSection";

const Container2 = styled.div`
  height: 105vh;
  padding-bottom: 250px;
`;

const Reports = () => {
  return (
    <Container2 fluid style={{ overflowY: "scroll" }}>
      <div style={{ padding: "0 10px" }}>
        {/*<Page.Title>Reports</Page.Title>*/}
        <MainSection />
      </div>
    </Container2>
  );
};

export default Reports;
