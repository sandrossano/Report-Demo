import React, { useState } from "react";
import styled from "styled-components";
import COLORS from "../constants/colors";
import Icon from "./Icon";

const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  position: relative;
  align-items: center;
`;

const Input = styled.input`
  background-color: transparent;
  border: 1px solid ${COLORS.black};
  padding: 5px 10px;
  border-radius: 999px;
  width: 150px;

  :focus {
    outline: 0;
    border-color: ${COLORS.main};

    ::placeholder {
      color: ${COLORS.main};
    }
  }
`;

const Search = ({ value, onChange }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Container>
      <Input
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder="Search"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <Icon
        size={16}
        icon="search"
        style={{ position: "absolute", right: "10px" }}
        color={isFocused ? COLORS.main : COLORS.black}
      />
    </Container>
  );
};

export default Search;
