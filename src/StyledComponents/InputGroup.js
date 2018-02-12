import styled, { StyledFunction } from "styled-components";
import COLOR from "./COLOR";

const div: StyledFunction<PropType & React.HTMLProps<HTMLDivElement>> =
  styled.div;

export default div`
  background: ${(props: PropType) =>
    props.uiBackground ? COLOR[props.uiBackground] : "transparent"};
  display: flex;
  align-items: center;
   justify-content:center;
   width:100%;
  opacity: ${(props: PropType) => (props.disabled ? 0.5 : 1)};
  margin-left: ${(props: PropType) => (props.marginLeft ? 12 : 0)}px;
  margin-right: ${(props: PropType) => (props.marginRight ? 5 : 0)}px;
  cursor: ${(props: any) =>
    props.disabled === undefined
      ? "pointer"
      : props.disabled ? "not-allowed" : "pointer"}
`;
