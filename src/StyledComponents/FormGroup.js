import styled, { StyledFunction } from "styled-components";

const div: StyledFunction<PropType & React.HTMLProps<HTMLDivElement>> =
  styled.div;

export default div`
    display: flex;
    flex-direction: column;
    padding: ${(props: PropType) => (props.noPadding ? "" : "20px 35px")};
    padding-top: ${(props: PropType) => (props.paddingTop ? "12px" : "auto")};
    padding-bottom: ${(props: PropType) =>
      props.paddingBottom ? "12px" : "auto"};
    flex-grow:1;
    border-bottom: ${(props: PropType) =>
      props.noBorder ? "none" : "1px solid #12111b"};
`;
