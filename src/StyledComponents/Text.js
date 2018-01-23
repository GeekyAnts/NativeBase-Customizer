import styled, { StyledFunction } from "styled-components";

const uiSize = {
  xl: 28,
  l: 16,
  m: 13,
  s: 12,
  xs: 11
};

const div: StyledFunction<PropType & React.HTMLProps<HTMLDivElement>> =
  styled.div;

export default div`
  font-size: ${(props: any) =>
    props.uiSize ? uiSize[props.uiSize] : uiSize["s"]}px;
  letter-spacing: -0.27px;
  // font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 100;
  line-height: calc(${(props: any) =>
    props.uiSize ? uiSize[props.uiSize] : uiSize["s"]}px + 3px);
  align-self: center; 
  text-overflow: ellipsis;
  white-spacing:no-wrap;
  text-align: ${(props: any) => (props.textAlign ? props.textAlign : "")}
`;
