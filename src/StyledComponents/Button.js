import styled, { StyledFunction } from "styled-components";
import * as React from "react";

const button: StyledFunction<PropType & React.HTMLProps<HTMLButtonElement>> =
  styled.button;

export default button`
  border: ${(props: PropType) => {
    if (props.transparent) {
      return "none";
    } else {
      return "none";
    }
  }};
  height: ${(props: PropType) => (props.height ? props.height : "35px")};
  width: ${(props: PropType) => (props.width ? props.width : "47px")};
  background: #3f3b5a;
  color: #FFF;
  border-radius: 3px
  
`;
