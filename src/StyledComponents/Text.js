import styled, { StyledFunction } from "styled-components";

const uiSize = {
  xl: 28,
  l: 24,
  m: 18,
  s: 14,
  xs: 12
};

const div: StyledFunction<PropType & React.HTMLProps<HTMLDivElement>> =
  styled.div;

export default div`
  font-size: ${(props: any) =>
    props.uiSize ? uiSize[props.uiSize] : uiSize["s"]}px;
  letter-spacing: -0.27px;
  // font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: ${(props: any) => (props.header ? "500" : "100")};
  line-height: calc(${(props: any) =>
    props.uiSize ? uiSize[props.uiSize] : uiSize["s"]}px + 3px);
  align-self: center; 
  text-overflow: ellipsis;
  white-spacing:no-wrap;
  opacity: 0.8;
  text-align: ${(props: any) => (props.textAlign ? props.textAlign : "")}
`;
