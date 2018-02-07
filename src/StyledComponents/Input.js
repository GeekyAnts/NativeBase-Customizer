import styled, { StyledFunction } from "styled-components";
import COLOR from "./COLOR";

const uiSize = {
  l: 35,
  s: 22
};
const input: StyledFunction<PropType & React.HTMLProps<HTMLInputElement>> =
  styled.input;

export default input`

  background: ${(props: PropType) =>
    props.uiBackground ? COLOR[props.uiBackground] : COLOR[300]};
  color: ${COLOR[50]};
  border: none; /*1px solid ${COLOR[900]};*/
  border-radius: 2px;
  height: ${(props: any) =>
    props.uiSize ? uiSize[props.uiSize] : uiSize["s"]}px;
  width: 100%;
  font-size: ${(props: any) => (props.uiSize === "s" ? 11 : 14)}px;
  padding: 5px;
  outline: none;
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.5);
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-input-placeholder {
    color: ${COLOR[400]};
    font-size: ${(props: any) => (props.uiSize === "s" ? 11 : 14)}px;
  }
`;
