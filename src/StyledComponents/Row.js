import styled, { StyledFunction } from "styled-components";

const div: StyledFunction<PropType & React.HTMLProps<HTMLInputElement>> =
  styled.div;

export default div`
  height: 100%;
  display: flex;
  flex: 1
`;
