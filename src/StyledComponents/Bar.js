import styled, { StyledFunction } from "styled-components";
import COLOR from "./COLOR";

const div: StyledFunction<PropType & React.HTMLProps<HTMLInputElement>> =
  styled.div;

export default div`
background: ${(props: PropType) => {
  if (props.active && props.sub) {
    return COLOR[200];
  } else if (props.active) {
    return COLOR[100];
  } else {
    return props.uiBackground ? COLOR[props.uiBackground] : "transparent";
  }
}};
  height:  ${(props: PropType) => (props.sub ? "35px" : "45px")};
  flex-grow: 1;
  text-align: ${(props: PropType) => {
    if (props.contentCenter) {
      return "center";
    } else {
      return "left";
    }
  }};
  padding-left: ${(props: PropType) => (props.sub ? "50px" : "35px")};
  padding-right: 5px;
  color: #FFF;
  opacity: 0.6;
  display: flex;
  align-items: center;
  font-weight: 100;
  text-overflow: ellipsis;
  font-size: ${(props: PropType) => (props.sub ? "13px" : "15px")};
  :hover {
    background: ${(props: PropType) => {
      if (props.active && props.sub) {
        return COLOR[200];
      } else if (props.active) {
        return COLOR[100];
      } else {
        return COLOR[500];
      }
    }};
  }
  
`;
