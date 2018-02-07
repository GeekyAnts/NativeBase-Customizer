import styled, { StyledFunction } from "styled-components";
import COLOR from "./COLOR";
import * as React from "react";

const input: StyledFunction<PropType & React.HTMLProps<HTMLInputElement>> =
  styled.input;

const Slider = input`
  width: 100%;
  background: ${COLOR[100]};
  display: flex;
    -webkit-appearance: media-enter-fullscreen-button;
    // border: 1px solid transparent;
::-webkit-slider-runnable-track {
    width: 100%;
    height: 4px;
    background: ${COLOR[100]};
    border: none;
    border-radius: 4px;
}
::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: none;
    height: 14px;
    width: 14px;
    border-radius: 50%;
    background: #6db098;
    margin-top: -5px;
}
:disabled::-webkit-slider-thumb,
:disabled::-webkit-slider-thumb:hover,
:disabled::-webkit-slider-thumb:focus {
  background: #6db098;
}
::-webkit-slider-thumb:hover,
::-webkit-slider-thumb:focus {
  -webkit-appearance: none;
  border: none;
  height: 14px;
  width: 14px;
  border-radius: 50%;
  background: #6db098;
}
:focus {
    outline: none;
}
:focus::-webkit-slider-runnable-track {
    background: ${COLOR[100]};
}



`;

interface WrapperPropType extends PropType {
  disabled?: boolean;
}

export default class extends React.Component<WrapperPropType, any> {
  render() {
    return <Slider type="range" {...this.props} />;
  }
}
