// import styled, { StyledFunction } from "styled-components";
// import * as React from "react";
// import COLORS from "./constants/COLORS";

// interface DropdownPropType {
//   isOpen?: boolean;
// }
// interface DropdownExpandedPropType {
//   width?: string;
//   height?: string;
//   isOpen?: boolean;
// }
// interface ItemPropType {
//   fontFamily?: string;
//   selected?: boolean;
//   highlighted?: boolean;
// }
// const select: StyledFunction<
//   DropdownPropType & React.HTMLProps<HTMLInputElement>
// > =
//   styled.select;

// export default select`
//     :hover + span {
//         visibility: visible;
//     };
//   width: 100%;
//   background: ${COLORS[600]};
//   color: ${COLORS[300]};
//   height: 22px;
//   border: none; /*1px solid ${COLORS[900]};*/
//   font-size: 11px;
//   outline: none;
//   letter-spacing: -0.27px;
//   font-weight: 100;

//   -webkit-appearance: ${(props: DropdownPropType) =>
//     props.isOpen ? "none" : ""};
//   padding-left: ${(props: DropdownPropType) => (props.isOpen ? "8px" : "")};
//   border-bottom-left-radius: ${(props: DropdownPropType) =>
//     props.isOpen ? "0px" : "2px"};
//   border-bottom-right-radius:${(props: DropdownPropType) =>
//     props.isOpen ? "0px" : "2px"};
// `;

// const div: StyledFunction<
//   DropdownExpandedPropType & React.HTMLProps<HTMLDivElement>
// > =
//   styled.div;
// const divItem: StyledFunction<ItemPropType & React.HTMLProps<HTMLDivElement>> =
//   styled.div;

// const DropdownExpanded = div`
//   position: absolute;
//   z-index: 10;
//   border-radius: 5px;
//   border: transparent;
//   width: ${(props: DropdownExpandedPropType) =>
//     props.width ? props.width : "100%"};
//   max-height: ${(props: DropdownExpandedPropType) =>
//     props.height ? props.height : "1000%"};
//   overflow: hidden;
//   background: ${COLORS[600]};
//   outline: none;
//   letter-spacing: -0.27px;
//   border-top-left-radius: ${(props: DropdownExpandedPropType) =>
//     props.isOpen ? "0px" : "2px"};
//   border-top-right-radius:${(props: DropdownExpandedPropType) =>
//     props.isOpen ? "0px" : "2px"};
// `;
// const DropdownItem = divItem`
//   // border-radius: 5px;
//   background: transparent;
//   color: ${COLORS[300]};
//   height: 24px;
//   font-size: 12px;
//   font-family: ${(props: ItemPropType) =>
//     props.fontFamily ? props.fontFamily : ""};
//   cursor: default;
//   white-space: pre;
//   text-overflow: ellipsis;
//   overflow: hidden;
//   padding: 5px;
//   background: ${(props: ItemPropType) =>
//     props.selected ? COLORS[700] : props.highlighted ? COLORS[850] : ""};
// `;

// export { DropdownExpanded, DropdownItem };

import styled, { StyledFunction } from "styled-components";
import * as React from "react";
import Icon from "./Icon";
import COLOR from "./COLOR";

interface PropType {}
const select: StyledFunction<PropType & React.HTMLProps<HTMLInputElement>> =
  styled.select;
const div: StyledFunction<PropType & React.HTMLProps<HTMLInputElement>> =
  styled.div;

const Dropdown = div`;
  background: ${COLOR[300]};
`;
const DropdownChildren = select`
width: 100%;
background: ${COLOR[300]};
color: #E0E0E0;
height: 35px;
border: 0;
border-radius: 3px;
font-size: 14px;
outline: none;
// -webkit-appearance: none;
// -moz-appearance: none;
padding: 0 5px;
box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.5);
`;

interface WrapperPropType {}

export default class extends React.Component<WrapperPropType, any> {
  render() {
    const { children, ...otherProps } = this.props;
    return (
      <Dropdown {...otherProps}>
        <DropdownChildren>{children}</DropdownChildren>
        {/* <Icon name="ios-arrow-down" /> */}
      </Dropdown>
    );
  }
}
