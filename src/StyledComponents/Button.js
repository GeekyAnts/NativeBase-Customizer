import styled, { StyledFunction } from "styled-components";
import * as React from "react";
import COLOR from "./COLOR";

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
  display: flex;
  justify-content: center;
  height: ${(props: PropType) => (props.height ? props.height : "35px")};
  width: ${(props: PropType) => (props.width ? props.width : "47px")};
  background: ${(props: PropType) => {
    if (props.active) {
      return COLOR[100];
    } else {
      return props.uiBackground ? COLOR[props.uiBackground] : COLOR[300];
    }
  }};
  color: #FFF;
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.5);
  border-radius: ${(props: PropType) => (props.noRadius ? "0px" : "3px")};
  
  opacity: ${(props: PropType) => {
    if (props.disabled) {
      return 0.2;
    } else {
      return 1;
    }
  }};
  font-size: 15px;
  ${(props: PropType) => {
    if (props.transparent) {
      return "background: transparent; box-shadow: none;:hover {background: transparent}";
    } else if (props.leftRadius) {
      return "border-radius: 3px 0 0 3px";
    } else if (props.rightRadius) {
      return "border-radius: 0 3px 3px 0";
    }
  }}

  
`;
// :hover {
//   background: ${COLOR[500]}
// };
