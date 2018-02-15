import styled, { StyledFunction } from "styled-components";
import COLOR from "./COLOR";

const div: StyledFunction<PropType & React.HTMLProps<HTMLDivElement>> =
  styled.div;

export default div`
  background: ${(props: PropType) =>
    props.uiBackground ? COLOR[props.uiBackground] : "rgba(255,255,255,1)"};
  color: #000;
  border-radius: 5px;
  align-items: center;
  display: flex;
  position: relative;
  ${(props: PropType) => {
    if (props.uiSize === "s") {
      return "width: 600px; height: 250px";
    } else if (props.uiSize === "m") {
      return "width: 670px; height: 320px";
    } else if (props.uiSize === "l") {
      return "width: 750px; height: 430px";
    } else return "width: 670px; height: 320px";
  }}
`;
