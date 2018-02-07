import styled, { StyledFunction } from "styled-components";
import COLOR from "./COLOR";

const div: StyledFunction<PropType & React.HTMLProps<HTMLDivElement>> =
  styled.div;

export default div`
  flex: 1;
  background: ${(props: PropType) =>
    props.uiBackground ? COLOR[props.uiBackground] : "transparent"};
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -o-user-select: none;
`;
