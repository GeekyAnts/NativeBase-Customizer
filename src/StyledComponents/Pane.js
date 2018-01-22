import styled, { StyledFunction } from "styled-components";

const div: StyledFunction<PropType & React.HTMLProps<HTMLInputElement>> =
  styled.div;

export default div`
  background: 'transparent';
  height:  ${(props: PropType) => (props.height ? props.height : "100%")};
  flex-grow:1;
  text-align: ${(props: PropType) => {
    if (props.contentCenter) {
      return "center";
    } else {
      return "left";
    }
  }};
  
`;
