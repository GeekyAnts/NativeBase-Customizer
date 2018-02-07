import styled, { StyledFunction } from "styled-components";
import COLOR from "./COLOR";

const div: StyledFunction<PropType & React.HTMLProps<HTMLDivElement>> =
  styled.div;

export default div`
  background: ${(props: PropType) =>
    props.uiBackground ? COLOR[props.uiBackground] : "rgba(255,255,255,1)"};
  color: #000;
  width: 670px;
  height: 320px;
  border-radius: 5px;
  align-items: center;
  display: flex;
  position: relative;
`;
