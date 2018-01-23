import styled, { StyledFunction } from "styled-components";

const div: StyledFunction<PropType & React.HTMLProps<HTMLInputElement>> =
  styled.div;

export default div`
    flex-grow: ${(props: any) => (props.uiSize ? props.uiSize : 1)};
    display: flex;
    justify-content: ${(props: PropType) => {
      if (props.contentRight) {
        return "flex-end";
      } else if (props.contentCenter) {
        return "center";
      } else {
        return "flex-start";
      }
    }};
    align-items: center
`;
