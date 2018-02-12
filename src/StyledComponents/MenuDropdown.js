import styled, { StyledFunction } from "styled-components";
import COLOR from "./COLOR";
import * as React from "react";

const ul: StyledFunction<PropType & React.HTMLProps<HTMLDivElement>> =
  styled.ul;

const Dropdown = ul`
  position: relative;
  z-index: 9;
  list-style: none;
  padding-left: 0px;

  .dd {
    left: -9999px;
    position: absolute;
    top: 24px;
    width: ${(props: PropType) => (props.uiSize ? props.uiSize : "180")}px;
    border: 1px solid ${COLOR[500]};
    margin-left: -134px;
    margin-top: 15px
  };
  ul {
    list-style: none;
    width: auto;
    left: -9999px;
    position: absolute;
    top: 24px;
    border: 1px solid ${COLOR[500]};
    box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.5);
    background: ${(props: PropType) =>
      props.transparent ? "transparent" : COLOR[100]};
    border-radius: 3px;
    -webkit-padding-start: 0;
  };
  li {
    float: left;
    position: relative;
  };
  li a {
    color: ${COLOR[200]};
    letter-spacing: -0.27px;
    font-weight: 100
    display: block;
    float: left;
    font-size: 13px;
    // padding: 4px;
    text-decoration: none;
  };
  > li > a {
    overflow: hidden;
    width: 100%
  };
  li:hover > a {
    background: ${(props: PropType) =>
      props.transparent ? "transparent" : COLOR[200]};
    color: ${COLOR[50]};
  };
  li a:focus {
    background: ${(props: PropType) =>
      props.transparent ? "transparent" : COLOR[200]};
    outline-width: 0;
  };
  li a:active + ul.dd,
  li a:focus + ul.dd,
  li ul.dd:hover {
    left: 0;
    top: 24px;
  };
  .dd li {
  border-bottom: ${(props: PropType) =>
    props.last ? "none" : "1px solid" + COLOR[300]}
  };
  .dd li a {
    width: ${(props: PropType) => (props.uiSize ? props.uiSize : "160")}px;
    margin-top: 0px;
    padding: 10px;
  };
  ul.dd li a:active + ul,
  ul.dd li a:focus + ul,
  ul.dd li ul:hover {
    left: 100%;
    top: 0%;
    width: 162px
  }
`;

const li: StyledFunction<PropType & React.HTMLProps<HTMLDivElement>> =
  styled.li;

const Option = li`
`;

const a: StyledFunction<PropType & React.HTMLProps<HTMLDivElement>> = styled.a;

const Link = a`
  flex: 1;
  display: flex;
`;

class OptionMenu extends React.Component {
  render() {
    return (
      <Link href="#" {...this.props}>
        {this.props.children}
      </Link>
    );
  }
}

const span: StyledFunction<PropType & React.HTMLProps<HTMLSpanElement>> =
  styled.span;

const OptionMenuLeft = span`
`;

const OptionMenuRight = span`;
  align-items: flex-end
`;

const OptionMenuTitle = span`
  flex: 1;;
  padding: 0 8px;
  font-size: 14px;
  color: ${COLOR[50]};
  letter-spacing: -0.27px;
  font-weight: 700;
`;

class MenuDropdown extends React.Component {
  render() {
    return (
      <Dropdown className={this.props.child ? "dd" : ""} {...this.props}>
        {this.props.children}
      </Dropdown>
    );
  }
}

export {
  MenuDropdown,
  Option,
  OptionMenu,
  OptionMenuLeft,
  OptionMenuRight,
  OptionMenuTitle
};
