import styled, { StyledFunction } from "styled-components";
import COLOR from "./COLOR";

const div: StyledFunction<PropType & React.HTMLProps<HTMLInputElement>> =
  styled.div;

export default div`
  flex: 1;
  align-items: center;
  background: ${(props: PropType) =>
    props.uiBackground ? COLOR[props.uiBackground] : "transparent"};
  padding: 25px;
  padding-bottom: 0px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -o-user-select: none;
`;
