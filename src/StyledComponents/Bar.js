import styled, { StyledFunction } from "styled-components";

const div: StyledFunction<PropType & React.HTMLProps<HTMLInputElement>> =
  styled.div;

export default div`
  background: transparent;
  height:  45px;
  flex-grow: 1;
  text-align: ${(props: PropType) => {
    if (props.contentCenter) {
      return "center";
    } else {
      return "left";
    }
  }};
  padding-left: 35px;
  color: #FFF;
  opacity: 0.6;
  display: flex;
  align-items: center;
  font-weight: 100;
  font-size: 15px
  
`;
