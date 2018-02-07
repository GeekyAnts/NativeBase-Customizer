import styled, { StyledFunction } from "styled-components";

const div: StyledFunction<PropType & React.HTMLProps<HTMLDivElement>> =
  styled.div;

export default div`
    display: ${(props: any) => (props.flex ? "flex" : "block")};
    width: 100%;
    flex: ${(props: any) => (props.uiSize ? props.uiSize : 1)};
    align-items: ${(props: PropType) => {
      if (props.alignTop) {
        return "flex-start";
      } else {
        return "center";
      }
    }};
    justify-content:${(props: PropType) => {
      if (props.contentLeft) {
        return "flex-start";
      } else {
        return "center";
      }
    }};
    // position:relative;
`;
