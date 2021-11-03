import React from "react";
import styled from "styled-components";
import COLORS from "../../constants/colors";

const GridContainer = styled.div`
  display: grid;

  ${({ gap, columns, rows, areas }) => `
    grid-gap: ${gap};
    grid-template-columns: ${columns};
    grid-template-rows: ${rows};
    grid-template-areas: ${areas};
  `}
`;

const Grid = ({
  children,
  gap = "10px",
  columns = "",
  rows = "",
  areas = "",
  ...props
}) => {
  return (
    <GridContainer
      gap={gap}
      columns={columns}
      rows={rows}
      areas={areas}
      {...props}
    >
      {children}
    </GridContainer>
  );
};

export default Grid;
