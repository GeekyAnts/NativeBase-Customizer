import styled, { StyledFunction } from "styled-components";
import COLOR from "./COLOR";


const div: StyledFunction<PropType & React.HTMLProps<HTMLDivElement>> =
  styled.div;

export default div`
  display: flex;
  flex-wrap:${(props: any) => (props.flexWrap ? "wrap" : "nowrap")};  
  width: 100%;
  flex: 1;
  border-radius: 3px;
  justify-content:${(props: PropType) => {
    if (props.contentRight) return "flex-end";
    if (props.contentLeft) return "flex-start";
    else return "center";
  }};
`;
