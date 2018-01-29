import styled, { StyledFunction } from "styled-components";
import COLOR from "../COLOR";

const div: StyledFunction<PropType & React.HTMLProps<HTMLDivElement>> =
  styled.div;

const ColorPickerBox = div`
  background: ${(props: PropType) =>
    props.uiBackground ? COLOR[props.uiBackground] : COLOR[300]};
  height: 23px;
  border: 3px solid ${COLOR[300]};
  border-radius: 2px;
  width: 40px;
  position: relative;
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.5);
  float: ${(props: PropType) => (props.alignRight ? "right" : "none")};
`;

const ColorPickerContainer = div`
  position: absolute;
  z-index: 99;
  right: ${(props: PropType) => (props.position === "right" ? -3 + "px" : "")};
  left: ${(props: PropType) => (props.position === "left" ? -3 + "px" : "")};
`;

export { ColorPickerBox, ColorPickerContainer };
