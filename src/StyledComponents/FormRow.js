import styled, { StyledFunction } from "styled-components";

const div: StyledFunction<PropType & React.HTMLProps<HTMLDivElement>> =
  styled.div;

export default div`
    display: flex;
    padding: 5px 0;
    padding-top:${(props: PropType) => (props.noTopPadding ? "0" : "")};
    padding-bottom: ${(props: PropType) => (props.noPadding ? "0" : "15px")};
    align-items: ${(props: PropType) => {
      if (props.alignTop) {
        return "flex-start";
      } else {
        return "center";
      }
    }};
    justify-content: ${(props: PropType) => {
      if (props.center) {
        return "center";
      } else {
        return "";
      }
    }};
`;
